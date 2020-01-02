import React from "react";
import DataTable from "../components/DataTable";
import {Button, Form, Row, Col } from "antd";
import SelectValue from "../components/SelectValue";
const FormItem = Form.Item;
class Projectcase extends React.Component {
  state = {
    columns: [
      {
        title: "项目名称",
        dataIndex: "name"
      },
      {
        title: "租期开始时间",
        dataIndex: "beginlent"
      },
      {
        title: "租期结束时间",
        dataIndex: "endlent"
      },
      {
        title: "维护开始时间",
        dataIndex: "beginmaintain"
      },
      {
        title: "维护结束时间",
        dataIndex: "endmaintain"
      },
      {
        title: "质保开始时间",
        dataIndex: "begintime"
      },
      {
        title: "质保结束时间",
        dataIndex: "endtime"
      }
    ]
  };
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
    this.resetProject.resetFields();
    this.showTable.fetch();
  };
  onChange = id => {
    this.setState({ id: id });
  };
  render() {
    const { columns } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="search_content">
        <Form className="ant-advanced-search-form" style={{ paddingBottom: 0 }}>
          <Row gutter={24}>
            <Col span={3}>
              <Form.Item label="项目名称">
                {getFieldDecorator("id_eq")(
                  <SelectValue
                    ref={resetProject => {
                      this.resetProject = resetProject;
                    }}
                    onChange={this.onChange}
                    url="projectcases"
                    typeId="projectcase_id"
                  />
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
              className="serarch-btns"
            >
              <FormItem>
                <Button
                  icon="search"
                  type="primary"
                  htmlType="submit"
                  className={"btn"}
                  onClick={this.handleSearch}
                >
                  搜索
                </Button>
              </FormItem>
              <FormItem>
                <Button
                  style={{ marginLeft: "10px" }}
                  type="danger"
                  className={"btn"}
                  onClick={this.handleReset}
                >
                  重置
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <DataTable
          ref={showTable => {
            this.showTable = showTable;
          }}
          columns={columns}
          url="projectcases"
          {...this.props}
        />
      </div>
    );
  }
}
export default Form.create()(Projectcase);
