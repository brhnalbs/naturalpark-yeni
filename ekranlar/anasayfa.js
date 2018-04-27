import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Linking,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon } from 'native-base'



const { width, height } = Dimensions.get('window');

const equalWidth =  width - 10

export default class anasayfa extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
    <Image
    source={require('./home.png')}
    style={styles.icon}
    />
    )
  };

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      showME: true
    }
  }

  _keyExtractor = (item, index) => item.name;

  renderRowItem = (itemData) => {
    return (


      <View>
      <TouchableHighlight style={styles.v3}>
        <Image style={{ height: 200,  width : equalWidth , margin: 5}} source={{ uri: itemData.item.url }} resizeMode='cover' />
        </TouchableHighlight>
      </View>

    )
  }

  componentWillMount() {
    {this.getMoviesFromApiAsync()}
    setTimeout(() => {
      this.setState({
        showME: false
      })
    },
      3000)
  }


  render() {
    return (
      <Container>
            <Header style={styles.header}>
              <Image
              source={require('./naturalpark4-logo.png')}
              style={styles.logo}
              />
            </Header>
      <View style={styles.container}>
      {
        this.state.showME ?
        <ActivityIndicator size="large" color="orange"/>
        :
        <FlatList
         data={this.state.data}
         numColumns={1}
         keyExtractor={this._keyExtractor}
         renderItem={this.renderRowItem}
       />
      }
      </View>
        </Container>

    );
  }


  getMoviesFromApiAsync = () => {
    axios.get('https://firebasestorage.googleapis.com/v0/b/yapitek-ea995.appspot.com/o/dataveri.json?alt=media&token=1c854006-9884-4957-b33f-19284f70a2b2')
    .then(response => this.setState({ data: response.data }));
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent:'center',
  },
  icon: {
    width:20,
    height:20,
  },
  logo: {
    width:180,
    height:60,
    marginTop:0,
  },
  header: {
    backgroundColor:'#134b34',

  },
});
