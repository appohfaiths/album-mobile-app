import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {List} from 'react-native-paper';
import {AlbumListItemProps} from './types';
import {HomeScreenNavigationProp} from 'navigation/types';
import {fetchPhotos} from 'redux/features/photos/photosSlice';
import {useAppDispatch} from 'redux/app/hooks';

export function AlbumListItem({album}: AlbumListItemProps): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const handlePress = id => {
    dispatch(fetchPhotos(id));
    navigation.navigate('AlbumDisplay', {id: id});
  };

  return (
    <List.Item
      title={album.title}
      right={DeleteIcon}
      onPress={() => handlePress(album.id)}
    />
  );
}

const DeleteIcon: React.FC = (props: any) => (
  <List.Icon {...props} icon="delete" />
);
