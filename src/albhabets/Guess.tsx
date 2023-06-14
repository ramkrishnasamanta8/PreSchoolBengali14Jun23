import React, { useEffect, useState, useRef } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, Platform, BackHandler, SafeAreaView } from 'react-native';
import back from '../../assets/back.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import Toolbar from '../components/Toolbar';
let position = 0 ;
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
let rightFlag = true, backHandler = null;
const Guess = (props) => {
  const [title, setTitle] = useState('')
  const [dataArray] = useState([
    { sound: 'a.mp3', letterImg: require('../../assets/a.jpg'), letterImg1: require('../../assets/aforapple.jpg'), letterImg2: require('../../assets/cforcar.png'), letterImg3: require('../../assets/nfornest.png'), ans: "1" },
    { sound: 'b.mp3', letterImg: require('../../assets/b.jpg'), letterImg1: require('../../assets/lforlion.png'), letterImg2: require('../../assets/bforball.jpg'), letterImg3: require('../../assets/iforigloo.jpg'), ans: "2" },
    { sound: 'c.mp3', letterImg: require('../../assets/c.jpg'), letterImg1: require('../../assets/zforzebra.jpg'), letterImg2: require('../../assets/cforcar.png'), letterImg3: require('../../assets/lforlion.png'), ans: "2" },
    { sound: 'd.mp3', letterImg: require('../../assets/d.jpg'), letterImg1: require('../../assets/dfordog.jpg'), letterImg2: require('../../assets/bforball.jpg'), letterImg3: require('../../assets/wforwhale.jpg'), ans: "1" },
    { sound: 'e.mp3', letterImg: require('../../assets/e.jpg'), letterImg1: require('../../assets/hforhat.png'), letterImg2: require('../../assets/eforele.png'), letterImg3: require('../../assets/xforxylo.png'), ans: "2" },
    { sound: 'f.mp3', letterImg: require('../../assets/f.jpg'), letterImg1: require('../../assets/kforkangaroo.png'), letterImg2: require('../../assets/qforqueen.png'), letterImg3: require('../../assets/fforfox.jpg'), ans: "3" },
    { sound: 'g.mp3', letterImg: require('../../assets/g.jpg'), letterImg1: require('../../assets/gforgoat.jpg'), letterImg2: require('../../assets/hforhat.png'), letterImg3: require('../../assets/oforowl.png'), ans: "1" },
    { sound: 'h.mp3', letterImg: require('../../assets/h.jpg'), letterImg1: require('../../assets/sforsun.png'), letterImg2: require('../../assets/hforhat.png'), letterImg3: require('../../assets/vforviolin.png'), ans: "2" },
    { sound: 'i.mp3', letterImg: require('../../assets/i.jpg'), letterImg1: require('../../assets/iforigloo.jpg'), letterImg2: require('../../assets/uforumbrella.png'), letterImg3: require('../../assets/pforpig.png'), ans: "1" },
    { sound: 'j.mp3', letterImg: require('../../assets/j.png'), letterImg1: require('../../assets/aforapple.jpg'), letterImg2: require('../../assets/tfortrain.png'), letterImg3: require('../../assets/jforjoker.png'), ans: "3" },
    { sound: 'k.mp3', letterImg: require('../../assets/k.png'), letterImg1: require('../../assets/sforsun.png'), letterImg2: require('../../assets/kforkangaroo.png'), letterImg3: require('../../assets/oforowl.png'), ans: "2" },
    { sound: 'l.mp3', letterImg: require('../../assets/l.png'), letterImg1: require('../../assets/fforfox.jpg'), letterImg2: require('../../assets/cforcar.png'), letterImg3: require('../../assets/lforlion.png'), ans: "3", },
    { sound: 'm.mp3', letterImg: require('../../assets/m.png'), letterImg1: require('../../assets/iforigloo.jpg'), letterImg2: require('../../assets/uforumbrella.png'), letterImg3: require('../../assets/mforouse.png'), ans: "3" },
    { sound: 'n.mp3', letterImg: require('../../assets/n.png'), letterImg1: require('../../assets/nfornest.png'), letterImg2: require('../../assets/uforumbrella.png'), letterImg3: require('../../assets/bforball.jpg'), ans: "1" },
    { sound: 'o.mp3', letterImg: require('../../assets/o.png'), letterImg1: require('../../assets/sforsun.png'), letterImg2: require('../../assets/oforowl.png'), letterImg3: require('../../assets/yforyak.png'), ans: "2" },
    { sound: 'p.mp3', letterImg: require('../../assets/p.png'), letterImg1: require('../../assets/eforele.png'), letterImg2: require('../../assets/pforpig.png'), letterImg3: require('../../assets/dfordog.jpg'), ans: "2" },
    { sound: 'q.mp3', letterImg: require('../../assets/q.png'), letterImg1: require('../../assets/aforapple.jpg'), letterImg2: require('../../assets/cforcar.png'), letterImg3: require('../../assets/qforqueen.png'), ans: "3" },
    { sound: 'r.mp3', letterImg: require('../../assets/r.png'), letterImg1: require('../../assets/yforyak.png'), letterImg2: require('../../assets/rforrabbit.jpg'), letterImg3: require('../../assets/vforviolin.png'), ans: "2", },
    { sound: 's.mp3', letterImg: require('../../assets/s.png'), letterImg1: require('../../assets/sforsun.png'), letterImg2: require('../../assets/gforgoat.jpg'), letterImg3: require('../../assets/cforcar.png'), ans: "1", },
    { sound: 't.mp3', letterImg: require('../../assets/t.png'), letterImg1: require('../../assets/lforlion.png'), letterImg2: require('../../assets/aforapple.jpg'), letterImg3: require('../../assets/tfortrain.png'), ans: "3" },
    { sound: 'u.mp3', letterImg: require('../../assets/u.png'), letterImg1: require('../../assets/xforxylo.png'), letterImg2: require('../../assets/uforumbrella.png'), letterImg3: require('../../assets/zforzebra.jpg'), ans: "2" },
    { sound: 'v.mp3', letterImg: require('../../assets/v.png'), letterImg1: require('../../assets/dfordog.jpg'), letterImg2: require('../../assets/eforele.png'), letterImg3: require('../../assets/vforviolin.png'), ans: "3" },
    { sound: 'w.mp3', letterImg: require('../../assets/w.png'), letterImg1: require('../../assets/wforwhale.jpg'), letterImg2: require('../../assets/sforsun.png'), letterImg3: require('../../assets/rforrabbit.jpg'), ans: "1" },
    { sound: 'x.mp3', letterImg: require('../../assets/x.png'), letterImg1: require('../../assets/kforkangaroo.png'), letterImg2: require('../../assets/xforxylo.png'), letterImg3: require('../../assets/uforumbrella.png'), ans: "2" },
    { sound: 'y.mp3', letterImg: require('../../assets/y.png'), letterImg1: require('../../assets/tfortrain.png'), letterImg2: require('../../assets/wforwhale.jpg'), letterImg3: require('../../assets/yforyak.png'), ans: "3" },
    { sound: 'z.mp3', letterImg: require('../../assets/z.png'), letterImg1: require('../../assets/zforzebra.jpg'), letterImg2: require('../../assets/xforxylo.png'), letterImg3: require('../../assets/eforele.png'), ans: "1" },
  ])
  const [pageIndex, setPageIndex] = useState(0)
  const [prevShowStatus, setPrevShowStatus] = useState(true);
  const [nextShowStatus, setNextShowStatus] = useState(true);
  const [btnEnable, setBtnEnable] = useState(false);
  const viewpager = useRef(null);
  useEffect(() => {
    let item = props.route.params.item;
    if (item) {

      setTitle(item.name);
    }
  }, [])

  const errorSound = () => {
    playSound('try_again.mp3');
  }
  const succesSound = () => {
    setBtnEnable(true);
    rightFlag = false;
    playSound('guess_success.amr');

    setTimeout(() => {
      viewpager.current.setPage(++position)
    }, 2500)

  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <TouchableOpacity style={{ position: 'absolute', top: 0, left: 0, zIndex: 99 }} onPress={() => {
        if (rightFlag) {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack();
        }

      }}>
        <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: responsiveWidth(6), marginTop: Platform.OS == 'ios' ? responsiveHeight(5) : responsiveWidth(5) }} />
      </TouchableOpacity>


      <View style={{ flex: 10, backgroundColor: Color.white }}>
        <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          if (position == 0)
            setPrevShowStatus(false)
          else
            setPrevShowStatus(true);

          if (position == dataArray.length - 1)
            setNextShowStatus(false);
          else
            setNextShowStatus(true);
          setPageIndex(position);
          setBtnEnable(false);
          rightFlag = true;
          playSound(dataArray[position].sound);
          setTimeout(() => {
            playSound('guess_in_below_picture.mp3');
          }, 1000)

        }} setPage={pageIndex} ref={viewpager}>
          {dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1.5, alignItems: 'center', }}>
                  <Image source={item.letterImg} style={{ height: responsiveFontSize(20), width: responsiveFontSize(20), marginTop: responsiveHeight(8), resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={() => {
                    if (item.ans == 1) {
                      succesSound();
                    } else {
                      errorSound();
                    }
                  }} disabled={btnEnable}>
                    <Image source={item.letterImg1} style={{ height: responsiveFontSize(22), width: responsiveFontSize(22), resizeMode: 'contain' }} />
                  </TouchableOpacity>

                </View>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => {
                    if (item.ans == 2) {
                      succesSound();
                    } else {
                      errorSound();
                    }
                  }} disabled={btnEnable}>
                    <Image source={item.letterImg2} style={{ height: responsiveFontSize(18), width: responsiveFontSize(18), resizeMode: 'contain', marginLeft: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    if (item.ans == 3) {
                      succesSound();
                    } else {
                      errorSound();
                    }
                  }} disabled={btnEnable}>
                    <Image source={item.letterImg3} style={{ height: responsiveFontSize(18), width: responsiveFontSize(18), resizeMode: 'contain', marginRight: 10 }} />
                  </TouchableOpacity>
                  {nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 10 }} onPress={() => {
                    viewpager.current.setPage(++position)
                  }}>
                    <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: Color.primary }} />
                  </TouchableOpacity> : null}

                  {prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 10 }} onPress={() => {
                    viewpager.current.setPage(--position)
                  }}>
                    <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: Color.primary }} />
                  </TouchableOpacity> : null}

                </View>
                {Platform.OS == 'ios' && !Hichuba ? null : <BannerAd
                  unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                  size={BannerAdSize.FULL_BANNER}
                />}
              </View>
            );
          }, this)}
        </ViewPager>
      </View>

    </View>
  );
}
export default Guess;
