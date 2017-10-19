var url = require('util.js').api

var ajax = function (method, path, data, callback) {
    var session_id = wx.getStorageSync('session_id');
    wx.request({
        url: path,
        data: data,
        method: method,
        header: {
            'Session-id': session_id
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

module.exports = {
    Api: Api,
}