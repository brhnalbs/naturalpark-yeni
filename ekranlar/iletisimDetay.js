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
  Alert

} from 'react-native';



const IletisimDetay = ({ data }) => {

  const {v3,labelrow, category, categorydesign,categoryname,linearGradient,scroll,background,mainrow,mainrow2,verticalrow,sitename,sitenametext,sitelinktext,sitelink } = styles;
  return (
    <ScrollView>
                          <View style={styles.verticalrow}>
                                  <View style={styles.mainrow}>
                                      <View style={styles.sitename}>
                                                <Text style={styles.isim}> {data.isim} </Text>
                                                <View style={styles.labelrow}>
                                                      <View style={styles.label}>
                                                              <Text style={styles.label1text}> Adres </Text>
                                                      </View>
                                                      <View style={styles.label2}>
                                                                <Text style={styles.label2text}>{data.adres} </Text>
                                                      </View>
                                                </View>
                                                <View style={styles.labelrow}>
                                                      <View style={styles.label}>
                                                              <Text style={styles.label1text}> PK: </Text>
                                                      </View>
                                                      <View style={styles.label2}>
                                                                  <Text style={styles.label2text}>  {data.pk} </Text>
                                                      </View>
                                                </View>
                                                <View style={styles.labelrow}>
                                                      <View style={styles.label}>
                                                              <Text style={styles.label1text}> Telefon: </Text>
                                                      </View>
                                                      <View style={styles.label2}>
                                                                  <Text style={styles.label2text}>  {data.telefon}  </Text>
                                                      </View>
                                                </View>
                                                <View style={styles.labelrow}>
                                                      <View style={styles.label}>
                                                              <Text style={styles.label1text}> Mobil: </Text>
                                                      </View>
                                                      <View style={styles.label2}>
                                                                  <Text style={styles.label2text}> {data.mobil}  </Text>
                                                      </View>
                                                </View>
                                                <View style={styles.labelrow}>
                                                      <View style={styles.label}>
                                                              <Text style={styles.label1text}> E-Posta: </Text>
                                                      </View>
                                                      <View style={styles.label2}>
                                                                  <Text style={styles.label2text}> {data.eposta} </Text>
                                                      </View>
                                                </View>

                                          </View>
                                  </View>
                          </View>
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
      height:300,
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
export default IletisimDetay;
