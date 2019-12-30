import React from 'react';
import DataTable from '../components/DataTable';
class Devicegroup extends React.Component {
    state = {
        columns: [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '描述',
                dataIndex: 'description'
            }
        ]
    }

    render() {
        const { columns } = this.state;
        return (
            <DataTable
                columns={columns}
                url="devicegroups"
                {...this.props} />
        )
    }
}
export default Devicegroup;