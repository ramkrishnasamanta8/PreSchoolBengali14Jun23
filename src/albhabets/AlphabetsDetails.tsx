import React, { useEffect, useState, useRef } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, BackHandler, Spokestack } from 'react-native';
import Orientation from 'react-native-orientation';
import previous from '../../assets/previous_btn.png';
import next from '../../assets/nxt_btn.png';
import backBtn from '../../assets/back.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
let itemHome = {};
import ViewPager from 'react-native-pager-view';
let position = 0;
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
mobileAds()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,

    // An array of test device IDs to allow.
    testDeviceIdentifiers: ['EMULATOR'],
  })
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
const AlphabetsDetails = (props) => {
  const [dataArray, setdataArray] = useState([])
  const [pageIndex, setpageIndex] = useState(0);
  const [prevShowStatus, setprevShowStatus] = useState(false);
  const [nextShowStatus, setnextShowStatus] = useState(true);
  const viewpager = useRef(null)
  useEffect(() => {
    if(Platform.OS=='android')
    Orientation.lockToLandscapeRight();
    position = props.route.params.index ? props.route.params.index : 0;
    setpageIndex(position);

    itemHome = props.route.params.item;
    if (itemHome) {
      if (itemHome.id == 1 || itemHome.id == 2)
        CapitalLetter();
      else if (itemHome.id == 3)
        sarbarna();
      else if (itemHome.id == 4)
        banjanBarna();
    }
    let backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      back();
      return true;
    })
    return(()=>{
      backHandler.remove();
    })
  }, [])

  const back = () => {
    if (IsSoundEnabled)
      clickSound();
       Orientation.lockToPortrait();
       setTimeout(()=>{
        props.navigation.goBack();
        props.route.params.Refresh();
      },300)
  }
  const CapitalLetter = () => {
    let tempArr = [
      {color:"#fe0000", alphabet: "A", sound: 'a_for_apple.mp3', image: require('../../assets/a.jpg'), letterImage: require('../../assets/aforapple.jpg') },
        {color:"#029702", alphabet: "B", sound: 'b_for_ball.mp3', image: require('../../assets/b.jpg'), letterImage: require('../../assets/bforball.jpg') },
        {color:"#ff00fe", alphabet: "C", sound: 'c_for_car.mp3', image: require('../../assets/c.jpg'), letterImage: require('../../assets/cforcar.png') },
        {color:"#7430ff", alphabet: "D", sound: 'd_for_dog.mp3', image: require('../../assets/d.jpg'), letterImage: require('../../assets/dfordog.jpg') },
        {color:"#DC9900", alphabet: "E", sound: 'e_for_elephant.mp3', image: require('../../assets/e.jpg'), letterImage: require('../../assets/eforele.png') },
        {color:"#3800fd", alphabet: "F", sound: 'f_for_fox.mp3', image: require('../../assets/f.jpg'), letterImage: require('../../assets/fforfox.jpg') },
        {color:"#000000", alphabet: "G", sound: 'g_for_goat.mp3', image: require('../../assets/g.jpg'), letterImage: require('../../assets/gforgoat.jpg') },
        {color:"#0E6E01", alphabet: "H", sound: 'h_for_hat.amr', image: require('../../assets/h.jpg'), letterImage: require('../../assets/hforhat.png') },
        {color:"#ff00fe", alphabet: "I", sound: 'i_for_igloo.mp3', image: require('../../assets/i.jpg'), letterImage: require('../../assets/iforigloo.jpg') },
        {color:"#E0220E", alphabet: "J", sound: 'j_for_joker.mp3', image: require('../../assets/j.png'), letterImage: require('../../assets/jforjoker.png') },
        {color:"#0166fe", alphabet: "K", sound: 'k_for_kangaroo.mp3', image: require('../../assets/k.png'), letterImage: require('../../assets/kforkangaroo.png') },
        {color:"#b300d5", alphabet: "L", sound: 'l_for_lion.mp3', image: require('../../assets/l.png'), letterImage: require('../../assets/lforlion.png') },
        {color:"#da8302", alphabet: "M", sound: 'm_for_mouse.mp3', image: require('../../assets/m.png'), letterImage: require('../../assets/mforouse.png') },
        {color:"#D81B60", alphabet: "N", sound: 'n_for_nest.mp3', image: require('../../assets/n.png'), letterImage: require('../../assets/nfornest.png') },
        {color:"#007500", alphabet: "O", sound: 'o_for_owl.mp3', image: require('../../assets/o.png'), letterImage: require('../../assets/oforowl.png') },
        {color:"#3900ff", alphabet: "P", sound: 'p_for_pig.mp3', image: require('../../assets/p.png'), letterImage: require('../../assets/pforpig.png') },
        {color:"#fe2f9c", alphabet: "Q", sound: 'q_for_queen.mp3', image: require('../../assets/q.png'), letterImage: require('../../assets/qforqueen.png') },
        {color:"#7a2048", alphabet: "R", sound: 'r_for_rabbit.mp3', image: require('../../assets/r.png'), letterImage: require('../../assets/rforrabbit.jpg') },
        {color:"#008000", alphabet: "S", sound: 's_for_sun.mp3', image: require('../../assets/s.png'), letterImage: require('../../assets/sforsun.png') },
        {color:"#00ce01", alphabet: "T", sound: 't_for_train.mp3', image: require('../../assets/t.png'), letterImage: require('../../assets/tfortrain.png') },
        {color:"#a96601", alphabet: "U", sound: 'u_for_umbrella.mp3', image: require('../../assets/u.png'), letterImage: require('../../assets/uforumbrella.png') },
        {color:"#016565", alphabet: "V", sound: 'v_for_violin.mp3', image: require('../../assets/v.png'), letterImage: require('../../assets/vforviolin.png') },
        {color:"#b03069", alphabet: "W", sound: 'w_for_whale.mp3', image: require('../../assets/w.png'), letterImage: require('../../assets/wforwhale.jpg') },
        {color:"#0165ff", alphabet: "X", sound: 'x_for_xlyophone.mp3', image: require('../../assets/x.png'), letterImage: require('../../assets/xforxylo.png') },
        {color:"#002f00", alphabet: "Y", sound: 'y_for_yak.mp3', image: require('../../assets/y.png'), letterImage: require('../../assets/yforyak.png') },
        {color:"#f90101", alphabet: "Z", sound: 'z_for_zebra.mp3', image: require('../../assets/z.png'), letterImage: require('../../assets/zforzebra.jpg') },
    ];
    setdataArray(tempArr);
  }
  const sarbarna = () => {
    let tempArr = [
      { color: "#fe0000", alphabet: "অ", sound: "a1.amr", image: null, letterImage: require('../../assets/sarbarna.webp'), meaning: 'অয় অজগর আসছে তেড়ে' },
      { color: "#029702", alphabet: "আ", sound: "a2.amr", image: null, letterImage: require('../../assets/mangos.jpg'), meaning: 'আয় আম টি খাবো পেড়ে' },
      { color: "#ff00fe", alphabet: "ই", sound: "a3.amr", image: null, letterImage: require('../../assets/mforouse.png'), meaning: 'ইঁদুর ছানা ভয়ে মরে' },
      { color: "#7430ff", alphabet: "ঈ", sound: "a4.amr", image: null, letterImage: require('../../assets/raven.jpg'), meaning: 'ঈগল পাখি শিকার ধরে' },
      { color: "#DC9900", alphabet: "উ", sound: "a5.amr", image: null, letterImage: require('../../assets/camel.jpg'), meaning: 'উট চলেছে মুখটি তুলে' },
      { color: "#3800fd", alphabet: "ঊ", sound: "a6.amr", image: null, letterImage: require('../../assets/sun.jpg'), meaning: 'উষা' },
      { color: "#000000", alphabet: "ঋ", sound: "a7.amr", image: null, letterImage: require('../../assets/rshi.jpg'), meaning: 'ঋষি মাসাই বসেন পুজোয়' },
      { color: "#0E6E01", alphabet: "ঌ", sound: "", image: null, letterImage: require('../../assets/seal.jpg'), meaning: 'ঌ কার যেন ডিগবাজি খায়' },
      { color: "#ff00fe", alphabet: "এ", sound: "a8.amr", image: null, letterImage: require('../../assets/ektara.jpg'), meaning: 'একতারা ' },
      { color: "#E0220E", alphabet: "ঐ", sound: "a9.amr", image: null, letterImage: require('../../assets/rhymes_icon.png'), meaning: 'ওই দেখো ভাই চাঁদ উঠেছে' },
      { color: "#0166fe", alphabet: "ও", sound: "a10.amr", image: null, letterImage: require('../../assets/ol.jpg'), meaning: 'ওল খেয়েও না ধরবে গলা' },
      { color: "#b300d5", alphabet: "ঔ", sound: "a11.amr", image: null, letterImage: require('../../assets/laboratory.jpg'), meaning: 'ঔষধ খেতে মিছে বলা' },
    ]
    setdataArray(tempArr);
  }
  const banjanBarna = () => {
    let tempArr = [
      { alphabet: "ক", color: "#fe0000", sound: "b1.amr", image: null, letterImage: require('../../assets/kokil.jpg'), meaning: 'ক তে কোকিল' },
      { alphabet: "খ", color: "#029702", sound: "b2.amr", image: null, letterImage: require('../../assets/rforrabbit.jpg'), meaning: 'খ তে খরগোশ' },
      { alphabet: "গ", color: "#ff00fe", sound: "b3.amr", image: null, letterImage: require('../../assets/cow.jpg'), meaning: 'গ তে গরু' },
      { alphabet: "ঘ", color: "#7430ff", sound: "b4.amr", image: null, letterImage: require('../../assets/horse.jpg'), meaning: 'ঘ তে ঘোড়া' },
      { alphabet: "ঙ", color: "#DC9900", sound: "b5.amr", image: null, letterImage: require('../../assets/bang.jpg'), meaning: 'ঙ তে ব্যাঙ' },
      { alphabet: "চ", color: "#3800fd", sound: "b6.amr", image: null, letterImage: require('../../assets/rhymes_icon.png'), meaning: 'চ তে চাঁদ' },
      { alphabet: "ছ", color: "#000000", sound: "b7.amr", image: null, letterImage: require('../../assets/gforgoat.jpg'), meaning: 'ছ তে ছাগল' },
      { alphabet: "জ", color: "#0E6E01", sound: "b8.amr", image: null, letterImage: require('../../assets/ship.png'), meaning: 'জ তে জাহাজ' },
      { alphabet: "ঝ", color: "#ff00fe", sound: "b9.amr", image: null, letterImage: require('../../assets/jharudar.jpg'), meaning: 'ঝ তে ঝাড়ুদার' },
      { alphabet: "ঞ", color: "#E0220E", sound: "b10.amr", image: null, letterImage: require('../../assets/islam.jpg'), meaning: 'ঞ তে মিঞা' },
      { alphabet: "ট", color: "#0166fe", sound: "b11.amr", image: null, letterImage: require('../../assets/parrot.jpg'), meaning: 'ট তে টিয়া' },
      { alphabet: "ঠ", color: "#b300d5", sound: "b12.amr", image: null, letterImage: require('../../assets/thakuma.jpg'), meaning: 'ঠ তে ঠাকুরমা' },
      { alphabet: "ড", color: "#da8302", sound: "b13.amr", image: null, letterImage: require('../../assets/dub.png'), meaning: 'ড তে ডাব' },
      { alphabet: "ঢ", color: "#D81B60", sound: "b14.amr", image: null, letterImage: require('../../assets/dhuk.jpg'), meaning: 'ঢ তে ঢাক ' },
      { alphabet: "ণ", color: "#007500", sound: "b15.amr", image: null, letterImage: require('../../assets/anmdeer.png'), meaning: 'ণ তে হরিণ' },
      { alphabet: "ত", color: "#3900ff", sound: "b16.amr", image: null, letterImage: require('../../assets/whale.jpg'), meaning: 'ত তে তিমি' },
      { alphabet: "থ", color: "#fe2f9c", sound: "b17.amr", image: null, letterImage: require('../../assets/thum.jpg'), meaning: 'থ তে থাম' },
      { alphabet: "দ", color: "#7a2048", sound: "b18.amr", image: null, letterImage: require('../../assets/doyel.jpg'), meaning: 'দ তে দোয়েল' },
      { alphabet: "ধ", color: "#008000", sound: "b19.amr", image: null, letterImage: require('../../assets/archery.jpg'), meaning: 'ধ তে ধনুক' },
      { alphabet: "ন", color: "#00ce01", sound: "b20.amr", image: null, letterImage: require('../../assets/nouka.png'), meaning: 'ন তে নৌকা' },
      { alphabet: "প", color: "#a96601", sound: "b21.amr", image: null, letterImage: require('../../assets/oforowl.png'), meaning: 'প তে পেঁচা' },
      { alphabet: "ফ", color: "#016565", sound: "b22.amr", image: null, letterImage: require('../../assets/grasshopper.jpg'), meaning: 'ফ তে ফড়িং' },
      { alphabet: "ব", color: "#b03069", sound: "b23.amr", image: null, letterImage: require('../../assets/tiger.jpg'), meaning: 'ব তে বাঘ' },
      { alphabet: "ভ", color: "#0165ff", sound: "b24.amr", image: null, letterImage: require('../../assets/bear.jpg'), meaning: 'ভ তে ভাল্লুক' },
      { alphabet: "ম", color: "#002f00", sound: "b25.amr", image: null, letterImage: require('../../assets/cow.jpg'), meaning: 'ম তে মহিষ' },
      { alphabet: "য", color: "#f90101", sound: "b26.amr", image: null, letterImage: require('../../assets/refugee.png'), meaning: 'য তে যাযাবর' },
      { alphabet: "র", color: "#fe0000", sound: "b27.amr", image: null, letterImage: require('../../assets/rath.jpg'), meaning: 'র তে রথ' },
      { alphabet: "ল", color: "#029702", sound: "b28.amr", image: null, letterImage: require('../../assets/lattu.png'), meaning: 'ল তে লাট্টু ' },
      { alphabet: "শ", color: "#ff00fe", sound: "b29.amr", image: null, letterImage: require('../../assets/fox.jpg'), meaning: 'শ তে শেয়াল' },
      { alphabet: "ষ", color: "#7430ff", sound: "b30.amr", image: null, letterImage: require('../../assets/ox.png'), meaning: 'ষ তে ষাঁড়' },
      { alphabet: "স", color: "#DC9900", sound: "b31.amr", image: null, letterImage: require('../../assets/lforlion.png'), meaning: 'স তে সিংহ' },
      { alphabet: "হ", color: "#3800fd", sound: "b32.amr", image: null, letterImage: require('../../assets/hanuman.png'), meaning: 'হ তে হনূমান' },
      { alphabet: "ড়", color: "#000000", sound: "b33.amr", image: null, letterImage: require('../../assets/house.jpg'), meaning: 'ড় তে বাড়ি' },
      { alphabet: "ঢ়", color: "#0E6E01", sound: "b34.amr", image: null, letterImage: require('../../assets/asar.jpg'), meaning: 'ঢ় তে আষাঢ়' },
      { alphabet: "য়", color: "#ff00fe", sound: "b35.amr", image: null, letterImage: require('../../assets/capital_country.png'), meaning: 'য় তে ব্যয়' },
      { alphabet: "ৎ", color: "#E0220E", sound: "", image: null, letterImage: require('../../assets/hatat.jpg'), meaning: 'ৎ তে হটাৎ' },
    ]
    setdataArray(tempArr);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar hidden />
      <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => back()}>
        <Image source={backBtn} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <ViewPager style={{ flex: 1 }} initialPage={pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          if (position == 0)
            setprevShowStatus(false);
          else
            setprevShowStatus(true);

          if (position == dataArray.length - 1)
            setnextShowStatus(false);
          else
            setnextShowStatus(true);
          setpageIndex(position);
          playSound(dataArray[position].sound);
        }} setPage={pageIndex} ref={viewpager}>

          {dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1, }}>
              

                {itemHome.id == 3 || itemHome.id == 4 ? <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', alignSelf: 'center', marginTop: Platform.OS=='ios' ?responsiveHeight(10):20, color: item.color, fontFamily: 'Gretoon Highlight' }}>{item.meaning}</Text> : null}
                {Platform.OS=='android' ?  <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                  {itemHome.id == 2 || itemHome.id == 3 || itemHome.id == 4 ? <Text style={{ marginLeft: responsiveWidth(10), fontSize:itemHome.id == 2? CustomFont.font80: CustomFont.font60, color: item.color, marginTop: -50,fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici' }}> {item.alphabet.toLowerCase()} </Text> :
                    <Image source={item.image} style={{ marginLeft: responsiveWidth(5), height: responsiveFontSize(30), width: responsiveFontSize(30), resizeMode: 'contain' }} />}
                  <Image source={item.letterImage} style={{ marginRight: responsiveWidth(5), height: responsiveFontSize(30), width: responsiveFontSize(30), resizeMode: 'contain' }} />
                </View>:
                 <View style={{ flex: 1, alignItems: 'center' }}>
                  {itemHome.id == 2 || itemHome.id == 3 || itemHome.id == 4 ? <Text style={{ marginLeft: responsiveWidth(10), fontSize:itemHome.id == 2? CustomFont.font80: CustomFont.font60, color: item.color, marginTop: -50,fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici' }}> {item.alphabet.toLowerCase()} </Text> :
                    <Image source={item.image} style={{ marginLeft: responsiveWidth(5), height: responsiveFontSize(30), width: responsiveFontSize(30), resizeMode: 'contain',marginTop: responsiveHeight(15) }} />}
                  <Image source={item.letterImage} style={{ marginRight: responsiveWidth(5), height: responsiveFontSize(30), width: responsiveFontSize(30), resizeMode: 'contain',marginTop: responsiveHeight(5) }} />
                </View>
                }
               
                {nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(14), right: 10 }} onPress={() => {
                    if (IsSoundEnabled)
                      clickSound();
                    viewpager.current.setPage(++position)
                  }}>
                    <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                  </TouchableOpacity> : null}

                  {prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(14), left: 10 }} onPress={() => {
                    if (IsSoundEnabled)
                      clickSound();
                    viewpager.current.setPage(--position)
                  }}>
                    <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                  </TouchableOpacity> : null}
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                  {Platform.OS == 'ios' && !Hichuba ? null : <BannerAd
                    unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                    size={BannerAdSize.FULL_BANNER}
                  />}
                </View>
              </View>

            );
          }, this)}


        </ViewPager>
      </View>

    </View>
  );
}
export default AlphabetsDetails;