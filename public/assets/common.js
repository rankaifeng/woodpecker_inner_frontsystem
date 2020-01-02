/**
 * 追加css class
 */
function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}
/**
 * 移除css class
 */
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}


/**
 * css class切换
 * @param {*} obj 
 * @param {*} cls 
 */
function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}

/**
 * 字符串换行处理
 */
function stringDivider(str, width, spaceReplacer) {
    if (!str) {
        return '';
    }
    if (str.length > width) {
        var p = width;
        while (p > 0 && (str[p] != ' ' && str[p] != '-')) {
            p--;
        }
        if (p > 0) {
            var left;
            if (str.substring(p, p + 1) == '-') {
                left = str.substring(0, p + 1);
            } else {
                left = str.substring(0, p);
            }
            var right = str.substring(p + 1);
            return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
        }
    }
    return str;
}

/**
 * localstorage 储存对象
 * @param {*} key 
 * @param {*} obj 对象
 */
function localstorageSet(key, obj) {
    if (obj) {
        var save = JSON.stringify(obj);
        localStorage.setItem(key, save);
    }
}

/**
 * localstorage 获取对象
 * @param {*} key 
 */
function localstorageGet(key) {
    var out = null;
    if (key) {
        var data = localStorage.getItem(key);
        if (data) {
            out = JSON.parse(data);
        }
    }
    return out;
}

/**
 * 将度转换成为度分秒(返回字符串格式)
 * @param value 经纬度数值
 * @param type 0：经度，1：纬度
 * @param format 格式：ddd.dddddd°、ddd°mm.mmm′、ddd°mm′ss.ss″
 * @returns {string}
 */
var formatDegree = function(value, type, format) {
    var output = '';
    var prefixs = type == 0 ? ['西', '东'] : ['南', '北'];
    var prefix = value < 0 ? prefixs[0] : prefixs[1];
    value = Math.abs(value);
    var v1 = Math.floor(value); //度
    var v2 = Math.floor((value - v1) * 60); //分
    var v3 = ((value - v1) * 3600 % 60).toFixed(2); //秒
    switch (format) {
        case 0:
            output = prefix + value.toFixed(6) + '°';
            break;
        case 1:
            output = prefix + v1 + '°' + ((value - v1) * 60).toFixed(3) + '′';
            break;
        case 2:
            output = prefix + v1 + '°' + v2 + '′' + v3 + '″';
            break;
    }
    return output;
};

/**
 * 产生一个id
 */
var newId = function() {
    var mydate = new Date();
    var result = mydate.getFullYear().toString() + (mydate.getMonth() + 1).toString() + mydate.getDate().toString() +
        mydate.getHours().toString() + mydate.getMinutes().toString() + mydate.getSeconds().toString() + mydate.getMilliseconds().toString();
    return result;
};