import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import TextInput from '../../components/atoms/TextInput';
import Button from '../../components/atoms/Button';
import {authentication} from '../../config/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const CreateAccount = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
        navigation.navigate('SignIn');
      })
      .catch(re => {
        console.log(re);
      });
  };

  return (
    <View style={styles.page}>
      <Gap height={30} />
      <Header />
      <TextInput
        title={'Username'}
        placeholder={'input your username'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Gap height={20} />
      <TextInput
        title={'Email'}
        placeholder={'input your email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Gap height={20} />
      <TextInput
        title={'Password'}
        placeholder={'input your password'}
        pass={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Gap height={70} />
      <Button title={'Create New Account'} onPress={onSubmit} />
      <Gap height={30} />
      <Button
        title={'ALREADY HAVE ACCOUNT'}
        color={'#F6F6F6'}
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
