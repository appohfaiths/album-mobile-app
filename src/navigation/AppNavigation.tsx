import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

export function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
