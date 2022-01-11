import { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import {Title, InputField, Button} from './TodosForm.styled'

const TodosForm = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
       setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Add text your todo");
    } else {
        addTodo(todo)
        setTodo('')
    }
  };

  return (
    <div>
      <Title>My ToDo App</Title>
      <div>
        <InputField
          type="text"
          placeholder="add your todos"
          onChange={(e) => handleChange(e)}
          value={todo}
        />
        <Button onClick={() => add()}>Add todo</Button>
      </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (todo) => dispatch(todosActions.addTodo(todo)),
    };
  };
export default connect(null, mapDispatchToProps)(TodosForm);
