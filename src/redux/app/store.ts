import {configureStore} from '@reduxjs/toolkit';
// import {createLogger} from 'redux-logger';
import albumReducer from '../features/albums/albumSlice';

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    albums: albumReducer,
  },
  // middleware: getDefaultMiddleware => {
  //   getDefaultMiddleware().concat(logger);
  // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
