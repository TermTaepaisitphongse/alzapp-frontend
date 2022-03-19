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

export default function HealthInfo() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Health Information</h1>

      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/health-info/incident" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">อุบัติการณ์และความชุก</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/health-info/dementia" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">การตรวจประเมินภาวะสมองเสื่อม</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/health-info/staging" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">การแบ่งระยะของโรคอัลไซเมอร์</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/health-info/care" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">วิธีการดูแลผู้ป่วยอัลไชเมอร์</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/health-info/activities" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">
                ตัวอย่างกิจกรรมที่เหมาะกับคนไข้อัลไซเมอร์
              </div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/health-info/food" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">กินอย่างไรให้ ห่างไกลสมองเสื่อม</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6, offset: 6 }}>
          <Link href="/health-info/elderly" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">ผู้สูงอายุแข็งแรง ไม่ซีด สมองดี</div>
            </HealthInfoCard>
          </Link>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Link href="/health-info/menu" passHref>
            <HealthInfoCard>
              <RiServiceFill />
              <div className="card-name">เมนูอาหาร...ห่างไกลสมองเสื่อม</div>
            </HealthInfoCard>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
