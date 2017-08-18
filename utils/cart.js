let {Api} = require('api.js')

class Cart extends Api {
    constructor() {
        super('cart')
    }

    add(id, callback) {
        var path = '/add/' + id
        this.get(path, callback)
    }

    getCart(callback) {
        var path = '/get'
        this.get(path, callback)
    }

    updateCart(data, callback) {
        var path = '/update'
        this.post(path, data, callback)
    }

    closeCart(callback) {
        var path = '/close'
        this.get(path, callback)
    }
}

module.exports = {
    Cart: Cart,
}