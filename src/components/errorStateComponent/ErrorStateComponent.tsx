import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ErrorStateComponentProps} from './types';
import {Button} from 'react-native-paper';

export function ErrorStateComponent({
  errorText,
  onPress,
}: ErrorStateComponentProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        {errorText || 'Something went wrong!'}
      </Text>
      <Button mode="contained" onPress={onPress}>
        Please try again
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
});
