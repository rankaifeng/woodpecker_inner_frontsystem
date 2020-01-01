import React from 'react';
import { DatePicker } from 'antd';
import DataTable from '../components/DataTable';
import SelectValue from '../components/SelectValue';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Row, Col, Button, Form, Select, Input } from 'antd';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
let startTime, endTime;
class Rentalcost extends React.Component {
    state = {
        columns: [
            {
                title: '项目',
                dataIndex: 'projectcase_name'
            },
            {
                title: '租赁价格',
                dataIndex: 'money'
            },
            {
                title: '开始时间',
                dataIndex: 'beginlent'
            },
            {
                title: '结束时间',
                dataIndex: 'endlent'
            }
        ],
        keyValue: '',
    }
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.created_at_gteq = startTime;
                values.created_at_lteq = endTime;
                this.showTable.fetch(values);
            }
        });
    };
    handleReset = () => {
        this.props.form.resetFields();
        this.resetProject.resetFields();
        this.setState({ keyValue: new Date() })
        this.showTable.fetch();
    };
    onChange = id => {
        this.setState({ id: id })
    }
    dateChange(date, dateString) {
        startTime = dateString[0];
        endTime = dateString[1];
    }
    render() {
        const { columns } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="search_content">
                <Form className="ant-advanced-search-form" style={{ paddingBottom: 0 }}>
                    <Row gutter={24}>
                        <Col span={3}>
                            <Form.Item label="项目名称">
                                {getFieldDecorator("id_eq")
                                    (<SelectValue
                                        ref={(resetProject) => {
                                            this.resetProject = resetProject;
                                        }}
                                        onChange={this.onChange}
                                        url="projectcases"
                                        typeId="projectcase_id" />)}
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <RangePicker
                                key={this.state.keyValue}
                                locale={locale}
                                onChange={this.dateChange} />
                        </Col>
                        <Col span={2} style={{
                            marginRight: '10px',
                            display: 'flex', marginLeft: '10px'
                        }} className="serarch-btns">
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
                <DataTable
                    ref={(showTable) => {
                        this.showTable = showTable;
                    }}
                    columns={columns}
                    url="leasemanagements"
                    {...this.props} />
            </div>


        )
    }
}
export default Form.create()(Rentalcost);