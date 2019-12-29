import {fetchUtils} from 'react-admin';

import dataProvider from './dataProvider';
import addUploadFeature from "./addUploadFeature";

import {HTTP_URL} from '../utils/config';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json;charset=utf-8'});
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `${token}`);

    return fetchUtils.fetchJson(url, options);
}
//http://47.94.171.51:3000
const Provider = dataProvider(HTTP_URL, httpClient);

const uploadCapableDataProvider = addUploadFeature();

export default uploadCapableDataProvider;