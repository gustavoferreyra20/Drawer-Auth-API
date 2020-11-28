import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const llamarAPI = () => {
  return fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((json) => {
      return json.activity;
    })
    .catch((error) => {
      console.error(error);
    });
};

export class BoredScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      respuesta: null
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
                <Button onPress={() => this.handlerClick()}
                  title="Llamar API"
                  />
                  <Text>{this.state.respuesta}</Text>  
                <StatusBar style="auto" />
            </View>
    );
  }

  handlerClick(){
    llamarAPI().then(resp=> {
      this.setState({respuesta: resp});
    });
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
