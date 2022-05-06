import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';

const PinkContainer = ({onPressed, title, color = '#FFE2E2', image}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPressed} activeOpacity={0.9}>
        <View style={styles.container(color)}>
          <View style={styles.TextWrapper}>
            <Text style={styles.text}>{title}</Text>
            <Text>Start from 75k</Text>
          </View>
          <Image source={image} style={styles.image} />
        </View>
      </TouchableOpacity>
      <Gap height={40} />
    </View>
  );
};

export default PinkContainer;

const styles = StyleSheet.create({
  container: color => ({
    height: 170,
    width: 320,
    backgroundColor: color,
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  TextWrapper: {
    width: 160,
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    height: 150,
    width: 151,
  },
});
