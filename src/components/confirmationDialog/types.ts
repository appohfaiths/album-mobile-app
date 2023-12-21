import {GestureResponderEvent} from 'react-native';

export interface ConfirmationDialogProps {
  icon: string;
  title: string;
  visible: boolean;
  onConfirm: (event: GestureResponderEvent) => void;
  onCancel: () => void;
}
