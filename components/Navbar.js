import styled from "styled-components";
import { Menu, Dropdown, Row, Col, Space, Divider, Grid } from "antd";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { useBreakpoint } = Grid;
const StyledNavbar = styled.div`
  background: white;
  color: #4a6fa5;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  a {
    color: #4a6fa5;
    font-weight: bold;
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

  const { SubMenu } = Menu;
  const screens = useBreakpoint();
  console.log("screens", screens);

  if (screens.xs) {
    return (
      <div>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  } else {
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
            <a
              href="google.com"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <AiOutlineLogout style={{ marginRight: 4 }} />
              Logout
            </a>
          </Space>
        </div>
      </StyledNavbar>
    );
  }
};

export default Navbar;
