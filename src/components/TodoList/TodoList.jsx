import Todo from "../TodoItem/TodoItem";
import { connect } from "react-redux";
import TodosActions from "../../redux/todos/todos-actions";
import {List, Item } from './TodoList.styled'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, onUpdateTodo }) => (


  <List>
    {todos.map(({ id, todo, completed }) => (
      <Item key={id}>
        <Todo
          id={id}
          todo={todo}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
          updateTodo={()=> onUpdateTodo(id)}
        />
      </Item>
    ))}
  </List>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allTodos.filter(({ todo }) =>
    todo.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.items, state.todos.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(TodosActions.deleteTodo(id)),
  onToggleCompleted: (id) => dispatch(TodosActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
