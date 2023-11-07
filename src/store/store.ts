import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/auth';
import emptySplitApi from '@/store/emptyApi';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([emptySplitApi.middleware, logger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
