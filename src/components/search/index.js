import React from 'react'
import { Row, Col, Button, Form, Select, Input } from 'antd';
import SelectValue from '../SelectValue';
import './index.css';
const FormItem = Form.Item;
const { Option } = Select;

class SearchBar extends React.Component {
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSearch(values);
            }
        });
    };
    onChange = id => {
        this.setState({ id: id })
    }
    handleReset = () => {
        this.props.form.resetFields();
        this.props.resetFields();
        this.resetProject.resetFields();
        this.resetGroup.resetFields();
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { type } = this.props;
        return (
            <div className="search_content">
                <Form className="ant-advanced-search-form" style={{ paddingBottom: 0 }}>
                    <Row gutter={24}>
                        <Col span={3} style={type === 'device' ? { display: 'block' } : { display: 'none' }}>
                            <FormItem label="设备名">
                                {getFieldDecorator('name_cont')(
                                    <Input placeholder="请输入设备名" />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={3} style={type === 'failure' ? { display: 'none' } : { display: 'block' }}>
                            <Form.Item label="项目名称">
                                {getFieldDecorator(type === 'device' ? "projectcase_id_eq" : 'id_eq')
                                    (<SelectValue
                                        ref={(resetProject) => {
                                            this.resetProject = resetProject;
                                        }}
                                        onChange={this.onChange}
                                        url="projectcases"
                                        typeId="projectcase_id" />)}
                            </Form.Item>
                        </Col>
                        <Col span={3} style={type === 'device' ? { display: 'block' } : { display: 'none' }}>
                            <Form.Item label="分组">
                                {getFieldDecorator("devicegroups_id")
                                    (<SelectValue
                                        ref={(resetGroup) => {
                                            this.resetGroup = resetGroup;
                                        }}
                                        url="devicegroups"
                                        typeId="devicegroups_id" />)}
                            </Form.Item>
                        </Col>
                        <Col span={3} style={type === 'device' ? { display: 'block' } : { display: 'none' }}>
                            <FormItem label="设备故障">
                                {getFieldDecorator('devicestate_id_null')(
                                    <Select
                                        style={{ width: 120 }}>
                                        <Option value="1">正常</Option>
                                        <Option value="0">故障</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={3} style={type === 'failure' ? { display: 'block' } : { display: 'none' }}>
                            <Form.Item label="名称">
                                {getFieldDecorator("name_cont")(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={3} style={type === 'failure' ? { display: 'block' } : { display: 'none' }}>
                            <Form.Item label="故障编码">
                                {getFieldDecorator("typecode_cont")(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={2} style={{ marginRight: '10px', display: 'flex' }} className="serarch-btns">
                            <FormItem>
                                <Button icon="search" type="primary" htmlType="submit" className={'btn'} onClick={this.handleSearch}>
                                    搜索
								</Button>
                            </FormItem>
                            <FormItem>
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    type="danger"
                                    className={'btn'} onClick={this.handleReset}>
                                    重置
								</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default Form.create()(SearchBar);