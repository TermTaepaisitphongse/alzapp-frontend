import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import { Menu, Dropdown, Row, Col, Space, Divider } from "antd";
import styled from "styled-components";

const StyleHome = styled.div``;
const InfoCard = styled.div`
  background-color: gray;
  height: 350px;
`;
const StyleImage = styled.div`
  background-image: url(/flower.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`;

export default function Home() {
  return (
    <>
      <StyleImage />
      <Row gutter={[24, 24]} style={{ padding: 24 }}>
        <Col span={8}>
          <InfoCard>Services</InfoCard>
        </Col>
        <Col span={8}>
          <InfoCard>Health Info</InfoCard>
        </Col>
        <Col span={8}>
          <InfoCard>About Us</InfoCard>
        </Col>
      </Row>
    </>
  );
}
