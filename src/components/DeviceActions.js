import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Modal, Form } from 'antd';
import SelectValue from './SelectValue';
class DeviceActions extends React.Component {
    state = {
        visible: false,
    }
    handleOk = () => {
        this.setState({ visible: false });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    userDevice = () => {
        this.setState({ visible: true })
    }
    onChange = value => {
        this.setState({ id: value });
    };
    actionSubmit = url => {
        this.setState({ visible: true })
        this.props.actionSubmit(url)
    }
    render() {
        const { selectedRowKey } = this.props;
        const hasSelected = selectedRowKey != undefined ? selectedRowKey.length > 0 : 0;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 }
        };
        const formTailLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20, offset: 4 }
        };
        return (
            <div className="create">
                <Button type="primary"
                    icon="plus">新建</Button>
                <Button icon="box-plot" type="dashed"
                    disabled={!hasSelected} >分组</Button>
                <Button icon="user"
                    onClick={this.userDevice}
                    disabled={!hasSelected}>用户</Button>

                <Modal
                    title="分配用户"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    footer={null}
                    onCancel={this.handleCancel}>
                    <Form onSubmit={this.handleSubmit} refs="editForm">
                        <Form.Item label="选择用户" {...formItemLayout}>
                            {getFieldDecorator("user_id", {
                                rules: [
                                    {
                                        required: true,
                                        message: "选择用户"
                                    }
                                ]
                            })(
                                <SelectValue
                                    url="users"
                                    onChange={this.onChange}
                                    typeId="user_id" />
                            )}
                        </Form.Item>

                        <Form.Item {...formTailLayout}>
                            <Button type="primary"
                                onClick={() => this.actionSubmit('users')}>
                                提交
          		    	</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create()(DeviceActions);