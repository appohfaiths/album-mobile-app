import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {AlbumDisplayRouteProp} from 'navigation/types';

export function AlbumDisplay(): React.JSX.Element {
  const route = useRoute<AlbumDisplayRouteProp>();
  const {id} = route.params;

  console.log(id);
  return (
    <View>
      <Text>Album Display</Text>
    </View>
  );
}
