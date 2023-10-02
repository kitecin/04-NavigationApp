import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {BottomTabs} from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerTitle: 'Menu', //modify the Title of the Stack Navigator
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones del menu*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuContTouch}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={styles.menuContText}>BottomTabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuContTouch}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuContText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
