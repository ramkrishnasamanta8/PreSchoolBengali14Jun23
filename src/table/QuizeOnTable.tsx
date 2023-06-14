import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler, StatusBar, Platform, ImageBackground } from 'react-native';


import bgImage from '../../assets/bg.png';
import smile from '../../assets/smile.png';
import back from '../../assets/back.png';
import arrowRight from '../../assets/arrowRight.png';
import toggle from '../../assets/toggle.png';
import toggle_off from '../../assets/toggle_off.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Modal from 'react-native-modal';
let QuesPosition = 0;
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
export default QuizeOnTable =(props)=>{
  let [dataArray,setdataArray]=useState([{ ques1: "2", ques2: "2", ans1: "5", ans2: "4", ans3: "6", },]);
  let [pageIndex,setpageIndex]=useState(0);
  let [showAns,setshowAns]=useState('');
  let [rightAns,setrightAns]=useState('');
  let [isAnswer,setisAnswer]=useState(true);
let [score,setscore]=useState(0);
let [isModalVisible,setisModalVisible]=useState(false);
let [isDisableBtn,setisDisableBtn]=useState(false);

useEffect(()=>{
      
    let minNumber = props.route.params.item.minNumber;
    if (minNumber == 1) {
      LoadQuizeFor1To10Table();
    } else if (minNumber == 11) {
      LoadQuizeFor11To20Table();
    } else if (minNumber == 21) {
      LoadQuizeFor21To30Table();
    } else if (minNumber == 31) {
      LoadQuizeFor31To40Table();
    } else if (minNumber == 41) {
      LoadQuizeFor41To50Table();
    } else if (minNumber == 51) {
      LoadQuizeFor51To60Table();
    } else if (minNumber == 61) {
      LoadQuizeFor61To70Table();
    } else if (minNumber == 71) {
      LoadQuizeFor71To80Table();
    } else if (minNumber == 81) {
      LoadQuizeFor81To90Table();
    } else if (minNumber == 91) {
      LoadQuizeFor91To100Table();
    }
    BackHandler.addEventListener('hardwareBackPress', () => {
      back()
      return true;
    })
    txtToSpeak('test for ' + props.route.params.item.msg);
    setTimeout(() => {
      txtToSpeak(dataArray[QuesPosition].ques1 + ' ' + dataArray[QuesPosition].ques2 + ' ja');
    }, 1000)          
},[])
  const LoadQuizeFor1To10Table = () => {
    let tempArr = [
      { ques1: "2", ques2: "2", ans1: "5", ans2: "4", ans3: "6", },
      { ques1: "3", ques2: "8", ans1: "15", ans2: "20", ans3: "24", },
      { ques1: "4", ques2: "5", ans1: "20", ans2: "19", ans3: "21", },
      { ques1: "6", ques2: "3", ans1: "15", ans2: "18", ans3: "17", },
      { ques1: "3", ques2: "9", ans1: "25", ans2: "27", ans3: "20", },
      { ques1: "8", ques2: "8", ans1: "56", ans2: "62", ans3: "64", },
      { ques1: "9", ques2: "3", ans1: "27", ans2: "22", ans3: "25", },
      { ques1: "3", ques2: "10", ans1: "50", ans2: "20", ans3: "30", },
      { ques1: "7", ques2: "9", ans1: "63", ans2: "64", ans3: "65", },
      { ques1: "6", ques2: "5", ans1: "30", ans2: "15", ans3: "20", },
      { ques1: "5", ques2: "7", ans1: "34", ans2: "32", ans3: "35", },
      { ques1: "1", ques2: "3", ans1: "3", ans2: "4", ans3: "5", },
      { ques1: "2", ques2: "9", ans1: "17", ans2: "18", ans3: "19", },
      { ques1: "10", ques2: "10", ans1: "50", ans2: "101", ans3: "100", },
      { ques1: "9", ques2: "9", ans1: "81", ans2: "79", ans3: "82", },
      { ques1: "4", ques2: "6", ans1: "25", ans2: "24", ans3: "22", },
      { ques1: "7", ques2: "3", ans1: "20", ans2: "18", ans3: "21", },
      { ques1: "5", ques2: "9", ans1: "45", ans2: "42", ans3: "44", },
      { ques1: "9", ques2: "10", ans1: "70", ans2: "80", ans3: "90", },
      { ques1: "8", ques2: "6", ans1: "35", ans2: "48", ans3: "24", },
      { ques1: "7", ques2: "7", ans1: "49", ans2: "32", ans3: "40", },
      { ques1: "6", ques2: "9", ans1: "45", ans2: "54", ans3: "52", },
    ]
    setdataArray(tempArr);


  }
  const LoadQuizeFor11To20Table = () => {
    let tempArr = [
      { ques1: "11", ques2: "2", ans1: "25", ans2: "22", ans3: "24", },
      { ques1: "15", ques2: "6", ans1: "90", ans2: "20", ans3: "50", },
      { ques1: "12", ques2: "8", ans1: "96", ans2: "82", ans3: "90", },
      { ques1: "14", ques2: "3", ans1: "35", ans2: "32", ans3: "42", },
      { ques1: "13", ques2: "5", ans1: "65", ans2: "52", ans3: "34", },
      { ques1: "18", ques2: "2", ans1: "35", ans2: "36", ans3: "42", },
      { ques1: "19", ques2: "6", ans1: "114", ans2: "90", ans3: "82", },
      { ques1: "17", ques2: "9", ans1: "55", ans2: "153", ans3: "100", },
      { ques1: "16", ques2: "7", ans1: "59", ans2: "92", ans3: "112", },
      { ques1: "20", ques2: "8", ans1: "160", ans2: "102", ans3: "120", },
      { ques1: "13", ques2: "8", ans1: "100", ans2: "104", ans3: "101", },
      { ques1: "16", ques2: "2", ans1: "32", ans2: "34", ans3: "35", },
      { ques1: "12", ques2: "9", ans1: "108", ans2: "102", ans3: "104", },
      { ques1: "15", ques2: "5", ans1: "72", ans2: "75", ans3: "76", },
      { ques1: "18", ques2: "4", ans1: "71", ans2: "73", ans3: "72", },
      { ques1: "11", ques2: "8", ans1: "88", ans2: "82", ans3: "83", },
      { ques1: "14", ques2: "7", ans1: "85", ans2: "98", ans3: "92", },
      { ques1: "20", ques2: "3", ans1: "60", ans2: "50", ans3: "40", },
      { ques1: "16", ques2: "6", ans1: "85", ans2: "82", ans3: "96", },
      { ques1: "17", ques2: "2", ans1: "34", ans2: "32", ans3: "33", },
      { ques1: "18", ques2: "10", ans1: "180", ans2: "120", ans3: "140", },
      { ques1: "13", ques2: "9", ans1: "115", ans2: "117", ans3: "116", },
    ]
    setdataArray(tempArr);
  }

  const LoadQuizeFor21To30Table = () => {
    let tempArr = [
      { ques1: "21", ques2: "2", ans1: "41", ans2: "32", ans3: "44", },
      { ques1: "22", ques2: "6", ans1: "90", ans2: "132", ans3: "126", },
      { ques1: "25", ques2: "8", ans1: "200", ans2: "100", ans3: "90", },
      { ques1: "23", ques2: "3", ans1: "56", ans2: "60", ans3: "69", },
      { ques1: "26", ques2: "9", ans1: "235", ans2: "234", ans3: "237", },
      { ques1: "24", ques2: "3", ans1: "72", ans2: "36", ans3: "40", },
      { ques1: "27", ques2: "5", ans1: "114", ans2: "135", ans3: "120", },
      { ques1: "28", ques2: "7", ans1: "196", ans2: "149", ans3: "180", },
      { ques1: "29", ques2: "2", ans1: "38", ans2: "49", ans3: "58", },
      { ques1: "21", ques2: "4", ans1: "54", ans2: "84", ans3: "63", },
      { ques1: "30", ques2: "9", ans1: "270", ans2: "260", ans3: "265", },
      { ques1: "24", ques2: "8", ans1: "185", ans2: "192", ans3: "160", },
      { ques1: "28", ques2: "3", ans1: "75", ans2: "66", ans3: "84", },
      { ques1: "29", ques2: "6", ans1: "146", ans2: "174", ans3: "165", },
      { ques1: "23", ques2: "7", ans1: "160", ans2: "153", ans3: "161", },
      { ques1: "21", ques2: "5", ans1: "105", ans2: "95", ans3: "90", },
      { ques1: "27", ques2: "8", ans1: "210", ans2: "216", ans3: "218", },
      { ques1: "25", ques2: "9", ans1: "225", ans2: "150", ans3: "230", },
      { ques1: "29", ques2: "4", ans1: "95", ans2: "100", ans3: "116", },
      { ques1: "30", ques2: "10", ans1: "300", ans2: "302", ans3: "303", },
      { ques1: "28", ques2: "2", ans1: "53", ans2: "56", ans3: "55", },
      { ques1: "22", ques2: "9", ans1: "190", ans2: "195", ans3: "198", },
    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor31To40Table = () => {
    let tempArr = [
      { ques1: "32", ques2: "3", ans1: "96", ans2: "97", ans3: "98", },
      { ques1: "33", ques2: "7", ans1: "221", ans2: "231", ans3: "235", },
      { ques1: "37", ques2: "6", ans1: "222", ans2: "225", ans3: "230", },
      { ques1: "34", ques2: "8", ans1: "282", ans2: "162", ans3: "272", },
      { ques1: "31", ques2: "4", ans1: "124", ans2: "140", ans3: "135", },
      { ques1: "35", ques2: "5", ans1: "175", ans2: "136", ans3: "145", },
      { ques1: "36", ques2: "9", ans1: "294", ans2: "314", ans3: "324", },
      { ques1: "37", ques2: "2", ans1: "74", ans2: "73", ans3: "76", },
      { ques1: "39", ques2: "5", ans1: "190", ans2: "195", ans3: "198", },
      { ques1: "35", ques2: "7", ans1: "154", ans2: "245", ans3: "263", },
      { ques1: "40", ques2: "3", ans1: "99", ans2: "120", ans3: "110", },
      { ques1: "31", ques2: "9", ans1: "279", ans2: "190", ans3: "195", },
      { ques1: "33", ques2: "5", ans1: "175", ans2: "165", ans3: "160", },
      { ques1: "38", ques2: "4", ans1: "152", ans2: "150", ans3: "154", },
      { ques1: "32", ques2: "6", ans1: "180", ans2: "192", ans3: "195", },
      { ques1: "40", ques2: "7", ans1: "280", ans2: "180", ans3: "290", },
      { ques1: "37", ques2: "8", ans1: "186", ans2: "296", ans3: "298", },
      { ques1: "38", ques2: "2", ans1: "65", ans2: "70", ans3: "76", },
      { ques1: "39", ques2: "3", ans1: "117", ans2: "90", ans3: "119", },
      { ques1: "33", ques2: "10", ans1: "223", ans2: "302", ans3: "330", },
      { ques1: "36", ques2: "2", ans1: "65", ans2: "72", ans3: "75", },
      { ques1: "35", ques2: "4", ans1: "140", ans2: "130", ans3: "150", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor41To50Table = () => {
    let tempArr = [
      { ques1: "41", ques2: "1", ans1: "40", ans2: "42", ans3: "41", },
      { ques1: "44", ques2: "8", ans1: "352", ans2: "350", ans3: "332", },
      { ques1: "42", ques2: "2", ans1: "75", ans2: "84", ans3: "88", },
      { ques1: "43", ques2: "4", ans1: "172", ans2: "156", ans3: "165", },
      { ques1: "48", ques2: "3", ans1: "135", ans2: "140", ans3: "144", },
      { ques1: "47", ques2: "2", ans1: "85", ans2: "94", ans3: "98", },
      { ques1: "45", ques2: "7", ans1: "313", ans2: "314", ans3: "315", },
      { ques1: "46", ques2: "9", ans1: "414", ans2: "320", ans3: "332", },
      { ques1: "42", ques2: "3", ans1: "120", ans2: "126", ans3: "135", },
      { ques1: "41", ques2: "7", ans1: "184", ans2: "287", ans3: "296", },
      { ques1: "43", ques2: "2", ans1: "86", ans2: "75", ans3: "65", },
      { ques1: "49", ques2: "5", ans1: "230", ans2: "245", ans3: "255", },
      { ques1: "48", ques2: "5", ans1: "190", ans2: "236", ans3: "240", },
      { ques1: "44", ques2: "4", ans1: "176", ans2: "185", ans3: "188", },
      { ques1: "45", ques2: "3", ans1: "125", ans2: "135", ans3: "145", },
      { ques1: "50", ques2: "4", ans1: "199", ans2: "200", ans3: "210", },
      { ques1: "47", ques2: "5", ans1: "215", ans2: "233", ans3: "235", },
      { ques1: "46", ques2: "6", ans1: "266", ans2: "276", ans3: "287", },
      { ques1: "50", ques2: "8", ans1: "400", ans2: "406", ans3: "409", },
      { ques1: "49", ques2: "10", ans1: "486", ans2: "489", ans3: "490", },
      { ques1: "42", ques2: "6", ans1: "252", ans2: "175", ans3: "182", },
      { ques1: "44", ques2: "2", ans1: "88", ans2: "98", ans3: "78", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor51To60Table = () => {
    let tempArr = [
      { ques1: "52", ques2: "2", ans1: "104", ans2: "100", ans3: "103", },
      { ques1: "55", ques2: "4", ans1: "190", ans2: "220", ans3: "224", },
      { ques1: "51", ques2: "5", ans1: "255", ans2: "240", ans3: "245", },
      { ques1: "53", ques2: "6", ans1: "298", ans2: "318", ans3: "354", },
      { ques1: "54", ques2: "3", ans1: "162", ans2: "140", ans3: "156", },
      { ques1: "56", ques2: "8", ans1: "434", ans2: "448", ans3: "458", },
      { ques1: "58", ques2: "7", ans1: "390", ans2: "403", ans3: "406", },
      { ques1: "52", ques2: "9", ans1: "468", ans2: "454", ans3: "476", },
      { ques1: "57", ques2: "2", ans1: "129", ans2: "114", ans3: "137", },
      { ques1: "54", ques2: "7", ans1: "378", ans2: "375", ans3: "384", },
      { ques1: "55", ques2: "2", ans1: "98", ans2: "106", ans3: "110", },
      { ques1: "53", ques2: "3", ans1: "159", ans2: "145", ans3: "165", },
      { ques1: "52", ques2: "6", ans1: "310", ans2: "312", ans3: "321", },
      { ques1: "54", ques2: "5", ans1: "268", ans2: "270", ans3: "276", },
      { ques1: "59", ques2: "3", ans1: "165", ans2: "177", ans3: "178", },
      { ques1: "60", ques2: "4", ans1: "240", ans2: "234", ans3: "238", },
      { ques1: "51", ques2: "7", ans1: "345", ans2: "354", ans3: "357", },
      { ques1: "54", ques2: "6", ans1: "322", ans2: "324", ans3: "332", },
      { ques1: "57", ques2: "7", ans1: "340", ans2: "399", ans3: "398", },
      { ques1: "53", ques2: "10", ans1: "530", ans2: "489", ans3: "490", },
      { ques1: "60", ques2: "6", ans1: "352", ans2: "358", ans3: "360", },
      { ques1: "56", ques2: "2", ans1: "110", ans2: "112", ans3: "123", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor61To70Table = () => {
    let tempArr = [
      { ques1: "61", ques2: "2", ans1: "120", ans2: "122", ans3: "124", },
      { ques1: "62", ques2: "4", ans1: "248", ans2: "234", ans3: "245", },
      { ques1: "64", ques2: "6", ans1: "354", ans2: "378", ans3: "384", },
      { ques1: "67", ques2: "3", ans1: "202", ans2: "201", ans3: "210", },
      { ques1: "66", ques2: "4", ans1: "264", ans2: "268", ans3: "275", },
      { ques1: "63", ques2: "7", ans1: "434", ans2: "441", ans3: "445", },
      { ques1: "68", ques2: "5", ans1: "324", ans2: "338", ans3: "340", },
      { ques1: "69", ques2: "9", ans1: "590", ans2: "621", ans3: "630", },
      { ques1: "70", ques2: "2", ans1: "140", ans2: "148", ans3: "150", },
      { ques1: "62", ques2: "6", ans1: "290", ans2: "372", ans3: "381", },
      { ques1: "64", ques2: "2", ans1: "128", ans2: "138", ans3: "139", },
      { ques1: "67", ques2: "8", ans1: "526", ans2: "536", ans3: "540", },
      { ques1: "69", ques2: "2", ans1: "138", ans2: "145", ans3: "156", },
      { ques1: "70", ques2: "9", ans1: "610", ans2: "620", ans3: "630", },
      { ques1: "68", ques2: "3", ans1: "201", ans2: "204", ans3: "208", },
      { ques1: "63", ques2: "6", ans1: "378", ans2: "380", ans3: "385", },
      { ques1: "61", ques2: "7", ans1: "420", ans2: "427", ans3: "438", },
      { ques1: "65", ques2: "9", ans1: "585", ans2: "590", ans3: "595", },
      { ques1: "66", ques2: "5", ans1: "330", ans2: "332", ans3: "340", },
      { ques1: "65", ques2: "10", ans1: "550", ans2: "650", ans3: "660", },
      { ques1: "70", ques2: "7", ans1: "480", ans2: "490", ans3: "498", },
      { ques1: "62", ques2: "8", ans1: "496", ans2: "498", ans3: "499", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor71To80Table = () => {
    let tempArr = [
      { ques1: "72", ques2: "2", ans1: "144", ans2: "146", ans3: "149", },
      { ques1: "77", ques2: "4", ans1: "208", ans2: "308", ans3: "310", },
      { ques1: "71", ques2: "5", ans1: "352", ans2: "354", ans3: "355", },
      { ques1: "73", ques2: "3", ans1: "120", ans2: "219", ans3: "230", },
      { ques1: "76", ques2: "9", ans1: "684", ans2: "687", ans3: "690", },
      { ques1: "74", ques2: "7", ans1: "518", ans2: "520", ans3: "524", },
      { ques1: "75", ques2: "6", ans1: "420", ans2: "450", ans3: "470", },
      { ques1: "80", ques2: "9", ans1: "690", ans2: "720", ans3: "722", },
      { ques1: "71", ques2: "2", ans1: "142", ans2: "145", ans3: "148", },
      { ques1: "74", ques2: "5", ans1: "370", ans2: "372", ans3: "375", },
      { ques1: "76", ques2: "10", ans1: "730", ans2: "760", ans3: "780", },
      { ques1: "77", ques2: "8", ans1: "590", ans2: "612", ans3: "616", },
      { ques1: "76", ques2: "2", ans1: "152", ans2: "165", ans3: "178", },
      { ques1: "71", ques2: "9", ans1: "621", ans2: "639", ans3: "648", },
      { ques1: "72", ques2: "7", ans1: "501", ans2: "502", ans3: "504", },
      { ques1: "78", ques2: "6", ans1: "462", ans2: "468", ans3: "474", },
      { ques1: "73", ques2: "8", ans1: "584", ans2: "586", ans3: "589", },
      { ques1: "80", ques2: "7", ans1: "545", ans2: "560", ans3: "562", },
      { ques1: "75", ques2: "2", ans1: "150", ans2: "155", ans3: "157", },
      { ques1: "74", ques2: "10", ans1: "734", ans2: "739", ans3: "740", },
      { ques1: "77", ques2: "6", ans1: "452", ans2: "462", ans3: "472", },
      { ques1: "78", ques2: "4", ans1: "309", ans2: "311", ans3: "312", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor81To90Table = () => {
    let tempArr = [
      { ques1: "81", ques2: "9", ans1: "729", ans2: "735", ans3: "740", },
      { ques1: "84", ques2: "7", ans1: "584", ans2: "588", ans3: "589", },
      { ques1: "82", ques2: "5", ans1: "410", ans2: "420", ans3: "430", },
      { ques1: "88", ques2: "8", ans1: "704", ans2: "708", ans3: "710", },
      { ques1: "83", ques2: "4", ans1: "331", ans2: "332", ans3: "334", },
      { ques1: "85", ques2: "7", ans1: "584", ans2: "590", ans3: "595", },
      { ques1: "89", ques2: "3", ans1: "267", ans2: "268", ans3: "270", },
      { ques1: "86", ques2: "9", ans1: "772", ans2: "774", ans3: "776", },
      { ques1: "83", ques2: "6", ans1: "494", ans2: "498", ans3: "496", },
      { ques1: "81", ques2: "5", ans1: "405", ans2: "408", ans3: "420", },
      { ques1: "89", ques2: "10", ans1: "889", ans2: "890", ans3: "899", },
      { ques1: "83", ques2: "8", ans1: "645", ans2: "664", ans3: "675", },
      { ques1: "86", ques2: "2", ans1: "164", ans2: "172", ans3: "182", },
      { ques1: "85", ques2: "3", ans1: "255", ans2: "265", ans3: "275", },
      { ques1: "90", ques2: "7", ans1: "590", ans2: "620", ans3: "630", },
      { ques1: "82", ques2: "9", ans1: "724", ans2: "738", ans3: "754", },
      { ques1: "84", ques2: "6", ans1: "502", ans2: "504", ans3: "507", },
      { ques1: "88", ques2: "2", ans1: "176", ans2: "178", ans3: "182", },
      { ques1: "86", ques2: "4", ans1: "322", ans2: "342", ans3: "344", },
      { ques1: "90", ques2: "10", ans1: "600", ans2: "800", ans3: "900", },
      { ques1: "84", ques2: "8", ans1: "662", ans2: "672", ans3: "682", },
      { ques1: "89", ques2: "4", ans1: "356", ans2: "358", ans3: "365", },

    ]
    setdataArray(tempArr);
  }
  const LoadQuizeFor91To100Table = () => {
    let tempArr = [
      { ques1: "91", ques2: "7", ans1: "637", ans2: "640", ans3: "645", },
      { ques1: "94", ques2: "4", ans1: "367", ans2: "376", ans3: "385", },
      { ques1: "92", ques2: "5", ans1: "445", ans2: "450", ans3: "460", },
      { ques1: "96", ques2: "8", ans1: "525", ans2: "542", ans3: "552", },
      { ques1: "93", ques2: "7", ans1: "642", ans2: "651", ans3: "654", },
      { ques1: "95", ques2: "2", ans1: "160", ans2: "190", ans3: "180", },
      { ques1: "99", ques2: "3", ans1: "277", ans2: "287", ans3: "297", },
      { ques1: "93", ques2: "9", ans1: "837", ans2: "838", ans3: "842", },
      { ques1: "100", ques2: "8", ans1: "700", ans2: "800", ans3: "900", },
      { ques1: "92", ques2: "7", ans1: "634", ans2: "642", ans3: "644", },
      { ques1: "94", ques2: "5", ans1: "470", ans2: "480", ans3: "490", },
      { ques1: "93", ques2: "6", ans1: "554", ans2: "558", ans3: "559", },
      { ques1: "96", ques2: "2", ans1: "172", ans2: "182", ans3: "192", },
      { ques1: "97", ques2: "4", ans1: "386", ans2: "388", ans3: "389", },
      { ques1: "92", ques2: "8", ans1: "736", ans2: "738", ans3: "740", },
      { ques1: "91", ques2: "9", ans1: "812", ans2: "817", ans3: "819", },
      { ques1: "99", ques2: "6", ans1: "574", ans2: "584", ans3: "594", },
      { ques1: "100", ques2: "9", ans1: "900", ans2: "100", ans3: "800", },
      { ques1: "95", ques2: "4", ans1: "360", ans2: "380", ans3: "390", },
      { ques1: "94", ques2: "10", ans1: "939", ans2: "940", ans3: "948", },
      { ques1: "96", ques2: "3", ans1: "288", ans2: "289", ans3: "292", },
      { ques1: "97", ques2: "6", ans1: "581", ans2: "582", ans3: "588", },

    ]
    setdataArray(tempArr);
  }

  const errorSound = () => {
    playSound('wrong.mp3')
    setshowAns('wrong')
    if (isAnswer)
    setisDisableBtn(false);
  }
  const succesSound = () => {
    setshowAns('right')
    playSound('yes.mp3')

  }


  const back = () => {
    if(IsSoundEnabled)
    clickSound();
    props.navigation.goBack();
    props.route.params.Refresh();
  }
  const clickAns1 = (item) => {
    setisDisableBtn(true);
    let ques1 = dataArray[pageIndex].ques1;
    let ques2 = dataArray[pageIndex].ques2;
    let ans1 = dataArray[pageIndex].ans1;
    if (ques1 * ques2 == ans1) {
      succesSound();
      setrightAns(ans1)
      setscore(++score);
    } else {
      errorSound();
    }
    if (!isAnswer) {
      setTimeout(() => {
        goToNext();
      }, 1000)
    }


  }
  const clickAns2 = (item) => {
    setisDisableBtn(true);
    let ques1 = dataArray[pageIndex].ques1;
    let ques2 = dataArray[pageIndex].ques2;
    let ans2 = dataArray[pageIndex].ans2;
    if (ques1 * ques2 == ans2) {
      succesSound();
      setrightAns(ans2)
      setscore(score++);
    } else {
      errorSound();
    }
    if (!isAnswer) {
      setTimeout(() => {
        goToNext();
      }, 1000)
    }

  }
  const clickAns3 = (item) => {
    setisDisableBtn(true);
    let ques1 = dataArray[pageIndex].ques1;
    let ques2 = dataArray[pageIndex].ques2;
    let ans3 = dataArray[pageIndex].ans3;
    if (ques1 * ques2 == ans3) {
      succesSound();
      setrightAns(ans3)
      setscore(++score);
    } else {
      errorSound();
    }
    if (!isAnswer) {
      setTimeout(() => {
        goToNext();
      }, 1000)
    }
  }
  const goToNext = () => {
    setisDisableBtn(false)
    QuesPosition++;
    console.log(pageIndex + '  ' + dataArray.length)
    if (pageIndex == dataArray.length - 1) {
      if (isAnswer)
        setisModalVisible(true)
      else
        props.navigation.navigate('SuccessMessage', { score: score, total: dataArray.length,from:'table' })
    } else {
      txtToSpeak(dataArray[QuesPosition].ques1 + ' ' + dataArray[QuesPosition].ques2 + ' ja');
      setpageIndex(++pageIndex)
      setshowAns('')
      setrightAns('');
    }
    
  }
  
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
<StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content"/>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4):10, left: 0, zIndex: 99 }} onPress={() => {
          playSound('click.mp3');
          props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(4), right: responsiveWidth(5), zIndex: 99, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
          setisAnswer(!isAnswer)
         setisDisableBtn(false)
         setscore(0);
        }}>
          <Text style={{ fontSize: CustomFont.font16, color: Color.black, }}>{isAnswer ? 'Answer' : 'Test'}</Text>
          <Image source={isAnswer ? toggle : toggle_off} style={{ height: responsiveFontSize(7), width: responsiveFontSize(7), resizeMode: 'contain', marginLeft: 10 }} />

        </TouchableOpacity>


        <View style={{ flex: 10, }}>

          <View style={{ flex: 3, justifyContent: 'center' }}>
            <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center' }}>
              {isAnswer ? null : <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 20, marginTop: responsiveHeight(10), borderColor: Color.fontColor, borderWidth: 1 }}>
                <Text style={{ color: Color.fontColor, fontSize: CustomFont.font16, textAlign: 'center', marginLeft: 30, marginRight: 30, marginTop: 5, marginBottom: 5 }}>{score}/{dataArray.length}</Text>
              </View>}


              <Text style={{ color: 'red', fontSize: CustomFont.font45, fontFamily: Platform.OS == 'android' ? 'Heroes Legend' : 'Comic Sans MS', textAlign: 'center', marginTop: isAnswer ? responsiveHeight(13) : responsiveHeight(3) }}>{dataArray[pageIndex].ques1 + ' x ' + dataArray[pageIndex].ques2}</Text>
              <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#ff0000', fontSize: CustomFont.font40, textAlign: 'center', margin: 10 }}>= </Text>
                {showAns == 'right' ? <Text style={{ color: '#ff0000', fontSize: CustomFont.font30, textAlign: 'center', margin: 10, borderColor: '#ff0000', borderWidth: 3, borderRadius: 7, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>{rightAns}</Text> :
                  <Text style={{ color: '#000', fontSize: CustomFont.font30, textAlign: 'center', margin: 10, borderColor: '#000', borderWidth: 1, borderRadius: 7, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10 }}>?</Text>}

              </View>


            </View>

          </View>
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start' }}>
            {
              showAns ? <Image source={smile} style={{ height: responsiveFontSize(15), width: responsiveFontSize(15), resizeMode: 'contain', marginTop: responsiveHeight(5), tintColor: showAns == 'right' ? 'green' : 'red' }} /> : null
            }
            <Text style={{ color: showAns == 'right' ? 'green' : 'red', fontSize: CustomFont.font30, fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici', textAlign: 'center', margin: 10 }}>{showAns} </Text>
            {
              showAns == 'right' && isAnswer ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(4), right: 10 }} onPress={() => goToNext()}>
                <Image source={arrowRight} style={{ height: responsiveFontSize(9), width: responsiveFontSize(9), resizeMode: 'contain', margin: 10 }} />
              </TouchableOpacity> : null
            }


          </View>
          <View style={{ flex: 1.6, alignItems: 'center' }}>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity disabled={isDisableBtn} style={{ backgroundColor: Color.white, marginLeft: responsiveWidth(2), borderRadius: 10, borderColor: 'black', borderWidth: 1, height: responsiveHeight(10), width: responsiveWidth(26), justifyContent: 'center', alignItems: 'center' }} onPress={() => clickAns1()}>
                <Text style={{ color: Color.black, fontSize: CustomFont.font40, }}>{dataArray[pageIndex].ans1}</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled={isDisableBtn} style={{ backgroundColor: Color.white, marginLeft: responsiveWidth(3), borderRadius: 10, borderColor: 'black', borderWidth: 1, height: responsiveHeight(10), width: responsiveWidth(26), justifyContent: 'center', alignItems: 'center' }} onPress={() => clickAns2()}>
                <Text style={{ color: Color.black, fontSize: CustomFont.font40, }}>{dataArray[pageIndex].ans2}</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled={isDisableBtn} style={{ backgroundColor: Color.white, marginLeft: responsiveWidth(3), borderRadius: 10, borderColor: 'black', borderWidth: 1, height: responsiveHeight(10), width: responsiveWidth(26), justifyContent: 'center', alignItems: 'center' }} onPress={() => clickAns3()}>
                <Text style={{ color: Color.black, fontSize: CustomFont.font40, }}>{dataArray[pageIndex].ans3}</Text>
              </TouchableOpacity>
            </View>
           
          </View>
          <View style={{ alignItems: 'center' }}>
          {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
          <Modal isVisible={isModalVisible} >
            <View style={{ flexDirection: 'column', backgroundColor: '#FFF', padding: 10, borderRadius: 7 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 10, color: 'red', fontSize: CustomFont.font30, fontWeight: 'bold', textAlign: 'center' }}>Multiplication Over !</Text>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: 20, color: Color.green, fontSize: CustomFont.font16, textAlign: 'center', marginLeft: 20, marginRight: 20, }}>You have complete all Mathematics for {props.route.params.item.msg} </Text>

              </View>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: Color.grayBorder, height: responsiveHeight(6), backgroundColor: '#F7ED91', marginLeft: 20, marginRight: 20, marginTop: 40 }} onPress={() => {
                setisModalVisible(false)
                if(IsSoundEnabled)
    clickSound();
                props.navigation.goBack();
              }}>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', color: Color.black, fontSize: CustomFont.font16, textAlign: 'center' }}>Go to Next Math </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: Color.grayBorder, height: responsiveHeight(6), backgroundColor: Color.primary, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 30 }} onPress={() => {
                setisModalVisible(false)
                if(IsSoundEnabled)
    clickSound();
                props.navigation.goBack(null);
                props.navigation.goBack(null);
                //props.navigation.navigate('TableList', { item: { title: 'Start Test', route: 'TableList', tag: 'Test' }})
              }}>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', color: Color.black, fontSize: CustomFont.font16, textAlign: 'center' }}>Go to for Quize/Test</Text>
              </TouchableOpacity>

            </View>
          </Modal>
        </View>
      </ImageBackground>
    );
}
