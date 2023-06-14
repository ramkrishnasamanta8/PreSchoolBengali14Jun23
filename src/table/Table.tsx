import React,{useState,useEffect,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, ScrollView, Platform, SafeAreaView, BackHandler } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import back_blue from '../../assets/back_blue.png';
import check from '../../assets/check.png';
import checked from '../../assets/checked.png';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
var sliderTimer = null, selIndex = 0, prevIndexDuration = 0, selectedTable = 1, tableMaxNumberglobal = 11;

import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default Table =(props)=> {
const[dataArray,setdataArray]=useState([]);
const[selIndexstate,setselIndexstate]=useState(0);
const[TableArr,setTableArr]=useState([]);
const[selectedTablestate,setselectedTablestate]=useState('');
const[isplaying,setisplaying]=useState(true);
const[tableMaxNumber,settableMaxNumber]=useState(10);
const flatListRef=useRef(null);
useEffect(()=>{
  sliderTimer = null;
  selIndex = 0; prevIndexDuration = 0; selectedTable = 1; tableMaxNumberglobal = 11;
  let item = props.route.params.item;
  let tmpArr = [];
  for (let i = item.minNumber; i < item.maxNumber; i++) {
    tmpArr.push({ isSelect: false, value: i })
  }
  tmpArr[0].isSelect = true;
  setTableArr(tmpArr);
  setselectedTablestate(item.minNumber);
  selectedTable = item.minNumber;
  getDynamicTable();

  BackHandler.addEventListener('hardwareBackPress', () => {
    clearInterval(sliderTimer);
    sliderTimer = null;
    if(IsSoundEnabled)
  clickSound();
    props.navigation.goBack();
    return true;
  })
  return ()=>{
    clearInterval(sliderTimer);
    sliderTimer = null;
    selIndex = 0
  }
},[])

const getDynamicTable = () => {
    let tempArr = [];
    for (let i = 1; i < tableMaxNumberglobal; i++) {
      tempArr.push({ label: selectedTable + " x " + i + " = " + selectedTable * i, speechValue: selectedTable + " " + i + " ja " + selectedTable * i });

    }
    setdataArray(tempArr);
  }
  const selectionAndSound = () => {
    let timer = 2000 + (selectedTable * 15);
    txtToSpeak(dataArray[selIndex].speechValue);
    sliderTimer = setInterval(() => {
      try {
        selIndex++;
        if (selIndex == tableMaxNumber) {
          selIndex = 0
        }
        console.log('-----spe' + dataArray[selIndex].speechValue);
        txtToSpeak(dataArray[selIndex].speechValue);
        setselIndexstate(selIndex);
        if (tableMaxNumber == 20) {
          flatListRef.current.scrollToOffset({ animated: true, offset: responsiveHeight(selIndex * 5) });
        } else {
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
      } catch (error) {
        console.log(error);
      }

    }, timer);

  }
  const stopPlaying = () => {
    clearInterval(sliderTimer);
    sliderTimer = null;
    //console.log('-----stop');
  }
  
  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: responsiveWidth(5), marginRight: responsiveWidth(5), backgroundColor: selIndexstate == index ? Color.pink : '#FFF' }} onPress={() => {

    }}>
      <Text style={{ fontSize: CustomFont.font24, fontWeight: '600', color: selIndexstate == index ? '#FFF' : Color.fontColor, textAlign: 'center', margin: 10 }}>{item.label}</Text>

    </TouchableOpacity>
  );


    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.pink }}>
        <StatusBar backgroundColor={Color.pink} />
        <View style={{ backgroundColor: Color.pink, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: responsiveHeight(6.5), minHeight: 45 }}>
          <TouchableOpacity style={{ flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => {
            clearInterval(sliderTimer);
            sliderTimer = null;
              playSound('click.mp3');
            props.navigation.goBack();
            return true;
          }}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF', marginLeft: 10 }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10, textTransform: 'capitalize' }}>{props.route.params.item.title}</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
              tableMaxNumberglobal = 11;
              settableMaxNumber(10);
              getDynamicTable();
            }}>
              <Image source={tableMaxNumber == 10 ? checked : check} style={{ height: responsiveFontSize(3), width: responsiveFontSize(3), resizeMode: 'contain', tintColor: Color.white }} />
              <Text style={{ fontSize: CustomFont.font16, marginLeft: 5, color: Color.white, fontWeight: '800' }}>10</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }} onPress={() => {
              tableMaxNumberglobal = 21;
              settableMaxNumber(20);
              getDynamicTable();
            }}>
              <Image source={tableMaxNumber == 20 ? checked : check} style={{ height: responsiveFontSize(3), width: responsiveFontSize(3), resizeMode: 'contain', tintColor: Color.white }} />
              <Text style={{ fontSize: CustomFont.font16, marginLeft: 5, color: Color.white, fontWeight: '800' }}>20</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: Color.white }}>
          <View style={{ flexDirection: 'row', margin: 7 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', }}>
                {TableArr.map((item, index) => {
                  return (
                    <TouchableOpacity style={{ width: responsiveWidth(13), borderWidth: 1, borderRadius: 5, borderColor: item.isSelect ? Color.liveBg : Color.borderColor, height: responsiveWidth(10), color: Color.darkText, fontSize: CustomFont.font16, justifyContent: 'center', alignItems: 'center', marginRight: 10, backgroundColor: item.isSelect ? Color.genderSelection : Color.white }}
                      onPress={() => {
                        TableArr[prevIndexDuration].isSelect = false;
                        item.isSelect = !item.isSelect;
                        setTableArr(TableArr)
                        setselectedTablestate(item.value)
                        prevIndexDuration = index;
                        selectedTable = item.value;
                        getDynamicTable();
                      }}>
                      <Text style={{ color: Color.optiontext, fontSize: CustomFont.font14, fontWeight: CustomFont.fontWeight400 }}>{item.value}</Text>
                    </TouchableOpacity>
                  );
                }, this)}

              </View>
            </ScrollView>
          </View>

          <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: '#737373', textAlign: 'center', marginTop: 10 }}>Table of {selectedTablestate} </Text>
          {dataArray && dataArray.length > 0 ? <FlatList
            ref={flatListRef}
            style={{ marginTop: 20, marginBottom: 20 }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> : null}
 <View style={{ alignItems: 'center' }}>
 {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
          <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(10), right: 20 }} onPress={() => {
            setisplaying(!isplaying);
            setTimeout(() => {
              isplaying ?  selectionAndSound(): stopPlaying()
            }, 500)
          }}>
            <Image source={isplaying ? play : pause} style={{ height: responsiveFontSize(8), width: responsiveFontSize(8), resizeMode: 'contain', tintColor: Color.pink }} />
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );
}
//export default HomeDrawer;
