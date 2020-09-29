import Lottie from 'lottie-react-native';
import React from 'react';
import {Animated, Easing, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import musicFly from '../../../assets/lottie-animations/music-fly.json';
import {
  Actions,
  BoxAction,
  Container,
  Details,
  Music,
  MusicBox,
  Tags,
  TextAction,
  User,
} from './styles';

interface Item {
  id: number;
  username: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
}

interface Props {
  play: boolean;
  item: Item;
}

const Feed: React.FC<Props> = ({play, item}) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const rotateProp = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        style={styles.linearGradientStart}
      />
      <Container>
        <Video
          source={{uri: item.uri}}
          rate={1.0}
          volume={1.0}
          resizeMode="cover"
          shouldPlay={play}
          isLooping
          style={styles.video}
        />
      </Container>
      <Details>
        <User>{item.username}</User>
        <Tags>{item.tags}</Tags>
        <MusicBox>
          <FontAwesome name="music" size={15} color="#f5f5f5" />
          <Music>{item.music}</Music>
        </MusicBox>
      </Details>
      <Actions>
        <BoxAction>
          <AntDesign style={styles.icon} name="heart" color="#fff" />
          <TextAction>{item.likes}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome style={styles.icon} name="commenting" color="#fff" />
          <TextAction>{item.comments}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome style={styles.icon} name="whatsapp" color="#06d755" />
          <TextAction>Share</TextAction>
        </BoxAction>
        <BoxAction>
          <Animated.View
            style={[
              styles.rotateCamera,
              {
                transform: [
                  {
                    rotate: play ? rotateProp : '0deg',
                  },
                ],
              },
            ]}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/45601574',
              }}
            />
          </Animated.View>
          <Lottie
            source={musicFly}
            style={styles.lottie}
            progress={play ? spinValue : 0}
          />
        </BoxAction>
      </Actions>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        style={styles.linearGradientEnd}
      />
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  linearGradientStart: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '70%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  lottie: {
    width: 150,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  linearGradientEnd: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 35,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  rotateCamera: {
    borderRadius: 50,
    borderWidth: 12,
    borderColor: '#292929',
  },
});
