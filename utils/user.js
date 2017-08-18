let {Api} = require('api')


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
    User: User
}