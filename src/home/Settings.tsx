import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Switch, Text, Platform, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import AsyncStorage from '@react-native-community/async-storage';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
const PrivacyPolicy = (props) => {
  const [isEnabled, setIsEnabled] = useState(true)

  useEffect(() => {
   AsyncStorage.getItem('settings').then((settings)=>{
      if(settings=='off'){
        setIsEnabled(false);
             }
    });
      
  }, [])
  const setTogolValue = (from, value) => {
    IsSoundEnabled = value;
    if (from == 'settings') {
      AsyncStorage.setItem('settings', value ? 'on' : 'off');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={'Settings'} onBackPress={() => {
        if (IsSoundEnabled)
          clickSound();
        props.navigation.goBack()
      }} />

      <View style={{ flex: 10, backgroundColor: Color.bgColor, }}>
        <ScrollView>
          <View style={{ margin: responsiveWidth(3), borderRadius: 10 }}>
            {Platform.OS == 'ios' && !Hichuba ? null : <BannerAd
              unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
              size={BannerAdSize.FULL_BANNER}
            />}
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Color.white, marginTop: responsiveHeight(2), borderRadius: 10 }} onPress={() => {
              setIsEnabled(!isEnabled);
              setTogolValue('settings', !isEnabled);
            }}>
              <Text style={{ fontSize: CustomFont.font16, fontWeight: '800', color: Color.fontColor, margin: 10 }}>Sound</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(previousState) => {
                  setIsEnabled(previousState);
                  setTogolValue('settings', previousState);
                }}
                value={isEnabled}
                style={{ margin: 10 }}
              />
            </TouchableOpacity>

          </View>
        </ScrollView>

      </View>

    </SafeAreaView>
  );
}
export default PrivacyPolicy;
