/**
 * Created by nicai on 2017/8/11.
 */
var {log, isValidISBN} = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')
let {Sell} = require('../../utils/sell')
var book = new Api('book')
var sells = new Sell()
var Zan = require('../../dist/index')

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


    scan(){
        wx.scanCode({
            success: (res) => {
                log(res)
                if (res.scanType == "EAN_13" && isValidISBN(res.result)) {
                    book.add({
                        'isbn': res.result
                    }, data => {
                        log(data)
                        wx.redirectTo({
                            url: '/pages/sell/sell' + `?id=${data.id}`
                        })
                    })

                }
            },
            fail: () => {
                log('scan fail')
            }
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

    handleZanQuantityChange(e){
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