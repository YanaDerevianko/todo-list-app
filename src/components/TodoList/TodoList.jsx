import Todo from "./TodoItem/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import TodosActions from "../../redux/todos/todos-actions";
import { List, Item } from "./TodoList.styled";
import { getTodos, getFilterStatus } from "../../utils/todos-selectors";

const TodoList = () => {
  const todos = useSelector(getTodos);

  const dispatch = useDispatch();

  const onDeleteTodo = (id) => dispatch(TodosActions.deleteTodo(id));
  const toggleCompleted = (id) => dispatch(TodosActions.toggleCompleted(id));

  const filterStatus = useSelector(getFilterStatus);

  const filteredTodoList = todos.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    if (filterStatus === "completed") {
      return item.completed;
    } else {
      return item.completed === false;
    }
  });

  return (
    <List>
      {filteredTodoList.map(({ id, todo, completed }) => (
        <Item key={id}>
          <Todo
            id={id}
            todo={todo}
            completed={completed}
            onToggleCompleted={() => toggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </Item>
      ))}
    </List>
  );
};

export default TodoList;
