/**
 * Created by nicai on 2017/8/11.
 */
var {log, isValidISBN} = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')
var book = new Api('book')

Page({
    data: {
        isbn: ''
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
    }
});