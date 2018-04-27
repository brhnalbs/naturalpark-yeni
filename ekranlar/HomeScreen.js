import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';
import axios from 'axios';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

class HomeScreen extends Component {

    render(){
      return(
        <Container>
              <Header>
                <Left>
                  <Icon name="ios-menu" onPress={() =>
                  this.props.navigation.navigate('DrawerOpen')} />
                </Left>
              </Header>
              <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'

              }}>
                    <View>
                    <Text> Home </Text>
                    </View>
              </Content>
        </Container>
      )
    }

}

export default HomeScreen;
