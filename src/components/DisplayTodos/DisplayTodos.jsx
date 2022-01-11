import { connect } from "react-redux";
import TodosActions from "../../redux/todos/todos-actions";
import React, { useState } from "react";
import Todo from "../TodoItem/TodoItem";
import {Button} from './DisplayTodos.styled'

const DisplayTodos = ({ todos, onToggleCompleted, onDelete, updateTodo }) => {
  const [sort, setSort] = useState("active");

  return (
    <div>
      <Button onClick={() => setSort("active")}>Active</Button>
      <Button onClick={() => setSort("completed")}>Completed</Button>
      <Button onClick={() => setSort("all")}>All</Button>
      <ul>
        {todos.length > 0 && sort === "active"
          ? todos.map(({ id, todo, completed }) => {
              return (
                todo.completed === false && (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completed={completed}
                    onToggleCompleted={() => onToggleCompleted(id)}
                    updateTodo={() => updateTodo(id)}
                    onDelete={() => onDelete(id)}
                  />
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "completed"
          ? todos.map(({ id, todo, completed }) => {
              return (
                todo.completed === true && (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completed={completed}
                    onToggleCompleted={() => onToggleCompleted(id)}
                    updateTodo={() => updateTodo(id)}
                    onDelete={() => onDelete(id)}
                  />
                )
              );
            })
          : null}
        {todos.length > 0 && sort === "all"
          ? todos.map(({ id, todo, completed }) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completed={completed}
                  onToggleCompleted={() => onToggleCompleted(id)}
                  updateTodo={() => updateTodo(id)}
                  onDelete={() => onDelete(id)}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(TodosActions.deleteTodo(id)),
    onToggleCompleted: (id) => dispatch(TodosActions.toggleCompleted(id)),
    updateTodo: (value, id) => dispatch(TodosActions.updateTodo(value, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
