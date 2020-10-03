import React from 'react';
import {OpaqueColorValue, StyleSheet, View} from 'react-native';
import Mask from './Mask';
import Rectangle from './Rectangle';

interface Props {
  width?: number;
  height?: number;
  center?: boolean;
  top?: number;
  maskOpacity?: number;
  maskColor?: string | OpaqueColorValue;
  edgeBorderWidth?: number;
  edgeRadius?: number;
  edgeWidth?: number;
  edgeHeight?: number;
  edgeColor?: string | OpaqueColorValue;
  orientation?: 'vertical' | 'horizontal';
  animatedLineDuration?: number;
  animatedLineColor?: string | OpaqueColorValue;
  animatedLineWidth?: number;
  padding?: number;
  caption?: string | React.Component | React.ReactElement;
  insideComponent?: React.Component | React.ReactElement;
  edgeInside?: boolean;
}

const CameraMask: React.FC<Props> = ({
  insideComponent,
  width = 300,
  height = 200,
  center = true,
  top = 200,
  maskOpacity = 0.5,
  maskColor = 'grey',
  edgeBorderWidth = 5,
  edgeRadius = 0,
  edgeWidth = 30,
  edgeHeight = 35,
  edgeColor = '#fff',
  orientation = 'horizontal',
  animatedLineDuration = 1000,
  animatedLineColor = 'grey',
  animatedLineWidth = 5,
  padding = 40,
  caption,
  edgeInside = false,
}) => {
  return (
    <View style={styles.container}>
      <Rectangle
        width={width}
        height={height}
        center={center}
        top={top}
        edgeBorderWidth={edgeBorderWidth}
        edgeRadius={edgeRadius}
        edgeWidth={edgeWidth}
        edgeHeight={edgeHeight}
        edgeColor={edgeColor}
        lineOrientation={orientation}
        animatedLineDuration={animatedLineDuration}
        animatedLineColor={animatedLineColor}
        animatedLineWidth={animatedLineWidth}
        padding={padding}
        insideComponent={insideComponent}
        caption={caption}
        edgeInside={edgeInside}
      />
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
