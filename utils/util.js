function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

var log = console.log.bind(console)

var localApi = 'http://localhost:5000'
var testApi = 'http://123.206.65.14:5000'

module.exports = {
    formatTime: formatTime,
    log: log,
    api: testApi
}
