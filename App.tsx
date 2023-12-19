import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {PaperProvider} from 'react-native-paper';
import {store} from 'redux/app/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;
