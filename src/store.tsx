import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const ADD = "ADD";
export const DELETE = "DELETE";

export interface TodoState {
  text: string;
  id: number;
}
const initialTodoState: TodoState[] = [];

interface AddAction {
  type: typeof ADD;
  payload: string;
}
interface DeleteAction {
  type: typeof DELETE;
  payload: number;
}
type todoStateAction = AddAction | DeleteAction;

const addToDo = createAction<string>("ADD");
const deleteToDo = createAction<number>("DELETE");

const reducer = (state = initialTodoState, action: todoStateAction) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return [...state.filter(toDo => toDo.id !== action.payload)];
    default:
      return state;
  }
};
const store = createStore(reducer);

export { addToDo, deleteToDo };
export default store;
