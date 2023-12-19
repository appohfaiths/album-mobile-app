export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumState {
  albums: Album[];
  isLoading: boolean;
  error: string | null;
}
