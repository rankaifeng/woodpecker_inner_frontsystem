import React, { Component } from "react";
import moment from 'moment'; // 时间插件 
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Form, Input, Button, Modal, DatePicker } from "antd";
const dateFormat = 'YYYY-MM-DD'; // 定义你需要的时间格式
class ProjectsEdit extends Component {

  componentWillReceiveProps(nextProps) {
    !nextProps.visible && this.props.form.resetFields();
  }

  handleSubmit = dataType => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const fieldsValue = {
          ...values,
          'beginlent': values['beginlent'].format(dateFormat),
          'endlent': values['endlent'].format(dateFormat),
          'beginmaintain': values['beginmaintain'].format(dateFormat),
          'endmaintain': values['endmaintain'].format(dateFormat),
          'begintime': values['begintime'].format(dateFormat),
          'endtime': values['endtime'].format(dateFormat)
        };
        this.props.handleSubmit(dataType, fieldsValue);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { data } = this.props;
    const formItemLayout = {
      labelCol: { span: 9 },
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
        <Form.Item label="IP" {...formItemLayout}>
          {getFieldDecorator("ip", {
            initialValue: data.ip,
            rules: [
              {
                required: true,
                message: "请输入IP"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="外网IP" {...formItemLayout}>
          {getFieldDecorator("out_ip", {
            initialValue: data.out_ip,
            rules: [
              {
                required: true,
                message: "请输入外网IP"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="租期开始时间" {...formItemLayout}>
          {getFieldDecorator("beginlent", {
            initialValue: data.beginlent === undefined ? "" : moment(data.beginlent, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入租期开始时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
        </Form.Item>
        <Form.Item label="租期结束时间" {...formItemLayout}>
          {getFieldDecorator("endlent", {
            initialValue: data.endlent === undefined ? "" : moment(data.endlent, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入租期结束时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
        </Form.Item>
        <Form.Item label="维护开始时间" {...formItemLayout}>
          {getFieldDecorator("beginmaintain", {
            initialValue: data.beginmaintain === undefined ? "" : moment(data.beginmaintain, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入维护开始时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
        </Form.Item>
        <Form.Item label="维护结束时间" {...formItemLayout}>
          {getFieldDecorator("endmaintain", {
            initialValue: data.endmaintain === undefined ? "" : moment(data.endmaintain, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入维护结束时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
        </Form.Item>
        <Form.Item label="质保开始时间" {...formItemLayout}>
          {getFieldDecorator("begintime", {
            initialValue: data.begintime === undefined ? '' : moment(data.begintime, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入质保开始时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
        </Form.Item>
        <Form.Item label="质保结束时间" {...formItemLayout}>
          {getFieldDecorator("endtime", {
            initialValue: data.endtime === undefined ? "" : moment(data.endtime, dateFormat),
            rules: [
              {
                required: true,
                message: "请输入质保结束时间"
              }
            ]
          })(<DatePicker locale={locale} />)}
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
export default Form.create()(ProjectsEdit);
