import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';
import CheckBoxes from '../../atoms/Checkbox';

const WhiteContainer = ({title, image}) => {
  return (
    <View>
      <View style={styles.page}>
        <View style={styles.whitebox}>
          <View style={styles.image}>
            <Image source={image} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>descriptions...</Text>
          </View>
        </View>
        <CheckBoxes />
      </View>
      <Gap height={25} />
    </View>
  );
};

export default WhiteContainer;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whitebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    width: 320,
    height: 107,
  },
  textWrapper: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 20,
  },
  title: {
    color: 'black',
    fontSize: 17,
  },
  subtitle: {
    paddingTop: 20,
    color: 'grey',
    fontSize: 16,
  },
  image: {
    height: 90,
    width: 90,
    paddingTop: 7,
  },
});
