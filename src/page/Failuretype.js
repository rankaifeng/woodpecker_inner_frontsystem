import React from 'react';
import DataTable from '../components/DataTable';
import { Form } from "antd";
import SearchBar from "../components/search";
class Failuretype extends React.Component {
    state = {
        columns: [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '故障编码',
                dataIndex: 'typecode'
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '图片',
                render: (record) => {
                    let mPicture = record.picture;
                    return <img alt="" style={{ width: '40px', height: '40px' }} src={mPicture} />;
                }
            }
        ]
    }
    handleSearch = values => {
        this.showTable.fetch(values);
    };
    handleReset = () => {
        this.showTable.fetch();
    };
    render() {
        const { columns } = this.state;
        return (
            <div className="search_content">
                <SearchBar
                    resetFields={this.handleReset}
                    handleSearch={this.handleSearch}
                    type="failure" />
                <DataTable
                    columns={columns}
                    ref={showTable => {
                        this.showTable = showTable;
                    }}
                    url="failuretypes"
                    {...this.props} />
            </div>

        )
    }
}
export default Form.create()(Failuretype);