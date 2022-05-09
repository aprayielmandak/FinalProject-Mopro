import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/atoms/TextInput';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import {authentication} from '../../config/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
        navigation.navigate('HomePage');
      })
      .catch(error => alert('Incorrecct email or password', error));
  };

  return (
    <View style={styles.container}>
      <Gap height={70} />
      <Header />
      <TextInput
        title={'Email'}
        placeholder={'input your email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Gap height={30} />
      <TextInput
        title={'Password'}
        placeholder={'input your password'}
        pass={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Gap height={40} />
      <Button title={'SIGN IN'} onPress={SignInUser} />
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
  },
});
