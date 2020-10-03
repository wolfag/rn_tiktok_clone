import React from 'react';
import {StyleSheet, View, ViewStyle, OpaqueColorValue} from 'react-native';

type Position = 'Top-Left' | 'Top-Right' | 'Bottom-Left' | 'Bottom-Right';

interface Props {
  position: Position;
  width?: number;
  height?: number;
  color?: string | OpaqueColorValue;
  radius?: number;
  borderWidth?: number;
  isInside?: boolean;
}

const Edge: React.FC<Props> = ({
  position,
  width = 30,
  height = 30,
  color = 'red',
  radius = 0,
  borderWidth = 10,
  isInside = true,
}) => {
  const keys: string[] = position.split('-');
  const defaultStyle: ViewStyle = {
    width,
    height,
    borderColor: color,
  };
  const edgeBorderStyle: ViewStyle = {
    position: 'absolute',
    [`border${keys[0]}Width`]: borderWidth,
    [`border${keys[1]}Width`]: borderWidth,
    [`border${keys.join('')}Radius`]: radius,
    [`${keys[0].toLocaleLowerCase()}`]: isInside ? 0 : -borderWidth,
    [`${keys[1].toLocaleLowerCase()}`]: isInside ? 0 : -borderWidth,
  };

  return <View style={StyleSheet.flatten([defaultStyle, edgeBorderStyle])} />;
};

export default Edge;
