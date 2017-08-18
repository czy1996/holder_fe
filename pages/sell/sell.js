/**
 * Created by nicai on 2017/8/2.
 */
//
var {log} = require('../../utils/util.js')
let {Book} = require('../../utils/book')
let {Sell} = require('../../utils/sell')
var book = new Book()
var sells = new Sell()


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
        sells.add(this.data.book.id, data => {
            wx.redirectTo({
              url: '/pages/scan/scan'
            })
        })
    }
})
