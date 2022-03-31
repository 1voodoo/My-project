import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './News/Reducer';
import newsDescriptionReducer from './NewsDescription/Reducer';

export const store = configureStore({
  reducer: {
    GetAllNews: newsReducer,
    newsDescription: newsDescriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;