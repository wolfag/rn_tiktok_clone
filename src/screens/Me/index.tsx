import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import avatar from '../../assets/avatar.png';
import {Container} from '../commonStyles';
import {
  Avatar,
  Bookmark,
  Content,
  Header,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Separator,
  Stats,
  StatsColumn,
  StatsNumber,
  StatsText,
  Title,
  Username,
  HeaderButton,
} from './styles';
import MeTabs from './tabs';
import {useNavigation} from '@react-navigation/native';

const MeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container color="#fff">
      <Header>
        <HeaderButton style={styles.addUser}>
          <AntDesign name="adduser" size={24} color="black" />
        </HeaderButton>
        <HeaderButton>
          <Title>Wolfag</Title>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </HeaderButton>
        <HeaderButton
          style={styles.threeDot}
          onPress={() => navigation.navigate('SettingScreen')}>
          <FontAwesome name="ellipsis-v" size={24} color="black" />
        </HeaderButton>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Avatar source={avatar} />
          <Username>@wolfag</Username>
          <Stats>
            <StatsColumn>
              <StatsNumber>2000</StatsNumber>
              <StatsText>Following</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>500</StatsNumber>
              <StatsText>Followers</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>900</StatsNumber>
              <StatsText>Likes</StatsText>
            </StatsColumn>
          </Stats>
          <ProfileColumn>
            <ProfileEdit>
              <ProfileText>Edit profile</ProfileText>
            </ProfileEdit>
            <Bookmark name="bookmark" size={24} color="black" />
          </ProfileColumn>
          <View style={{flex: 1}}>
            <MeTabs />
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default MeScreen;

const styles = StyleSheet.create({
  addUser: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  threeDot: {
    position: 'absolute',
    right: 13,
    top: 12,
  },
});
