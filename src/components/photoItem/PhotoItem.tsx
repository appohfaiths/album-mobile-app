import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {PhotoListItemProps} from './types';

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
    width: 110,
    height: 100,
    margin: 5,
  },
  photo: {
    width: 100,
    height: 80,
  },
  photoTitle: {
    fontSize: 10,
    margin: 3,
  },
});
