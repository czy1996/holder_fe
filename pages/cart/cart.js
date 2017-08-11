/**
 * Created by nicai on 2017/8/6.
 */
var {log} = require('../../utils/util.js')
var {Api, Cart} = require('../../utils/api.js')
var Book = new Api('book')
var cart = new Cart()
var Zan = require('../../dist/index');


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
        cart.getCart(books => {
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
        cart.updateCart(data, data => {
            log(data)
        })
    },

    handleZanQuantityChange(e){
        var id = e.componentId
        var quantity = e.quantity
        this.setData({
            [`books[${id}].quantity`]: quantity
        })
    },

    submitOrder(e) {
        this.updateCart()
        var books = this.data.books
        for (var i = 0; i < books.length; i++) {
            books[i].quantity = 0
        }
        cart.closeCart(data => {
            log('close', data)
            wx.redirectTo({
                url: '/pages/history/history'
            })
        })
    }
}))