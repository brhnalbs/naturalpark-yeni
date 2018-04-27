/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Anasayfa from './anasayfa';
import Iletisim from './iletisim';
import Harita from './harita';

const DrawerExample = DrawerNavigator(

  {
    First: {
      path: '/',
      screen: Anasayfa,
    },
    Second: {
      path: '/',
      screen: Harita,
    },
    Third: {
      path: '/',
      screen: Iletisim,
    },
  },
  {
        initialRouteName: 'First',
        drawerPosition: 'right',
        drawerWidth: 200,
        contentOptions: {
          activeTintColor: 'red',
        }
  }
)

export default DrawerExample;
