import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAicVdyqvAOmtbSI3K5j9k4xAPmelYcWiA",
      authDomain: "authentication-f47b3.firebaseapp.com",
      databaseURL: "https://authentication-f47b3.firebaseio.com",
      projectId: "authentication-f47b3",
      storageBucket: "authentication-f47b3.appspot.com",
      messagingSenderId: "86963642392"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
