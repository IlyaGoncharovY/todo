import {Todolist} from '../../todoList/components';

import {AppFooter} from './footer';
import {AppHeader} from './header';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.appContainer}>
      <AppHeader/>
      <Todolist/>
      <AppFooter/>
    </div>
  );
};
