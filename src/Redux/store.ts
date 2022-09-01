import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import article from './slices/articlesSlice';

export const store = configureStore({
  reducer: {
    article,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
