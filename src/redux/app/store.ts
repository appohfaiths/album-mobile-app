import {configureStore} from '@reduxjs/toolkit';
// import {createLogger} from 'redux-logger';
import albumReducer from '../features/albums/albumSlice';
import photosReducer from '../features/photos/photosSlice';

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    albums: albumReducer,
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
