var url = require('util.js').api

var ajax = function (method, path, data, callback) {
    var session_id = wx.getStorageSync('session_id');
    wx.request({
        url: path,
        data: data,
        method: method,
        header: {
            'Session_id': session_id
        },
        success: res => {
            callback(res.data)
        }
    })
}

class Api {
    constructor(path) {
        this.baseUrl = url + '/' + path
    }

    get(path, callback) {
        var url = this.baseUrl + path
        ajax('GET', url, '', function (r) {
            var data = r
            callback(data)
        })
    }

    post(path, data, callback) {
        var url = this.baseUrl + path
        data = JSON.stringify(data)
        ajax('POST', url, data, function (r) {
            var data = r
            callback(data)
        })
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

class Cart extends Api {
    constructor() {
        super('user')
    }

    add(id, callback) {
        var path = '/addCart/' + id
        this.get(path, callback)
    }

    getCart(callback) {
        var path = '/getCart'
        this.get(path, callback)
    }

    updateCart(data, callback) {
        var path = '/updateCart'
        this.post(path, data, callback)
    }

    closeCart(callback) {
        var path = '/closeCart'
        this.get(path, callback)
    }
}

class Order extends Api {
    constructor() {
        super('user')
    }

    all(callback) {
        var path = '/getOrders'
        this.get(path, callback)
    }
}

class Sells extends Api {
    constructor() {
        super('user')
    }

    add(id, callback) {
        var path = '/addSells/' + id
        this.get(path, callback)
    }

    getSells(callback) {
        var path = '/getSells'
        this.get(path, callback)
    }

    updateSells(data, callback) {
        var path = '/updateSells'
        this.post(path, data, callback)
    }

    closeSells(callback) {
        var path = '/closeSells'
        this.get(path, callback)
    }
}

class User extends Api {
    constructor() {
        super('user')
    }

    info(callback) {
        var path = '/info'
        this.get(path, callback)
    }
}

module.exports = {
    ajax: ajax,
    Api: Api,
    Cart: Cart,
    Order: Order,
    Sells: Sells,
    User: User
}