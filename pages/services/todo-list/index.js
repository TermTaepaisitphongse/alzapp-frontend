import { useState } from "react";
import {
  Row,
  Col,
  Table,
  Form,
  DatePicker,
  Input,
  Button,
  Checkbox,
} from "antd";
import styled from "styled-components";

const formItemLayout = {
  // labelCol: { span: 4 },
  // wrapperCol: { span: 24 },
};

const TodoItem = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 12px;
`;

export default function ToDoList() {
  const [todos, setTodos] = useState([]); // react is aware of this todos -> if todos changges, web page change
  // const todos //  react doesnt know this, if todos value changes -> react donest care, web doesnt re-render
  const onFinish = (values) => {
    console.log("data received!", values);
    setTodos([...todos, { task: values.task }]);
  };

  function onChange(e, task) {
    console.log(`checked = ${e.target.checked}`);
    console.log(`task = ${task}`);
    if (e.target.checked) {
      const deleteIndex = todos.findIndex((todo) => {
        return todo.task === task;
      });

      console.log("deleteIndex", deleteIndex);
      todos.splice(deleteIndex, 1);
      setTodos([...todos]);
    }
  }

  return (
    <Row>
      <Col xs={24} md={{ span: 8, offset: 8 }}>
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>ToDo List</h1>
        <Form
          {...formItemLayout}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Form.Item
            name="date"
            //   {...config}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item name="task">
            <Input placeholder="type here" />
          </Form.Item>

          <Form.Item label="">
            <Button htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.task} className={todo.done ? "done" : ""}>
              <Checkbox
                onChange={(e) => {
                  onChange(e, todo.task);
                }}
              >
                {todo.task}
              </Checkbox>
            </TodoItem>
          ))}
        </div>
      </Col>
    </Row>
  );
}
