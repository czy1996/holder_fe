/**
 * Created by nicai on 2017/8/2.
 */
//
var util = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')
var Book = new Api('book')

Page({
    data: {
        logs: [],
        book: {}
    },
    onLoad: function (query) {
        util.log(query.id)
        var id = query.id
        Book.getById(id, data => {
            this.setData({book: data})
        })
    }
})
