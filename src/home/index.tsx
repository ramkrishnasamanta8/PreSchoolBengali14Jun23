import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, TextInput, SafeAreaView, Platform ,Alert,Linking} from 'react-native';
import ic_menu from '../../assets/ic_menu.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import search_blue from '../../assets/search_blue.png';
import close_white from '../../assets/close_white.png';
import _ from 'lodash';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
import AsyncStorage from '@react-native-community/async-storage';
let FullArray = [
  { tag: 'rhymes', id: 0, name: "ছোটদের ছড়া ", image: require('../../assets/hatimatim.webp'), searchTxt: "chotoder chora", route: 'RhymesList' },
  { tag: 'drawing', id: 1, name: "ড্রয়িং ", image: require('../../assets/drawing.jpg'), searchTxt: "drawing", route: 'Drawing' },
  { tag: 'abc', id: 2, name: "ABC Learning ", image: require('../../assets/alphabets.jpg'), searchTxt: "abc baro hater ", route: 'Parichiti' },
  { tag: 'sarban', id: 3, name: "স্বরবর্ণ ও ব্যঞ্জনবর্ণ ", image: require('../../assets/sarbarna.webp'), searchTxt: "sarabarna ", route: 'Parichiti' },
  { tag: 'hearing', id: 3, name: "শ্রুতি পঠন ", image: require('../../assets/sruti.jpg'), searchTxt: "sarabarna ", route: 'Parichiti' },
  { tag: 'rearrange', id: 3, name: "সাজানো ", image: require('../../assets/arragne.png'), searchTxt: "sarabarna ", route: 'Parichiti' },
  { tag: 'guess', id: 4, name: "ABC অনুমান  ", image: require('../../assets/guess_image.webp'), searchTxt: "abc anuman", route: 'Guess' },
  { tag: 'number', id: 5, name: "সংখ্যা পরিচিতি  ", image: require('../../assets/number.webp'), searchTxt: "number sankha", route: 'Parichiti' },
  { tag: 'typing', id: 6, name: "টাইপিং ", image: require('../../assets/typing.webp'), searchTxt: "typing", route: 'Typing' },
  { tag: 'math', id: 7, name: "গণিত ", image: require('../../assets/math.jpg'), searchTxt: "ganit math", route: 'Parichiti' },
  { tag: 'daymonth', id: 8, name: "দিন,মাস,ঋতু  ", image: require('../../assets/days.webp'), searchTxt: "english din day", route: 'Parichiti' },
  { tag: 'env', id: 9, name: "পরিবেশ পরিচিতি ", image: require('../../assets/parichiti.jpg'), searchTxt: "english din day", route: 'Parichiti' },
  { tag: 'entertainment', id: 10, name: "Entertainment", image: require('../../assets/entertainment.jpg'), searchTxt: "paribesh parichiti", route: 'Parichiti' },
  { tag: 'advace', id: 11, name: "Advance Learning", image: require('../../assets/country.jpg'), searchTxt: "country", route: 'Parichiti' },
  { tag: 'matching', id: 12, name: "Matching Game", image: require('../../assets/matching_game.webp'), searchTxt: "country", route: 'MatchingGameChoose' },
  { tag: 'table', id: 13, name: "Math Table", image: require('../../assets/table1.png'), searchTxt: "country", route: 'TableHome' },
  { tag: 'GoodHabit', id: 14, name: "Good Habit", image: require('../../assets/goodhabit/throwGarbage.webp'), searchTxt: "country", route: 'Parichiti' },
  { tag: 'game', id: 15, name: "Game", image: require('../../assets/games.png'), searchTxt: "country", route: 'Parichiti' },
  { tag: 'test', id: 16, name: "Test", image: require('../../assets/exam.png'), searchTxt: "country", route: 'Parichiti' },
];
global.Hichuba = false;
global.IsSoundEnabled = true;
import messaging from '@react-native-firebase/messaging';


const HomeDrawer = (props) => {
  const [dataArray, setDataArray] = useState(FullArray);
  const [searchInputShow, setSearchInputShow] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');
  const [crossStatus, setCrossStatus] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('settings').then((res) => {
      if (res && res == 'off') {
        IsSoundEnabled = false;
      }
    });
    mobileAds()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,

        // An array of test device IDs to allow.
        testDeviceIdentifiers: ['EMULATOR'],
      })
      .then(() => {
        // Request config successfully set!
      });
      console.log(new Date().getTime())
    if (new Date().getTime() > 1686015695000) {
      Hichuba = true;
    }

    messaging().onMessage(async remoteMessage => {
      showAlert(remoteMessage);
    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            //console.log('------------------receive noti2'+JSON.stringify(remoteMessage));
            if (remoteMessage) {
              showAlert(remoteMessage);
            }
        });

    messaging()
    .subscribeToTopic('urlRedirection')
    .then(() => console.log('Subscribed fom the topic!'));

    //alert('klkll')
    // const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress)

    // // for unmount
    // return function cleanUp() {
    //     backHandler.remove();
    // }
  }, []);

const showAlert=(remoteMessage)=>{
  let title='',body='',url='',customHeadOnAlert='';
      try {
        title=remoteMessage.data.title;
        body=remoteMessage.data.body;
        url=remoteMessage.data.url;
        customHeadOnAlert=remoteMessage.data.customHeadOnAlert;

      } catch (error) {
        
      }
      Alert.alert(
        customHeadOnAlert ? customHeadOnAlert :"Redirect to our Channel",
        title +'\n\n'+body,
        [
            {
                text: "Cancel",
                onPress: () => console.log(""),
                style: "cancel"
            },
            { text: "OK", onPress: () => {
              Linking.openURL(url);
            } }
        ]
    );
}
  const renderList = ({ item, index }) => (
    <View style={{ flex: 1, maxWidth: responsiveWidth(48), marginTop: responsiveHeight(2.5), alignItems: 'center', justifyContent: 'center', }}>
      <TouchableOpacity style={{ backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: responsiveFontSize(2), borderColor: Color.blueBorder, borderWidth: 3 }} onPress={() => {

        if (IsSoundEnabled)
          clickSound();
        props.navigation.navigate(item.route, { item: item, })
      }}>
        <Image source={item.image} style={{ height: responsiveFontSize(13), width: responsiveFontSize(13), borderRadius: 10, margin: responsiveWidth(3), resizeMode: 'stretch' }} />
      </TouchableOpacity>

      <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: Color.redFont, marginTop: 5 }}>{item.name}</Text>
    </View>

  );
  const SearchFilterFunction = (text) => {
    //for CheckIn
    var searchResultCheckIn = _.filter(FullArray, function (item) {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || item.searchTxt.indexOf(text.toLowerCase()) > -1;
    });
    setDataArray(searchResultCheckIn ? searchResultCheckIn : []);
    setSearchTxt(text)

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }} onStartShouldSetResponder={() => {
      setCrossStatus(true);
      setSearchInputShow(true)
    }}>
      <StatusBar backgroundColor={Color.primaryDark} />
      <View style={{ backgroundColor: '#008000', flexDirection: 'row', alignItems: 'center', height: responsiveHeight(7), minHeight: 50 }}>
        <TouchableOpacity style={{ height: '100%', width: responsiveWidth(12), alignItems: 'center', justifyContent: 'center' }} onPress={() => {

          if (IsSoundEnabled)
            clickSound();
          props.navigation.openDrawer()
        }}>
          <Image source={ic_menu} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF' }} />
        </TouchableOpacity>

        {searchInputShow ? <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>ছোটদের বাংলা শেখা </Text> :
          <TextInput style={{ height: responsiveHeight(5), borderBottomColor: '#e0e0e0', borderBottomWidth: 1, width: responsiveWidth(75), borderRadius: 5, fontSize: CustomFont.font14, padding: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0, marginBottom: 7, marginLeft: 10, color: '#FFF' }}
            onBlur={() => {
              setSearchInputShow(true);
              setCrossStatus(!crossStatus);
            }} value={searchTxt} onChangeText={(searchTxt) => { return SearchFilterFunction(searchTxt) }}
            selectionColor={'#FFF'} />}

        {crossStatus ? <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1.6), right: 0 }} onPress={() => {
          setTimeout(() => {
            //this.refs.search.focus();
          }, 500)
          setSearchInputShow(false);
          setCrossStatus(!crossStatus);
        }}>
          <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={search_blue} />
        </TouchableOpacity> :
          <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1), right: 0 }} onPress={() => {
            setDataArray(FullArray);
            setCrossStatus(!crossStatus);
            setSearchInputShow(true)
            setSearchTxt('')
          }}>
            <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={close_white} />
          </TouchableOpacity>}

      </View>
      <View style={{ flex: 10, backgroundColor: Color.greenBg }}>

        {dataArray ? <FlatList
          numColumns={2}
          style={{ marginBottom: 10 }}
          data={dataArray}
          renderItem={renderList}
          //ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={(item, index) => index.toString()} /> : <Text style={{ marginTop: responsiveHeight(30), marginLeft: responsiveWidth(20) }}>No data found</Text>}
        {Platform.OS=='ios' ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
      </View>

    </SafeAreaView>
  );

}
export default HomeDrawer;
