const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getUsers: [User!]!

        getUser(id: ID!): User!
    }

    type User {
        id: ID!
        name: String
        email: String
        username: String
        address: {
            street: String
            suite: String
            city: String
            zipcode: String
            geo: {
                lat: String
                lng: String
            }
        }
        phone: String
        website: String             
        company: {
            name: String
            catchPhrase: String
            bs: String
        }
    }
`;

module.exports = typeDefs;