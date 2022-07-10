import { Typography, Row, Col } from "antd";
import React from "react";
import styled from "styled-components";

const { Title, Paragraph, Text } = Typography;

const StyleImage = styled.div`
  background-image: url(/homepage-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
`;

const App = () => (
  <Typography>
    <Title level={3}>เกี่ยวกับเรา</Title>
    <Row>
      <Col>
        <Row>
          <Title>เรื่องราวของ AlzApp</Title>
        </Row>
        <Row>
          <Paragraph>
            แรงบัลดาลใจในการทำงานชิ้นนี้ เกิดจากคุณยายเป็นผู้ป่วยอัลไซเมอร์
            จึงมีความตั้งใจที่จะพัฒนาเว็บไซต์นี้สำหรับบุคคลที่จะมาดูแลผู้ป่วย
            เพื่อให้เป็นแนวทางในการปฏิบัติ ในการดูแลผู้ป่วยอัลไซเมอร์
            ด้วยความรัก และความเข้าใจ อันจะเกิดประโยชน์ต่อทั้งผู้ป่วย และผู้ดูแล
          </Paragraph>
        </Row>
        <Row>
          <Text strong>ปรานต์ แต้ไพสิฐพงษ์</Text>
        </Row>
        <Row>
          <Text strong>ติดต่อ: termt222@gmail.com</Text>
        </Row>
        <Row>
          <Text strong>กิตติกรรมประกาศ</Text>
        </Row>
        <Row>
          <Paragraph>
            <Text strong>
              ผู้จัดทำขอขอบพระคุณผู้ที่เกี่ยวข้องกับการจัดทำผลงาน ไว้ ณ ที่นี้
            </Text>
          </Paragraph>
        </Row>
        <Row>
          <Paragraph>
            <ul>
              <li>
                <Text strong>a</Text>
              </li>
              <li>
                <Text strong>a</Text>
              </li>
              <li>
                <Text strong>a</Text>
              </li>
              <li>
                <Text strong>a</Text>
              </li>
            </ul>
          </Paragraph>
        </Row>
      </Col>
      <Col>
        <StyleImage />
      </Col>
    </Row>
  </Typography>
);

export default App;
