var url = require('util.js').api

var ajax = function (method, path, data, callback) {
    wx.request({
        url: path,
        data: data,
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
    ajax: ajax,
    Api: Api,
}