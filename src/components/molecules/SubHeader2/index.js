import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeIcon} from '../../../assets';

const SubHeader2 = ({onPress, title}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.Profile}>
          <HomeIcon width="27" height="27" />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default SubHeader2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    backgroundColor: '#F6F6F6',
    alignItems: 'flex-end',
    paddingVertical: 25,
    paddingHorizontal: 20,
    paddingLeft: 130,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  Profile: {
    paddingTop: 30,
    paddingLeft: 20,
  },
});
