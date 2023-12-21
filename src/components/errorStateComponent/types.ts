import {GestureResponderEvent} from 'react-native';

export interface ErrorStateComponentProps {
  errorText: string;
  onPress: (event: GestureResponderEvent) => void;
}
