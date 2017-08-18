let {Api} = require('api.js')

class Cart extends Api {
    constructor() {
        super('cart')
    }

    add(id, callback) {
        var path = '/add/' + id
        this.get(path, callback)
    }

    get_one(callback) {
        var path = '/get'
        this.get(path, callback)
    }

    update(data, callback) {
        var path = '/update'
        this.post(path, data, callback)
    }

    close(callback) {
        var path = '/close'
        this.get(path, callback)
    }
}

module.exports = {
    Cart: Cart
}