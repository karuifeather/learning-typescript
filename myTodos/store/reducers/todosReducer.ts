import { Todo, ActionTypes, Action } from '../actions';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
