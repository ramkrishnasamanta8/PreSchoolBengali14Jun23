import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Linking, Text, TouchableOpacity, Platform, ScrollView, SafeAreaView } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
const FactOfCountry =(props)=> {
const [geography,setgeography] =useState(props.route.params.item.GEOGRAPHY)
const [histry,sethistry] =useState(props.route.params.item.WIKI_PAGE)
const [title,settitle] =useState(props.route.params.item.COUNTRY_NAME)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={'About '+title } onBackPress={() => {
          if(IsSoundEnabled)
          clickSound(); 
          props.navigation.goBack()
        }} />

        <View style={{ flex: 10, backgroundColor: Color.whiteBg }}>
          <ScrollView>
            <View style={{ margin: responsiveWidth(2), backgroundColor: Color.white, borderRadius: 10 }}>
              <View style={{ margin: responsiveWidth(3) }}>
                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Introduction:</Text>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>{geography}</Text>

                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Histry:</Text>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>{histry}</Text>
                <TouchableOpacity style={{ height: responsiveHeight(6), backgroundColor: Color.primary, justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10, marginTop: 40, marginBottom: 40, borderRadius: 10 }} onPress={() => {
                  if(IsSoundEnabled)
                  clickSound();
                  props.navigation.navigate('ReadmoreWebview',{url:histry,title:title});
                }}>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.white, fontWeight: 'bold' }}>Read More</Text>
                </TouchableOpacity>
              </View>

              {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
            </View>
          </ScrollView>

        </View>

      </SafeAreaView>
    );
}
export default FactOfCountry;
