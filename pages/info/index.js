var {log} = require('../../utils/util.js')

Page({
    data: {},

    onLoad: function () {

    },

    onShow: function () {
    },

    onSubmit: function (event) {
        var data = event.detail.value
        log(data, this.checkData(data))
        if (this.checkData(data)) {

        }
    },

    checkData: data => {
        return Boolean(data.phone && data.name && data.dorm)
    }
});
