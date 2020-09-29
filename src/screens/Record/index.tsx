import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Description, Header, RecordButton, Row} from './styles';
import {Container} from '../commonStyles';

const RecordScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const navigation = useNavigation();

  // if (hasPermission === null) {
  //   return <View />;
  // }

  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <RNCamera
      style={{flex: 1}}
      type={type}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      <Container>
        <Header>
          <Button
            onPress={() => {
              console.log('===');
              StatusBar.setHidden(false);
              navigation.goBack();
            }}>
            <AntDesign name="close" size={28} color="#fff" />
          </Button>
          <Button>
            <Row>
              <FontAwesome name="music" size={18} color="#fff" />
              <Description>Sons</Description>
            </Row>
          </Button>
          <Button
            onPress={() => {
              setType(
                type === RNCamera.Constants.Type.back
                  ? RNCamera.Constants.Type.front
                  : RNCamera.Constants.Type.back,
              );
            }}>
            <MaterialCommunityIcons
              name="rotate-right"
              size={28}
              color="#fff"
            />
          </Button>
        </Header>
        <RecordButton />
      </Container>
    </RNCamera>
  );
};

export default RecordScreen;
