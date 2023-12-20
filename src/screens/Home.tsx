import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useAppSelector, useAppDispatch} from 'redux/app/hooks';
import {fetchAlbums} from 'redux/features/albums/albumSlice';
import {AlbumListItem} from 'components';

export function Home(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(state => state.albums.albums);
  const error = useAppSelector(state => state.albums.error);
  const isLoading = useAppSelector(state => state.albums.isLoading);

  React.useEffect(() => {
    dispatch(fetchAlbums());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
        {isLoading && <ActivityIndicator />}
        {!isLoading && error ? <Text>Error: {error}</Text> : null}
        {!isLoading && albums.length > 0 ? (
          <FlatList
            data={albums}
            renderItem={({item}) => <AlbumListItem album={item} />}
            keyExtractor={album => album.id.toString()}
            onRefresh={() => dispatch(fetchAlbums())}
            refreshing={isLoading}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
