import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text>Settings Screen</Text>
    </View>
  );
};
