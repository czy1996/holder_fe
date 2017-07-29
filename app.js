//app.js
var util = require('utils/util.js')
var testUrl = "http://localhost:5000"

App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        this.login()
    },

    login: function () {
        var self = this
        wx.login({
            success: function (res) {
                util.log(res.code)

                wx.request({
                    url: testUrl + '/login',
                    data: {
                        code: res.code,
                    },
                    success: res => {
                        util.log(res.data)
                        wx.setStorageSync('session_id', res.data.session_id);
                    }
                })

            },
            fail: function () {
                util.log('login 接口调用失败')
            }
        })
    },

    getUserInfo: function (cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: true,
                success: function (res) {
                    util.log(res)
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    },

    globalData: {
        userInfo: null
    }
})