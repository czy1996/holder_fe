//index.js
//获取应用实例
var app = getApp()

var util = require('../../utils/util.js')
var {Api} = require('../../utils/api.js')

import {$wuxButton} from '../../wux/components/wux'

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
    bindViewTap: function (event) {
        var target = event.currentTarget
        wx.navigateTo({
            url: `../detail/detail?id=${target.dataset.id}`
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
                    label: '扫码卖书',
                    icon: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0zOTQuNjY3LDM0MS4zMzNjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2MjEuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjcgICAgIHMxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YzNTJDNDA1LjMzMywzNDYuMTA0LDQwMC41NjMsMzQxLjMzMywzOTQuNjY3LDM0MS4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik0zMzAuNjY3LDM0MS4zMzNjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2MjEuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjcgICAgIGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjM1MkMzNDEuMzMzLDM0Ni4xMDQsMzM2LjU2MywzNDEuMzMzLDMzMC42NjcsMzQxLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTIyNCwzNDEuMzMzYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djIxLjMzM2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBzMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdWMzUyQzIzNC42NjcsMzQ2LjEwNCwyMjkuODk2LDM0MS4zMzMsMjI0LDM0MS4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik0xODEuMzMzLDM0MS4zMzNjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2MjEuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjcgICAgIGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjM1MkMxOTIsMzQ2LjEwNCwxODcuMjI5LDM0MS4zMzMsMTgxLjMzMywzNDEuMzMzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMTM4LjY2NywzNDEuMzMzYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djIxLjMzM2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YzNTJDMTQ5LjMzMywzNDYuMTA0LDE0NC41NjMsMzQxLjMzMywxMzguNjY3LDM0MS4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik00NjkuMzMzLDY0aC0zMmMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3aDMyICAgICBjMTEuNzcxLDAsMjEuMzMzLDkuNTczLDIxLjMzMywyMS4zMzN2MzJjMCw1Ljg5Niw0Ljc3MSwxMC42NjcsMTAuNjY3LDEwLjY2N2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di0zMiAgICAgQzUxMiw4My4xMzUsNDkyLjg1NCw2NCw0NjkuMzMzLDY0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMTAuNjY3LDE0OS4zMzNjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMzJjMC0xMS43Niw5LjU2My0yMS4zMzMsMjEuMzMzLTIxLjMzM2gzMiAgICAgYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdDODUuMzMzLDY4Ljc3MSw4MC41NjMsNjQsNzQuNjY3LDY0aC0zMkMxOS4xNDYsNjQsMCw4My4xMzUsMCwxMDYuNjY3djMyICAgICBDMCwxNDQuNTYzLDQuNzcxLDE0OS4zMzMsMTAuNjY3LDE0OS4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik01MDEuMzMzLDM2Mi42NjdjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2MzJjMCwxMS43Ni05LjU2MywyMS4zMzMtMjEuMzMzLDIxLjMzM2gtMzIgICAgIGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3aDMyQzQ5Mi44NTQsNDQ4LDUxMiw0MjguODY1LDUxMiw0MDUuMzMzdi0zMiAgICAgQzUxMiwzNjcuNDM4LDUwNy4yMjksMzYyLjY2Nyw1MDEuMzMzLDM2Mi42Njd6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik03NC42NjcsNDI2LjY2N2gtMzJjLTExLjc3MSwwLTIxLjMzMy05LjU3My0yMS4zMzMtMjEuMzMzdi0zMmMwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3ICAgICBDNC43NzEsMzYyLjY2NywwLDM2Ny40MzgsMCwzNzMuMzMzdjMyQzAsNDI4Ljg2NSwxOS4xNDYsNDQ4LDQyLjY2Nyw0NDhoMzJjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2NyAgICAgQzg1LjMzMyw0MzEuNDM4LDgwLjU2Myw0MjYuNjY3LDc0LjY2Nyw0MjYuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNNTAxLjMzMywyMzQuNjY3SDEwLjY2N0M0Ljc3MSwyMzQuNjY3LDAsMjM5LjQzOCwwLDI0NS4zMzNDMCwyNTEuMjI5LDQuNzcxLDI1NiwxMC42NjcsMjU2SDY0djExNy4zMzMgICAgIEM2NCwzNzkuMjI5LDY4Ljc3MSwzODQsNzQuNjY3LDM4NGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjI1NkgxMjh2NTMuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjcgICAgIGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjI1NmgyMS4zMzN2NTMuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2NyAgICAgVjI1NmgyMS4zMzN2NTMuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdzMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdWMjU2aDQyLjY2N3YxMTcuMzMzICAgICBjMCw1Ljg5Niw0Ljc3MSwxMC42NjcsMTAuNjY3LDEwLjY2N3MxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YyNTZIMzIwdjUzLjMzM2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YyNTZIMzg0djUzLjMzM2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3czEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjI1NmgyMS4zMzMgICAgIHYxMTcuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YyNTZoNTMuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjcgICAgIEM1MTIsMjM5LjQzOCw1MDcuMjI5LDIzNC42NjcsNTAxLjMzMywyMzQuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNNzQuNjY3LDEyOEM2OC43NzEsMTI4LDY0LDEzMi43NzEsNjQsMTM4LjY2N3Y2NGMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtNjRDODUuMzMzLDEzMi43NzEsODAuNTYzLDEyOCw3NC42NjcsMTI4eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMTM4LjY2NywyMTMuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42Njd2LTY0YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjcgICAgIGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N3Y2NEMxMjgsMjA4LjU2MywxMzIuNzcxLDIxMy4zMzMsMTM4LjY2NywyMTMuMzMzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMTgxLjMzMywyMTMuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42Njd2LTY0YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjcgICAgIGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N3Y2NEMxNzAuNjY3LDIwOC41NjMsMTc1LjQzOCwyMTMuMzMzLDE4MS4zMzMsMjEzLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTIyNCwyMTMuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42Njd2LTY0YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjdzLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3ICAgICB2NjRDMjEzLjMzMywyMDguNTYzLDIxOC4xMDQsMjEzLjMzMywyMjQsMjEzLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTI4OCwyMTMuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42Njd2LTY0YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjdzLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3ICAgICB2NjRDMjc3LjMzMywyMDguNTYzLDI4Mi4xMDQsMjEzLjMzMywyODgsMjEzLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTMzMC42NjcsMjEzLjMzM2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di02NGMwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3ICAgICBjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2NjRDMzIwLDIwOC41NjMsMzI0Ljc3MSwyMTMuMzMzLDMzMC42NjcsMjEzLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTM5NC42NjcsMjEzLjMzM2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di02NGMwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3UzM4NCwxMzIuNzcxLDM4NCwxMzguNjY3ICAgICB2NjRDMzg0LDIwOC41NjMsMzg4Ljc3MSwyMTMuMzMzLDM5NC42NjcsMjEzLjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCQkJPHBhdGggZD0iTTQzNy4zMzMsMjEzLjMzM2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di02NGMwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3ICAgICBjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42Njd2NjRDNDI2LjY2NywyMDguNTYzLDQzMS40MzgsMjEzLjMzMyw0MzcuMzMzLDIxMy4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",
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
