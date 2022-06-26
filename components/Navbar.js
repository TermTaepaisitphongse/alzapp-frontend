import styled from "styled-components";
import { Menu, Dropdown, Row, Col, Space, Divider, Grid } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { AppstoreOutlined } from "@ant-design/icons";

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
  const router = useRouter();
  let token = "";
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("alzapp_token");
  }

  const logout = () => {
    localStorage.setItem("alzapp_token", "");
    router.push("/");
  };

  const Services = (
    <Menu>
      <Menu.Item>
        <Link href="/services/medical-records" passHref>
          Medical Records
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/services/todo-list" passHref>
          To-Do List
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/services/calendar" passHref>
          Calendar
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/services/games" passHref>
          Games
        </Link>
      </Menu.Item>
    </Menu>
  );

  const AboutUs = (
    <Menu>
      <Menu.Item>
        <Link href="/about-us/inspiration" passHref>
          Inspiration
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about-us/feedback" passHref>
          Feedback
        </Link>
      </Menu.Item>
    </Menu>
  );

  const { SubMenu } = Menu;
  const screens = useBreakpoint();
  console.log("screens", screens);

  if (screens.xs) {
    return (
      <div>
        <Menu style={{ width: "100%" }} mode="inline">
          <SubMenu key="main" icon={<AppstoreOutlined />} title="AlzApp">
            <Menu.Item key="home">
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </Menu.Item>
            <SubMenu key="services" title="Services">
              <Menu.Item key="1">
                <Link href="/services/medical-records" passHref>
                  <a>Medical Records</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link href="/services/todo-list" passHref>
                  <a>To-Do List</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link href="/services/calendar" passHref>
                  <a>Calendar</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link href="/services/games" passHref>
                  <a>Games</a>
                </Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="healthinformation">
              <Link href="/health-info/" passHref>
                <a>Health Information</a>
              </Link>
            </Menu.Item>

            <SubMenu key="aboutus" title="About Us">
              <Menu.Item key="5">
                <Link href="/about-us/about-us" passHref>
                  <a>About Us</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="6">
                <Link href="/about-us/feedback" passHref>
                  <a>Feedback</a>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="language" title="English">
              <Menu.Item key="7">Thai</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  } else {
    return (
      <StyledNavbar>
        <div>
          <Link href="/" passHref>
            AlzApp
          </Link>
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
            <Link href="/health-info" passHref>
              Health Informaion
            </Link>
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
            {token !== "" ? (
              <a
                onClick={() => logout()}
                passHref
                style={{ display: "flex", alignItems: "center" }}
              >
                <AiOutlineLogout style={{ marginRight: 4 }} />
                Logout
              </a>
            ) : (
              <Link
                href="/login"
                passHref
                style={{ display: "flex", alignItems: "center" }}
              >
                <a>
                  <AiOutlineLogout style={{ marginRight: 4 }} />
                  Login
                </a>
              </Link>
            )}
          </Space>
        </div>
      </StyledNavbar>
    );
  }
};

export default Navbar;
