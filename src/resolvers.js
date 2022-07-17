const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => dataSources.JsonPlaceHolderSource.getUsers(),

        getUser: (_, { id }, { dataSources }) => dataSources.JsonPlaceHolderSource.getUser(id),
    }
}

module.exports = resolvers;