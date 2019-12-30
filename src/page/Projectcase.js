import React from 'react';
import DataTable from '../components/DataTable';
class Projectcase extends React.Component {
    state = {
        columns: [
            {
                title: '项目名称',
                dataIndex: 'name'
            },
            {
                title: '租期开始时间',
                dataIndex: 'beginlent'
            },
            {
                title: '租期结束时间',
                dataIndex: 'endlent'
            },
            {
                title: '维护开始时间',
                dataIndex: 'beginmaintain'
            },
            {
                title: '维护结束时间',
                dataIndex: 'endmaintain'
            },
            {
                title: '质保开始时间',
                dataIndex: 'begintime'
            },
            {
                title: '质保结束时间',
                dataIndex: 'endtime'
            }
        ]
    }
    render() {
        const { columns } = this.state;
        return (
            <DataTable
                columns={columns}
                url="projectcases"
                {...this.props} />
        )
    }
}
export default Projectcase;