import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
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

const MeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container color="#fff">
      <Header>
        <HeaderButton>
          <AntDesign name="adduser" size={24} color="black" />
        </HeaderButton>
        <HeaderButton>
          <Title>Wolfag</Title>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </HeaderButton>
        <HeaderButton onPress={() => navigation.navigate('SettingScreen')}>
          <FontAwesome name="ellipsis-v" size={24} color="black" />
        </HeaderButton>
      </Header>
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
      </Content>
      <MeTabs />
    </Container>
  );
};

export default MeScreen;

const styles = StyleSheet.create({});
