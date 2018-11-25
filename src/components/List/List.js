import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "../ListItem/ListItem";

const list = props => {
  const placesOutput = props.items.map((place, i) => {
    return <ListItem placeName={place} key={i} />;
  });
  return <View style={styles.listContainer}>{placesOutput}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default list;
