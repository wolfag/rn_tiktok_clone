import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Input, Search} from './styles';
import {Container} from '../commonStyles';
import {useNavigation} from '@react-navigation/native';

const DiscoverScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  return (
    <Container color="#fff">
      <Header>
        <Search>
          <AntDesign
            style={styles.search}
            name="search1"
            size={18}
            color="#838383"
          />
          <Input
            placeholder="Search"
            value={search}
            returnKeyType="search"
            onChangeText={setSearch}
            placeholderTextColor="grey"
          />
        </Search>
        <Ionicons
          name="qr-code-outline"
          size={25}
          color="black"
          onPress={() => navigation.navigate('QRScan')}
        />
      </Header>
    </Container>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  search: {paddingRight: 10},
});
