import React from 'react';
import DataTable from '../components/DataTable';
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
    render() {
        const { columns } = this.state;
        return (
            <DataTable
                columns={columns}
                url="failuretypes"
                {...this.props} />
        )
    }
}
export default Failuretype;