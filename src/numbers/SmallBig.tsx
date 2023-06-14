import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, ScrollView, Platform, ImageBackground } from 'react-native';
import Orientation from 'react-native-orientation';

import bgImage from '../../assets/bg2.jpg';
import back from '../../assets/back.png';
import next from '../../assets/next.png';
import Toolbar from '../components/Toolbar';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('ben-IE');
//Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
let position = 0, favTxt = '', id = '';
let whoosh = null;
let isSound = false;
let item = null;
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
export default class SmallBig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      pageIndex: 0,
      selectNumberIndex: -1
    };
    Orientation.lockToLandscapeRight();
  }

  async componentDidMount() {
    item = this.props.route.params.item;
    if (item) {
      if (item.id == 5)
        this.getBigNumber();
      else if (item.id == 6)
        this.getSmallNumber();
      else if (item.id == 7)
        this.countNumberByPicture();
    }

  }
  getBigNumber = () => {
    let tempArr = [{ ans1: "3", ans2: "8", ans3: "5", ans4: "2", correctAns: "2", },
    { ans1: "5", ans2: "8", ans3: "10", ans4: "32", correctAns: "4", },
    { ans1: "10", ans2: "19", ans3: "7", ans4: "2", correctAns: "2", },
    { ans1: "15", ans2: "12", ans3: "18", ans4: "3", correctAns: "3", },
    { ans1: "2", ans2: "9", ans3: "7", ans4: "3", correctAns: "2", },
    { ans1: "11", ans2: "13", ans3: "26", ans4: "30", correctAns: "4", },
    { ans1: "90", ans2: "30", ans3: "20", ans4: "70", correctAns: "1", },
    { ans1: "23", ans2: "91", ans3: "40", ans4: "31", correctAns: "2", },
    { ans1: "21", ans2: "12", ans3: "41", ans4: "35", correctAns: "3", },
    { ans1: "16", ans2: "28", ans3: "22", ans4: "18", correctAns: "2", },
    { ans1: "50", ans2: "66", ans3: "31", ans4: "45", correctAns: "2", },
    { ans1: "37", ans2: "24", ans3: "17", ans4: "0", correctAns: "1", },
    { ans1: "25", ans2: "10", ans3: "19", ans4: "30", correctAns: "4", },
    { ans1: "13", ans2: "25", ans3: "0", ans4: "14", correctAns: "2", },
    { ans1: "19", ans2: "1", ans3: "8", ans4: "27", correctAns: "4", },
    { ans1: "18", ans2: "5", ans3: "6", ans4: "16", correctAns: "1", },
    { ans1: "19", ans2: "26", ans3: "3", ans4: "17", correctAns: "2", },
    { ans1: "16", ans2: "1", ans3: "28", ans4: "5", correctAns: "3", },
    { ans1: "30", ans2: "27", ans3: "9", ans4: "1", correctAns: "1", },
    { ans1: "20", ans2: "28", ans3: "47", ans4: "52", correctAns: "4", },
    { ans1: "53", ans2: "58", ans3: "26", ans4: "15", correctAns: "2", },
    { ans1: "60", ans2: "14", ans3: "94", ans4: "79", correctAns: "3", },
    { ans1: "49", ans2: "82", ans3: "70", ans4: "14", correctAns: "2", },
    { ans1: "32", ans2: "100", ans3: "55", ans4: "60", correctAns: "2", },
    { ans1: "23", ans2: "8", ans3: "98", ans4: "46", correctAns: "3", },
    { ans1: "63", ans2: "92", ans3: "8", ans4: "48", correctAns: "2", },
    { ans1: "93", ans2: "44", ans3: "87", ans4: "7", correctAns: "1", },
    { ans1: "21", ans2: "90", ans3: "62", ans4: "52", correctAns: "2", },
    { ans1: "53", ans2: "7", ans3: "15", ans4: "64", correctAns: "4", },
    { ans1: "90", ans2: "67", ans3: "19", ans4: "20", correctAns: "1", },
    { ans1: "39", ans2: "1", ans3: "11", ans4: "14", correctAns: "1", },
    { ans1: "25", ans2: "17", ans3: "10", ans4: "30", correctAns: "4", },
    { ans1: "47", ans2: "42", ans3: "37", ans4: "25", correctAns: "1", },
    { ans1: "16", ans2: "23", ans3: "45", ans4: "5", correctAns: "3", },
    ]
    this.setState({ dataArray: tempArr });
  }
  getSmallNumber = () => {
    let tempArr = [{ ans1: "3", ans2: "8", ans3: "5", ans4: "2", correctAns: "4", },
    { ans1: "5", ans2: "8", ans3: "10", ans4: "32", correctAns: "1", },
    { ans1: "10", ans2: "19", ans3: "7", ans4: "2", correctAns: "4", },
    { ans1: "15", ans2: "12", ans3: "18", ans4: "3", correctAns: "4", },
    { ans1: "2", ans2: "9", ans3: "7", ans4: "3", correctAns: "1", },
    { ans1: "11", ans2: "13", ans3: "26", ans4: "30", correctAns: "1", },
    { ans1: "90", ans2: "30", ans3: "20", ans4: "70", correctAns: "3", },
    { ans1: "23", ans2: "90", ans3: "40", ans4: "31", correctAns: "1", },
    { ans1: "21", ans2: "12", ans3: "41", ans4: "35", correctAns: "2", },
    { ans1: "16", ans2: "28", ans3: "22", ans4: "18", correctAns: "1", },
    { ans1: "50", ans2: "66", ans3: "31", ans4: "45", correctAns: "3", },
    { ans1: "37", ans2: "24", ans3: "17", ans4: "0", correctAns: "4", },
    { ans1: "25", ans2: "10", ans3: "19", ans4: "30", correctAns: "2", },
    { ans1: "13", ans2: "25", ans3: "0", ans4: "14", correctAns: "3", },
    { ans1: "19", ans2: "1", ans3: "8", ans4: "27", correctAns: "2", },
    { ans1: "18", ans2: "5", ans3: "6", ans4: "16", correctAns: "2", },
    { ans1: "19", ans2: "26", ans3: "3", ans4: "17", correctAns: "3", },
    { ans1: "16", ans2: "1", ans3: "28", ans4: "5", correctAns: "2", },
    { ans1: "30", ans2: "27", ans3: "9", ans4: "1", correctAns: "4", },
    { ans1: "20", ans2: "28", ans3: "47", ans4: "52", correctAns: "1", },
    { ans1: "58", ans2: "53", ans3: "26", ans4: "15", correctAns: "4", },
    { ans1: "60", ans2: "14", ans3: "94", ans4: "79", correctAns: "2", },
    { ans1: "49", ans2: "17", ans3: "70", ans4: "14", correctAns: "4", },
    { ans1: "32", ans2: "100", ans3: "55", ans4: "60", correctAns: "1", },
    { ans1: "23", ans2: "8", ans3: "98", ans4: "46", correctAns: "2", },
    { ans1: "63", ans2: "92", ans3: "8", ans4: "48", correctAns: "3", },
    { ans1: "93", ans2: "44", ans3: "87", ans4: "7", correctAns: "4", },
    { ans1: "21", ans2: "90", ans3: "62", ans4: "52", correctAns: "1", },
    { ans1: "53", ans2: "7", ans3: "15", ans4: "64", correctAns: "2", },
    { ans1: "90", ans2: "67", ans3: "19", ans4: "20", correctAns: "3", },
    { ans1: "39", ans2: "1", ans3: "11", ans4: "14", correctAns: "2", },
    { ans1: "25", ans2: "17", ans3: "10", ans4: "30", correctAns: "3", },
    { ans1: "47", ans2: "42", ans3: "37", ans4: "25", correctAns: "4", },
    { ans1: "16", ans2: "23", ans3: "45", ans4: "5", correctAns: "4", },];
    this.setState({ dataArray: tempArr });
  }
  countNumberByPicture = () => {
    let tempArr = [
      { image: require('../../assets/mango_count.png'), ans1: "7", ans2: "10", ans3: "8", ans4: "13", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/banana_count.png'), ans1: "6", ans2: "5", ans3: "8", ans4: "13", correctAns: ["5", "5", "5", "5", "5",] },
      { image: require('../../assets/pineapples.png'), ans1: "15", ans2: "10", ans3: "8", ans4: "13", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10",] },
      { image: require('../../assets/penguin.png'), ans1: "6", ans2: "8", ans3: "5", ans4: "7", correctAns: ["6", "6", "6", "6", "6", "6",] },
      { image: require('../../assets/nectarine.png'), ans1: "10", ans2: "7", ans3: "11", ans4: "9", correctAns: ["9", "9", "9", "9", "9", "9", "9", "9", "9",] },
      { image: require('../../assets/lforlion.png'), ans1: "12", ans2: "10", ans3: "9", ans4: "15", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12",] },
      { image: require('../../assets/grapes.png'), ans1: "4", ans2: "3", ans3: "5", ans4: "6", correctAns: ["3", "3", "3",] },
      { image: require('../../assets/flower.png'), ans1: "7", ans2: "9", ans3: "8", ans4: "6", correctAns: ["8", "8", "8", "8", "8", "8", "8", "8"] },
      { image: require('../../assets/bird.png'), ans1: "3", ans2: "4", ans3: "5", ans4: "7", correctAns: ["4", "4", "4", "4",] },
      { image: require('../../assets/asparagus.png'), ans1: "2", ans2: "3", ans3: "5", ans4: "4", correctAns: ["5", "5", "5", "5", "5"] },
      { image: require('../../assets/avocado.png'), ans1: "6", ans2: "8", ans3: "7", ans4: "9", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/yforyak.png'), ans1: "9", ans2: "8", ans3: "10", ans4: "11", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] },
      { image: require('../../assets/heart.png'), ans1: "3", ans2: "4", ans3: "5", ans4: "6", correctAns: ["3", "3", "3"] },
      { image: require('../../assets/kiwi.png'), ans1: "5", ans2: "6", ans3: "4", ans4: "7", correctAns: ["6", "6", "6", "6", "6", "6"] },
      { image: require('../../assets/onions.png'), ans1: "10", ans2: "11", ans3: "15", ans4: "12", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },
      { image: require('../../assets/organge.png'), ans1: "7", ans2: "10", ans3: "9", ans4: "13", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] },
      { image: require('../../assets/peach.png'), ans1: "10", ans2: "8", ans3: "5", ans4: "9", correctAns: ["9", "9", "9", "9", "9", "9", "9", "9", "9"] },
      { image: require('../../assets/plum.png'), ans1: "3", ans2: "2", ans3: "5", ans4: "4", correctAns: ["3", "3", "3"] },
      { image: require('../../assets/sforsun.png'), ans1: "8", ans2: "6", ans3: "5", ans4: "9", correctAns: ["6", "6", "6", "6", "6", "6"] },
      { image: require('../../assets/sparrow.png'), ans1: "3", ans2: "8", ans3: "5", ans4: "6", correctAns: ["5", "5", "5", "5", "5", "5"] },
      { image: require('../../assets/strawberry.png'), ans1: "7", ans2: "8", ans3: "5", ans4: "9", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/turnip.png'), ans1: "16", ans2: "8", ans3: "13", ans4: "12", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },
      { image: require('../../assets/uforumbrella.png'), ans1: "6", ans2: "8", ans3: "5", ans4: "9", correctAns: ["8", "8", "8", "8", "8", "8", "8", "8"] },
      { image: require('../../assets/vforviolin.png'), ans1: "10", ans2: "8", ans3: "5", ans4: "7", correctAns: ["7", "7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/watermelon.png'), ans1: "13", ans2: "8", ans3: "12", ans4: "14", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },]
    this.setState({ dataArray: tempArr });
  }
  errorSound = () => {
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
    whoosh = new Sound(Platform.OS == 'android' ? 'no.mp3':'sound/no.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

    });
  }
  succesSound = () => {
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
    whoosh = new Sound(Platform.OS == 'android' ? 'yes.mp3':'sound/yes.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

    });
    setTimeout(() => {
      this.refs.viewpager.setPage(++this.state.pageIndex)
    }, 1000)

  }

  back = () => {
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
    if(IsSoundEnabled)
    clickSound();
    this.props.navigation.goBack();
    this.props.route.params.Refresh();
  }
  clickAns1 = (item) => {
    let id = this.props.route.params.item.id;
    if (id == 7) {
      if(item.ans1==item.correctAns.length){
        this.succesSound();
      }else{
        this.errorSound();
      }
    } else {
      if (item.correctAns == "1") {
        this.succesSound();
      } else {
        this.errorSound();
      }
    }
  }
  clickAns2 = (item) => {
    let id = this.props.route.params.item.id;
    if (id == 7) {
      if(item.ans2==item.correctAns.length){
        this.succesSound();
      }else{
        this.errorSound();
      }
    } else {
      if (item.correctAns == "2") {
        this.succesSound();
      } else {
        this.errorSound();
      }
    }
  }
  clickAns3 = (item) => {
    let id = this.props.route.params.item.id;
    if (id == 7) {
      if(item.ans3==item.correctAns.length){
        this.succesSound();
      }else{
        this.errorSound();
      }
    } else {
      if (item.correctAns == "3") {
        this.succesSound();
      } else {
        this.errorSound();
      }
    }
  }
  clickAns4 = (item) => {
    let id = this.props.route.params.item.id;
    if (id == 7) {
      if(item.ans4==item.correctAns.length){
        this.succesSound();
      }else{
        this.errorSound();
      }
    } else {
      if (item.correctAns == "4") {
        this.succesSound();
      } else {
        this.errorSound();
      }
    }
  }
  render() {
    let id=this.props.route.params.item.id;
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1 }}>
        <StatusBar hidden />
        <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          this.setState({pageIndex:position});

        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1,zIndex:99 }}>
                  <View style={{ flex: .9, alignItems: 'center' }}>
                    {id == '7' ? <View style={{ flexDirection: 'row', marginTop: responsiveHeight(9) }}>
                      {item.correctAns.map((item2, index) => {
                        return (
                          <Image source={item.image} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', marginLeft: 10 }} />
                        );
                      }, this)}
                    </View> : <Text style={{ color: Color.white, fontSize: CustomFont.font30, fontWeight: '700', marginTop: responsiveHeight(9) }}>{ id == 5 ? 'কোনটি বড় সংখ্যা' : 'কোনটি সংখ্যা ছোট'} </Text>}



                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={{ borderColor: '#018786', borderWidth: 1, backgroundColor: '#03DAC5', alignItems: 'center', justifyContent: 'center', borderRadius: 6, }} onPress={() => this.clickAns1(item)}>
                        <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', margin: 10, marginLeft: responsiveWidth(3), marginRight: responsiveWidth(3) }}>{item.ans1}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ borderColor: '#018786', borderWidth: 1, backgroundColor: '#03DAC5', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginLeft: responsiveWidth(2) }} onPress={() => this.clickAns2(item)}>
                        <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', margin: 10, marginLeft: responsiveWidth(3), marginRight: responsiveWidth(3) }}>{item.ans2}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ borderColor: '#018786', borderWidth: 1, backgroundColor: '#03DAC5', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginLeft: responsiveWidth(2) }} onPress={() => this.clickAns3(item)}>
                        <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', margin: 10, marginLeft: responsiveWidth(3), marginRight: responsiveWidth(3) }}>{item.ans3}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ borderColor: '#018786', borderWidth: 1, backgroundColor: '#03DAC5', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginLeft: responsiveWidth(2) }} onPress={() => this.clickAns4(item)}>
                        <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', margin: 10, marginLeft: responsiveWidth(3), marginRight: responsiveWidth(3) }}>{item.ans4}</Text>
                      </TouchableOpacity>

                    </View>
                  </View>
                  <View style={{alignItems:'center',}}>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>
                  
                </View>
               
              </View>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        </ImageBackground>
    );
  }

}
//export default HomeDrawer;
