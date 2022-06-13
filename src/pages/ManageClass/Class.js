import React, { useState } from "react";
import TableClass from "./TableClass";

import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import {
  ClassWrapper,
  ClassTitle,
  ClassContainer,
  ButtonAction,
  ButtonFunc,
} from "./style";
import ModalClass from "./ModalClass";

const Class = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <ClassWrapper>
      <ClassTitle>Manage Class</ClassTitle>
      <ButtonAction>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ margin: "0 10px" }}
          onClick={showModal}
        >
          Add
        </Button>
        <ModalClass isModalVisible={isModalVisible} />
      </ButtonAction>
      <ClassContainer>
        <TableClass />
      </ClassContainer>
    </ClassWrapper>
  );
};

export default Class;
