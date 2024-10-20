import {useCallback, useState} from 'react';

import {FilterType} from '../../../../common/type';
import {CommonButton} from '../../../../common/components';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {clearCompletedTasks, getFilteredTasks} from '../../../tasks/reducer/tasksReducer.ts';

import s from './AppFooter.module.css';

export const AppFooter = () => {
  const tasksArr = useAppSelector(state => state.tasksArr.tasksArr);
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

  const dispatch = useAppDispatch();

  const setFilterForTasksHandler = useCallback((filter: FilterType) => {
    dispatch(getFilteredTasks(filter));
    setActiveFilter(filter);
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
      <div className={s.countContainer}>
        <p>
          {lengthActiveElTasksArr} items left
        </p>
      </div>
      <div className={s.buttonGroupContainer}>
        <CommonButton
          title={'All'}
          handlerChangeFilter={setFilterForTasksHandler}
          isActive={activeFilter === 'All'}
        />
        <CommonButton
          title={'Active'}
          handlerChangeFilter={setFilterForTasksHandler}
          isActive={activeFilter === 'Active'}
        />
        <CommonButton
          title={'Completed'}
          handlerChangeFilter={setFilterForTasksHandler}
          isActive={activeFilter === 'Completed'}
        />
      </div>
      <div>
        <CommonButton
          titleForDelete={'Clear completed'}
          handlerDelete={clearCompletedHandler} />
      </div>
    </div>
  );
};
