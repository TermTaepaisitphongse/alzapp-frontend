import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import { Menu, Dropdown, Row, Col, Space, Divider } from "antd";
import styled from "styled-components";

const StyleHome = styled.div``;
export default function Home() {
  return (
    <>
      <Row>
        <Col span={8}>1</Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
    </>
  );
}
