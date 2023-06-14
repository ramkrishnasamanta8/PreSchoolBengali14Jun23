import  React,{useEffect,useRef,useState} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList, BackHandler, ImageBackground } from 'react-native';

import Orientation from 'react-native-orientation';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import bgImage from '../../assets/bg.png';
import back from '../../assets/back.png';
import slate from '../../assets/slate.png';
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
let soundPosition = 0,backHandler=null;
const SrutiPathan=(props)=> {
const [pageIndex,setpageIndex] =useState(0);
const [dataArray,setdataArray] =useState(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',]);
const [answerTxt,setanswerTxt] =useState('');
const [imageStatus,setimageStatus] =useState(null);
const [isBtnDisable,setisBtnDisable] =useState(false);
const [clickIndex,setclickIndex] =useState(-1);
const viewpager = useRef(null);
useEffect(()=>{
  let item = props.route.params.item;
  let tag = item.tag;
  //alert(JSON.stringify(tag))
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
  //     dataArray: ,
  //     answerTxt: '',
  //     imageStatus: null,
  //     isBtnDisable: false,
  //     clickIndex: -1
  //   };

  // }
  // async componentDidMount() {
    
  //   backHandler = BackHandler.addEventListener('hardwareBackPress', () =>{
  //     // if(!isBtnDisable)
  //     // props.navigation.goBack();
  //     return true;
  //   } )
  // }
  // componentWillUnmount(){
  //   backHandler.remove()
  // }
  const abc = () => {
    let tempArr = [
      { sound: 'a.mp3', txtColor: "#FFE5EB", type: 'sound', ans: 'A', question: ['B', 'A', 'C', 'G', 'J', 'K', 'O', 'L', 'M',], },
      { sound: 'b.mp3', txtColor: "#c1d8c1", type: 'sound', ans: 'B', question: ['A', 'W', 'Q', 'X', 'B', 'D', 'Z', 'P', 'C',], },
      { sound: 'c.mp3', txtColor: "#ff00fe", type: 'sound', ans: 'C', question: ['Z', 'M', 'U', 'K', 'J', 'R', 'X', 'C', 'Y',], },
      { sound: 'd.mp3', txtColor: "#eab2e9", type: 'sound', ans: 'D', question: ['C', 'F', 'L', 'H', 'N', 'D', 'O', 'A', 'V',], },
      { sound: 'e.mp3', txtColor: "#DC9900", type: 'sound', ans: 'E', question: ['G', 'T', 'Y', 'X', 'E', 'Q', 'K', 'U', 'N',], },
      { sound: 'f.mp3', txtColor: "#d6c9ab", type: 'sound', ans: 'F', question: ['W', 'S', 'D', 'L', '', 'F', 'G', 'E', 'O',], },
      { sound: 'g.mp3', txtColor: "#b2adad", type: 'sound', ans: 'G', question: ['K', 'M', 'G', 'N', 'B', 'H', 'A', 'W', 'J',], },
      { sound: 'h.mp3', txtColor: "#aebfab", type: 'sound', ans: 'H', question: ['T', 'G', 'F', 'D', 'S', 'H', 'V', 'Z', 'U',], },
      { sound: 'i.mp3', txtColor: "#e3c4e3", type: 'sound', ans: 'I', question: ['K', 'I', 'P', 'X', 'W', 'R', 'H', 'Z', 'T',], },
      { sound: 'j.mp3', txtColor: "#e7aaa3", type: 'sound', ans: 'J', question: ['Q', 'E', 'Y', 'F', 'X', 'J', 'I', 'N', '',], },
      { sound: 'k.mp3', txtColor: "#bacdea", type: 'sound', ans: 'K', question: ['R', 'U', 'K', 'C', 'D', 'G', 'L', 'W', '',], },
      { sound: 'l.mp3', txtColor: "#c49dcc", type: 'sound', ans: 'L', question: ['A', 'S', 'H', 'J', 'P', 'B', 'G', 'M', 'L',], },
      { sound: 'm.mp3', txtColor: "#da8302", type: 'sound', ans: 'M', question: ['N', 'G', 'J', 'O', 'M', 'F', 'R', 'T', 'K',], },
      { sound: 'n.mp3', txtColor: "#e1cbaa", type: 'sound', ans: 'N', question: ['N', 'Y', 'I', 'P', 'A', 'D', 'G', 'M', 'Z',], },
      { sound: 'o.mp3', txtColor: "#afc3af", type: 'sound', ans: 'O', question: ['K', 'H', 'O', 'J', 'C', 'P', 'E', 'X', 'L',], },
      { sound: 'p.mp3', txtColor: "#b6aadd", type: 'sound', ans: 'P', question: ['L', 'N', 'Q', 'Y', 'W', 'S', 'B', 'P', 'U',], },
      { sound: 'q.mp3', txtColor: "#ddb7cb", type: 'sound', ans: 'Q', question: ['E', 'R', 'N', 'D', 'Y', 'Q', 'L', 'C', 'Z',], },
      { sound: 'r.mp3', txtColor: "#dbabc0", type: 'sound', ans: 'R', question: ['T', 'R', 'G', 'B', 'K', 'I', 'J', 'N', 'X',], },
      { sound: 's.mp3', txtColor: "#aec9ae", type: 'sound', ans: 'S', question: ['V', 'M', 'H', 'U', 'S', 'L', 'A', 'R', 'M',], },
      { sound: 't.mp3', txtColor: "#aac3aa", type: 'sound', ans: 'T', question: ['W', 'Y', 'K', 'H', 'J', 'N', 'Q', 'E', 'T',], },
      { sound: 'u.mp3', txtColor: "#dbc5a5", type: 'sound', ans: 'U', question: ['S', 'V', 'B', 'O', 'L', 'I', 'U', 'Z', 'Y',], },
      { sound: 'v.mp3', txtColor: "#a4c9c9", type: 'sound', ans: 'V', question: ['M', 'P', 'G', 'V', 'B', 'K', 'U', 'X', 'R',], },
      { sound: 'w.mp3', txtColor: "#fba4cb", type: 'sound', ans: 'W', question: ['A', 'J', 'W', 'O', 'Z', 'P', 'N', 'S', 'G',], },
      { sound: 'x.mp3', txtColor: "#aac0e1", type: 'sound', ans: 'X', question: ['Y', 'X', 'P', 'K', 'L', 'M', 'T', 'V', 'Z',], },
      { sound: 'y.mp3', txtColor: "#9dd49d", type: 'sound', ans: 'Y', question: ['T', 'H', 'P', 'X', 'Y', 'J', 'G', 'E', 'A',], },
      { sound: 'z.mp3', txtColor: "#dda5a5", type: 'sound', ans: 'Z', question: ['F', 'J', 'T', 'W', 'R', 'U', 'S', 'K', 'Z',], },

    ]
    setdataArray(tempArr);
  }
  const sar = () => {
    let tempArr = [
      { sound: 'sar1.amr', txtColor: "#FFE5EB", type: 'sound', ans: 'অ', question: ['আ', 'উ', 'ঋ', 'ঈ', 'ঊ', 'অ', 'ঔ', 'ই', 'ও',], },
      { sound: 'sar2.amr', txtColor: "#c1d8c1", type: 'sound', ans: 'আ', question: ['উ', 'অ', 'ই', 'আ', 'ঋ', 'ঔ', 'ঌ', 'ঊ', 'এ',], },
      { sound: 'sar3.amr', txtColor: "#ff00fe", type: 'sound', ans: 'ই', question: ['ঌ', 'আ', 'উ', 'ঔ', 'এ', 'ই', 'ও', 'ঋ', 'ঐ',], },
      { sound: 'sar4.amr', txtColor: "#eab2e9", type: 'sound', ans: 'ঈ', question: ['অ', 'এ', 'ঈ', 'ও', 'ঐ', 'আ', 'ঔ', 'ঌ', 'ই',], },
      { sound: 'sar5.amr', txtColor: "#DC9900", type: 'sound', ans: 'উ', question: ['ঋ', 'আ', 'ঔ', 'ঌ', 'উ', 'ই', 'ও', 'ঊ', 'ঈ',], },
      { sound: 'sar6.amr', txtColor: "#d6c9ab", type: 'sound', ans: 'ঊ', question: ['আ', 'ঌ', 'উ', 'অ', 'ও', 'ঐ', 'ঈ', 'এ', 'ঊ',], },
      { sound: 'sar7.amr', txtColor: "#b2adad", type: 'sound', ans: 'ঋ', question: ['ঈ', 'এ', 'ঋ', 'আ', 'ঔ', 'ই', 'ঌ', 'উ', 'ও',], },
      { sound: 'sar8.amr', txtColor: "#aebfab", type: 'sound', ans: 'ঌ', question: ['ঐ', 'আ', 'ঌ', 'ঔ', 'অ', 'এ', 'ঋ', 'ও', 'ঈ',], },
      { sound: 'sar9.amr', txtColor: "#e3c4e3", type: 'sound', ans: 'ঐ', question: ['ই', 'ঐ', 'ঊ', 'ও', 'ঋ', 'ঔ', 'আ', 'ঌ', 'এ',], },
      { sound: 'sar10.amr', txtColor: "#e7aaa3", type: 'sound', ans: 'ঐ', question: ['ঐ', 'ঔ', 'ঋ', 'এ', 'ঊ', 'ও', 'ঌ', 'ঈ', 'অ',], },
      { sound: 'sar11.amr', txtColor: "#bacdea", type: 'sound', ans: 'ও', question: ['আ', 'উ', 'ও', 'ঐ', 'অ', 'ই', 'ঊ', 'ঌ', 'ঋ',], },

    ]
    setdataArray(tempArr);
  }
  const banjan = () => {
    let tempArr = [
      { sound: 'ban1.amr', txtColor: "#FFE5EB", type: 'sound', ans: 'ক', question: ['ঘ', 'চ', 'খ', 'ঞ', 'ক', 'গ', 'জ', 'ঠ', 'ঝ',], },
      { sound: 'ban2.amr', txtColor: "#c1d8c1", type: 'sound', ans: 'খ', question: ['ক', 'জ', 'ঘ', 'খ', 'ঞ', 'ট', 'চ', 'ত', 'ণ',], },
      { sound: 'ban3.amr', txtColor: "#ff00fe", type: 'sound', ans: 'গ', question: ['খ', 'ট', 'জ', 'ক', 'ঞ', 'ঘ', 'চ', 'গ', 'ন',], },
      { sound: 'ban4.amr', txtColor: "#eab2e9", type: 'sound', ans: 'ঘ', question: ['ক', 'গ', 'ঘ', 'চ', 'জ', 'ণ', 'ঝ', 'ঞ', 'ট',], },
      { sound: 'ban5.amr', txtColor: "#DC9900", type: 'sound', ans: 'ঙ', question: ['জ', 'ট', 'ঘ', 'ঠ', 'ন', 'চ', 'ঙ', 'ক', 'ঝ',], },
      { sound: 'ban6.amr', txtColor: "#d6c9ab", type: 'sound', ans: 'চ', question: ['ছ', 'ঘ', 'ঞ', 'ক', 'জ', 'চ', 'ণ', 'ত', 'দ',], },
      { sound: 'ban7.amr', txtColor: "#b2adad", type: 'sound', ans: 'ছ', question: ['ঞ', 'থ', 'ছ', 'ন', 'ঠ', 'ঙ', 'গ', 'চ', 'ঝ',], },
      { sound: 'ban8.amr', txtColor: "#aebfab", type: 'sound', ans: 'জ', question: ['ঝ', 'ঠ', 'ঞ', 'গ', 'ছ', 'জ', 'দ', 'ন', 'ত',], },
      { sound: 'ban9.amr', txtColor: "#e3c4e3", type: 'sound', ans: 'ঝ', question: ['ছ', 'ক', 'ধ', 'ঝ', 'প', 'ঞ', 'ব', 'দ', 'ঢ',], },
      { sound: 'ban10.amr', txtColor: "#e7aaa3", type: 'sound', ans: 'ঞ', question: ['চ', 'ঝ', 'জ', 'খ', 'ধ', 'থ', 'ঞ', 'ঙ', 'ছ',], },
      { sound: 'ban11.amr', txtColor: "#bacdea", type: 'sound', ans: 'ট', question: ['ঠ', 'ক', 'ট', 'র', 'দ', 'ন', 'ঢ', 'থ', 'চ',], },
      { sound: 'ban12.amr', txtColor: "#c49dcc", type: 'sound', ans: 'ঠ', question: ['দ', 'জ', 'ণ', 'ধ', 'ঞ', 'ছ', 'ত', 'ঠ', 'ঢ',], },
      { sound: 'ban13.amr', txtColor: "#da8302", type: 'sound', ans: 'ড', question: ['ট', 'ন', 'প', 'ত', 'ড', 'থ', 'ঢ', 'ভ', 'ব',], },
      { sound: 'ban14.amr', txtColor: "#e1cbaa", type: 'sound', ans: 'ঢ', question: ['ঢ', 'ণ', 'ঞ', 'ম', 'থ', 'চ', 'ঙ', 'ন', 'দ',], },
      { sound: 'ban15.amr', txtColor: "#afc3af", type: 'sound', ans: 'ণ', question: ['ট', 'থ', 'ণ', 'ছ', 'ত', 'গ', 'ক', 'ধ', 'প',], },
      { sound: 'ban16.amr', txtColor: "#b6aadd", type: 'sound', ans: 'ত', question: ['থ', 'চ', 'ফ', 'ব', 'ঙ', 'ঝ', 'ণ', 'ত', 'র',], },
      { sound: 'ban17.amr', txtColor: "#ddb7cb", type: 'sound', ans: 'থ', question: ['ফ', 'ব', 'দ', 'ঢ', 'র', 'থ', 'ছ', 'জ', 'ড',], },
      { sound: 'ban18.amr', txtColor: "#dbabc0", type: 'sound', ans: 'দ', question: ['ধ', 'দ', 'থ', 'ণ', 'ত', 'ঝ', 'ঙ', 'ড', 'ন',], },
      { sound: 'ban19.amr', txtColor: "#aec9ae", type: 'sound', ans: 'ধ', question: ['প', 'ন', 'ছ', 'ঢ', 'ধ', 'ফ', 'র', 'থ', 'ব',], },
      { sound: 'ban20.amr', txtColor: "#aac3aa", type: 'sound', ans: 'ন', question: ['চ', 'ঝ', 'ভ', 'র', 'থ', 'ল', 'ড', 'প', 'ন',], },
      { sound: 'ban21.amr', txtColor: "#dbc5a5", type: 'sound', ans: 'প', question: ['ব', 'ম', 'ল', 'ভ', 'ছ', 'ন', 'প', 'ঞ', 'দ',], },
      { sound: 'ban22.amr', txtColor: "#a4c9c9", type: 'sound', ans: 'ফ', question: ['ম', 'ল', 'ভ', 'ফ', 'দ', 'ছ', 'চ', 'প', 'ড',], },
      { sound: 'ban23.amr', txtColor: "#fba4cb", type: 'sound', ans: 'ব', question: ['ভ', 'চ', 'ব', 'ত', 'ফ', 'ড', 'ঙ', 'ধ', 'ট',], },
      { sound: 'ban24.amr', txtColor: "#fba4cb", type: 'sound', ans: 'ভ', question: ['ফ', 'ভ', 'প', 'ধ', 'ফ', 'ঠ', 'ঢ', 'ঞ', 'দ',], },
      { sound: 'ban25.amr', txtColor: "#fba4cb", type: 'sound', ans: 'ম', question: ['ল', 'থ', 'র', 'ট', 'ম', 'দ', 'ঙ', 'প', 'ন',], },
      { sound: 'ban26.amr', txtColor: "#fba4cb", type: 'sound', ans: 'য', question: ['র', 'শ', 'ঠ', 'ফ', 'ড', 'ছ', 'ণ', 'ল', 'য',], },
      { sound: 'ban27.amr', txtColor: "#fba4cb", type: 'sound', ans: 'র', question: ['শ', 'প', 'ভ', 'র', 'ছ', 'ব', 'ঞ', 'ন', 'ল',], },
      { sound: 'ban28.amr', txtColor: "#fba4cb", type: 'sound', ans: 'ল', question: ['ম', 'ফ', 'ল', 'দ', 'শ', 'চ', 'ধ', 'র', 'থ',], },
      { sound: 'ban29.amr', txtColor: "#fba4cb", type: 'sound', ans: 'শ', question: ['র', 'শ', 'ড', 'ষ', 'ঙ', 'প', 'ট', 'ন', 'ফ',], },
      { sound: 'ban30.amr', txtColor: "#fba4cb", type: 'sound', ans: 'ষ', question: ['শ', 'ঢ', 'প', 'ল', 'ষ', 'ণ', 'দ', 'ঞ', 'ত',], },

    ]
    setdataArray(tempArr);
  }
 const number = () => {
    let tempArr = [
      { sound: "zero", txtColor: "#FFE5EB", type: 'txt', ans: '0', question: ['2', '0', '3', '7', '5', '1', '4', '8', '6',], },
      { sound: "one", txtColor: "#c1d8c1", type: 'txt', ans: '1', question: ['3', '7', '4', '8', '5', '1', '2', '6', '9',], },
      { sound: "two", txtColor: "#ff00fe", type: 'txt', ans: '2', question: ['4', '1', '5', '7', '3', '8', '6', '2', '0',], },
      { sound: "three", txtColor: "#eab2e9", type: 'txt', ans: '3', question: ['1', '4', '6', '9', '8', '3', '7', '11', '5',], },
      { sound: "four", txtColor: "#DC9900", type: 'txt', ans: '4', question: ['5', '7', '3', '10', '4', '9', '8', '12', '2',], },
      { sound: "five", txtColor: "#d6c9ab", type: 'txt', ans: '5', question: ['6', '11', '8', '3', '7', '5', '9', '1', '',], },
      { sound: "six", txtColor: "#b2adad", type: 'txt', ans: '6', question: ['2', '4', '6', '8', '16', '7', '11', '5', '9',], },
      { sound: "seven", txtColor: "#aebfab", type: 'txt', ans: '7', question: ['8', '3', '1', '9', '12', '7', '14', '4', '2',], },
      { sound: "eight", txtColor: "#e3c4e3", type: 'txt', ans: '8', question: ['11', '8', '6', '3', '9', '15', '7', '16', '13',], },
      { sound: "nine", txtColor: "#e7aaa3", type: 'txt', ans: '9', question: ['10', '17', '13', '4', '7', '9', '1', '19', '16',], },
      { sound: "ten", txtColor: "#bacdea", type: 'txt', ans: '10', question: ['12', '15', '10', '8', '19', '9', '17', '11', '6',], },
      { sound: "eleven", txtColor: "#c49dcc", type: 'txt', ans: '11', question: ['9', '14', '10', '18', '7', '12', '16', '5', '11',], },
      { sound: "twelve", txtColor: "#da8302", type: 'txt', ans: '12', question: ['10', '14', '11', '9', '12', '16', '19', '21', '17',], },
      { sound: "thirteen", txtColor: "#e1cbaa", type: 'txt', ans: '13', question: ['13', '10', '14', '18', '22', '16', '11', '19', '17',], },
      { sound: "fourteen", txtColor: "#afc3af", type: 'txt', ans: '14', question: ['12', '16', '14', '22', '15', '13', '20', '18', '11',], },
      { sound: "fifteen", txtColor: "#b6aadd", type: 'txt', ans: '15', question: ['14', '17', '20', '25', '19', '18', '13', '15', '21',], },
      { sound: "sixteen", txtColor: "#ddb7cb", type: 'txt', ans: '16', question: ['10', '18', '15', '19', '17', '16', '22', '12', '20',], },
      { sound: "seventeen", txtColor: "#dbabc0", type: 'txt', ans: '17', question: ['15', '17', '19', '22', '14', '12', '18', '20', '11',], },
      { sound: "eighteen", txtColor: "#aec9ae", type: 'txt', ans: '18', question: ['11', '16', '20', '19', '18', '21', '14', '25', '17',], },
      { sound: "nineteen", txtColor: "#aac3aa", type: 'txt', ans: '19', question: ['10', '22', '16', '11', '14', '18', '15', '21', '19',], },
      { sound: "twenty", txtColor: "#dbc5a5", type: 'txt', ans: '20', question: ['19', '17', '15', '13', '22', '27', '20', '29', '24',], },
      { sound: "twenty one", txtColor: "#a4c9c9", type: 'txt', ans: '21', question: ['22', '19', '25', '21', '18', '20', '16', '23', '26',], },
      { sound: "twenty two", txtColor: "#fba4cb", type: 'txt', ans: '22', question: ['20', '19', '22', '17', '24', '18', '26', '15', '25',], },
      { sound: "twenty three", txtColor: "#aac0e1", type: 'txt', ans: '23', question: ['19', '23', '20', '28', '22', '29', '18', '25', '27',], },
      { sound: "twenty four", txtColor: "#9dd49d", type: 'txt', ans: '24', question: ['22', '27', '26', '20', '24', '25', '29', '21', '19',], },
      { sound: "twenty five", txtColor: "#dda5a5", type: 'txt', ans: '25', question: ['20', '29', '27', '24', '18', '22', '26', '28', '25',], },
      { sound: "twenty six", txtColor: "#dda5a5", type: 'txt', ans: '26', question: ['23', '19', '20', '26', '17', '28', '24', '29', '16',], },
      { sound: "twenty seven", txtColor: "#dda5a5", type: 'txt', ans: '27', question: ['27', '22', '29', '25', '23', '26', '28', '21', '19',], },
      { sound: "twenty eight", txtColor: "#dda5a5", type: 'txt', ans: '28', question: ['24', '28', '22', '25', '29', '27', '26', '20', '23',], },
      { sound: "twenty nine", txtColor: "#dda5a5", type: 'txt', ans: '29', question: ['28', '26', '20', '22', '25', '27', '29', '21', '24',], },
      { sound: "thirty", txtColor: "#dda5a5", type: 'txt', ans: '30', question: ['24', '29', '21', '25', '28', '26', '22', '23', '30',], },

    ]
    setdataArray(tempArr);
  }
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: '#90eec3', borderRadius: 10, borderColor: clickIndex == index ? imageStatus == 'right' ? 'green' : imageStatus == 'wrong' ? 'red' : '#003334' : '#003334', borderWidth: 2, marginRight: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), }} onPress={() => {
      setanswerTxt(item);
      if (dataArray[position].ans == item) {
        playSound('win.mp3');
        setimageStatus('right');
        setisBtnDisable(true);
        setTimeout(() => {
          if (pageIndex < dataArray.length - 1)
            viewpager.current.setPage(++position)
          else
            props.navigation.navigate('CommonMessage', { howmanyback: 2 })
        }, 2200)
      } else {
        playSound('wrong.mp3')
        setimageStatus('wrong');
      }
      setclickIndex(index);
    }} disabled={isBtnDisable}>
      <Text style={{ color: clickIndex == index && imageStatus == 'right' ? 'green' : Color.darkBlue, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', marginLeft: responsiveWidth(4), marginRight: responsiveWidth(4), marginTop: 10, marginBottom: 10 }}> {item} </Text>
    </TouchableOpacity>
  );
  
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <ViewPager style={{ flex: 1 }} initialPage={pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          setpageIndex(position);
          setimageStatus(null);
          setanswerTxt('');
          setisBtnDisable(false);
          
          if (dataArray[position].type == 'txt') {
            txtToSpeak(dataArray[position].sound);
          } else {
            playSound(dataArray[position].sound);
          }
          setclickIndex(-1);
        }} setPage={pageIndex} ref={viewpager}>

          {dataArray.map((item, index) => {
            return (
              <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <ImageBackground source={slate} resizeMode="contain" style={{ height: responsiveHeight(40), width: responsiveWidth(80), alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(5) }}>
                    <Text style={{ color: Color.white, fontSize: CustomFont.font45, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', marginTop: responsiveHeight(-1.8) }}> {answerTxt} </Text>
                    {imageStatus ? <Image source={imageStatus == 'right' ? tick : close_white} style={{ position: 'absolute', height: responsiveFontSize(9), width: responsiveFontSize(9), resizeMode: 'contain', marginRight: responsiveWidth(3), marginTop: -5, tintColor: imageStatus == 'right' ? '#90eec3' : 'red' }} /> : null}
                  </ImageBackground>
                  {imageStatus && imageStatus == 'right' ? <Image source={success} style={{ height: responsiveFontSize(12), width: responsiveFontSize(12), resizeMode: 'contain', marginTop: responsiveHeight(-5), tintColor: 'green' }} /> : null}
                </View>
                <View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                      playSound(dataArray[position].sound);
                    }}>
                      <Image source={loud} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain' }} />
                    </TouchableOpacity>
                  </View>

                  <FlatList
                    numColumns={3}
                    style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(4), marginLeft: 10 }}
                    data={item.question}
                    renderItem={renderList}
                    keyExtractor={(item, index) => index.toString()} />
                </View>
                {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              </ImageBackground>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, left: 7, zIndex: 99 }} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack()
        }} disabled={isBtnDisable}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
      </View>
    );
}
export default SrutiPathan;
