import { v1 } from 'uuid';

import {ChangeEvent, useState} from 'react';

import {Tasks} from '../../tasks/components/taskList/Tasks.tsx';

import {useAppDispatch} from '../../../store';

import {addTask} from '../../tasks/reducer/tasksReducer.ts';

import s from './Todolist.module.css';

export const Todolist = () => {

  const [taskTitle, setTaskTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskTitle.trim()) {
      const newTask = {
        id: v1(),
        title: taskTitle.trim(),
        isActive: false,
      };
      dispatch(addTask(newTask));
      setTaskTitle('');
    }
  };

  return (
    <div className={s.todolistContainer}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={taskTitle}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Tasks/>
    </div>
  );
};
