const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        first_name: String! 
        last_name: String!
        gender: String
        age: Int!
    }
    type Query {
        users: [User]
        userById(id: ID!): User
    }
    type Mutation {
        createUser(first_name: String!, last_name: String!, gender: String, age: Int!): User
        updateUser(id: ID!, first_name: String!, last_name: String!, gender: String, age: Int!): User
        deleteUser(id: ID!): User
    }
`;

module.exports = typeDefs;