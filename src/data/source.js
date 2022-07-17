const { RESTDataSource } = require('apollo-datasource-rest')

class JsonPlaceHolderSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }

    getUsers() {
        return this.get('users');
    }

    getUser(id) {
        return this.get(`users/${id}`);
    }
}

module.exports = JsonPlaceHolderSource;