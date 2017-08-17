var {log} = require('../../utils/util.js')
var {User} = require('../../utils/api.js')
var user = new User()

Page({
    data: {
        'name': '姓名',
        'phone': '手机',
        'dorm': 'X-XXX'
    },

    onLoad: function () {
        user.getInfo(data => {
            this.setData({
                'name': data.name,
                'phone': data.phone,
                'dorm': data.dorm
            })
        })
    },

    onShow: function () {
    },

    onSubmit: function (event) {
        var data = event.detail.value
        log(data, this.checkData(data))
        if (this.checkData(data)) {
            user.updateInfo(data, r => {
                wx.navigateBack()
            })
        }
    },

    checkData: data => {
        return Boolean(data.phone && data.name && data.dorm)
    }
});
