import { gql } from "apollo-server-micro";
import data from "data.json";

export const typeDefs = gql`
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

console.log(data.employees);

export const resolvers = {
  Query: {
    employees: () => data.employees,
    filterEmployeesByName: (parent, { name }) =>
      data.employees.find((employee) => employee.name === name) || null,
    filterEmployeesById: (parent, { id }) =>
      data.employees.find((employee) => employee.id === id) || null,
  },
};
