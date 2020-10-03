import React, {useEffect, useState} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  OpaqueColorValue,
  StyleSheet,
  TransformsStyle,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import Edge from './Edge';

interface Props {
  width?: number;
  height?: number;
  center?: boolean;
  top?: number;
  edgeBorderWidth?: number;
  edgeRadius?: number;
  edgeWidth?: number;
  edgeHeight?: number;
  edgeColor?: string | OpaqueColorValue;
  showAnimatedLine?: boolean;
  lineOrientation?: 'vertical' | 'horizontal';
  animatedLineWidth?: number;
  animatedLineDuration?: number;
  animatedLineColor?: string | OpaqueColorValue;
  padding?: number;
  insideComponent?: React.Component | React.ReactElement;
  caption?: string | React.Component | React.ReactElement;
  edgeInside?: boolean;
}

const Rectangle: React.FC<Props> = ({
  insideComponent,
  width = 300,
  height = 200,
  center = true,
  top = 200,
  edgeBorderWidth = 10,
  edgeRadius = 10,
  edgeWidth = 30,
  edgeHeight = 35,
  edgeColor = '#fff',
  showAnimatedLine = true,
  lineOrientation = 'horizontal',
  animatedLineWidth = 5,
  animatedLineDuration = 1000,
  animatedLineColor = 'grey',
  padding = 50,
  caption,
  edgeInside = true,
}) => {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const [finderLayout, setFinderLayout] = useState<LayoutRectangle>();
  const [lineTravelDistance, setLineTravelDistance] = useState<number>(0);

  const _layoutMeasured = ({nativeEvent}: LayoutChangeEvent) => {
    const {layout} = nativeEvent;
    const travelDistance: number =
      ((lineOrientation === 'horizontal' ? layout.height : layout.width) -
        padding) /
      2;

    setAnimatedValue(new Animated.Value(-travelDistance));

    setFinderLayout(layout);
    setLineTravelDistance(travelDistance);
  };

  const animatedLineStyle: ViewStyle = {
    backgroundColor: animatedLineColor,
  };
  if (lineOrientation === 'vertical') {
    animatedLineStyle.height = height - padding;
    animatedLineStyle.width = animatedLineWidth;
  } else {
    animatedLineStyle.height = animatedLineWidth;
    animatedLineStyle.width = width - padding;
  }

  const transformStyle: TransformsStyle = {};
  if (finderLayout && lineOrientation !== 'vertical') {
    transformStyle.translateY = animatedValue;
  } else {
    transformStyle.translateX = animatedValue;
  }
  animatedLineStyle.transform = [transformStyle];

  useEffect(() => {
    let _animated: Animated.CompositeAnimation;

    const _animateLoop = () => {
      _animated = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: lineTravelDistance,
            duration: animatedLineDuration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: -lineTravelDistance,
            duration: animatedLineDuration,
            useNativeDriver: true,
          }),
        ]),
      );
      _animated.start();
    };

    const _startAnimation = () => {
      const intervalId = setInterval(() => {
        if (finderLayout && finderLayout.height > 0) {
          _animateLoop();
          clearInterval(intervalId);
        }
      }, 500);
    };

    showAnimatedLine && _startAnimation();

    return _animated?.stop;
  }, [
    finderLayout,
    lineOrientation,
    lineTravelDistance,
    animatedLineDuration,
    showAnimatedLine,
    animatedValue,
  ]);

  return (
    <View
      onLayout={_layoutMeasured}
      style={[
        styles.container,
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
        isInside={edgeInside}
      />
      <Edge
        position="Top-Right"
        width={edgeWidth}
        height={edgeHeight}
        color={edgeColor}
        borderWidth={edgeBorderWidth}
        radius={edgeRadius}
        isInside={edgeInside}
      />
      <Edge
        position="Bottom-Left"
        width={edgeWidth}
        height={edgeHeight}
        color={edgeColor}
        borderWidth={edgeBorderWidth}
        radius={edgeRadius}
        isInside={edgeInside}
      />
      <Edge
        position="Bottom-Right"
        width={edgeWidth}
        height={edgeHeight}
        color={edgeColor}
        borderWidth={edgeBorderWidth}
        radius={edgeRadius}
        isInside={edgeInside}
      />
      {showAnimatedLine && (
        <View style={styles.animatedLineContainer}>
          <Animated.View style={[styles.animatedLine, animatedLineStyle]} />
        </View>
      )}
      <View style={styles.insideComponentStyle}>{insideComponent}</View>
      <View style={styles.captionContainerStyle}>
        {typeof caption === 'string' && (
          <Text style={styles.captionText}>{caption}</Text>
        )}
        {typeof caption !== 'string' && caption}
      </View>
    </View>
  );
};

export default Rectangle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
  },
  animatedLineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animatedLine: {
    position: 'absolute',
    elevation: 4,
    zIndex: 0,
  },
  insideComponentStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
  captionContainerStyle: {
    position: 'absolute',
    bottom: -40,
    width: '100%',
  },
  captionText: {
    color: '#fff',
    textAlign: 'center',
  },
});
