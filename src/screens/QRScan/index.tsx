import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraMask from '../../components/CameraMask';
import {Container} from '../commonStyles';
import {HeaderButton, MyQRButton, Text} from './styles';

const {width, height} = Dimensions.get('screen');

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
      headerLeft: (props: any) => <HeaderBackButton {...props} />,
      headerBackTitle: ' ',
    });
  }, [navigation]);

  const onBarCodeRead = (result: any) => {
    console.log({result});
  };

  const toggleLight = useCallback(() => {
    setLightState(!lightState);
  }, [lightState]);

  const myTikCode = () => {
    navigation.navigate('MyTickCodeScreen');
  };

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
          width={width * 0.8}
          height={width * 0.8}
          top={(height - width * 0.8) / 4}
          animatedLineWidth={1}
          maskColor="#000"
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
        <MyQRButton onPress={myTikCode}>
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
