import React, { Component } from 'react';
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

} from 'react-native';
import axios from 'axios';
import IletisimDetay from './iletisimDetay';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon } from 'native-base'



export default class harita extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
    <Image
    source={require('./home.png')}
    style={styles.icon}
    />
    )
  };

  state = { data: [] };
  componentWillMount() {
    axios.get('https://firebasestorage.googleapis.com/v0/b/yapitek-ea995.appspot.com/o/iletisimm.json?alt=media&token=84ecdec8-50be-4185-9970-37610e57d07f')
    .then(response => this.setState({ data: response.data }));
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  renderData() {
    return this.state.data.map((responseData, Id) =>
    <IletisimDetay key={Id} data={responseData} />
  );
  }

render() {

          return (
            <Container>
                  <Header>
                    <Right>
                      <Icon name="menu" onPress={() =>
                      this.props.navigation.navigate('DrawerOpen')} />
                    </Right>
                  </Header>
            <View>
              {this.renderData()}
            </View>
            </Container>


        );
    }
}
const styles = StyleSheet.create({
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
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
