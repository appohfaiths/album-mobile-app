import {GestureResponderEvent} from 'react-native';

export interface ConfirmationDialogProps {
  title: string;
  visible: boolean;
  onConfirm: (event: GestureResponderEvent) => void;
  onCancel: () => void;
}
