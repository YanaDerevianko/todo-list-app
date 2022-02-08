import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import { Title, InputField, Button, Container } from "./TodosForm.styled";
import SelectButton from "../SelectButton/SelectButton";
import { getFilterStatus } from "../../utils/todos-selectors";

const TodosForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const filterStatus = useSelector(getFilterStatus);

  const updateFilter = (e) => {
    dispatch(todosActions.updateFilterStatus(e.target.value));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Add text your todo");
      return;
    }
    dispatch(todosActions.addTodo(todo));
    setTodo("");
  };

  return (
    <div>
      <Title>My ToDo App</Title>
      <Container>
        <InputField
          type="text"
          placeholder="add your todos"
          onChange={(e) => handleChange(e)}
          value={todo}
        />
        <Button onClick={() => add()}>Add todo</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </SelectButton>
      </Container>
    </div>
  );
};

export default TodosForm;
