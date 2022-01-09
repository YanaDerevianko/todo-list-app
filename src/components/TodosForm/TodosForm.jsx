import { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

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
      <h1>My ToDo App</h1>
      <div>
        <input
          type="text"
          placeholder="add your todos"
          onChange={(e) => handleChange(e)}
          value={todo}
        />
        <button onClick={() => add()}>Add todos</button>
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
