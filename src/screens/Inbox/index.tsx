import React from 'react';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Title, Header} from './styles';
import {Container} from '../commonStyles';

const InboxScreen: React.FC = () => {
  return (
    <Container color="#fff">
      <Header>
        <Title>All activity</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <Feather name="send" size={24} color="black" style={styles.send} />
      </Header>
    </Container>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  send: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
