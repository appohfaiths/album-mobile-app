import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {AppStackParamList, HomeStackParamList, TabIconProps} from './types';
import {Home, AlbumDisplay} from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<AppStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: 'fade',
        headerTitle: 'Photos',
        headerBackTitleVisible: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="AlbumDisplay" component={AlbumDisplay} />
    </HomeStack.Navigator>
  );
};

export function AppStack(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: 'green',
        tabBarActiveTintColor: '#AD40AF',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
          },
          tabBarIcon: ({color, size}) => (
            <TabIcon name="home-outline" size={size} color={color} />
          ),
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

const TabIcon: React.FC<TabIconProps> = ({name, size, color}) => {
  return <Ionicons name={name} size={size} color={color} />;
};
