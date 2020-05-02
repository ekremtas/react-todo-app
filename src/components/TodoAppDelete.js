import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { Button } from "reactstrap";

const TodoAppDelete = ({ id, deleteTodo }) => {
  return (
    <Button
      onClick={() => {
        deleteTodo(id);
      }}
      color="danger"
    >
      Delete
    </Button>
  );
};

const mapDispatchToProps = {
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppDelete);
