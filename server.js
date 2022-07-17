const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const JsonPlaceHolderSource = require('./src/data/source');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            JsonPlaceHolderSource: new JsonPlaceHolderSource()
        }
    }
});

server.listen(4000);