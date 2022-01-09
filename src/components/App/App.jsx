import TodosForm from "../TodosForm/TodosForm";
import TodoList from "../TodoList/TodoList";
import TodoFilter from '../TodoFilter/TodoFilter';
import Statistic from '../TodoStatistic/TodoStatistic'

export const App = () => {
  return (
    <>
      <TodosForm />
      <TodoFilter />
      <Statistic />
      <TodoList />  
    </>
  );
};
