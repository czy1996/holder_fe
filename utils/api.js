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

    get (path, callback) {
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


class User extends Api {
    constructor() {
        super('user')
    }

    getInfo(callback) {
        var path = '/getInfo'
        this.get(path, callback)
    }

    updateInfo(data, callback) {
        var path = '/updateInfo'
        this.post(path, data, callback)
    }
}

module.exports = {
    ajax: ajax,
    Api: Api,
    Order: Order,
    User: User
}