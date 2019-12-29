export function returnDays(sDate1, sDate2) {
    let dateSpan,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
}

export function getDateStr(AddDayCount) {
    let dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    let y = dd.getFullYear();
    let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
    let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

export function getNowFormatDate() {
    let date = new Date();
    let seperator1 = "-";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}

/**
 * @return {string}
 * eslint no-extend-native: ["error", { "exceptions": ["Object"] }]
 */
// Date.prototype.Format = function (formatStr) {
//     let str = formatStr;
//     let Week = ['日', '一', '二', '三', '四', '五', '六'];

//     str = str.replace(/yyyy|YYYY/, this.getFullYear());
//     str = str.replace(/yy|YY/,
//         (this.getYear() % 100) > 9 ? (this.getYear() % 100)
//             .toString() : '0' + (this.getYear() % 100));
//     let month = this.getMonth() + 1;
//     str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
//     str = str.replace(/M/g, month);

//     str = str.replace(/w|W/g, Week[this.getDay()]);

//     str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
//     str = str.replace(/d|D/g, this.getDate());

//     str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
//     str = str.replace(/h|H/g, this.getHours());
//     str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
//     str = str.replace(/m/g, this.getMinutes());

//     str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
//     str = str.replace(/s|S/g, this.getSeconds());
//     return str;
// };
