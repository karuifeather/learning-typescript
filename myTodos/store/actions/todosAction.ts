import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = `https://jsonplaceholder.typicode.com/todos`;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get<Todo[]>(url);

  dispatch<FetchTodoAction>({
    type: ActionTypes.fetchTodos,
    payload: data,
  });
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
