import  React , {useState,useRef,useEffect} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, BackHandler, Platform, SafeAreaView } from 'react-native';
//import Orientation from 'react-native-orientation';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import OptionMenu from '../components/OptionMenu';
import Toolbar from '../components/Toolbar';
import back_blue from '../../assets/back_blue.png';
import arrowRight from '../../assets/arrowRight.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { playSound, txtToSpeak  } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let selectedNumber = 1;
let bgColor='#d80100';
let headerColor='#b00000';
let tag='';
const AddSubMulDivChooser=(props)=> {
const[numberArr,setNumberArr]=useState([]);
const[dataArray,setDataArray]=useState([]);
const[pageIndex,setPageIndex]=useState(0);
const[selectNumberIndex,setSelectNumberIndex]=useState(0);
const[selectedIndex,setSelectedIndex]=useState(-1);

useEffect(()=>{
  getEngNumber();
 let backHandler = BackHandler.addEventListener('hardwareBackPress', () =>{
    props.navigation.goBack()
   return true;
  } )
 tag=props.route.params.item.tag;
  if(tag=='add')
  getDynamicTableAdd();
  else if(tag=='sub')
  getDynamicTableSub();
  else if(tag=='mul')
  getDynamicTableMul();
  else if(tag=='div')
  getDynamicTableDiv();
},[])

  const getDynamicTableAdd = () => {
    bgColor='#FF0000';
    headerColor='#B22222';
    let tempArr = [];
    for (let i = 1; i < 11; i++) {
      let addValue=selectedNumber + i;
      tempArr.push({ label: selectedNumber + " + " + i + " = " + addValue, speechValue: selectedNumber + " plus " + i + " equals " + addValue});
    }
    setDataArray(tempArr);
    txtToSpeak('learn addition for '+selectedNumber);
  }
  const getDynamicTableSub = () => {
    bgColor='#32CD32';
    headerColor='#008000';
    let tempArr = [];
    for (let i = selectedNumber; i < selectedNumber+11; i++) {
      let addValue= i-selectedNumber;
      tempArr.push({ label: i + " - " + selectedNumber + " = " + addValue, speechValue: i + " minus " + selectedNumber + " equals " + addValue});
    }
    setDataArray(tempArr);
    txtToSpeak('learn subtraction for '+selectedNumber);
  }
  const getDynamicTableMul = () => {
    bgColor='#298deb';
    headerColor='#0000CD';
    let tempArr = [];
    for (let i = 1; i < 11; i++) {
      let addValue=selectedNumber * i;
      tempArr.push({ label: selectedNumber + " × " + i + " = " + addValue, speechValue: selectedNumber + " into " + i + " equals " + addValue});
    }
    setDataArray(tempArr);
    txtToSpeak('learn multiplication for '+selectedNumber);
  }
  const getDynamicTableDiv = () => {
    bgColor='#9400D3';
    headerColor='#800080';
    let tempArr = [];
    for (let i = 1; i < 11; i++) {
      let addValue=selectedNumber * i;
      tempArr.push({ label: addValue + " ÷ " + selectedNumber + " = " + i, speechValue: addValue + " division " + selectedNumber + " equals " + i});
    }
    setDataArray(tempArr);
    txtToSpeak('learn division for '+selectedNumber);
  }

  const getEngNumber = () => {
    let tempArr = [
    { number: 1,isSelect:false },
    { number: 2 ,isSelect:false },
    { number: 3 ,isSelect:false },
    { number: 4 ,isSelect:false },
    { number: 5 ,isSelect:false },
    { number: 6 ,isSelect:false },
    { number: 7 ,isSelect:false },
    { number: 8 ,isSelect:false },
    { number: 9 ,isSelect:false },
    { number: 10 ,isSelect:false },
    { number: 11 ,isSelect:false },
    { number: 12 ,isSelect:false },
    { number: 13 ,isSelect:false },
    { number: 14, isSelect:false },
    { number: 15, isSelect:false },
    { number: 16, isSelect:false },
    { number: 17, isSelect:false },
    { number: 18,  isSelect:false },
    { number: 19, isSelect:false },
    { number: 20, isSelect:false }, 
  ];
    setDataArray(tempArr);
  }

  const errorSound = () => {
    playSound('try_again.mp3');
    
  }
  const succesSound = () => {
    playSound('guess-success.mp3');
    setTimeout(() => {
      refs.viewpager.setPage(++pageIndex)
    }, 2000)

  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor:Color.white , borderWidth:selectedIndex==index ? 1:0 ,borderRadius:10}} onPress={() => {
      setSelectedIndex(index);
       txtToSpeak(item.speechValue)
    }}>
      <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: Color.white, textAlign: 'center',margin: responsiveHeight(1.5) }}>{item.label}</Text>
    </TouchableOpacity>
  );
  
  renderListNumber = ({ item, index }) => (
    <TouchableOpacity style={{width: responsiveWidth(13), borderWidth: selectNumberIndex==index ?3:1, borderRadius: 5, borderColor: selectNumberIndex==index ? Color.white : Color.borderColor, height: responsiveWidth(10), color: Color.darkText, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginTop:5 }} onPress={() => {
      setSelectNumberIndex(index);
      selectedNumber=item.number;
    if(tag=='add')
    getDynamicTableAdd();
    else if(tag=='sub')
    getDynamicTableSub();
    else if(tag=='mul')
    getDynamicTableMul();
    else if(tag=='div')
    getDynamicTableDiv();
    }}>
      <Text style={{ color: Color.white, fontSize: CustomFont.font16, fontWeight: 'bold' }}>{item.number}</Text>
    </TouchableOpacity>
  );
  const Refresh = () => {
    Orientation.lockToPortrait();
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',backgroundColor:headerColor,marginLeft:15,borderRadius:7,height:responsiveHeight(5) }} onPress={()=>{
          playSound('click.mp3');
          props.navigation.goBack()
        }}>
          <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF',marginLeft:responsiveWidth(4),marginRight:responsiveWidth(4),marginTop:7,marginBottom:7  }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:headerColor,height:responsiveHeight(6),borderRadius:7}} onPress={() => props.navigation.navigate('MaxMin',{item: {tag:tag} })}>
            
            <Text style={{ fontSize: CustomFont.font20, fontWeight: 'bold', color: '#FFF', marginLeft: 30, textAlign:'center',marginRight:30 }}>Game</Text>
            </TouchableOpacity>
            
          <OptionMenu />


        </View>
        <View style={{ flex: 10,flexDirection:'row', marginTop:10 }}>
          <View style={{flex:1,alignItems:'center'}}>
          <FlatList
            //numColumns={3}
            style={{marginLeft: 7 }}
            data={numberArr}
            renderItem={renderListNumber}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false} />
          </View>
          <View style={{flex:5, margin:7,borderRadius:10}}>
          <FlatList
            //numColumns={3}
            style={{ marginRight: 20,marginLeft: 20 }}
            data={dataArray}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false} />
            
          </View>
          <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(40), right: 0 }} onPress={() => props.navigation.navigate('MaxMin',{item: {tag:tag} })}>
                <Image source={arrowRight} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 5 }} />
              </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
      </SafeAreaView>
    );
}
export default AddSubMulDivChooser;
