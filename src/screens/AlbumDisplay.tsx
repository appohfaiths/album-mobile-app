import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {AlbumDisplayRouteProp} from 'navigation/types';
import {useAppSelector} from 'redux/app/hooks';

export function AlbumDisplay(): React.JSX.Element {
  const route = useRoute<AlbumDisplayRouteProp>();
  const photos = useAppSelector(state => state.photos.photos);
  const {id} = route.params;

  // console.log(photos);
  console.log(id);
  return (
    <View>
      <Text>Album Display</Text>
    </View>
  );
}
