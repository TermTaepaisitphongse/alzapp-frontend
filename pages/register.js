import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { ALZAPP_API_URL } from "../config";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const App = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    await createNewUser(values);
  };

  const createNewUser = async (data) => {
    const response = await axios({
      method: "post",
      url: `${ALZAPP_API_URL}/users`,
      data,
    });
    console.log("save user", response.data);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{ padding: 8 }}
    >
      <Row>
        <Col sm={{ offset: 8 }}>
          <h1>Regristration</h1>
        </Col>
      </Row>

      <Form.Item
        name="username"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
            message: "Please select a role",
          },
        ]}
      >
        <Select placeholder="select your role">
          <Option value="patient">Patient</Option>
          <Option value="caretaker">Caretaker</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item
        {...tailFormItemLayout}
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <div style={{ display: "inline", marginRight: 4 }}>
            already have an account?
            <Link href="/login" passHref>
              Login
            </Link>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default App;
