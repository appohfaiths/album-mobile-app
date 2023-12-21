import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';
import {RootState} from 'redux/app/store';
import axios from 'axios';
import {Photo, PhotosState} from 'types/photosInterface';

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  error: null,
};

export const fetchPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (albumId: number) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
      );
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const clearPhotos = createAction('photos/clearPhotos');

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearPhotos: state => {
      state.photos = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchPhotos.fulfilled,
      (state, action: PayloadAction<Photo[]>) => {
        state.isLoading = false;
        state.photos = action.payload;
        state.error = '';
      },
    );
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoading = false;
      state.photos = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const selectPhotos = (state: RootState) => state.photos.photos;
export default photosSlice.reducer;
