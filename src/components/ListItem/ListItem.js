import React from "react";
import { StyleSheet, Text, View } from "react-native";

const listItem = props => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#eee",
    marginBottom: 10,
    padding: 10,
    width: "100%"
  }
});

export default listItem;
