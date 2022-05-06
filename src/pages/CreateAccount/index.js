import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/atoms/TextInput';
import Button from '../../components/atoms/Button';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={30} />
      <Header />
      <TextInput title={'Username'} placeholder={'input your username'} />
      <Gap height={20} />
      <TextInput title={'Email'} placeholder={'input your email'} />
      <Gap height={20} />
      <TextInput
        title={'Password'}
        placeholder={'input your password'}
        pass={true}
      />
      <Gap height={70} />
      <Button
        title={'Create New Account'}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
