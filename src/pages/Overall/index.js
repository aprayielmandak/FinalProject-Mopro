import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubHeader2 from '../../components/molecules/SubHeader2';
import WhiteContainer from '../../components/molecules/WhiteContainer';
import Button from '../../components/atoms/Button';
import CheckBoxes from '../../components/atoms/Checkbox';

const Overall = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.coantainer}>
        <WhiteContainer title={'SELECTED FLOWER'} />
        <WhiteContainer title={'SELECTED RIBBON'} />
        <WhiteContainer title={'SELECTED PAPPER'} />
        <WhiteContainer title={'CARD TEXT'} />
      </View>
      <View style={styles.price}>
        <CheckBoxes />
        <View style={styles.size}>
          <Text>Size S</Text>
          <Text>75k</Text>
        </View>
        <CheckBoxes />
        <View style={styles.size}>
          <Text>Size M</Text>
          <Text>125k</Text>
        </View>
        <CheckBoxes />
        <View style={styles.size}>
          <Text>Size L</Text>
          <Text>175k</Text>
        </View>
      </View>
      <View style={styles.done}>
        <Button
          title={'DONE'}
          onPress={() => navigation.navigate('ThankyouPage')}
        />
      </View>
    </View>
  );
};

export default Overall;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFE2E2',
  },
  coantainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 70,
  },
  done: {
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  size: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 20,
  },
});
