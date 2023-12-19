import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Home, AlbumDisplay} from 'screens';

export type RootStackParamList = {
  HomeStack: undefined;
  Home: undefined;
  AlbumDisplay: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlbumDisplay"
        component={AlbumDisplay}
        options={({route}) => ({
          //   title: route.params?.data.title,
        })}
      />
    </Stack.Navigator>
  );
};

export function AppStack(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: 'green',
        tabBarActiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
          },
        })}
      />
    </Tab.Navigator>
  );
}

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === 'GameDetails') {
    return 'none';
  } else {
    return 'flex';
  }
};
