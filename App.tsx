/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import HomeMainStack from './src/shared/navigations/MainStack';
import MainStack from './src/shared/navigations/MainStackNav';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './src/shared/redux/store';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return( 
    <NativeBaseProvider>
      <Provider store={store}>
      <MainStack />
      </Provider>



    </NativeBaseProvider>
  
  );
};

export default App;
