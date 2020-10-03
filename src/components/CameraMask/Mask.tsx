import React from 'react';
import {View, StyleSheet, ViewStyle, OpaqueColorValue} from 'react-native';

interface Props {
  width?: number;
  height?: number;
  center?: boolean;
  top?: number;
  opacity?: number;
  color?: string | OpaqueColorValue;
  radius?: number;
}

const Mask: React.FC<Props> = ({
  width = 300,
  height = 200,
  center = false,
  top = 200,
  opacity = 0.5,
  color = 'grey',
  radius = 0,
}) => {
  const maskStyle: ViewStyle = {
    backgroundColor: color,
    opacity,
    flex: 1,
    width: '100%',
  };

  const maskRowHeaderStyle: ViewStyle = {...maskStyle};
  const maskRowFooterStyle: ViewStyle = {...maskStyle};

  if (!center) {
    maskRowHeaderStyle.flex = undefined;
    maskRowHeaderStyle.height = top;
  }

  const maskCenter: ViewStyle = {
    flexDirection: 'row',
    height,
  };

  const squareStyle: ViewStyle = {
    backgroundColor: 'transparent',
    width,
    height,
    borderRadius: radius,
  };

  return (
    <View style={styles.maskOuter}>
      <View style={maskRowHeaderStyle} />
      <View style={maskCenter}>
        <View style={maskStyle} />
        <View style={squareStyle} />
        <View style={maskStyle} />
      </View>
      <View style={maskRowFooterStyle} />
    </View>
  );
};

export default Mask;

const styles = StyleSheet.create({
  maskOuter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
