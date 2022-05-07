import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubHeader2 from '../../components/molecules/SubHeader2';
import {Profile} from '../../assets';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import {authentication} from '../../config/Firebase';
import {signOut} from 'firebase/auth';

const ProfilePage = ({navigation}) => {
  const SignOutUser = () => {
    signOut(authentication)
      .then(re => {
        console.log(re);
        navigation.navigate('SignIn');
        alert('You are signed out');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.page}>
      <SubHeader2
        title={'MY PROFILE'}
        onPress={() => navigation.navigate('HomePage')}
      />
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Gap height={50} />
          <View style={styles.container2}>
            <Profile width="80" height="80" />
            <Gap height={40} />
            <Text style={styles.text}>Aprayiel</Text>
          </View>
          <Gap height={50} />
          <View style={styles.container3}>
            <Text style={styles.text}>Email: Aprayiel@mail.com</Text>
            <Gap height={40} />
            <Text style={styles.text}>Password: ********</Text>
            <Gap height={40} />
            <Text style={styles.text}>Address: Madidir - Bitung</Text>
          </View>
        </View>
        <Gap height={50} />
        <Button title={'SIGN OUT'} onPress={SignOutUser} />
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: '#F6F6F6',
    flex: 0.7,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    elevation: 2,
  },
  container2: {
    alignItems: 'center',
  },
  container3: {
    marginLeft: 20,
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
});
