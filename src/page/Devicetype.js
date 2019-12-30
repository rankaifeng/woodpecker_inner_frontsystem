import React from 'react';
import DataTable from '../components/DataTable';
class Devicetype extends React.Component {
    state = {
        columns: [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '图片',
                render: (record) => {
                    let mPicture = record.picture;
                    return <img style={{ width: '40px', height: '40px' }} src={mPicture} />;
                }
            }
        ]
    }
    render() {
        const { columns } = this.state;
        return (
            <DataTable
                columns={columns}
                url="devicetypes"
                {...this.props} />
        )
    }
}
export default Devicetype;