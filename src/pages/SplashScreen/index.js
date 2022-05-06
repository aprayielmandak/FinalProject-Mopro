import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {HBLogo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <HBLogo width="450" height="450" />
      {/* <Text style={styles.text}>Happy Bouquet</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontFamily: 'AmaticSC-Bold',
    color: 'black',
  },
});
