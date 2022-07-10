import { Button, Form, Input, Row, Col } from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { ALZAPP_API_URL } from "../config";

const App = () => {
  const router = useRouter();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    await login(values);
  };

  const login = async (data) => {
    const response = await axios({
      method: "post",
      url: `${ALZAPP_API_URL}/auth/login`,
      data,
    });
    console.log("login", response.data);

    localStorage.setItem("alzapp_token", response.data?.access_token);
    router.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
        <Col sm={{ offset: 8 }}>
          <h1>Login</h1>
        </Col>
      </Row>
      <Form.Item
        label="E-mail"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your e-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {/* <Row>
        <Col sm={{ offset: 8 }}> */}
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
            Submit
          </Button>
          <div style={{ display: "inline", marginRight: 4 }}>
            doesnt have an account?
            <Link href="/register" passHref>
              Register
            </Link>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default App;
