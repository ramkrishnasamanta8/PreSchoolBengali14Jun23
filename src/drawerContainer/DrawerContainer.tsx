import React,{useEffect,useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Share,
  Platform, Linking
} from 'react-native';
import styles from './styles';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import drawer_header from '../../assets/app_header.jpg';
import Modal from 'react-native-modal';
import close_white from '../../assets/close_white.png';
import imageGray from '../../assets/star_menu.png';
import imageYellow from '../../assets/star_yellow.png';
import Snackbar from 'react-native-snackbar';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

let drawerArray = [
  {
    title: 'Home',
    route: 'HomeDrawer',
    icon: require('../../assets/home.png'),
  },
  {
    title: 'ছড়া',
    route: 'RhymesList',
    icon: require('../../assets/rhymes_icon.png'),
  },
  {
    title: 'অঙ্কন',
    route: 'Drawing',
    icon: require('../../assets/pencil.png'),
  },
  {
    title: 'পথানুসরণ',
    route: 'Parichiti',
    icon: require('../../assets/tracing_icon.png'),
    name: "ABC Learning ",
    id: 2,
    tag: 'abc'
  },
  {
    title: 'Matching Game',
    route: 'MatchingGameChoose',
    icon: require('../../assets/puzzle.png'),
    name: "ABC Learning ",
    id: 2
  },
  {
    title: 'সমস্ত দেশ বিষয়ক',
    route: 'Country',
    icon: require('../../assets/world.png'),
    name: "ABC Learning ",
    id: 2
  },
  {
    title: 'Table',
    route: 'TableHome',
    icon: require('../../assets/tableDrawer.png'),
    name: "ABC Learning ",
    id: 2
  },
  {
    title: 'Good Habits',
    route: 'Parichiti',
    icon: require('../../assets/habits.png'),
    name: "Good Habits ",
    tag: 'GoodHabit'
  },
  {
    title: 'Game',
    route: 'Parichiti',
    icon: require('../../assets/game.png'),
    name: "Game ",
    tag: 'game',
  },
  {
    title: 'Share Apps',
    route: 'ShareApps',
    icon: require('../../assets/share.png'),
  },
  {
    title: 'Rate Us',
    route: 'RateUs',
    icon: require('../../assets/star.png'),
  },
  {
    title: 'More Apps',
    route: 'MoreApps',
    icon: require('../../assets/more_apps.png'),
  },
  {
    title: 'Feedback',
    route: 'Feedback',
    icon: require('../../assets/support.png'),
  },
  {
    title: 'Privacy Policy',
    route: 'PrivacyPolicy',
    icon: require('../../assets/ads.png'),
  },
  {
    title: 'Settings',
    route: 'Settings',
    icon: require('../../assets/setting.png'),
  },
];
const DrawerContainer =(props)=> {
const [isModalVisible,setisModalVisible]=useState(false);
const [selectedIndex,setselectedIndex]=useState(0);

  // constructor(props) {
  //   super(props);
  //  state = {
  //     isModalVisible: false,
  //     selectedIndex: 0,
  //   };
  // }
  const onShare = async () => {
    try {
      let strLink = " \uD83D\uDC66 \uD83D\uDC67ছোটদের বাংলা শেখা - Bangla Kids Learning App ✏\uD83D\uDCDA স্বরবর্ণ, ব্যঞ্জনবর্ণ, ড্রয়িং, টাইপিং, গণিত,\uD83D\uDC1F\uD83E\uDD86 কম্পিউটার, খেলাধুলা \uD83D\uDC2A ও ছোটদের ছড়া \uD83D\uDC67 All in one Best Bengali Nursery apps \uD83E\uDD92 \uD83D\uDC18 \n\n";
      if (Platform.OS === 'android') {
        strLink += 'https://play.google.com/store/apps/details?id=com.rks.preschoolbengali';
      } else {
        strLink += 'https://apps.apple.com/us/app/doorhub-driver/1588236419';
      }
      const result = await Share.share({
        message: strLink,
        title: 'ছোটদের বাংলা শেখা - Bangla Kids Learning App',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const changeRating = (index) => {
    setselectedIndex(index)
  }
  const submitRating = () => {
    setisModalVisible(false);
      if (selectedIndex == 5) {
        Snackbar.show({ text: 'Thanks for your Feedback. \n Your rate on store', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
        
    setTimeout(() => {
        if (Platform.OS === 'android') {
          Linking.openURL('https://play.google.com/store/apps/details?id=com.rks.preschoolbengali');
        } else {
          Linking.openURL('https://apps.apple.com/us/app/doorhub-driver/1588236419');
        }
      }, 3000)

      } else {
        Snackbar.show({ text: 'Thanks for your Feedback', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
      }
  }
    return (
      <View style={styles.content}>
        <View style={styles.viewHeader}>
          <Image source={drawer_header} style={{ height: '100%', width: '100%' }} />
          </View>
        <View style={styles.viewBody}>
          <FlatList
            data={drawerArray}
            renderItem={({ item, index }) => (
              <View>
                {item.route == 'ShareApps' ? <View style={{ height: 1, backgroundColor: Color.createInputBorder }} /> : null}

                <TouchableOpacity style={styles.listItemView} onPress={() => {
                 props.navigation.closeDrawer();
                  if (item.route == 'ShareApps') {
                   onShare();
                  } else if (item.route == 'RateUs') {
                    setselectedIndex(0);
                     setisModalVisible(true);
                  } else if (item.route == 'Feedback') {
                    Linking.openURL('mailto:support@rksmobilesolution.in');
                  } else if (item.route == 'MoreApps') {
                    if (Platform.OS === 'android') {
                      Linking.openURL('https://play.google.com/store/apps/developer?id=RKS+Mobile+Solution');
                    } else {
                      Linking.openURL('https://apps.apple.com/in/developer/ramkrishna-samanta/id1588236421');
                    }
                  } else {
                    return props.navigation.navigate(item.route, { item: item });
                  }

                }}>
                  <Image style={styles.menuImage} source={item.icon} />
                  <Text style={styles.txtMenu}>{item.title}</Text>
                </TouchableOpacity>


              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text style={{ fontSize: CustomFont.font16, textAlign: 'center', color: Color.fontColor, marginBottom: responsiveHeight(2.5) }}>V1.0</Text>
        <Modal isVisible={isModalVisible} onRequestClose={() => setisModalVisible(false)}>
          <View style={{ backgroundColor: Color.white, borderRadius: 10 }}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', margin: responsiveWidth(3) }}>
              <Text style={{ margin: 5, fontSize: CustomFont.font24, color: Color.fontColor }}>Select Rating</Text>
              <TouchableOpacity onPress={() => setisModalVisible(false)} style={{ marginRight: responsiveWidth(3), marginTop: 3 }}>
                <Image source={close_white} style={{ tintColor: Color.fontColor, height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginRight: 10, marginLeft: 5 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: responsiveHeight(3) }}>
              <TouchableOpacity onPress={() =>changeRating(1)}>
                <Image source={selectedIndex > 0 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>changeRating(2)}>
                <Image source={selectedIndex > 1 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>changeRating(3)}>
                <Image source={selectedIndex > 2 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>changeRating(4)}>
                <Image source={selectedIndex > 3 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>changeRating(5)}>
                <Image source={selectedIndex > 4 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
              </TouchableOpacity>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginBottom: responsiveHeight(4) }}>
              <TouchableOpacity style={{ backgroundColor: '#FFAA33', borderRadius: 10, width: responsiveWidth(40), justifyContent: 'center', alignItems: 'center' }} onPress={() =>submitRating()}>
                <Text style={{ color: Color.white, fontSize: CustomFont.font16, margin: responsiveHeight(2), fontWeight: '600' }}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
      </View>
    );
}
export default DrawerContainer;