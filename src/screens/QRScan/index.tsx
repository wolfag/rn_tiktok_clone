import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Container} from '../commonStyles';
import {HeaderButton, MyQRButton, Text} from './styles';
import CameraMask from '../../components/CameraMask';

const QRScanScreen: React.FC = () => {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [lightState, setLightState] = useState(false);

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
    setLightState(!lightState);
  }, [lightState]);

  return (
    <Container>
      <TouchableOpacity style={styles.full} onPress={toggleLight}>
        <RNCamera
          ref={cameraRef}
          flashMode={
            lightState
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          type={RNCamera.Constants.Type.back}
          style={styles.full}
          onBarCodeRead={onBarCodeRead}
        />
        <CameraMask
          center={false}
          edgeInside={true}
          caption={
            <Text style={styles.center}>Align QR code in frame to scan</Text>
          }
          insideComponent={
            <View style={styles.insideComponent}>
              <Feather
                name={lightState ? 'zap' : 'zap-off'}
                color="#fff"
                size={30}
              />
              <Text size={15}>{`Tap to turn light ${
                lightState ? 'off' : 'on'
              }`}</Text>
            </View>
          }
        />
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
  insideComponent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 20,
  },
  center: {
    textAlign: 'center',
  },
});
