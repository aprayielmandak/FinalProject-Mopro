import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';
import {
  GreenRibbon,
  WhiteRibbon,
  BlackRibbon,
  RedRibbon,
  BackIcon,
} from '../../../assets/images';

const Ribbons = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'RIBBONS'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'GREEN RIBBON'} image={GreenRibbon} />
          <WhiteContainer title={'WHITE RIBBON'} image={WhiteRibbon} />
          <WhiteContainer title={'BLACK RIBBON'} image={BlackRibbon} />
          <WhiteContainer title={'RED RIBBON'} image={RedRibbon} />
          <WhiteContainer title={'GREEN RIBBON'} image={GreenRibbon} />
          <WhiteContainer title={'WHITE RIBBON'} image={WhiteRibbon} />
          <WhiteContainer title={'BLACK RIBBON'} image={BlackRibbon} />
          <WhiteContainer title={'RED RIBBON'} image={RedRibbon} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => {
          navigation.goBack();
        }}
        title={'BACK'}
        navImage={BackIcon}
      />
    </View>
  );
};

export default Ribbons;

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
});
