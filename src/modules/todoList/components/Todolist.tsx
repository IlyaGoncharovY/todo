import s from './Todolist.module.css';

export const Todolist = () => {
  return (
    <div className={s.todolistContainer}>
      <input type="text" placeholder={'What needs to be done?'}/>
    </div>
  );
};
