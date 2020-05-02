import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./types";

export const addTodo = (content) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: content,
    });
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    });
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
