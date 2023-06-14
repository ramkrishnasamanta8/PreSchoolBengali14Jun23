import React,{useState,useEffect,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, ScrollView, BackHandler, SafeAreaView ,Platform} from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import back_blue from '../../assets/back_blue.png';
import check from '../../assets/check.png';
import checked from '../../assets/checked.png';
import { playSound, txtToSpeak,clickSound  } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';

var sliderTimer = null, slideIndex = 0, pageindex = 10, iPosition = 0,tableMaxNumber=11;
export default FullTable=(props)=> {
const [dataArray,setdataArray]=useState([])
const [title,settitle]=useState('')
const [tableMaxNumberState,settableMaxNumberState]=useState(10)
useEffect(()=>{
  pageindex = 10; iPosition = 0;tableMaxNumber=11;
  getDynamicTable();
  backHandler = BackHandler.addEventListener('hardwareBackPress', () =>{
    if(IsSoundEnabled)
  clickSound();
    props.navigation.goBack()
   return true;
  } )
},[])

 const getDynamicTable = () => {
    let tmpFinalArr = []
    for (let i = 1; i < 11; i++) {
      let tempArr = [];
      for (let j = 1; j < tableMaxNumber; j++) {
        tempArr.push(i + " x " + j + " = " + i * j);

      }
      iPosition = i;
      tmpFinalArr.push({ title: 'Table of ' + i, data: tempArr })
    }
    setdataArray(tmpFinalArr);
  }

  const loadMoreData = () => {
    pageindex += 10;
    ++iPosition;
    console.log('---------pageindex ' + pageindex);
    let tmpFinalArr = []

    for (let i = iPosition; i < pageindex; ++i) {
      let tempArr = [];
      for (let j = 1; j < tableMaxNumber; j++) {
        tempArr.push(i + " x " + j + " = " + i * j);

      }
      iPosition = i;
      tmpFinalArr.push({ title: 'Table of ' + i, data: tempArr })
    }
    //console.log('---------tmpFinalArr '+JSON.stringify(tmpFinalArr));
    setdataArray([...dataArray, ...tmpFinalArr])
   // setState({ dataArray: [...dataArray, ...tmpFinalArr] });
  }

  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: responsiveWidth(5), marginRight: responsiveWidth(5),backgroundColor:Color.white,marginBottom:20 }} onPress={() => {
      //txtToSpeak(item.name)
    }}>
      <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: '#737373', textAlign: 'center', marginTop: 20 }}>{item.title} </Text>
      <FlatList
        style={{ marginBottom: 20,marginTop:10 }}
        data={item.data}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: responsiveWidth(5), marginRight: responsiveWidth(5) }} onPress={() => {

          }}>
            <Text style={{ fontSize: CustomFont.font20, fontWeight: '400', color: Color.black, textAlign: 'center',margin:5 }}>{item}</Text>

          </TouchableOpacity>
        )}
        //ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()} />
    </TouchableOpacity>
  );

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.pink }}>
        <StatusBar backgroundColor={Color.pink} />
        <View style={{ backgroundColor: Color.pink, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: responsiveHeight(6.5),minHeight:45 }}>
          <TouchableOpacity style={{ flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => {
          playSound('click.mp3');
          props.navigation.goBack()
        }}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF', marginLeft: 10 }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10, textTransform: 'capitalize' }}>1 to 100 Table</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center',marginRight:20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
              tableMaxNumber=11;
              pageindex = 10; iPosition = 0;
              settableMaxNumberState(10)
              getDynamicTable();
            }}>
              <Image source={tableMaxNumberState == 10 ? checked : check} style={{ height: responsiveFontSize(3), width: responsiveFontSize(3), resizeMode: 'contain', tintColor: Color.white }} />
              <Text style={{ fontSize: CustomFont.font16, marginLeft: 5,color:Color.white,fontWeight:'800' }}>10</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }} onPress={() => {
              tableMaxNumber=21;
              pageindex = 10; iPosition = 0;
              settableMaxNumberState(20)
              getDynamicTable();
            }}>
              <Image source={tableMaxNumberState == 20 ? checked : check} style={{ height: responsiveFontSize(3), width: responsiveFontSize(3), resizeMode: 'contain', tintColor: Color.white }} />
              <Text style={{ fontSize: CustomFont.font16, marginLeft: 5,color:Color.white,fontWeight:'800' }}>20</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: Color.bgColor }}>
          {dataArray && dataArray.length > 0 ? <FlatList
            style={{ marginTop: 20, }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => { if (pageindex < 101) loadMoreData() }} /> : null}
            
        </View>
        <View style={{ alignItems: 'center', backgroundColor: Color.bgColor }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
      </SafeAreaView>
    );
}
//export default HomeDrawer;
