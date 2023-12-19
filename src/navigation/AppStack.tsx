import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {AppStackParamList, HomeStackParamList} from './types';
import {Home, AlbumDisplay} from 'screens';

const Tab = createBottomTabNavigator<AppStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: 'fade',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="AlbumDisplay"
        component={AlbumDisplay}
        // options={({route}) => ({
        //     title: route.params?.data.title,
        // })}
      />
    </HomeStack.Navigator>
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
        component={HomeStackNavigator}
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

  if (routeName === 'AlbumDisplay') {
    return 'none';
  } else {
    return 'flex';
  }
};
