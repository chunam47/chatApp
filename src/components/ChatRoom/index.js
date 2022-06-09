import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import styled from "styled-components";

export default function ChatRoom() {
  const ColStyled = styled(Col)``;
  return (
    <div>
      <Row>
        <Col span={6}>
          <Sidebar />
        </Col>
        <ColStyled span={18}>
          <ChatWindow />
        </ColStyled>
      </Row>
    </div>
  );
}
