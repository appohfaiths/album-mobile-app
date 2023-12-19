import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from 'redux/app/hooks';
import {fetchAlbums} from 'redux/features/albums/albumSlice';

export function Home({navigation}): React.JSX.Element {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(state => state.albums.albums);
  const error = useAppSelector(state => state.albums.error);
  const isLoading = useAppSelector(state => state.albums.isLoading);

  console.log(albums);
  console.log(isLoading);

  React.useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        {isLoading && <Text>The albums are loading</Text>}
        {!isLoading && error ? <Text>Error: {error}</Text> : null}
        {!isLoading && albums.length > 0 ? <Text /> : null}
      </View>
    </SafeAreaView>
  );
}
