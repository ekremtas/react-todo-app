import React from "react";
import TodoAppListItem from "./TodoAppListItem";
import { connect } from "react-redux";

const TodoAppList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return <TodoAppListItem {...todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer,
  };
};

export default connect(mapStateToProps)(TodoAppList);
