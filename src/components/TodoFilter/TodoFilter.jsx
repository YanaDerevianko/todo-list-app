import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import {Filter, InputFilter} from './TodoFilter.styled'

const TodoFilter = ({ value, onChange }) => (
  <div>
    <Filter>Find your todo</Filter>
    <InputFilter
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);