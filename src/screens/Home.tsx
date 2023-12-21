import React, {useCallback} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {useAppSelector, useAppDispatch} from 'redux/app/hooks';
import {fetchAlbums} from 'redux/features/albums/albumSlice';
import {AlbumListItem} from 'components';
import {Album} from 'types/albumsInterface';

export function Home(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(state => state.albums.albums);
  const error = useAppSelector(state => state.albums.error);
  const isLoading = useAppSelector(state => state.albums.isLoading);

  React.useEffect(() => {
    dispatch(fetchAlbums());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    ({item}: {item: Album}) => <AlbumListItem album={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Albums</Text>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.purple800}
            size={150}
          />
        </View>
      )}
      {!isLoading && error ? <Text>Error: {error}</Text> : null}
      <View>
        {!isLoading && albums.length > 0 ? (
          <FlatList
            data={albums}
            renderItem={renderItem}
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
    backgroundColor: '#eaeaea',
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
