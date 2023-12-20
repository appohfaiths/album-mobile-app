import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {AlbumListItemProps} from './types';
import {HomeScreenNavigationProp} from 'navigation/types';
import {fetchPhotos} from 'redux/features/photos/photosSlice';
import {useAppDispatch} from 'redux/app/hooks';

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
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const DeleteIcon: React.FC = (props: any) => (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <List.Icon {...props} icon="delete" />
    </TouchableOpacity>
  );

  return (
    <View>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  title: {
    flex: 0.9,
  },
  deleteButton: {
    flex: 0.1,
  },
});
