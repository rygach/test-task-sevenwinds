import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import contact from './slices/articlesSlice';

export const store = configureStore({
  reducer: {
    contact,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
