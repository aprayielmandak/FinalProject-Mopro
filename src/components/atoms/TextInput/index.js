import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder, pass = false}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={pass}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginBottom: 5,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});
