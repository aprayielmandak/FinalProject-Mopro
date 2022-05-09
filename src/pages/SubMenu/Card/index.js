import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import Button from '../../../components/atoms/Button';

const Card = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'CARD'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder={
            'Please input your wish or something that you want to write in the card ...'
          }
        />
        <Gap height={70} />
        <Button title={'DONE'} onPress={() => navigation.navigate('Overall')} />
      </View>
      <BottomNav
        onPressed={() => {
          navigation.goBack();
        }}
        title={'BACK'}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE2E2',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
    width: 350,
    height: 293,
    padding: 25,
    elevation: 5,
  },
});
