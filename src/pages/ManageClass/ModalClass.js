import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

const ModalClass = (showModal) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  //   console.log("123");
  // };
  // setIsModalVisible(showModal);
  useEffect(() => {
    setIsModalVisible(true);
    console.log(showModal);
  }, [showModal]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        title="Add infomation class"
        visible={isModalVisible}
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
            name="id"
            rules={[
              {
                required: false,
                message: "Please input class id!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name:"
            name="name"
            rules={[
              {
                required: false,
                message: "Please input class name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Number Student:"
            name="numStu"
            rules={[
              {
                required: false,
                message: "Please input number student!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalClass;
