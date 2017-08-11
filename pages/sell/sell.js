/**
 * Created by nicai on 2017/8/2.
 */
//
var {log} = require('../../utils/util.js')
var {Api, Cart} = require('../../utils/api.js')
var book = new Api('book')
var cart = new Cart()


Page({
    data: {
        logs: [],
        book: {}
    },
    onLoad: function (query) {
        log(query.id)
        var id = query.id
        book.getById(id, data => {
            this.setData({book: data})
        })
    },


    sellNow: function () {
        cart.add(this.data.book.id, data => {
            if (data) {
                wx.redirectTo({
                    url: '/pages/cart/cart'
                })
            }
        })
    }
})
