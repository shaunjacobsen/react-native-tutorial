import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import DefaultInput from '../UI/DefaultInput';

const AddPlace = props => {
  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '70%',
  },
  button: {
    width: '30%',
  },
});

export default AddPlace;
