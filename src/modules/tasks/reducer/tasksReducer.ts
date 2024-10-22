import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {FilterType, TaskType} from '../../../common/type';
import {loadTasksFromLocalStorage, saveTasksToLocalStorage} from '../helpers';

interface initialStateType {
    tasksArr: TaskType[],
    filteredTasks: TaskType[],
}

const initialState: initialStateType = {
  tasksArr: loadTasksFromLocalStorage(),
  filteredTasks: loadTasksFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasksReducer',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<TaskType>) => {
      state.tasksArr.push(action.payload);
      state.filteredTasks = state.tasksArr;

      saveTasksToLocalStorage(state.tasksArr);
    },
    changeStatusTask: (state, action: PayloadAction<string>) => {
      const task = state.tasksArr.find(task => task.id === action.payload);
      if (task) {
        task.isActive = !task.isActive;
      }
      state.filteredTasks = state.tasksArr;

      saveTasksToLocalStorage(state.tasksArr);
    },
    getFilteredTasks: (state, action: PayloadAction<FilterType>) => {
      switch (action.payload) {
      case 'All':
        state.filteredTasks = state.tasksArr;
        break;
      case 'Active':
        state.filteredTasks = state.tasksArr.filter(task => !task.isActive);
        break;
      case 'Completed':
        state.filteredTasks = state.tasksArr.filter(task => task.isActive);
        break;
      default:
        state.filteredTasks = state.tasksArr;
        break;
      }
    },
    clearCompletedTasks: (state) => {
      state.tasksArr = state.tasksArr.filter(task => !task.isActive);
      state.filteredTasks = state.tasksArr;

      saveTasksToLocalStorage(state.tasksArr);
    },
  },
});
export const {
  addTask,
  changeStatusTask,
  getFilteredTasks,
  clearCompletedTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
