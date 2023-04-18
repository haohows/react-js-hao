import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todo from './slices/todo';

const reducer = combineReducers({ todo });
export default configureStore({ reducer });
