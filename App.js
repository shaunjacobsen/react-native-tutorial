import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AddPlace from "./src/components/InputContainer/AddPlace";
import List from "./src/components/List/List";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddPlace onPlaceAdded={this.placeAddedHandler} />
        <List items={this.state.places} />
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
