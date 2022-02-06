import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "../todos/todos-actions";



const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map((todo) =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    ),
  [actions.updateTodo]: (state, { payload }) =>
  // console.log(payload)
  
   state.map((todo) =>
      todo.id === payload.id ? { ...todo, todo: payload.todo } : todo

  ),
 

});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((todo) => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
