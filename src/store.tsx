import {
  createAction,
  configureStore,
  createReducer,
  PayloadAction,
  createSlice,
  CaseReducer
} from "@reduxjs/toolkit";

export const ADD = "ADD";
export const DELETE = "DELETE";

export interface TodoState {
  text: string;
  id: number;
}
const initialTodoState: TodoState[] = [];

// interface AddAction {
//   type: typeof ADD;
//   payload: string;
// }
// interface DeleteAction {
//   type: typeof DELETE;
//   payload: number;
// }
// type todoStateAction = AddAction | DeleteAction;

// 1. createAction 방법1
// const addToDo = createAction<string>("ADD");
// const deleteToDo = createAction<number>("DELETE");

// 2. createAction 방법2
// function withPayloadtype<T>() {
//   return (t: T) => ({ payload: t });
// }
// const addToDo = createAction("ADD", withPayloadtype<string>());
// const deleteToDo = createAction("DELETE", withPayloadtype<number>());

// 기본 reducer
// const reducer = (state = initialTodoState, action: todoStateAction) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return [...state.filter(toDo => toDo.id !== action.payload)];
//     default:
//       return state;
//   }
// };

// 1. createReducer
// const reducer = createReducer(initialTodoState, {
//   [addToDo.type]: (state: TodoState[], action: PayloadAction<string>) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo.type]: (state: TodoState[], action: PayloadAction<number>) =>
//     state.filter(toDo => toDo.id !== action.payload)
// });

// 2. Type-Safe createReducer
// const reducer = createReducer(initialTodoState, builder =>
//   builder
//     .addCase(addToDo, (state: TodoState[], action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state: TodoState[], action) =>
//       state.filter(toDo => toDo.id !== action.payload)
//     )
// );

// createSlice
const toDos = createSlice({
  name: "toDoReducer",
  initialState: initialTodoState,
  reducers: {
    add: (state: TodoState[], action: PayloadAction<string>) => [
      { text: action.payload, id: Date.now() },
      ...state
    ],
    remove: (state: TodoState[], action: PayloadAction<number>) =>
      state.filter(toDo => toDo.id !== action.payload)
  }
});

const store = configureStore({ reducer: toDos.reducer });
// export { addToDo, deleteToDo };
export const { add, remove } = toDos.actions;
export default store;
