import React from 'react';
import {List} from 'react-native-paper';
import {AlbumListItemProps} from './types';

export function AlbumListItem({album}: AlbumListItemProps): React.JSX.Element {
  return <List.Item title={album.title} right={DeleteIcon} />;
}

const DeleteIcon: React.FC = (props: any) => (
  <List.Icon {...props} icon="delete" />
);
