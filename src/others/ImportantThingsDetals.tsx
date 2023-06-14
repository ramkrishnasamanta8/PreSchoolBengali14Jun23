import React,{useEffect,useState} from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Platform, SafeAreaView, Linking } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';

export default ImportantThingsDetals =(props)=> {
  const [item,setitem] =useState(props.route.params.item)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={item.title} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack();
        }} />
        <View style={{ flex: 1, backgroundColor: Color.whiteBg }}>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <View style={{ alignItems: 'center',backgroundColor: Color.white }}>
                <Image source={item.image} style={{ maxHeight: responsiveHeight(40) }} />
              </View>
              <View style={{ flexDirection: 'row', backgroundColor: Color.primaryBlue, justifyContent: 'space-between', alignItems: 'center',minHeight:responsiveHeight(8) }}>
                <View>
                  <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.white, marginLeft: 10, marginTop: 10 }}>{item.title}</Text>
                  {item.establish ? <Text style={{ fontSize: CustomFont.font16, color: Color.white, marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Est: {item.establish}</Text>:null }
                  {item.height ? <Text style={{ fontSize: CustomFont.font16, color: Color.white, marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Height: {item.height}</Text>:null }
                  {item.length ? <Text style={{ fontSize: CustomFont.font16, color: Color.white, marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Length: {item.length}</Text>:null }
                  {item.area ? <Text style={{ fontSize: CustomFont.font16, color: Color.white, marginLeft: 10, marginTop: 5, marginBottom: 10 }}>Area: {item.area}</Text>:null }
                  
                </View>

                {/* <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.navigate('MapScreen', { lat: state.latitude, longi: state.longitude, from: 'latlong' })}>
                  <Image source={map} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), tintColor: Color.white, marginRight: 20 }} />
                </TouchableOpacity> */}
              </View>
              
              {item.location ? <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: 10, marginTop: 5, marginBottom: 10,fontWeight:'800' }}>Location: <Text style={{fontWeight:'normal'}}>{item.location}</Text></Text>:null }
              
              <View style={{ backgroundColor: Color.white, margin: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, margin: 10 }}>{item.desc}</Text>
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
