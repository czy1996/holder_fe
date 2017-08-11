/**
 * Created by nicai on 2017/8/11.
 */
var {log} = require('../../utils/util.js')

Page({
    data: {
        isbn: ''
    },

    scan(){
        wx.scanCode({
            success: (res) => {
                log(res)
            },
            fail: () => {
                log('scan fail')
            }
        })
    }
});