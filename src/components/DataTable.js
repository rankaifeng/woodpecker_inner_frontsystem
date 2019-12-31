import React from 'react'
import { Pagination, Modal, notification, Popconfirm } from 'antd';
import EditForm from './EditForm';
import * as mHttpUtils from "../utils/HttpUtils";
import ShowTable from './ShowTable';
import showImg from '../img/show.png';
import editImg from '../img/edit.png';
import delImg from '../img/del.png';
class DataTable extends React.Component {

    state = {
        pageSize: 10,
        page: 1,
        total: 0,
        data: [],
        loading: false,
        columns: [],
        currentRow: null,
        visible: false
    }
    confirm = row => {
        mHttpUtils.del(this.props.url + `/${row.id}`)
            .then(result => {
                notification["success"]({
                    message: '操作提示',
                    description: result.data.message,
                });
                this.fetch();
            })
    }
    componentDidMount() {
        const { columns, url } = this.props;
        if (url === 'devices') {
            let item = {
                title: '操作',
                render: (text, row, index) => {
                    return <div className="action">
                        <img alt="" src={showImg} />
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
            columns.push(item)
        }
        this.setState({ columns: columns });
        this.fetch();
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
    pageChange = (page, pageSize) => {
        this.setState({ page: page, pageSize: pageSize }, () => {
            this.fetch();
        });
    }
    fetch = (params = {}) => {
        const { page, pageSize } = this.state;
        const { url } = this.props;
        let data = {
            pagination: { page: page, perPage: pageSize },
            filter: params,
            data: {},
        }
        this.setState({ loading: true });
        mHttpUtils.get(url, data).then(result => {
            this.setState({
                loading: false,
                data: result.data.rows,
                total: result.data.total
            })
        })
    };

    // 提交
    handleSubmit = (id, e) => {
        // e.preventDefault();
        this.formRef.props.form.validateFields((err, values) => {
            if (!err) {
                mHttpUtils.put(this.props.url + `/${id}`, values)
                    .then(result => {
                        notification["success"]({
                            message: '操作提示',
                            description: result.data.message,
                        });
                        this.setState({ visible: false });
                        this.fetch();
                    })
            }
        });
    };
    render() {
        const { pageSize, page, total, data, loading, columns } = this.state;

        return (
            <div>
                <ShowTable
                    loading={loading}
                    dataSource={data}
                    columns={columns} />
                <Pagination
                    pageSize={pageSize}
                    current={page}
                    onChange={this.pageChange}
                    total={total} />

                <Modal
                    title="编辑信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}>
                    <EditForm
                        data={this.state.currentRow}
                        visible={this.state.visible}
                        wrappedComponentRef={form => (this.formRef = form)}
                        handleSubmit={this.handleSubmit} />
                </Modal>
            </div>
        )
    }
}
export default DataTable;