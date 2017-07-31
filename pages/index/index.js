//index.js
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')

import { $wuxButton } from '../../wux/components/wux'

var book = new Api('book')

console.log(util)

Page({
    data: {
        motto: 'Hello World',
        books: {},
        inputShowed: false,
        inputVal: "",
        tab: {
            list: [{
                id: '1',
                title: '最新商品1'
            }, {
                id: '2',
                title: '最新商品2'
            }, {
                id: '3',
                title: '最新商品3'
            }, {
                id: '4',
                title: '最新商品4'
            }, {
                id: '5',
                title: '最新商品5'
            }, {
                id: '6',
                title: '最新商品6'
            }],
            selectedId: '1',
            scroll: true,
            height: 45
        },
        index: 3,
        opened: !1,
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
        this.initButton()
    },

    initButton(position = 'bottomRight') {
        this.setData({
            opened: !1,
        })

        this.button = $wuxButton.init('br', {
            position: position,


            buttons: [
                {
                    label: 'View on Github',
                    icon: "",
                },
                {
                    label: 'View on About',
                    icon: "",
                },
                {
                    label: 'View on Demo',
                    icon: "",
                }
            ],
            buttonClicked(index, item) {
                index === 0 && wx.showModal({
                    title: 'Thank you for your support!',
                    showCancel: !1,
                })

                index === 1 && wx.switchTab({
                    url: '/pages/about/index'
                })

                index === 2 && wx.switchTab({
                    url: '/pages/index/index'
                })

                return true
            },
            callback(vm, opened) {
                vm.setData({
                    opened,
                })
            },
        })
    },

    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
})
