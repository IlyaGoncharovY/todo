import {useCallback} from 'react';

import {FilterType} from '../../../../common/type';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {clearCompletedTasks, getFilteredTasks} from '../../../tasks/reducer/tasksReducer.ts';

import s from './AppFooter.module.css';

export const AppFooter = () => {
  const tasksArr = useAppSelector(state => state.tasksArr.tasksArr);

  const dispatch = useAppDispatch();

  const setFilterForTasksHandler = useCallback((filter: FilterType) => {
    dispatch(getFilteredTasks(filter));
  }, [dispatch]);

  const clearCompletedHandler = useCallback(() => {
    dispatch(clearCompletedTasks());
  }, [dispatch]);

  /**
   * длина массива с isActive === false
   */
  const lengthActiveElTasksArr = tasksArr.filter(task => !task.isActive).length;

  return (
    <div className={s.appFooterContainer}>
      <div>
        {lengthActiveElTasksArr} items left
      </div>
      <div>
        <button onClick={() => setFilterForTasksHandler('All')}>all</button>
        <button onClick={() => setFilterForTasksHandler('Active')}>active</button>
        <button onClick={() => setFilterForTasksHandler('Completed')}>completed</button>
      </div>
      <div>
        <button onClick={clearCompletedHandler}>clear completed</button>
      </div>
    </div>
  );
};
