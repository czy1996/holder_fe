let {Api} = require('api')


class Order extends Api {
    constructor() {
        super('order')
    }

    all(callback) {
        var path = '/get'
        this.get(path, callback)
    }
}

module.exports = {
    Order: Order,
}