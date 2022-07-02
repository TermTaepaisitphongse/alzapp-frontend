import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  TimePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col,
} from "antd";
import axios from "axios";
import { ALZAPP_API_URL } from "../../../config";

export default function MedicalRecordsForm() {
  const onFinish = async (values) => {
    console.log("data received!", values);
    await saveMedicalRecard(values);
    alert("saved!");
  };

  const saveMedicalRecard = async (data) => {
    const response = await axios({
      method: "post",
      url: `${ALZAPP_API_URL}/medicalRecords`,
      data,
    });
    console.log("save records", response.data);
  };

  return (
    <Row>
      <Col xs={24} md={{ span: 16, offset: 4 }}>
        <h1>New Record</h1>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Form.Item
            name="date"
            label="Date/time"
            //   {...config}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item label="Body Temperature (°C)" name="temperature">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Blood Pressure (SYS) (mmHg)" name="sys">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Blood Pressure (DIA) (mmHg)" name="dia">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Pulse (BPM)" name="pulse">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Respiratory rate" name="respiratoryRate">
            <InputNumber />
          </Form.Item>
          <Form.Item label="DTX (mg%)" name="DTX">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Notes/Symptoms" name="notes">
            <Input />
          </Form.Item>

          <Form.Item label="">
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
