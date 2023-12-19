import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from 'redux/app/store';
import axios from 'axios';
import {Album, AlbumState} from 'types/albumsInterface';

const initialState: AlbumState = {
  albums: [{userId: 3344, id: 1, title: 'Melo'}],
  isLoading: false,
  error: null,
};

// generates pending, fulfilled, rejected action types
export const fetchAlbums = createAsyncThunk('albums/getAlbums', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.data);
});

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAlbums.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action: PayloadAction<Album[]>) => {
        state.isLoading = false;
        state.albums = action.payload;
        state.error = '';
      },
    );
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.albums = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectIsLoading = (state: RootState) => state.albums.isLoading;
export default albumSlice.reducer;
