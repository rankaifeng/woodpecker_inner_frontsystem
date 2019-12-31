import React from 'react';
import { Form, Tag, Button } from 'antd';
import DataTable from '../components/DataTable';
import SearchBar from '../components/search';
class Device extends React.Component {
    state = {
        columns: [
            {
                title: '设备名',
                dataIndex: 'name'
            },
            {
                title: 'IP地址',
                dataIndex: 'ip'
            },
            {
                title: '项目',
                dataIndex: 'projectcase_name'
            },
            {
                title: '设备类型',
                dataIndex: 'devicetype_name'
            },
            {
                title: '厂家',
                dataIndex: 'manufacturer_name'
            },
            {
                title: '设备状态',
                render: (record) => {
                    let etc = record.devicestate_etc;
                    if (etc !== null && etc !== "") {
                        return <Tag color="green">
                            {
                                etc.map((item, index) => (
                                    <span key={index}>{item.name}</span>
                                ))
                            }
                        </Tag>
                    }
                    return <Tag color="green">正常</Tag>;
                }
            }
        ]
    }
    handleSearch = value => {
        console.log(value);

        this.showTable.fetch(value);
    }
    resetFields = (value) => {
        this.showTable.fetch(value);
    }
    render() {
        const { columns, searchArray } = this.state;
        return (
            <div>
                <SearchBar
                    resetFields={this.resetFields}
                    handleSearch={this.handleSearch}
                    searchArray={searchArray} />
                <Button type="primary" icon="plus">
                    新建</Button>
                <Button type="primary" icon="plus">
                    分组</Button>
                <Button type="primary" icon="user">
                    用户</Button>
                <DataTable
                    ref={(showTable) => {
                        this.showTable = showTable;
                    }}
                    columns={columns}
                    url="devices"
                    {...this.props} />
            </div>
        )
    }
}
export default Form.create()(Device);