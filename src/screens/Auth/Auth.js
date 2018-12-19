import React, { Component } from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
  signinHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Sign In</HeadingText>
          </MainText>
          <ButtonWithBackground>Switch to sign in</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email address" />
            <DefaultInput placeholder="Password" />
            <DefaultInput placeholder="Confirm password" />
          </View>
          <ButtonWithBackground
            onPress={this.signinHandler}
            color="#29AAF4"
          >Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  backgroundImage: {
    flex: 1,
    width: '100%'
  }
});

export default AuthScreen;
