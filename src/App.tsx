import "./App.css";
import { gql, useQuery } from "@apollo/client";

function App() {
  const query = gql`
    query {
      employees: {
        name,
        id,
        salary
      }
    }
  `;

  const { loading, error, data } = useQuery<{
    loading: any;
    error: any;
    data: { name: string; id: number; salary: number }[];
  }>(query);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <h1>I am fetching from GraphQL</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
