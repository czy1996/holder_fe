let {Api} = require('api')

class Book extends Api {
    constructor() {
        super('book')
    }

    getById(id, callback) {
        var path = `/${id}`
        this.get(path, callback)
    }

    all(callback) {
        var path = '/all'
        this.get(path, callback)
    }

    delete(id, callback) {
        var path = '/delete/' + id
        this.get(path, callback)
    }

    add(data, callback) {
        var path = '/add'
        this.post(path, data, callback)
    }

    update(id, data, callback) {
        var path = '/update/' + id
        this.post(path, data, callback)
    }
}

module.exports = {
    Book: Book,
}