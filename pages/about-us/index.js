import styled from "styled-components";
import { Row, Col } from "antd";
import { RiServiceFill } from "react-icons/ri";
import Link from "next/link";

const AboutUsCard = styled.a`
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
          <Link href="/about-us/inspiration" passHref>
            <AboutUsCard>
              <RiServiceFill />
              <div className="card-name">Inspiration</div>
            </AboutUsCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/about-us/feedback" passHref>
            <AboutUsCard>
              <RiServiceFill />
              <div className="card-name">Feedback</div>
            </AboutUsCard>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
