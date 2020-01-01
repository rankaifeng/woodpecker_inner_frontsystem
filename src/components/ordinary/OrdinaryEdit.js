import React, { Component } from "react";
import { Form, Input, Button, Modal } from "antd";
class OrdinaryEdit extends Component {
    state = {
        visible: false
    }
    componentWillReceiveProps(nextProps) {
        !nextProps.visible && this.props.form.resetFields();
    }
    handleOk = () => {
        this.setState({ visible: false });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    showMode = () => {
        this.setState({ visible: true });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { data } = this.props;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 }
        };
        const formTailLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20, offset: 4 }
        };
        return (
            <Modal
                title="编辑信息"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}>
                <div>2</div>
            </Modal>
        );
    }
}
export default Form.create()(OrdinaryEdit);
