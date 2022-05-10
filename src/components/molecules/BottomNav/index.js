import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RibbonNav, PapperNav, CardNav} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';

const BottomNav = ({navigation, onPressed, navImage}) => {
  navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressed}>
        <Image source={navImage} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Ribbons')}>
        <Image source={RibbonNav} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pappers')}>
        <Image source={PapperNav} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <Image source={CardNav} style={styles.imageNav} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    height: 60,
  },

  imageNav: {
    height: 45,
    width: 45,
  },
});
