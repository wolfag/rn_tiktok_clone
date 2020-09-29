import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container} from '../commonStyles';
import {HeaderButton, MyQRButton, Text} from './styles';

const QRScanScreen: React.FC = () => {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerStyle: {},
      headerTitle: () => <Text size={20}>Scan</Text>,
      headerTitleAlign: 'center',
      headerRight: () => (
        <HeaderButton>
          <Text size={20}>Album</Text>
        </HeaderButton>
      ),
      headerLeft: () => (
        <HeaderButton onPress={navigation.goBack}>
          <Ionicons
            name={
              Platform.OS === 'android'
                ? 'arrow-back-outline'
                : 'chevron-back-outline'
            }
            color="#fff"
            size={30}
          />
        </HeaderButton>
      ),
    });
  }, [navigation]);

  const onBarCodeRead = (result: any) => {
    console.log('===1');
    console.log({result});
  };

  const toggleLight = useCallback(() => {
    if (flashMode === RNCamera.Constants.FlashMode.off) {
      setFlashMode(RNCamera.Constants.FlashMode.on);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    }
  }, [flashMode]);

  return (
    <Container>
      <TouchableOpacity style={styles.full} onPress={toggleLight}>
        <RNCamera
          ref={cameraRef}
          flashMode={flashMode}
          type={RNCamera.Constants.Type.back}
          style={styles.full}
          onBarCodeRead={onBarCodeRead}
        />
        <BarcodeMask outerMaskOpacity={0.5} lineAnimationDuration={1000} />
        <View style={styles.description}>
          <Text>Align QR code in frame to scan</Text>
          <Text size={15}>Tap to turn light on</Text>
        </View>
        <MyQRButton>
          <Ionicons name="qr-code-outline" size={50} color="#fff" />
          <Text size={20}>My TikCode</Text>
        </MyQRButton>
      </TouchableOpacity>
    </Container>
  );
};

export default QRScanScreen;

const styles = StyleSheet.create({
  full: {flex: 1},
  description: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
