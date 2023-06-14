import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, FlatList, TextInput, SafeAreaView } from 'react-native';

import back from '../../assets/back.png';
import pencil from '../../assets/edit_gray.png';
import eraser from '../../assets/eraser.png';
import color_picker from '../../assets/color_picker.png';
import close_white from '../../assets/close_white.png';
import previous from '../../assets/previous_btn.png';
import next from '../../assets/nxt_btn.png';
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
let colorArr = ["#fffde8", "#fffac3", "#fff59c", "#fff176", "#ffee58", "#ffeb3c", "#fdd734", "#fac02e", "#f9a825", "#f47f16", "#ffff8d", "#ffff00", "#ffea00", "#ffd600", "#fbe9e7", "#ffccbb", "#ffab91", "#ff8a66", "#ff7143", "#fe5722", "#f5511e", "#e64a19", "#d74315", "#bf360c", "#ff9e81", "#ff6e41", "#ff3d00", "#dd2c00", "#ebeff2", "#cfd8dd", "#b0bfc6", "#90a4ad", "#78909c", "#607d8b", "#546f7a", "#465a65", "#36474f", "#273238", "#fbe4ec", "#f9bbd0", "#f48fb1", "#f06292", "#ec407a", "#ea1e63", "#d81a60", "#c2175b", "#ad1457", "#890e4f", "#ff80ab", "#ff4181", "#f40057", "#c41162", "#e8eaaf", "#c5cae8", "#9ea8db", "#7986cc", "#5c6bc0", "#3f51b5", "#3949ab", "#303e9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304fff", "#dff7f9", "#b2ebf2", "#80deea", "#4dd0e2", "#25c6da", "#00bcd5", "#00e5ff", "#00b8d4", "#f1f7e9", "#ddedc8", "#c5e1a6", "#aed582", "#9ccc66", "#8bc24a", "#7db343", "#689f39", "#548b2e", "#33691e", "#cdff90", "#b2ff59", "#76ff02", "#64dd16", "#fef8e0", "#ffecb2", "#ffe083", "#ffd54f", "#ffc928", "#fec107", "#ffb200", "#ff9f00", "#ff8e01", "#ff6f00", "#fee580", "#ffd741", "#fec400", "#ffab00", "#efebe8", "#d7ccc8", "#bcaba4", "#a0887e", "#8c6e63", "#795547", "#6d4d42", "#5d4038", "#4d342f", "#3e2622", "#f3e5f6", "#e1bee8", "#cf93d9", "#b968c7", "#aa47bc", "#9c28b1", "#8e24aa", "#7a1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fc", "#d500fa", "#aa00ff", "#e4f2fb", "#bbdefa", "#90caf8", "#64b5f6", "#42a5f6", "#2196f3", "#1d89e4", "#1976d3", "#1564c0", "#0e47a1", "#82b1ff", "#438afe", "#2879fe", "#2a62ff", "#e0f2f2", "#b2dfdc", "#80cbc4", "#4cb6ac", "#26a59a", "#009788", "#00887a", "#00796a", "#00695b", "#004c3f", "#a7feeb", "#64feda", "#1de9b6", "#01bfa5", "#f9fbe6", "#f0f4c2", "#e6ee9b", "#dde776", "#d4e056", "#cddc39", "#c0ca33", "#b0b42b", "#9e9e24", "#817716", "#f4fe81", "#eeff41", "#c6ff00", "#aeea00", "#fff2df", "#ffe0b2", "#ffcc80", "#ffb64d", "#ffa827", "#ff9700", "#fb8c00", "#f67c01", "#ef6c00", "#e65100", "#ffd181", "#ffab40", "#ff9000", "#ff6d00", "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#000000", "#ffffff"];
let previousColor = 'red';
//import RangeSlider from '@jesster2k10/react-native-range-slider';
let PencilRange = 10, EraseRange = 20, range = 10;
let whoosh = null;
import { txtToSpeakEng, txtToSpeak,clickSound,playSound } from '../components/CommonFunc';
import ViewPager from 'react-native-pager-view';
import { setMode } from 'react-native-sound';
var Sound = require('react-native-sound');
let position = 0, isSound = true;
const Tracing=(props)=>{
const [isModalVisible,setisModalVisible]=useState(false)
const [isModalVisibleRange,setisModalVisibleRange]=useState(false)
const [selcetedColor,setselcetedColor]=useState('red')
const [mode,setmode]=useState('Pencil')
const [selectedStroke,setselectedStroke]=useState(10)
const [dataArray,setdataArray]=useState([])
const [pageIndex,setpageIndex]=useState(0)
const [prevShowStatus,setprevShowStatus]=useState(false)
const [nextShowStatus,setnextShowStatus]=useState(true)
const [refreshCanvas,setrefreshCanvas]=useState(true);
let item ={};
const viewpager =useRef(null)

  // constructor(props) {
  //   super(props);
  //   state = {
  //     isModalVisible: false,
  //     isModalVisibleRange: false,
  //     selcetedColor: 'red',
  //     mode: 'Pencil',
  //     selectedStroke: 10,
  //     dataArray: [],
  //     pageIndex: 0,
  //     prevShowStatus: false,
  //     nextShowStatus: true,
  //     refreshCanvas: true,
  //   };
  // }
  useEffect(()=>{
     item = props.route.params.item;
    if (item) {
      if (item.id == 1)
        getEngish();
      else if (item.id == 2)
        getSarabarna();
      else if (item.id == 3)
        getBanjanaBarna();
        else if (item.id == 4)
        getEngishNumber();
        else if (item.id == 5)
        getBengaliNumber();
    }
  },[])
  const getEngishNumber = () => {
    isSound = false;
    let tempArr = [];
    for (let i = 0; i < 101; i++) {
      tempArr.push({ engName: i+'' , sound: null, txtColor: null,})
      //console.log('---------'+i%txtColorArr.length );
    }
    setdataArray(tempArr)
    //alert(txtColorArr.length)
  }
  const getEngish = () => {
    isSound = true;
    let tempArr = [
      { engName: "A", sound: 'a.mp3', txtColor: "#FFE5EB", },
      { engName: "B", sound: 'b.mp3', txtColor: "#c1d8c1" },
      { engName: "C", sound: 'c.mp3', txtColor: "#ff00fe" },
      { engName: "D", sound: 'd.mp3', txtColor: "#eab2e9" },
      { engName: "E", sound: 'e.mp3', txtColor: "#DC9900" },
      { engName: "F", sound: 'f.mp3', txtColor: "#d6c9ab" },
      { engName: "G", sound: 'g.mp3', txtColor: "#b2adad" },
      { engName: "H", sound: 'h.mp3', txtColor: "#aebfab" },
      { engName: "I", sound: 'i.mp3', txtColor: "#e3c4e3" },
      { engName: "J", sound: 'j.mp3', txtColor: "#e7aaa3" },
      { engName: "K", sound: 'k.mp3', txtColor: "#bacdea" },
      { engName: "L", sound: 'l.mp3', txtColor: "#c49dcc" },
      { engName: "M", sound: 'm.mp3', txtColor: "#da8302" },
      { engName: "N", sound: 'n.mp3', txtColor: "#e1cbaa" },
      { engName: "O", sound: 'o.mp3', txtColor: "#afc3af" },
      { engName: "P", sound: 'p.mp3', txtColor: "#b6aadd" },
      { engName: "Q", sound: 'q.mp3', txtColor: "#ddb7cb" },
      { engName: "R", sound: 'r.mp3', txtColor: "#dbabc0" },
      { engName: "S", sound: 's.mp3', txtColor: "#aec9ae" },
      { engName: "T", sound: 't.mp3', txtColor: "#aac3aa" },
      { engName: "U", sound: 'u.mp3', txtColor: "#dbc5a5" },
      { engName: "V", sound: 'v.mp3', txtColor: "#a4c9c9" },
      { engName: "W", sound: 'w.mp3', txtColor: "#fba4cb" },
      { engName: "X", sound: 'x.mp3', txtColor: "#aac0e1" },
      { engName: "Y", sound: 'y.mp3', txtColor: "#9dd49d" },
      { engName: "Z", sound: 'z.mp3', txtColor: "#dda5a5" },
    ];
    setdataArray(tempArr)
  }
  const getBengaliNumber = () => {
    isSound = false;
    let tempArr = [{ txtColor:"#ff00fe", engName: "০", name: "শুণ্য" },
    {txtColor:"#fe0000", engName: "১", name: "এক" },
    {txtColor:"#029702", engName: "২", name: "দুই" },
    {txtColor:"#ff00fe", engName: "৩", name: "তিন" },
    {txtColor:"#7430ff", engName: "৪", name: "চার" },
    {txtColor:"#DC9900", engName: "৫", name: "পাঁচ" },
    {txtColor:"#3800fd", engName: "৬", name: "ছয়" },
    {txtColor:"#000000", engName: "৭", name: "সাত" },
    {txtColor:"#0E6E01", engName: "৮", name: "আট" },
    {txtColor:"#ff00fe", engName: "৯", name: "নয়" },
    {txtColor:"#E0220E", engName: "১০", name: "দশ" },
    {txtColor:"#0166fe", engName: "১১", name: "এগারো" },
    {txtColor:"#b300d5", engName: "১২", name: "বারো" },
    {txtColor:"#da8302", engName: "১৩", name: "তেরো" },
    {txtColor:"#D81B60", engName: "১৪", name: "চোদ্দ" },
    {txtColor:"#007500", engName: "১৫", name: "পনেরো" },
    {txtColor:"#3900ff", engName: "১৬", name: "ষোল" },
    {txtColor:"#fe2f9c", engName: "১৭", name: "সতেরো" },
    {txtColor:"#7a2048", engName: "১৮", name: "আঠারো" },
    {txtColor:"#008000", engName: "১৯", name: "উনিশ" },
    {txtColor:"#00ce01", engName: "২০", name: "কুড়ি" },
    {txtColor:"#a96601", engName: "২১", name: "একুশ" },
    {txtColor:"#016565", engName: "২২", name: "বাইশ" },
    {txtColor:"#b03069", engName: "২৩", name: "তেইশ" },
    {txtColor:"#0165ff", engName: "২৪", name: "চব্বিশ" },
    {txtColor:"#fe0000", engName: "২৫", name: "পঁচিশ" },
    {txtColor:"#029702", engName: "২৬", name: "ছাব্বিশ" },
    {txtColor:"#ff00fe", engName: "২৭", name: "সাতাশ" },
    {txtColor:"#7430ff", engName: "২৮", name: "আঠাশ" },
    {txtColor:"#DC9900", engName: "২৯", name: "ঊনত্রিশ" },
    {txtColor:"#3800fd", engName: "৩০", name: "ত্রিশ" },
    {txtColor:"#000000", engName: "৩১", name: "একত্রিশ" },
    {txtColor:"#0E6E01", engName: "৩২", name: "বত্রিশ" },
    {txtColor:"#ff00fe", engName: "৩৩", name: "তেত্রিশ" },
    {txtColor:"#E0220E", engName: "৩৪", name: "চৌত্রিশ" },
    {txtColor:"#0166fe", engName: "৩৫", name: "পঁয়ত্রিশ" },
    {txtColor:"#b300d5", engName: "৩৬", name: "ছত্রিশ" },
    {txtColor:"#da8302", engName: "৩৭", name: "সাঁয়ত্রিশ" },
    {txtColor:"#D81B60", engName: "৩৮", name: "আটত্রিশ" },
    {txtColor:"#007500", engName: "৩৯", name: "ঊনচল্লিশ" },
    {txtColor:"#3900ff", engName: "৪০", name: "চল্লিশ" },
    {txtColor:"#fe2f9c", engName: "৪১", name: "একচল্লিশ" },
    {txtColor:"#7a2048", engName: "৪২", name: "বিয়াল্লিশ" },
    {txtColor:"#008000", engName: "৪৩", name: "তেতাল্লিশ" },
    {txtColor:"#00ce01", engName: "৪৪", name: "চুয়াল্লিশ" },
    {txtColor:"#a96601", engName: "৪৫", name: "পঁয়তাল্লিশ" },
    {txtColor:"#016565", engName: "৪৬", name: "ছেচল্লিশ" },
    {txtColor:"#b03069", engName: "৪৭", name: "সাতচল্লিশ" },
    {txtColor:"#0165ff", engName: "৪৮", name: "আটচল্লিশ" },
    {txtColor:"#002f00", engName: "৪৯", name: "ঊনপঞ্চাশ" },
    {txtColor:"#f90101", engName: "৫০", name: "পঞ্চাশ" },
    {txtColor:"#fe0000", engName: "৫১", name: "একান্ন" },
    {txtColor:"#029702", engName: "৫২", name: "বাহান্ন" },
    {txtColor:"#ff00fe", engName: "৫৩", name: "তিপ্পান্ন" },
    {txtColor:"#7430ff", engName: "৫৪", name: "চুয়ান্ন" },
    {txtColor:"#DC9900", engName: "৫৫", name: "পঞ্চান্ন" },
    {txtColor:"#3800fd", engName: "৫৬", name: "ছাপ্পান্ন" },
    {txtColor:"#000000", engName: "৫৭", name: "সাতান্ন" },
    {txtColor:"#0E6E01", engName: "৫৮", name: "আটান্ন" },
    {txtColor:"#ff00fe", engName: "৫৯", name: "ঊনষাট" },
    {txtColor:"#E0220E", engName: "৬০", name: "ষাট" },
    {txtColor:"#0166fe", engName: "৬১", name: "একষট্টি" },
    {txtColor:"#b300d5", engName: "৬২", name: "বাষট্টি" },
    {txtColor:"#da8302", engName: "৬৩", name: "তেষট্টি" },
    {txtColor:"#D81B60", engName: "৬৪", name: "চৌষট্টি" },
    {txtColor:"#007500", engName: "৬৫", name: "পঁয়ষট্টি" },
    {txtColor:"#3900ff", engName: "৬৬", name: "ছেষট্টি" },
    {txtColor:"#fe0000", engName: "৬৭", name: "সাতষট্টি" },
    {txtColor:"#029702", engName: "৬৮", name: "আটষট্টি" },
    {txtColor:"#ff00fe", engName: "৬৯", name: "ঊনসত্তর" },
    {txtColor:"#7430ff", engName: "৭০", name: "সত্তর" },
    {txtColor:"#DC9900", engName: "৭১", name: "একাত্তর" },
    {txtColor:"#3800fd", engName: "৭২", name: "বাহাত্তর" },
    {txtColor:"#000000", engName: "৭৩", name: "তিয়াত্তর" },
    {txtColor:"#0E6E01", engName: "৭৪", name: "চুয়াত্তর" },
    {txtColor:"#ff00fe", engName: "৭৫", name: "পঁচাত্তর" },
    {txtColor:"#E0220E", engName: "৭৬", name: "ছিয়াত্তর" },
    {txtColor:"#0166fe", engName: "৭৭", name: "সাতাত্তর" },
    {txtColor:"#b300d5", engName: "৭৮", name: "আটাত্তর" },
    {txtColor:"#da8302", engName: "৭৯", name: "ঊনআশি" },
    {txtColor:"#D81B60", engName: "৮০", name: "আশি" },
    {txtColor:"#007500", engName: "৮১", name: "একাশি" },
    {txtColor:"#3900ff", engName: "৮২", name: "বিরাশি" },
    {txtColor:"#fe2f9c", engName: "৮৩", name: "তিরাশি" },
    {txtColor:"#7a2048", engName: "৮৪", name: "চুরাশি" },
    {txtColor:"#008000", engName: "৮৫", name: "পঁচাশি" },
    {txtColor:"#00ce01", engName: "৮৬", name: "ছিয়াশি" },
    {txtColor:"#a96601", engName: "৮৭", name: "সাতাশি" },
    {txtColor:"#016565", engName: "৮৮", name: "অষ্টআশি" },
    {txtColor:"#b03069", engName: "৮৯", name: "ঊননব্বই" },
    {txtColor:"#0165ff", engName: "৯০", name: "নব্বই" },
    {txtColor:"#002f00", engName: "৯১", name: "একানব্বই" },
    {txtColor:"#f90101", engName: "৯২", name: "বিরানব্বই" },
    {txtColor:"#fe0000", engName: "৯৩", name: "তিরানব্বই" },
    {txtColor:"#029702", engName: "৯৪", name: "চুরানব্বই" },
    {txtColor:"#ff00fe", engName: "৯৫", name: "পঁচানব্বই" },
    {txtColor:"#7430ff", engName: "৯৬", name: "ছিয়ানব্বই" },
    {txtColor:"#DC9900", engName: "৯৭", name: "সাতানব্বই" },
    {txtColor:"#3800fd", engName: "৯৮", name: "আটানব্বই" },
    {txtColor:"#000000", engName: "৯৯", name: "নিরানব্বই" },
    {txtColor:"#0E6E01", engName: "১০০", name: "একশ’" },
    ];
    setdataArray(tempArr)
  }
  const getSarabarna = () => {
    isSound = true;
    let tempArr = [
      { engName: "অ", sound: 'soro1.mp3', txtColor: "#FFE5EB" },
      { engName: "আ", sound: 'soro2.mp3', txtColor: "#c1d8c1" },
      { engName: "ই", sound: 'soro3.mp3', txtColor: "#ff00fe" },
      { engName: "ঈ", sound: 'soro4.mp3', txtColor: "#eab2e9" },
      { engName: "উ", sound: 'soro5.mp3', txtColor: "#DC9900" },
      { engName: "ঊ", sound: 'soro6.mp3', txtColor: "#d6c9ab" },
      { engName: "ঋ", sound: 'soro7.mp3', txtColor: "#b2adad" },
      { engName: "ঌ", sound: '', txtColor: "#aebfab" },
      { engName: "এ", sound: 'soro8.mp3', txtColor: "#e3c4e3" },
      { engName: "ঐ", sound: 'soro9.mp3', txtColor: "#e7aaa3" },
      { engName: "ও", sound: 'soro10.mp3', txtColor: "#bacdea" },
      { engName: "ঔ", sound: 'soro11.mp3', txtColor: "#c49dcc" },

    ];
    setdataArray(tempArr)
  }
  getBanjanaBarna = () => {
    let tempArr = [
      { engName: "ক", sound: 'a.mp3', txtColor: "#FFE5EB" },
      { engName: "খ", sound: 'b.mp3', txtColor: "#c1d8c1" },
      { engName: "গ", sound: 'c.mp3', txtColor: "#ff00fe" },
      { engName: "ঘ", sound: 'd.mp3', txtColor: "#eab2e9" },
      { engName: "ঙ", sound: 'e.mp3', txtColor: "#DC9900" },
      { engName: "চ", sound: 'f.mp3', txtColor: "#d6c9ab" },
      { engName: "ছ", sound: 'g.mp3', txtColor: "#b2adad" },
      { engName: "জ", sound: 'h.mp3', txtColor: "#aebfab" },
      { engName: "ঝ", sound: 'i.mp3', txtColor: "#e3c4e3" },
      { engName: "ঞ", sound: 'j.mp3', txtColor: "#e7aaa3" },
      { engName: "ট", sound: 'k.mp3', txtColor: "#bacdea" },
      { engName: "ঠ", sound: 'l.mp3', txtColor: "#c49dcc" },
      { engName: "ড", sound: 'm.mp3', txtColor: "#da8302" },
      { engName: "ঢ", sound: 'n.mp3', txtColor: "#e1cbaa" },
      { engName: "ণ", sound: 'o.mp3', txtColor: "#afc3af" },
      { engName: "ত", sound: 'p.mp3', txtColor: "#b6aadd" },
      { engName: "থ", sound: 'q.mp3', txtColor: "#ddb7cb" },
      { engName: "দ", sound: 'r.mp3', txtColor: "#dbabc0" },
      { engName: "ধ", sound: 's.mp3', txtColor: "#aec9ae" },
      { engName: "ন", sound: 't.mp3', txtColor: "#aac3aa" },
      { engName: "প", sound: 'u.mp3', txtColor: "#dbc5a5" },
      { engName: "ফ", sound: 'v.mp3', txtColor: "#a4c9c9" },
      { engName: "ব", sound: 'w.mp3', txtColor: "#fba4cb" },
      { engName: "ভ", sound: 'x.mp3', txtColor: "#aac0e1" },
      { engName: "ম", sound: 'y.mp3', txtColor: "#9dd49d" },
      { engName: "য", sound: 'z.mp3', txtColor: "#dda5a5" },
      { engName: "র", sound: 'a.mp3', txtColor: "#FFE5EB" },
      { engName: "ল", sound: 'b.mp3', txtColor: "#c1d8c1" },
      { engName: "শ", sound: 'c.mp3', txtColor: "#ff00fe" },
      { engName: "ষ", sound: 'd.mp3', txtColor: "#eab2e9" },
      { engName: "স", sound: 'e.mp3', txtColor: "#DC9900" },
      { engName: "হ", sound: 'f.mp3', txtColor: "#d6c9ab" },
      { engName: "ড়", sound: 'g.mp3', txtColor: "#b2adad" },
      { engName: "ঢ়", sound: 'h.mp3', txtColor: "#aebfab" },
      { engName: "য়", sound: 'i.mp3', txtColor: "#e3c4e3" },
      { engName: "ৎ", sound: 'j.mp3', txtColor: "#e7aaa3" },

    ];
    isSound = false;
    setdataArray(tempArr)
  }

  EraseMode = () => {
    range = EraseRange;
    setselcetedColor('#FFF');
    setisModalVisibleRange(true);
    setMode('Erase');
    setselectedStroke(EraseRange)
    //setState({ selcetedColor: '#FFF', isModalVisibleRange: true, mode: 'Erase', selectedStroke: EraseRange, });
    //Snackbar.show({ text: 'Erase', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
  }
  PencilMode = () => {
    range = PencilRange;
    setselcetedColor(previousColor);
    setisModalVisibleRange(true);
    setMode('Pencil');
    setselectedStroke(PencilRange);

    //setState({ selcetedColor: previousColor, isModalVisibleRange: true, mode: 'Pencil', selectedStroke: PencilRange, });
    //Snackbar.show({ text: 'Pencil', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
  }
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), backgroundColor: item, margin: 3 }} onPress={() => {
      previousColor = item;
      setselcetedColor(item)
      setisModalVisible(false);
      setselectedStroke(PencilRange);
      //setState({ selcetedColor: item, isModalVisible: false, selectedStroke: PencilRange })
    }}>
    </TouchableOpacity>
  );
  
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', height: responsiveHeight(7), marginTop: responsiveHeight(4) }}>
          <TouchableOpacity onPress={() => {
            if(IsSoundEnabled)
            clickSound();
            props.navigation.goBack();
            //props.route.params.Refresh();
          }}>
            <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ marginRight: responsiveWidth(5) }} onPress={() => EraseMode()}>
              <Image source={eraser} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: responsiveWidth(5) }} onPress={() => PencilMode()}>
              <Image source={pencil} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: responsiveWidth(5) }} onPress={() =>setisModalVisible(true)}>
              <Image source={color_picker} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 10 }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;
            if (position == 0)
            setprevShowStatus(false)
            else
            setprevShowStatus(true)

            if (position == dataArray.length - 1)
            setnextShowStatus(false)
            else
            setnextShowStatus(true)

            if (isSound) {
              playSound(dataArray[position].sound)
              // if (whoosh) {
              //   whoosh.stop(() => {
              //     whoosh.release();
              //   });
              // }
              // whoosh = new Sound(Platform.OS == 'android' ? dataArray[position].sound : 'sound/' + dataArray[position].sound, Sound.MAIN_BUNDLE, (error) => {
              //   if (error) {
              //     console.log('failed to load the sound', error);
              //     return;
              //   }
              //   // loaded successfully
              //   //console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

              //   // Play the sound with an onEnd callback
              //   whoosh.play((success) => {
              //     if (success) {
              //       console.log('successfully finished playing');
              //     } else {
              //       console.log('playback failed due to audio decoding errors');
              //     }
              //   });
              // });
            } else {
              if(props.route.params.item.id==4)
              txtToSpeakEng(dataArray[position].engName)
              else
              txtToSpeak(dataArray[position].engName)
            }
            setpageIndex(position);
          }} setPage={pageIndex} ref={viewpager} scrollEnabled={false}>
            {dataArray.map((item, index) => {
              return (
                <View style={{ flex: 1 }}>
                  <SketchCanvas
                    style={{ flex: 1, zIndex: 99 }}
                    strokeColor={selcetedColor}
                    strokeWidth={selectedStroke}
                  />
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  <Text style={{ color: item.txtColor, fontSize: CustomFont.font60, position: 'absolute', top: responsiveHeight(2), marginLeft: responsiveWidth(30), fontFamily:Platform.OS == 'ios' ? 'Trace Font for Kids':'test3' }}>{item.engName}</Text>
                  {item.id == 2 ? <Text style={{ color: item.txtColor, fontSize: CustomFont.font60, position: 'absolute', bottom: responsiveHeight(10), marginLeft: responsiveWidth(34), textTransform: 'lowercase', fontFamily: Platform.OS == 'ios' ? 'Trace Font for Kids':'test3' }}>{item.engName}</Text> : null}

                  {nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(12), right: 10, zIndex: 999 }} onPress={() => {
                    
                    viewpager.current.setPage(++position)
                  }}>
                    <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: item.color }} />
                  </TouchableOpacity> : null}

                  {prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(12), left: 10, zIndex: 999 }} onPress={() => {
                    viewpager.current.setPage(--position)
                  }}>
                    <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: item.color }} />
                  </TouchableOpacity> : null}
                </View>
              );
            }, this)}
          </ViewPager>
        </View>
        <Modal isVisible={isModalVisible} onRequestClose={() => setisModalVisible(false)}>
          <View style={{ flex: 1, backgroundColor: Color.white, borderRadius: 10, marginTop: responsiveHeight(5) }}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', margin: responsiveWidth(3) }}>
              <TouchableOpacity onPress={() => setisModalVisible(false)}>
                <Image source={close_white} style={{ tintColor: Color.primaryBlue, height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginRight: 10, marginLeft: 5 }} />
              </TouchableOpacity>
              <Text style={{ margin: 5, fontSize: CustomFont.font16, color: Color.fontColor }}>Select color</Text>
              <View style={{ height: 50, width: 80, backgroundColor: selcetedColor, marginRight: responsiveWidth(5), borderRadius: 4 }} />
            </View>
            <FlatList
              numColumns={4}
              style={{ marginTop: 10 }}
              data={colorArr}
              renderItem={renderList}
              //ItemSeparatorComponent={renderSeparator}
              keyExtractor={(item, index) => index.toString()} />
          </View>
        </Modal>
        <Modal isVisible={isModalVisibleRange} onRequestClose={() =>setisModalVisibleRange(false) }>
          <View style={{ width: '100%', backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

            <Text style={{ marginTop: responsiveHeight(2), fontWeight: 'bold', fontSize: CustomFont.font18 }}>{mode} Mode</Text>
            <TouchableOpacity onPress={() => {
              if (range < 50) {
                range++;
                setselectedStroke(range);
              } else {
                Snackbar.show({ text: 'You have reach at max', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
              }

            }}>
              <Image source={plus} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), margin: responsiveHeight(2), }} />
            </TouchableOpacity>
            <TextInput value={selectedStroke + ''} onChangeText={txt => {
              setselectedStroke(txt);
              //setState({ selectedStroke })
            }} maxLength={2} keyboardType={'number-pad'} style={{ height: responsiveHeight(7), width: responsiveWidth(30), borderColor: Color.createInputBorder, borderRadius: 6, borderWidth: 1, textAlign: 'center', fontSize: CustomFont.font16 }} />
            <TouchableOpacity onPress={() => {
              if (range > 1) {
                range--;
                setselectedStroke(range);
              } else {
                Snackbar.show({ text: 'You have reach at min', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
              }

            }}>
              <Image source={minus} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), margin: responsiveHeight(2), }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: Color.primaryBlue, justifyContent: 'center', alignItems: 'center', height: responsiveHeight(7), width: responsiveWidth(40), marginBottom: responsiveHeight(3), marginTop: responsiveHeight(2), borderRadius: 7 }}
              onPress={() => {
                if (mode == 'Pencil')
                  PencilRange = range;
                else
                  EraseRange = range;
                  setisModalVisibleRange(false)
                  setselectedStroke(range);
              }}>
              <Text style={{ fontWeight: 'bold', fontSize: CustomFont.font16, color: '#FFF' }}>Ok</Text>
            </TouchableOpacity>
          </View>

        </Modal>
      </View>
    );
}
export default Tracing;
