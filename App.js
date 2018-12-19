import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

// register screens
Navigation.registerComponent('AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent(
  'FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  'PlaceDetailScreen',
  () => PlaceDetail,
  store,
  Provider
);

Navigation.registerComponent('SideDrawer', () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'AuthScreen',
    title: 'Sign in'
  }
});
