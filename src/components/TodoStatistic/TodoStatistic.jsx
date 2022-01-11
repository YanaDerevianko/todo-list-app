import { connect } from "react-redux";
import {Number, Kind} from './TodoStatistic.styled'

const Statistic = ({ total, completed, active }) => (
  <div>
    <p>
      <Number>{total}</Number>
      <Kind>Total</Kind>
    </p>
    <p>
      <Number>{completed}</Number>
      <Kind>Completed</Kind>
    </p>
    <p>
      <Number>{active}</Number>
      <Kind>Active</Kind>
    </p>
  </div>
);

const getCompletedTodos = todos => todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  );
const mapStateToProps = (state) => ({
  total: state.todos.items.length,
  completed: getCompletedTodos(state.todos.items),
  active: state.todos.items.length - getCompletedTodos(state.todos.items)
});
export default connect(mapStateToProps)(Statistic);
