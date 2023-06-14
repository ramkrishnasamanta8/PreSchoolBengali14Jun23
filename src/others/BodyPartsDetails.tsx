import React,{useEffect,useRef,useState} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, ScrollView, Platform, SafeAreaView } from 'react-native';

import back_blue from '../../assets/back_blue.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import Tts from 'react-native-tts';
//Tts.setDefaultLanguage('ben');
//Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import OptionMenu from '../components/OptionMenu';
import Color from '../components/Colors';
import Toolbar from '../components/Toolbar';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
let position = 0, favTxt = '', id = '';
export default BodyPartsDetails=(props)=> {
const [image,setimage]=useState(props.route.params.item.image);
const [plantName,setplantName]=useState(props.route.params.item.name);
const [dataArray,setdataArray]=useState([]);
let [pageIndex,setpageIndex]=useState(0);
const [prevShowStatus,setprevShowStatus]=useState(false);
const [nextShowStatus,setnextShowStatus]=useState(true);
const viewpager=useRef(null);
useEffect(()=>{

  let item = props.route.params.item;
  if (item) {
    if (item.id == 1)
      getBodyParts();
    else if (item.id == 2)
      colorData();
    else if (item.id == 3)
      shapeData();
    else if (item.id == 4)
      fruitData();
    else if (item.id == 5)
      vegitableData();
    else if (item.id == 6)
      animalData();
    else if (item.id == 7)
      flowerData();
    else if (item.id == 8)
      birdData();
    else if (item.id == 9)
      vehicalData();
    else if (item.id == 10)
      sportsData();
    else if (item.id == 11)
      placeData();
    else if (item.id == 12)
      directionData();
    else if (item.id == 13)
      furnitureData();
    else if (item.id == 14)
      seaAnimalData();
    else if (item.id == 15)
      insectData();
    else if (item.id == 16)
      natureData();
    else if (item.id == 17)
      babyAnimalData();
    else if (item.id == 18)
      computerData();
    else if (item.id == 19)
      cronData();
    else if (item.id == 20)
      mahadeshData();
    else if (item.id == 21)
      mahasagarData();
    else if (item.id == 22)
      food();


  }
  position = 0;
},[])

  const getBodyParts = () => {
    let tempArr = [
      { id: 0, engName: "Head ", bengName: "মাথা ", image: require('../../assets/b_head.png') },
      { id: 0, engName: "Finger ", bengName: "আঙ্গুল", image: require('../../assets/b_fingure.jpg') },
      { id: 0, engName: "Thumb ", bengName: "অঙ্গুষ্ঠ", image: require('../../assets/b_thumb.jpg') },
      { id: 0, engName: "Leg ", bengName: "পা", image: require('../../assets/b_leg.jpg') },
      { id: 0, engName: "Foot ", bengName: "পায়ের পাতা", image: require('../../assets/b_foot.jpg') },
      { id: 0, engName: "Neck ", bengName: "ঘাড়", image: require('../../assets/b_neck.jpg') },
      { id: 0, engName: "Ear ", bengName: "কান", image: require('../../assets/b_ear.jpg') },
      { id: 0, engName: "Eye Brow ", bengName: "ভুরু", image: require('../../assets/b_eyebrow.png') },
      { id: 0, engName: "Forehead ", bengName: "কপাল", image: require('../../assets/b_forehead.jpg') },
      { id: 0, engName: "Teeth ", bengName: "দাঁত", image: require('../../assets/b_teeth.jpg') },
      { id: 0, engName: "Tongue ", bengName: "জিহ্বা", image: require('../../assets/b_tongue.jpg') },
      { id: 0, engName: "Back ", bengName: "পেছনে", image: require('../../assets/b_back.jpg') },
      { id: 0, engName: "Shoulder ", bengName: "কাঁধ", image: require('../../assets/b_shoulder.jpg') },
      { id: 0, engName: "Knees ", bengName: "হাঁটু", image: require('../../assets/b_knee.png') },
      { id: 0, engName: "Hair ", bengName: "চুল", image: require('../../assets/b_hair.jpg') },
      { id: 0, engName: "Arms ", bengName: "বাহু", image: require('../../assets/b_arms.jpg') },
      { id: 0, engName: "Chest ", bengName: "বুক", image: require('../../assets/b_chest.jpg') },
      { id: 0, engName: "Stomach ", bengName: "পাকস্থলী", image: require('../../assets/b_stomach.jpg') },
      { id: 0, engName: "Nose ", bengName: "নাক", image: require('../../assets/b_nose.jpg') },
      { id: 0, engName: "Hand ", bengName: "হাত", image: require('../../assets/b_hand.jpg') },
      { id: 0, engName: "Eye ", bengName: "চোখ", image: require('../../assets/b_eye.jpg') },
      { id: 0, engName: "Lips ", bengName: "ঠোঁট", image: require('../../assets/b_lips.jpg') },
      { id: 0, engName: "Mouth ", bengName: "মুখ", image: require('../../assets/b_mouth.jpg') }

    ]
    setdataArray(tempArr);
  }
  const colorData = () => {
    let tempArr = [{ id: 0, engName: "Red", bengName: "লাল", color: "#FF0000" },
    { id: 0, engName: "Orange", bengName: "কমলা", color: "#fe9600" },
    { id: 0, engName: "Yellow", bengName: "হলুদ", color: "#FFFF00" },
    { id: 0, engName: "Lime", bengName: "লাইম", color: "#00FF00" },
    { id: 0, engName: "Aqua", bengName: "একোয়া", color: "#00FFFF" },
    { id: 0, engName: "Fucia", bengName: "ফিউসিয়া", color: "#FF00FF" },
    { id: 0, engName: "Green", bengName: "সবুজ", color: "#008000" },
    { id: 0, engName: "Merun", bengName: "মেরুন", color: "#800000" },
    { id: 0, engName: "Olives", bengName: "জলপাই", color: "#808000" },
    { id: 0, engName: "Purple", bengName: "পার্পল", color: "#800080" },
    { id: 0, engName: "Blue", bengName: "নীল", color: "#0000FF" },
    { id: 0, engName: "Violet", bengName: "বেগুনী", color: "#9400D3" },
    { id: 0, engName: "Pink", bengName: "পিঙ্ক", color: "#FF69B4" },
    { id: 0, engName: "Grey", bengName: "ধূসর", color: "#808080" },
    { id: 0, engName: "Brown", bengName: "বাদামী", color: "#A52A2A" },
    { id: 0, engName: "White", bengName: "সাদা", color: "#FFFFFF" },
    { id: 0, engName: "Black", bengName: "কালো", color: "#000000" },
    { id: 0, engName: "Silver", bengName: "রূপা", color: "#FF0000" },
    { id: 0, engName: "Deep Violet", bengName: "ডিপ বেগুনী", color: "#9400D3" },
    { id: 0, engName: "Purple blue", bengName: "বেগনি নীলবর্ণ", color: "#4B0082" },
    { id: 0, engName: "Greenish yellow", bengName: "সবুজাভ হলুদ", color: "#ADFF2F" },
    { id: 0, engName: "Sigrin", bengName: "সিগ্রিন", color: "#2E8B57" },
    { id: 0, engName: "Olive oil", bengName: "অলিভদ্রাব", color: "#6B8E23" },
    { id: 0, engName: "In Aquamarine", bengName: "একোয়ামারিনে", color: "#7FFFD4" },
    { id: 0, engName: "Deep SkyWee", bengName: "ডিপ স্কাইব্লুই ", color: "#00BFFF" },
    { id: 0, engName: "Medium slate blue", bengName: "মাঝারি স্লেট ব্লু", color: "#7B68EE" },
    { id: 0, engName: "Chocolate", bengName: "চকলেট", color: "#D2691E" },
    { id: 0, engName: "Peru", bengName: "পেরু", color: "#CD853F" },
    { id: 0, engName: "Golden Road", bengName: "গোল্ডেনরোড", color: "#DAA520" },
    { id: 0, engName: "Sandy brown", bengName: "বেলে বাদামী", color: "#f4a460" }];
    setdataArray(tempArr);
  }
  const shapeData = () => {
    let tempArr = [{ id: 0, engName: "Nonagon", bengName: "নবভুজ ", image: require('../../assets/nonagon.jpg') },
    { id: 0, engName: "Heptagon", bengName: "সমসপ্তভুজ ", image: require('../../assets/heptagon.png') },
    { id: 0, engName: "Hexagon", bengName: "ষড়্ভুজাকার", image: require('../../assets/hexagon.png') },
    { id: 0, engName: "Triangle", bengName: "ত্রিভুজ", image: require('../../assets/triangle.png') },
    { id: 0, engName: "Scalene triangle", bengName: "বিষমভুজ ত্রিভুজ", image: require('../../assets/s_triangle.png') },
    { id: 0, engName: "Right triangle", bengName: "সঠিক ত্রিভুজ", image: require('../../assets/r_triangle.png') },
    { id: 0, engName: "Parallelogram", bengName: "সমান্তরিক-ক্ষেত্র", image: require('../../assets/parallelogram.jpg') },
    { id: 0, engName: "Rhombus", bengName: "রম্বস", image: require('../../assets/rhombus.png') },
    { id: 0, engName: "Square", bengName: "বর্গক্ষেত্র", image: require('../../assets/square.png') },
    { id: 0, engName: "Pentagon", bengName: "পঁচকোণ", image: require('../../assets/pentagon.png') },
    { id: 0, engName: "Circle", bengName: "বৃত্ত", image: require('../../assets/circle.png') },
    { id: 0, engName: "Oval", bengName: "উপবৃত্তাকার", image: require('../../assets/oval.png') },
    { id: 0, engName: "Heart", bengName: "হৃদয়", image: require('../../assets/heart.png') },
    { id: 0, engName: "Arrow", bengName: "তীর", image: require('../../assets/arrow.png') },
    { id: 0, engName: "Cube", bengName: "ঘনক্ষেত্র", image: require('../../assets/cube.jpg') },
    { id: 0, engName: "Cylinder", bengName: "নল", image: require('../../assets/cylinder.jpg') },
    { id: 0, engName: "Star", bengName: "তারকা", image: require('../../assets/star_red.jpg') },
    { id: 0, engName: "Crescent", bengName: "অর্ধচন্দ্রাকার", image: require('../../assets/crescent.png') },
    { id: 0, engName: "Rectangle", bengName: "আয়তক্ষেত্র", image: require('../../assets/rect.webp') },];
    setdataArray(tempArr);
  }
  const fruitData = () => {
    let tempArr = [{ id: 0, engName: "Apple", bengName: "আপেল", image: require('../../assets/apple.jpg') },
    { id: 0, engName: "Peach", bengName: "পীচ", image: require('../../assets/peach.png') },
    { id: 0, engName: "Pomegranate", bengName: "বেদানা", image: require('../../assets/franar.jpg') },
    { id: 0, engName: "Avocado", bengName: "আভাকাডো", image: require('../../assets/avocado.png') },
    { id: 0, engName: "Coconut", bengName: "নারিকেল", image: require('../../assets/coconuts.png') },
    { id: 0, engName: "Lemon", bengName: "লেবু", image: require('../../assets/lemon.png') },
    { id: 0, engName: "Pineapple", bengName: "আনারস", image: require('../../assets/pineapples.png') },
    { id: 0, engName: "Kiwi", bengName: "কিবি", image: require('../../assets/kiwi.png') },
    { id: 0, engName: "Papaya", bengName: "পেঁপে", image: require('../../assets/papaya.jpg') },
    { id: 0, engName: "Jackfruit", bengName: "কাঁঠাল", image: require('../../assets/katal.jpg') },
    { id: 0, engName: "Mandarin", bengName: "ম্যান্ডারিন", image: require('../../assets/mandarins.jpg') },
    { id: 0, engName: "Raspberry", bengName: "রাস্পবেরি", image: require('../../assets/raspberry.jpg') },
    { id: 0, engName: "Banana", bengName: "কলা", image: require('../../assets/banana.png') },
    { id: 0, engName: "Plum", bengName: "তাল", image: require('../../assets/plum.png') },
    { id: 0, engName: "Blueberry", bengName: "জাম কুল ", image: require('../../assets/blueberry.jpg') },
    { id: 0, engName: "Mango", bengName: "আম", image: require('../../assets/mangos.jpg') },
    { id: 0, engName: "Grape", bengName: "আঙ্গুর", image: require('../../assets/grapes.png') },
    { id: 0, engName: "Nectarine", bengName: "নেক্যারিনে", image: require('../../assets/nectarine.png') },
    { id: 0, engName: "Strawberry", bengName: "স্ট্রবেরি", image: require('../../assets/strawberry.png') },
    { id: 0, engName: "Cherry", bengName: "চেরিফল", image: require('../../assets/cherry.jpg') },
    { id: 0, engName: "Pear", bengName: "নাশপাতি", image: require('../../assets/pears.jpg') },
    { id: 0, engName: "Orange", bengName: "কমলা", image: require('../../assets/organge.png') },
    { id: 0, engName: "Watermelon", bengName: "তরমুজ", image: require('../../assets/watermelon.png') },
    { id: 0, engName: "Guava", bengName: "পেয়ারা", image: require('../../assets/guava.jpg') },
    { id: 0, engName: "Date", bengName: "খেজুর", image: require('../../assets/date.jpg') },
    { id: 0, engName: "Custard Apple", bengName: "আতা", image: require('../../assets/custard_apple.jpg') },];
    setdataArray(tempArr);
  }
  const vegitableData = () => {
    let tempArr = [{ id: 0, engName: "Beetroot", bengName: "বীট", image: require('../../assets/beetroot.jpg') },
    { id: 0, engName: "Pumpkin", bengName: "কুমড়া", image: require('../../assets/frvgpumpkin.png') },
    { id: 0, engName: "Mushroom", bengName: "মাশরুম", image: require('../../assets/mushroom.png') },
    { id: 0, engName: "Bitter Gourd", bengName: "উচ্ছে", image: require('../../assets/bittergourd.jpg') },
    { id: 0, engName: "Black Pepper", bengName: "গোল মরিচ", image: require('../../assets/blackpepper.jpg') },
    { id: 0, engName: "Bottle Gourd ", bengName: "বোতল লাউ", image: require('../../assets/bottle_gourd.jpg') },
    { id: 0, engName: "Cabbage", bengName: "বাঁধাকপি", image: require('../../assets/cabbage.jpg') },
    { id: 0, engName: "Capsicum", bengName: "ক্যাপসিকাম", image: require('../../assets/green_pepper.png') },
    { id: 0, engName: "Carrot", bengName: "গাজর", image: require('../../assets/carrot.png') },
    { id: 0, engName: "Cauliflower", bengName: "ফুলকপি", image: require('../../assets/cauliflower.jpg') },
    { id: 0, engName: "Corinder leaf", bengName: "ধনে পাতা", image: require('../../assets/corinder_leaf.jpg') },
    { id: 0, engName: "Corn", bengName: "ভূট্টা", image: require('../../assets/cron.jpg') },
    { id: 0, engName: "Celery", bengName: "সেলারি", image: require('../../assets/celery.jpg') },
    { id: 0, engName: "Chilli", bengName: "লঙ্কা", image: require('../../assets/chilli.jpg') },
    { id: 0, engName: "Eggplant", bengName: "বেগুন", image: require('../../assets/eggplant.jpg') },
    { id: 0, engName: "Cucumber", bengName: "শসা", image: require('../../assets/frvgcucumber.png') },
    { id: 0, engName: "Fenugreek Leaf", bengName: "মেথি পাতা", image: require('../../assets/fenugreek.jpg') },
    { id: 0, engName: "Turnip", bengName: "শালগম", image: require('../../assets/turnip.png') },
    { id: 0, engName: "Courgette", bengName: "কোর্গেটটা", image: require('../../assets/courgette.jpg') },
    { id: 0, engName: "Green chilli", bengName: "কাঁচা লঙ্কা", image: require('../../assets/green_chillies.png') },
    { id: 0, engName: "Onion", bengName: "পেঁয়াজ", image: require('../../assets/onions.png') },
    { id: 0, engName: "Lettuce", bengName: "লেটুস", image: require('../../assets/lettuce.jpg') },
    { id: 0, engName: "Radish", bengName: "মূলা", image: require('../../assets/radish.png') },
    { id: 0, engName: "Asparagus", bengName: "শতমূলী", image: require('../../assets/asparagus.png') },
    { id: 0, engName: "Green pepper", bengName: "সবুজ মরিচ", image: require('../../assets/green_pepper.png') },
    { id: 0, engName: "French beans ", bengName: "ফরাসি মটরশুটি", image: require('../../assets/french_beans.jpg') },
    { id: 0, engName: "Snake Gourd  ", bengName: "চিচিঙ্গা ", image: require('../../assets/snake_gourd.jpg') },
    { id: 0, engName: "Garlic", bengName: "রসুন", image: require('../../assets/garlic.jpg') },
    { id: 0, engName: "Ginger", bengName: "আদা", image: require('../../assets/ginger.jpg') },
    { id: 0, engName: "Lady’s finger", bengName: "ঢেঁড়স", image: require('../../assets/lady_finger.jpg') },
    { id: 0, engName: "Peppermint", bengName: "পুদিনা", image: require('../../assets/peppermint.jpg') },
    { id: 0, engName: "Potato", bengName: "আলু", image: require('../../assets/potato.jpg') },
    { id: 0, engName: "Spinach", bengName: "পালং", image: require('../../assets/spinach.jpg') },
    { id: 0, engName: "Sweet Potato", bengName: "রাঙাআলু", image: require('../../assets/sweet_potato.jpg') },
    { id: 0, engName: "Tomato", bengName: "টমেটো", image: require('../../assets/frvgtomato.png') },
    { id: 0, engName: "Broccoli", bengName: "ব্রোকলি", image: require('../../assets/broccoli.jpg') },];
    setdataArray(tempArr);
  }
  const animalData = () => {
    let tempArr = [{ id: 0, engName: "Leopard", bengName: "চিতা", image: require('../../assets/leopard.jpg') },
    { id: 0, engName: "Hippopotamus", bengName: "জলহস্তী", image: require('../../assets/hippopotamus.jpg') },
    { id: 0, engName: "Deer", bengName: "হরিণ", image: require('../../assets/anmdeer.png') },
    { id: 0, engName: "Raccoon", bengName: "র্যাকুন", image: require('../../assets/raccoon.jpg') },
    { id: 0, engName: "Hedgehong", bengName: "হেডগেহং", image: require('../../assets/hedgehong.jpg') },
    { id: 0, engName: "Bear", bengName: "ভালুক", image: require('../../assets/bear.jpg') },
    { id: 0, engName: "Dog", bengName: "কুকুর", image: require('../../assets/dfordog.jpg') },
    { id: 0, engName: "Elephant", bengName: "হাতি", image: require('../../assets/eforele.png') },
    { id: 0, engName: "Fox", bengName: "শিয়াল", image: require('../../assets/fforfox.jpg') },
    { id: 0, engName: "Yak", bengName: "চমরী গাই", image: require('../../assets/yforyak.png') },
    { id: 0, engName: "Chimpanzee", bengName: "বনমানুষ", image: require('../../assets/chimpanzee.jpg') },
    { id: 0, engName: "Sheep", bengName: "ভেড়া", image: require('../../assets/sheep.jpg') },
    { id: 0, engName: "Giraffe", bengName: "জিরাফ", image: require('../../assets/anmgiraffe.png') },
    { id: 0, engName: "Goat", bengName: "ছাগল", image: require('../../assets/gforgoat.jpg') },
    { id: 0, engName: "Kangaroo", bengName: "ক্যাঙ্গারু", image: require('../../assets/kforkangaroo.png') },
    { id: 0, engName: "Lion", bengName: "সিংহ", image: require('../../assets/lforlion.png') },
    { id: 0, engName: "Mouse", bengName: "ইঁদুর", image: require('../../assets/mforouse.png') },
    { id: 0, engName: "Pig", bengName: "শূকর", image: require('../../assets/pforpig.png') },
    { id: 0, engName: "Rabbit", bengName: "খরগোশ", image: require('../../assets/rforrabbit.jpg') },
    { id: 0, engName: "Tiger", bengName: "বাঘ", image: require('../../assets/tiger.jpg') },
    { id: 0, engName: "Walrus", bengName: "সিন্ধুঘোটক", image: require('../../assets/walrus.png') },
    { id: 0, engName: "Horse", bengName: "ঘোড়া", image: require('../../assets/horse_animal.jpg') },
    { id: 0, engName: "Monkey", bengName: "বানর", image: require('../../assets/anmmonkey.png') },
    { id: 0, engName: "Cow", bengName: "গোরু", image: require('../../assets/cow.jpg') },
    { id: 0, engName: "Jaguar", bengName: "জাগুয়ার", image: require('../../assets/leopard.jpg') },
    { id: 0, engName: "Zebra", bengName: "জেব্রা", image: require('../../assets/zforzebra.jpg') },];
    setdataArray(tempArr);
  }
  const flowerData = () => {
    let tempArr = [{ id: 0, engName: "Rose", bengName: "গোলাপ", image: require('../../assets/rose_flower.jpg') },
    { id: 0, engName: "Jasminum", bengName: "জুঁইফুল", image: require('../../assets/jasminum.jpg') },
    { id: 0, engName: "Primrose", bengName: "হলুদ ফুল", image: require('../../assets/primrose.jpg') },
    { id: 0, engName: "Marigold", bengName: "গাঁদা ফুল", image: require('../../assets/marigold.jpg') },
    { id: 0, engName: "Sunflower", bengName: "সূর্যমুখী", image: require('../../assets/sunflower.jpg') },
    { id: 0, engName: "Lotus", bengName: "পদ্ম", image: require('../../assets/lotus.jpg') },
    { id: 0, engName: "Oleander", bengName: "করবী", image: require('../../assets/oleander.jpg') },
    { id: 0, engName: "Daisy", bengName: "পুষ্পবৃক্ষ", image: require('../../assets/daisy.jpg') },
    { id: 0, engName: "Poppy", bengName: "পপি ফুল", image: require('../../assets/poppy.jpg') },
    { id: 0, engName: "Daffodil", bengName: "ড্যাফোডিল", image: require('../../assets/daffodil.jpg') },
    { id: 0, engName: "Datura", bengName: "ধুতুরা", image: require('../../assets/datura.jpg') },
    { id: 0, engName: "Delonix Regia", bengName: "ডেলোনিক্স রেজিয়া", image: require('../../assets/delonixregia.jpg') },
    { id: 0, engName: "Pandanus", bengName: "পান্ডানুস", image: require('../../assets/pandanus.jpg') },
    { id: 0, engName: "Allium", bengName: "অলিউম", image: require('../../assets/allium.jpg') },
    { id: 0, engName: "Alstroemeria", bengName: "আলস্ট্রোএমেরিয়া", image: require('../../assets/alstroemeria.jpg') },
    { id: 0, engName: "Amaranthus", bengName: "পারিজাত", image: require('../../assets/amaranthus.jpg') },
    { id: 0, engName: "Amaryllis", bengName: "রজনীগন্ধা-গোত্রীয় বৃক্ষ", image: require('../../assets/amaryllis.jpg') },
    { id: 0, engName: "Aster", bengName: "তারাফুল", image: require('../../assets/aster.jpg') },
    { id: 0, engName: "Dahlia", bengName: "ডালিয়া", image: require('../../assets/dahlia.jpg') },
    { id: 0, engName: "PotMarigold", bengName: "চন্দ্র মল্লিকা", image: require('../../assets/potMarigold.jpg') },
    { id: 0, engName: "SesbaniaGrandiflora", bengName: "বকফুল", image: require('../../assets/sesbaniaGrandiflora.jpg') },
    { id: 0, engName: "Undefeated ", bengName: "অপরাজিতা", image: require('../../assets/undefeated.jpg') },
    { id: 0, engName: "BluewaterLily ", bengName: "নীল শালুক ", image: require('../../assets/bluewaterLily.jpg') },
    { id: 0, engName: "Balloon Flower", bengName: "বেলুন ফুল", image: require('../../assets/balloon_flower.jpg') },];
    setdataArray(tempArr);
  }
  const birdData = () => {
    let tempArr = [{ id: 0, engName: "Duck", bengName: "পাতিহাঁস", image: require('../../assets/duck.jpg') },
    { id: 0, engName: "King Fisher", bengName: "মাছরাঙ্গা", image: require('../../assets/kingfisher.jpg') },
    { id: 0, engName: "Nightingale", bengName: "কোকিল ", image: require('../../assets/kingfisher.jpg') },
    { id: 0, engName: "HummingBird", bengName: "হামিংবার্ড", image: require('../../assets/hummingbird.jpg') },
    { id: 0, engName: "Owl", bengName: "পেঁচা", image: require('../../assets/oforowl.png') },
    { id: 0, engName: "Crow", bengName: "কাক", image: require('../../assets/crow.jpg') },
    { id: 0, engName: "Peacock", bengName: "ময়ুর", image: require('../../assets/peacock.jpg') },
    { id: 0, engName: "Dove", bengName: "ঘুঘু", image: require('../../assets/dove.webp') },
    { id: 0, engName: "Sparrow", bengName: "চড়ুই", image: require('../../assets/sparrow.png') },
    { id: 0, engName: "Goose", bengName: "হংসী", image: require('../../assets/goose.jpg') },
    { id: 0, engName: "Ostrich", bengName: "উটপাখী", image: require('../../assets/ostrich.jpg') },
    { id: 0, engName: "Bee-Eater", bengName: "ভল্লুক", image: require('../../assets/beeeater.jpg') },
    { id: 0, engName: "Guinea Fowl", bengName: "গিনি ফাউল", image: require('../../assets/guinea_fowl.jpg') },
    { id: 0, engName: "Herons", bengName: "সারস", image: require('../../assets/herons.jpg') },
    { id: 0, engName: "Turkey", bengName: "তুরস্ক মোরগ", image: require('../../assets/turkey.jpg') },
    { id: 0, engName: "Hawk", bengName: "বাজপাখি", image: require('../../assets/hawk.png') },
    { id: 0, engName: "Raven", bengName: "দ্রোন কাক", image: require('../../assets/raven.jpg') },
    { id: 0, engName: "Parrot", bengName: "টিয়া পাখি", image: require('../../assets/parrot.jpg') },
    { id: 0, engName: "Flamingo", bengName: "মরাল", image: require('../../assets/anmflamingo.png') },
    { id: 0, engName: "Penguin", bengName: "পেংগুইন", image: require('../../assets/penguin.png') },
    { id: 0, engName: "Stork", bengName: "সারস", image: require('../../assets/stork.jpg') },
    { id: 0, engName: "Swift", bengName: "সুইফ্ট পাখি", image: require('../../assets/swift.jpg') },
    { id: 0, engName: "Hornbill", bengName: "হর্ণবিল", image: require('../../assets/hornbill.jpg') },
    { id: 0, engName: "Rallidae ", bengName: "রালিডে", image: require('../../assets/rallidae.jpg') },
    { id: 0, engName: "Spoonbill", bengName: "স্পনবিল", image: require('../../assets/spoonbill.jpg') },];
    setdataArray(tempArr);
  }
  const vehicalData = () => {
    let tempArr = [{ id: 0, engName: "Taxi", bengName: "ট্যাক্সি", image: require('../../assets/taxi.jpg') },
    { id: 0, engName: "Police car", bengName: "পুলিশ গাড়ী", image: require('../../assets/police.jpg') },
    { id: 0, engName: "Bus", bengName: "বাস", image: require('../../assets/bus.png') },
    { id: 0, engName: "Ambulance", bengName: "অ্যাম্বুলেন্স", image: require('../../assets/ambulance.jpg') },
    { id: 0, engName: "Baby Carriage", bengName: "শিশু পরিবহন", image: require('../../assets/baby_carriage.jpg') },
    { id: 0, engName: "Bicycle", bengName: "সাইকেল", image: require('../../assets/bicycle.png') },
    { id: 0, engName: "Scooter", bengName: "স্কুটার", image: require('../../assets/scooter.jpg') },
    { id: 0, engName: "Auto", bengName: "অটো", image: require('../../assets/auto.jpg') },
    { id: 0, engName: "Motorcycle", bengName: "মোটরসাইকেল", image: require('../../assets/motorcycle.jpg') },
    { id: 0, engName: "Fire engine", bengName: "দমকল", image: require('../../assets/fireengine.jpg') },
    { id: 0, engName: "Crane", bengName: "কপিকল", image: require('../../assets/crane.png') },
    { id: 0, engName: "Tractor", bengName: "ট্র্যাক্টর", image: require('../../assets/tractor.png') },
    { id: 0, engName: "Cement mixer", bengName: "সিমেন্ট মিক্সার", image: require('../../assets/cement_mixer.jpg') },
    { id: 0, engName: "Dump truck", bengName: "ট্রাক ডাম্প", image: require('../../assets/dump_truck.jpg') },
    { id: 0, engName: "Helicopter", bengName: "হেলিকপ্টার", image: require('../../assets/helicopter.jpg') },
    { id: 0, engName: "Airplane", bengName: "বিমান", image: require('../../assets/airplane.jpg') },
    { id: 0, engName: "Rowboat", bengName: "বাইচের নৌকা", image: require('../../assets/rowboat.jpg') },
    { id: 0, engName: "Train", bengName: "রেলগাড়ি", image: require('../../assets/train.jpg') },];
    setdataArray(tempArr);
  }
  const sportsData = () => {
    let tempArr = [{ id: 0, engName: "Archery", bengName: "ধনুর্বিদ্যা", image: require('../../assets/archery.jpg') },
    { id: 0, engName: "Badminton", bengName: "Badminton", image: require('../../assets/badminton.jpg') },
    { id: 0, engName: "Cricket", bengName: "ব্যাড্মিন্টন-খেলা", image: require('../../assets/cricket.png') },
    { id: 0, engName: "Boxing", bengName: "বক্সিং", image: require('../../assets/boxing.png') },
    { id: 0, engName: "Tennis", bengName: "টেনিস", image: require('../../assets/tennis.png') },
    { id: 0, engName: "Skateboarding", bengName: "স্কেটবর্ডিং", image: require('../../assets/skateboarding.png') },
    { id: 0, engName: "Hockey", bengName: "হকিখেলা", image: require('../../assets/hoki.jpg') },
    { id: 0, engName: "Fitness", bengName: "ফিটনেস", image: require('../../assets/fitness.png') },
    { id: 0, engName: "Karate", bengName: "ক্যারাট", image: require('../../assets/karate.jpg') },
    { id: 0, engName: "Basketball", bengName: "বাস্কেটবল", image: require('../../assets/basketball.jpg') },
    { id: 0, engName: "Car racing ", bengName: "গাড়ি রেসিং", image: require('../../assets/car_racing.jpg') },
    { id: 0, engName: "Cycling", bengName: "সাইকেল চালানো", image: require('../../assets/cycling.jpg') },
    { id: 0, engName: "Table tennis", bengName: "টেবিল টেনিস", image: require('../../assets/table_tennis.png') },
    { id: 0, engName: "Fishing", bengName: "মাছ ধরা", image: require('../../assets/fishing.jpg') },
    { id: 0, engName: "canoeing", bengName: "নৌকা চালানো", image: require('../../assets/canoeing.jpg') },
    { id: 0, engName: "Surfing", bengName: "সার্ফিং", image: require('../../assets/surfing.jpg') },
    { id: 0, engName: "Football", bengName: "ফুটবল", image: require('../../assets/football.jpg') },
    { id: 0, engName: "Golf", bengName: "গলফ খেলা", image: require('../../assets/golf.jpg') },
    { id: 0, engName: "Running", bengName: "দৌড়ানো", image: require('../../assets/running.jpg') },];
    setdataArray(tempArr);
  }
  const placeData = () => {
    let tempArr = [{ id: 0, engName: "House", bengName: "ঘর", image: require('../../assets/house.jpg') },
    { id: 0, engName: "School", bengName: "বিদ্যালয়", image: require('../../assets/school.webp') },
    { id: 0, engName: "Library", bengName: "গ্রন্থাগার", image: require('../../assets/library.jpg') },
    { id: 0, engName: "Laboratory", bengName: "পরীক্ষাগার", image: require('../../assets/laboratory.jpg') },
    { id: 0, engName: "Bus Stop", bengName: "বাস স্টপেজ", image: require('../../assets/busstop.jpg') },
    { id: 0, engName: "Railway Station", bengName: "রেল স্টেশন", image: require('../../assets/railway_station.jpg') },
    { id: 0, engName: "Airport", bengName: "বিমানবন্দর", image: require('../../assets/airplane.jpg') },
    { id: 0, engName: "Temple", bengName: "মন্দির", image: require('../../assets/temple.jpg') },
    { id: 0, engName: "Mosque", bengName: "মসজিদ", image: require('../../assets/mosque.jpg') },
    { id: 0, engName: "Church", bengName: "গির্জা", image: require('../../assets/church.jpg') },
    { id: 0, engName: "Police Station", bengName: "থানা", image: require('../../assets/police_station.jpg') },
    { id: 0, engName: "Fire Station", bengName: "অগ্নি নির্বাপন কেন্দ্র", image: require('../../assets/fire_station.jpg') },
    { id: 0, engName: "Post Office", bengName: "ডাক ঘর", image: require('../../assets/postoffice.webp') },
    { id: 0, engName: "Beach", bengName: "সৈকত", image: require('../../assets/beach.jpg') },
    { id: 0, engName: "Theme Park", bengName: "থিম পার্ক", image: require('../../assets/theme_park.jpg') },
    { id: 0, engName: "Zoo", bengName: "চিড়িয়াখানা", image: require('../../assets/zoo.jpg') },
    { id: 0, engName: "Meseum", bengName: "জাদুঘর", image: require('../../assets/meseum.jpg') },
    { id: 0, engName: "Harbour", bengName: "জাহাজ ঘাট", image: require('../../assets/harbour.jpg') },
    { id: 0, engName: "Cinema Theater", bengName: "সিনেমা থিয়েটার", image: require('../../assets/cinema_theater.jpg') },
    { id: 0, engName: "Restaurant", bengName: "রেঁস্তোরা", image: require('../../assets/restaurant.jpg') },
    { id: 0, engName: "Hospital", bengName: "হাসপাতাল", image: require('../../assets/hospital.jpg') },
    { id: 0, engName: "Fuel Station", bengName: "তেলপাম্প", image: require('../../assets/fuel_station.jpg') },
    { id: 0, engName: "Power Plant", bengName: "বিদ্যুৎ কেন্দ্র", image: require('../../assets/power_plant.jpg') },
    { id: 0, engName: "Stadium", bengName: "খেলার মাঠ", image: require('../../assets/stadium.jpg') },];
    setdataArray(tempArr);
  }
  const directionData = () => {
    let tempArr = [{ id: 0, engName: "All Directions", bengName: "সমস্ত দিকনির্দেশ", image: require('../../assets/direction_pic.jpg') }];
    setdataArray(tempArr);
  }
  const furnitureData = () => {
    let tempArr = [{ id: 0, engName: "Chair", bengName: "চেয়ার", image: require('../../assets/chair.jpg') },
    { id: 0, engName: "Table", bengName: "টেবিল", image: require('../../assets/table.jpg') },
    { id: 0, engName: "Armchair", bengName: "আরামকেদারা", image: require('../../assets/armchair.webp') },
    { id: 0, engName: "Stool", bengName: "বসবার টুল", image: require('../../assets/stool.jpg') },
    { id: 0, engName: "Bench", bengName: "বেঞ্চ", image: require('../../assets/bench.jpg') },
    { id: 0, engName: "Sofa", bengName: "সোফা", image: require('../../assets/sofa.jpg') },
    { id: 0, engName: "Cabinet", bengName: "কক্ষ-সংক্রান্ত", image: require('../../assets/cabinet.jpg') },
    { id: 0, engName: "Desk", bengName: "ডেস্ক", image: require('../../assets/desk.jpg') },
    { id: 0, engName: "Office Chair", bengName: "অফিস চেয়ার", image: require('../../assets/office_chair.jpg') },
    { id: 0, engName: "Dining Table", bengName: "খাবার টেবিল", image: require('../../assets/dining_table.jpg') },
    { id: 0, engName: "Showcase", bengName: "প্রদর্শনী", image: require('../../assets/showcase.jpg') },
    { id: 0, engName: "Bed", bengName: "বিছানা", image: require('../../assets/bed.jpg') },];
    setdataArray(tempArr);
  }
  const seaAnimalData = () => {
    let tempArr = [{ id: 0, engName: "Crab", bengName: "কাঁকড়া", image: require('../../assets/anmcrab.png') },
    { id: 0, engName: "Fish", bengName: "মাছ", image: require('../../assets/fish.png') },
    { id: 0, engName: "Octopus", bengName: "অক্টোপাস", image: require('../../assets/octopus.png') },
    { id: 0, engName: "Shark", bengName: "হাঙ্গর", image: require('../../assets/shark.png') },
    { id: 0, engName: "Seahorse", bengName: "সমুদ্র ঘোড়া", image: require('../../assets/seahorse.png') },
    { id: 0, engName: "Starfish", bengName: "তারামাছ", image: require('../../assets/starfish.png') },
    { id: 0, engName: "Whale", bengName: "তিমি", image: require('../../assets/whale.jpg') },
    { id: 0, engName: "Penguin", bengName: "পেঙ্গুইন", image: require('../../assets/penguin.png') },
    { id: 0, engName: "Jellyfish", bengName: "জেলিফিশ", image: require('../../assets/jellyfish.jpg') },
    { id: 0, engName: "Seal", bengName: "সীল", image: require('../../assets/seal.jpg') },
    { id: 0, engName: "Dolphin", bengName: "শুশুক", image: require('../../assets/dolphin.jpg') },
    { id: 0, engName: "Shrimp", bengName: "চিংড়ি", image: require('../../assets/shrimp.png') },
    { id: 0, engName: "Killer Whale", bengName: "হত্যাকারী তিমি", image: require('../../assets/killer_whale.png') },
    { id: 0, engName: "Pelican", bengName: "চাতক", image: require('../../assets/pelican.jpg') },
    { id: 0, engName: "Squid", bengName: "স্কুইড", image: require('../../assets/squid.jpg') },
    { id: 0, engName: "Walrus", bengName: "সিন্ধুঘোটক", image: require('../../assets/walrus.png') },
    { id: 0, engName: "Coral", bengName: "প্রবাল", image: require('../../assets/coral.png') },];
    setdataArray(tempArr);
  }
  const insectData = () => {
    let tempArr = [{ id: 0, engName: "Firefly", bengName: "জোনাকি", image: require('../../assets/firefly.jpg') },
    { id: 0, engName: "LadyBug", bengName: "গুবরে-পোকা", image: require('../../assets/lady_bug.png') },
    { id: 0, engName: "Moth", bengName: "পতঙ্গ", image: require('../../assets/moth.png') },
    { id: 0, engName: "Ant", bengName: "পিপীলিকা", image: require('../../assets/ant.jpg') },
    { id: 0, engName: "Spider", bengName: "মাকড়সা", image: require('../../assets/spider.jpg') },
    { id: 0, engName: "Cockroach", bengName: "তেলাপোকা", image: require('../../assets/cockroach.webp') },
    { id: 0, engName: "Hornet", bengName: "ভ্রমর", image: require('../../assets/hornet.webp') },
    { id: 0, engName: "Grasshopper", bengName: "গঙ্গাফড়িং", image: require('../../assets/grasshopper.jpg') },
    { id: 0, engName: "Mosquito", bengName: "মশা", image: require('../../assets/mosquito.png') },
    { id: 0, engName: "Butterfly", bengName: "প্রজাপতি", image: require('../../assets/butterfly.jpg') },
    { id: 0, engName: "Bee", bengName: "মৌমাছি", image: require('../../assets/bee.jpg') },
    { id: 0, engName: "Beetle", bengName: "পোকা", image: require('../../assets/beetle.jpg') },
    { id: 0, engName: "House Fly", bengName: "মাছি", image: require('../../assets/housefly.jpg') },
    { id: 0, engName: "Dragon fly", bengName: "ফড়িং", image: require('../../assets/dragonfly.jpg') },];
    setdataArray(tempArr);
  }
  const natureData = () => {
    let tempArr = [{ id: 0, engName: "Waterfall", bengName: "জলপ্রপাত", image: require('../../assets/waterfall.jpg') },
    { id: 0, engName: "Hill", bengName: "পাহাড়", image: require('../../assets/hill.jpg') },
    { id: 0, engName: "Mountain", bengName: "পর্বত", image: require('../../assets/mountain.jpg') },
    { id: 0, engName: "Plateau", bengName: "মালভূমি", image: require('../../assets/plateau.jpg') },
    { id: 0, engName: "Sea", bengName: "সমুদ্র", image: require('../../assets/sea_nature.jpg') },
    { id: 0, engName: "River", bengName: "নদী", image: require('../../assets/river.webp') },
    { id: 0, engName: "Lake", bengName: "হ্রদ", image: require('../../assets/lake.jpg') },
    { id: 0, engName: "Rain", bengName: "বৃষ্টি", image: require('../../assets/rain_nature.png') },
    { id: 0, engName: "Fog", bengName: "কুয়াশা", image: require('../../assets/fog.jpg') },
    { id: 0, engName: "Rainbow", bengName: "রামধনু", image: require('../../assets/rainbow.png') },
    { id: 0, engName: "Sun", bengName: "সূর্য", image: require('../../assets/sun.jpg') },
    { id: 0, engName: "Cloud", bengName: "মেঘ", image: require('../../assets/cloud.jpg') },
    { id: 0, engName: "Wind", bengName: "বায়ু", image: require('../../assets/wind.jpg') },
    { id: 0, engName: "Snow", bengName: "তুষার", image: require('../../assets/snow.jpg') },
    { id: 0, engName: "Lightning", bengName: "বজ্র", image: require('../../assets/light.jpg') },
    { id: 0, engName: "Flood", bengName: "বন্যা", image: require('../../assets/flood.jpg') },
    { id: 0, engName: "Volcanic eruption", bengName: "আগ্নেয়গিরির অগ্ন্যুত্পাত", image: require('../../assets/vol.png') },
    { id: 0, engName: "Earthquak", bengName: "ভূমিকম্প", image: require('../../assets/earthquake.jpg') },
    { id: 0, engName: "Forest Fire", bengName: "বনের আগুন", image: require('../../assets/forest.png') },
    { id: 0, engName: "Tornado", bengName: "ঘূর্ণিঝড়", image: require('../../assets/tornado.jpg') },
    { id: 0, engName: "Tsunami", bengName: "সুনামি", image: require('../../assets/tsunami.jpg') },];
    setdataArray(tempArr);
  }
  const babyAnimalData = () => {
    let tempArr = [{ id: 0, engName: "Calf", bengName: "বাছুর", image: require('../../assets/calf.jpg') },
    { id: 0, engName: "Pups", bengName: "কুকুরছানা", image: require('../../assets/pup.jpg') },
    { id: 0, engName: "Cub", bengName: "পশুশাবক", image: require('../../assets/cub.webp') },
    { id: 0, engName: "Kids", bengName: "বাচ্চারা", image: require('../../assets/kids.jpg') },
    { id: 0, engName: "Chick", bengName: "পাখির ছানা", image: require('../../assets/chick.jpg') },
    { id: 0, engName: "Joeyj", bengName: "ক্যাঙ্গারু শাবক", image: require('../../assets/joey.jpg') },
    { id: 0, engName: "Fawn", bengName: "হরিণ শাবক", image: require('../../assets/fawn.jpg') },
    { id: 0, engName: "Foal", bengName: "ঘোড়া বাচ্চা", image: require('../../assets/foal.jpg') },
    ];
    setdataArray(tempArr);
  }
  const computerData = () => {
    let tempArr = [{ id: 0, engName: "All Parts", bengName: "সমস্ত অংশ", image: require('../../assets/all.jpg') },
    { id: 0, engName: "Cpu", bengName: "Cpu", image: require('../../assets/cpu.jpg') },
    { id: 0, engName: "Monitor", bengName: "মনিটর", image: require('../../assets/monitor.jpg') },
    { id: 0, engName: "Mouse", bengName: "মাউস", image: require('../../assets/mouse.jpg') },
    { id: 0, engName: "Keyboard", bengName: "কীবোর্ড", image: require('../../assets/keyboard.jpg') },
    { id: 0, engName: "Printer", bengName: "প্রিন্টার", image: require('../../assets/printer.jpg') },
    { id: 0, engName: "Headphones", bengName: "হেডফোন", image: require('../../assets/microphone.jpg') },
    { id: 0, engName: "Scanner", bengName: "স্ক্যানার", image: require('../../assets/scanner.webp') },
    { id: 0, engName: "Compact Disk(CD)", bengName: "কমপ্যাক্ট ডিস্ক (সিডি)", image: require('../../assets/cd.jpg') },
    { id: 0, engName: "Hard Disk", bengName: "হার্ড ডিস্ক", image: require('../../assets/hardisk.jpg') },
    { id: 0, engName: "Ram", bengName: "Ram", image: require('../../assets/ram.jpg') },
  ];
    setdataArray(tempArr);
  }
  const cronData = () => {
    let tempArr = [
      { id: 0, engName: "Corn", bengName: "ভুট্টা", image: require('../../assets/cron.jpg') },
      { id: 0, engName: "Barley", bengName: "জব", image: require('../../assets/millet.jpg') },
      { id: 0, engName: "Fenugreek", bengName: "মেথি", image: require('../../assets/methi.jpg') },
      { id: 0, engName: "Gram", bengName: "ছোলা", image: require('../../assets/chana.jpg') },
      { id: 0, engName: "Husk", bengName: "তুষ", image: require('../../assets/husk.jpg') },
      { id: 0, engName: "Green Pea", bengName: "মটরশুঁটি", image: require('../../assets/french_beans.jpg') },
      { id: 0, engName: "Lentil", bengName: "মসুর", image: require('../../assets/musur.jpg') },
      { id: 0, engName: "Linseed", bengName: "তিসি", image: require('../../assets/tisi.jpg') },
      { id: 0, engName: "Kidney bean ", bengName: "রাজমা ", image: require('../../assets/rajma.jpg') },
      { id: 0, engName: "Mustard", bengName: "সরিষা", image: require('../../assets/mustard.jpg') },
      { id: 0, engName: "Paddy", bengName: "ধান ", image: require('../../assets/paddy.jpg') },
      { id: 0, engName: "Poppy seed", bengName: "পোস্তদানা", image: require('../../assets/poppy_seeds.jpg') },
      { id: 0, engName: "Oat", bengName: "জব", image: require('../../assets/oat.jpg') },
      { id: 0, engName: "Bran", bengName: "ভুসি", image: require('../../assets/bran.jpg') },
      { id: 0, engName: "Rice", bengName: "চাল", image: require('../../assets/rice.jpg') },
      { id: 0, engName: "Sago", bengName: "সাগু ", image: require('../../assets/sagu.jpg') },
      { id: 0, engName: "Sesame seed", bengName: "তিল", image: require('../../assets/sesame.jpg') },
      { id: 0, engName: "Mug", bengName: "মুগ", image: require('../../assets/mug.jpg') },
    ];
    setdataArray(tempArr);
  }
  const mahadeshData = () => {
    let tempArr = [
      { id: 0, engName: "Asia", bengName: "এশিয়া মহাদেশ। ", image: require('../../assets/asea.jpg') },
      { id: 0, engName: "Europe", bengName: "ইউরোপ মহাদেশ।", image: require('../../assets/europe.jpg') },
      { id: 0, engName: "Africa", bengName: "আফ্ৰিকা মহাদেশ।", image: require('../../assets/africa.jpg') },
      { id: 0, engName: "North America.", bengName: "উত্তর আমেরিকা।", image: require('../../assets/north_america.jpg') },
      { id: 0, engName: "South America.", bengName: "দক্ষিণ আমেরিকা।", image: require('../../assets/south_america.png') },
      { id: 0, engName: "Antarctica", bengName: "আন্টার্কটিকা মহাদেশ।", image: require('../../assets/antarktica.jpg') },
      { id: 0, engName: "Oceania", bengName: "ওশেনিয়া মহাদেশ।", image: require('../../assets/ocean.jpg') },
    ];
    setdataArray(tempArr);
  }
  const mahasagarData = () => {
    let tempArr = [{ id: 0, engName: "Pacific Ocean ", bengName: "প্রশান্ত মহাসাগর।", image: require('../../assets/prasanta.jpg') },
    { id: 0, engName: "Indian Ocean.", bengName: "ভারত মহাসাগর।", image: require('../../assets/bharat_maha.jpg') },
    { id: 0, engName: "Atlantic Ocean.", bengName: "আটলান্টিক মহাসাগর।", image: require('../../assets/atlantic.jpg') },
    { id: 0, engName: "North Ocean. ", bengName: "উত্তর মহাসাগর।", image: require('../../assets/north_mahasagar.png') },
    { id: 0, engName: "Southern Ocean.", bengName: "দক্ষিণ মহাসাগর।", image: require('../../assets/south_mahasagar.jpg') },];
    setdataArray(tempArr);
  }
  const food = () => {
    let tempArr = [
      { id: 0, engName: "Pizzas", bengName: "পিজা", image: require('../../assets/pizzas.jpg') },
      { id: 0, engName: "Chips", bengName: "চিপস", image: require('../../assets/chips.jpg') },
      { id: 0, engName: "Samosa ", bengName: "সিঙ্গারা", image: require('../../assets/samosa.jpg') },
      { id: 0, engName: "Bhujia", bengName: "ভুজিয়া", image: require('../../assets/bhujia.jpg') },
      { id: 0, engName: "Pani Poori", bengName: "ফুচকা", image: require('../../assets/paniPoori.jpg') },
      { id: 0, engName: "Puri", bengName: "লুচি", image: require('../../assets/puri.jpg') },
      { id: 0, engName: "Pakoras", bengName: "পকোড়া ", image: require('../../assets/pakoras.jpg') },
      { id: 0, engName: "Cake", bengName: "কেক", image: require('../../assets/cake.jpg') },
      { id: 0, engName: "Cookies", bengName: "বিস্কুট", image: require('../../assets/cookies.jpg') },
      { id: 0, engName: "French Fries", bengName: "ফ্রেঞ্চ ফ্রাই", image: require('../../assets/frenchFries.jpg') },
      { id: 0, engName: "Burger", bengName: "বার্গার", image: require('../../assets/burger.jpg') },
      { id: 0, engName: "Ice Cream", bengName: "আইসক্রিম", image: require('../../assets/iceCream.jpg') },
      { id: 0, engName: "Popcorn", bengName: "ভুট্টার খই", image: require('../../assets/popcorn.jpg') },
      { id: 0, engName: "Sandwich", bengName: "স্যান্ডউইচ", image: require('../../assets/sandwich.jpg') },
      { id: 0, engName: "Noodles", bengName: "নুডলস", image: require('../../assets/noodles.jpg') },
      { id: 0, engName: "Momos", bengName: "মোমোস", image: require('../../assets/momos.jpg') },
      { id: 0, engName: "White Bread", bengName: "পাউরুটি", image: require('../../assets/whiteBread.jpg') },
  ];
    setdataArray(tempArr);
  }
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={plantName} onBackPress={() =>{
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack()
        } } />
        {/* <View style={{ backgroundColor: '#008000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: responsiveHeight(7) }}>
          <TouchableOpacity style={{ flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF' }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>{plantName}</Text>
          </TouchableOpacity>
          <OptionMenu />


        </View> */}

        <View style={{ flex: 10, backgroundColor: Color.greenBg }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;
            if (position == 0)
              setprevShowStatus(false);
            else
            setprevShowStatus(true);

            if (position == dataArray.length - 1)
              setnextShowStatus(false);
            else
            setnextShowStatus(true);

            Tts.speak(dataArray[position].engName)
            setpageIndex(position);
          }} setPage={pageIndex} ref={viewpager}>
            {dataArray.map((item, index) => {
              return (
                <View style={{ flex: 1 }}>
                  <View>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>
                  
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ color: Color.white, fontSize: CustomFont.font30, fontWeight: 'bold', marginBottom: responsiveHeight(2), fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici'}}>{item.engName}</Text>
                  </View>
                  <View style={{ height: responsiveHeight(48), justifyContent: 'center', alignItems: 'center' }}>
                    {
                      item.image ? <View style={{ height: '95%', width: '95%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }} >
                        <Image source={item.image} style={{ height: '90%', width: '90%', margin: 20,  resizeMode: 'contain' }} />
                      </View> :
                        <View style={{ height: '95%', width: '95%', borderRadius: 10, backgroundColor: Color.white, justifyContent: 'center', alignItems: 'center' }}>
                          <View style={{ height: '86%', width: '86%', borderRadius: 10, backgroundColor: item.color }} />
                        </View>

                    }

                  </View>
                  <View style={{ flex: 1.5, alignItems: 'center' }}>
                    <Text style={{ color: Color.white, fontSize: CustomFont.font30, fontWeight: 'bold', marginTop: responsiveHeight(2), fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici'}}>{item.bengName}</Text>
                    {nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 10 }} onPress={() => {
                      if(IsSoundEnabled)
                      clickSound();
                     viewpager.current.setPage(++pageIndex)
                    }}>
                      <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                    </TouchableOpacity> : null}

                    {prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 10 }} onPress={() => {
                      if(IsSoundEnabled)
                      clickSound();
                      viewpager.current.setPage(--pageIndex)
                    }}>
                      <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                    </TouchableOpacity> : null}

                  </View>

                </View>
              );
            }, this)}
          </ViewPager>
        </View>

      </SafeAreaView>
    );
}
//export default HomeDrawer;
