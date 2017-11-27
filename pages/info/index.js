let {log} = require('../../utils/util.js')
let {User} = require('../../utils/user')
let user = new User()

Page({
    data: {
        'name': '姓名',
        'phone': '手机',
        'dorm': 'X-XXX',
        'qq': 'XXXXXXXXX',
    },

    onLoad: function () {
        user.getInfo(data => {
            this.setData({
                'name': data.name,
                'phone': data.phone,
                'dorm': data.dorm,
                'qq': data.QQ,
            })
        })
    },

    onShow: function () {
    },

    onSubmit: function (event) {
        let data = event.detail.value
        log(data, this.checkData(data))
        if (this.checkData(data)) {
            user.updateInfo(data, r => {
                wx.navigateBack()
            })
        } else {
            wx.showToast({
                title: '信息格式有误',
                icon: 'fail',
                duration: 2000
            })
        }
    },

    checkData: data => {
        return Boolean(data.phone && data.name && data.dorm && data.qq)
    }
});
