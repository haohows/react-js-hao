
import { setTodoItem, deleteTodoItem } from '../slices/todo';

export const addItem = (data) => (dispatch) => {
  dispatch(setTodoItem(data));
};

export const deleteTodo = (data) => (dispatch) => {
  dispatch(deleteTodoItem(data));
};

