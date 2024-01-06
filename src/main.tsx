import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createHttpLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: "/api/graphql" }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
