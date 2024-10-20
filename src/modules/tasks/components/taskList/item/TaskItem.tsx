import {FC} from 'react';

import {TaskType} from '../../../../../common/type';

import arrow from '../../../../../assets/checkMark.png';

import {useAppDispatch} from '../../../../../store';

import {changeStatusTask} from '../../../reducer/tasksReducer.ts';

import s from './TaskItem.module.css';

interface ITaskItem {
    task:TaskType
}

export const TaskItem:FC<ITaskItem> = ({
  task,
}) => {

  const dispatch = useAppDispatch();

  const changeStatusTaskHandler = () => {
    dispatch(changeStatusTask(task.id));
  };

  return (
    <div className={s.taskItemContainer}>
      <div className={s.fakeCheckBoxContainer} onClick={changeStatusTaskHandler}>
        <img
          src={arrow}
          alt="arrow"
          className={task.isActive ? s.activeImg : ''}
        />
      </div>
      <p>
        {task.title}
      </p>
    </div>
  );
};
