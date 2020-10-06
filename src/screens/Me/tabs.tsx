import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LikeVideosTab from './LikeVideos';
import MyVideosTab from './MyVideos';
import PrivateVideosTab from './PrivateVideos';

const Tab = createMaterialTopTabNavigator();

const MeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      style={styles.tab}
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen
        name="MyVideosTab"
        component={MyVideosTab}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LikeVideosTab"
        component={LikeVideosTab}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PrivateVideosTab"
        component={PrivateVideosTab}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="lock-closed-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MeTabs;

const styles = StyleSheet.create({
  tab: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
  },
});
