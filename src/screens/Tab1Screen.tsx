import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  // useEffect(() => {
  //   console.log('Tab1Screen effect');
  // });
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon iconName="rocket-outline" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="barbell-outline" />
        <TouchableIcon iconName="desktop-outline" />
        <TouchableIcon iconName="game-controller-outline" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
