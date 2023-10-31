
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress,buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue', // default background color
    padding: 15,
    borderRadius: 40,
    alignSelf: 'center',
      marginBottom: 10,
  },
  text: {
    color: 'white', // sdefault text color
    fontSize: 16, //default font size
    textAlign:"center",
    fontWeight: '700',

  },
});

export default CustomButton;
