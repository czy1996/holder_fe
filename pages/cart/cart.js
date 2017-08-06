/**
 * Created by nicai on 2017/8/6.
 */
var {log} = require('../../utils/util.js')
var {Api, Cart} = require('../../utils/api.js')
var Book = new Api('book')
var cart = new Cart()
var Zan = require('../../dist/index');



Page(Object.assign({}, Zan.Quantity, {
    data: {
        quantity: {
            quantity: 10,
            min: 1,
            max: 20
        },
        books: []
    },
    onLoad: function () {
        cart.getCart(books => {
            this.setData({
                books: books
            })
        })
    },

    handleZanQuantityChange(e){
        var id = e.componentId
        var quantity = e.quantity
        this.setData({
            [`books[${id}].quantity`]: quantity
        })
    }
}))