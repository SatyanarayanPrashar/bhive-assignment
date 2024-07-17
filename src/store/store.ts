import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import spaceReducer from './spaceSlice';

export const store = configureStore({
  reducer: {
    openpage: pageReducer,
    space: spaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
