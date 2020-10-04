import styled from 'styled-components/native';

interface ContainerProps {
  color?: string;
  margin?: number;
  padding?: number;
}
export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({color}: ContainerProps) => color || 'transparent'};
  margin: ${({margin}: ContainerProps) => (margin ? `${margin}px` : 0)};
  padding: ${({padding}: ContainerProps) => (padding ? `${padding}px` : 0)};
`;

interface TextProps {
  color?: string;
  size?: number;
  bold?: boolean;
  center?: boolean;
  padding?: number;
  margin?: number;
}

export const Text = styled.Text`
  color: ${({color}: TextProps) => color || '#000'};
  font-size: ${({size}: TextProps) => (size ? `${size}px` : '20px')};
  font-weight: ${({bold}: TextProps) => (bold ? 'bold' : '400')};
  text-align: ${({center}: TextProps) => (center ? 'center' : 'auto')};
  margin: ${({margin}: TextProps) => (margin ? `${margin}px` : 0)};
  padding: ${({padding}: TextProps) => (padding ? `${padding}px` : 0)};
`;
