import { combineReducers } from 'redux';
import { todosReducer, TodosState } from './todosReducer';

export interface StoreState {
  todos: TodosState;
}

export default combineReducers<StoreState>({
  todos: todosReducer,
});
