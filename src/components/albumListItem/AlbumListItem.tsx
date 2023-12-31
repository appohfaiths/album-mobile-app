import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {AlbumListItemProps} from './types';
import {HomeScreenNavigationProp} from 'navigation/types';
import {fetchPhotos, clearPhotos} from 'redux/features/photos/photosSlice';
import {useAppDispatch} from 'redux/app/hooks';
import {deleteAlbum} from 'redux/features/albums/albumSlice';
import {capitalise} from 'utils/utils';
import {ConfirmationDialog} from 'components/confirmationDialog';

function AlbumListItemComponent({
  album,
}: AlbumListItemProps): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = React.useState(false);

  const handlePress = useCallback(
    (e: any) => {
      e.stopPropagation();
      dispatch(clearPhotos());
      dispatch(fetchPhotos(album.id));
      navigation.navigate('AlbumDisplay', {id: album.id});
    },
    [dispatch, navigation, album.id],
  );

  const handleConfirm = useCallback(() => {
    dispatch(deleteAlbum(album.id));
    setDeleteDialogVisible(false);
  }, [dispatch, album.id]);

  const handleDelete = (e: any) => {
    setDeleteDialogVisible(true);
    e.stopPropagation();
  };

  const hideDialog = () => setDeleteDialogVisible(false);

  // eslint-disable-next-line react/no-unstable-nested-components
  const DeleteIcon: React.FC = React.memo(props => (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <List.Icon {...props} icon="delete" />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <ConfirmationDialog
        icon={'alert-circle'}
        title={'Are you sure you want to delete?'}
        visible={deleteDialogVisible}
        onConfirm={handleConfirm}
        onCancel={hideDialog}
      />
      <TouchableOpacity style={styles.titleContainer}>
        <List.Item
          title={capitalise(album.title)}
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

export const AlbumListItem = React.memo(AlbumListItemComponent);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
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
