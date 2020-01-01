import React from 'react';
import { Select } from "antd";
import * as mHttpUtils from "../utils/HttpUtils";
class SelectValue extends React.Component {
    state = {
        selectArray: [],
        id: this.props.typeId
    };
    componentDidMount() {
        const { url } = this.props;


        let data = {
            pagination: { page: 0, perPage: 20 },
            data: null
        };
        mHttpUtils.get(url, data).then(result => {
            let data = result.data.rows;
            this.setState({
                selectArray: data
            });
        });
    }
    resetFields = () => {
        this.setState({ id: '' })
    }

    onChange = value => {
        this.props.onChange(value);
        this.setState({ id: value });
    };
    render() {
        const { selectArray } = this.state;
        
        return (
            <Select
                onChange={this.onChange}
                value={typeof (this.state.id) === "number" ? this.state.id : ""}
                style={{ width: "100%" }}
            >
                {selectArray.map(item => (
                    <Select.Option value={item.id} key={item.id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        );
    }
}
export default SelectValue;