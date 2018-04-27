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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class kamera extends Component<Props> {

  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
    <Image
    source={require('./photo-camera.png')}
    style={styles.icon}
    />
    )
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Kamera
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width:20,
    height:20,
  },
});
