import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todosActions from "../../../redux/todos/todos-actions";
import {
  Container,
  Button,
  CheckBox,
  ItemWrapper,
  TextTodo,
  ButtonDel,
  ButtonSave,
  Area,
} from "./TodoItem.styled";

const Todo = ({
  todo,
  id,
  completed,
  onToggleCompleted,
  onDelete,
}) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const editTodo = (todo) => {
    setEdit(true);
    setValue(todo);
  };

  const update = (id, value) => {
    dispatch(todosActions.updateTodo(id, value));
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <Container>
          <Area value={value} onChange={(e) => setValue(e.target.value)} />
          <ButtonSave onClick={() => update(id, value)}>Save</ButtonSave>
        </Container>
      ) : (
        <ItemWrapper>
          <CheckBox
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
          <TextTodo>{todo}</TextTodo>
          <Button type="button" onClick={() => editTodo(todo)}>
            Edit
          </Button>
          <ButtonDel type="button" onClick={onDelete}>
            Delete
          </ButtonDel>
        </ItemWrapper>
      )}
    </>
  );
};
export default Todo;
