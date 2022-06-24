import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Button, Modal, Checkbox, Form, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const ModalAddClass = () => {
  //react hook
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [numOfStu, setNumOfStu] = useState("");

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  useEffect(() => {}, []);

  const handleOk = () => {
    //submit info class to backend

    Axios.post("http://localhost:3001/class/add", {
      id: id,
      name: name,
      numOfStu: numOfStu,
    });
    setId("");
    setName("");
    setNumOfStu("");
    dispatch(classAction.activeAddClassModal(false));

    var listID = [];

    Axios.get("http://localhost:3001/class/getListId").then((data) => {
      console.log("data: ", data.data);
      listID = data.data;
    });

    console.log("list id:", listID);
  };

  const handleCancel = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  return (
    <Modal
      title="Add class"
      visible={classReducer.activeAddModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          rules={[
            {
              required: true,
              message: "Please input ID class",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input name class",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Form.Item>
        <Form.Item
          label="Number Student"
          rules={[
            {
              required: true,
              message: "Please input number of student",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setNumOfStu(e.target.value);
            }}
            value={numOfStu}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddClass;
