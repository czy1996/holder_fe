/**
 * Created by nicai on 2017/8/2.
 */
//
let {log} = require('../../utils/util.js')
let {Book} = require('../../utils/book')
let {Cart} = require('../../utils/cart')
let book = new Book()
let cart = new Cart()


Page({
    data: {
        logs: [],
        book: {}
    },
    onLoad: function (query) {
        log(query.id)
        var id = query.id
        this.updateBook(id)

    },

    addCart: function () {
        cart.add(this.data.book.id, (data) => {
            log('add cart', data)
            if (data.success) {
                log('toast', this.showZanToast)
                wx.showToast({
                    title: '已加入购物车',
                    icon: 'success',
                    duration: 2000
                })
            } else {
                wx.showToast({
                    title: '库存不够了',
                    icon: 'fail',
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
    },

    updateBook: function (id) {
        book.getById(id, data => {
            this.setData({book: data})
        })
    }
})
