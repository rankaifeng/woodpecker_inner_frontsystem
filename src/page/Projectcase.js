import React from "react";
import DataTable from "../components/DataTable";
import {Form} from "antd";
import SearchBar from "../components/search";
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
  handleSearch = value => {
    this.showTable.fetch(value);
  };
  handleReset = () => {
    this.showTable.fetch();
  };
  onChange = id => {
    this.setState({ id: id });
  };
  render() {
    const { columns } = this.state;
    return (
      <div className="search_content">
        <SearchBar
          type="project"
          resetFields={this.handleReset}
          handleSearch={this.handleSearch} />
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
