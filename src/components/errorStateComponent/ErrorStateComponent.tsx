import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ErrorStateComponentProps} from './types';

export function ErrorStateComponent({
  errorText,
  onPress,
}: ErrorStateComponentProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{errorText || 'Something went wrong!'}</Text>
      <Text onPress={onPress}>Please try again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
