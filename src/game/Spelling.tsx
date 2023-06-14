import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Animated, ScrollView, Alert, ImageBackground,Platform } from 'react-native';
import arrowRight from '../../assets/arrowRight.png';

import back from '../../assets/back.png';
import bgImage from '../../assets/bg.png';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';
import previous from '../../assets/previous_btn.png';
import next from '../../assets/nxt_btn.png';
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let isSound = false;
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0;
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
var sliderTimer = null;
export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dataArray: [],
      pageIndex: 0,
      textIndex: -1,
      score: 0,
      fadeAnim1: new Animated.Value(1),
    };
    soundPosition = 0;
  }

  async componentDidMount() {
    let tag = this.props.route.params.item.tag;
    this.getEngNumber();

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if(sliderTimer)
      clearInterval(sliderTimer);
		sliderTimer=null;
      this.props.navigation.goBack();
      return true;
    })
  }
  getEngNumber = () => {
    let tempArr = [
      { number: ['O', 'n', 'e'], numberImg: require('../../assets/icon_n1.png'), meaningImg: require('../../assets/n1_one.png'), example: "Aeroplane", sound: 'spelling_01.mp3',color:"#fe0000"},
      { number: ['T', 'w', 'o'], numberImg: require('../../assets/icon_n2.png'), meaningImg: require('../../assets/n2_two.png'), example: "Apple", sound: 'spelling_02.mp3' ,color:"#461B7E"},
      { number: ['T', 'h', 'r', 'e', 'e'], numberImg: require('../../assets/icon_n3.png'), meaningImg: require('../../assets/n3_three.png'), example: "Lollipops", sound: 'spelling_03.mp3',color:"#B93B8F"},
      { number: ['F', 'o', 'u', 'r'], numberImg: require('../../assets/icon_n4.png'), meaningImg: require('../../assets/n4_four.png'), example: "Dolls", sound: 'spelling_04.mp3',color:"#7430ff"},
      { number: ['F', 'i', 'v', 'e'], numberImg: require('../../assets/icon_n5.png'), meaningImg: require('../../assets/n5_five.png'), example: "Caps", sound: 'spelling_05.mp3' ,color:"#FFF"},
      { number: ['S', 'i', 'x'], numberImg: require('../../assets/icon_n6.png'), meaningImg: require('../../assets/n6_six.png'), example: "Bats", sound: 'spelling_06.mp3' ,color:"#3800fd"},
      { number: ['S', 'e', 'v', 'e', 'n'], numberImg: require('../../assets/icon_n7.png'), meaningImg: require('../../assets/n7_seven.png'), example: "Cars", sound: 'spelling_07.mp3' ,color:"#000000"},
      { number: ['E', 'i', 'g', 'Z', 'h', 't'], numberImg: require('../../assets/icon_n8.png'), meaningImg: require('../../assets/n8_eigght.png'), example: "Fishes", sound: 'spelling_08.mp3' ,color:"#000080"},
      { number: ['N', 'i', 'n', 'e'], numberImg: require('../../assets/icon_n9.png'), meaningImg: require('../../assets/n9_nine.png'), example: "Drums", sound: 'spelling_09.mp3',color:"#E0220E"},
      { number: ['T', 'e', 'n'], numberImg: require('../../assets/icon_n10.png'), meaningImg: require('../../assets/n10_ten2.png'), example: "Kites", sound: 'spelling_10.mp3' ,color:"#0166fe"},
      { number: ['E', 'l', 'e', 'v', 'e', 'n'], numberImg: require('../../assets/icon_n11.png'), meaningImg: require('../../assets/n11_eleaven.png'), example: "Leaves", sound: 'spelling_11.mp3' ,color:"#b300d5"},
      { number: ['T', 'w', 'e', 'l', 'v', 'e'], numberImg: require('../../assets/icon_n12.png'), meaningImg: require('../../assets/n12_tweel.png'), example: "Ice Creams", sound: 'spelling_12.mp3',color:"#800000"},
      { number: ['T', 'h', 'i', 'r', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n13.png'), meaningImg: require('../../assets/n13_thirteen.png'), example: "Ballons", sound: 'spelling_13.mp3' ,color:"#D81B60"},
      { number: ['F', 'o', 'u', 'r', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n14.png'), meaningImg: require('../../assets/n14_fourteen.png'), example: "Pencils", sound: 'spelling_14.mp3' ,color:"#dbf240"},
      { number: ['F', 'i', 'f', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n15.png'), meaningImg: require('../../assets/n15_fifteen.png'), example: "Flags", sound: 'spelling_15.mp3',color:"#3D0C02"},
      { number: ['S', 'i', 'x', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n16.png'), meaningImg: require('../../assets/n16_sixteen.png'), example: "Ducks", sound: 'spelling_16.mp3' ,color:"#fe2f9c"},
      { number: ['S', 'e', 'v', 'e', 'n', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n17.png'), meaningImg: require('../../assets/n17_seventeen.png'), example: "Candles", sound: 'spelling_17.mp3' ,color:"#7a2048"},
      { number: ['E', 'i', 'g', 'h', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n18.png'), meaningImg: require('../../assets/n18_eighteen.png'), example: "Flowers", sound: 'spelling_18.mp3',color:"#ffe4f4"},
      { number: ['N', 'i', 'n', 'e', 't', 'e', 'e', 'n'], numberImg: require('../../assets/icon_n19.png'), meaningImg: require('../../assets/n19_nineteen.png'), example: "Balls", sound: 'spelling_19.mp3' ,color:"#20fdf0"},
      { number: ['T', 'w', 'e', 'n', 't', 'y'], numberImg: require('../../assets/icon_n20.png'), meaningImg: require('../../assets/n20_twenty.png'), example: "Stars", sound: 'spelling_20.mp3' ,color:"#750000"},
    ];
    this.setState({ dataArray: tempArr });
  }
  getAnimate = () => {
    Animated.timing(this.state.fadeAnim1, { toValue: 1, duration: 2000 }).start();
  };

  render() {
    let tag = this.props.route.params.item.tag;
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar hidden />
        <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          this.setState({pageIndex:position});
          playSound(this.state.dataArray[position].sound);
          //this.setState({textIndex:0});
try {
   let tmpArr=this.state.dataArray[position].number;

} catch (error) {
  
}

        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray.map((item, index) => {
            return (
              <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
                <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content"/>
                <View style={{ flex: 1 }}>

                  <View style={{ flex: 1.2, alignItems: 'center' }}>
                  <Text style={{ color: item.color, fontSize: CustomFont.font20, fontWeight: 'bold',marginTop:responsiveHeight(7),fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici'}}>{item.example}</Text>
                    <Image source={item.meaningImg} style={{ height: responsiveFontSize(40), width: responsiveFontSize(40), resizeMode: 'stretch', marginLeft: responsiveWidth(3),marginRight:responsiveWidth(3),}} />
                    <Image source={item.numberImg} style={{ height: responsiveFontSize(20), width: responsiveFontSize(20), resizeMode: 'contain', marginTop: responsiveHeight(-4) }} />

                  </View>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', margin: 10, marginTop: responsiveHeight(12) }}>
                      {item.number.map((item2, index) => {
                        return (
                          <Animated.View style={{ opacity: this.state.fadeAnim1 }} >
                            <Text style={{ color: item.color, fontSize: CustomFont.font40, fontWeight: 'bold',backgroundColor:index==this.state.textIndex ? 'yellow' :null }}>{item2}</Text>
                          </Animated.View>
                        );
                      }, this)}
                    </View>


                  </View>
                  <View style={{ alignItems: 'center' }}>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
                  
                </View>
              </ImageBackground>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() =>{
          if(sliderTimer)
          clearInterval(sliderTimer);
        sliderTimer=null;
        if(IsSoundEnabled)
    clickSound();
        this.props.navigation.goBack();
        } }>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(7), right: 0 }} onPress={() =>{
          if(this.state.pageIndex <19)
this.refs.viewpager.setPage(++this.state.pageIndex)
        }  }>
                <Image source={arrowRight} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 5 }} />
              </TouchableOpacity>
      </View>
    );
  }

}
//export default HomeDrawer;
