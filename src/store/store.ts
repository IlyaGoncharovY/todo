import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import tasksReducer from '../modules/tasks/reducer/tasksReducer.ts';

export const store = configureStore({
  reducer: {
    tasksArr: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
