import {useEffect,useRef,useState} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList,Spokestack, SafeAreaView } from 'react-native';

import Orientation from 'react-native-orientation';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
let itemHome=null,from='cap';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import Snackbar from 'react-native-snackbar';
let counter=0;
var sliderTimer = null;
const AlphabetsList =(props)=> {
const [dataArray,setDataArray]=useState([])
const [dataArraySarChihna,setdataArraySarChihna]=useState([{name:"আ",sarachihna: "া ",desc:"মা, বাবা, দাদা।",color:"#fe0000",kar:"অ কার"},
{name:"ই",sarachihna: " ি ",desc:"কিনি, চিনি, তিনি।",color:"#029702",kar:"ই কার"},
{name:"ঈ",sarachihna: " ী ",desc:"শশী, সীমানা, নীতি।",color:"#ff00fe",kar:"ঈ কার"},
{name:"উ",sarachihna: " ু ",desc:"কুকুর, পুকুর, দুপুর।",color:"#7430ff",kar:"উ কার"},
{name:"ঊ",sarachihna: " ূ ",desc:"ভূত, মূল্য, সূচি।",color:"#DC9900",kar:"ঊ কার"},
{name:"ঋ",sarachihna: " ৃ  ",desc:"কৃষক, তৃণ, কৃপণ।",color:"#3800fd",kar:"ঋ কার"},
{name:"এ",sarachihna: " ে ",desc:"চেয়ার, টেবিল, চেনে।",color:"#000000",kar:"এ কার"},
{name:"ঐ",sarachihna: " ৈ",desc:"তৈরি, বৈরী, নৈঋত।",color:"#0E6E01",kar:"ঐ কার"},
{name:"ও",sarachihna: " ো ",desc:"খোকা, পোকা, বোকা।",color:"#ff00fe",kar:"ও কার"},
{name:"ঔ",sarachihna: " ৌ ",desc:"নৌকা, মৌসুমি, চৌকা। ",color:"#0166fe",kar:"ঔ কার"},])
const [selectedIndex,setSelectedIndex]=useState(-1)
const [isPlayButton,setIsPlayButton]=useState(true)

useEffect(()=>{
  itemHome = props.route.params.item;
  if (itemHome) {
    if (itemHome.id == 1){
      from='cap';
      CapitalLetter();
    }else if(itemHome.id == 2){
      from='small';
      CapitalLetter();
    }else if(itemHome.id == 3){
      from='sar';
      sarbarna(); 
    }else if(itemHome.id == 4){
      from='banj';
      banjanBarna();
    }
  }
  return ()=>{
    clearInterval(sliderTimer);
    sliderTimer=null;
  }
},[])
//   constructor(props) {
//     super(props);
//     state = {
//       dataArray: [],
//       dataArraySarChihna: ,
// selectedIndex:-1,
// isPlayButton: true,

//     };
//     counter=0;
//   }
  // async componentDidMount() {
    
  // }
  const CapitalLetter = () => {
    let tempArr = [
      {alphabet: "A",color:"#fe0000",sound:'a.mp3'},
        {alphabet: "B",color:"#029702"},
        {alphabet: "C",color:"#ff00fe"},
        {alphabet: "D",color:"#7430ff"},
        {alphabet: "E",color:"#DC9900"},
        {alphabet: "F",color:"#3800fd"},
        {alphabet: "G",color:"#000000"},
        {alphabet: "H",color:"#0E6E01"},
        {alphabet: "I",color:"#ff00fe"},
        {alphabet: "J",color:"#E0220E"},
        {alphabet: "K",color:"#0166fe"},
        {alphabet: "L",color:"#b300d5"},
        {alphabet: "M",color:"#da8302"},
        {alphabet: "N",color:"#D81B60"},
        {alphabet: "O",color:"#007500"},
        {alphabet: "P",color:"#3900ff"},
        {alphabet: "Q",color:"#fe2f9c"},
        {alphabet: "R",color:"#7a2048"},
        {alphabet: "S",color:"#008000"},
        {alphabet: "T",color:"#00ce01"},
        {alphabet: "U",color:"#a96601"},
        {alphabet: "V",color:"#016565"},
        {alphabet: "W",color:"#b03069"},
        {alphabet: "X",color:"#0165ff"},
        {alphabet: "Y",color:"#002f00"},
        {alphabet: "Z",color:"#f90101"},
    ]
    setDataArray(tempArr);
  } 
  const sarbarna = () => {
    let tempArr = [
      {alphabet: "অ",color:"#fe0000",sound: "soro1.mp3",},
      {alphabet: "আ",color:"#029702",sound: "soro2.mp3",},
      {alphabet: "ই",color:"#ff00fe",sound: "soro3.mp3",},
      {alphabet: "ঈ",color:"#7430ff",sound: "soro4.mp3",},
      {alphabet: "উ",color:"#DC9900",sound: "soro5.mp3",},
      {alphabet: "ঊ",color:"#3800fd",sound: "soro6.mp3",},
      {alphabet: "ঋ",color:"#000000",sound: "soro7.mp3",},
      {alphabet: "ঌ",color:"#0E6E01",sound: "", },
      {alphabet: "এ",color:"#ff00fe",sound: "soro8.mp3",},
      {alphabet: "ঐ",color:"#E0220E",sound: "soro9.mp3",},
      {alphabet: "ও",color:"#0166fe",sound: "soro10.mp3"},
      {alphabet: "ঔ",color:"#b300d5",sound: "soro11.mp3"},
    ]
    setDataArray(tempArr);
  } 
  const banjanBarna = () => {
    let tempArr = [
      {alphabet: "ক",color:"#fe0000", sound: "b1.amr", },
        {alphabet: "খ",color:"#029702", sound: "b2.amr", },
        {alphabet: "গ",color:"#ff00fe", sound: "b3.amr", },
        {alphabet: "ঘ",color:"#7430ff", sound: "b4.amr", },
        {alphabet: "ঙ",color:"#DC9900", sound: "b5.amr", },
        {alphabet: "চ",color:"#3800fd", sound: "b6.amr", },
        {alphabet: "ছ",color:"#000000", sound: "b7.amr", },
        {alphabet: "জ",color:"#0E6E01", sound: "b8.amr", },
        {alphabet: "ঝ",color:"#ff00fe", sound: "b9.amr", },
        {alphabet: "ঞ",color:"#E0220E", sound: "b10.amr",},
        {alphabet: "ট",color:"#0166fe", sound: "b11.amr",},
        {alphabet: "ঠ",color:"#b300d5", sound: "b12.amr",},
        {alphabet: "ড",color:"#da8302", sound: "b13.amr",},
        {alphabet: "ঢ",color:"#D81B60", sound: "b14.amr",},
        {alphabet: "ণ",color:"#007500", sound: "b15.amr",},
        {alphabet: "ত",color:"#3900ff", sound: "b16.amr",},
        {alphabet: "থ",color:"#fe2f9c", sound: "b17.amr",},
        {alphabet: "দ",color:"#7a2048", sound: "b18.amr",},
        {alphabet: "ধ",color:"#008000", sound: "b19.amr",},
        {alphabet: "ন",color:"#00ce01", sound: "b20.amr",},
        {alphabet: "প",color:"#a96601", sound: "b21.amr",},
        {alphabet: "ফ",color:"#016565", sound: "b22.amr",},
        {alphabet: "ব",color:"#b03069", sound: "b23.amr",},
        {alphabet: "ভ",color:"#0165ff", sound: "b24.amr",},
        {alphabet: "ম",color:"#002f00", sound: "b25.amr",},
        {alphabet: "য",color:"#f90101", sound: "b26.amr",},
        {alphabet: "র",color:"#fe0000", sound: "b27.amr",},
        {alphabet: "ল",color:"#029702", sound: "b28.amr",},
        {alphabet: "শ",color:"#ff00fe", sound: "b29.amr",},
        {alphabet: "ষ",color:"#7430ff", sound: "b30.amr",},
        {alphabet: "স",color:"#DC9900", sound: "b31.amr",},
        {alphabet: "হ",color:"#3800fd", sound: "b32.amr",},
        {alphabet: "ড়",color:"#000000", sound: "b33.amr",},
        {alphabet: "ঢ়",color:"#0E6E01", sound: "b34.amr",},
        {alphabet: "য়",color:"#ff00fe", sound: "b35.amr",},
        {alphabet: "ৎ",color:"#E0220E", sound: "",},
    ]
    setDataArray(tempArr);
  }
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center',height:responsiveHeight(11),maxWidth:responsiveWidth(25),backgroundColor: selectedIndex == index ? '#ff99cc':null,borderRadius:10  }} onPress={() => {
     
        if(IsSoundEnabled)
    clickSound();
        props.navigation.navigate('AlphabetsDetails', { item: itemHome,Refresh:Refresh,from:from,index:index});
        clearInterval(sliderTimer);
        sliderTimer=null;
        setIsPlayButton(true);
        setSelectedIndex(-1);
    }}>
      <Text style={{ fontSize: CustomFont.font40, color: item.color,fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici' }}> {from=='small' ?item.alphabet.toLowerCase():item.alphabet} </Text>
    </TouchableOpacity>
  );
  renderListSar = ({ item, index }) => (
    <TouchableOpacity style={{flex:1, alignItems: 'center',flexDirection:'row',justifyContent:'space-between',marginTop:3,backgroundColor:'#FFF'  }} onPress={() => {
      txtToSpeak(item.kar+'');
    }}>
      <View  style={{ alignItems: 'center',flexDirection:'row',marginLeft:7 }}>
      <Text style={{ fontSize: CustomFont.font30, color: item.color,fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici',marginTop:5,marginBottom:5  }}>{item.name} </Text>
      <Text style={{ fontSize: CustomFont.font16, color: item.color }}> -কার</Text>
      <Text style={{ fontSize: CustomFont.font30, color: item.color,fontWeight: 'bold',marginLeft:responsiveWidth(5) }}>{item.sarachihna} </Text>
      </View>
      <Text style={{ fontSize: CustomFont.font20, color: item.color,fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici',marginRight:7  }}>{item.desc} </Text>
    </TouchableOpacity>
  );
  const Refresh=()=>{
    Orientation.lockToPortrait();
  }
  const playAlphabets=()=>{
      if(sliderTimer)
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
      counter++;

      if(counter <dataArray.length){
        setSelectedIndex(counter);
      if (itemHome.id == 1 || itemHome.id == 2){
        playSound(dataArray[counter].alphabet.toLowerCase()+'.mp3')
      }else{
        playSound(dataArray[counter].sound);
      }
    }else{
      clearInterval(sliderTimer);
      sliderTimer=null;
    }
    console.log('-----'+counter);
    }, 2500);
      
    
  }
  // componentWillUnmount(){
  //   clearInterval(sliderTimer);
  //     sliderTimer=null;
  // }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={props.route.params.item.name} showImage={isPlayButton ? require('../../assets/play.png') : require('../../assets/pause2.png')} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
         props.navigation.goBack()
      }}  isClickOnImage={()=>{
        if(isPlayButton){
          counter=-1;
          Snackbar.show({ text: 'Please Wait..', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
          playAlphabets();
        }else{
          clearInterval(sliderTimer);
          sliderTimer=null;
        }
        setIsPlayButton(!isPlayButton);
        setSelectedIndex(-1);
        
      }}/>
       

        <View style={{ flex: 10,backgroundColor: Color.white }}>
          {dataArray && dataArray.length>0 ? <FlatList
            numColumns={4}
            style={{ marginTop: 10,minHeight:responsiveHeight(32),marginLeft:3,marginRight:3 }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> :null}
             {itemHome && itemHome.id == 3 ? <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: '#ff00fe',fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici',textAlign:'center',marginTop:5  }}>: স্বরচিহ্ন :</Text>:null}
            {itemHome && itemHome.id == 3 ? <FlatList
            style={{ marginTop: 10,backgroundColor:'#f7f7f7' }}
            data={dataArraySarChihna}
            renderItem={renderListSar}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> :null}
            {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}

        </View>

      </SafeAreaView>
    );
}
export default AlphabetsList;
