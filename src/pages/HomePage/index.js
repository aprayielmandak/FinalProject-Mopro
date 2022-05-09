import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import PinkContainer from '../../components/molecules/PinkContainer';
import {
  DefaultImage,
  BouquetFlower,
  BouquetCharacter,
  BouquetMoney,
} from '../../assets/images';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader onPress={() => navigation.navigate('ProfilePage')} />
      <Gap height={30} />
      <View style={styles.wrapper}>
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetFlower')}
          title={'BOUQUET FLOWER'}
          image={BouquetFlower}
        />
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetCharacter')}
          title={'BOUQUET CHARACTER'}
          color={'#FFC7C7'}
          image={BouquetCharacter}
        />
        <PinkContainer
          onPressed={() => navigation.navigate('BouquetMoney')}
          title={'BOUQUET MONEY'}
          image={BouquetMoney}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
