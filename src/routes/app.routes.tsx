import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import HomeScreen from '../screens/Home';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscoverScreen from '../screens/Discover';
import RecordScreen from '../screens/Record';
import PlusButton from '../components/PlusButton';
import InboxScreen from '../screens/Inbox';
import MeScreen from '../screens/Me';
import QRScanScreen from '../screens/QRScan';
import MyTikCode from '../screens/MyTikCode';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const [home, setHome] = useState(true);
  StatusBar.setBarStyle('dark-content');

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#fff');
  }

  if (home) {
    StatusBar.setHidden(true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('light-content');
    }
  } else {
    StatusBar.setHidden(false);
  }

  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="Home"
      activeColor={home ? '#fff' : '#000'}
      barStyle={{backgroundColor: home ? '#000' : '#fff'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        listeners={{focus: () => setHome(true), blur: () => setHome(false)}}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={RecordScreen}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('RecordScreen');
          },
        })}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <PlusButton home={home} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen: React.FC = () => {
  return (
    <Stack.Navigator mode="card" initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={AppRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecordScreen"
        component={RecordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="QRScanScreen" component={QRScanScreen} />
      <Stack.Screen name="MyTickCodeScreen" component={MyTikCode} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
