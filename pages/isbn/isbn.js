let {log, isValidISBN} = require('../../utils/util.js')
let {Book} = require('../../utils/book')
let book = new Book()

Page({
    data: {
        'isbn': '姓名',
    },


    onShow: function () {
    },

    onSubmit: function (event) {
        let data = event.detail.value
        log(data)
        if (isValidISBN(data.isbn)) {
            book.add({
                'isbn': data.isbn
            }, data => {
                log(data)
                if (data.filled) {
                    wx.redirectTo({
                        url: '/pages/sell/sell' + `?id=${data.id}`
                    })
                } else {
                    wx.showToast({
                        title: '条码有误，建议重扫',
                        icon: 'fail',
                        duration: 2000
                    })
                }
            })
        } else {
            wx.showToast({
                title: 'isbn 有误',
                icon: 'fail',
                duration: 2000
            })
        }
    }
});
