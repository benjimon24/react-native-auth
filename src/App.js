import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Card, Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAicVdyqvAOmtbSI3K5j9k4xAPmelYcWiA',
      authDomain: 'authentication-f47b3.firebaseapp.com',
      databaseURL: 'https://authentication-f47b3.firebaseio.com',
      projectId: 'authentication-f47b3',
      storageBucket: 'authentication-f47b3.appspot.com',
      messagingSenderId: '86963642392'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
