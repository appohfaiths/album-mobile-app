import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {AlbumDisplayRouteProp} from 'navigation/types';
import {PhotoItem} from 'components';
import {useAppSelector} from 'redux/app/hooks';

export function AlbumDisplay(): React.JSX.Element {
  const route = useRoute<AlbumDisplayRouteProp>();
  const photos = useAppSelector(state => state.photos.photos);
  const isLoading = useAppSelector(state => state.photos.isLoading);
  const error = useAppSelector(state => state.photos.error);
  const {id} = route.params;

  // console.log(photos);
  console.log(id);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={photos}
          renderItem={({item}) => <PhotoItem photo={item} />}
          keyExtractor={photo => photo.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
