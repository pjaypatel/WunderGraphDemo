import {
	FakeWeatherResponse,
	JspUsersResponse,
	PastLaunchesResponse,
	ProtectedWeatherInput,
	ProtectedWeatherResponse,
	WeatherInput,
	WeatherResponse,
} from "./models";

export interface appMockConfig {
	queries?: {
		FakeWeather?: () => FakeWeatherResponse | undefined;
		JspUsers?: () => JspUsersResponse | undefined;
		PastLaunches?: () => PastLaunchesResponse | undefined;
		ProtectedWeather?: (input: ProtectedWeatherInput) => ProtectedWeatherResponse | undefined;
		Weather?: (input: WeatherInput) => WeatherResponse | undefined;
	};
	mutations?: {};
	subscriptions?: {};
}

export const appMock = (config: appMockConfig) => {
	return {
		queries: config.queries as { [name: string]: (input: Object) => Object | undefined },
		mutations: config.mutations as { [name: string]: (input: Object) => Object | undefined },
		subscriptions: config.subscriptions as {
			[name: string]: { pollingIntervalMillis: number; resolver: (input: Object) => Object | undefined };
		},
	};
};
