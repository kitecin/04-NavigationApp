import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen effect');
  });
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Text>
        <Icon name="rocket" size={50} color={colors.primary} />
        <Icon name="airplane-outline" size={50} color={colors.primary} />
        <Icon name="aperture-outline" size={50} color={colors.primary} />
        <Icon
          name="american-football-outline"
          size={50}
          color={colors.primary}
        />
        <Icon name="barbell-outline" size={50} color={colors.primary} />
        <Icon name="desktop-outline" size={50} color={colors.primary} />
        <Icon name="game-controller-outline" size={50} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
