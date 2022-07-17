const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => dataSources.JsonPlaceHolderSource.getUsers(),

        getUser: (_, { id }, { dataSources }) => dataSources.JsonPlaceHolderSource.getUser(id),

        getAlbums: (_, __, { dataSources }) => dataSources.JsonPlaceHolderSource.getAlbums(),
        
        getAlbum: (_, { id }, { dataSources }) => dataSources.JsonPlaceHolderSource.getAlbum(id),
    }
}

module.exports = resolvers;