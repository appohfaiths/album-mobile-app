export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosState {
  photos: Photo[];
  isLoading: boolean;
  error: string | null;
}
