/**
 * Created by nicai on 2017/8/2.
 */
//
var {log} = require('../../utils/util.js')
var {Api, Sells} = require('../../utils/api.js')
var book = new Api('book')
var sells = new Sells()


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
