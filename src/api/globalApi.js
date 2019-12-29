import * as mHttpUtils from '../utils/HttpUtils'
/**
 * 登陆
 * @param params
 */
export function userLogin(params, callBack) {
    params.source = "admin";
    mHttpUtils.post("authenticate", params)
        .then((result) => {            
            localStorage.setItem('token', result.data.auth_token);
            callBack(result);
        })
}
/**
 * 获取设备信息 用于展示地图
 * @param {*} callBack 
 */
export function mapPositions(id, callBack) {
    let data = {
        pagination: { page: 0, perPage: 10 },
        filter: { devicetype_id_eq: id },
        data: {},
    }
    requestGet("devices", callBack, data);
}
/**
 * 获取设备类型
 * @param {*} callBack 
 */
export function deviceTypes(callBack) {
    requestGet("devicestatestatistics/piechart", callBack, null);
}
/**
 * 获取项目
 * @param {*} callBack 
 */
export function projects(callBack) {
    requestGet("screens/project_count", callBack, null);
}
/**
 * 施工单位
 * @param {*} callBack 
 */
export function constructions(callBack) {
    requestGet("screens/owert_count", callBack, null);
}
/**
 * 历史故障
 * @param {*} callBack 
 */
export function historyFaults(callBack) {
    requestGet("screens/brokenline", callBack, null);
}
/**
 * 告警中心
 * @param {*} callBack 
 */
export function alarmCenter(callBack) {
    requestGet("alarms", callBack, null);
}
/**
 * 维护单位
 * @param {*} callBack 
 */
export function maintenance(callBack) {
    requestGet("screens/maintainer_count", callBack, null)
}
/**
 * 厂家
 * @param {*} callBack 
 */
export function manufacturer(callBack) {
    requestGet("screens/manufacturer_count", callBack, null);
}
/**
 * 故障类型
 * @param {*} callBack 
 */
export function faultTypes(callBack) {
    requestGet("screens/failure_type", callBack, null);
}
/**
 * 重点区域
 * @param {} callBack 
 */
export function keyAreasData(callBack) {
    requestGet("screens/position_count", callBack, null);
}

export function rProjects(callBack, params) {
    requestGet("projectcases", callBack, params);
}
export function rDevicegroups(callBack, params) {
    requestGet("devicegroups", callBack, params);
}
/**
 * 适用于所用的无参git请求
 * @param {*} url 
 * @param {*} callBack 
 */
function requestGet(url, callBack, params) {
    mHttpUtils.get(url, params).then((result => {
        callBack(result);
    }))
}