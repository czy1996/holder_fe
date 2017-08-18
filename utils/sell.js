let {Api} = require('api')

class Sells extends Api {
    constructor() {
        super('sell')
    }

    add(id, callback) {
        var path = '/add/' + id
        this.get(path, callback)
    }

    getOne(callback) {
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
    Sell: Sells,
}