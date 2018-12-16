import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
  ]).then(icons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: icons[0]
        },
        {
          screen: 'SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: icons[1]
        }
      ]
    });
  })
  
};

export default startTabs;