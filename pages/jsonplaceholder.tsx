import { NextPage } from 'next';
import { useQuery } from '../.wundergraph/generated/hooks';

const JsonPlaceholderPage: NextPage = () => {
  const users = useQuery.JspUsers();
  return (
    <div>
      <h1>JSON Placeholder</h1>
      <p>
        {JSON.stringify(users)}
        {users.response.status === 'ok' &&
          users.response.body.data.jsp_users.map((user) => {
            return (
              <div key={user.id}>
                <p>{JSON.stringify(user)}</p>
              </div>
            );
          })}
      </p>
    </div>
  );
};

export default JsonPlaceholderPage;
