import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Container} from './styles';

interface Props {
  home: boolean;
}

const PlusButton: React.FC<Props> = (props) => {
  const {home} = props;
  return (
    <Container home={home}>
      <Button>
        <FontAwesome5 name="plus" size={18} color={home ? '#000' : '#fff'} />
      </Button>
    </Container>
  );
};

export default PlusButton;
