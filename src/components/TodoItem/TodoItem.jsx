import React, { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

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
    <div>
      <textarea value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={()=>updateTodo(value, id, completed)}>Save</button>
    </div>
    :

    <div>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p>{todo}</p>
      <button type="button" onClick={()=>editTodo(todo)}>
        Edit
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>

  }
      
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateTodo: (value, id) =>  dispatch(todosActions.updateTodo(value, id)),
});
export default connect(null, mapDispatchToProps)(Todo);

