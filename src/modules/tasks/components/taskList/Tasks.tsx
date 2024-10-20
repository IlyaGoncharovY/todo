import {useAppSelector} from '../../../../store';

import s from './Tasks.module.css';
import {TaskItem} from './item/TaskItem.tsx';

export const Tasks = () => {

  const filteredTasks = useAppSelector(state => state.tasksArr.filteredTasks);

  return (
    <div className={s.tasksListContainer}>
      {filteredTasks.map(task => <TaskItem key={task.id} task={task}/>)}
    </div>
  );
};
