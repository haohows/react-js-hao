import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  todoList: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoItem: (state, { payload }) => {
      state.todoList.push(payload);
      swlAlert.fire({
        title: '新增成功',
        icon: 'success',
        confirmButtonText: '確認'
      })
    },
    deleteTodoItem: (state, { payload }) => {
      state.todoList = state.todoList.filter(item => item.id !== payload)
      swlAlert.fire({
        title: '刪除成功',
        icon: 'success',
        confirmButtonText: '確認'
      })
    },
  }
});

export const { setTodoItem, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;