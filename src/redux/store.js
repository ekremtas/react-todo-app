import { todoReducer } from "./reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  todoReducer: todoReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
