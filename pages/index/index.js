//index.js
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')

var book = new Api('book')

console.log(util)

Page({
    data: {
        motto: 'Hello World',
        books: {}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        book.all(data => {
            util.log(data)
            that.setData({
                books: data
            })
        })
    },

    getBooksAll: function (cb) {
        wx.request({
            url: util.api + "book/all",
            success: res => {
                cb(res.data)
            }
        })
    }
})
