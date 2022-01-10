import TodosForm from "../TodosForm/TodosForm";
import TodoList from "../TodoList/TodoList";
import TodoFilter from '../TodoFilter/TodoFilter';
import Statistic from '../TodoStatistic/TodoStatistic';
import DisplayTodos from '../DisplayTodos/DisplayTodos';

export const App = () => {
  return (
    <>
      <TodosForm />
      <TodoFilter />
      <Statistic />
      <DisplayTodos />
      <TodoList />  
    </>
  );
};
