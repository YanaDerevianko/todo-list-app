import React, { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import {Container, Button, CheckBox, ItemWrapper,TextTodo, ButtonDel, ButtonSave, Area } from './TodoItem.styled'

const Todo = ({ todo, id,  completed, onToggleCompleted, onDelete, updateTodo }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const editTodo = (todo) => {
    setEdit(true);
    setValue(todo);
  };



  return (
    <>
    {edit 
    ? 
    <Container>
      <Area  value={value} onChange={(e)=> setValue(e.target.value)}/>
      <ButtonSave onClick={()=>updateTodo(value, id, completed)}>Save</ButtonSave>
    </Container>
    :

    <ItemWrapper>
      <CheckBox type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <TextTodo>{todo}</TextTodo>
      <Button type="button" onClick={()=>editTodo(todo)}>
        Edit
      </Button>
      <ButtonDel type="button" onClick={onDelete}>
        Delete
      </ButtonDel>
    </ItemWrapper>

  }
      
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateTodo: (value, id) =>  dispatch(todosActions.updateTodo(value, id)),
});
export default connect(null, mapDispatchToProps)(Todo);

