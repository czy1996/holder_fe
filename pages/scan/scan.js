/**
 * Created by nicai on 2017/8/11.
 */
let {log, isValidISBN} = require('../../utils/util.js')
let {Book} = require('../../utils/book')
let {Sell} = require('../../utils/sell')
let book = new Book()
let sells = new Sell()
let Zan = require('../../dist/index')

Page(Object.assign({}, Zan.Quantity, {
    data: {
        isbn: '',
        books: []
    },

    onLoad: function () {
        sells.getOne(books => {
            this.setData({
                books: books // TODO check max
            })
        })
    },


    scan() {
        wx.scanCode({
            success: (res) => {
                log(res)
                if (res.scanType == "EAN_13" && isValidISBN(res.result)) {
                    book.add({
                        'isbn': res.result
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

                }
            },
            fail: () => {
                log('scan fail')
            }
        })
    },
    
    isbnInput() {
        wx.navigateTo({
          url: '/pages/isbn/isbn'
        })
    },

    onUnload: function () {
        this.updateSells()
    },

    updateSells: function () {
        var books = this.data.books
        var data = {}
        for (var i = 0; i < books.length; i++) {
            data[String(books[i].id)] = books[i].quantity
        }
        sells.update(data, data => {
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
        this.updateSells()
        var books = this.data.books
        for (var i = 0; i < books.length; i++) {
            books[i].quantity = 0
        }
        sells.close(data => {
            log('close', data)
            wx.redirectTo({
                url: '/pages/history/history'
            })
        })
    }
}))