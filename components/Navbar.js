import styled from "styled-components";
import { Menu, Dropdown, Row, Col, Space, Divider } from "antd";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";

const StyledNavbar = styled.div`
  background: blue;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  a {
    color: white;
  }
`;

const Navbar = () => {
  const Services = (
    <Menu>
      <Menu.Item>
        <Link href="/medicalRecords">
          <a target="_blank" rel="noopener noreferrer">
            Medical Records
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          To-Do List
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Calendar
        </a>
      </Menu.Item>
      <Menu.Item>Games</Menu.Item>
    </Menu>
  );

  const AboutUs = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Inspiration
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Feedback
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledNavbar>
      <div>
        AlzApp
        <Divider type="vertical" />
        <Space>
          <Dropdown overlay={Services}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Services
            </a>
          </Dropdown>
          <Divider type="vertical" />
          <Dropdown overlay={AboutUs}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              About Us
            </a>
          </Dropdown>
        </Space>
      </div>
      <div>
        <Space split={<Divider type="vertical" />}>
          <a>Hello! Jan 24</a>
          <Divider type="vertical" />
          <Dropdown overlay={AboutUs}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              English
            </a>
          </Dropdown>
          <Divider type="vertical" />
          <a href="google.com" target="_blank">
            <AiOutlineLogout />
            Logout
          </a>
        </Space>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
