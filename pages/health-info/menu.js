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
      <ContentWrapper xs={24} md={{ span: 16, offset: 4 }}>
        <h1 style={{ textAlign: "center" }}>เมนูอาหาร...ห่างไกลสมองเสื่อม</h1>
        <Image
          src="/recipe_TH_img1.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img2.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img3.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img4.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img5.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img6.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img7.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img1.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img8.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />
        <Image
          src="/recipe_TH_img9.png"
          alt=""
          layout="responsive"
          objectFit="contain"
          width="100%"
          height={"100%"}
        />

        <p>
          เอกสารอ้างอิง หนังสือคู่มือแนวทางการป้องกันภาวะสมองเสื่อม
          สำนักโภชนาการ กรมอนามัย
        </p>
      </ContentWrapper>
    </Row>
  );
}
