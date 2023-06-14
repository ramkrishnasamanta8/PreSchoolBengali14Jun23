import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Share, ScrollView, Platform } from 'react-native';
import Orientation from 'react-native-orientation';
import back_blue from '../../assets/back_blue.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import Toolbar from '../components/Toolbar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
export default MathChoose =(props)=> {
  
  const Refresh = () => {
    Orientation.lockToPortrait();
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={'Choose'} onBackPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack();
          props.route.params.Refresh();
        }} />



        <View style={{ flex: 10, backgroundColor: Color.white }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity style={{ width: '90%', backgroundColor: Color.primaryBlue, height: 50, borderRadius: 7, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => props.navigation.navigate('Math', { Refresh: Refresh })}>
              <Text style={{ color: Color.white, fontSize: CustomFont.font16 }}>কিছু অংকের খেলা </Text>
            </TouchableOpacity>

          </View>
          <View style={{ alignItems:'center' }}>
          {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>

        </View>

      </SafeAreaView>
    );
}
//export default MathChoose;
