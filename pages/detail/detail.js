/**
 * Created by nicai on 2017/8/2.
 */
//
var {log} = require('../../utils/util.js')
var {Api, Cart} = require('../../utils/api.js')
var Book = new Api('book')
var cart = new Cart()


Page({
    data: {
        logs: [],
        book: {}
    },
    onLoad: function (query) {
        log(query.id)
        var id = query.id
        Book.getById(id, data => {
            this.setData({book: data})
        })
    },

    addCart: function () {
        cart.add(this.data.book.id, (data) => {
            log('add cart', data)
            if (data) {
                log('toast', this.showZanToast)
                wx.showToast({
                    title: '已加入购物车',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
    },

    toCart: function () {
        wx.redirectTo({
            url: '/pages/cart/cart'
        })
    },

    buyNow: function () {
        cart.add(this.data.book.id, data => {
            if (data) {
                wx.redirectTo({
                    url: '/pages/cart/cart'
                })
            }
        })
    }
})
