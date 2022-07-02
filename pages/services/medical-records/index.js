import styled from "styled-components";
import { Row, Col, Table } from "antd";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { ALZAPP_API_URL } from "../../../config";

const columns = [
  {
    title: "Temperature",
    dataIndex: "temperature",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.temperature - b.temperature,
  },
  {
    title: "Blood Pressure",
    dataIndex: "sys",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.sys - b.sys,
    render: (_, record) => {
      return `${record.sys}/${record.dia}`;
    },
  },
  {
    title: "Pulse",
    dataIndex: "pulse",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.pulse - b.pulse,
  },
  {
    title: "Respiratory Rate",
    dataIndex: "respiratoryRate",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.respiratoryRate - b.respiratoryRate,
  },
  {
    title: "DTX",
    dataIndex: "DTX",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.DTX - b.DTX,
  },
  {
    title: "Notes",
    dataIndex: "notes",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.notes - b.notes,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function MedicalRecords() {
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    const getMedicalRecard = async () => {
      const response = await axios(`${ALZAPP_API_URL}/medicalRecords`);
      console.log("get records", response);
      setMedicalRecords(response.data);
    };
    getMedicalRecard();
  }, []);

  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={{ span: 16, offset: 4 }}>
          <h2>บันทึกสุขภาพ</h2>
          <Link href="/services/medical-records/create" passHref>
            บันทึกใหม่
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={{ span: 16, offset: 4 }}>
          <Table
            columns={columns}
            dataSource={medicalRecords}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
}
