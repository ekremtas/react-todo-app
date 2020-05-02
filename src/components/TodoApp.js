import React from "react";
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";
import { Container, Card, CardBody } from "reactstrap";

class TodoApp extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <TodoAppHeader />
          <CardBody>
            <TodoAppList />
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default TodoApp;
