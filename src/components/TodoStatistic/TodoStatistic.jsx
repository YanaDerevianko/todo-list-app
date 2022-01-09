import { connect } from "react-redux";

const Statistic = ({ total, completed, active }) => (
  <div>
    <p>
      <span>{total}</span>
      <span>Total</span>
    </p>
    <p>
      <span>{completed}</span>
      <span>Completed</span>
    </p>
    <p>
      <span>{active}</span>
      <span>Active</span>
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
