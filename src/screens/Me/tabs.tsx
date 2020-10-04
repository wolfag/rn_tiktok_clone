import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import LikeVideosTab from './LikeVideos';
import MyVideosTab from './MyVideos';
import PrivateVideosTab from './PrivateVideos';

const MeTabs: React.FC = () => {
  return (
    <View>
      <View style={styles.tabBars}>
        <Ionicons name="stats-chart-outline" size={24} />
        <Ionicons name="heart-outline" size={24} />
        <Ionicons name="lock-closed-outline" size={24} />
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default MeTabs;

const styles = StyleSheet.create({
  tabBars: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  wrapper: {backgroundColor: 'pink', height: 200},
  slide1: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
