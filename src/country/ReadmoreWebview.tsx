import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Platform, SafeAreaView, Linking, Alert } from 'react-native';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { WebView } from 'react-native-webview';
const ReadmoreWebview=(props) =>{
useEffect(()=>{

  
},[])

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={props.route.params.title ? props.route.params.title: 'Back'} onBackPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack();
        }} />
        <View style={{ flex: 1, backgroundColor: Color.white }}>
          {props.route.params.url ? <WebView source={{ uri: props.route.params.url}} style={{ flex: 1 }} /> :null}
        
          
        </View>
      </SafeAreaView>
    );
}
export default ReadmoreWebview;