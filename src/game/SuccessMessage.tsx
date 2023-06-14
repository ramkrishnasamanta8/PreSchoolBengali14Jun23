import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,Platform } from 'react-native';
import Color from '../../components/Colors';
import CustomFont from '../../components/CustomFont';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';

import checked from '../../../assets/checked.png';
const SuccessMessage=(props)=> {
	
		return (
			<View style={{ flex: 1, backgroundColor: Color.white }}>
				<View style={{ flex: 5, alignItems: 'center' }}>
					<Image source={checked} style={{height:responsiveFontSize(17),width:responsiveFontSize(17),marginTop:responsiveHeight(20)}}/>
					<Text style={{fontSize: CustomFont.font26, color: Color.fontColor, marginTop: responsiveHeight(7),textAlign:'center',fontWeight:'bold' }}>Successfully Completed</Text>
					<Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', fontSize: CustomFont.font14, color: Color.fontColor, marginTop: responsiveHeight(1),textAlign:'center',marginLeft:10,marginRight:10 }}>You have completed all steps of {props.route.params.title} Game</Text>
					
				</View>
				<View style={{ flex: 1, alignItems: 'center'}}>
					
				<TouchableOpacity style={{ height: responsiveHeight(5.8), width: responsiveWidth(80), alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: 'green', }} 
				onPress={()=>{
					if(IsSoundEnabled)
    clickSound();
						props.navigation.goBack();
						props.route.params.Refresh();
						//props.navigation.goBack(null);
						}}>
				<Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', color: Color.white, fontSize: CustomFont.font16 }}>Next</Text>
				</TouchableOpacity>
				</View>
				<View style={{ alignItems: 'center' }}>
				{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
				</View>
				
			</View>
		);
}
export default SuccessMessage;