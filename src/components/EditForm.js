import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import SelectValue from './SelectValue';
class EditForm extends Component {
	state = {
		project: "",
		id: 0
	};
	onChange = value => {
		this.setState({ id: value });
	};
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
				<Form.Item label="设备名" {...formItemLayout}>
					{getFieldDecorator("name", {
						initialValue: data.name,
						rules: [
							{
								required: true,
								message: "请输入设备名"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="IP地址" {...formItemLayout}>
					{getFieldDecorator("ip", {
						initialValue: data.ip,
						rules: [
							{
								required: true,
								message: "请输入ip"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="设备编号" {...formItemLayout}>
					{getFieldDecorator("sbbh", {
						initialValue: data.sbbh
					})(<Input />)}
				</Form.Item>
				<Form.Item label="项目名称" {...formItemLayout}>
					{getFieldDecorator("projectcase_id", {
						initialValue: data.projectcase_id,
						rules: [
							{
								required: true,
								message: "项目名称"
							}
						]
					})(
						<SelectValue
							url="projectcases"
							onChange={this.onChange}
							typeId={data.projectcase_id} />
					)}
				</Form.Item>
				<Form.Item label="经度" {...formItemLayout}>
					{getFieldDecorator("lng", {
						initialValue: data.lng,
						rules: [
							{
								required: true,
								message: "请输入经度"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="纬度" {...formItemLayout}>
					{getFieldDecorator("lat", {
						initialValue: data.lat,
						rules: [
							{
								required: true,
								message: "请输入纬度"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="位置" {...formItemLayout}>
					{getFieldDecorator("position", {
						initialValue: data.position,
						rules: [
							{
								required: true,
								message: "请输入位置"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="方位" {...formItemLayout}>
					{getFieldDecorator("yaw", {
						initialValue: data.yaw
					})(<Input />)}
				</Form.Item>
				<Form.Item label="俯仰" {...formItemLayout}>
					{getFieldDecorator("pitch", {
						initialValue: data.pitch
					})(<Input />)}
				</Form.Item>
				<Form.Item label="镜头朝向" {...formItemLayout}>
					{getFieldDecorator("cameraposition_id", {
						initialValue: data.cameraposition_id,
						rules: [
							{
								required: true,
								message: "镜头朝向"
							}
						]
					})(
						<SelectValue
							url="camerapositions"
							onChange={this.onChange}
							typeId={data.cameraposition_id} />
					)}
				</Form.Item>
				<Form.Item label="横滚" {...formItemLayout}>
					{getFieldDecorator("roll", {
						initialValue: data.roll
					})(<Input />)}
				</Form.Item>
				<Form.Item label="设备类型" {...formItemLayout}>
					{getFieldDecorator("devicetype_id", {
						initialValue: data.devicetype_id,
						rules: [
							{
								required: true,
								message: "设备类型"
							}
						]
					})(
						<SelectValue
							url="devicetypes"
							onChange={this.onChange}
							typeId={data.devicetype_id} />
					)}
				</Form.Item>
				<Form.Item label="重点位置" {...formItemLayout}>
					{getFieldDecorator("position_id", {
						initialValue: data.position_id
					})(
						<SelectValue
							url="positions"
							onChange={this.onChange}
							typeId={data.position_id} />
					)}
				</Form.Item>
				<Form.Item label="厂家" {...formItemLayout}>
					{getFieldDecorator("manufacturer_id", {
						initialValue: data.manufacturer_id,
						rules: [
							{
								required: true,
								message: "厂家"
							}
						]
					})(
						<SelectValue
							url="manufacturers"
							onChange={this.onChange}
							typeId={data.manufacturer_id} />
					)}
				</Form.Item>
				<Form.Item label="电力公司" {...formItemLayout}>
					{getFieldDecorator("powerplant_id", {
						initialValue: data.powerplant_id,
						rules: [
							{
								required: true,
								message: "电力公司"
							}
						]
					})(
						<SelectValue
							url="powerplants"
							onChange={this.onChange}
							typeId={data.powerplant_id} />
					)}
				</Form.Item>
				<Form.Item label="传输单位" {...formItemLayout}>
					{getFieldDecorator("transfer_id", {
						initialValue: data.transfer_id,
						rules: [
							{
								required: true,
								message: "传输单位"
							}
						]
					})(
						<SelectValue
							url="transfers"
							onChange={this.onChange}
							typeId={data.transfer_id} />
					)}
				</Form.Item>
				<Form.Item label="建设单位" {...formItemLayout}>
					{getFieldDecorator("construction_id", {
						initialValue: data.construction_id,
						rules: [
							{
								required: true,
								message: "建设单位"
							}
						]
					})(
						<SelectValue
							url="constructions"
							onChange={this.onChange}
							typeId={data.construction_id} />
					)}
				</Form.Item>
				<Form.Item label="维护单位" {...formItemLayout}>
					{getFieldDecorator("maintainer_id", {
						initialValue: data.maintainer_id,
						rules: [
							{
								required: true,
								message: "维护单位"
							}
						]
					})(
						<SelectValue
							url="maintainers"
							onChange={this.onChange}
							typeId={data.maintainer_id} />
					)}
				</Form.Item>
				<Form.Item label="施工单位" {...formItemLayout}>
					{getFieldDecorator("ower_id", {
						initialValue: data.ower_id,
						rules: [
							{
								required: true,
								message: "施工单位"
							}
						]
					})(
						<SelectValue
							url="owers"
							onChange={this.onChange}
							typeId={data.ower_id} />
					)}
				</Form.Item>
				<Form.Item label="管理单位" {...formItemLayout}>
					{getFieldDecorator("management_id", {
						initialValue: data.management_id,
						rules: [
							{
								required: true,
								message: "管理单位"
							}
						]
					})(
						<SelectValue
							url="managements"
							onChange={this.onChange}
							typeId={data.management_id} />
					)}
				</Form.Item>
				<Form.Item label="租赁单价" {...formItemLayout}>
					{getFieldDecorator("leasefee", {
						initialValue: data.leasefee
					})(<Input />)}
				</Form.Item>
				<Form.Item label="扣费单价" {...formItemLayout}>
					{getFieldDecorator("deductionfee", {
						initialValue: data.deductionfee
					})(<Input />)}
				</Form.Item>
				<Form.Item label="用户名" {...formItemLayout}>
					{getFieldDecorator("username", {
						initialValue: data.username,
						rules: [
							{
								required: true,
								message: "请输入用户名"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="密码" {...formItemLayout}>
					{getFieldDecorator("password", {
						initialValue: data.password,
						rules: [
							{
								required: true,
								message: "请输入密码"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="端口" {...formItemLayout}>
					{getFieldDecorator("port", {
						initialValue: data.port,
						rules: [
							{
								required: true,
								message: "请输入端口"
							}
						]
					})(<Input />)}
				</Form.Item>
				<Form.Item {...formTailLayout}>
					<Button type="primary" onClick={() => this.props.handleSubmit(data.id)}>
						提交
          			</Button>
				</Form.Item>
			</Form>
		);
	}
}
export default Form.create()(EditForm);
