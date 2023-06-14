import  React,{useEffect,useState,useRef,useCallback} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, ScrollView, Platform, ImageBackground,BackHandler } from 'react-native';

import back from '../../assets/back.png';
import bgImage from '../../assets/bg.png';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0 ;
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
let tag =''
const NumberGame=(props)=> {
const [title,setTitle]=useState('')
const [dataArray,setDataArray]=useState([])
const [pageIndex,setPageIndex]=useState(0)
const [score,setScore]=useState(0);
const viewpager = useRef(null);


  // constructor(props) {
  //   super(props);
  //   state = {
  //     title: '',
  //     dataArray: [],
  //     pageIndex: 0,
  //     score:0
  //   };
  //   soundPosition = 0;
  // }
useEffect(()=>{
   tag = props.route.params.item.tag;
  if (tag) {
    if (tag == 'max')
      getMaxNumber();
    else if (tag == 'min')
      getSmallNumber();
    else if (tag == 'count')
      countNumberByPicture();
    else if (tag == 'add')
      addition();
    else if (tag == 'sub')
      subtraction();
    else if (tag == 'mul')
      multiplication();
    else if (tag == 'div')
      division();
    else if (tag == 'Test1')
      getTestData1();
    else if (tag == 'Test2')
      getTestData2();
  }

  backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    props.navigation.goBack();
    return true;
  })

},[])

  getTestData1 = () => {
    let tempArr = [
      { question: '2 + 3', ans1: "6", ans2: "5", ans3: "9", ans4: "4", correctAns: "2", },
      { question: '5 + 1', ans1: "6", ans2: "4", ans3: "5", ans4: "7", correctAns: "1", },
      { question: '8 + 2', ans1: "16", ans2: "12", ans3: "10", ans4: "14", correctAns: "3", },
      { question: '10 + 9', ans1: "19", ans2: "15", ans3: "13", ans4: "16", correctAns: "1", },
      { question: '2 + 2', ans1: "2", ans2: "4", ans3: "8", ans4: "9", correctAns: "2", },
      { question: '4 × 3', ans1: "13", ans2: "12", ans3: "15", ans4: "16", correctAns: "2", },
      { question: '9 × 2 ', ans1: "17", ans2: "15", ans3: "16", ans4: "18", correctAns: "4", },
      { question: '13 × 3', ans1: "20", ans2: "19", ans3: "18", ans4: "21", correctAns: "2", },
      { question: '6 × 4 ', ans1: "25", ans2: "23", ans3: "24", ans4: "26", correctAns: "3", },
      { question: '8 × 2', ans1: "12", ans2: "16", ans3: "17", ans4: "19", correctAns: "2", },
      { question: '3 × 9 ', ans1: "25", ans2: "24", ans3: "27", ans4: "26", correctAns: "3", },
      { question: '21 ÷ 7 ', ans1: "3", ans2: "5", ans3: "6", ans4: "7", correctAns: "1", },
      { question: '11 × 3', ans1: "44", ans2: "22", ans3: "55", ans4: "33", correctAns: "4", },
      { question: '3 × 2 ', ans1: "6", ans2: "7", ans3: "9", ans4: "8", correctAns: "1", },
      { question: '5 × 5', ans1: "25", ans2: "24", ans3: "27", ans4: "28", correctAns: "1", },
      { question: '12 × 3 ', ans1: "36", ans2: "32", ans3: "37", ans4: "39", correctAns: "1", },
      { question: '6 - 4 ', ans1: "3", ans2: "2", ans3: "6", ans4: "5", correctAns: "2", },
      { question: '6 + 2', ans1: "6", ans2: "5", ans3: "7", ans4: "8", correctAns: "4", },
      { question: '9 + 4', ans1: "12", ans2: "14", ans3: "13", ans4: "16", correctAns: "3", },
      { question: '15 ÷ 5 ', ans1: "2", ans2: "3", ans3: "4", ans4: "6", correctAns: "2", },
      { question: '8 × 3', ans1: "24", ans2: "17", ans3: "22", ans4: "19", correctAns: "1", },
      { question: '2 × 2 ', ans1: "5", ans2: "4", ans3: "3", ans4: "6", correctAns: "2", },
      { question: '9 × 1', ans1: "8", ans2: "7", ans3: "6", ans4: "9", correctAns: "4", },
      { question: '4 × 2', ans1: "8", ans2: "7", ans3: "5", ans4: "6", correctAns: "1", },
      { question: '10 ÷ 5 ', ans1: "5", ans2: "4", ans3: "3", ans4: "2", correctAns: "4", },
    ];
    setDataArray(tempArr)
  }
  getTestData2 = () => {
    let tempArr = [
      
      { question: '24 ÷ 2 ', ans1: "12", ans2: "17", ans3: "13", ans4: "14", correctAns: "1", },
      { question: '20 ÷ 2 ', ans1: "7", ans2: "9", ans3: "8", ans4: "10", correctAns: "4", },
      { question: '12 × 2 ', ans1: "25", ans2: "22", ans3: "24", ans4: "23", correctAns: "3", },
      { question: '7 × 3', ans1: "20", ans2: "22", ans3: "23", ans4: "21", correctAns: "4", },
      { question: '10 × 5 ', ans1: "50", ans2: "52", ans3: "55", ans4: "56", correctAns: "1", },
      { question: '10 × 2', ans1: "10", ans2: "30", ans3: "20", ans4: "40", correctAns: "3", },
      { question: '7 + 4', ans1: "10", ans2: "12", ans3: "13", ans4: "11", correctAns: "4", },
      { question: '2 - 1 ', ans1: "2", ans2: "1", ans3: "3", ans4: "4", correctAns: "2", },
      { question: '9 - 2  ', ans1: "7", ans2: "6", ans3: "5", ans4: "8", correctAns: "1", },
      { question: '12 + 2', ans1: "10", ans2: "12", ans3: "15", ans4: "14", correctAns: "4", },
      { question: '3 - 1 ', ans1: "1", ans2: "2", ans3: "4", ans4: "5", correctAns: "2", },
      { question: '12 - 2 ', ans1: "11", ans2: "12", ans3: "13", ans4: "10", correctAns: "4", },
      { question: '9 - 5 ', ans1: "6", ans2: "7", ans3: "4", ans4: "5", correctAns: "3", },
      { question: '4 - 2 ', ans1: "3", ans2: "2", ans3: "4", ans4: "6", correctAns: "2", },
      { question: '7 - 4 ', ans1: "6", ans2: "2", ans3: "5", ans4: "3", correctAns: "4", },
      { question: '11 - 5 ', ans1: "5", ans2: "7", ans3: "6", ans4: "4", correctAns: "3", },
      { question: '6 + 5', ans1: "9", ans2: "11", ans3: "13", ans4: "15", correctAns: "2", },
      { question: '7 - 3 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "3", },
      { question: '2 ÷ 1 ', ans1: "1", ans2: "3", ans3: "4", ans4: "2", correctAns: "4", },
      { question: '12 ÷ 3 ', ans1: "2", ans2: "4", ans3: "5", ans4: "7", correctAns: "2", },
      { question: '27 ÷ 9 ', ans1: "4", ans2: "7", ans3: "3", ans4: "9", correctAns: "3", },
      { question: '14 ÷ 2 ', ans1: "7", ans2: "6", ans3: "9", ans4: "4", correctAns: "1", },
      { question: '16 ÷ 4 ', ans1: "2", ans2: "4", ans3: "7", ans4: "8", correctAns: "2", },
      { question: '6 ÷ 3 ', ans1: "5", ans2: "7", ans3: "2", ans4: "4", correctAns: "3", },
      { question: '10 ÷ 2 ', ans1: "4", ans2: "5", ans3: "7", ans4: "6", correctAns: "2", },
      { question: '10 - 5 ', ans1: "4", ans2: "3", ans3: "6", ans4: "5", correctAns: "4", },
      { question: '4 - 4 ', ans1: "0", ans2: "2", ans3: "1", ans4: "3", correctAns: "1", },
      { question: '15 - 5 ', ans1: "9", ans2: "10", ans3: "11", ans4: "12", correctAns: "2", },
      { question: '8 + 2', ans1: "6", ans2: "10", ans3: "9", ans4: "11", correctAns: "2", },
      { question: '9 + 1', ans1: "12", ans2: "11", ans3: "10", ans4: "14", correctAns: "3", },
      { question: '5 + 2', ans1: "7", ans2: "5", ans3: "9", ans4: "6", correctAns: "1", },
      { question: '3 + 3', ans1: "5", ans2: "6", ans3: "4", ans4: "7", correctAns: "2", },
      { question: '6 ÷ 2 ', ans1: "3", ans2: "2", ans3: "5", ans4: "4", correctAns: "1", },
      { question: '18 ÷ 2 ', ans1: "7", ans2: "9", ans3: "6", ans4: "8", correctAns: "2", },
      { question: '7 + 1', ans1: "6", ans2: "5", ans3: "9", ans4: "8", correctAns: "4", },
      { question: '11 + 4', ans1: "12", ans2: "15", ans3: "13", ans4: "14", correctAns: "2", },
      { question: '15 + 1', ans1: "16", ans2: "15", ans3: "12", ans4: "17", correctAns: "1", },
      { question: '4 + 2', ans1: "6", ans2: "5", ans3: "7", ans4: "9", correctAns: "1", },
      { question: '9 + 5', ans1: "17", ans2: "15", ans3: "18", ans4: "14", correctAns: "4", },

      { question: '8 - 5 ', ans1: "6", ans2: "2", ans3: "3", ans4: "5", correctAns: "3", },
      { question: '6 - 2 ', ans1: "4", ans2: "5", ans3: "6", ans4: "7", correctAns: "1", },
      { question: '16 - 3 ', ans1: "14", ans2: "12", ans3: "13", ans4: "11", correctAns: "3", },
      { question: '5 - 2 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "1", },
      { question: '14 - 3 ', ans1: "16", ans2: "12", ans3: "13", ans4: "11", correctAns: "4", },
      { question: '22 ÷ 2 ', ans1: "12", ans2: "11", ans3: "14", ans4: "13", correctAns: "2", },
      { question: '8 ÷ 2 ', ans1: "3", ans2: "7", ans3: "6", ans4: "4", correctAns: "4", },
      { question: '5 + 4', ans1: "8", ans2: "7", ans3: "9", ans4: "6", correctAns: "3", },

      { question: '5 × 2 ', ans1: "5", ans2: "12", ans3: "10", ans4: "11", correctAns: "3", },
      { question: '2 × 3', ans1: "4", ans2: "6", ans3: "8", ans4: "9", correctAns: "2", },

      { question: '9 ÷ 3 ', ans1: "2", ans2: "7", ans3: "3", ans4: "4", correctAns: "3", },
      { question: '4 ÷ 2 ', ans1: "2", ans2: "5", ans3: "3", ans4: "6", correctAns: "1", },
      { question: '8 - 6 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "2", },
      { question: '4 - 1 ', ans1: "4", ans2: "2", ans3: "3", ans4: "5", correctAns: "3", },
      { question: '8 ÷ 4 ', ans1: "3", ans2: "6", ans3: "2", ans4: "7", correctAns: "3", },
      { question: '30 ÷ 6 ', ans1: "6", ans2: "5", ans3: "3", ans4: "4", correctAns: "2", },
    ]
    setDataArray(tempArr);
  }
  getMaxNumber = () => {
    let tempArr = [{ ans1: "3", ans2: "8", ans3: "5", ans4: "2", correctAns: "2", question: 'Find Max' },
    { ans1: "5", ans2: "8", ans3: "10", ans4: "32", correctAns: "4", question: 'Find Max' },
    { ans1: "10", ans2: "19", ans3: "7", ans4: "2", correctAns: "2", question: 'Find Max' },
    { ans1: "15", ans2: "12", ans3: "18", ans4: "3", correctAns: "3", question: 'Find Max' },
    { ans1: "2", ans2: "9", ans3: "7", ans4: "3", correctAns: "2", question: 'Find Max' },
    { ans1: "11", ans2: "13", ans3: "26", ans4: "30", correctAns: "4", question: 'Find Max' },
    { ans1: "90", ans2: "30", ans3: "20", ans4: "70", correctAns: "1", question: 'Find Max' },
    { ans1: "23", ans2: "91", ans3: "40", ans4: "31", correctAns: "2", question: 'Find Max' },
    { ans1: "21", ans2: "12", ans3: "41", ans4: "35", correctAns: "3", question: 'Find Max' },
    { ans1: "16", ans2: "28", ans3: "22", ans4: "18", correctAns: "2", question: 'Find Max' },
    { ans1: "50", ans2: "66", ans3: "31", ans4: "45", correctAns: "2", question: 'Find Max' },
    { ans1: "37", ans2: "24", ans3: "17", ans4: "0", correctAns: "1", question: 'Find Max' },
    { ans1: "25", ans2: "10", ans3: "19", ans4: "30", correctAns: "4", question: 'Find Max' },
    { ans1: "13", ans2: "25", ans3: "0", ans4: "14", correctAns: "2", question: 'Find Max' },
    { ans1: "19", ans2: "1", ans3: "8", ans4: "27", correctAns: "4", question: 'Find Max' },
    { ans1: "18", ans2: "5", ans3: "6", ans4: "16", correctAns: "1", question: 'Find Max' },
    { ans1: "19", ans2: "26", ans3: "3", ans4: "17", correctAns: "2", question: 'Find Max' },
    { ans1: "16", ans2: "1", ans3: "28", ans4: "5", correctAns: "3", question: 'Find Max' },
    { ans1: "30", ans2: "27", ans3: "9", ans4: "1", correctAns: "1", question: 'Find Max' },
    { ans1: "20", ans2: "28", ans3: "47", ans4: "52", correctAns: "4", question: 'Find Max' },
    { ans1: "53", ans2: "58", ans3: "26", ans4: "15", correctAns: "2", question: 'Find Max' },
    { ans1: "60", ans2: "14", ans3: "94", ans4: "79", correctAns: "3", question: 'Find Max' },
    { ans1: "49", ans2: "82", ans3: "70", ans4: "14", correctAns: "2", question: 'Find Max' },
    { ans1: "32", ans2: "100", ans3: "55", ans4: "60", correctAns: "2", question: 'Find Max' },
    { ans1: "23", ans2: "8", ans3: "98", ans4: "46", correctAns: "3", question: 'Find Max' },
    { ans1: "63", ans2: "92", ans3: "8", ans4: "48", correctAns: "2", question: 'Find Max' },
    { ans1: "93", ans2: "44", ans3: "87", ans4: "7", correctAns: "1", question: 'Find Max' },
    { ans1: "21", ans2: "90", ans3: "62", ans4: "52", correctAns: "2", question: 'Find Max' },
    { ans1: "53", ans2: "7", ans3: "15", ans4: "64", correctAns: "4", question: 'Find Max' },
    { ans1: "90", ans2: "67", ans3: "19", ans4: "20", correctAns: "1", question: 'Find Max' },
    { ans1: "39", ans2: "1", ans3: "11", ans4: "14", correctAns: "1", question: 'Find Max' },
    { ans1: "25", ans2: "17", ans3: "10", ans4: "30", correctAns: "4", question: 'Find Max' },
    { ans1: "47", ans2: "42", ans3: "37", ans4: "25", correctAns: "1", question: 'Find Max' },
    { ans1: "16", ans2: "23", ans3: "45", ans4: "5", correctAns: "3", question: 'Find Max' },
    ]
    setDataArray(tempArr);
    txtToSpeak('Find max value among 4 numbers')
  }
  getSmallNumber = () => {
    let tempArr = [{ ans1: "3", ans2: "8", ans3: "5", ans4: "2", correctAns: "4", question: 'Find Min' },
    { ans1: "5", ans2: "8", ans3: "10", ans4: "32", correctAns: "1", question: 'Find Min' },
    { ans1: "10", ans2: "19", ans3: "7", ans4: "2", correctAns: "4", question: 'Find Min' },
    { ans1: "15", ans2: "12", ans3: "18", ans4: "3", correctAns: "4", question: 'Find Min' },
    { ans1: "2", ans2: "9", ans3: "7", ans4: "3", correctAns: "1", question: 'Find Min' },
    { ans1: "11", ans2: "13", ans3: "26", ans4: "30", correctAns: "1", question: 'Find Min' },
    { ans1: "90", ans2: "30", ans3: "20", ans4: "70", correctAns: "3", question: 'Find Min' },
    { ans1: "23", ans2: "90", ans3: "40", ans4: "31", correctAns: "1", question: 'Find Min' },
    { ans1: "21", ans2: "12", ans3: "41", ans4: "35", correctAns: "2", question: 'Find Min' },
    { ans1: "16", ans2: "28", ans3: "22", ans4: "18", correctAns: "1", question: 'Find Min' },
    { ans1: "50", ans2: "66", ans3: "31", ans4: "45", correctAns: "3", question: 'Find Min' },
    { ans1: "37", ans2: "24", ans3: "17", ans4: "0", correctAns: "4", question: 'Find Min' },
    { ans1: "25", ans2: "10", ans3: "19", ans4: "30", correctAns: "2", question: 'Find Min' },
    { ans1: "13", ans2: "25", ans3: "0", ans4: "14", correctAns: "3", question: 'Find Min' },
    { ans1: "19", ans2: "1", ans3: "8", ans4: "27", correctAns: "2", question: 'Find Min' },
    { ans1: "18", ans2: "5", ans3: "6", ans4: "16", correctAns: "2", question: 'Find Min' },
    { ans1: "19", ans2: "26", ans3: "3", ans4: "17", correctAns: "3", question: 'Find Min' },
    { ans1: "16", ans2: "1", ans3: "28", ans4: "5", correctAns: "2", question: 'Find Min' },
    { ans1: "30", ans2: "27", ans3: "9", ans4: "1", correctAns: "4", question: 'Find Min' },
    { ans1: "20", ans2: "28", ans3: "47", ans4: "52", correctAns: "1", question: 'Find Min' },
    { ans1: "58", ans2: "53", ans3: "26", ans4: "15", correctAns: "4", question: 'Find Min' },
    { ans1: "60", ans2: "14", ans3: "94", ans4: "79", correctAns: "2", question: 'Find Min' },
    { ans1: "49", ans2: "17", ans3: "70", ans4: "14", correctAns: "4", question: 'Find Min' },
    { ans1: "32", ans2: "100", ans3: "55", ans4: "60", correctAns: "1", question: 'Find Min' },
    { ans1: "23", ans2: "8", ans3: "98", ans4: "46", correctAns: "2", question: 'Find Min' },
    { ans1: "63", ans2: "92", ans3: "8", ans4: "48", correctAns: "3", question: 'Find Min' },
    { ans1: "93", ans2: "44", ans3: "87", ans4: "7", correctAns: "4", question: 'Find Min' },
    { ans1: "21", ans2: "90", ans3: "62", ans4: "52", correctAns: "1", question: 'Find Min' },
    { ans1: "53", ans2: "7", ans3: "15", ans4: "64", correctAns: "2", question: 'Find Min' },
    { ans1: "90", ans2: "67", ans3: "19", ans4: "20", correctAns: "3", question: 'Find Min' },
    { ans1: "39", ans2: "1", ans3: "11", ans4: "14", correctAns: "2", question: 'Find Min' },
    { ans1: "25", ans2: "17", ans3: "10", ans4: "30", correctAns: "3", question: 'Find Min' },
    { ans1: "47", ans2: "42", ans3: "37", ans4: "25", correctAns: "4", question: 'Find Min' },
    { ans1: "16", ans2: "23", ans3: "45", ans4: "5", correctAns: "4", question: 'Find Min' },];
    setDataArray(tempArr)
    txtToSpeak('Find minimun value among 4 numbers')
  }
  countNumberByPicture = () => {
    let tempArr = [
      { image: require('../../assets/mango_count.png'), ans1: "7", ans2: "10", ans3: "8", ans4: "13", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      //{ image: require('../../assets/banana_count.png'), ans1: "6", ans2: "5", ans3: "8", ans4: "13", correctAns: ["5", "5", "5", "5", "5",] },
      { image: require('../../assets/banana_count.png'), ans1: "15", ans2: "10", ans3: "8", ans4: "13", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10",] },
      { image: require('../../assets/penguin.png'), ans1: "6", ans2: "8", ans3: "5", ans4: "7", correctAns: ["6", "6", "6", "6", "6", "6",] },
      { image: require('../../assets/nectarine.png'), ans1: "10", ans2: "7", ans3: "11", ans4: "9", correctAns: ["9", "9", "9", "9", "9", "9", "9", "9", "9",] },
      { image: require('../../assets/lforlion.png'), ans1: "12", ans2: "10", ans3: "9", ans4: "15", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12",] },
      { image: require('../../assets/grapes.png'), ans1: "4", ans2: "3", ans3: "5", ans4: "6", correctAns: ["3", "3", "3",] },
      { image: require('../../assets/flower.png'), ans1: "7", ans2: "9", ans3: "8", ans4: "6", correctAns: ["8", "8", "8", "8", "8", "8", "8", "8"] },
      { image: require('../../assets/bird.png'), ans1: "3", ans2: "4", ans3: "5", ans4: "7", correctAns: ["4", "4", "4", "4",] },
      { image: require('../../assets/asparagus.png'), ans1: "2", ans2: "3", ans3: "5", ans4: "4", correctAns: ["5", "5", "5", "5", "5"] },
      { image: require('../../assets/avocado.png'), ans1: "6", ans2: "8", ans3: "7", ans4: "9", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/yforyak.png'), ans1: "9", ans2: "8", ans3: "10", ans4: "11", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] },
      { image: require('../../assets/heart.png'), ans1: "3", ans2: "4", ans3: "5", ans4: "6", correctAns: ["3", "3", "3"] },
      { image: require('../../assets/kiwi.png'), ans1: "5", ans2: "6", ans3: "4", ans4: "7", correctAns: ["6", "6", "6", "6", "6", "6"] },
      { image: require('../../assets/onions.png'), ans1: "10", ans2: "11", ans3: "15", ans4: "12", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },
      { image: require('../../assets/organge.png'), ans1: "7", ans2: "10", ans3: "9", ans4: "13", correctAns: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] },
      { image: require('../../assets/peach.png'), ans1: "10", ans2: "8", ans3: "5", ans4: "9", correctAns: ["9", "9", "9", "9", "9", "9", "9", "9", "9"] },
      { image: require('../../assets/plum.png'), ans1: "3", ans2: "2", ans3: "5", ans4: "4", correctAns: ["3", "3", "3"] },
      { image: require('../../assets/sforsun.png'), ans1: "8", ans2: "6", ans3: "5", ans4: "9", correctAns: ["6", "6", "6", "6", "6", "6"] },
      { image: require('../../assets/sparrow.png'), ans1: "3", ans2: "8", ans3: "5", ans4: "6", correctAns: ["5", "5", "5", "5", "5", "5"] },
      { image: require('../../assets/strawberry.png'), ans1: "7", ans2: "8", ans3: "5", ans4: "9", correctAns: ["7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/turnip.png'), ans1: "16", ans2: "8", ans3: "13", ans4: "12", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },
      { image: require('../../assets/uforumbrella.png'), ans1: "6", ans2: "8", ans3: "5", ans4: "9", correctAns: ["8", "8", "8", "8", "8", "8", "8", "8"] },
      { image: require('../../assets/vforviolin.png'), ans1: "10", ans2: "8", ans3: "5", ans4: "7", correctAns: ["7", "7", "7", "7", "7", "7", "7", "7"] },
      { image: require('../../assets/watermelon.png'), ans1: "13", ans2: "8", ans3: "12", ans4: "14", correctAns: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"] },
    ]
    setDataArray(tempArr)
    txtToSpeak('Count from pictures')
  }
  addition = () => {
    let tempArr = [
      { question: '2 + 3', ans1: "6", ans2: "5", ans3: "9", ans4: "4", correctAns: "2", },
      { question: '5 + 1', ans1: "6", ans2: "4", ans3: "5", ans4: "7", correctAns: "1", },
      { question: '12 + 2', ans1: "10", ans2: "12", ans3: "15", ans4: "14", correctAns: "4", },
      { question: '6 + 5', ans1: "9", ans2: "11", ans3: "13", ans4: "15", correctAns: "2", },
      { question: '8 + 2', ans1: "16", ans2: "12", ans3: "10", ans4: "14", correctAns: "3", },
      { question: '10 + 9', ans1: "19", ans2: "15", ans3: "13", ans4: "16", correctAns: "1", },
      { question: '2 + 2', ans1: "2", ans2: "4", ans3: "8", ans4: "9", correctAns: "2", },
      { question: '7 + 4', ans1: "10", ans2: "12", ans3: "13", ans4: "11", correctAns: "4", },
      { question: '8 + 2', ans1: "6", ans2: "10", ans3: "9", ans4: "11", correctAns: "2", },
      { question: '9 + 1', ans1: "12", ans2: "11", ans3: "10", ans4: "14", correctAns: "3", },
      { question: '5 + 2', ans1: "7", ans2: "5", ans3: "9", ans4: "6", correctAns: "1", },
      { question: '3 + 3', ans1: "5", ans2: "6", ans3: "4", ans4: "7", correctAns: "2", },
      { question: '5 + 4', ans1: "8", ans2: "7", ans3: "9", ans4: "6", correctAns: "3", },
      { question: '7 + 1', ans1: "6", ans2: "5", ans3: "9", ans4: "8", correctAns: "4", },
      { question: '11 + 4', ans1: "12", ans2: "15", ans3: "13", ans4: "14", correctAns: "2", },
      { question: '15 + 1', ans1: "16", ans2: "15", ans3: "12", ans4: "17", correctAns: "1", },
      { question: '6 + 2', ans1: "6", ans2: "5", ans3: "7", ans4: "8", correctAns: "4", },
      { question: '9 + 4', ans1: "12", ans2: "14", ans3: "13", ans4: "16", correctAns: "3", },
      { question: '4 + 2', ans1: "6", ans2: "5", ans3: "7", ans4: "9", correctAns: "1", },
      { question: '9 + 5', ans1: "17", ans2: "15", ans3: "18", ans4: "14", correctAns: "4", },
    ]
    setDataArray(tempArr)
    txtToSpeak('test on Addition')
  }
  subtraction = () => {
    let tempArr = [
      { question: '8 - 5 ', ans1: "6", ans2: "2", ans3: "3", ans4: "5", correctAns: "3", },
      { question: '6 - 2 ', ans1: "4", ans2: "5", ans3: "6", ans4: "7", correctAns: "1", },
      { question: '3 - 1 ', ans1: "1", ans2: "2", ans3: "4", ans4: "5", correctAns: "2", },
      { question: '12 - 2 ', ans1: "11", ans2: "12", ans3: "13", ans4: "10", correctAns: "4", },
      { question: '9 - 5 ', ans1: "6", ans2: "7", ans3: "4", ans4: "5", correctAns: "3", },
      { question: '4 - 2 ', ans1: "3", ans2: "2", ans3: "4", ans4: "6", correctAns: "2", },
      { question: '7 - 4 ', ans1: "6", ans2: "2", ans3: "5", ans4: "3", correctAns: "4", },
      { question: '11 - 5 ', ans1: "5", ans2: "7", ans3: "6", ans4: "4", correctAns: "3", },
      { question: '2 - 1 ', ans1: "2", ans2: "1", ans3: "3", ans4: "4", correctAns: "2", },
      { question: '9 - 2  ', ans1: "7", ans2: "6", ans3: "5", ans4: "8", correctAns: "1", },
      { question: '7 - 3 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "3", },
      { question: '10 - 5 ', ans1: "4", ans2: "3", ans3: "6", ans4: "5", correctAns: "4", },
      { question: '8 - 6 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "2", },
      { question: '4 - 1 ', ans1: "4", ans2: "2", ans3: "3", ans4: "5", correctAns: "3", },
      { question: '6 - 4 ', ans1: "3", ans2: "2", ans3: "6", ans4: "5", correctAns: "2", },
      { question: '4 - 4 ', ans1: "0", ans2: "2", ans3: "1", ans4: "3", correctAns: "1", },
      { question: '15 - 5 ', ans1: "9", ans2: "10", ans3: "11", ans4: "12", correctAns: "2", },
      { question: '16 - 3 ', ans1: "14", ans2: "12", ans3: "13", ans4: "11", correctAns: "3", },
      { question: '5 - 2 ', ans1: "3", ans2: "2", ans3: "4", ans4: "5", correctAns: "1", },
      { question: '14 - 3 ', ans1: "16", ans2: "12", ans3: "13", ans4: "11", correctAns: "4", },
    ]
    setDataArray(tempArr)
    txtToSpeak('test on Subtraction')
  }
  multiplication = () => {
    let tempArr = [
      { question: '5 × 2 ', ans1: "5", ans2: "12", ans3: "10", ans4: "11", correctAns: "3", },
      { question: '8 × 3', ans1: "24", ans2: "17", ans3: "22", ans4: "19", correctAns: "1", },
      { question: '2 × 2 ', ans1: "5", ans2: "4", ans3: "3", ans4: "6", correctAns: "2", },
      { question: '9 × 1', ans1: "8", ans2: "7", ans3: "6", ans4: "9", correctAns: "4", },
      { question: '3 × 2 ', ans1: "6", ans2: "7", ans3: "9", ans4: "8", correctAns: "1", },
      { question: '4 × 3', ans1: "13", ans2: "12", ans3: "15", ans4: "16", correctAns: "2", },
      { question: '9 × 2 ', ans1: "17", ans2: "15", ans3: "16", ans4: "18", correctAns: "4", },
      { question: '13 × 3', ans1: "20", ans2: "19", ans3: "18", ans4: "21", correctAns: "2", },
      { question: '12 × 2 ', ans1: "25", ans2: "22", ans3: "24", ans4: "23", correctAns: "3", },
      { question: '7 × 3', ans1: "20", ans2: "22", ans3: "23", ans4: "21", correctAns: "4", },
      { question: '10 × 5 ', ans1: "50", ans2: "52", ans3: "55", ans4: "56", correctAns: "1", },
      { question: '5 × 5', ans1: "25", ans2: "24", ans3: "27", ans4: "28", correctAns: "1", },
      { question: '6 × 4 ', ans1: "25", ans2: "23", ans3: "24", ans4: "26", correctAns: "3", },
      { question: '8 × 2', ans1: "12", ans2: "16", ans3: "17", ans4: "19", correctAns: "2", },
      { question: '3 × 9 ', ans1: "25", ans2: "24", ans3: "27", ans4: "26", correctAns: "3", },
      { question: '11 × 3', ans1: "44", ans2: "22", ans3: "55", ans4: "33", correctAns: "4", },
      { question: '12 × 3 ', ans1: "36", ans2: "32", ans3: "37", ans4: "39", correctAns: "1", },
      { question: '10 × 2', ans1: "10", ans2: "30", ans3: "20", ans4: "40", correctAns: "3", },
      { question: '4 × 2', ans1: "8", ans2: "7", ans3: "5", ans4: "6", correctAns: "1", },
      { question: '2 × 3', ans1: "4", ans2: "6", ans3: "8", ans4: "9", correctAns: "2", },

    ]
    setDataArray(tempArr)
    txtToSpeak('test on multiplication')
  }
  division = () => {
    let tempArr = [
      { question: '9 ÷ 3 ', ans1: "2", ans2: "7", ans3: "3", ans4: "4", correctAns: "3", },
      { question: '4 ÷ 2 ', ans1: "2", ans2: "5", ans3: "3", ans4: "6", correctAns: "1", },
      { question: '8 ÷ 4 ', ans1: "3", ans2: "6", ans3: "2", ans4: "7", correctAns: "3", },
      { question: '15 ÷ 5 ', ans1: "2", ans2: "3", ans3: "4", ans4: "6", correctAns: "2", },
      { question: '10 ÷ 5 ', ans1: "5", ans2: "4", ans3: "3", ans4: "2", correctAns: "4", },
      { question: '6 ÷ 2 ', ans1: "3", ans2: "2", ans3: "5", ans4: "4", correctAns: "1", },
      { question: '18 ÷ 2 ', ans1: "7", ans2: "9", ans3: "6", ans4: "8", correctAns: "2", },
      { question: '22 ÷ 2 ', ans1: "12", ans2: "11", ans3: "14", ans4: "13", correctAns: "2", },
      { question: '8 ÷ 2 ', ans1: "3", ans2: "7", ans3: "6", ans4: "4", correctAns: "4", },
      { question: '21 ÷ 7 ', ans1: "3", ans2: "5", ans3: "6", ans4: "7", correctAns: "1", },
      { question: '2 ÷ 1 ', ans1: "1", ans2: "3", ans3: "4", ans4: "2", correctAns: "4", },
      { question: '12 ÷ 3 ', ans1: "2", ans2: "4", ans3: "5", ans4: "7", correctAns: "2", },
      { question: '27 ÷ 9 ', ans1: "4", ans2: "7", ans3: "3", ans4: "9", correctAns: "3", },
      { question: '14 ÷ 2 ', ans1: "7", ans2: "6", ans3: "9", ans4: "4", correctAns: "1", },
      { question: '16 ÷ 4 ', ans1: "2", ans2: "4", ans3: "7", ans4: "8", correctAns: "2", },
      { question: '6 ÷ 3 ', ans1: "5", ans2: "7", ans3: "2", ans4: "4", correctAns: "3", },
      { question: '10 ÷ 2 ', ans1: "4", ans2: "5", ans3: "7", ans4: "6", correctAns: "2", },
      { question: '24 ÷ 2 ', ans1: "12", ans2: "17", ans3: "13", ans4: "14", correctAns: "1", },
      { question: '20 ÷ 2 ', ans1: "7", ans2: "9", ans3: "8", ans4: "10", correctAns: "4", },
      { question: '30 ÷ 6 ', ans1: "6", ans2: "5", ans3: "3", ans4: "4", correctAns: "2", },

    ]
    setDataArray(tempArr)
    txtToSpeak('Count from division')
  }
  errorSound = () => {
    playSound('wrong.mp3');
    let tag = props.route.params.item.tag;
    if (tag == 'Test1' || tag == 'Test2') {
      if (pageIndex < dataArray.length - 1){
        viewpager.current.setPage(++pageIndex)
      }else
      props.navigation.navigate('SuccessMessage', { score: score, total: dataArray.length,from:'table' })
    }
  }
  succesSound = () => {
    if (soundPosition == 6)
      soundPosition = 0;
    playSound(soundArr[soundPosition]);
    soundPosition++;
    let tag = props.route.params.item.tag;
    if (tag == 'Test1' || tag == 'Test2') {
      if (pageIndex < dataArray.length - 1){
        setPageIndex(++pageIndex)
        viewpager.current.setPage(pageIndex)
        setScore(++score)
      }else
      props.navigation.navigate('SuccessMessage', { score: score, total: dataArray.length,from:'table' })
    }else{
      setTimeout(() => {
        if (pageIndex < dataArray.length - 1)
           viewpager.current.setPage(++position)
        else
          props.navigation.navigate('CommonMessage', { howmanyback: 3 })
      }, 2000)
    }
    

  }

  clickAns1 = (item) => {
    let tag = props.route.params.item.tag;
    if (tag == 'count') {
      if (item.ans1 == item.correctAns.length) {
        succesSound(item);
      } else {
        errorSound(item);
      }
    } else {
      if (item.correctAns == "1") {
        succesSound(item);
      } else {
        errorSound();
      }
    }
  }
  clickAns2 = (item) => {
    let tag = props.route.params.item.tag;
    if (tag == 'count') {
      if (item.ans2 == item.correctAns.length) {
        succesSound(item);
      } else {
        errorSound();
      }
    } else {
      if (item.correctAns == "2") {
        succesSound(item);
      } else {
        errorSound();
      }
    }
  }
  clickAns3 = (item) => {
    let tag = props.route.params.item.tag;
    if (tag == 'count') {
      if (item.ans3 == item.correctAns.length) {
        succesSound(item);
      } else {
        errorSound();
      }
    } else {
      if (item.correctAns == "3") {
        succesSound(item);
      } else {
        errorSound();
      }
    }
  }
  clickAns4 = (item) => {
    let tag = props.route.params.item.tag;
    if (tag == 'count') {
      if (item.ans4 == item.correctAns.length) {
        succesSound(item);
      } else {
        errorSound();
      }
    } else {
      if (item.correctAns == "4") {
        succesSound(item);
      } else {
        errorSound();
      }
    }
  }

    //let tag = props.route.params.item.tag;
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content"/>
        {dataArray && dataArray.length>0? <ViewPager style={{ flex: 1, }} initialPage={pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          setPageIndex(position);
        }} setPage={pageIndex} ref={viewpager}>

          {dataArray && dataArray.map((item, index) => {
            return (
              <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
                <View style={{ flex: 1 }}>
                  {tag == 'Test1' || tag == 'Test2' ? <View style={{position:'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 20, borderColor: Color.fontColor, borderWidth: 1,right:20,top:responsiveHeight(6) }}>
                <Text style={{ color: Color.fontColor, fontSize: CustomFont.font16, textAlign: 'center', marginLeft: 30, marginRight: 30, marginTop: 5, marginBottom: 5 }}>{score}/{dataArray.length}</Text>
              </View> : null}
                
                  <View style={{ flex: .9, alignItems: 'center' }}>
                    
                    {tag == 'count' ? <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', margin: 10, marginTop: responsiveHeight(12) }}>
                      {item.correctAns.map((item2, index) => {
                        return (
                          <Image source={item.image} style={{ height: responsiveFontSize(7), width: responsiveFontSize(7), resizeMode: 'contain', marginLeft: responsiveWidth(3), marginTop: 10 }} />
                        );
                      }, this)}
                    </View> :
                      <Text style={{ color: 'red', fontSize: CustomFont.font40, fontWeight: 'bold', marginTop: responsiveHeight(15), fontFamily: 'Gretoon Highlight' }}>{item.question} </Text>
                    }
                  </View>
                  <View style={{ flex: 1.5, justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <ImageBackground source={balloon1} resizeMode="contain" style={{ alignItems: 'center', justifyContent: 'center', marginLeft: responsiveWidth(10) }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: tag == 'count' || Platform.isPad? responsiveWidth(7) : responsiveWidth(10) }} onPress={() => clickAns1(item)}>
                          <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginBottom: responsiveHeight(1.8), textAlign: 'center' }}>{item.ans1}</Text>
                        </TouchableOpacity>
                      </ImageBackground>
                      <ImageBackground source={balloon2} resizeMode="contain" style={{ alignItems: 'center', justifyContent: 'center', marginRight: responsiveWidth(10) }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: tag == 'count' || Platform.isPad ? responsiveWidth(7) : responsiveWidth(10) }} onPress={() => clickAns2(item)}>
                          <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginBottom: responsiveHeight(1.8), textAlign: 'center' }}>{item.ans2}</Text>
                        </TouchableOpacity>
                      </ImageBackground>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>

                      <ImageBackground source={balloon3} resizeMode="contain" style={{ alignItems: 'center', justifyContent: 'center', marginLeft: responsiveWidth(10) }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: tag == 'count' || Platform.isPad ? responsiveWidth(7) : responsiveWidth(10) }} onPress={() => clickAns3(item)}>
                          <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginBottom: responsiveHeight(1.8),  textAlign: 'center' }}>{item.ans3}</Text>
                        </TouchableOpacity>
                      </ImageBackground>

                      <ImageBackground source={balloon4} resizeMode="contain" style={{ alignItems: 'center', justifyContent: 'center', marginRight: responsiveWidth(10) }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: tag == 'count' || Platform.isPad ? responsiveWidth(7) : responsiveWidth(10) }} onPress={() => clickAns4(item)}>
                          <Text style={{ color: Color.white, fontSize: CustomFont.font40, fontWeight: '700', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginBottom: responsiveHeight(1.8),  textAlign: 'center', }}>{item.ans4}</Text>
                        </TouchableOpacity>
                      </ImageBackground>

                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
                </View>
               
              </ImageBackground>
            );
          }, this)}

        </ViewPager>:null}
        
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4):5, left: 7, zIndex: 99 }} onPress={() => {
         if(IsSoundEnabled)
         clickSound();
          props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
      </View>
    );
}
export default NumberGame;
