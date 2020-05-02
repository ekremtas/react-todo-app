import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import TodoAppDelete from "./TodoAppDelete";
import { Col, Row } from "reactstrap";

const TodoAppListItem = ({ content, id, completed, toggleTodo }) => {
  return (
    <li class="list-group-item">
      <Row>
        <Col xs="9">
          <div
            className="border border-dark rounded"
            style={{
              padding: 7,
              color: completed ? "red" : "black",
              textDecoration: completed ? "line-through" : "initial",
            }}
            onClick={() => toggleTodo(id)}
          >
            {content}
          </div>
        </Col>
        <Col xs="3">
          <TodoAppDelete id={id} />
        </Col>
      </Row>
    </li>
  );
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
