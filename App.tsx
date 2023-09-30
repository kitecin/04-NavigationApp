import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
