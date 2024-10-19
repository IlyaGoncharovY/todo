import {Todolist} from '../../todoList/components';

import {AppHeader} from './header';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.appContainer}>
      <AppHeader/>
      <Todolist/>
    </div>
  );
};
