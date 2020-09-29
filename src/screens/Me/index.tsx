import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
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
} from './styles';

const MeScreen: React.FC = () => {
  return (
    <Container color="#fff">
      <Header>
        <AntDesign
          name="adduser"
          size={24}
          color="black"
          style={styles.addUser}
        />
        <Title>Wolfag</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          name="ellipsis-v"
          size={24}
          color="black"
          style={styles.threeDot}
        />
      </Header>
      <ScrollView>
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
          <StatsText>Tap to add bio</StatsText>
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
