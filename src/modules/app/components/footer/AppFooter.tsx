import {useAppDispatch, useAppSelector} from '../../../../store';

import {FilterType} from '../../../../common/type';

import {clearCompletedTasks, getFilteredTasks} from '../../../tasks/reducer/tasksReducer.ts';

import s from './AppFooter.module.css';

export const AppFooter = () => {
  const tasksArr = useAppSelector(state => state.tasksArr.tasksArr);

  const dispatch = useAppDispatch();

  const setFilterForTasksHandler = (filter: FilterType) => {
    dispatch(getFilteredTasks(filter));
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <div className={s.appFooterContainer}>
      <div>
        {tasksArr.filter(task => !task.isActive).length} items left
      </div>
      <div>
        <button onClick={() => setFilterForTasksHandler('All')}>all</button>
        <button onClick={() => setFilterForTasksHandler('Active')}>active</button>
        <button onClick={() => setFilterForTasksHandler('Completed')}>completed</button>
      </div>
      <div>
        <button onClick={clearCompletedHandler}> clear completed</button>
      </div>
    </div>
  );
};
