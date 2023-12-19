import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from 'redux/app/hooks';
import {fetchAlbums} from 'redux/features/albums/albumSlice';

export function Home({navigation}): React.JSX.Element {
  const dispatch = useAppDispatch();

  //   React.useEffect(() => {
  //     dispatch(fetchAlbums());
  //   }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
