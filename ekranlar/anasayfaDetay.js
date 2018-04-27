import React from 'react';
import {
  AppRegistry,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableHighlight,
  Linking,
  Dimensions,
  Alert

} from 'react-native';

const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 2 ) - 10

const AnasayfaDetay = ({ data }) => {

  const {v3,labelrow, category, categorydesign,categoryname,linearGradient,scroll,background,mainrow,mainrow2,verticalrow,sitename,sitenametext,sitelinktext,sitelink } = styles;
  return (
    <ScrollView>
                  <Image style={{ height: 100,  width : equalWidth, margin: 5}} source={{ uri: data.url }} resizeMode='cover' />

    </ScrollView >
    );
  };
  const styles = {

    labelrow:{
      flex:1,
      flexDirection:'row',
    },
    label:{
      flex:1,
      paddingLeft:15,
    },
    label2:{
      flex:3,
      paddingRight:15,
    },
    label2text:{
      textAlign:'left',
    },
    label1text:{
      textAlign:'left',
      fontWeight: 'bold',
    },
    isim:{
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      color: '#000',
    },
    v3:{
      marginBottom:1,
    },
    category:{
        backgroundColor: '#245292',
        borderRadius: 30,
        height:20,
        width: 60,
        margin: 3,
    },
    categorydesign:{
        backgroundColor: '#b53251',
        borderRadius: 30,
        height:20,
        width: 60,
        margin: 3,
    },
    categoryname:{
      fontSize: 8,
      textAlign: 'center',
      paddingTop: 4,
      paddingLeft: 3,
      color: '#fff',

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
      },
    scroll:
    {
      flex: 1,
    },
    background:
    {

    },
    mainrow:
    {
      flex: 9,
      flexDirection: 'row',
      height: 250,
    },
    mainrow2:
    {
      flex: 2,
      flexDirection: 'row',
      height: 50,
    },
    verticalrow:
    {
      flex: 1,
      flexDirection: 'column',
      height: 300,
      marginTop:20,
    },
    sitename:
    {
      flex: 1,
    },
    sitenametext:
    {
      fontSize: 14,
      textAlign: 'center',
      paddingTop: 10,
      color: '#000',
    },
    sitelinktext:
    {
      fontSize: 8,
      textAlign: 'right',
      paddingTop: 8,
      color: '#b4b4b4',
    },
    sitelink:
    {
      flex: 1,
    },

  }
export default AnasayfaDetay;
