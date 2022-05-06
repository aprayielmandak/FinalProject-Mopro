import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../atoms/Gap';
import {Profile} from '../../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Header = () => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true,
    });
    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'CANCELED!',
        type: 'default',
        backgroundColor: '#FFC7C7',
        color: 'black',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getPhoto}>
        {!hasPhoto && <Profile width="100" height="100" />}
        {hasPhoto && <Image source={{uri: photo}} style={styles.avatar} />}
      </TouchableOpacity>
      <Gap width={50} height={50} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
