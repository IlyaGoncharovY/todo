import { describe, it, expect } from 'vitest';

import {TaskType} from '../../../common/type';

import tasksReducer, {addTask, changeStatusTask, clearCompletedTasks, getFilteredTasks} from './tasksReducer.ts';

/**
 * Моковые данные для тестов, эмулирующие таску.
 */
const mockTask: TaskType = { id: '1', title: 'Test task', isActive: true };
const completedTask: TaskType = { id: '2', title: 'Completed task', isActive: false };

describe('tasksReducer', () => {
  it('должно быть возвращено исходное состояние', () => {
    const initialState = tasksReducer(undefined, { type: '' });
    expect(initialState.tasksArr).toEqual([]);
    expect(initialState.filteredTasks).toEqual([]);
  });

  it('должна добавится таска', () => {
    const initialState = { tasksArr: [], filteredTasks: [] };
    const newState = tasksReducer(initialState, addTask(mockTask));
    expect(newState.tasksArr).toHaveLength(1);
    expect(newState.tasksArr[0]).toEqual(mockTask);
  });

  it('должен измениться статус у таски', () => {
    const initialState = { tasksArr: [mockTask], filteredTasks: [mockTask] };
    const newState = tasksReducer(initialState, changeStatusTask(mockTask.id));
    expect(newState.tasksArr[0].isActive).toBe(false);
  });

  it('должны отфильтроваться таски по флагу "All"', () => {
    const initialState = { tasksArr: [mockTask, completedTask], filteredTasks: [] };
    const newState = tasksReducer(initialState, getFilteredTasks('All'));
    expect(newState.filteredTasks).toHaveLength(2);
  });

  it('должны отфильтроваться таски по флагу "Active"', () => {
    const initialState = { tasksArr: [mockTask, completedTask], filteredTasks: [] };
    const newState = tasksReducer(initialState, getFilteredTasks('Active'));
    expect(newState.filteredTasks).toHaveLength(1);
    expect(newState.filteredTasks[0]).toEqual(completedTask);
  });

  it('должны отфильтроваться таски по флагу "Completed"', () => {
    const initialState = { tasksArr: [mockTask, completedTask], filteredTasks: [] };
    const newState = tasksReducer(initialState, getFilteredTasks('Completed'));
    expect(newState.filteredTasks).toHaveLength(1);
    expect(newState.filteredTasks[0]).toEqual(mockTask);
  });

  it('должны удалится выполненные таски', () => {
    const initialState = { tasksArr: [mockTask, completedTask], filteredTasks: [] };
    const newState = tasksReducer(initialState, clearCompletedTasks());
    expect(newState.tasksArr).toHaveLength(1);
    expect(newState.tasksArr[0]).toEqual(completedTask);
  });
});
