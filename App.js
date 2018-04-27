import {TabNavigator} from "react-navigation";

import anasayfa from "./ekranlar/anasayfa";
import harita from "./ekranlar/harita";
import iletisim from "./ekranlar/iletisim";
import kamera from "./ekranlar/kamera";

import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './ekranlar/HomeScreen'
import SettingScreen from './ekranlar/SettingScreen'


var myTabs = TabNavigator({

  Anasayfa: {screen:anasayfa},
  Harita: {screen:harita},
  İletişim: {screen:iletisim},

},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#525252',
    inactiveTintColor: '#525252',
    itemIconActiveColor: '#fff',
    itemIconSelectedColor: '#fff',
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    upperCaseLabel: false,
    swipeEnabled: true,
  style: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      paddingTop: 15,
  },
  indicatorStyle: {
            backgroundColor: '#696969',
        },
}
});


export default myTabs;
