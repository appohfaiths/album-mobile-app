import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {PhotoListItemProps} from './types';
import {capitalise} from 'utils/utils';

const {width} = Dimensions.get('window');

export function PhotoItem({photo}: PhotoListItemProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={{uri: photo.url}} style={styles.photo} />
      <View style={styles.textContainer}>
        <Text style={styles.photoTitle} numberOfLines={1} ellipsizeMode="tail">
          {capitalise(photo.title)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (width - 40) / 2,
    height: 250,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  photo: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    paddingHorizontal: 5,
    overflow: 'hidden',
  },
  photoTitle: {
    fontSize: 17,
    margin: 3,
  },
});
