const { gql } = require('apollo-server');

const typeDefs = gql`
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

    type Query {
        getUsers: [User!]!

        getUser(id: ID!): User!
    }
`;

module.exports = typeDefs;