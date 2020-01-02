import React from 'react';
import DataTable from '../components/DataTable';
import { Button, Form, Row, Col, Input } from "antd";
const FormItem = Form.Item;
class Failuretype extends React.Component {
    state = {
        columns: [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '故障编码',
                dataIndex: 'typecode'
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '图片',
                render: (record) => {
                    let mPicture = record.picture;
                    return <img alt="" style={{ width: '40px', height: '40px' }} src={mPicture} />;
                }
            }
        ]
    }
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.showTable.fetch(values);
            }
        });
    };
    handleReset = () => {
        this.props.form.resetFields();
        this.showTable.fetch();
    };
    render() {
        const { columns } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="search_content">
                <Form className="ant-advanced-search-form" style={{ paddingBottom: 0 }}>
                    <Row gutter={24}>
                        <Col span={3}>
                            <Form.Item label="名称">
                                {getFieldDecorator("name_cont")(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item label="故障编码">
                                {getFieldDecorator("typecode_cont")(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                        <Col
                            span={2}
                            style={{
                                marginRight: "10px",
                                display: "flex",
                                marginLeft: "10px"
                            }}
                            className="serarch-btns">
                            <FormItem><Button
                                icon="search"
                                type="primary"
                                htmlType="submit"
                                className={"btn"}
                                onClick={this.handleSearch} >搜索</Button>
                            </FormItem>
                            <FormItem>
                                <Button
                                    style={{ marginLeft: "10px" }}
                                    type="danger"
                                    className={"btn"}
                                    onClick={this.handleReset}>重置</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
                <DataTable
                    columns={columns}
                    ref={showTable => {
                        this.showTable = showTable;
                    }}
                    url="failuretypes"
                    {...this.props} />
            </div>

        )
    }
}
export default Form.create()(Failuretype);