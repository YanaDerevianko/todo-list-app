import TodosForm from "../TodosForm/TodosForm";
import TodoList from "../TodoList/TodoList";
import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <TodosForm />
      <TodoList />  
    </Container>
  );
};
