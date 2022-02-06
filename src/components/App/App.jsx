import TodosForm from "../TodosForm/TodosForm";
import TodoList from "../TodoList/TodoList";
import TodoFilter from '../TodoFilter/TodoFilter';
import Statistic from '../TodoStatistic/TodoStatistic';
import DisplayTodos from '../DisplayTodos/DisplayTodos';
import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <TodosForm />
      {/* <TodoFilter /> */}
      {/* <Statistic /> */}
      {/* <DisplayTodos /> */}
      <TodoList />  
    </Container>
  );
};
