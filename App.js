import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

// register screens
Navigation.registerComponent('AuthScreen', () => AuthScreen);
Navigation.registerComponent('FindPlaceScreen', () => FindPlaceScreen);
Navigation.registerComponent('SharePlaceScreen', () => SharePlaceScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'AuthScreen',
    title: 'Sign in'
  }
})