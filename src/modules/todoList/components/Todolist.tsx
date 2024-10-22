import {ChangeEvent, useState} from 'react';

import {v1} from 'uuid';

import {useAppDispatch} from '../../../store';
import {addTask} from '../../tasks/reducer/tasksReducer.ts';
import {Tasks} from '../../tasks/components/taskList/Tasks.tsx';

import s from './Todolist.module.css';

export const Todolist = () => {

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [isTasksVisible, setIsTasksVisible] = useState<boolean>(true);
  const [maxLengthReached, setMaxLengthReached] = useState<boolean>(false);

  const MAX_LENGTH = 70;

  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.currentTarget.value;

    setTaskTitle(valueInput);

    if (valueInput.length <= MAX_LENGTH) {
      setTaskTitle(valueInput);
      setMaxLengthReached(false);
    } else {
      setMaxLengthReached(true);
    }
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
      setMaxLengthReached(false);
    }
  };

  const toggleTasksVisibility = () => {
    setIsTasksVisible(prev => !prev);
  };

  return (
    <div className={s.todolistContainer}>
      <div className={s.inputContainer}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={taskTitle}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          maxLength={MAX_LENGTH+1}
        />
        <span className={s.arrow} onClick={toggleTasksVisibility}>
          {isTasksVisible ? '▼' : '▲'}
        </span>
      </div>
      {maxLengthReached && (
        <div className={s.textError}>
          *The maximum length of the text is {MAX_LENGTH} characters
        </div>)}
      {isTasksVisible && (
        <div className={s.tasksContainer}>
          <Tasks />
        </div>
      )}
    </div>
  );
};
