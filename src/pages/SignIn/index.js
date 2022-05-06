import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/atoms/TextInput';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={70} />
      <Header />
      <TextInput title={'Email'} placeholder={'input your email'} />
      <Gap height={30} />
      <TextInput
        title={'Password'}
        placeholder={'input your password'}
        pass={true}
      />
      <Gap height={40} />
      <Button
        title={'SIGN IN'}
        onPress={() => navigation.navigate('HomePage')}
      />
      <Gap height={30} />
      <Button
        title={'CREATE NEW ACCOUNT'}
        color={'#F6F6F6'}
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
