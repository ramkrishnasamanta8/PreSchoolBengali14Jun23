import React,{useEffect,useState,useRef} from 'react';
import { View, Modal, Image, Text, TouchableOpacity, BackHandler, StatusBar, Platform, ImageBackground } from 'react-native';


import bgImage from '../../assets/bg.png';
import back from '../../assets/back.png';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Orientation from 'react-native-orientation';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
export default SuccessMessage =(props)=> {
const [correct,setcorrect]=useState(0);
const [inCorrect,setinCorrect]=useState(0);
const [total,settotal]=useState(0);
const [status,setstatus]=useState('');

useEffect(()=>{
   let score = props.route.params.score;
      let total = props.route.params.total;
        setcorrect(score);
        setinCorrect(total - score) ;
        settotal(total);
        setstatus(score >= total / score ? 'Pass' : 'Fail ');
      setshowAns('right') ;

    playSound('claps.mp3');
    Orientation.lockToPortrait();
},[])

    
    //let from = props.route.params.from;
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>

        <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(4), left: 10, zIndex: 99 }} onPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10, }}>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'red', fontSize: CustomFont.font30, fontFamily:Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular', textAlign: 'center', marginTop: responsiveHeight(12), fontWeight: 'bold' }}>Test Over !</Text>


          </View>
          <View style={{ flex: 3, marginLeft: responsiveWidth(15) }}>
            <Text style={{ color: '#000', fontSize: CustomFont.font30, fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: responsiveHeight(2), fontWeight: 'bold' }}>Total Question : <Text style={{ color: 'blue' }}>{total}</Text></Text>
            <Text style={{ color: '#000', fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: responsiveHeight(2), fontWeight: 'bold' }}>Correct: <Text style={{ color: 'green' }}>{correct}</Text></Text>
            <Text style={{ color: '#000', fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: responsiveHeight(2), fontWeight: 'bold' }}>Wrong: <Text style={{ color: 'red' }}>{inCorrect}</Text></Text>
            <Text style={{ color: '#000', fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: responsiveHeight(2), fontWeight: 'bold' }}>Status: <Text style={{ color: status == 'fail' ? 'red' : 'green' }}>{status}</Text></Text>


          </View>
          <View style={{ flex: 1.6, alignItems: 'center' }}>

            <TouchableOpacity style={{ backgroundColor: Color.white, height: responsiveHeight(7), borderRadius: 7, marginTop: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, width: responsiveWidth(70) }}
              onPress={() => {
                playSound('click.mp3');
                props.navigation.goBack(null);
                props.navigation.goBack(null);
              }}>
              <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700' }}>Start another Test</Text>
            </TouchableOpacity>
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
}
