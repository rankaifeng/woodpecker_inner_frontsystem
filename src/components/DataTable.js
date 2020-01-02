import React from "react";
import { Pagination, Modal, notification, Popconfirm, Button } from "antd";
import EditForm from "./EditForm";
import * as mHttpUtils from "../utils/HttpUtils";
import SearchBar from "../components/search";
import ShowTable from "./ShowTable";
import showImg from "../img/show.png";
import editImg from "../img/edit.png";
import delImg from "../img/del.png";
import ProjectsEdit from "./projects/ProjectsEdit";
import DeviceTypeEdit from "./device-type/DeviceTypeEdit";
class DataTable extends React.Component {
  state = {
    pageSize: 10,
    page: 1,
    total: 0,
    data: [],
    loading: false,
    columns: [],
    currentRow: null,
    visible: false
  };
  confirm = row => {
    mHttpUtils.del(this.props.url + `/${row.id}`).then(result => {
      notification["success"]({
        message: "操作提示",
        description: result.data.message
      });
      this.fetch();
    });
  };
  handleSearch = value => {
    const newValues = {
      ...value,
      devicestate_id_null: value.devicestate_id_null === "1"
        ? true : false
    }
    this.fetch(newValues);
  };
  resetFields = value => {
    this.fetch(value);
  };
  componentDidMount() {
    const { columns, url } = this.props;
    if (url != "leasemanagements") {
      let item = {
        title: "操作",
        render: (text, row, index) => {
          return (
            <div className="action">
              <img
                alt=""
                src={showImg}
                style={
                  url === "devices" ? { display: "" } : { display: "none" }
                }
              />
              <img alt="" src={editImg} onClick={() => this.handleEdit(row)} />
              <Popconfirm
                title="确认删除?"
                onConfirm={() => this.confirm(row)}
                okText="是"
                cancelText="否"
              >
                <img alt="" src={delImg} />
              </Popconfirm>
            </div>
          );
        }
      };
      columns.push(item);
    }
    this.setState({ columns: columns });
    this.fetch();
  }
  // 编辑
  handleEdit(row) {
    this.setState({ currentRow: row, visible: true });
  }
  handleOk = () => {
    this.setState({ visible: false });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  pageChange = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize }, () => {
      this.fetch();
    });
  };
  fetch = (params = {}) => {
    const { page, pageSize } = this.state;
    const { url } = this.props;
    console.log(url);

    let data = {
      pagination: { page: page, perPage: pageSize },
      filter: params,
      data: {}
    };
    this.setState({ loading: true });
    mHttpUtils.get(url, data).then(result => {
      this.setState({
        loading: false,
        data: result.data.rows,
        total: result.data.total
      });
    });
  };

  // 提交
  handleSubmit = (dataType, values) => {
    if (JSON.stringify(dataType) == "{}") {
      mHttpUtils.post(this.props.url, values).then(result => {
        this.showNotification(result);
      });
      return;
    }
    mHttpUtils.put(this.props.url + `/${dataType.id}`, values).then(result => {
      this.showNotification(result);
    });
  };
  showNotification = result => {
    notification["success"]({
      message: "操作提示",
      description: result.data.message
    });
    this.setState({ visible: false });
    this.fetch();
  };
  render() {
    const {
      pageSize,
      page,
      total,
      data,
      loading,
      columns,
      currentRow,
      visible
    } = this.state;
    const { url } = this.props;
    return (
      <div>
        {url != "leasemanagements" ? (
          <div className="create">
            {url === 'devices' ? <SearchBar
              resetFields={this.resetFields}
              handleSearch={this.handleSearch} /> : null}
            <Button
              type="primary"
              onClick={() => this.handleEdit({})}
              icon="plus">
              新建
            </Button>
          </div>
        ) : null}
        <ShowTable loading={loading} dataSource={data} columns={columns} />
        <Pagination
          style={{ position: "absolute", bottom: "20px", right: "10px" }}
          pageSize={pageSize}
          current={page}
          onChange={this.pageChange}
          total={total}
        />
        <Modal
          title="编辑信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          {{
            devices: <EditForm
              data={currentRow}
              visible={visible}
              wrappedComponentRef={form => (this.formRef = form)}
              handleSubmit={this.handleSubmit}
            />,
            projectcases: <ProjectsEdit
              data={currentRow}
              visible={visible}
              handleSubmit={this.handleSubmit}
            />,
            devicetypes: <DeviceTypeEdit
              data={currentRow}
              visible={visible}
              handleSubmit={this.handleSubmit}
            />, failuretypes: <DeviceTypeEdit
              type="failure"
              data={currentRow}
              visible={visible}
              handleSubmit={this.handleSubmit}
            />
          }[url]}
        </Modal>
      </div>
    );
  }
}
export default DataTable;
