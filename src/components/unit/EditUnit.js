import React, { Component } from "react";
import { Form, Input, Button } from "antd";
class EditUnit extends Component {
	componentWillReceiveProps(nextProps) {
		!nextProps.visible && this.props.form.resetFields();
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
			<Form onSubmit={this.handleSubmit} refs="editForm">
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
				<Form.Item label="联系人" {...formItemLayout}>
					{getFieldDecorator("contactperson", {
						initialValue: data.contactperson,
						rules: [
							{
								required: true,
								message: "请输入联系人"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="电话" {...formItemLayout}>
					{getFieldDecorator("phone", {
						initialValue: data.phone,
						rules: [
							{
								required: true,
								message: "请输入电话"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="描述" {...formItemLayout}>
					{getFieldDecorator("description", {
						initialValue: data.description,
					})(
						<Input />
					)}
				</Form.Item>
				<Form.Item {...formTailLayout}>
					<Button type="primary"
						onClick={() => this.props.handleSubmit(data)}>
						提交
          			</Button>
				</Form.Item>
			</Form>
		);
	}
}
export default Form.create()(EditUnit);
