import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';

import LoginScreen from "./Screens/LoginScreen";
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false,
      isReady: false
    }
  
  }

  setLogin(){
    this.setState({isLoggedIn:true});
 }

 setLogout(){
  this.setState({isLoggedIn:false});
}

  render(){
      if(this.state.isLoggedIn){
        return (
          <NavigationContainer>
            <DrawerCustomNavigator onLogout={() => this.setLogout()}/>
          </NavigationContainer>  
        );

      } else {
        return <LoginScreen onLogin={() => this.setLogin()}/>
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
