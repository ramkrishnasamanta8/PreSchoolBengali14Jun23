import * as React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ImageBackground, Platform,StatusBar } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import back from '../../assets/back.png';
import yellow_bg from '../../assets/yellow_bg.png';
import lock from '../../assets/lock.png';
import checked from '../../assets/checked_green.png';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import OptionMenu from '../components/OptionMenuHome';
import AsyncStorage from '@react-native-community/async-storage';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
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
let completeItemString = '';
global.That=null;
export default class MatchingGameChoose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      dayName: '',
      txtDate: '',
    };

  }
  async componentDidMount() {
    That=this;
    this.loadData();
  }
  Refresh=()=>{
    //alert('kk')
    this.loadData();
  }
  loadData = async () => {
    completeItemString = await AsyncStorage.getItem('completeItem');
    //console.log('completeItemString----' + completeItemString);
    this.setState({
      dataArray: [{ title: 'ABC', image: require('../../assets/a.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: true },
      { title: '123', image: require('../../assets/123.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: false },
      { title: 'Shapes', image: require('../../assets/shapes.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: false },
      { title: 'Colors', image: require('../../assets/color.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'color', isComplete: false },
      { title: 'Shadow', image: require('../../assets/shadow.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: false },
      { title: 'Spell', image: require('../../assets/spell.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Animal', image: require('../../assets/anmelk.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Same Object', image: require('../../assets/sameObj.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: false },
      //{ title: 'Parent to Baby', image: require('../../assets/parentChild.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'image', isComplete: false },
      { title: 'Letter Case', image: require('../../assets/case.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Body Parts', image: require('../../assets/parts.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Vegitables', image: require('../../assets/beetroot.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Fruits', image: require('../../assets/mangos.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Vehicals', image: require('../../assets/cforcar.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Flowers', image: require('../../assets/flower_country.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Birds', image: require('../../assets/anmflamingo.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Sea Animals', image: require('../../assets/octopus.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Furnitures', image: require('../../assets/stool.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Nature', image: require('../../assets/waterfall.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Sports', image: require('../../assets/tennis.png'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Insects', image: require('../../assets/butterfly.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Place', image: require('../../assets/postoffice.webp'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      { title: 'Computer', image: require('../../assets/computer.jpg'), route: Platform.isPad? 'MatchingGameIpad':'MatchingGame', type: 'text', isComplete: false },
      ]
    })
  }
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.white, alignItems: 'center', marginLeft: 12, marginTop: 12, borderRadius: 10, maxWidth: Platform.isPad? responsiveWidth(31.5) : responsiveWidth(30.6), }}
      onPress={() => {
        playSound('click.mp3');
        this.props.navigation.navigate(item.route, { item: item,Refresh:this.Refresh })
      }}>
      <Image source={item.image} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'stretch', marginTop: responsiveHeight(3) }} />

      <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: responsiveHeight(1), marginBottom: responsiveHeight(3), fontWeight: 'bold', textAlign: 'center', marginLeft: 10, marginRight: 10 }}>{item.title}</Text>
      {completeItemString && completeItemString.includes(item.title) ? <Image source={checked} style={{ height: responsiveFontSize(2.5), width: responsiveFontSize(2.5), resizeMode: 'contain', position: 'absolute', top: 5, right: 5 }} /> :
        null}

    </TouchableOpacity>
  );
  render() {
    return (
      <ImageBackground source={yellow_bg} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
      <StatusBar backgroundColor={'#FFE583'} barStyle="light-content" />
      {/* <NavigationEvents onDidFocus={() => this.loadData()} /> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Platform.OS == 'android' ? responsiveHeight(2) : responsiveHeight(5), alignItems: 'center' }}>
          <TouchableOpacity style={{ marginLeft: responsiveWidth(3), zIndex: 99 }} onPress={() => {
            if(IsSoundEnabled)
            clickSound();
            this.props.navigation.goBack()
          }}>
            <Image source={back} style={{ height: Platform.isPad? responsiveFontSize(4) : responsiveFontSize(6), width:Platform.isPad? responsiveFontSize(4) : responsiveFontSize(6), resizeMode: 'contain', margin: 10 }} />
          </TouchableOpacity>

          <View style={{ height: responsiveHeight(5.5), width: responsiveWidth(60), backgroundColor: Color.white, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, }}>
            <Text style={{ fontSize: CustomFont.font16, fontWeight: '800', color: Color.fontColor, }}>Where you interest ? </Text>
          </View>
          <OptionMenu />
        </View>

        <View style={{ flex: 10, marginTop: 5 }}>
       
          {this.state.dataArray ? <FlatList
            numColumns={3}
            style={{ marginRight: 12, marginBottom: responsiveHeight(1.6)}}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()} /> : <Text style={{ marginTop: responsiveHeight(30), marginLeft: responsiveWidth(20) }}>No data found</Text>}

        </View>
        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
      </ImageBackground>
    );
  }

}
