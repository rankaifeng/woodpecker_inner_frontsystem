import React from 'react';

import DataTable from '../components/DataTable';
class Rentalcost extends React.Component {
    state = {
        columns: [
            {
                title: '项目',
                dataIndex: 'projectcase_name'
            },
            {
                title: '租赁价格',
                dataIndex: 'money'
            },
            {
                title: '开始时间',
                dataIndex: 'beginlent'
            },
            {
                title: '结束时间',
                dataIndex: 'endlent'
            }
        ]
    }
    render() {
        const { columns } = this.state;
        return (
            <DataTable
                columns={columns}
                url="leasemanagements"
                {...this.props} />
        )
    }
}
export default Rentalcost;