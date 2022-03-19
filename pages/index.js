import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import { Menu, Dropdown, Row, Col, Space, Divider } from "antd";
import styled from "styled-components";
import { GoChecklist } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";

const StyleHome = styled.div``;
const InfoCard = styled.a`
  background-color: white;
  border: 2px solid #4a6fa5;
  border-radius: 6px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #4a6fa5;
  }
`;
const StyleImage = styled.div`
  background-image: url(/homepage-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
`;

export default function Home() {
  return (
    <>
      <StyleImage />
      <Row gutter={[24, 24]} style={{ padding: 24, marginTop: 12 }}>
        <Col xs={24} md={8}>
          <Link href="/services" passHref>
            <InfoCard>
              <GoChecklist size={200} style={{ color: "#4A6FA5" }} />
              <p>Services</p>
            </InfoCard>
          </Link>
        </Col>
        <Col xs={24} md={8}>
          <Link href="/health-info" passHref>
            <InfoCard>
              <AiFillInfoCircle size={200} style={{ color: "#4A6FA5" }} />
              <p>Health Information</p>
            </InfoCard>
          </Link>
        </Col>
        <Col xs={24} md={8}>
          <InfoCard>
            <RiServiceFill size={200} style={{ color: "#4A6FA5" }} />
            <p>About Us</p>
          </InfoCard>
        </Col>
      </Row>
    </>
  );
}
