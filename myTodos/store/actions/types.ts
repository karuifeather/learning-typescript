import { DeleteTodoAction, FetchTodoAction } from './todosAction';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodoAction | DeleteTodoAction;
