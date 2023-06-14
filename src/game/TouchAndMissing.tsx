import React,{useEffect, useState,useRef} from 'react';
import { View, Platform, Image, Text, TouchableOpacity, Alert, BackHandler, ImageBackground, StatusBar } from 'react-native';
import Orientation from 'react-native-orientation';
import back from '../../assets/back.png';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';

import bg_math from '../../assets/bg_math.jpg';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
import { playSound, txtToSpeak } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let position=0;
const TouchAndMissing = (props)=> {
const[dataArray,setdataArray]=useState([]);
const[pageIndex,setpageIndex]=useState(0);
const viewpagerRef =useRef(null);
useEffect(()=>{
  Orientation.lockToLandscapeRight();
  let tag = props.route.params.item.tag;
    if (tag) {
      if (tag == 'touch')
        touch();
      else if (tag == 'missing')
        missing();
      else if (tag == 'touch')
        touch();
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      back();
      return true;
    })
},[])

  
  const touch = () => {
    let tempArr = [{ question: "Touch 2", ans1: "6", ans2: "9", ans3: "2", correctAns: "3", color: "#fe0000" },
    { question: "Touch 9", ans1: "9", ans2: "4", ans3: "20", correctAns: "1", color: "#029702" },
    { question: "Touch 5", ans1: "63", ans2: "5", ans3: "60", correctAns: "2", color: "#7430ff" },
    { question: "Touch 1", ans1: "50", ans2: "1", ans3: "33", correctAns: "2", color: "#DC9900" },
    { question: "Touch 7", ans1: "30", ans2: "18", ans3: "7", correctAns: "3", color: "#fe0000" },
    { question: "Touch 45", ans1: "68", ans2: "45", ans3: "21", correctAns: "2", color: "#000000" },
    { question: "Touch 79", ans1: "64", ans2: "39", ans3: "79", correctAns: "3", color: "#fe0000" },
    { question: "Touch 24", ans1: "0", ans2: "44", ans3: "24", correctAns: "3", color: "#ff00fe" },
    { question: "Touch 30", ans1: "30", ans2: "09", ans3: "26", correctAns: "1", color: "#E0220E" },
    { question: "Touch 42", ans1: "33", ans2: "42", ans3: "89", correctAns: "2", color: "#fe0000" },
    { question: "Touch 90", ans1: "90", ans2: "100", ans3: "20", correctAns: "1", color: "#b300d5" },
    { question: "Touch 100", ans1: "100", ans2: "7", ans3: "4", correctAns: "1", color: "#da8302" },
    { question: "Touch 22", ans1: "22", ans2: "5", ans3: "20", correctAns: "1", color: "#D81B60" },
    { question: "Touch 7", ans1: "81", ans2: "7", ans3: "74", correctAns: "2", color: "#fe0000" },
    { question: "Touch 62", ans1: "16", ans2: "19", ans3: "62", correctAns: "3", color: "#fe0000" },
    { question: "Touch 90", ans1: "90", ans2: "43", ans3: "80", correctAns: "1", color: "#3900ff" },
    { question: "Touch 55", ans1: "12", ans2: "55", ans3: "95", correctAns: "2", color: "#fe2f9c" },
    { question: "Touch 46", ans1: "70", ans2: "56", ans3: "46", correctAns: "3", color: "#fe0000" },
    { question: "Touch 94", ans1: "94", ans2: "0", ans3: "21", correctAns: "1", color: "#fe0000" },
    { question: "Touch 23", ans1: "40", ans2: "50", ans3: "23", correctAns: "3", color: "#008000" },
    { question: "Touch 88", ans1: "63", ans2: "88", ans3: "29", correctAns: "2", color: "#00ce01" },
    { question: "Touch 10", ans1: "71", ans2: "90", ans3: "10", correctAns: "3", color: "#a96601" },
    { question: "Touch 0", ans1: "0", ans2: "1", ans3: "32", correctAns: "1", color: "#fe0000" },
  ]
  setdataArray(tempArr);
    txtToSpeak('touch the numbers')
  }
  const missing = () => {
    let tempArr = [
    { question: "79, __, 81 ", ans1: "77", ans2: "80", ans3: "78", correctAns: "2", color: "#ff00fe" },
    { question: "1, 2, 3, __, 5 ", ans1: "7", ans2: "0", ans3: "4", correctAns: "3", color: "#0166fe" },
    { question: "35, 36, 37, __ ", ans1: "32", ans2: "40", ans3: "38", correctAns: "3", color: "#fe0000" },
    { question: "5, __ , 7, 8", ans1: "6", ans2: "8", ans3: "10", correctAns: "1", color: "#029702" },
    { question: "3, __ 5, 6,7", ans1: "7", ans2: "8", ans3: "4", correctAns: "3", color: "#ff00fe" },
    { question: "20, 21, __ , 23", ans1: "21", ans2: "22", ans3: "24", correctAns: "2", color: "#7430ff" },
    { question: "17, 18, 19, __ ", ans1: "25", ans2: "21", ans3: "20", correctAns: "3", color: "#DC9900" },
    { question: " __ ,8, 9, 10 ", ans1: "11", ans2: "9", ans3: "7", correctAns: "3", color: "#3800fd" },
    { question: "15,__ , 17, 18", ans1: "16", ans2: "19", ans3: "21", correctAns: "1", color: "#000000" },
    { question: "23, 24, 26, __ ", ans1: "32", ans2: "27", ans3: "33", correctAns: "2", color: "#0E6E01" },
    { question: "99, 100, __  102", ans1: "106", ans2: "108", ans3: "101", correctAns: "3", color: "#ff00fe" },
    { question: "115, 116, 117, __ ", ans1: "118", ans2: "130", ans3: "119", correctAns: "1", color: "#E0220E" },
    { question: "80, 81, __ , 83", ans1: "32", ans2: "190", ans3: "182", correctAns: "3", color: "#0166fe" },
    { question: "91,__, 93, 94", ans1: "6", ans2: "92", ans3: "100", correctAns: "2", color: "#b300d5" },
    { question: "85, 86, 87, __ ", ans1: "91", ans2: "89", ans3: "88", correctAns: "3", color: "#da8302" },
    { question: "66, __, 68, 69 ", ans1: "68", ans2: "86", ans3: "67", correctAns: "3", color: "#D81B60" },
    { question: " __ ,35, 36, 37", ans1: "36", ans2: "34", ans3: "38", correctAns: "2", color: "#007500" },
    { question: "19, 20, 22, __ ", ans1: "43", ans2: "33", ans3: "23", correctAns: "3", color: "#3900ff" },
    { question: " __ , 29, 30, 31 ", ans1: "28", ans2: "54", ans3: "12", correctAns: "1", color: "#fe2f9c" },
    { question: "150, 151, 152, __ ", ans1: "152", ans2: "156", ans3: "153", correctAns: "3", color: "#7a2048" },
    { question: "210, __ , 212, 213 ", ans1: "123", ans2: "211", ans3: "213", correctAns: "2", color: "#008000" },
    { question: "120, __ , 122, 123 ", ans1: "109", ans2: "212", ans3: "121", correctAns: "3", color: "#00ce01" },
    { question: " __ ,181, 182, 183 ", ans1: "180", ans2: "186", ans3: "181", correctAns: "1", color: "#a96601" },
  ]
    setdataArray(tempArr);
    txtToSpeak('Find missing numbers')
  }
  const back = () => {
      playSound('click.mp3');
    Orientation.lockToPortrait();
    setTimeout(() => {
      props.navigation.goBack();
      props.route.params.Refresh();
    }, 300)
  }
  const errorSound = () => {
    playSound('no.mp3');
  }
  const succesSound = () => {
    playSound('yes.mp3');
    if( pageIndex < dataArray.length-1)
    viewpagerRef.current.setPage(++position)
    else
    Alert.alert(
      'Success',
      'You have complete all Questions!',
      [
        {
          text: 'Ok',
          onPress: () => {
            back()
          },
        },
      ],
      { cancelable: false },
    );

  }

    return (
      <View source={bg_math} resizeMode="stretch" style={{ flex: 1, }}>
        <StatusBar hidden />
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;

            setpageIndex(position);
          }} setPage={pageIndex} ref={viewpagerRef}>
            {dataArray.map((item, index) => {
              return (
                <ImageBackground source={bg_math} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
                  <View style={{ flex: 1 ,alignItems: 'center'}}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={{ fontSize:Platform.isPad? CustomFont.font30: CustomFont.font45, fontFamily: 'Gretoon Highlight', marginTop: responsiveHeight(7), color: item.color, }}>{item.question}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TouchableOpacity style={{ marginLeft: responsiveWidth(15) }} onPress={() => {
                        if (item.correctAns == 1) {
                          succesSound();
                        } else {
                          errorSound();
                        }
                      }}>
                        <ImageBackground source={balloon1} resizeMode="contain" style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin: Platform.isPad? responsiveFontSize(4): responsiveFontSize(6),zIndex:999 }}>{item.ans1}</Text>
                        </ImageBackground>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {
                        if (item.correctAns == 2) {
                          succesSound();
                        } else {
                          errorSound();
                        }
                      }}>
                        <ImageBackground source={balloon2} resizeMode="contain" style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin:Platform.isPad? responsiveFontSize(4):  responsiveFontSize(6),zIndex:999 }}>{item.ans2}</Text>
                        </ImageBackground>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginRight: responsiveWidth(15) }} onPress={() => {
                        if (item.correctAns == 3) {
                          succesSound();
                        } else {
                          errorSound();
                        }
                      }}>
                        <ImageBackground source={balloon3} resizeMode="contain" style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin:Platform.isPad? responsiveFontSize(4): responsiveFontSize(6),zIndex:999 }}>{item.ans3}</Text>
                        </ImageBackground>
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
            }, this)}
          </ViewPager>
        </View>
      </View>
    );
}
export default TouchAndMissing;
