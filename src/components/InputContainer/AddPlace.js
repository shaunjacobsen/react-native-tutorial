import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

class AddPlace extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = e => {
    this.setState({ placeName: e });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          text={this.props.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.input}
          placeholder="Place"
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});

export default AddPlace;
