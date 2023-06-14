import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, BackHandler, SafeAreaView } from 'react-native';

import fly_live from '../../assets/fly.jpg';
import fly_dead from '../../assets/fly_dead.jpg';
import back from '../../assets/back.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
let tempArr = [];
var sliderTimer = null;
let i = 0;
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
export default MachiMaraKhelaGameOver =(props)=>{
  
  const back = () => {
    if(IsSoundEnabled)
    clickSound();
    props.navigation.goBack();
   }
   
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={'Game Over'} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack()
        }} />
        <View style={{ flex: 1, backgroundColor: Color.white, alignItems: 'center' }}>
          
              <Image source={fly_dead} style={{ height: responsiveFontSize(30), width: responsiveFontSize(30), resizeMode: 'contain',marginTop:responsiveHeight(16) }}/>
            
            <TouchableOpacity style={{ backgroundColor: 'yellow', height: responsiveHeight(10), width: responsiveWidth(50), borderRadius: 10, justifyContent: 'center', alignItems: 'center',marginTop:responsiveHeight(5) }}
              onPress={() => {
                props.navigation.goBack();
                // setState({ startPlay: true, isPlaying: true, });
                // startGame()
              }}>
              <Text style={{ color: '#000', fontSize: CustomFont.font20, fontWeight: 'bold' }}>Start Again</Text>
            </TouchableOpacity>

        </View>
       
      </SafeAreaView>
    );
}
//export default HomeDrawer;
