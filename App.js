import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AddPlace from "./src/components/InputContainer/AddPlace";
import List from "./src/components/List/List";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          name: placeName,
          image: {
            uri:
              "https://s-ec.bstatic.com/images/hotel/max1024x768/873/87375257.jpg"
          },
          key: Math.random().toString()
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(place => {
        return place.key === key;
      })
    }));
  };

  placeDeletedHandler = () => {
    this.setState(prevState => ({
      places: prevState.places.filter(place => {
        return place.key !== prevState.selectedPlace.key;
      }),
      selectedPlace: null
    }));
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <AddPlace onPlaceAdded={this.placeAddedHandler} />
        <List
          items={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
