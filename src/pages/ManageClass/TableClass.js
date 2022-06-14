import React from "react";
import { Space, Table, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import ModalClass from "./ModalClass";

import "antd/dist/antd.css";

const { Column } = Table;
const data = [
  {
    id: "1",
    name: "Java",
    numStu: 11,
  },
  {
    id: "2",
    name: "Java Script",
    numStu: 22,
  },
  {
    id: "3",
    name: "Python",
    numStu: 33,
  },
];

const TableClass = () => (
  <Table dataSource={data}>
    <Column title="ID" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Number of Student" dataIndex="numStu" key="numStu" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="small"
            style={{ margin: "0 10px" }}
          >
            Edit
          </Button>
          <ModalClass />
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            size="small"
            style={{ margin: "0 10px" }}
          >
            Delete
          </Button>
          <Button type="primary" icon={<UnorderedListOutlined />} size="small">
            View
          </Button>
        </Space>
      )}
    />
  </Table>
);

export default TableClass;
