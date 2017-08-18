/**
 * Created by nicai on 2017/8/8.
 */
var {log} = require('../../utils/util.js')
var {Order} = require('../../utils/api.js')
var order = new Order
var Zan = require('../../dist/index');


Page({
    data: {
        orders: []
    },
    onLoad: function () {
        order.all(orders => {
            log('orders', orders)
            this.setData({
                orders: orders
            })
        })
    },

    onUnload: function () {
    },


})