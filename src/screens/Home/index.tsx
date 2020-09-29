import ViewPager from '@react-native-community/viewpager';
import React, {useState} from 'react';
import {View} from 'react-native';
import server from '../../../server.json';
import Feed from './Feed';
import {Header, Separator, Tab, Text} from './styles';
import {Container} from '../commonStyles';

const HomeScreen: React.FC = () => {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);

  return (
    <Container color="#000">
      <Header>
        <Tab onPress={() => setTab(1)}>
          <Text active={tab === 1}>Following</Text>
        </Tab>
        <Separator>|</Separator>
        <Tab onPress={() => setTab(2)}>
          <Text active={tab === 2}>For You</Text>
        </Tab>
      </Header>
      <ViewPager
        orientation="vertical"
        initialPage={0}
        style={{flex: 1}}
        onPageSelected={(e) => {
          setActive(e.nativeEvent.position);
        }}>
        {server.feed.map((item) => (
          <View key={item.id}>
            <Feed item={item} play={Number(item.id) === active} />
          </View>
        ))}
      </ViewPager>
    </Container>
  );
};

export default HomeScreen;
