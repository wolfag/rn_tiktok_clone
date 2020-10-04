import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import RNFS from 'react-native-fs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import avatar from '../../assets/avatar.png';
import {Container, Text} from '../commonStyles';

const {width} = Dimensions.get('screen');

const MyTikCode: React.FC = () => {
  const navigation = useNavigation();
  const qrRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text bold>My TikCode</Text>,
      headerTitleAlign: 'center',
      headerLeft: (props: any) => <HeaderBackButton {...props} />,
      headerBackTitle: ' ',
    });
  }, [navigation]);

  const scanQrCode = () => {
    navigation.navigate('QRScanScreen');
  };

  const saveQrCode = () => {
    if (qrRef.current) {
      qrRef.current?.toDataURL((data: string) => {
        RNFS.writeFile(
          `${RNFS.DownloadDirectoryPath}/tican.png`,
          data,
          'base64',
        )
          .then((success) => console.log({success}))
          .catch((error) => console.log(error));
      });
    }
  };

  return (
    <Container color="#F8F8F8" padding={20}>
      <View style={styles.qrContainer}>
        <View style={styles.qrCard}>
          <View style={styles.qrSquare}>
            <QRCode
              getRef={qrRef}
              value="Just some string value"
              logoSize={30}
              logoBackgroundColor="transparent"
              size={width * 0.3}
              logo={avatar}
            />
            <Text margin={5}>Ti Can</Text>
          </View>
          <View>
            <Text color="grey" center size={15}>
              Scan TikCode to follow me
            </Text>
            <Text bold size={40} center>
              TikCode
            </Text>
          </View>
        </View>
        <Text color="grey" center size={15}>
          Please use the latest version of our app to scan the code
        </Text>
      </View>
      <View style={styles.full} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={saveQrCode}>
          <Ionicons name="download-outline" size={50} color="#000" />
          <Text color="grey">Save QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scanQrCode}>
          <Ionicons name="qr-code-outline" size={50} color="#000" />
          <Text color="grey">Scan</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default MyTikCode;

const styles = StyleSheet.create({
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
    marginHorizontal: 50,
  },
  qrCard: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
  },
  qrSquare: {
    alignItems: 'center',
    marginBottom: 80,
  },
  full: {flex: 1},
  footer: {flexDirection: 'row', justifyContent: 'space-around'},
  button: {
    alignItems: 'center',
  },
});
