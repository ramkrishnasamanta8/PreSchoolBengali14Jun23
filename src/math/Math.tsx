import  React,{ useState, useEffect, useRef }  from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Platform, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Orientation from 'react-native-orientation';
import back from '../../assets/back.png';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import bg_math from '../../assets/bg_math.jpg';
import Toolbar from '../components/Toolbar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import ViewPager from 'react-native-pager-view';
let position=0;
const Math=(props)=> {
  const [dataArray,setDataArray]=useState([{ question: "Touch 2", ans1: "6", ans2: "9", ans3: "2", correctAns: "3", color: "#fe0000" },
  { question: "Touch 9", ans1: "9", ans2: "4", ans3: "20", correctAns: "1", color: "#029702" },
  { question: "79, __, 81 ", ans1: "77", ans2: "80", ans3: "78", correctAns: "2", color: "#ff00fe" },
  { question: "Touch 5", ans1: "63", ans2: "5", ans3: "60", correctAns: "2", color: "#7430ff" },
  { question: "Touch 1", ans1: "50", ans2: "1", ans3: "33", correctAns: "2", color: "#DC9900" },
  { question: "7 + 3 = ? ", ans1: "13", ans2: "12", ans3: "10", correctAns: "3", color: "#fe0000" },
  { question: "8 X 2 = ? ", ans1: "4", ans2: "16", ans3: "10", correctAns: "2", color: "#3800fd" },
  { question: "Touch 7", ans1: "30", ans2: "18", ans3: "7", correctAns: "3", color: "#fe0000" },
  { question: "Touch 45", ans1: "68", ans2: "45", ans3: "21", correctAns: "2", color: "#000000" },
  { question: "4 ÷ 2 = ?", ans1: "2", ans2: "4", ans3: "3", correctAns: "1", color: "#fe0000" },
  { question: "2 X 2 = ?", ans1: "8", ans2: "5", ans3: "4", correctAns: "3", color: "#0E6E01" },
  { question: "Touch 79", ans1: "64", ans2: "39", ans3: "79", correctAns: "3", color: "#fe0000" },
  { question: "Touch 24", ans1: "0", ans2: "44", ans3: "24", correctAns: "3", color: "#ff00fe" },
  { question: "2 + 3 = ? ", ans1: "5", ans2: "10", ans3: "9", correctAns: "1", color: "#fe0000" },
  { question: "Touch 30", ans1: "30", ans2: "09", ans3: "26", correctAns: "1", color: "#E0220E" },
  { question: "10 + 2 = ?", ans1: "4", ans2: "7", ans3: "5", correctAns: "3", color: "#fe0000" },
  { question: "1, 2, 3, __, 5 ", ans1: "7", ans2: "0", ans3: "4", correctAns: "3", color: "#0166fe" },
  { question: "Touch 42", ans1: "33", ans2: "42", ans3: "89", correctAns: "2", color: "#fe0000" },
  { question: "Touch 90", ans1: "90", ans2: "100", ans3: "20", correctAns: "1", color: "#b300d5" },
  { question: "7 - 4 = ?", ans1: "3", ans2: "5", ans3: "7", correctAns: "1", color: "#fe0000" },
  { question: "Touch 100", ans1: "100", ans2: "7", ans3: "4", correctAns: "1", color: "#da8302" },
  { question: "44, 45, ?, 47 ", ans1: "46", ans2: "78", ans3: "48", correctAns: "1", color: "#fe0000" },
  { question: "Touch 22", ans1: "22", ans2: "5", ans3: "20", correctAns: "1", color: "#D81B60" },
  { question: "Touch 7", ans1: "81", ans2: "7", ans3: "74", correctAns: "2", color: "#fe0000" },
  { question: "5 - 1 = ?", ans1: "3", ans2: "4", ans3: "5", correctAns: "2", color: "#007500" },
  { question: "Touch 62", ans1: "16", ans2: "19", ans3: "62", correctAns: "3", color: "#fe0000" },
  { question: "Touch 90", ans1: "90", ans2: "43", ans3: "80", correctAns: "1", color: "#3900ff" },
  { question: "?, 13, 14, 15 ", ans1: "12", ans2: "11", ans3: "9", correctAns: "1", color: "#fe0000" },
  { question: "Touch 55", ans1: "12", ans2: "55", ans3: "95", correctAns: "2", color: "#fe2f9c" },
  { question: "Touch 46", ans1: "70", ans2: "56", ans3: "46", correctAns: "3", color: "#fe0000" },
  { question: "6 ÷ 2 = ?", ans1: "6", ans2: "3", ans3: "6", correctAns: "2", color: "#7a2048" },
  { question: "Touch 94", ans1: "94", ans2: "0", ans3: "21", correctAns: "1", color: "#fe0000" },
  { question: "Touch 23", ans1: "40", ans2: "50", ans3: "23", correctAns: "3", color: "#008000" },

  { question: "1 + 4 = ?", ans1: "5", ans2: "8", ans3: "6", correctAns: "1", color: "#fe0000" },
  { question: "Touch 88", ans1: "63", ans2: "88", ans3: "29", correctAns: "2", color: "#00ce01" },
  { question: "2 X 2 = ?", ans1: "6", ans2: "5", ans3: "4", correctAns: "3", color: "#fe0000" },
  { question: "Touch 10", ans1: "71", ans2: "90", ans3: "10", correctAns: "3", color: "#a96601" },
  { question: "Touch 0", ans1: "0", ans2: "1", ans3: "32", correctAns: "1", color: "#fe0000" },
  { question: "12 - 8 = ?", ans1: "4", ans2: "12", ans3: "3", correctAns: "1", color: "#016565" },
  { question: "2 + 5 + 1 = ? ", ans1: "15", ans2: "8", ans3: "20", correctAns: "2", color: "#fe0000" },
  { question: "4 + 2 - 3 = ? ", ans1: "3", ans2: "5", ans3: "9", correctAns: "1", color: "#b03069" },
  { question: "4 X 2 -2 = ? ", ans1: "4", ans2: "5", ans3: "6", correctAns: "3", color: "#fe0000" },
  { question: "9 ÷ 3 - 2 = ? ", ans1: "1", ans2: "12", ans3: "3", correctAns: "1", color: "#0165ff" },
  { question: "35, 36, 37, __ ", ans1: "32", ans2: "40", ans3: "38", correctAns: "3", color: "#002f00" },]);
  const [pageIndex,setPageIndex]=useState(0);
  const viewpagerRef=useRef(null);

useEffect(()=>{
  Orientation.lockToLandscapeRight();
},[])

const errorSound = () => {
    playSound('no.mp3')
  }
  const succesSound = () => {
    playSound('yes.mp3');
      viewpagerRef.current.setPage(++position);
  }
  const back = () => {
    if(IsSoundEnabled)
    clickSound();
    props.navigation.goBack();
    props.route.params.Refresh();
  }

    return (
      <ImageBackground source={bg_math} resizeMode="stretch" style={{ flex: 1, }}>
        <StatusBar hidden />
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;
           
            setPageIndex(position);
            // //Tts.speak(dataArray[position].bengName)

          }} setPage={pageIndex} ref={viewpagerRef}>
            {dataArray.map((item, index) => {
              return (
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <Text style={{ fontSize: CustomFont.font45, fontFamily: 'Gretoon Highlight', marginTop: responsiveHeight(7), color: item.color, }}>{item.question}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TouchableOpacity style={{ marginLeft: responsiveWidth(5) }} onPress={() => {
                        if (item.correctAns == 1) {
                          succesSound();
                        } else {
                          errorSound();
                        }
                      }}>
                        <ImageBackground source={balloon1} resizeMode="contain" style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin: 50,zIndex:999 }}>{item.ans1}</Text>
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
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin: 50,zIndex:999 }}>{item.ans2}</Text>
                        </ImageBackground>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginRight: responsiveWidth(5) }} onPress={() => {
                        if (item.correctAns == 3) {
                          succesSound();
                        } else {
                          errorSound();
                        }
                      }}>
                        <ImageBackground source={balloon3} resizeMode="contain" style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: CustomFont.font40, fontFamily: 'Gretoon Highlight', color: Color.white, margin: 50,zIndex:999 }}>{item.ans3}</Text>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                    <View style={{ alignItems:'center' }}>
                    {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>
                  </View>
              );
            }, this)}
          </ViewPager>
        </View>
                </ImageBackground>
    );

}
export default Math;
