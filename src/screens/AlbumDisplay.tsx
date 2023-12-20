import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {AlbumDisplayRouteProp} from 'navigation/types';
import {PhotoItem} from 'components';
import {useAppSelector} from 'redux/app/hooks';

export function AlbumDisplay(): React.JSX.Element {
  const route = useRoute<AlbumDisplayRouteProp>();
  const photos = useAppSelector(state => state.photos.photos);
  const isLoading = useAppSelector(state => state.photos.isLoading);
  // const error = useAppSelector(state => state.photos.error);
  const {id} = route.params;

  console.log(photos);
  console.log(id);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading && <Text>Loading images</Text>}
        <FlatList
          numColumns={2}
          data={photos}
          renderItem={({item}) => <PhotoItem photo={item} />}
          keyExtractor={photo => photo.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
