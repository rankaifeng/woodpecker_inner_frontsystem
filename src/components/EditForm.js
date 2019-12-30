import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import * as mHttpUtils from '../utils/HttpUtils'
class EditForm extends Component {

	state = {
		project: ''
	}

	componentWillReceiveProps(nextProps) {
		!nextProps.visible && this.props.form.resetFields();
	}
	initValue = (value) => {
		let data = {
			pagination: { page: 0, perPage: 20 },
			data: null
		}

		mHttpUtils.get("projectcases", data).then((result => {
			let data = result.data.rows;
			data.forEach(item => {
				if (value === item.id) {
					return item.name;

				}
			})
		}))
	}


	render() {
		const { getFieldDecorator } = this.props.form;
		const { data } = this.props;
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 10 }
		};
		const formTailLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 20, offset: 4 }
		};
		return (
			<Form onSubmit={this.handleSubmit} refs="editForm">
				<Form.Item label="设备名" {...formItemLayout}>
					{getFieldDecorator('name', {
						initialValue: data.name,
						rules: [
							{
								required: true,
								message: '请输入设备名'
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="IP地址" {...formItemLayout}>
					{getFieldDecorator('ip', {
						initialValue: data.ip,
						rules: [
							{
								required: true,
								message: '请输入ip'
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="设备编号" {...formItemLayout}>
					{getFieldDecorator('sbbh', {
						initialValue: data.sbbh
					})(<Input />)}
				</Form.Item>
				<Form.Item label="项目名称" {...formItemLayout}>
					{getFieldDecorator('projectcase_id', {
						initialValue: this.initValue(data.projectcase_id),
						rules: [
							{
								required: true,
								message: '项目名称'
							}
						]
					})(<SelectValue {...data.projectcase_id} />)}
				</Form.Item>
				<Form.Item {...formTailLayout}>
					<Button type="primary" onClick={this.props.handleSubmit}>
						提交
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
class SelectValue extends React.Component {
	componentDidMount() {
		console.log(this.props.value);
	}

	render() {
		return (
			<Input />
		)
	}

}
export default Form.create()(EditForm);
