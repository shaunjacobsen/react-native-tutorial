import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List/List';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  };

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => place.key === key);
    this.props.navigator.push({
      screen: 'PlaceDetailScreen',
      title: selectedPlace.name,
      passProps: {
        selectedPlace
      }
    });
  };

  render() {
    return (
      <View>
        <List
          items={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
