import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.image} resizeMode="contain" />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#eee",
    marginBottom: 10,
    padding: 10,
    width: "100%",
    flexDirection: 'row',
  },
  image: {
    height: 30,
    marginRight: 8,
    width: 30
  }
});

export default listItem;
