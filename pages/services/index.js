import styled from "styled-components";
import { Row, Col } from "antd";
import { RiServiceFill } from "react-icons/ri";
import Link from "next/link";

const HealthInfoCard = styled.a`
  background-color: white;
  border: 2px solid #4a6fa5;
  border-radius: 6px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card-name {
    color: red;
  }
`;

export default function Services() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Services</h1>

      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/services/medical-records" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">Medical Records</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/services/todo-list" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">To-Do List</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/services/calendar" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">Calendar</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/services/games" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">Games</div>
            </HealthInfoCard>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
