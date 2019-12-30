import mHttp from 'axios';
import { stringify } from 'query-string';
import { message } from "antd";
let apiToken = "";
const HEADER_CHART = 'application/json; charset=utf-8';
export const BASE_URL = 'http://111.9.123.177:8088/';
// export const BASE_URL = localStorage.getItem("httpUrl");
export const MAP_URL = BASE_URL.replace("8088", "8687");//瓦片地址
localStorage.setItem("wurl", MAP_URL + "map");
const http = ({ url = '', method, param = {} } = {}) => {
    apiToken = localStorage.getItem("token", "");
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${apiToken == null ? "" : apiToken}`
    }
    url === 'authenticate' ? headers["Content-Type"] = HEADER_CHART :
        headers["Accept"] = HEADER_CHART;
    return new Promise(resolve => {
        mHttp({
            method: method,
            baseURL: BASE_URL,
            headers: headers,
            url: url,
            // `params` 是即将与请求一起发送的 URL 参数
            // `data` 是作为请求主体被发送的数据
            params: method === 'GET' || method === 'DELETE' ? param : null,
            data: method === 'POST' || method === 'PUT' ? param : null,
        }).then((res) => {
            resolve(res)
        }).catch((response) => {
            if (response && (response.status === 200
                || response.status === 304 || response.status === 400)) {
                // 如果不需要除了data之外的数据，可以直接 return response.data
                return response
            } else {
                if (url === "authenticate") {
                    if (!response) {
                        let data = JSON.parse(response.request.response);
                        message.error(data.error.user_authentication[0])
                    } else {
                        message.error("连接服务器失败！");
                    }
                } else {
                    message.error("获取数据失败！");
                }
            }
        })
    });
};

// get方法
export function get(url, params = {}) {
    console.log(params);
    
    if (params == null) {
        url = `${BASE_URL}/${url}`;
        return http({
            url,
            method: 'GET',
            params
        })
    }
    const { page, perPage } = params.pagination;
    const query = {
        // sort: params.sort == null ? {} : params.sort.field,
        // order: params.sort == null ? {} : params.sort.order,
        page: page,
        per: perPage,
    };
    let headData = [];
    let headData1 = [];
    for (let i in params.filter) {
        if (params.filter.hasOwnProperty(i)) {
            if (params.filter[i] != null) {
                let nevi = "q[" + i + "]=" + params.filter[i];
                headData.push(nevi);
            }
        }
    }
    let headItem = headData.join("&");
    let sub;
    if (params.data !== null) {
        for (let i in params.data) {
            let nedi1 = i + "=" + params.data[i];
            headData1.push(nedi1);
        }
        let s = headData1.join("&");
        sub = headItem + "&" + s;
    } else {
        sub = headItem;
    }
    url = `${BASE_URL}/${url}/?${sub}&${stringify(query)}`;
    return http({
        url,
        method: 'GET',
        params
    })

}

export function post(url, param = {}) {
    return http({
        url,
        method: 'POST',
        param

    })
}

export function put(url, param = {}) {
    return http({
        url,
        method: 'PUT',
        param

    })
}