import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {User} from '../../../assets';

const SubHeader = ({onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.Profile}>
          <User width="25" height="25" />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>HAPPY BOUQUET</Text>
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#F6F6F6',
    alignItems: 'flex-end',
    paddingVertical: 25,
    paddingHorizontal: 15,
    paddingLeft: 130,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  Profile: {
    paddingTop: 30,
    paddingLeft: 50,
  },
});
