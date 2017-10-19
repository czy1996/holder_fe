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
var testApi = 'https://cupbholdit.com'
var portApi = 'http://123.206.65.14:5000'


function isValidISBN(isbn) {

    var result = false;

    if (isbn != null) {

        isbn = isbn.replace(/-/g, ""); // remove '-' symbols
        isbn = isbn.replace(/ /g, ""); // remove whiteSpace

        switch (isbn.length) {

            case 10 :
                result = isValidISBN10(isbn);
                break;
            case 13 :
                result = isValidISBN13(isbn);
                break;
        }
    }

    return result;
}

function isValidISBN10(isbn) {

    var result = false;

    // ^ - start string
    // \d - digit
    // {9} - nine
    // \d{9} - nine digits
    // (\d|X) - digit or 'X' char
    // (\d|X){1} - one digit or 'X' char
    // $ - end string
    var regex = new RegExp(/^\d{9}(\d|X){1}$/);

    if (regex.test(isbn)) {

        var sum = 0;

        /*
         * result = (isbn[0] * 1 + isbn[1] * 2 + isbn[2] * 3 + isbn[3] * 4 + ... + isbn[9] * 10) mod 11 == 0
         */
        for (var i = 0; i < 9; i++) {

            sum += isbn[i] * ( i + 1 );
        }
        sum += isbn[9] == 'X' ? 10 : isbn[9] * 10;

        result = sum % 11 == 0;
    }

    return result;
}

function isValidISBN13(isbn) {

    var result = false;

    if (!isNaN(isbn)) { // isNaN - is Not a Number, !isNaN - is a number

        var index = 0;
        var sum = 0;

        /*
         * result = (isbn[0] * 1 + isbn[1] * 3 + isbn[2] * 1 + isbn[3] * 3 + ... + isbn[12] * 1) mod 10 == 0
         */
        for (var i = 0; i < isbn.length; i++) {

            sum += isbn[i] * ( isOddNumber(index++) ? 3 : 1 );
        }

        result = sum % 10 == 0;
    }

    return result;
}

function isOddNumber(value) {

    return value % 2 != 0;
}


module.exports = {
    formatTime: formatTime,
    log: log,
    api: testApi,
    isValidISBN: isValidISBN,
}
