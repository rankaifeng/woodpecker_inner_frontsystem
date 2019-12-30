import React, { Component } from 'react'
import * as mHttpUtils from '../utils/HttpUtils'
import { Select } from 'antd';
const { Option } = Select;
export default class MenuSelect extends Component {
    state = {
        data: [],
        value: this.props.type
    };
    componentDidMount() {
        this.requestSelects();
    }
    setDefaultValue = (name) => {
        this.setState({ value: name });
    }
    requestSelects = () => {
        const { url } = this.props;
        let newData = [];
        let data = {
            pagination: { page: 0, perPage: 20 },
            data: null
        }
        mHttpUtils.get(url, data).then((result => {
            let data = url === 'screens/failure_type' ? result.data
                : result.data.rows;
            let item = {};
            item.name = this.props.type;
            item.id = "";
            newData.push(item);
            for (let i = 0; i < data.length; i++) {
                newData.push(data[i]);
            }
            this.setState({ data: newData });
        }))
    }
    onChange = (value) => {
        this.setState({ value: value });
        // this.props.handleChange(this.returnId(value), this.props.type);
    }
    returnId(value) {
        const { url } = this.props;
        const { data } = this.state;
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === value) {
                return url === 'screens/failure_type' ?
                    data[i].typecode : data[i].id;
            }
        }
        return null;
    }
    render() {
        const { type } = this.props;
        return (
            <Select placeholder="请选择">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
            </Select>
        )
    }
}
