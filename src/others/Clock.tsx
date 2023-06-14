import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import Orientation from 'react-native-orientation';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import back from '../../assets/back.png';
import hours from '../../assets/hours.png';
import minutes from '../../assets/minutes.png';
import clock_point from '../../assets/clock_point.png';
import arrowRight from '../../assets/arrowRight.png';
import arrow_left from '../../assets/arrow_left.png';
import sky6 from '../../assets/sky6.jpg';
let positionArr = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,360];
let yArr =        [14,15, 20, 27, 35,  38,  41,  38,  33,  27,  20,  15, 10 ];
let xArr =        [37, 45, 50, 52, 48, 45,  38,  30,  25,  24,  26,  30, 37  ];
let position = 0;
let clockArr=[12,1,2,3,4,5,6,7,8,9,10,11]
export default Clock =(props)=> {
  const [degree,setdegree]=useState(0);
  const [oClockMsg,setoClockMsg]=useState(12);
  
  Refresh = () => {
    Orientation.lockToPortrait();
  }

    return (
      <ImageBackground source={sky6} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
       <StatusBar backgroundColor={'#0000CD'} barStyle="light-content"/>
        
        <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground source={clock_point} resizeMode="stretch" style={{ height: responsiveWidth(80), width: responsiveWidth(80), }}>
            <Image source={hours} style={{marginTop:responsiveWidth(yArr[position]), marginLeft:responsiveWidth(xArr[position]), transform: [{ rotate: degree + 'deg' }],height:responsiveWidth(26),resizeMode:'contain' }} />
            <Image source={hours} style={{position:'absolute', top:responsiveWidth(14), left:responsiveWidth(37), height:responsiveWidth(26),resizeMode:'contain',zIndex:999,tintColor:Color.darkBlue }} />
          </ImageBackground>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <TouchableOpacity onPress={() => {
              position--;
              if(position==-1)
              position=11

              setdegree(positionArr[position]);
              setoClockMsg(clockArr[position]);
              setTimeout(()=>{
                txtToSpeak(oClockMsg+' o clock');
              },400)
              playSound('click.mp3');
            }}>
              <Image source={arrow_left} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 10 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              position++;
              if(position==12)
              position=0
              setdegree(positionArr[position]);
              setoClockMsg(clockArr[position]);
              setTimeout(()=>{
                txtToSpeak(oClockMsg+' o clock');
              },400)
              playSound('click.mp3');
            }}>
              <Image source={arrowRight} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 10, marginLeft: 30 }} />
            </TouchableOpacity>

          </View>

          <Text style={{ fontSize: CustomFont.font30,fontFamily:Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular',fontWeight:'bold',color:Color.darkBlue }}>{oClockMsg} O' Clock</Text>
          
          <TouchableOpacity style={{ position: 'absolute', top: 30, left: 10, zIndex: 99 }} onPress={() =>{
            playSound('click.mp3');
            props.navigation.goBack()
          } }>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
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
