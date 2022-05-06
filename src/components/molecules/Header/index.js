import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../atoms/Gap';
import {Profile} from '../../../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <Profile width="100" height="100" />
      <Gap width={50} height={50} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
