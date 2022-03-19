import { Row, Col } from "antd";
import styled from "styled-components";
import Image from "next/image";

const ContentWrapper = styled(Col)`
  background-color: white;
  padding: 24px !important;
  margin-top: 50px !important;
`;

export default function Staging() {
  return (
    <Row gutter={[24, 24]}>
      <ContentWrapper xs={24} md={16} offset={4}>
        <h1>ผู้สูงอายุแข็งแรง ไม่ซีด สมองดี</h1>
        <p>
          <Image
            src="/health_info_TH_2.png"
            alt=""
            layout="fill"
            style={{ marginLeft: "10px" }}
          />
        </p>
        <p>
          เอกสารอ้างอิง หนังสือคู่มือแนวทางการป้องกันภาวะสมองเสื่อม
          สำนักโภชนาการ กรมอนามัย
        </p>
      </ContentWrapper>
    </Row>
  );
}
