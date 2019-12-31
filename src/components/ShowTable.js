import React from 'react';
import { Table } from 'antd';
const ShowTable = (props) => {
    const { columns, dataSource, loading} = props;
    return (
        <Table
            bordered
            loading={loading}
            rowKey={record => record.id}
            pagination={false}
            columns={columns}
            dataSource={dataSource}
        />
    )
}
export default ShowTable;