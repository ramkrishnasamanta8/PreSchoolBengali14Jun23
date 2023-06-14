import  React,{useEffect} from 'react';
import { View, Modal, Image, Text, TouchableOpacity, BackHandler, StatusBar, Platform, ImageBackground } from 'react-native';


import bgImage from '../../assets/bg.png';
import back from '../../assets/back.png';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import Orientation from 'react-native-orientation';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default CommonMessage =(props)=> {
  useEffect(()=>{
    playSound('claps.mp3');
    Orientation.lockToPortrait();
  },[])
  
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
<StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content"/>
        <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(4), left: 10, zIndex: 99 }} onPress={() => {
          if(IsSoundEnabled)
          clickSound();
         let howmanyback = props.route && props.route.params && props.route.params.howmanyback ? props.route.params.howmanyback : 1;
         if (howmanyback == 1) {
           props.navigation.goBack(null);
         } else if (howmanyback == 2) {
           props.navigation.goBack(null);
           props.navigation.goBack(null);
         } else if (howmanyback == 3) {
           props.navigation.goBack(null);
           props.navigation.goBack(null);
           props.navigation.goBack(null);
         }else{
           props.navigation.goBack(null);
         }
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10, alignItems: 'center', }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: CustomFont.font30, fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular', textAlign: 'center', marginTop: responsiveHeight(12), fontWeight: 'bold' }}>Test Over !</Text>


          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ backgroundColor: Color.white, height: responsiveHeight(7), borderRadius: 7, marginBottom: responsiveHeight(20), justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, width: responsiveWidth(70) }}
              onPress={() => {
                if(IsSoundEnabled)
    clickSound();
                let howmanyback = props.route && props.route.params && props.route.params.howmanyback ? props.route.params.howmanyback : 1;
                if (howmanyback == 1) {
                  props.navigation.goBack(null);
                } else if (howmanyback == 2) {
                  props.navigation.goBack(null);
                  props.navigation.goBack(null);
                } else if (howmanyback == 3) {
                  props.navigation.goBack(null);
                  props.navigation.goBack(null);
                  props.navigation.goBack(null);
                }else{
                  props.navigation.goBack(null);
                }

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
