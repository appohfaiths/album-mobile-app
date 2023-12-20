import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {PhotoListItemProps} from './types';

const {width} = Dimensions.get('window');

export function PhotoItem({photo}: PhotoListItemProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.photoTitle}>{photo.title}</Text>
      <Image source={{uri: photo.url}} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (width - 10) / 2,
    height: 100,
    margin: 5,
  },
  photo: {
    width: null,
    height: 80,
  },
  photoTitle: {
    fontSize: 10,
    margin: 3,
  },
});
