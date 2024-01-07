import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  # this is my first and testing api
  # for this test-api I am going to write a simple api that clients can use to fetch
  # employee's information. For that I need to define employee type which can be done
  # as:

  type Employee {
    name: String
    id: Int
    salary: Int
  }

  # now let's define the queries that our clients can make
  # for that we need to define 'Query' type in order for our clients to be able
  # to make requests to our GraphQL API

  type Query {
    employees: [Employee]
    filterEmployeesByName(name: String): Employee
    filterEmployeesById(id: Int): Employee
  }
`;

const employees = [
  { name: "John Doe", id: 1, salary: 35000 },
  { name: "Shawn Larry", id: 2, salary: 45000 },
  { name: "Samuel Frank", id: 3, salary: 65000 },
];

const resolvers = {
  Query: {
    employees: () => employees,
    filterEmployeesByName: (parent, { name }) =>
      employees.find((employee) => employee.name === name) || null,
    filterEmployeesById: (parent, { id }) =>
      employees.find((employee) => employee.id === id) || null,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cache: "bounded",
});

await server.start();
server.createHandler({
  path: "/api/graphql",
});
