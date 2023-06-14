import React,{useEffect,useState} from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import world from '../../assets/world.png';
import location from '../../assets/location.png';
import content from '../../assets/content.png';
import menu from '../../assets/menu.png';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
 import HomeTab from './HomeTab';
// import MapTab from './MapTab';
 import ContentmentTab from './ContentmentTab';
 import MenuTab from './MenuTab';
import { proc } from 'react-native-reanimated';
export default  CountryIndex =(props) =>{
const [tabIndex,settabIndex] =useState(0);
  
  const clickOnTab = (index) => {
    settabIndex(index);
    if(IsSoundEnabled)
clickSound();
  }
  const BackEvent = (index) => {
    settabIndex(0)
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content"/>
        <View style={{ flex: 1, backgroundColor: Color.white }}>
        {tabIndex == 0 ? <HomeTab nav={{ navigation: props.navigation }} BackEvent={BackEvent} /> : tabIndex == 1 ?  <ContentmentTab nav={{ navigation: props.navigation }} BackEvent={BackEvent} /> : <MenuTab nav={{ navigation: props.navigation }} BackEvent={BackEvent} />}
          <View style={{ flexDirection: 'row', height: responsiveHeight(7), backgroundColor: Color.bgColor,}}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => clickOnTab(0)} >
              <Image source={world} style={{ width: responsiveWidth(5), height: responsiveWidth(5), resizeMode: 'contain', tintColor: tabIndex == 0 ? Color.primary : Color.footerBtnColor }} />
              <Text style={{ fontSize: CustomFont.font12, color: tabIndex == 0 ? Color.primary : Color.fontColor, marginTop: 5 }}>Country</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => clickOnTab(1)} >
              <Image source={location} style={{ width: responsiveWidth(5), height: responsiveWidth(5), resizeMode: 'contain', tintColor: tabIndex == 1 ? Color.primary : Color.footerBtnColor }} />
              <Text style={{ fontSize: CustomFont.font12, color: tabIndex == 1 ? Color.primary : Color.fontColor, marginTop: 5 }}>Map</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => clickOnTab(1)} >
              <Image source={content} style={{ width: responsiveWidth(5), height: responsiveWidth(5), resizeMode: 'contain', tintColor: tabIndex == 1 ? Color.primary : Color.footerBtnColor }} />
              <Text style={{ fontSize: CustomFont.font12, color: tabIndex == 1 ? Color.primary : Color.fontColor, marginTop: 5 }}>Contentment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => clickOnTab(2)} >
              <Image source={menu} style={{ width: responsiveWidth(5), height: responsiveWidth(5), resizeMode: 'contain', tintColor: tabIndex == 2 ? Color.primary : Color.footerBtnColor }} />
              <Text style={{ fontSize: CustomFont.font12, color: tabIndex == 2 ? Color.primary : Color.fontColor, marginTop: 5 }}>More</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </SafeAreaView>
    );

}
