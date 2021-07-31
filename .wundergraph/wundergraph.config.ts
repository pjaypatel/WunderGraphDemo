import {
  Application,
  authProviders,
  configureWunderGraphApplication,
  cors,
  introspect,
  IntrospectionPolicy,
  templates,
} from '@wundergraph/sdk';
import {
  ConfigureOperations,
  QueryConfiguration,
} from './generated/operations';
import { appMock } from './generated/mocks';
import transformApi from '@wundergraph/sdk/dist/transformations';
import linkBuilder from './generated/linkbuilder';

const spaceX = introspect.graphql({
  url: 'https://api.spacex.land/graphql/',
  source: IntrospectionPolicy.Network,
});

const weather = introspect.graphql({
  url: 'https://graphql-weather-api.herokuapp.com/',
  source: IntrospectionPolicy.Network,
});

const jsonPlaceholder = introspect.openApi({
  source: {
    kind: 'file',
    filePath: '../jsonplaceholder.v1.yaml',
  },
});

const jspTypesRenamed = transformApi.renameTypes(jsonPlaceholder, {
  from: 'User',
  to: 'JSP_User',
});

const jspFieldsRenamed = transformApi.renameFields(jspTypesRenamed, {
  typeName: 'Query',
  fromFieldName: 'users',
  toFieldName: 'jsp_users',
});

const myApplication = new Application({
  name: 'app',
  apis: [weather, spaceX, jsonPlaceholder],
});

const enableCaching = (config: QueryConfiguration): QueryConfiguration => ({
  ...config,
  caching: { ...config.caching, enable: true },
});

const enableAuthentication = (
  config: QueryConfiguration,
): QueryConfiguration => ({
  ...config,
  authentication: { ...config.authentication, required: true },
});

const operations: ConfigureOperations = {
  defaultConfig: {
    authentication: {
      required: false,
    },
  },
  queries: (config) => ({
    ...config,
    caching: {
      enable: false,
      staleWhileRevalidate: 60,
      maxAge: 60,
      public: true,
    },
    liveQuery: {
      enable: true,
      pollingIntervalSeconds: 5,
    },
  }),
  mutations: (config) => ({
    ...config,
  }),
  subscriptions: (config) => ({
    ...config,
  }),
  custom: {
    ProtectedWeather: enableAuthentication,
    PastLaunches: enableCaching,
    JspUsers: enableCaching,
  },
};

const mock = appMock({
  queries: {
    FakeWeather: () => {
      return {
        data: {
          getCityByName: {
            id: '1',
            name: 'Berlin',
            weather: {
              summary: {
                title: 'Weather for Berlin',
                description: '0°, cloudy',
              },
            },
          },
        },
      };
    },
  },
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  application: myApplication,
  codeGenerators: [
    {
      templates: [
        // use all the typescript react templates to generate a client
        templates.typescript.namespaces,
        templates.typescript.operations,
        templates.typescript.mocks,
        templates.typescript.linkBuilder,
        ...templates.typescript.react,
      ],
    },
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === 'production'
        ? ['http://localhost:3000']
        : ['http://localhost:3000'],
  },
  authentication: {
    cookieBased: {
      providers: [authProviders.demo()],
    },
  },
  mock,
  operations: operations,
  links: [
    linkBuilder
      .source('userPosts')
      .target('JSP_User', 'posts')
      .argument('userID', 'objectField', 'id')
      .build(),
    linkBuilder
      .source('postComments')
      .target('Post', 'comments')
      .argument('postID', 'objectField', 'id')
      .build(),
  ],
});
