import React from "react";
import { Form, Input, Button, message } from "antd";
import ManualUpload from '../../components/upload';
class DeviceTypeEdit extends React.Component {

    state = {
        imageUrl: ''
    }
    componentWillReceiveProps(nextProps) {
        !nextProps.visible && this.props.form.resetFields();
    }
    handleChangeFile = files => {
        this.setState({ imageUrl: files[0].thumbUrl });
    }
    handleSubmit = dataType => {
        const { imageUrl } = this.state;
        if (!imageUrl) {
            message.error("请上传图片!");
            return;
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const fileValues = {
                    ...values,
                    doc_contents: imageUrl
                }
                this.props.handleSubmit(dataType, fileValues);
            }
        });
    };
    beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { data, type } = this.props;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 10 }
        };
        const formTailLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20, offset: 10 }
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="名称" {...formItemLayout}>
                    {getFieldDecorator("name", {
                        initialValue: data.name,
                        rules: [
                            {
                                required: true,
                                message: "请输入名称"
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
                {type === 'failure' ?
                    <Form.Item label="故障编码" {...formItemLayout}>
                        {getFieldDecorator("typecode", {
                            initialValue: data.typecode
                        })(<Input />)}
                    </Form.Item> : null}
                <Form.Item label="描述" {...formItemLayout}>
                    {getFieldDecorator("description", {
                        initialValue: data.description
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    style={JSON.stringify(data) == "{}" ? { display: 'none' } : { display: 'bolock' }}
                    label="图片" {...formItemLayout}>
                    <img src={data.picture} alt="" style={{ width: '250px', height: '200px' }} />
                </Form.Item>

                <Form.Item label="上传图片" {...formItemLayout}>
                    <ManualUpload
                        onChange={this.handleChangeFile}
                    />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={() => this.handleSubmit(data)}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(DeviceTypeEdit);
