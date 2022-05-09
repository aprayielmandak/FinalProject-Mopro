import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';
import {
  BlackPapper,
  BluePapper,
  PinkPapper,
  PurplePapper,
  BackIcon,
} from '../../../assets/images';

const Pappers = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'PAPPERS'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'BLACK PAPPERS'} image={BlackPapper} />
          <WhiteContainer title={'BLUE PAPPERS'} image={BluePapper} />
          <WhiteContainer title={'PINK PAPPERS'} image={PinkPapper} />
          <WhiteContainer title={'PURPLE PAPPERS'} image={PurplePapper} />
          <WhiteContainer title={'BLACK PAPPERS'} image={BlackPapper} />
          <WhiteContainer title={'BLUE PAPPERS'} image={BluePapper} />
          <WhiteContainer title={'PINK PAPPERS'} image={PinkPapper} />
          <WhiteContainer title={'PURPLE PAPPERS'} image={PurplePapper} />
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

export default Pappers;

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
