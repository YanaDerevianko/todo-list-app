import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

// const addTodo = (todo) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     todo,
//     completed: false,
//   },
// });
const addTodo = createAction("todos/add", (todo) => {
  return {
    payload: {
      id: shortid.generate(),
      todo,
      completed: false,
    },
  };
});

// const deleteTodo = todoId => ({
//     type: types.DELETE,
//     payload: todoId

// })
const deleteTodo = createAction("todos/delete");

// const  changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

const changeFilter = createAction("todos/changeFilter");

const toggleCompleted = createAction("todos/toggleCompleted");
const updateTodo = createAction("todos/update");

// const updateTodo = createAction("todos/update", (value) => {
//   console.log(value);
//   return {
//     payload: {
//       value,
//     },
//   };
// });

export default {
  addTodo,
  deleteTodo,
  changeFilter,
  toggleCompleted,
  updateTodo,
};
