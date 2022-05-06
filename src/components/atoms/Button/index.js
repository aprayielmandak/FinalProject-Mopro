import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress, color = '#FFC7C7'}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container(color)}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
  },
  container: color => ({
    height: 40,
    width: 200,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  }),
  text: {
    color: 'black',
  },
});
