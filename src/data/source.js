const { RESTDataSource } = require('apollo-datasource-rest')

class JsonPlaceHolderSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    getTodos() {
        return this.get('todos');
    }

    getTodo(id) {
        return this.get(`todos/${id}`);
    }

    getAlbums() {
        return this.get('albums');
    }

    getAlbum(id) {
        return this.get(`albums/${id}`);
    }
}

module.exports = JsonPlaceHolderSource;