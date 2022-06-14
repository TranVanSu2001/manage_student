import React, { useState } from "react";
import TableClass from "./TableClass";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  ClassWrapper,
  ClassTitle,
  ClassContainer,
  ButtonAction,
  ButtonFunc,
} from "./style";
import ModalClass from "./ModalClass";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const Class = () => {
  const dispatch = useDispatch();
  console.log("re-render");
  const [isModalVisible, setIsModalVisible] = useState(false);

  //redux
  const classReducer = useSelector((state) => state.Class);

  const showModal = () => {
    dispatch(classAction.activeAddClassModal(true));
  };

  const infoAddModal = [
    { label: "ID", name: "id" },
    { label: "Name", name: "name" },
    { label: "Number Student", name: "numStu" },
  ];

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
        {/* <ModalClass info={infoAddModal} /> */}
        <ModalClass />
      </ButtonAction>
      <ClassContainer>
        <TableClass />
      </ClassContainer>
    </ClassWrapper>
  );
};

export default Class;