import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, BackHandler, SafeAreaView } from 'react-native';

import fly_live from '../../assets/fly.jpg';
import fly_dead from '../../assets/fly_dead.jpg';
import back from '../../assets/back.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
let tempArr = [];
var sliderTimer = null;
let i = 0,counter=0;
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
export default class MachiMaraKhela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPlay: true,
      isPlaying: true,
      topValue: 0,
      leftValue: 0,
      score: ''

    };
  }
  async componentDidMount() {
    sliderTimer = null;
    tempArr = [];
    try {
      for (let i = 0; i < 2000; i++) {
        tempArr.push({ top: Math.floor(Math.random() * 740), left: Math.floor(Math.random() * 300) });
      }
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.back();
        return true;
       })
    } catch (error) {
      
    }
    
  }
  startGame = () => {
    try {
      i = 0;
      counter=0;
    if(sliderTimer)
    clearInterval(sliderTimer);

        sliderTimer = setInterval(() => {
          ++i;
          console.log(i);
     this.setState({topValue:tempArr[i].top, leftValue:tempArr[i].left});
        }, 300);
    } catch (error) {
      this.props.navigation.goBack();
    }
    
  }
  back = () => {
    if(IsSoundEnabled)
    clickSound();
    this.props.navigation.goBack();
   }
  componentWillUnmount(){
    try {
      clearInterval(sliderTimer);
      sliderTimer=null
    } catch (error) {
      
    }
    
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        {/* <Toolbar title={'বর্ণ নিয়ে খেলা'} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          this.props.navigation.goBack()
        }} /> */}
<StatusBar hidden />
    <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
     <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
    </TouchableOpacity>
        <View style={{ flex: 10, backgroundColor: Color.white, justifyContent: 'center', alignItems: 'center' }}>
          {this.state.startPlay ? <TouchableOpacity style={{ backgroundColor: 'yellow', height: responsiveHeight(10), width: responsiveWidth(50), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              this.setState({ startPlay: false, });
              this.startGame();
            }}>
            <Text style={{ color: '#000', fontSize: CustomFont.font20, fontWeight: 'bold' }}>Start Play</Text>
          </TouchableOpacity> : this.state.isPlaying ? <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: this.state.topValue, left: this.state.leftValue }}
            onPress={() => {
              clearInterval(sliderTimer);
              this.setState({ isPlaying: false });
              playSound('claps.mp3');
this.props.navigation.navigate('MachiMaraKhelaGameOver',{counter:counter});
            }}

          >
            <Image source={fly_live} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'contain' }} />
          </TouchableOpacity> : <View style={{flex:1,alignItems: 'center',}}>
              <Image source={fly_dead} style={{ height: responsiveFontSize(20), width: responsiveFontSize(20), resizeMode: 'contain',marginTop:responsiveHeight(16) }}/>
            
            <TouchableOpacity style={{ backgroundColor: 'yellow', height: responsiveHeight(10), width: responsiveWidth(50), borderRadius: 10, justifyContent: 'center', alignItems: 'center',marginTop:responsiveHeight(5) }}
              onPress={() => {
                this.setState({ startPlay: true, isPlaying: true, });
                this.startGame();
              }}>
              <Text style={{ color: '#000', fontSize: CustomFont.font20, fontWeight: 'bold' }}>Start Again</Text>
            </TouchableOpacity>

          </View>}
        </View>
       
      </SafeAreaView>
    );
  }

}
//export default HomeDrawer;
