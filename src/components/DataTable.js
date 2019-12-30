import React from 'react'
import { Pagination, Button, Modal } from 'antd';
import EditForm from './EditForm';
import ShowTable from './ShowTable';
import * as globalApi from '../api/globalApi';
import showImg from '../img/show.png';
import editImg from '../img/edit.png';
import delImg from '../img/del.png';
const { confirm } = Modal;
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

    componentDidMount() {
        const { columns, url } = this.props;
        if (url === 'devices') {
            let item = {
                title: '操作',
                render: (text, row, index) => {
                    console.log(row);
                    return <div className="action">
                        <img src={showImg} />
                        <img src={editImg} onClick={() => this.handleEdit(row)} />
                        <img src={delImg} />
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
            // filter: searchData,
            data: {},
        }
        this.setState({ loading: true });
        globalApi.devices(url, data, (result) => {
            this.setState({
                loading: false,
                data: result.data.rows,
                total: result.data.total
            })
        })
    };
    // 提交
    handleSubmit = e => {
        e.preventDefault();
        let _this = this;
        this.formRef.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.setState({ visible: false });
                // // 此处应该为后台业务逻辑
                // setTimeout(() => {
                //     Modal.info({
                //         title: '点击了提交',
                //         content: (
                //             <div>
                //                 <p>当前表单内容为：</p>
                //                 <p>{JSON.stringify(values)}</p>
                //             </div>
                //         ),
                //         onOk() {
                //             // 操作完跳转到第一页
                //             const pager = { ..._this.state.pagination };
                //             pager.current = 1;
                //             _this.setState({ pagination: pager });
                //             _this.fetch(1, _this.state.pagination.pageSize);
                //             // console.log(_this.state.selectedRowKeys)
                //         }
                //     });
                // }, 500);
            }
        });
    };
    render() {
        const { pageSize, page, total, data, loading, columns } = this.state;

        return (
            <div>
                <Button type="primary" icon="plus">
                    新建</Button>
                <Button type="primary" icon="plus">
                    分组</Button>
                <Button type="primary" icon="user">
                    用户</Button>
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