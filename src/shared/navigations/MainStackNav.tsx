import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeBottomNavigation from './BottomNavigation';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
const MainStack = createNativeStackNavigator();

const MainStackNav: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeBottomNavigation">
        <MainStack.Screen
          name="HomeBottomNavigation"
          component={HomeBottomNavigation}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNav;
