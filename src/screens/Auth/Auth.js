import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  signinHandler = () => {};

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Sign in" onPress={startMainTabs} />
      </View>
    );
  }
}

export default AuthScreen;
