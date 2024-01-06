import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

function App() {
  const query = gql`
    query {
      employees {
        name
      }
    }
  `;

  const { loading, error, data } = useQuery<{
    loading: any;
    error: any;
    data: any;
  }>(query);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  useEffect(() => {
    console.log(data);
  }, [loading]);

  return (
    <div>
      <h1>I am fetching from GraphQL</h1>
    </div>
  );
}

export default App;
