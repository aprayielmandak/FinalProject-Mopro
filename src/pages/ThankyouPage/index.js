import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {HBLogo} from '../../assets';
import Gap from '../../components/atoms/Gap';

const ThankyouPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomePage');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Gap height={70} />
      <HBLogo width="350" height="350" />
      <Text style={styles.text}>
        “Bring happiness to your loved one with a spesial gift”
      </Text>
      <Gap height={250} />
      <Text style={styles.text}>THANK YOU FOR YOUR ORDER</Text>
    </View>
  );
};

export default ThankyouPage;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFE2E2',
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
});
