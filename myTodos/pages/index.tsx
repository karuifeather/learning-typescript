import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, Todo, deleteTodo } from '../store/actions/todosAction';
import { TodosState } from '../store/reducers/todosReducer';
import { StoreState } from '../store/reducers';
interface AppProps {
  todos: TodosState;
  fetchTodos(): any;
  deleteTodo(): any;
}

interface AppState {
  fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.todos.length && this.props.todos.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  renderList(): JSX.Element[] {
    return this.props.todos.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'Loading' : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: TodosState } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
