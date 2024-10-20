import {FC, memo, useCallback} from 'react';

import {TaskType} from '../../../../../common/type';

import arrow from '../../../../../assets/checkMark.png';

import {useAppDispatch} from '../../../../../store';

import {changeStatusTask} from '../../../reducer/tasksReducer.ts';

import {CommonCheckBox} from '../../../../../common/components/checkBox/CommonCheckBox.tsx';

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
      <p>
        {task.title}
      </p>
    </div>
  );
});
