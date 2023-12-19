import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {RouteProp} from '@react-navigation/native';

export type AppStackParamList = {
  HomeStack: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  AlbumDisplay: {
    id: number;
  };
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'AlbumDisplay'
>;

export type AlbumDisplayRouteProp = RouteProp<
  HomeStackParamList,
  'AlbumDisplay'
>;

// export type HomeStackNavigationProp = BottomTabScreenProps<
//   AppStackParamList,
//   'HomeStack'
// >;
