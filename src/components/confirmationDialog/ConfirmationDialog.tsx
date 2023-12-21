import React from 'react';
import {Dialog, Portal, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {ConfirmationDialogProps} from './types';

export function ConfirmationDialog({
  title,
  visible,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps): React.JSX.Element {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>
          {title || 'Confirmation Dialog'}
        </Dialog.Title>
        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
          <Button onPress={onConfirm}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
