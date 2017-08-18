/**
 * Created by nicai on 2017/8/6.
 */
let {log} = require('../../utils/util.js')
let {User} = require('../../utils/user')
let {Cart} = require('../../utils/cart')
let user = new User()
let cart = new Cart()
let Zan = require('../../dist/index')


Page(Object.assign({}, Zan.Quantity, {
    data: {
        quantity: {
            quantity: 10,
            min: 1,
            max: 20
        },
        books: []
    },
    onLoad: function () {
        cart.get_one(books => {
            this.setData({
                books: books // TODO check max
            })
        })
    },

    onUnload: function () {
        this.updateCart()
    },

    updateCart: function () {
        var books = this.data.books
        var data = {}
        for (var i = 0; i < books.length; i++) {
            data[String(books[i].id)] = books[i].quantity
        }
        cart.update(data, data => {
            log(data)
        })
    },

    handleZanQuantityChange(e) {
        var id = e.componentId
        var quantity = e.quantity
        this.setData({
            [`books[${id}].quantity`]: quantity
        })
    },

    submitOrder(e) {
        user.getInfo(data => {
            log(data, data.is_info)
            if (!data.is_info) {
                wx.navigateTo({
                    url: '/pages/info/index'
                })
            } else {
                this.updateCart()
                var books = this.data.books
                for (var i = 0; i < books.length; i++) {
                    books[i].quantity = 0
                }
                cart.close(data => {
                    log('close', data)
                    wx.redirectTo({
                        url: '/pages/history/history'
                    })
                })
            }
        })

    }
}))