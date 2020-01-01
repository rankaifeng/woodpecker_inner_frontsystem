import React from 'react'
import editImg from '../img/edit.png';
import delImg from '../img/del.png';
import { Popconfirm, Button, Modal, notification } from 'antd';
import EditUnit from './unit/EditUnit';
import * as mHttpUtils from "../utils/HttpUtils";
import DataTable from '../components/DataTable';
class UnitWrapped extends React.Component {
    state = {
        visible: false,
        columns: [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '联系人',
                dataIndex: 'contactperson'
            },
            {
                title: '电话',
                dataIndex: 'phone'
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '操作',
                render: (text, row, index) => {
                    return <div className="action">
                        <img alt="" src={editImg} onClick={() => this.handleEdit(row)} />
                        <Popconfirm
                            title="确认删除?"
                            onConfirm={() => this.confirm(row)}
                            okText="是"
                            cancelText="否"
                        >
                            <img alt="" src={delImg} />
                        </Popconfirm>

                    </div>
                },
            }
        ]
    }
    handleEdit = rows => {
        this.setState({ currentRow: rows, visible: true });
    }
    confirm = row => {
        mHttpUtils.del(this.props.url + `/${row.id}`)
            .then(result => {
                this.showNotification(result);
            })
    }
    // 编辑
    handleEdit(row) {
        this.setState({ currentRow: row, visible: true });
    }
    handleOk = () => {
        this.setState({ visible: false });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleSubmit = dataType => {
        this.formRef.props.form.validateFields((err, values) => {
            if (!err) {
                if (JSON.stringify(dataType) == "{}") {
                    mHttpUtils.post(this.props.url, values).then(result => {
                        this.showNotification(result);
                    })
                    return;
                }
                mHttpUtils.put(this.props.url + `/${dataType.id}`, values)
                    .then(result => {
                        this.showNotification(result);
                    })
            }
        })
    }
    showNotification = result => {
        notification["success"]({
            message: '操作提示',
            description: result.data.message,
        });
        this.setState({ visible: false });
        this.showTable.fetch();
    }
    render() {
        return <div>
            <div className="create">
                <Button type="primary"
                    onClick={() => this.handleEdit({})}
                    icon="plus">新建</Button>
            </div>
            <Modal
                title="编辑信息"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}>
                <EditUnit
                    data={this.state.currentRow}
                    visible={this.state.visible}
                    handleSubmit={this.handleSubmit}
                    wrappedComponentRef={form => (this.formRef = form)} />
            </Modal>
            <DataTable
                ref={(showTable) => {
                    this.showTable = showTable;
                }}
                type="unit"
                columns={this.state.columns}
                url={this.props.url}
                {...this.props} />
        </div>
    }
}
export default UnitWrapped;