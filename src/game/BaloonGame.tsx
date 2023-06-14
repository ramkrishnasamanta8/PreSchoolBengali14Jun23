import React,{useState,useEffect,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import HSNZ from "react-native-marquee-scroll";

import back from '../../assets/back.png';
import bgImage from '../../assets/bg.png';
let imgArr = [require('../../assets/balloon.png')]
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default BaloonGame =(props)=> {
const [dataArray,setdataArray]=useState([
  { number: '3', top: 0, left: 10, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon.png') },
  { number: '9', top: 0, left: 40, isVisible: true, isLeft: true, color: '#461B7E', image: require('../../assets/balloon1.png') },
  { number: '10', top: 0, left: 70, isVisible: true, isLeft: true, color: '#B93B8F', image: require('../../assets/balloon2.png') },
  { number: '20', top: 15, left: 10, isVisible: true, isLeft: true, color: '#7430ff', image: require('../../assets/balloon3.png') },
  { number: '8', top: 0, left: 50, isVisible: true, isLeft: true, color: '#3800fd', image: require('../../assets/balloon4.png') },
  { number: '30', top: 10, left: 10, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon2_new.png') },
  { number: '50', top: 0, left: 70, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon3_new.png') },
  { number: '22', top: 0, left: 40, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon.png') },
  { number: '15', top: 10, left: 10, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon1.png') },
  { number: '19', top: 0, left: 0, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon2.png') },
  { number: '60', top: 10, left: 80, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon3.png') },
  { number: '90', top: 0, left: 50, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon4.png') },
  { number: '70', top: 4, left: 10, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon2_new.png') },
  { number: '35', top: 0, left: 30, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon3_new.png') },
  { number: '98', top: 0, left: -3, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon3.png') },
  { number: '63', top: 20, left: 70, isVisible: true, isLeft: true, color: '#FF0035', image: require('../../assets/balloon.png') },
]);

return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(7):7, left: 10, zIndex: 99 }} onPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        {
          dataArray && dataArray.length>0 ? <HSNZ style={{ flex: 1 }}
          direction={"btt"}
          speed={10}
          onEnd={()=>{}}
          keyboardShouldPersistTaps={true}
          //loop={1}
        ><View style={{ flex: 1 }}>

            {dataArray.map((item, index) => {
              return (
                <View>
                  {item.isVisible ? <TouchableOpacity style={{ marginTop: responsiveHeight(-item.top), marginLeft: responsiveWidth(item.left), zIndex: 999, height: 100, width: 100 }} onPress={() => {
                    txtToSpeak(item.number + '')
                    // let tmpArr = [...dataArray]
                    // tmpArr[index].isVisible = false;
                    // //item.isVisible = false;
                    // setState({ dataArray: tmpArr });
                  }} >
                    <Image source={item.image} style={{ height: 90, width: 90, resizeMode: 'contain', }} />
                    <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: 16, left: 32, fontWeight: 'bold' }}>{item.number}</Text>
                  </TouchableOpacity> : null}
                </View>

              );
            }, this)}


          </View>
        </HSNZ> :null
        }
        
      </ImageBackground>
    );
}
