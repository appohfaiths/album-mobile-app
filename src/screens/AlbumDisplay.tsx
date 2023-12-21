import React, {useCallback} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {AlbumDisplayRouteProp} from 'navigation/types';
import {PhotoItem, ErrorStateComponent} from 'components';
import {useAppSelector, useAppDispatch} from 'redux/app/hooks';
import {Photo} from 'types/photosInterface';
import {fetchPhotos} from 'redux/features/photos/photosSlice';

export function AlbumDisplay(): React.JSX.Element {
  const route = useRoute<AlbumDisplayRouteProp>();
  const photos = useAppSelector(state => state.photos.photos);
  const isLoading = useAppSelector(state => state.photos.isLoading);
  const error = useAppSelector(state => state.photos.error);
  const dispatch = useAppDispatch();
  const {id} = route.params;

  const handleTryAgain = useCallback(() => {
    dispatch(fetchPhotos(id));
  }, [dispatch, id]);

  const renderItem = useCallback(
    ({item}: {item: Photo}) => <PhotoItem photo={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.purple800}
            size={150}
          />
        </View>
      )}
      {!isLoading && error ? (
        <View style={styles.activityIndicator}>
          <ErrorStateComponent
            errorText={'Something went wrong fetching album list!'}
            onPress={handleTryAgain}
          />
        </View>
      ) : null}
      <View>
        <FlatList
          numColumns={2}
          data={photos}
          renderItem={renderItem}
          keyExtractor={photo => photo.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
