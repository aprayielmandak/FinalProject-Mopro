import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';
import {
  WhiteFlower,
  GreenFlower,
  YellowFlower,
  RedFlower,
  FlowerNav,
} from '../../../assets/images';


const BouquetFlower = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'BOUQUET FLOWER'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'GREEN FLOWER'} image={GreenFlower} />
          <WhiteContainer title={'WHITE FLOWER'} image={WhiteFlower} />
          <WhiteContainer title={'YELLOW FLOWER'} image={YellowFlower} />
          <WhiteContainer title={'RED FLOWER'} image={RedFlower} />
          <WhiteContainer title={'GREEN FLOWER'} image={GreenFlower} />
          <WhiteContainer title={'WHITE FLOWER'} image={WhiteFlower} />
          <WhiteContainer title={'YELLOW FLOWER'} image={YellowFlower} />
          <WhiteContainer title={'RED FLOWER'} image={RedFlower} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => navigation.navigate('BouquetFlower')}
        // onPressed1={() => navigation.navigate('Ribbons')}
        // onPressed2={() => navigation.navigate('Pappers')}
        // onPressed3={() => navigation.navigate('Card')}
        navImage={FlowerNav}
        title={'FLOWERS'}
      />
    </View>
  );
};

export default BouquetFlower;

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
