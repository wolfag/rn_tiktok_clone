import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, Input, Search} from './styles';
import {Container} from '../commonStyles';

const DiscoverScreen: React.FC = () => {
  const [search, setSearch] = useState('');

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
          />
        </Search>
        <Ionicons name="qr-code-outline" size={25} color="black" />
      </Header>
    </Container>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  search: {paddingRight: 10},
});
