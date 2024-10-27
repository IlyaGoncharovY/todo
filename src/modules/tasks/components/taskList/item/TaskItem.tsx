import {FC, memo, useCallback} from 'react';

import {TaskType} from '../../../../../common/type';
import {useAppDispatch} from '../../../../../store';
import arrow from '../../../../../assets/checkMark.png';
import {CommonCheckBox} from '../../../../../common/components';
import {changeStatusTask} from '../../../reducer/tasksReducer.ts';

import s from './TaskItem.module.css';

interface ITaskItem {
    task:TaskType
}

export const TaskItem:FC<ITaskItem> = memo(({
  task,
}) => {

  const dispatch = useAppDispatch();

  const changeStatusTaskHandler = useCallback(() => {
    dispatch(changeStatusTask(task.id));
  }, [dispatch, task.id]);

  return (
    <div className={s.taskItemContainer}>
      <CommonCheckBox
        imgSrc={arrow}
        changeCheckedValue={changeStatusTaskHandler}
        checkedStatus={task.isActive}
      />
      <p title={task.title} className={`${s.textTask} ${task.isActive ? s.checkedTask : ''}`}>
        {task.title}
      </p>
    </div>
  );
});
