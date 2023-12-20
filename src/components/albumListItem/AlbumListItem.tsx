import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {AlbumListItemProps} from './types';
import {HomeScreenNavigationProp} from 'navigation/types';
import {fetchPhotos} from 'redux/features/photos/photosSlice';
import {useAppDispatch} from 'redux/app/hooks';
import {deleteAlbum} from 'redux/features/albums/albumSlice';

export function AlbumListItem({album}: AlbumListItemProps): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const handlePress = e => {
    e.stopPropagation();
    dispatch(fetchPhotos(album.id));
    navigation.navigate('AlbumDisplay', {id: album.id});
  };

  const handleDelete = e => {
    e.stopPropagation();
    console.log('delete pressed');
    dispatch(deleteAlbum(album.id));
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const DeleteIcon: React.FC = (props: any) => (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <List.Icon {...props} icon="delete" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer}>
        <List.Item
          title={album.title}
          onPress={handlePress}
          style={styles.title}
        />
        <View
          onStartShouldSetResponder={() => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <DeleteIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    flex: 0.9,
    textAlign: 'center',
  },
  deleteButton: {
    flex: 0.1,
  },
});
