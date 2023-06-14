import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, BackHandler, StyleSheet, ImageBackground } from 'react-native';

import Orientation from 'react-native-orientation';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import bgImage from '../../assets/bg4.jpg';
import back from '../../assets/back.png';
import woodBg from '../../assets/woodBg.png';
import loud from '../../assets/loud.png';
import tick from '../../assets/tick.png';
import close_white from '../../assets/close_white.png';
import success from '../../assets/success.png';
let itemHome = null, from = 'cap';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';

import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let isSound = false;
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0;
import { DraggableGrid } from 'react-native-draggable-grid';
let colorArr = ["#fe0000", "#029702", "#ff00fe", "#7430ff", "#DC9900", "#000000", "#3800fd", "#0E6E01", "#ff00fe", "#E0220E", "#0166fe", "#b300d5", "#da8302", "#D81B60", "#007500", "#3900ff", "#fe2f9c", "#7a2048", "#008000", "#00ce01", "#a96601", "#016565", "#b03069", "#0165ff"];
let selectedAns = '', backHandler = null;
const Rearragne=(props)=> {
const [pageIndex,setpageIndex] =useState(0)
const [dataArray,setdataArray] =useState(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',])
const [imageStatus,setimageStatus] =useState(null)
const viewpager = useRef(null);
const [data,setdata] =useState([])
useEffect(()=>{
  let item = props.route.params.item;
    let tag = item.tag;
    if (tag) {
      if (tag == 'abc') {
        abc();
      } else if (tag == 'sar') {
        sar();
      } else if (tag == 'banjan') {
        banjan();
      } else if (tag == 'number') {
        number();
      }
    }
},[])


  // constructor(props) {
  //   super(props);
  //   state = {
  //     pageIndex: 0,
  //     score: 0,
  //     dataArray: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
  //     answerTxt: '',
  //     imageStatus: null,
  //     isBtnDisable: false,
  //     clickIndex: -1,
  //     data: 
  //   };

  // }
  // async componentDidMount() {
  
  //   backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     return true;
  //   })
  // }
  // componentWillUnmount() {
  //   backHandler.remove()
  // }
  const back = () => {
    if (IsSoundEnabled)
      clickSound();
    //Orientation.lockToPortrait();
    //setTimeout(() => {
    props.navigation.goBack();
    //props.route.params.Refresh();
    //}, 100)
  }
  const abc = () => {
    let tempArr = [
      {
        label: 'label 1', question: [
          { name: 'B', key: '1' }, { name: 'F', key: '2' }, { name: 'C', key: '3' },
          { name: 'A', key: '4' }, { name: 'E', key: '5' }, { name: 'D', key: '6' },], from: 'A', ans: 'ABCDEF'
      },
      {
        label: 'label 2', question: [
          { name: 'H', key: '1' }, { name: 'J', key: '2' }, { name: 'I', key: '3' },
          { name: 'K', key: '4' }, { name: 'G', key: '5' }, { name: 'L', key: '6' },], from: 'G', ans: 'GHIJKL'
      },
      {
        label: 'label 3', question: [
          { name: 'P', key: '1' }, { name: 'N', key: '2' }, { name: 'O', key: '3' },
          { name: 'Q', key: '4' }, { name: 'R', key: '5' }, { name: 'M', key: '6' },], from: 'M', ans: 'MNOPQR'
      },
      {
        label: 'label 4', question: [
          { name: 'V', key: '1' }, { name: 'U', key: '2' }, { name: 'T', key: '3' },
          { name: 'W', key: '4' }, { name: 'X', key: '5' }, { name: 'S', key: '6' },], from: 'S', ans: 'STUVWX'
      },
      {
        label: 'label 5', question: [
          { name: 'D', key: '1' }, { name: 'B', key: '2' }, { name: 'C', key: '3' },
          { name: 'E', key: '4' }, { name: 'G', key: '5' }, { name: 'I', key: '6' },
          { name: 'A', key: '7' }, { name: 'H', key: '8' }, { name: 'F', key: '9' },], from: 'A', ans: 'ABCDEFGHI'
      },
      {
        label: 'label 6', question: [
          { name: 'd', key: '1' }, { name: 'c', key: '2' }, { name: 'g', key: '3' },
          { name: 'n', key: '4' }, { name: 'o', key: '5' }, { name: 'h', key: '6' },
          { name: 'a', key: '7' }, { name: 'b', key: '8' }, { name: 'm', key: '9' },
          { name: 'j', key: '10' }, { name: 'i', key: '11' }, { name: 'f', key: '12' },
          { name: 'k', key: '13' }, { name: 'l', key: '14' }, { name: 'e', key: '15' },], from: 'a', ans: 'abcdefghijklmno'
      },


    ]
    setdataArray(tempArr);
  }
  const sar = () => {
    let tempArr = [
      {
        label: 'label 1', question: [
          { name: 'ই', key: '1' }, { name: 'অ', key: '2' }, { name: 'উ', key: '3' },
          { name: 'আ', key: '4' }, { name: 'ঊ', key: '5' }, { name: 'ঈ', key: '6' },], from: 'অ', ans: 'অআইঈউঊ'
      },
      {
        label: 'label 2', question: [
          { name: 'ই', key: '1' }, { name: 'উ', key: '2' }, { name: 'ঋ', key: '3' },
          { name: 'ঊ', key: '4' }, { name: 'অ', key: '5' }, { name: 'এ', key: '6' },
          { name: 'আ', key: '7' }, { name: 'ঈ', key: '8' }, { name: 'ঌ', key: '9' },], from: 'অ', ans: 'অআইঈউঊঋঌএ'
      },
      {
        label: 'label 3', question: [
          { name: 'ই', key: '1' }, { name: 'এ', key: '2' }, { name: 'ঋ', key: '3' },
          { name: 'ও', key: '4' }, { name: 'উ', key: '5' }, { name: 'ঐ', key: '6' },
          { name: 'আ', key: '7' }, { name: 'ঔ', key: '8' }, { name: 'ঌ', key: '9' },
          { name: 'ঊ', key: '10' }, { name: 'অ', key: '11' }, { name: 'ঈ', key: '12' },], from: 'অ', ans: 'অআইঈউঊঋঌএঐ'
      },
    ]
    setdataArray(tempArr);
  }
  const banjan = () => {
    let tempArr = [
      {
        label: 'label 1', question: [
          { name: 'গ', key: '1' }, { name: 'ক', key: '2' }, { name: 'ঘ', key: '3' },
          { name: 'ঙ', key: '4' }, { name: 'চ', key: '5' }, { name: 'খ', key: '6' },], from: 'ক', ans: 'কখগঘঙচ'
      },
      {
        label: 'label 2', question: [
          { name: 'ফ', key: '1' }, { name: 'প', key: '2' }, { name: 'ম', key: '3' },
          { name: 'ব', key: '4' }, { name: 'ভ', key: '5' }, { name: 'য', key: '6' },], from: 'প', ans: 'পফবভময'
      },

      {
        label: 'label 3', question: [
          { name: 'গ', key: '1' }, { name: 'ঝ', key: '2' }, { name: 'খ', key: '3' },
          { name: 'জ', key: '4' }, { name: 'ক', key: '5' }, { name: 'ঘ', key: '6' },
          { name: 'ঙ', key: '7' }, { name: 'চ', key: '8' }, { name: 'ছ', key: '9' },], from: 'ক', ans: 'কখগঘঙচছজঝ'
      },
      {
        label: 'label 4', question: [
          { name: 'গ', key: '1' }, { name: 'খ', key: '2' }, { name: 'চ', key: '3' },
          { name: 'ঞ', key: '4' }, { name: 'ট', key: '5' }, { name: 'ঝ', key: '6' },
          { name: 'জ', key: '7' }, { name: 'ক', key: '8' }, { name: 'ঠ', key: '9' },
          { name: 'ঙ', key: '10' }, { name: 'ছ', key: '11' }, { name: 'ঘ', key: '12' },], from: 'ক', ans: 'কখগঘঙচছজঝঞটঠ'
      },
    ]
    setdataArray(tempArr);
  }
  const number = () => {
    let tempArr = [
      {
        label: 'label 1', question: [
          { name: '2', key: '1' }, { name: '4', key: '2' }, { name: '5', key: '3' },
          { name: '3', key: '4' }, { name: '1', key: '5' }, { name: '6', key: '6' },], from: '1', ans: '123456'
      },
      {
        label: 'label 2', question: [
          { name: '13', key: '1' }, { name: '14', key: '2' }, { name: '12', key: '3' },
          { name: '10', key: '4' }, { name: '11', key: '5' }, { name: '15', key: '6' },], from: '10', ans: '101112131415', twoDigit: true
      },
      {
        label: 'label 3', question: [
          { name: '53', key: '1' }, { name: '50', key: '2' }, { name: '51', key: '3' },
          { name: '54', key: '4' }, { name: '55', key: '5' }, { name: '52', key: '6' },], from: '50', ans: '505152535455', twoDigit: true
      },
      {
        label: 'label 4', question: [
          { name: '3', key: '1' }, { name: '2', key: '2' }, { name: '7', key: '3' },
          { name: '4', key: '4' }, { name: '1', key: '5' }, { name: '9', key: '6' },
          { name: '5', key: '7' }, { name: '6', key: '8' }, { name: '8', key: '9' },], from: '1', ans: '123456789'
      },
      {
        label: 'label 5', question: [
          { name: '23', key: '1' }, { name: '22', key: '2' }, { name: '27', key: '3' },
          { name: '28', key: '4' }, { name: '20', key: '5' }, { name: '26', key: '6' },
          { name: '24', key: '7' }, { name: '21', key: '8' }, { name: '25', key: '9' },], from: '20', ans: '202122232425262728', twoDigit: true
      },
      {
        label: 'label 6', question: [
          { name: '1', key: '1' }, { name: '12', key: '2' }, { name: '6', key: '3' },
          { name: '7', key: '4' }, { name: '9', key: '5' }, { name: '10', key: '6' },
          { name: '3', key: '7' }, { name: '8', key: '8' }, { name: '5', key: '9' },
          { name: '11', key: '10' }, { name: '2', key: '11' }, { name: '4', key: '12' },], from: '1', ans: '123456789101112'
      },
    ]
    setdataArray(tempArr);
  }

  render_item = (item, index) => {
    return (
      <View
        style={{
          flex: 1, width: responsiveWidth(28),
          height: responsiveWidth(20),
          borderRadius: 8,
          margin: 2,
          backgroundColor: colorArr[index],
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={index.toString()}
      ><Text style={{ fontSize: CustomFont.font40, color: '#FFF', fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici' }}> {item.name} </Text>
      </View>
    );
  }

    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#8825AE'} barStyle="light-content" />
        <ViewPager style={{ flex: 1 }} initialPage={pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          setdata(dataArray[position].question);
          selectedAns = dataArray[position].ans;
          setpageIndex(position)
          setimageStatus(null);
        }} setPage={pageIndex} ref={viewpager} scrollEnabled={false}>

          {dataArray.map((item, index) => {
            return (
              <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
                <View style={{ flex: 1 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: CustomFont.font32, color: '#FFF', fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', marginTop: index == dataArray.length - 1 ? responsiveHeight(4) : responsiveHeight(6) }}>{item.label}</Text>
                    {imageStatus && imageStatus == 'right' ? <Image source={success} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', marginTop: 10, tintColor: '#FFF' }} /> : <Text style={{ fontSize: CustomFont.font18, color: '#FFF', fontWeight: 'bold' }}>Start from  ' {item.from} '</Text>}
                  </View>
                  <ImageBackground source={woodBg} resizeMode="stretch" style={{ height: index == dataArray.length - 1 ? responsiveHeight(82) : responsiveHeight(52), marginTop: imageStatus && imageStatus == 'right' || index == dataArray.length - 1 ? responsiveHeight(7) : responsiveHeight(15) }}>
                    <DraggableGrid
                      numColumns={3}
                      style={{ flex: 1, margin: responsiveWidth(4.5) }}
                      renderItem={render_item}
                      data={data}
                      onDragRelease={(data) => {
                        let str = '';
                        for (let i = 0; i < data.length; i++) {
                          str += data[i].name;
                        }
                        if (str == selectedAns) {
                          playSound('claps.mp3');
                          setimageStatus('right');
                          setTimeout(() => {
                            if (pageIndex < dataArray.length - 1)
                              viewpager.current.setPage(++position)
                            else
                              props.navigation.navigate('CommonMessage', { howmanyback: 2 })
                          }, 3000)
                        }
                        setdata(data)
                      }}
                    />
                  </ImageBackground>

                </View>
                {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              </ImageBackground>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, left: 7, zIndex: 99 }} onPress={() => back()} disabled={imageStatus == 'right'}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
      </View>
    );
}
export default Rearragne;
const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
  },
  wrapper: {
    paddingTop: 100,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_text: {
    fontSize: 40,
    color: '#FFFFFF',
  },
});
