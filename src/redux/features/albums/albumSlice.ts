import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from 'redux/app/store';
import axios from 'axios';
import {Album, AlbumState} from 'types/albumsInterface';

const initialState: AlbumState = {
  albums: [],
  isLoading: false,
  error: null,
};

// generates pending, fulfilled, rejected action types
export const fetchAlbums = createAsyncThunk('albums/getAlbums', async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const deleteAlbum = createAsyncThunk(
  'albums/deleteAlbum',
  async (id: number) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
      );
      const data = response.data;

      return data;
    } catch (error) {
      // Handle errors here
      console.error('Error deleting album:', error);
      throw error;
    }
  },
);

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
    builder.addCase(deleteAlbum.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedAlbumId = action.meta.arg; // Access the ID passed to the thunk
      state.albums = state.albums.filter(album => album.id !== deletedAlbumId);

      state.error = '';
    });
    builder.addCase(deleteAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectIsLoading = (state: RootState) => state.albums.isLoading;
export default albumSlice.reducer;
