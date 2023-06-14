import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList, Spokestack, ImageBackground } from 'react-native';

import Orientation from 'react-native-orientation';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import bgImage from '../../assets/bg.png';
import back from '../../assets/back.png';
import sound_off from '../../assets/sound_off.png';
import sound from '../../assets/sound.png';
import success from '../../assets/success.png';
import error from '../../assets/error.png';
let itemHome = null, from = 'cap';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';

import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let isSound = false;
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0, selectedStr = '', selectedIndexArr = [], tag='';
export default class WriteImgName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      score: 0,
      dataArray: [],
      imageStatus: null,
      imageStatusBtn: null,
      isBtnDisable: false,
      answerShowArray: [],
      refreshStr: '',
      clickIndex:-1,
      isSoundOn:true,
    };

  }
  async componentDidMount() {
    tag = this.props.route.params.tag;
    if (tag) {
      if (tag == 'Fruits') {
        this.Fruits();
      } else if (tag == 'Flowers') {
        this.Flowers();
      } else if (tag == 'Vegetables') {
        this.Vegetables();
      } else if (tag == 'Animals') {
        this.Animals();
      } else if (tag == 'Birds') {
        this.Birds();
      } else if (tag == 'Shapes') {
        this.Shapes();
      } else if (tag == 'Human Body') {
        this.HumanBody();
      } else if (tag == 'Vehicals') {
        this.Vehicals();
      } else if (tag == 'Colors') {
        this.Colors();
      } else if (tag == 'Flags') {
        this.Flags();
      } else if (tag == 'Capitals') {
        this.Capitals();
      } else if (tag == 'City') {
        this.City();
      } else if (tag == 'furniture') {
        this.furniture();
      } else if (tag == 'nature') {
        this.nature();
      } else if (tag == 'computer') {
        this.computer();
      } else if (tag == 'cron') {
        this.cron();
      }
    }
  }
  furniture = () => {
    let tempArr = [
      { id: 0, question: "Chair", bengName: "চেয়ার", image: require('../../assets/chair.jpg') , ans: ['h','m','a','f','e','j','r','s','l','c','p','i',] },
        { id: 0, question: "Table", bengName: "টেবিল", image: require('../../assets/table.jpg') , ans: ['k','l','c','a','s','e','y','t','o','w','b','r',] },
        { id: 0, question: "Armchair", bengName: "আরামকেদারা", image: require('../../assets/armchair.webp') , ans: ['r','r','q','m','w','i','n','c','a','z','a','h',] },
        { id: 0, question: "Stool", bengName: "বসবার টুল", image: require('../../assets/stool.jpg') , ans: ['a','l','s','f','o','h','k','t','g','v','s','o',] },
        { id: 0, question: "Bench", bengName: "বেঞ্চ", image: require('../../assets/bench.jpg') , ans: ['x','c','z','e','p','w','b','d','n','g','j','h',] },
        { id: 0, question: "Sofa", bengName: "সোফা", image: require('../../assets/sofa.jpg') , ans: ['o','r','c','a','k','v','u','f','e','p','s','q',] },
        { id: 0, question: "Cabinet", bengName: "কক্ষ-সংক্রান্ত", image: require('../../assets/cabinet.jpg') , ans: ['e','b','m','a','q','n','p','w','t','i','u','c',] },
        { id: 0, question: "Desk", bengName: "ডেস্ক", image: require('../../assets/desk.jpg') , ans: ['a','l','f','e','j','x','k','m','c','d','t','s',] },
        { id: 0, question: "Office Chair", bengName: "অফিস চেয়ার", image: require('../../assets/office_chair.jpg') , ans: ['f','h','w','i','t','c','r','p','f','q','s','o','v','m','i','z','e','l','c','a',] },
        { id: 0, question: "Dining Table", bengName: "খাবার টেবিল", image: require('../../assets/dining_table.jpg') , ans: ['b','n','x','a','k','g','p','i','s','g','n','e','t','i','h','v','z','q','l','d',] },
        { id: 0, question: "Showcase", bengName: "প্রদর্শনী", image: require('../../assets/showcase.jpg') , ans: ['','','','','','','','','','','','','','','','','','','','',] },
        { id: 0, question: "Bed", bengName: "বিছানা", image: require('../../assets/bed.jpg') , ans: ['d','e','l','r','d','p','t','s','j','b','l','q',] },
       ];
    this.setState({ dataArray: tempArr })
  }
  nature = () => {
    let tempArr = [
      { id: 0, question: "Waterfall", bengName: "জলপ্রপাত", image: require('../../assets/waterfall.jpg') , ans: ['t','o','r','s','l','a','l','n','f','y','k','a','v','w','z','l','e',] },
        { id: 0, question: "Hill", bengName: "পাহাড়", image: require('../../assets/hill.jpg') , ans: ['s','l','q','m','p','h','e','a','w','l','u','i',] },
        { id: 0, question: "Mountain", bengName: "পর্বত", image: require('../../assets/mountain.jpg') , ans: ['o','m','b','t','k','s','i','n','h','n','u','a',] },
        { id: 0, question: "Plateau", bengName: "মালভূমি", image: require('../../assets/plateau.jpg') , ans: ['t','b','a','l','r','k','z','e','y','a','u','p',] },
        { id: 0, question: "Sea", bengName: "সমুদ্র", image: require('../../assets/sea_nature.jpg') , ans: ['e','w','u','s','j','q','m','a','k','f','p','d',] },
        { id: 0, question: "River", bengName: "নদী", image: require('../../assets/river.webp') , ans: ['v','d','r','j','m','e','w','k','q','g','i','r',] },
        { id: 0, question: "Lake", bengName: "হ্রদ", image: require('../../assets/lake.jpg') , ans: ['a','p','w','e','l','k','s','j','d','l','h','x',] },
        { id: 0, question: "Rain", bengName: "বৃষ্টি", image: require('../../assets/rain_nature.png') , ans: ['i','z','t','n','c','r','t','b','w','m','o','a',] },
        { id: 0, question: "Fog", bengName: "কুয়াশা", image: require('../../assets/fog.jpg') , ans: ['q','f','a','z','v','r','g','j','d','l','m','o',] },
        { id: 0, question: "Rainbow", bengName: "রামধনু", image: require('../../assets/rainbow.png') , ans: ['w','a','s','n','k','c','i','b','e','u','o','r',] },
        { id: 0, question: "Sun", bengName: "সূর্য", image: require('../../assets/sun.jpg') , ans: ['m','q','u','z','p','a','l','n','d','k','s','e',] },
        { id: 0, question: "Cloud", bengName: "মেঘ", image: require('../../assets/cloud.jpg') , ans: ['u','v','p','o','e','k','d','a','l','j','c','h',] },
        { id: 0, question: "Wind", bengName: "বায়ু", image: require('../../assets/wind.jpg') , ans: ['i','l','s','p','q','d','c','m','z','w','r','n',] },
        { id: 0, question: "Snow", bengName: "তুষার", image: require('../../assets/snow.jpg') , ans: ['p','s','b','e','w','z','a','i','o','r','v','n',] },
        { id: 0, question: "Lightning", bengName: "বজ্র", image: require('../../assets/light.jpg') , ans: ['h','i','s','n','q','g','k','g','i','n','t','l',] },
        { id: 0, question: "Flood", bengName: "বন্যা", image: require('../../assets/flood.jpg') , ans: ['o','q','h','d','a','k','l','c','s','o','t','f',] },
        { id: 0, question: "Volcanic eruption", bengName: "আগ্নেয়গিরির অগ্ন্যুত্পাত", image: require('../../assets/vol.png') , ans: ['n','v','t','c','u','l','b','i','c','a','h','o',] },
        { id: 0, question: "Earthquak", bengName: "ভূমিকম্প", image: require('../../assets/earthquake.jpg') , ans: ['a','u','h','i','v','a','r','q','w','k','e','t',] },
        { id: 0, question: "Forest Fire", bengName: "বনের আগুন", image: require('../../assets/forest.png') , ans: ['r','t','s','j','r','f','w','l','f','','e','o','u','i','y','v','e','t',] },
        { id: 0, question: "Tornado", bengName: "ঘূর্ণিঝড়", image: require('../../assets/tornado.jpg') , ans: ['n','m','o','b','d','z','o','q','r','y','a','t',] },
        { id: 0, question: "Tsunami", bengName: "সুনামি", image: require('../../assets/tsunami.jpg') , ans: ['n','d','t','g','i','u','j','o','a','p','m','s',] },
      ];
    this.setState({ dataArray: tempArr })
  }
  computer = () => {
    let tempArr = [
      { id: 0, question: "Cpu", bengName: "Cpu", image: require('../../assets/cpu.jpg') , ans: ['p','q','a','k','g','u','v','m','o','c','d','h',] },
      { id: 0, question: "Monitor", bengName: "মনিটর", image: require('../../assets/monitor.jpg') , ans: ['o','m','w','t','y','n','g','b','o','l','r','i',] },
      { id: 0, question: "Mouse", bengName: "মাউস", image: require('../../assets/mouse.jpg') , ans: ['w','o','u','s','q','e','k','t','u','p','d','m',] },
      { id: 0, question: "Keyboard", bengName: "কীবোর্ড", image: require('../../assets/keyboard.jpg') , ans: ['o','k','s','r','l','y','d','m','e','a','p','b',] },
      { id: 0, question: "Printer", bengName: "প্রিন্টার", image: require('../../assets/printer.jpg') , ans: ['r','f','n','o','u','t','d','i','k','e','p','r',] },
      { id: 0, question: "Headphones", bengName: "হেডফোন", image: require('../../assets/microphone.jpg') , ans: ['e','n','b','d','h','s','a','o','k','h','e','p',] },
      { id: 0, question: "Scanner", bengName: "স্ক্যানার", image: require('../../assets/scanner.webp') , ans: ['r','c','d','n','t','e','g','s','k','n','z','a',] },
      { id: 0, question: "Compact Disk(CD)", bengName: "কমপ্যাক্ট ডিস্ক (সিডি)", image: require('../../assets/cd.jpg') , ans: ['m','y','c','e','i','k','c','y','x','a','n','s','z','p','q','t','h','o','d',] },
      { id: 0, question: "Hard Disk", bengName: "হার্ড ডিস্ক", image: require('../../assets/hardisk.jpg') , ans: ['a','w','i','l','d','q','l','k','v','m','d','z','h','p','u','s','c','r',] },
      { id: 0, question: "Ram", bengName: "Ram", image: require('../../assets/ram.jpg') , ans: ['a','s','p','t','o','m','x','l','q','b','j','r',] },
    ];
    this.setState({ dataArray: tempArr })
  }
  cron = () => {
    let tempArr = [
      { id: 0, question: "Corn", bengName: "ভুট্টা", image: require('../../assets/cron.jpg') , ans: ['r','q','a','p','l','c','m','s','n','b','o',] },
      { id: 0, question: "Barley", bengName: "জব", image: require('../../assets/millet.jpg') , ans: ['l','g','a','h','e','j','k','y','r','u','y','b',] },
      { id: 0, question: "Fenugreek", bengName: "মেথি", image: require('../../assets/methi.jpg') , ans: ['u','f','h','b','r','q','o','n','s','e','z','l','e','p','k','a','g','e',] },
      { id: 0, question: "Gram", bengName: "ছোলা", image: require('../../assets/chana.jpg') , ans: ['r','s','w','t','j','m','z','x','l','g','k','a',] },
      { id: 0, question: "Husk", bengName: "তুষ", image: require('../../assets/husk.jpg') , ans: ['s','w','l','h','o','a','p','u','c','i','q','k',] },
      { id: 0, question: "Green Pea", bengName: "মটরশুঁটি", image: require('../../assets/french_beans.jpg') , ans: ['n','r','b','e','s','e','o','e','w','p','a','g',] },
      { id: 0, question: "Lentil", bengName: "মসুর", image: require('../../assets/musur.jpg') , ans: ['t','x','e','k','q','z','n','i','h','o','l','l',] },
      { id: 0, question: "Linseed", bengName: "তিসি", image: require('../../assets/tisi.jpg') , ans: ['l','e','j','n','a','d','w','s','v','i','k','e',] },
      { id: 0, question: "Kidney bean ", bengName: "রাজমা ", image: require('../../assets/rajma.jpg') , ans: ['i','n','e','d','b','q','o','e','n','a','k','y',] },
      { id: 0, question: "Mustard", bengName: "সরিষা", image: require('../../assets/mustard.jpg') , ans: ['a','u','b','t','k','r','e','m','q','d','n','s',] },
      { id: 0, question: "Paddy", bengName: "ধান ", image: require('../../assets/paddy.jpg') , ans: ['p','w','x','t','d','l','d','f','o','a','n','y',] },
      { id: 0, question: "Poppy seed", bengName: "পোস্তদানা", image: require('../../assets/poppy_seeds.jpg') , ans: ['o','w','y','c','p','l','u','p','h','s','p','t',] },
      { id: 0, question: "Oat", bengName: "জব", image: require('../../assets/oat.jpg') , ans: ['a','b','p','s','l','j','i','p','m','o','u','t',] },
      { id: 0, question: "Bran", bengName: "ভুসি", image: require('../../assets/bran.jpg') , ans: ['a','z','m','b','o','n','w','h','s','r','p','i',] },
      { id: 0, question: "Rice", bengName: "চাল", image: require('../../assets/rice.jpg') , ans: ['i','q','v','t','c','k','a','n','r','j','l','e',] },
      { id: 0, question: "Sago", bengName: "সাগু ", image: require('../../assets/sagu.jpg') , ans: ['g','c','m','f','s','k','b','o','d','n','l','a',] },
      { id: 0, question: "Sesame seed", bengName: "তিল", image: require('../../assets/sesame.jpg') , ans: ['s','e','c','a','s','t','y','e','l','v','e','z','d','k','s','q','o','m','e',] },
      { id: 0, question: "Mug", bengName: "মুগ", image: require('../../assets/mug.jpg') , ans: ['g','a','p','f','k','u','s','h','e','m','i','w',] },  
    ];
    this.setState({ dataArray: tempArr })
  }
  City = () => {
    let tempArr = [
      { id: 0, question: "Delhi", bengName: "", image: require('../../assets/city/delhi.jpg'), ans: ['e','d','l','x','d','e','z','f','h','g','l','i',] },
      { id: 0, question: "Kabul", bengName: "", image: require('../../assets/city/Kabul.jpg'), ans: ['e','u','r','l','n','p','k','q','v','b','t','a',] },
      { id: 0, question: "Yerevan", bengName: "", image: require('../../assets/city/Yerevan.jpg'), ans: ['a','e','u','x','r','c','y','t','v','m','n','e',] },
      { id: 0, question: "Hyderabad", bengName: "", image: require('../../assets/city/Hyderabad.jpg'), ans: ['a','y','a','d','w','b','k','h','r','l','e','d',] },
      { id: 0, question: "New York", bengName: "", image: require('../../assets/city/NewYork.jpg'), ans: ['e','k','o','u','w','p','r','q','n','m','a','y',] },
      { id: 0, question: "Bern", bengName: "", image: require('../../assets/city/Bern.jpg'), ans: ['u','j','e','k','i','r','v','a','b','l','x','n',] },
      { id: 0, question: "Bangkok", bengName: "", image: require('../../assets/city/Bangkok.jpg'), ans: ['a','k','l','n','t','k','w','v','b','x','o','g',] },
      { id: 0, question: "Hanoi", bengName: "", image: require('../../assets/city/Hanoi.jpg'), ans: ['v','a','m','k','o','t','i','y','h','u','p','n',] },
      { id: 0, question: "London", bengName: "", image: require('../../assets/city/London.jpg'), ans: ['d','g','n','m','o','u','y','q','n','e','l','o',] },
      { id: 0, question: "Kiev", bengName: "", image: require('../../assets/city/Kiev.jpg'), ans: ['e','t','x','c','k','w','r','v','p','b','i','j',] },
      { id: 0, question: "Stockholm", bengName: "", image: require('../../assets/city/Stockholm.jpg'), ans: ['o','t','x','l','s','v','c','p','h','m','o','k',] },
      { id: 0, question: "Madrid", bengName: "", image: require('../../assets/city/Madrid.jpg'), ans: ['a','y','i','u','d','w','c','r','d','p','m','l',] },
      { id: 0, question: "Singapore", bengName: "", image: require('../../assets/city/Singapore.jpg'), ans: ['i','o','s','e','v','g','u','r','n','p','k','a',] },
      { id: 0, question: "Dakar", bengName: "", image: require('../../assets/city/Dakar.jpg'), ans: ['a','x','r','p','k','z','c','l','y','d','w','a',] },
      { id: 0, question: "Islamabad", bengName: "", image: require('../../assets/city/Islamabad.jpg'), ans: ['s','j','a','k','l','a','m','b','u','i','d','a',] },
      { id: 0, question: "Oslo", bengName: "", image: require('../../assets/city/Oslo.jpg'), ans: ['y','s','q','o','w','l','e','v','b','o','g','j',] },
      { id: 0, question: "Abuja", bengName: "", image: require('../../assets/city/Abuja.jpg'), ans: ['m','b','n','a','p','u','t','r','a','w','z','j',] },
      { id: 0, question: "Kathmandu", bengName: "", image: require('../../assets/city/Kathmandu.jpg'), ans: ['a','h','d','t','n','g','m','j','k','i','u','a',] },
      { id: 0, question: "Mexico City", bengName: "", image: require('../../assets/city/MexicoCity.jpg'), ans: ['e','c','x','t','i','c','o','w','m','l','y','i',] },
      { id: 0, question: "Male", bengName: "", image: require('../../assets/city/Male.jpg'), ans: ['a','y','i','e','o','p','b','z','m','r','h','l',] },
      { id: 0, question: "Tokyo", bengName: "", image: require('../../assets/city/Tokyo.jpg'), ans: ['y','u','o','g','o','h','v','j','k','i','m','t',] },
      { id: 0, question: "Rome", bengName: "", image: require('../../assets/city/delhi.jpg'), ans: ['w','e','x','u','o','p','a','f','h','r','c','m',] },
      { id: 0, question: "Rabat", bengName: "", image: require('../../assets/city/Rabat.jpg'), ans: ['a','x','c','b','v','d','h','a','m','i','r','t',] },
    ]
    this.setState({ dataArray: tempArr });
    }
    Capitals = () => {
    let tempArr = [
      { id: 0, question: "Brussels", bengName: "", image: require('../../assets/city/Brussels.jpg'), ans: ['s','r','v','e','j','u','p','s','b','l','t','s',] },
      { id: 0, question: "Canberra", bengName: "", image: require('../../assets/city/Canberra.jpg'), ans: ['b','r','g','a','h','a','i','n','w','e','r','c',] },
      { id: 0, question: "Stockholm", bengName: "", image: require('../../assets/city/Stockholm.jpg'), ans: ['o','t','y','c','l','u','o','m','k','n','s','h',] },
      { id: 0, question: "Copenhagen", bengName: "", image: require('../../assets/city/Copenhagen.jpg'), ans: ['n','e','o','v','h','c','g','e','n','a','w','p',] },
      { id: 0, question: "Beijing", bengName: "", image: require('../../assets/city/Beijing.jpg'), ans: ['i','b','g','r','i','k','x','w','e','d','n','j',] },
      { id: 0, question: "Paris", bengName: "", image: require('../../assets/city/Paris.jpg'), ans: ['i','u','a','c','j','l','r','y','s','t','p','w',] },
      { id: 0, question: "Afghanistan", bengName: "", image: require('../../assets/city/Kabul.jpg'), ans:['f','a','n','g','t','s','h','a','i','p','a','n',] },
      { id: 0, question: "Algiers", bengName: "", image: require('../../assets/city/Algiers.jpg'), ans: ['r','q','a','u','i','s','b','g','z','e','y','l',] },
      { id: 0, question: "Ottawa", bengName: "", image: require('../../assets/city/Ottawa.jpg'), ans: ['a','f','g','t','h','w','j','o','l','a','e','t',] },
      { id: 0, question: "Tbilisi", bengName: "", image: require('../../assets/city/Tbilisi.jpg'), ans: ['l','v','i','x','b','g','r','i','s','t','y','i',] },
      { id: 0, question: "Nuuk", bengName: "", image: require('../../assets/city/Nuuk.jpg'), ans: ['u','t','i','o','u','p','w','b','g','n','l','k',] },
      { id: 0, question: "Reykjavik", bengName: "", image: require('../../assets/city/Reykjavik.jpg'), ans: ['e','a','q','y','k','d','j','i','u','r','v','k',] },
      { id: 0, question: "Stockholm", bengName: "", image: require('../../assets/city/Stockholm.jpg'), ans: ['t','v','o','m','s','k','o','c','l','k','w','h',] },
      { id: 0, question: "London", bengName: "", image: require('../../assets/city/London.jpg'), ans: ['k','l','o','y','n','t','c','r','o','z','n','d',] },
      { id: 0, question: "Hanoi", bengName: "", image: require('../../assets/city/Hanoi.jpg'), ans: ['o','x','c','v','a','t','i','y','h','b','l','n',] },
      { id: 0, question: "Bangkok", bengName: "", image: require('../../assets/city/Bangkok.jpg'), ans: ['a','h','b','j','k','i','n','t','k','r','o','g',] },
      { id: 0, question: "Kiev", bengName: "", image: require('../../assets/city/Kiev.jpg'), ans: ['i','t','w','v','r','n','l','k','h','z','d','e',] },
      { id: 0, question: "Islamabad", bengName: "", image: require('../../assets/city/Islamabad.jpg'), ans: ['b','s','t','a','u','l','a','a','i','w','d','m',] },
      { id: 0, question: "Singapore", bengName: "", image: require('../../assets/city/Singapore.jpg'), ans: ['e','i','o','t','n','p','u','a','c','s','r','g',] },
      { id: 0, question: "Athens", bengName: "", image: require('../../assets/city/Athens.jpg'), ans: ['s','o','t','v','e','d','a','i','p','h','j','n',] },
    ]
    this.setState({ dataArray: tempArr });
    }
  Flags = () => {
    let tempArr = [
      { id: 0, question: "Afghanistan", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['i','f','s','n','t','a','a','a','g','n','h','k',] },
      { id: 0, question: "Argentina", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['t','r','y','g','u','a','n','p','a','i','e','n',] },
      { id: 0, question: "Bhutan", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['h','t','a','v','b','s','d','u','k','n','o','t',] },
      { id: 0, question: "Canada", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['w','c','a','n','t','e','a','f','b','d','j','a',] },
      { id: 0, question: "Bangladesh", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['d','a','s','n','a','e','g','m','l','p','b','h',] },
      { id: 0, question: "Austria", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['u','g','t','n','a','h','r','q','s','a','w','i',] },
      { id: 0, question: "India", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['n','w','k','d','m','a','v','s','i','c','e','i',] },
      { id: 0, question: "Greece", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['a','r','e','v','c','y','e','t','w','g','q','e',] },
      { id: 0, question: "Iceland", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['c','r','a','g','e','m','n','o','s','i','d','l',] },
      { id: 0, question: "Germany", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['y','e','o','a','c','r','b','n','k','g','l','m',] },
      { id: 0, question: "China", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['i','r','n','w','c','g','s','a','z','d','h','',] },
      { id: 0, question: "Cambodia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['o','d','a','u','y','m','a','x','b','g','c','i',] },
      { id: 0, question: "Australia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['u','a','r','y','l','a','q','i','s','n','a','t',] },
      { id: 0, question: "Algeria", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['e','a','g','t','a','s','v','r','h','i','m','l',] },
      { id: 0, question: "Brazil", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['a','r','s','g','i','e','b','l','m','a','u','z',] },
      { id: 0, question: "Denmark", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['e','w','r','n','q','l','m','c','a','f','d','k',] },
      { id: 0, question: "France", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['s','r','e','n','y','z','c','k','f','p','a','v',] },
      { id: 0, question: "Georgia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['q','e','i','o','s','v','g','c','r','f','a','g',] },
      { id: 0, question: "Greenland", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['e','n','g','t','e','d','n','m','r','a','o','l',] },
      { id: 0, question: "Hong Kong", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['o','k','w','h','g','s','n','v','o','u','g','n',] },
      { id: 0, question: "Indonesia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['v','n','s','a','i','n','d','i','o','t','e','z',] },
      { id: 0, question: "Colombia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['a','g','o','b','n','l','y','c','w','m','i','o',] },
      { id: 0, question: "Burundi", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['r','d','u','s','u','f','m','b','t','p','n','i',] },
      { id: 0, question: "Benin", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['y','e','a','v','n','l','r','i','j','b','k','n',] },
      { id: 0, question: "Belgium", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['g','a','e','w','m','t','b','o','i','q','l','u',] },
      { id: 0, question: "Albania", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['i','e','b','a','m','a','k','y','a','z','n','l',] },
      { id: 0, question: "Armenia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['e','a','r','y','g','m','q','n','f','a','h','i',] },
      { id: 0, question: "Ethiopia", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['v','t','i','o','b','e','s','p','w','h','a','i',] },
      { id: 0, question: "Finland", bengName: "", image: require('../../assets/flag/af.jpg'), ans: ['a','u','l','q','n','x','f','d','n','g','i','j',] },
    ]
    this.setState({ dataArray: tempArr });
    }
  Fruits = () => {
    let tempArr = [
      { id: 0, question: "Apple", bengName: "আপেল", image: require('../../assets/apple.jpg'), ans: ['s', 'k', 'd', 'p', 'a', 'x', 'p', 'q', 'z', 'l', 'o', 'e',] },
      { id: 0, question: "Peach", bengName: "পীচ", image: require('../../assets/peach.png'), ans: ['a', 's', 'v', 'k', 'p', 'l', 'm', 'e', 'c', 'q', 'e', 'h'] },
      { id: 0, question: "Pomegranate", bengName: "বেদানা", image: require('../../assets/franar.jpg'), ans: ['p', 'm', 'o', 'e', 'e', 'r', 'g', 'a', 'd', 'n', 'a', 't'] },
      { id: 0, question: "Avocado", bengName: "আভাকাডো", image: require('../../assets/avocado.png'), ans: ['o', 's', 'a', 'w', 'v', 'q', 'o', 'l', 'c', 'r', 'a', 'd'] },
      { id: 0, question: "Coconut", bengName: "নারিকেল", image: require('../../assets/coconuts.png'), ans: ['n', 'b', 'o', 'u', 'c', 'm', 'o', 't', 'y', 'c', 'k', 'j'] },
      { id: 0, question: "Lemon", bengName: "লেবু", image: require('../../assets/lemon.png'), ans: ['n', 'y', 'h', 'g', 'l', 'v', 'u', 'e', 'p', 'm', 'f', 'o'] },
      { id: 0, question: "Pineapple", bengName: "আনারস", image: require('../../assets/pineapples.png'), ans: ['a', 'e', 'p', 'l', 'm', 'p', 'p', 'k', 'i', 'e', 'n', 'd'] },
      { id: 0, question: "Kiwi", bengName: "কিবি", image: require('../../assets/kiwi.png'), ans: ['j', 'i', 'm', 'w', 'b', 'l', 'i', 'a', 'k', 'q', 'e', 'x'] },
      { id: 0, question: "Papaya", bengName: "পেঁপে", image: require('../../assets/papaya.jpg'), ans: ['a', 'y', 'a', 'p', 's', 'p', 'd', 'a', 'w', 'a', 'x', 'r'] },
      { id: 0, question: "Jackfruit", bengName: "কাঁঠাল", image: require('../../assets/katal.jpg'), ans: ['a', 'c', 'a', 'w', 'k', 'j', 'd', 'u', 'f', 't', 'r', 'i'] },
      { id: 0, question: "Mandarin", bengName: "ম্যান্ডারিন", image: require('../../assets/mandarins.jpg'), ans: ['a', 'm', 'd', 'c', 'a', 'b', 'n', 'w', 'i', 'f', 'n', 'r'] },
      { id: 0, question: "Raspberry", bengName: "রাস্পবেরি", image: require('../../assets/raspberry.jpg'), ans: ['b', 's', 'v', 'p', 'r', 'a', 'e', 'r', 'y', 'f', 'h', 'r'] },
      { id: 0, question: "Banana", bengName: "কলা", image: require('../../assets/banana.png'), ans: ['a', 'q', 'n', 'x', 'd', 'a', 'e', 't', 'b', 'c', 'n', 'a'] },
      { id: 0, question: "Plum", bengName: "তাল", image: require('../../assets/plum.png'), ans: ['m', 'b', 'o', 'p', '', 'l', 'c', 'u', 't', 's', 'g', 'p'] },
      { id: 0, question: "Blueberry", bengName: "জাম কুল", image: require('../../assets/blueberry.jpg'), ans: ['r', 'b', 'd', 'l', 'y', 'f', 'u', 'k', 'r', 'e', 'b', 'e'] },
      { id: 0, question: "Mango", bengName: "আম", image: require('../../assets/mangos.jpg'), ans: ['z', 'o', 'u', 'q', 'm', 'w', 'i', 'a', 'p', 'b', 'n', 'g'] },
      { id: 0, question: "Grape", bengName: "আঙ্গুর", image: require('../../assets/grapes.png'), ans: ['c', 'e', 't', 'u', 'v', 'g', 's', 'r', 'x', 'a', 'w', 'p'] },
      { id: 0, question: "Nectarine", bengName: "নেক্যারিনে", image: require('../../assets/nectarine.png'), ans: ['a', 'n', 'g', 'e', 'e', 'c', 't', 'h', 'n', 'i', 'j', 'r'] },
      { id: 0, question: "Strawberry", bengName: "স্ট্রবেরি", image: require('../../assets/strawberry.png'), ans: ['t', 'e', 'y', 's', 'o', 'r', 'r', 'r', 't', 'a', 'b', 'w'] },
      { id: 0, question: "Cherry", bengName: "চেরিফল", image: require('../../assets/cherry.jpg'), ans: ['r', 'y', 'c', 'a', 'd', 'h', 'p', 'e', 'n', 's', 'r', ''] },
      { id: 0, question: "Pear", bengName: "নাশপাতি", image: require('../../assets/pears.jpg'), ans: ['w', 'a', 's', 'q', 'r', 'f', 'p', 'g', 'j', 'e', 'k', 'v'] },
      { id: 0, question: "Orange", bengName: "কমলা", image: require('../../assets/organge.png'), ans: ['b', 'a', 'm', 'y', 'n', 'q', 'e', 'c', 'o', 'k', 'g', 'r'] },
      { id: 0, question: "Watermelon", bengName: "তরমুজ", image: require('../../assets/watermelon.png'), ans: ['w', 'e', 't', 'o', 'e', 'v', 'l', 'r', 'f', 'a', 'm', 'n'] },
      { id: 0, question: "Guava", bengName: "পেয়ারা", image: require('../../assets/guava.jpg'), ans: ['y', 'u', 'q', 'a', 'h', 'c', 'g', 'r', 'z', 'a', 'b', 'v'] },
      { id: 0, question: "Date", bengName: "খেজুর", image: require('../../assets/date.jpg'), ans: ['u', 'i', 'w', 't', 'r', 'g', 'a', 's', 'b', 'e', 'l', 'd'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Vegetables = () => {
    let tempArr = [
      { id: 0, question: "Beetroot", bengName: "বীট", image: require('../../assets/beetroot.jpg'), ans: ['a', 'e', 'd', 'o', 'b', 'e', 'u', 't', 'r', 'o', 'x', 't'] },
      { id: 0, question: "Pumpkin", bengName: "কুমড়া", image: require('../../assets/frvgpumpkin.png'), ans: ['b', 'p', 'g', 'm', 'h', 'i', 'u', 'j', 'k', 'l', 'n', 'p'] },
      { id: 0, question: "Mushroom", bengName: "মাশরুম", image: require('../../assets/mushroom.png'), ans: ['m', 'u', 't', 's', 'v', 'm', 'g', 'o', 'k', 'r', 'o', 'h'] },
      { id: 0, question: "Cabbage", bengName: "বাঁধাকপি", image: require('../../assets/cabbage.jpg'), ans: ['w', 'b', 'c', 'h', 'a', 'k', 'l', 'g', 'x', 'b', 'e', 'a'] },
      { id: 0, question: "Capsicum", bengName: "ক্যাপসিকাম", image: require('../../assets/green_pepper.png'), ans: ['p', 'm', 'a', 'y', 'i', 'o', 'c', 'u', 'b', 'c', 'n', 's'] },
      { id: 0, question: "Carrot", bengName: "গাজর", image: require('../../assets/carrot.png'), ans: ['c', 'g', 'u', 'r', 'q', 'o', 'w', 'a', 'v', 't', 'r', 'z'] },
      { id: 0, question: "Cauliflower", bengName: "ফুলকপি", image: require('../../assets/cauliflower.jpg'), ans: ['a', 'w', 'u', 'r', 'i', 'c', 'o', 'k', 'l', 'e', 'l', 'f'] },
      { id: 0, question: "Corinder", bengName: "ধনে পাতা", image: require('../../assets/corinder_leaf.jpg'), ans: ['o', 'r', 'a', 'c', 'y', 'r', 'e', 'u', 'n', 'v', 'd', 'i'] },
      { id: 0, question: "Corn", bengName: "ভূট্টা", image: require('../../assets/cron.jpg'), ans: ['o', 'g', 'j', 'k', 'r', '', 'l', 'n', 'h', 'w', 'e', 'c'] },
      { id: 0, question: "Celery", bengName: "সেলারি", image: require('../../assets/celery.jpg'), ans: ['e', 'y', 'w', 'c', 'e', 'l', 'o', 'v', 'r', 's', 'b', 'e'] },
      { id: 0, question: "Chilli", bengName: "লঙ্কা", image: require('../../assets/chilli.jpg'), ans: ['w', 'l', 'y', 'i', 'u', 'c', 'p', 'l', 'g', 'i', 'h', 'n'] },
      { id: 0, question: "Eggplant", bengName: "বেগুন", image: require('../../assets/eggplant.jpg'), ans: ['l', 'k', 'e', 'r', 'n', 'h', 'g', 't', 'v', 'p', 'a', 'g'] },
      { id: 0, question: "Cucumber", bengName: "শসা", image: require('../../assets/frvgcucumber.png'), ans: ['u', 'c', 't', 'm', 'b', 'r', 'g', 'k', 'c', 'e', 'u', 'l'] },
      { id: 0, question: "Fenugreek", bengName: "মেথি পাতা", image: require('../../assets/fenugreek.jpg'), ans: ['e', 'x', 'n', 'e', 'f', 'u', 'y', 'r', 'w', 'e', 'k', 'g'] },
      { id: 0, question: "Turnip", bengName: "শালগম", image: require('../../assets/turnip.png'), ans: ['r', 'a', 'u', 's', 'n', 'd', 'm', 't', 'w', 'i', 'g', 'p'] },
      { id: 0, question: "Courgette", bengName: "কোর্গেটটা", image: require('../../assets/courgette.jpg'), ans: ['o', 'e', 'u', 'k', 'b', 'c', 't', 'z', 'g', 'e', 'r', 't'] },
      { id: 0, question: "Onion", bengName: "পেঁয়াজ", image: require('../../assets/onions.png'), ans: ['b', 'w', 'i', 'p', 'n', 'f', 'm', 'o', 'x', 'o', 'u', 'n'] },
      { id: 0, question: "Lettuce", bengName: "লেটুস", image: require('../../assets/lettuce.jpg'), ans: ['t', 'g', 'l', 'j', 'c', 'k', 'e', 'm', 'u', 't', 'v', 'e'] },
      { id: 0, question: "Radish", bengName: "মূলা", image: require('../../assets/radish.png'), ans: ['y', 'a', 's', 'u', 'i', 'g', 'n', 'r', 'z', 'd', 'c', 'h'] },
      { id: 0, question: "Asparagus", bengName: "শতমূলী", image: require('../../assets/asparagus.png'), ans: ['s', 'g', 'a', 'u', 'k', 'p', 'l', 'o', 'a', 's', 'a', 'r'] },
      { id: 0, question: "Garlic", bengName: "রসুন", image: require('../../assets/garlic.jpg'), ans: ['d', 'g', 'i', 'h', 'a', 'm', 'r', 'k', 'l', 'v', 's', 'c'] },
      { id: 0, question: "Ginger", bengName: "আদা", image: require('../../assets/ginger.jpg'), ans: ['a', 'i', 'r', 's', 'g', 'c', 'e', 'v', 'n', 'm', 'f', 'g'] },
      { id: 0, question: "Peppermint", bengName: "পুদিনা", image: require('../../assets/peppermint.jpg'), ans: ['p', 'r', 'e', 'n', 'e', 'w', 't', 's', 'p', 'i', 'p', 'm'] },
      { id: 0, question: "Potato", bengName: "আলু", image: require('../../assets/potato.jpg'), ans: ['w', 'p', 'u', 'g', 'o', 'm', 't', 'q', 't', 'o', 'v', 'a'] },
      { id: 0, question: "Spinach", bengName: "পালং", image: require('../../assets/spinach.jpg'), ans: ['f', 'p', 'e', 'i', 'h', 'a', 'j', 'n', 'g', 'c', 'y', 's'] },
      { id: 0, question: "Tomato", bengName: "টমেটো", image: require('../../assets/frvgtomato.png'), ans: ['o', 's', 't', 'k', 't', 'd', 'o', 'e', 'a', 'r', 'u', 'm'] },
      { id: 0, question: "Broccoli", bengName: "ব্রোকলি", image: require('../../assets/broccoli.jpg'), ans: ['w', 'b', 'c', 'r', 'x', 'i', 'o', 'y', 'g', 'c', 'l', 'o'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Flowers = () => {
    let tempArr = [
      { id: 0, question: "Rose", bengName: "গোলাপ", image: require('../../assets/rose_flower.jpg'), ans: ['b', 'o', 'n', 'j', 'r', 'k', 'm', 'e', 'x', 'c', 'g', 's'] },
      { id: 0, question: "Jasminum", bengName: "জুঁইফুল", image: require('../../assets/jasminum.jpg'), ans: ['s', 'm', 'j', 'k', 'm', 'u', 'i', 'd', 'h', 'n', 'l', 'a'] },
      { id: 0, question: "Primrose", bengName: "হলুদ ফুল", image: require('../../assets/primrose.jpg'), ans: ['p', 'a', 'i', 's', 'f', 'r', 'w', 'm', 'o', 'e', 'r', 'x'] },
      { id: 0, question: "Marigold", bengName: "গাঁদা ফুল", image: require('../../assets/marigold.jpg'), ans: ['a', 'd', 'i', 'y', 'r', '', 'm', 'l', 'c', 'o', 'v', 'g'] },
      { id: 0, question: "Sunflower", bengName: "সূর্যমুখী", image: require('../../assets/sunflower.jpg'), ans: ['l', 's', 'w', 'u', 'y', 'p', 'o', 'e', 'g', 'f', 'r', 'n'] },
      { id: 0, question: "Lotus", bengName: "পদ্ম", image: require('../../assets/lotus.jpg'), ans: ['o', 'b', 'g', 't', 'c', 'q', 'l', 'w', 's', 'y', 'm', 'u'] },
      { id: 0, question: "Oleander", bengName: "করবী", image: require('../../assets/oleander.jpg'), ans: ['c', 'l', 'd', 'o', 'r', 'e', 'f', 'h', 'i', 'n', 'e', 'a'] },
      { id: 0, question: "Daisy", bengName: "পুষ্পবৃক্ষ", image: require('../../assets/daisy.jpg'), ans: ['a', 'v', 's', '', 'd', 'u', 'l', 'g', 'i', 'r', 'c', 'y'] },
      { id: 0, question: "Poppy", bengName: "পপি ফুল", image: require('../../assets/poppy.jpg'), ans: ['b', 'p', 'v', 'p', 'c', 'o', 'i', 'k', 'y', 'g', 'm', 'p'] },
      { id: 0, question: "Daffodil", bengName: "ড্যাফোডিল", image: require('../../assets/daffodil.jpg'), ans: ['a', 'l', 'd', 'g', 'd', 'u', 'f', 'k', 'o', 'i', 'f', 'z'] },
      { id: 0, question: "Datura", bengName: "ধুতুরা", image: require('../../assets/datura.jpg'), ans: ['a', 'x', 'i', 'a', 'k', 'd', 'l', 't', 'p', 'r', 'm', 'u'] },
      { id: 0, question: "Pandanus", bengName: "পান্ডানুস", image: require('../../assets/pandanus.jpg'), ans: ['c', 'p', 'u', 'n', 'v', 'a', 'i', 'd', 'n', 'j', 'a', 's'] },
      { id: 0, question: "Allium", bengName: "অলিউম", image: require('../../assets/allium.jpg'), ans: ['l', 'b', 'h', 'a', 'u', 'g', 'l', 'k', 'j', 'm', 'v', 'i'] },
      { id: 0, question: "Alstroemeria", bengName: "আলস্ট্রোএমেরিয়া", image: require('../../assets/alstroemeria.jpg'), ans: ['m', 'a', 'r', 'l', 'o', 'e', 'r', 'e', 's', 'i', 't', 'a'] },
      { id: 0, question: "Amaranthus", bengName: "পারিজাত", image: require('../../assets/amaranthus.jpg'), ans: ['m', 'k', 'h', 'a', 'u', 'a', 'u', 'a', 't', 's', 'n', 'r'] },
      { id: 0, question: "Amaryllis", bengName: "রজনীগন্ধা-গোত্রীয় বৃক্ষ", image: require('../../assets/amaryllis.jpg'), ans: ['l', 'm', 'o', 'y', 's', 'a', 'p', 'l', 'x', 'a', 'i', 'r'] },
      { id: 0, question: "Aster", bengName: "তারাফুল", image: require('../../assets/aster.jpg'), ans: ['y', 'a', 'u', 'r', 'q', 'w', 's', 'x', 'e', 'c', 'i', 't'] },
      { id: 0, question: "Dahlia", bengName: "ডালিয়া", image: require('../../assets/dahlia.jpg'), ans: ['a', 'g', 'd', 'm', 'i', 'k', 'h', 'j', 'i', 'a', 'n', 'l'] },
      { id: 0, question: "PotMarigold", bengName: "চন্দ্র মল্লিকা", image: require('../../assets/potMarigold.jpg'), ans: ['o', 'g', 'p', 'd', 't', 'k', 'i', 'l', 'a', 'r', 'o', 'm'] },
      { id: 0, question: "Undefeated", bengName: "অপরাজিতা", image: require('../../assets/undefeated.jpg'), ans: ['n', 'e', 'i', 'u', 'e', 't', 'd', 'f', 'a', 'e', 'j', 'd'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Animals = () => {
    let tempArr = [
      { id: 0, question: "Leopard", bengName: "চিতা", image: require('../../assets/leopard.jpg'), ans: ['e', 'd', 'c', 'o', 'k', 'l', 'm', 'f', 'p', 'r', 'j', 'a'] },
      { id: 0, question: "Hippopotamus", bengName: "জলহস্তী", image: require('../../assets/hippopotamus.jpg'), ans: ['m', 'i', 'o', 'h', 'u', 'p', 'a', 'p', 'o', 't', 'p', 's'] },
      { id: 0, question: "Deer", bengName: "হরিণ", image: require('../../assets/anmdeer.png'), ans: ['a', 'v', 'e', 'n', 'i', 'd', 'l', 'g', 'e', 'x', 'p', 'r'] },
      { id: 0, question: "Raccoon", bengName: "র্যাকুন", image: require('../../assets/raccoon.jpg'), ans: ['n', 'a', 'g', 'r', 'k', 'c', 'v', 'o', 'b', 'w', 'c', 'o'] },
      { id: 0, question: "Hedgehong", bengName: "হেডগেহং", image: require('../../assets/hedgehong.jpg'), ans: ['e', 'g', 'p', 'h', 'f', 'd', 'e', 'g', 'n', 'u', 'h', 'o'] },
      { id: 0, question: "Bear", bengName: "ভালুক", image: require('../../assets/bear.jpg'), ans: ['t', 'b', 'y', 'l', 'r', 'f', 'u', 'e', 'k', 'v', 'i', 'a'] },
      { id: 0, question: "Dog", bengName: "কুকুর", image: require('../../assets/dfordog.jpg'), ans: ['u', 'o', 'p', 'm', 'h', 'd', 'g', 'e', 'c', 'w', 'q', 'g'] },
      { id: 0, question: "Elephant", bengName: "হাতি", image: require('../../assets/eforele.png'), ans: ['n', 'e', 'f', 'p', 't', 'z', 'l', 'g', 'h', 'a', 'i', 'e'] },
      { id: 0, question: "Fox", bengName: "শিয়াল", image: require('../../assets/fforfox.jpg'), ans: ['a', 'x', 'e', 'n', 'l', 'f', 'u', 'j', 'y', 'p', 't', 'o'] },
      { id: 0, question: "Yak", bengName: "চমরী গাই", image: require('../../assets/yforyak.png'), ans: ['g', 'b', 'm', 'o', 'y', 'k', 'i', 'a', 'f', 'c', 'j', 'k'] },
      { id: 0, question: "Chimpanzee", bengName: "বনমানুষ", image: require('../../assets/chimpanzee.jpg'), ans: ['z', 'c', 'i', 'e', 'm', 'u', 'p', 'i', 'a', 'e', 'n', 'h'] },
      { id: 0, question: "Sheep", bengName: "ভেড়া", image: require('../../assets/sheep.jpg'), ans: ['a', 'g', 's', 'u', 'h', 'k', 'p', 'v', 'e', 'q', 'w', 'e'] },
      { id: 0, question: "Giraffe", bengName: "জিরাফ", image: require('../../assets/anmgiraffe.png'), ans: ['i', 'k', 'g', 'l', 'r', 'n', 'a', 'o', 'f', 'x', 'f', 'e'] },
      { id: 0, question: "Goat", bengName: "ছাগল", image: require('../../assets/gforgoat.jpg'), ans: ['o', 'u', 'r', 't', 'g', 'y', 'h', 'm', 't', 'j', 'l', 'a'] },
      { id: 0, question: "Kangaroo", bengName: "ক্যাঙ্গারু", image: require('../../assets/kforkangaroo.png'), ans: ['a', 'b', 'a', 'k', 'n', 'o', 'h', 'r', 'o', 'g', 'l', 'n'] },
      { id: 0, question: "Lion", bengName: "সিংহ", image: require('../../assets/lforlion.png'), ans: ['k', 'g', 'i', 'y', 'e', 'w', 'l', 'q', 'b', 'o', 'c', 'n'] },
      { id: 0, question: "Mouse", bengName: "ইঁদুর", image: require('../../assets/mforouse.png'), ans: ['e', 'h', 'o', 'j', 'l', 'm', 'k', 'f', 'u', 'x', 's', 'a'] },
      { id: 0, question: "Pig", bengName: "শূকর", image: require('../../assets/pforpig.png'), ans: ['a', 'h', 'i', 'u', 'n', 'o', 'p', 'l', 'k', 'j', 'e', 'g'] },
      { id: 0, question: "Rabbit", bengName: "খরগোশ", image: require('../../assets/rforrabbit.jpg'), ans: ['u', 'r', 'p', 'a', 'y', 'b', 'v', 'b', 'c', 'i', 's', 't'] },
      { id: 0, question: "Tiger", bengName: "বাঘ", image: require('../../assets/tiger.jpg'), ans: ['w', 'i', 'j', 'm', 't', 'l', 'c', 'g', 'v', 'r', 'e', 's'] },
      { id: 0, question: "Walrus", bengName: "সিন্ধুঘোটক", image: require('../../assets/walrus.png'), ans: ['a', 'd', 's', 'w', 'e', 'k', 'l', 'c', 'r', 'z', 'u', 'g'] },
      { id: 0, question: "Horse", bengName: "ঘোড়া", image: require('../../assets/horse_animal.jpg'), ans: ['g', 'r', 'h', 'o', 'j', 'v', 'h', 'b', 'e', 'q', 't', 's'] },
      { id: 0, question: "Monkey", bengName: "বানর", image: require('../../assets/anmmonkey.png'), ans: ['y', 'j', 'o', 'g', 'n', 'a', 'p', 'm', 'h', 'e', 'r', 'k'] },
      { id: 0, question: "Cow", bengName: "গোরু", image: require('../../assets/cow.jpg'), ans: ['b', 'n', 'v', 'k', 'r', 't', 'c', 'y', 'o', 'x', 'u', 'w'] },
      { id: 0, question: "Jaguar", bengName: "জাগুয়ার", image: require('../../assets/leopard.jpg'), ans: ['a', 't', 'a', 'y', 's', 'j', 'q', 'h', 'g', 'c', 'u', 'r'] },
      { id: 0, question: "Zebra", bengName: "জেব্রা", image: require('../../assets/zforzebra.jpg'), ans: ['b', 'e', 'v', 'r', 'k', 'a', 'i', 'z', 's', 'g', 'b', 'y'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Birds = () => {
    let tempArr = [
      { id: 0, question: "Duck", bengName: "পাতিহাঁস", image: require('../../assets/duck.jpg'), ans: ['a', 'h', 'c', 'f', 'o', 'j', 'd', 'l', 'm', 'u', 's', 'k'] },
      { id: 0, question: "Nightingale", bengName: "কোকিল", image: require('../../assets/kingfisher.jpg'), ans: ['g', 'n', 'e', 'i', 'n', 'g', 'k', 'i', 'l', 't', 'a', 'h'] },
      { id: 0, question: "HummingBird", bengName: "হামিংবার্ড", image: require('../../assets/hummingbird.jpg'), ans: ['u', 'g', 'm', 'i', 'b', 'h', 'd', 'n', 'r', 'i', 'w', 'm'] },
      { id: 0, question: "Owl", bengName: "পেঁচা", image: require('../../assets/oforowl.png'), ans: ['w', 'r', 'n', 'w', 'j', 'q', 'v', 'c', 'a', 'o', 'g', 'l'] },
      { id: 0, question: "Crow", bengName: "কাক", image: require('../../assets/crow.jpg'), ans: ['y', 't', 'c', 'b', 'k', 'u', 'r', 'g', 'l', 'o', 'x', 'w'] },
      { id: 0, question: "Peacock", bengName: "ময়ুর", image: require('../../assets/peacock.jpg'), ans: ['k', 'e', 'j', 'a', 'r', 'n', 'c', 'm', 'p', 'o', 'v', 'c'] },
      { id: 0, question: "Dove", bengName: "ঘুঘু", image: require('../../assets/dove.webp'), ans: ['t', 'u', 'd', 'c', 'w', 'q', 'o', 's', 'g', 'e', 'k', 'v'] },
      { id: 0, question: "Sparrow", bengName: "চড়ুই", image: require('../../assets/sparrow.png'), ans: ['w', 's', 'n', 'p', 'y', 'r', 'u', 'o', 'k', 'r', 'j', 'a'] },
      { id: 0, question: "Goose", bengName: "হংসী", image: require('../../assets/goose.jpg'), ans: ['i', 'o', 'l', 's', 'w', 'h', 'g', 'k', 'e', 'd', 'z', 'o'] },
      { id: 0, question: "Ostrich", bengName: "উটপাখী", image: require('../../assets/ostrich.jpg'), ans: ['u', 's', 'm', 't', 'p', 'c', 'q', 'o', 'v', 'r', 'h', 'i'] },
      { id: 0, question: "Herons", bengName: "সারস", image: require('../../assets/herons.jpg'), ans: ['e', 'k', 'r', 'n', 'o', 'f', 's', 'y', 'x', 'n', 'w', 'h'] },
      { id: 0, question: "Turkey", bengName: "তুরস্ক মোরগ", image: require('../../assets/turkey.jpg'), ans: ['u', 'j', 'r', 'b', 'a', 'k', 'n', 't', 'g', 'e', 'c', 'y'] },
      { id: 0, question: "Hawk", bengName: "বাজপাখি", image: require('../../assets/hawk.png'), ans: ['p', 'a', 'k', 'l', 'w', 'r', 'x', 'i', 'h', 'y', 'q', 'k'] },
      { id: 0, question: "Raven", bengName: "দ্রোন কাক", image: require('../../assets/raven.jpg'), ans: ['x', 'u', 'r', 'w', 't', 'a', 'y', 'v', 'x', 'e', 'q', 'n'] },
      { id: 0, question: "Parrot", bengName: "টিয়া পাখি", image: require('../../assets/parrot.jpg'), ans: ['u', 'm', 'a', 'g', 'r', 'h', 'k', 'r', 'p', 't', 'w', 'o'] },
      { id: 0, question: "Flamingo", bengName: "মরাল", image: require('../../assets/anmflamingo.png'), ans: ['l', 'o', 'm', 'e', 'i', 'h', 'n', 'f', 'g', 'x', 'a', 'y'] },
      { id: 0, question: "Penguin", bengName: "পেংগুইন", image: require('../../assets/penguin.png'), ans: ['y', 'e', 't', 'n', 'a', 'i', 'k', 'p', 'z', 'u', 'n', 'g'] },
      { id: 0, question: "Stork", bengName: "সারস", image: require('../../assets/stork.jpg'), ans: ['q', 'b', 's', 'x', 'c', 't', 'n', 'o', 'u', 'r', 'l', 'k'] },
      { id: 0, question: "Swift", bengName: "সুইফ্ট পাখি", image: require('../../assets/swift.jpg'), ans: ['k', 'l', 'w', 'n', 'i', 'q', 's', 'm', 'f', 'e', 'b', 't'] },
      { id: 0, question: "Hornbill", bengName: "হর্ণবিল", image: require('../../assets/hornbill.jpg'), ans: ['l', 'o', 'u', 'r', 'v', 'n', 'p', 'b', 'h', 'l', '', 'i'] },
      { id: 0, question: "Rallidae", bengName: "রালিডে", image: require('../../assets/rallidae.jpg'), ans: ['a', 'd', 'c', 'r', 't', 'a', 'l', 'y', 'i', 'u', 'e', 'l'] },
      { id: 0, question: "Spoonbill", bengName: "স্পনবিল", image: require('../../assets/spoonbill.jpg'), ans: ['w', 'p', 'l', 'o', 'e', 'b', 'l', 's', 'i', 'n', 'y', 'o'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Shapes = () => {
    let tempArr = [
      { id: 0, question: "Nonagon", bengName: "নবভুজ", image: require('../../assets/nonagon.jpg') , ans: ['m', 'o', 'h', 'n', 'k', 'n', 'j', 'a', 'n', 'g', 'l', 'o'] },
      { id: 0, question: "Heptagon", bengName: "সমসপ্তভুজ", image: require('../../assets/heptagon.png') , ans: ['e', 'g', 'u', 'h', 'o', 'p', 'j', 'v', 'a', 'n', 't', 'y'] },
      { id: 0, question: "Hexagon", bengName: "ষড়্ভুজাকার", image: require('../../assets/hexagon.png') , ans: ['e', 'u', 'a', 'p', 'x', 'n', 'j', 'g', 'k', 'o', 'l', 'h'] },
      { id: 0, question: "Triangle", bengName: "ত্রিভুজ", image: require('../../assets/triangle.png') , ans: ['e', 'r', 'v', 'i', 'k', 'a', 'q', 't', 'n', 'w', 'l', 'g'] },
      { id: 0, question: "Rhombus", bengName: "রম্বস", image: require('../../assets/rhombus.png') , ans: ['s', 'v', 'h', 'g', 'b', 't', 'r', 'y', 'o', 'u', 'c', 'm'] },
      { id: 0, question: "Square", bengName: "বর্গক্ষেত্র", image: require('../../assets/square.png') , ans: ['q', 'x', 'u', 'c', 's', 'w', 'y', 'a', 'd', 'e', 'm', 'r'] },
      { id: 0, question: "Pentagon", bengName: "পঁচকোণ", image: require('../../assets/pentagon.png') , ans: ['e', 'm', 'p', 'z', 'n', 'w', 't', 'o', 'y', 'g', 'n', 'a'] },
      { id: 0, question: "Circle", bengName: "বৃত্ত", image: require('../../assets/circle.png') , ans: ['e', 'u', 'c', 'y', 'i', 't', 'l', 's', 'c', 'k', 'm', 'r'] },
      { id: 0, question: "Oval", bengName: "উপবৃত্তাকার", image: require('../../assets/oval.png') , ans: ['x', 'j', 'v', 'k', 'o', 'i', 'p', 'a', 'w', 's', 'c', 'l'] },
      { id: 0, question: "Heart", bengName: "হৃদয়", image: require('../../assets/heart.png') , ans: ['g', 'e', 'k', 'i', 'h', 'j', 'a', 'm', 'r', 's', 'z', 't'] },
      { id: 0, question: "Arrow", bengName: "তীর", image: require('../../assets/arrow.png') , ans: ['w', 'x', 'r', 'c', 'v', 'a', 'p', 'b', 'r', 'f', 'n', 'o'] },
      { id: 0, question: "Cube", bengName: "ঘনক্ষেত্র", image: require('../../assets/cube.jpg') , ans: ['h', 'y', 'u', 'k', 'i', 'c', 'j', 'l', 'b', 'm', 'a', 'e'] },
      { id: 0, question: "Cylinder", bengName: "নল", image: require('../../assets/cylinder.jpg') , ans: ['d', 'v', 'y', 'e', 'm', 'c', 'a', 'r', 'l', 'n', 't', 'i'] },
      { id: 0, question: "Star", bengName: "তারকা", image: require('../../assets/star_red.jpg') , ans: ['u', 't', 'x', 'c', 's', 'v', 'h', 'l', 'a', 'k', 'i', 'r'] },
      { id: 0, question: "Crescent", bengName: "অর্ধচন্দ্রাকার", image: require('../../assets/crescent.png') , ans: ['y', 'c', 'f', 'r', 'm', 'e', 's', 'n', 'k', 'e', 't', 'c'] },
      { id: 0, question: "Rectangle", bengName: "আয়তক্ষেত্র", image: require('../../assets/rect.webp') , ans: ['n', 'e', 'g', 'k', 'r', 'e', 'c', 'u', 'w', 't', 'l', 'a'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  HumanBody = () => {
    let tempArr = [
      { id: 0, question: "Head", bengName: "মাথা", image: require('../../assets/b_head.png'), ans: ['x', 'e', 'b', 'v', 'k', 'j', 'h', 'l', 'i', 'a', 'm', 'd'] },
      { id: 0, question: "Finger", bengName: "আঙ্গুল", image: require('../../assets/b_fingure.jpg'), ans: ['e', 'h', 'i', 'u', 't', 'f', 'm', 'y', 'n', 'k', 'g', 'r'] },
      { id: 0, question: "Thumb", bengName: "অঙ্গুষ্ঠ", image: require('../../assets/b_thumb.jpg'), ans: ['n', 't', 'g', 'k', 'i', 'o', 'h', 'l', 'u', 'b', 'r', 'm'] },
      { id: 0, question: "Leg", bengName: "পা", image: require('../../assets/b_leg.jpg'), ans: ['z', 't', 'e', 'h', 'k', 'u', 'o', 'l', 'a', 'x', 'c', 'g'] },
      { id: 0, question: "Foot", bengName: "পায়ের পাতা", image: require('../../assets/b_foot.jpg'), ans: ['v', 'b', 'o', 'n', 'o', 'e', 'm', 'k', 'f', 'l', 'y', 't'] },
      { id: 0, question: "Neck", bengName: "ঘাড়", image: require('../../assets/b_neck.jpg'), ans: ['c', 'm', 'e', 'p', 'w', 'n', 's', 'l', 'y', 'o', 'd', 'k'] },
      { id: 0, question: "Ear", bengName: "কান", image: require('../../assets/b_ear.jpg'), ans: ['v', 'b', 'a', 's', 'f', 'g', 'y', 'e', 'x', 'z', 'p', 'r'] },
      { id: 0, question: "Forehead", bengName: "কপাল", image: require('../../assets/b_forehead.jpg'), ans: ['d', 'o', 'q', 'e', 'f', 'w', 'r', 'a', 'h', 's', 'e', 'n'] },
      { id: 0, question: "Teeth", bengName: "দাঁত", image: require('../../assets/b_teeth.jpg'), ans: ['o', 'v', 'e', 's', 'u', 'h', 'y', 't', 'p', 'a', 'j', 'e'] },
      { id: 0, question: "Tongue", bengName: "জিহ্বা", image: require('../../assets/b_tongue.jpg'), ans: ['n', 'x', 't', 'c', 'a', 'o', 'v', 'b', 'g', 'e', 'r', 'u'] },
      { id: 0, question: "Back", bengName: "পেছনে", image: require('../../assets/b_back.jpg'), ans: ['a', 'd', 'f', 'm', 'b', 'g', 'n', 'k', 'c', 'l', 'o', 'k'] },
      { id: 0, question: "Shoulder", bengName: "কাঁধ", image: require('../../assets/b_shoulder.jpg'), ans: ['o', 'r', 's', 'v', 'h', 'b', 'u', 'x', 'd', 'i', 'e', 'l'] },
      { id: 0, question: "Knees", bengName: "হাঁটু", image: require('../../assets/b_knee.png'), ans: ['s', 'j', 'n', 'v', 'y', 'h', 'k', 'l', 't', 'e', 'u', 'e'] },
      { id: 0, question: "Hair", bengName: "চুল", image: require('../../assets/b_hair.jpg'), ans: ['b', 'a', 'm', 'p', 'w', 'i', 'e', 'v', 'h', 'q', 'z', 'r'] },
      { id: 0, question: "Arms", bengName: "বাহু", image: require('../../assets/b_arms.jpg'), ans: ['r', 'k', 'u', 'a', 'y', 'w', 'e', 'i', 'm', 'n', 'c', 's'] },
      { id: 0, question: "Chest", bengName: "বুক", image: require('../../assets/b_chest.jpg'), ans: ['e', 'a', 'h', 'j', 's', 'i', 'o', 'l', 'c', 'k', 'u', 't'] },
      { id: 0, question: "Stomach", bengName: "পাকস্থলী", image: require('../../assets/b_stomach.jpg'), ans: ['r', 't', 'u', 'o', 's', 'y', 'e', 'm', 'c', 'h', 'a', 'w'] },
      { id: 0, question: "Nose", bengName: "নাক", image: require('../../assets/b_nose.jpg'), ans: ['v', 'o', 'b', 'j', 'a', 's', 'm', 'g', 'i', 'n', 'u', 'e'] },
      { id: 0, question: "Hand", bengName: "হাত", image: require('../../assets/b_hand.jpg'), ans: ['j', 'o', 'a', 'p', 'w', 'e', 'h', 'g', 'm', 'n', 'u', 'd'] },
      { id: 0, question: "Eye", bengName: "চোখ", image: require('../../assets/b_eye.jpg'), ans: ['v', 'b', 'y', 'n', 'p', 'e', 'w', 'u', 'x', 'c', 'i', 'e'] },
      { id: 0, question: "Lips", bengName: "ঠোঁট", image: require('../../assets/b_lips.jpg'), ans: ['s', 'j', 'e', 'l', 'a', 'k', 'i', 'q', 'v', 'r', 'm', 'p'] },
      { id: 0, question: "Mouth", bengName: "মুখ", image: require('../../assets/b_mouth.jpg'),ans: ['u', 'x', 'o', 'g', 'a', 's', 'j', 'm', 'l', 't', 'e', 'h'] }
    ]
    this.setState({ dataArray: tempArr });
  }
  Vehicals = () => {
    let tempArr = [
      { id: 0, question: "Taxi", bengName: "ট্যাক্সি", image: require('../../assets/taxi.jpg'), ans: ['b', 'e', 'a', 's', 'd', 'f', 't', 'g', 'k', 'x', 'l', 'i'] },
      { id: 0, question: "Bus", bengName: "বাস", image: require('../../assets/bus.png'), ans: ['r', 'u', 'l', 'o', 'q', 'r', 'g', 'b', 'c', 'v', 'k', 's'] },
      { id: 0, question: "Ambulance", bengName: "অ্যাম্বুলেন্স", image: require('../../assets/ambulance.jpg'), ans: ['b', 'e', 'a', 'h', 'm', 'k', 'n', 'a', 'c', 'u', 'i', 'l'] },
      { id: 0, question: "Bicycle", bengName: "সাইকেল", image: require('../../assets/bicycle.png'), ans: ['l', 'b', 'f', 'i', 'g', 'y', 'k', 'c', 'j', 'e', 'v', 'c'] },
      { id: 0, question: "Scooter", bengName: "স্কুটার", image: require('../../assets/scooter.jpg'), ans: ['e', 'w', 's', 'q', 'k', 'c', 'u', 'r', 'o', 't', 'b', 'o'] },
      { id: 0, question: "Auto", bengName: "অটো", image: require('../../assets/auto.jpg'), ans: ['k', 'u', 'd', 'i', 'a', 'v', 'b', 't', 'y', 'x', 'c', 'o'] },
      { id: 0, question: "Motorcycle", bengName: "মোটরসাইকেল", image: require('../../assets/motorcycle.jpg'), ans: ['c', 'm', 'n', 'r', 'o', 'l', 'e', 'o', 'k', 'c', 't', 'y'] },
      { id: 0, question: "Crane", bengName: "কপিকল", image: require('../../assets/crane.png'), ans: ['a', 'z', 'm', 'c', 'u', 'g', 'r', 'h', 'n', 'j', 'k', 'e'] },
      { id: 0, question: "Tractor", bengName: "ট্র্যাক্টর", image: require('../../assets/tractor.png'), ans: ['b', 'r', 'v', 't', 'r', 'y', 'a', 's', 'c', 'o', 'q', 't'] },
      { id: 0, question: "Helicopter", bengName: "হেলিকপ্টার", image: require('../../assets/helicopter.jpg'), ans: ['e', 'r', 'h', 'j', 'p', 'e', 'l', 'o', 't', 'c', 'k', 'i'] },
      { id: 0, question: "Airplane", bengName: "বিমান", image: require('../../assets/airplane.jpg'), ans: ['i', 'e', 'a', 'u', 'l', 'm', 'p', 'n', 'f', 'a', 'w', 'r'] },
      { id: 0, question: "Rowboat", bengName: "বাইচের নৌকা", image: require('../../assets/rowboat.jpg'), ans: ['o', 'c', 't', 'r', 'y', 'k', 'o', 'u', 'a', 'b', 'z', 'w'] },
      { id: 0, question: "Train", bengName: "রেলগাড়ি", image: require('../../assets/train.jpg'), ans: ['h', 'a', 'y', 't', 'u', 'q', 'i', 'e', 'n', 's', 'r', 'd'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Colors = () => {
    let tempArr = [
      { id: 0, question: "Red", bengName: "লাল", image: "#FF0000", ans: ['s', 'e', 'f', 'd', 'c', 'b', 'r', 'o', 'q', 'w', 'r', 'l'] },
      { id: 0, question: "Orange", bengName: "কমলা", image: "#fe9600", ans: ['n', 'e', 'r', 'u', 'p', 'o', 'k', 'v', 'a', 'w', 'g', 'l'] },
      { id: 0, question: "Yellow", bengName: "হলুদ", image: "#FFFF00", ans: ['l', 'u', 'e', 'a', 'x', 'y', 'c', 'o', 'b', 'l', 'k', 'w'] },
      { id: 0, question: "Lime", bengName: "লাইম", image: "#00FF00", ans: ['e', 'a', 'i', 'u', 'w', 'q', 'l', 'o', 'h', 'm', 'g', 'd'] },
      { id: 0, question: "Aqua", bengName: "একোয়া", image: "#00FFFF", ans: ['c', 'a', 'i', 'k', 'u', 'j', 'l', 'm', 'g', 'q', 'y', 'a'] },
      { id: 0, question: "Fucia", bengName: "ফিউসিয়া", image: "#FF00FF", ans: ['c', 'd', 'e', 'u', 'z', 'f', 'y', 'k', 'i', 'b', 's', 'a'] },
      { id: 0, question: "Green", bengName: "সবুজ", image: "#008000", ans: ['e', 'a', 'r', 'm', 'p', 'g', 't', 'x', 'e', 'u', 'k', 'n'] },
      { id: 0, question: "Merun", bengName: "মেরুন", image: "#800000", ans: ['e', 'k', 'r', 'h', 'o', 'j', 'm', 'i', 'n', 'l', 'u', 's'] },
      { id: 0, question: "Olives", bengName: "জলপাই", image: "#808000", ans: ['v', 'z', 'l', 'u', 's', 'r', 'o', 't', 'i', 'y', 'e', 'w'] },
      { id: 0, question: "Purple", bengName: "পার্পল", image: "#800080", ans: ['r', 'o', 'v', 'u', 'w', 'p', 'b', 'p', 's', 'e', 'a', 'l'] },
      { id: 0, question: "Blue", bengName: "নীল", image: "#0000FF", ans: ['e', 'i', 'b', 'j', 'k', 'u', 'r', 'x', 'c', 'l', 'h', 'p'] },
      { id: 0, question: "Violet", bengName: "বেগুনী", image: "#9400D3", ans: ['o', 'y', 'i', 't', 'z', 'r', 'a', 'v', 'q', 'e', 'n', 'l'] },
      { id: 0, question: "Pink", bengName: "পিঙ্ক", image: "#FF69B4", ans: ['v', 'n', 'c', 'k', 'i', 'w', 'q', 'a', 'p', 'g', 'j', 'k'] },
      { id: 0, question: "Grey", bengName: "ধূসর", image: "#808080", ans: ['e', 'x', 'r', 'c', 'u', 'l', 'y', 'v', 'w', 'g', 'q', 't'] },
      { id: 0, question: "Brown", bengName: "বাদামী", image: "#A52A2A", ans: ['w', 'm', 'r', 'p', 'e', 'o', 'c', 'y', 't', 'b', 'u', 'n'] },
      { id: 0, question: "White", bengName: "সাদা", image: "#FFFFFF", ans: ['h', 'y', 'o', 'w', 'q', 'e', 's', 'i', 'b', 'm', 't', 'g'] },
      { id: 0, question: "Black", bengName: "কালো", image: "#000000", ans: ['a', 'd', 'c', 'h', 'i', 'k', 'j', 'u', 'b', 'r', 'o', 'l'] },
      { id: 0, question: "Silver", bengName: "রূপা", image: "#FF0000", ans: ['e', 'j', 'k', 'i', 'a', 'v', 't', 's', 'y', 'r', 'w', 'l'] },
      { id: 0, question: "Sigrin", bengName: "সিগ্রিন", image: "#2E8B57", ans: ['i', 'h', 'g', 'k', 'i', 'w', 'q', 'n', 's', 't', 'u', 'r'] },
      { id: 0, question: "Chocolate", bengName: "চকলেট", image: "#D2691E", ans: ['o', 'e', 'c', 't', 'k', 'h', 'a', 'c', 'p', 'o', 'x', 'l'] },
      { id: 0, question: "Peru", bengName: "পেরু", image: "#CD853F", ans: ['u', 't', 'e', 'y', 'k', 'w', 'j', 'r', 'l', 'g', 'p', 's'] },
    ]
    this.setState({ dataArray: tempArr });
  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.patientBackground, borderRadius: 5, borderColor: this.state.clickIndex==index? this.state.imageStatusBtn=='right'?'#4cd038': this.state.imageStatusBtn=='wrong'?'red':'#003334':'#003334', borderWidth: .6, marginRight: 7, marginTop: 7, alignItems: 'center', justifyContent: 'center', minHeight: responsiveHeight(7) }} onPress={() => {
      if (!selectedIndexArr.includes(index)) {
        selectedStr += item;
        //alert(this.state.dataArray[position].question+'    '+selectedStr)
        if (this.state.dataArray[position].question.toLowerCase().startsWith(selectedStr.toLowerCase())) {
          txtToSpeak(item)
          selectedIndexArr.push(index);
          this.setState({ imageStatusBtn: null});
          if (this.state.dataArray[position].question.toLowerCase() == selectedStr.toLowerCase()) {
            txtToSpeak(this.state.dataArray[position].question);
            playSound('claps.mp3');
            this.setState({ imageStatus: 'right'});
            setTimeout(()=>{
              this.setState({ imageStatus: null});
            },3000)
            setTimeout(() => {
              try {
                if (this.state.pageIndex < this.state.dataArray.length - 1)
                this.refs.viewpager.setPage(++this.state.pageIndex)
              else
                this.props.navigation.navigate('CommonMessage', { howmanyback: 2 })
              } catch (error) {
                
              }
              
            }, 3200)
          }
        } else {
          selectedStr = selectedStr.slice(0, -1)
          playSound('wrong.mp3')
          this.setState({ imageStatusBtn: 'wrong' });
        }
        this.setState({ refreshStr: selectedStr });
      }
      this.setState({clickIndex:index})


      // if (this.state.dataArray[position].question == item) {
      //   playSound('win.mp3');
      //   this.setState({ imageStatus: 'right', isBtnDisable: true });
      // setTimeout(() => {
      //   if (this.state.pageIndex < this.state.dataArray.length - 1)
      //     this.refs.viewpager.setPage(++this.state.pageIndex)
      //   else
      //     this.props.navigation.navigate('CommonMessage', { howmanyback: 2 })
      // }, 2200)
      // } else {
      //   playSound('wrong.mp3')
      //   this.setState({ imageStatus: 'wrong' });
      // }
    }} disabled={this.state.isBtnDisable}>
      <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', }}> {selectedIndexArr.includes(index) ? '' : item.toUpperCase()} </Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          
          this.setState({ pageIndex: position, imageStatus: null,imageStatusBtn: null, isBtnDisable: false });
          if(this.state.isSoundOn)
          txtToSpeak(this.state.dataArray ? this.state.dataArray[position].question:'');
          
          selectedStr = '';
          let strArr = this.state.dataArray ? this.state.dataArray[position].question.split(''):[];
          this.setState({ answerShowArray: strArr, refreshStr: '' });
          selectedIndexArr=[]
          this.setState({clickIndex:-1});
        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray && this.state.dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                {
                    tag == 'Colors' ? <View style={{ height: responsiveWidth(60), width: responsiveWidth(60), backgroundColor:item.image,  marginTop: responsiveHeight(7),borderRadius:6 }}/>:
<Image source={item.image} style={{ height: responsiveWidth(60), width: responsiveWidth(60), resizeMode: 'contain', marginTop: responsiveHeight(7) }} />
                  }
                  
                  
                  {this.state.imageStatus ? <View>
                    {this.state.imageStatus == 'right' ? <Text style={{ color: Color.green, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici',  }}> {item.bengName} </Text> : null}

                    <Image source={this.state.imageStatus == 'right' ? success : error} style={{ height: responsiveFontSize(12), width: responsiveFontSize(12), resizeMode: 'contain', marginTop: 0, tintColor: this.state.imageStatus == 'right' ? 'green' : null }} />
                  </View> : null}

                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', margin: 10, marginTop: responsiveHeight(6) }}>
                    {this.state.answerShowArray.map((item2, index) => {
                      return (
                        <View style={{ backgroundColor: Color.createInputBorder, alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginLeft: 5, height: responsiveFontSize(5), width: responsiveFontSize(5), marginTop: 5 }}>
                          <Text style={{ textAlign: 'center', fontSize: CustomFont.font30, fontWeight: '800', color: '#000', }}>{index < this.state.refreshStr.length ? item2.toUpperCase() : ''}</Text>
                        </View>

                      );
                    }, this)}
                  </View>

                  
                </View>

                <View>
                  <FlatList
                    numColumns={6}
                    style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2), marginLeft: 10 }}
                    data={item.ans}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()} />
                </View>
               {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              </View>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, left: 7, zIndex: 99 }} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
          this.props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, right: 7, zIndex: 99 }} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
         this.setState({isSoundOn:!this.state.isSoundOn});
        }}>
          <Image source={this.state.isSoundOn ? sound_off :sound } style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', margin: 15,tintColor:this.state.isSoundOn ?'red': 'green' }} />
        </TouchableOpacity>
      </View>
    );
  }

}
//export default HomeDrawer;
