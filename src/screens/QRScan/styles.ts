import styled from 'styled-components/native';

export const HeaderButton = styled.TouchableOpacity`
  margin: 0 10px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${(props: {size?: number}) =>
    props.size ? `${props.size}px` : '20px'};
`;

export const MyQRButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  align-items: center;
`;
