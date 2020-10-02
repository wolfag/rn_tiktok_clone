import React from 'react';
import {View, StyleSheet, Dimensions, ViewStyle, Text} from 'react-native';
import Mask from './Mask';
import Edge from './Edge';

interface Props {
  width?: number;
  height?: number;
  center?: boolean;
  top?: number;
  maskOpacity?: number;
  maskColor?: string;
  edgeBorderWidth?: number;
  edgeRadius?: number;
  edgeWidth?: number;
  edgeHeight?: number;
  edgeColor?: string;
}

const CameraMask: React.FC<Props> = ({
  width = 300,
  height = 200,
  center = false,
  top = 200,
  maskOpacity = 0.5,
  maskColor = 'pink',
  edgeBorderWidth = 10,
  edgeRadius = 10,
  edgeWidth = 30,
  edgeHeight = 35,
  edgeColor = 'red',
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.edgeContainer,
          {
            width,
            height,
            top: center ? undefined : top,
          },
        ]}>
        <Edge
          position="Top-Left"
          width={edgeWidth}
          height={edgeHeight}
          color={edgeColor}
          borderWidth={edgeBorderWidth}
          radius={edgeRadius}
        />
        <Edge
          position="Top-Right"
          width={edgeWidth}
          height={edgeHeight}
          color={edgeColor}
          borderWidth={edgeBorderWidth}
          radius={edgeRadius}
        />
        <Edge
          position="Bottom-Left"
          width={edgeWidth}
          height={edgeHeight}
          color={edgeColor}
          borderWidth={edgeBorderWidth}
          radius={edgeRadius}
        />
        <Edge
          position="Bottom-Right"
          width={edgeWidth}
          height={edgeHeight}
          color={edgeColor}
          borderWidth={edgeBorderWidth}
          radius={edgeRadius}
        />
      </View>
      <Mask
        height={height}
        width={width}
        center={center}
        top={top}
        color={maskColor}
        opacity={maskOpacity}
        radius={edgeRadius}
      />
    </View>
  );
};

export default CameraMask;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  edgeContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
