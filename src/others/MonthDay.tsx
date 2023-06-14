import React,{useState,useEffect,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, ScrollView,SafeAreaView } from 'react-native';


import back_blue from '../../assets/back_blue.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import Tts from 'react-native-tts';
//Tts.setDefaultLanguage('ben');
//Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
let whoosh = null;
let position = 0;
let isSound=false;
export default MonthDay =(props)=> {
const[dataArray,setdataArray]= useState([])
const[title,settitle]= useState('')
let [pageIndex,setpageIndex]= useState(0);
const[nextShowStatus,setnextShowStatus]= useState(false);
const[prevShowStatus,setprevShowStatus]= useState(false);
const viewpager=useRef(null);
useEffect(()=>{

  let item = props.route.params.item;
  if (item) {
    if (item.id == 1){
getEngishDay();
    }else if (item.id == 2){
      getEngishMonth();
    }else if (item.id == 3){
      getBengaliDay();
    }else if (item.id == 4){
      getBengaliMonth();
    }else if (item.id == 5){
      getSeason();
    }
    if(item.id==1 || item.id==2 || item.id==3|| item.id==5)
    isSound=true;
    settitle(item.name);
  }
},[])

 const getEngishDay=()=>{
    let tempArr = [
      {engName:"",bengName:"Sunday", image: require('../../assets/dfordog.jpg'),sound:'sunday.mp3',color: "#fe0000"},
        {engName:"",bengName:"Monday", image: require('../../assets/fforfox.jpg'),sound:'mon.mp3',color: "#029702"},
        {engName:"",bengName:"Tuesday", image: require('../../assets/jforjoker.png'),sound:'tue.mp3',color: "#ff00fe"},
        {engName:"",bengName:"Wednesday", image: require('../../assets/mforouse.png'),sound:'wed.mp3', color:"#7430ff"},
        {engName:"",bengName:"Thursday", image: require('../../assets/oforowl.png'),sound:'thir.mp3',color: "#DC9900"},
        {engName:"",bengName:"Friday", image: require('../../assets/yforyak.png'),sound:'fri.mp3',color: "#3800fd"},
        {engName:"",bengName:"Saturday", image: require('../../assets/kforkangaroo.png'),sound:'sat.mp3',color: "#0E6E01"},
    ]
    setdataArray(tempArr);
  }
  const getEngishMonth=()=>{
    let tempArr = [
      {engName:"",bengName:"January", image: require('../../assets/sports.jpg'), sound:'january.mp3',color: "#fe0000"},
      {engName:"",bengName:"February", image: require('../../assets/qforqueen.png'), sound:'feb.mp3',color: "#029702"},
      {engName:"",bengName:"March", image: require('../../assets/tfortrain.png'), sound:'march.mp3',color: "#ff00fe"},
      {engName:"",bengName:"April", image: require('../../assets/eforele.png'), sound:'april.mp3',color: "#7430ff"},
      {engName:"",bengName:"May", image: require('../../assets/sforsun.png'), sound:'may.mp3',color: "#DC9900"},
      {engName:"",bengName:"June", image: require('../../assets/yforyak.png'), sound:'june.mp3',color: "#3800fd"},
      {engName:"",bengName:"July", image: require('../../assets/jforjoker.png'), sound:'july.mp3',color: "#0E6E01"},
      {engName:"",bengName:"August", image: require('../../assets/aforapple.jpg'), sound:'august.mp3',color: "#ff00fe"},
      {engName:"",bengName:"September", image: require('../../assets/sforsun.png'), sound:'sep.mp3',color: "#E0220E"},
      {engName:"",bengName:"October", image: require('../../assets/oforowl.png'), sound:'oct.mp3',color: "#0166fe"},
      {engName:"",bengName:"November", image: require('../../assets/nfornest.png'), sound:'nov.mp3',color: "#b300d5"},
      {engName:"",bengName:"December", image: require('../../assets/dfordog.jpg'), sound:'dec.mp3',color: "#da8302"},
    ]
    setdataArray(tempArr);
  }
  const getBengaliDay=()=>{
    let tempArr = [
      {engName:"",bengName:"রবিবার", image: require('../../assets/dfordog.jpg'),sound:'day1.mp3', color:"#fe0000"},
        {engName:"",bengName:"সোমবার", image: require('../../assets/fforfox.jpg'),sound:'day2.mp3', color:"#029702"},
        {engName:"",bengName:"মঙ্গলবার", image: require('../../assets/jforjoker.png'),sound:'day3.mp3',color: "#ff00fe"},
        {engName:"",bengName:"বুধবার", image: require('../../assets/mforouse.png'),sound:'day4.mp3',color: "#7430ff"},
        {engName:"",bengName:"বৃহস্পতিবার", image: require('../../assets/oforowl.png'),sound:'day5.mp3', color:"#DC9900"},
        {engName:"",bengName:"শুক্রবার", image: require('../../assets/yforyak.png'),sound:'day6.mp3', color:"#3800fd"},
        {engName:"",bengName:"শনিবার", image: require('../../assets/kforkangaroo.png'),sound:'day7.mp3', color:"#0E6E01"},
    ]
    setdataArray(tempArr);
  }
  const getBengaliMonth=()=>{
    let tempArr = [
      {engName:"",bengName:"বৈশাখ", image: require('../../assets/baisakh.jpg'), sound:'m1.mp3',color: "#fe0000"},
        {engName:"",bengName:"জ্যৈষ্ঠ", image: require('../../assets/jaistha.jpg'), sound:'m2.mp3',color:  "#029702"},
        {engName:"",bengName:"আষাঢ়", image: require('../../assets/asar.jpg'), sound:'m3.mp3', color: "#ff00fe"},
        {engName:"",bengName:"শ্রাবণ", image: require('../../assets/rain_nature.png'), sound:'m4.mp3',color: "#7430ff"},
        {engName:"",bengName:"ভাদ্র", image: require('../../assets/vadra.webp'), sound:'m5.mp3',color:  "#DC9900"},
        {engName:"",bengName:"আশ্বিন", image: require('../../assets/cloud.jpg'), sound:'m6.mp3',color:  "#3800fd"},
        {engName:"",bengName:"কার্তিক", image: require('../../assets/durga.jpg'), sound:'m7.mp3', color: "#0E6E01"},
        {engName:"",bengName:"অগ্রহায়ণ", image: require('../../assets/jagdhatri.jpg'), sound:'m8.mp3',color:  "#ff00fe"},
        {engName:"",bengName:"পৌষ", image: require('../../assets/pous.jpg'), sound:'m9.mp3', color: "#E0220E"},
        {engName:"",bengName:"মাঘ", image: require('../../assets/oforowl.png'), sound:'m10.mp3', color: "#0166fe"},
        {engName:"",bengName:"ফাল্গুন", image: require('../../assets/delonixregia.jpg'), sound:'m11.mp3',color: "#b300d5"},
        {engName:"",bengName:"চৈত্র", image: require('../../assets/chaitra.jpg'), sound:'m12.mp3',color:  "#da8302"},
    ]
    setdataArray(tempArr);
  }
  const getSeason=()=>{
    let tempArr = [
      {engName:"Summer",bengName:"গ্রীস্মকাল", image: require('../../assets/summer.jpg'),sound:'grisshokal.m4a',color: "#fe0000"},
      {engName:"Rainy Season",bengName:"বর্ষাকাল", image: require('../../assets/rain_nature.png'),sound:'borshakal.m4a',color: "#029702"},
      {engName:"Autumn",bengName:"শরৎকাল", image: require('../../assets/cloud.jpg'),sound:'sorotkal.m4a',color: "#ff00fe"},
      {engName:"Late Autumn",bengName:"হেমন্তকাল", image: require('../../assets/fog.jpg'),sound:'hemontokal.m4a',color: "#7430ff"},
      {engName:"Winter",bengName:"শীতকাল", image: require('../../assets/winter.jpg'),sound:'sitkal.m4a',color: "#DC9900"},
      {engName:"Spring",bengName:"বসন্তকাল", image: require('../../assets/autumn.jpg'),sound:'bosontokal.m4a',color: "#3800fd"},
    ]
    setdataArray(tempArr);
  }
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={title} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        props.navigation.goBack()
      } }/>
        

        <View style={{ flex: 10, backgroundColor: Color.white }}>
        <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;
            if (position == 0)
              setprevShowStatus(false);
            else
              setprevShowStatus(true);

            if (position == dataArray.length - 1)
              setnextShowStatus(false);
            else
            setnextShowStatus(true);
             
              
              //if(isSound){
                if (whoosh) {
                  whoosh.stop(() => {
                    whoosh.release();
                  });
                }
                 whoosh = new Sound(Platform.OS == 'android' ? dataArray[position].sound :'sound/' + dataArray[position].sound, Sound.MAIN_BUNDLE, (error) => {
                  if (error) {
                    console.log('failed to load the sound', error);
                    return;
                  }
                  // loaded successfully
                  //console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
                
                  // Play the sound with an onEnd callback
                  whoosh.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                    } else {
                      console.log('playback failed due to audio decoding errors');
                    }
                  });
                });
              // }else{
              //   Tts.speak(dataArray[position].bengName)
              // }
              setpageIndex(position);
          }} setPage={pageIndex} ref={viewpager}>
            {dataArray.map((item, index) => {
              return (
                <View style={{ flex: 1 }}>
                   {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontWeight: 'bold', marginBottom: responsiveHeight(2),fontFamily:'DHF Semangat 2012 Shadow Demo' }}>{item.engName}</Text>
                  </View>
                  <View style={{ height: responsiveHeight(48), justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.image} style={{ height: responsiveFontSize(40), width: responsiveFontSize(40), margin: 20, borderRadius: 10, resizeMode: 'contain' }} />
                  </View>
                  <View style={{ flex: 1.5, alignItems: 'center' }}>
                    <Text style={{ color: item.color, fontSize: CustomFont.font30, fontWeight: 'bold', marginTop: responsiveHeight(2),fontFamily:'DHF Semangat 2012 Shadow Demo' }}>{item.bengName}</Text>
                    {nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 10 }} onPress={() => {
                      if(IsSoundEnabled)
                      clickSound();
                      viewpager.current.setPage(++pageIndex)
                    }}>
                      <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10,tintColor:item.color }} />
                    </TouchableOpacity> : null}

                    {prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 10 }} onPress={() => {
                      if(IsSoundEnabled)
                      clickSound();
                      viewpager.current.setPage(--pageIndex)
                    }}>
                      <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10,tintColor:item.color }} />
                    </TouchableOpacity> : null}

                  </View>

                </View>
              );
            }, this)}
          </ViewPager>
        </View>

      </SafeAreaView>
    );
}
//export default HomeDrawer;
