import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {SectionList, StyleSheet, TextStyle, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Text} from '../commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ItemProps {
  title: string;
  icon: React.ReactElement;
}

interface SectionProps {
  title: string;
  data: ItemProps[];
}

const iconStyle: TextStyle = {
  marginRight: 10,
  fontSize: 30,
  color: 'grey',
};

const DATA: SectionProps[] = [
  {
    title: 'ACCOUNT',
    data: [
      {
        title: 'Manage account',
        icon: <Feather name="user" style={iconStyle} />,
      },
      {
        title: 'Privacy',
        icon: <Feather name="lock" style={iconStyle} />,
      },
      {
        title: 'Security',
        icon: <Feather name="shield" style={iconStyle} />,
      },
      {
        title: 'Balance',
        icon: <Ionicons name="wallet-outline" style={iconStyle} />,
      },
      {
        title: 'TikCode',
        icon: <Ionicons name="qr-code-outline" style={iconStyle} />,
      },
      {
        title: 'Share profile',
        icon: <Ionicons name="arrow-redo-outline" style={iconStyle} />,
      },
    ],
  },
  {
    title: 'CONTENT & ACTIVITY',
    data: [
      {
        title: 'Push notifications',
        icon: <Feather name="bell" style={iconStyle} />,
      },
      {
        title: 'App language',
        icon: <Ionicons name="language-outline" style={iconStyle} />,
      },
      {
        title: 'Content preferences',
        icon: <Ionicons name="videocam-outline" style={iconStyle} />,
      },
      {
        title: 'Digital Wellbeing',
        icon: <Ionicons name="umbrella-outline" style={iconStyle} />,
      },
      {
        title: 'Family Pairing',
        icon: <Feather name="home" style={iconStyle} />,
      },
      {
        title: 'Accessibility',
        icon: <Ionicons name="body-outline" style={iconStyle} />,
      },
    ],
  },
  {
    title: 'CACHE & CELLULAR DATA',
    data: [
      {
        title: 'Free up space',
        icon: <Ionicons name="trash-outline" style={iconStyle} />,
      },
      {
        title: 'Data Saver',
        icon: <Ionicons name="water-outline" style={iconStyle} />,
      },
    ],
  },
  {
    title: 'SUPPORT',
    data: [
      {
        title: 'Report a Problem',
        icon: <Feather name="edit" style={iconStyle} />,
      },
      {
        title: 'Help Center',
        icon: <Feather name="help-circle" style={iconStyle} />,
      },
      {
        title: 'Safety Center',
        icon: <Ionicons name="shield-checkmark-outline" style={iconStyle} />,
      },
    ],
  },
  {
    title: 'ABOUT',
    data: [
      {
        title: 'Community Guidelines',
        icon: <Ionicons name="ellipse-outline" style={iconStyle} />,
      },
      {
        title: 'Terms of Use',
        icon: <Feather name="book" style={iconStyle} />,
      },
      {
        title: 'Privacy Policy',
        icon: <Feather name="file" style={iconStyle} />,
      },
      {
        title: 'Copyright Policy',
        icon: <MaterialCommunityIcons name="copyright" style={iconStyle} />,
      },
    ],
  },
];

const dataFooter = [
  {
    title: 'Add account',
    icon: <Feather name="plus" style={iconStyle} />,
  },
  {
    title: 'Log out',
    icon: <Feather name="log-out" style={iconStyle} />,
  },
];

const Item = ({title, icon}: ItemProps) => (
  <TouchableOpacity style={styles.item}>
    {icon}
    <Text style={styles.itemTitle}>{title}</Text>
  </TouchableOpacity>
);

const Section = ({title}: {title: string}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const SettingScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text size={20}>Settings and privacy</Text>,
      headerTitleAlign: 'center',
      headerLeft: (props: any) => <HeaderBackButton {...props} />,
      headerBackTitle: ' ',
    });
  }, [navigation]);

  return (
    <Container color="#fff">
      <SectionList
        stickySectionHeadersEnabled={false}
        style={styles.sectionContainer}
        sections={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <Item {...item} />}
        renderSectionHeader={({section: {title}}) => <Section title={title} />}
        renderSectionFooter={() => <View style={styles.lineSeparator} />}
        ListFooterComponent={() => (
          <View>
            {dataFooter.map((item) => (
              <Item key={item.title} {...item} />
            ))}
            <Text center color="grey" margin={50}>
              v17.6.4(17064)
            </Text>
          </View>
        )}
      />
    </Container>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    color: 'grey',
  },
  itemTitle: {},
  sectionContainer: {},
  section: {
    marginLeft: 20,
    marginTop: 20,
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: 'grey',
  },
});
