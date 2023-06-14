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
let soundPosition = 0, tag='';
export default class Images4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      score: 0,
      dataArray: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
      imageStatus: null,
      isBtnDisable: false,
      clickIndex:-1,
      isSoundOn:true,
    };

  }
  async componentDidMount() {
    tag = this.props.route.params.tag;
    //alert(tag)
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
      } else if (tag == 'HumanBody') {
        this.HumanBody();
      } else if (tag == 'Vehicals') {
        this.Vehicals();
      } else if (tag == 'Colors') {
        this.Colors();
      } else if (tag == 'Capitals') {
        this.Capitals();
      } else if (tag == 'Flags') {
        this.Flags();
      } else if (tag == 'City') {
        this.City();
      }
    }
  }
  City = () => {
    let tempArr = [
      { ans: 2, engName: "Ottawa", bengName: "", image: [require('../../assets/city/Paris.jpg'),require('../../assets/city/Ottawa.jpg'),require('../../assets/city/Vienna.jpg'),require('../../assets/city/BuenosAires.jpg')] },
      { ans: 4, engName: "Brussels", bengName: "", image: [require('../../assets/city/Thimphu.jpg'),require('../../assets/city/Brasilia.jpg'),require('../../assets/city/PhnomPenh.jpg'),require('../../assets/city/Brussels.jpg')] },
      { ans: 1, engName: "San Jose", bengName: "", image: [require('../../assets/city/SanJose.jpg'),require('../../assets/city/Copenhagen.jpg'),require('../../assets/city/Paris.jpg'),require('../../assets/city/Berlin.jpg')] },
      { ans: 2, engName: "Nuuk", bengName: "", image: [require('../../assets/city/Algiers.jpg'),require('../../assets/city/Nuuk.jpg'),require('../../assets/city/Vienna.jpg'),require('../../assets/city/Paris.jpg')] },
      { ans: 0, engName: "Madrid", bengName: "", image: [require('../../assets/city/Madrid.jpg'),require('../../assets/city/Stockholm.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/Ankara.jpg')] },
      { ans: 3, engName: "Kiev", bengName: "", image: [require('../../assets/city/Hanoi.jpg'),require('../../assets/city/WashingtonDC.jpg'),require('../../assets/city/Kiev.jpg'),require('../../assets/city/delhi.jpg')] },
      { ans: 1, engName: "Bern", bengName: "", image: [require('../../assets/city/Bern.jpg'),require('../../assets/city/Seoul.jpg'),require('../../assets/city/Moscow.jpg'),require('../../assets/city/Singapore.jpg')] },
      { ans: 2, engName: "Delhi", bengName: "", image: [require('../../assets/city/Dakar.jpg'),require('../../assets/city/delhi.jpg'),require('../../assets/city/Madrid.jpg'),require('../../assets/city/Kabul.jpg')] },
      { ans: 4, engName: "Buenos Aires", bengName: "", image: [require('../../assets/city/Canberra.jpg'),require('../../assets/city/Vienna.jpg'),require('../../assets/city/Dhaka.jpg'),require('../../assets/city/BuenosAires.jpg')] },
      { ans: 1, engName: "Beijing", bengName: "", image: [require('../../assets/city/Beijing.jpg'),require('../../assets/city/Ottawa.jpg'),require('../../assets/city/Berlin.jpg'),require('../../assets/city/Santiago.jpg')] },
      //{ ans: 2, engName: "Reykjavik", bengName: "", image: [require('../../assets/city/Jakarta.jpg'),require('../../assets/city/Reykjavik.jpg'),require('../../assets/city/Rome.jpg'),require('../../assets/city/Tehran.jpg')] },
      { ans: 0, engName: "Tokyo", bengName: "", image: [require('../../assets/city/KualaLumpur.jpg'),require('../../assets/city/MexicoCity.jpg'),require('../../assets/city/Tokyo.jpg'),require('../../assets/city/delhi.jpg')] },
      { ans: 3, engName: "Rabat", bengName: "", image: [require('../../assets/city/Naypyidaw.jpg'),require('../../assets/city/Kathmandu.jpg'),require('../../assets/city/Rabat.jpg'),require('../../assets/city/Amsterdam.jpg')] },
      { ans: 2, engName: "Abuja", bengName: "", image: [require('../../assets/city/Oslo.jpg'),require('../../assets/city/Abuja.jpg'),require('../../assets/city/Islamabad.jpg'),require('../../assets/city/PanamaCity.jpg')] },
      { ans: 1, engName: "Manila", bengName: "", image: [require('../../assets/city/Manila.jpg'),require('../../assets/city/Warsaw.jpg'),require('../../assets/city/Lisbon.jpg'),require('../../assets/city/Bucharest.webp')] },
      { ans: 4, engName: "Stockholm", bengName: "", image: [require('../../assets/city/Bern.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/London.jpg'),require('../../assets/city/Stockholm.jpg')] },
      { ans: 1, engName: "Dakar", bengName: "", image: [require('../../assets/city/Dakar.jpg'),require('../../assets/city/Stockholm.jpg'),require('../../assets/city/Beijing.jpg'),require('../../assets/city/Santiago.jpg')] },
      { ans: 0, engName: "Dhaka", bengName: "", image: [require('../../assets/city/Brussels.jpg'),require('../../assets/city/Vienna.jpg'),require('../../assets/city/Dhaka.jpg'),require('../../assets/city/BuenosAires.jpg')] },
      { ans: 2, engName: "Tirana", bengName: "", image: [require('../../assets/city/Kabul.jpg'),require('../../assets/city/Tirana.jpg'),require('../../assets/city/Algiers.jpg'),require('../../assets/city/Yerevan.jpg')] },
      { ans: 3, engName: "Canberra", bengName: "", image: [require('../../assets/city/Dhaka.jpg'),require('../../assets/city/Thimphu.jpg'),require('../../assets/city/Canberra.jpg'),require('../../assets/city/delhi.jpg')] },
      { ans: 1, engName: "Kabul", bengName: "", image: [require('../../assets/city/Kabul.jpg'),require('../../assets/city/Brasilia.jpg'),require('../../assets/city/Ottawa.jpg'),require('../../assets/city/Santiago.jpg')] },
      { ans: 4, engName: "Santiago", bengName: "", image: [require('../../assets/city/Manila.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/MexicoCity.jpg'),require('../../assets/city/Santiago.jpg')] },
      { ans: 2, engName: "Buenos Aires", bengName: "", image: [require('../../assets/city/Stockholm.jpg'),require('../../assets/city/BuenosAires.jpg'),require('../../assets/city/delhi.jpg'),require('../../assets/city/Kathmandu.jpg')] },
      { ans: 3, engName: "Addis Ababa", bengName: "", image: [require('../../assets/city/Bucharest.webp'),require('../../assets/city/Abuja.jpg'),require('../../assets/city/AddisAbaba.jpg'),require('../../assets/city/Reykjavik.jpg')] },
      { ans: 1, engName: "Suva", bengName: "", image: [require('../../assets/city/Suva.jpg'),require('../../assets/city/Jakarta.jpg'),require('../../assets/city/Warsaw.jpg'),require('../../assets/city/Tokyo.jpg')] },
      { ans: 2, engName: "Paris", bengName: "", image: [require('../../assets/city/Tirana.jpg'),require('../../assets/city/Paris.jpg'),require('../../assets/city/Oslo.jpg'),require('../../assets/city/PanamaCity.jpg')] },
      { ans: 4, engName: "Kathmandu", bengName: "", image: [require('../../assets/city/Naypyidaw.jpg'),require('../../assets/city/KualaLumpur.jpg'),require('../../assets/city/Seoul.jpg'),require('../../assets/city/Kathmandu.jpg')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Capitals = () => {
    let tempArr = [
      { ans: 2, engName: "Oslo", bengName: "", image: [require('../../assets/city/Suva.jpg'),require('../../assets/city/Oslo.jpg'),require('../../assets/city/Paris.jpg'),require('../../assets/city/Kathmandu.jpg')] },
      { ans: 3, engName: "Islamabad", bengName: "", image: [require('../../assets/city/Bangkok.jpg'),require('../../assets/city/Kabul.jpg'),require('../../assets/city/Islamabad.jpg'),require('../../assets/city/Reykjavik.jpg')] },
      { ans: 4, engName: "Warsaw", bengName: "", image: [require('../../assets/city/Dhaka.jpg'),require('../../assets/city/Kabul.jpg'),require('../../assets/city/delhi.jpg'),require('../../assets/city/Warsaw.jpg')] },
      { ans: 1, engName: "Jakarta", bengName: "", image: [require('../../assets/city/Jakarta.jpg'),require('../../assets/city/Canberra.jpg'),require('../../assets/city/Brussels.jpg'),require('../../assets/city/Tirana.jpg')] },
      { ans: 3, engName: "Reykjavik", bengName: "", image: [require('../../assets/city/Naypyidaw.jpg'),require('../../assets/city/Tokyo.jpg'),require('../../assets/city/Reykjavik.jpg'),require('../../assets/city/Brasilia.jpg')] },
      { ans: 1, engName: "Berlin", bengName: "", image: [require('../../assets/city/Berlin.jpg'),require('../../assets/city/Kathmandu.jpg'),require('../../assets/city/Abuja.jpg'),require('../../assets/city/Thimphu.jpg')] },
      { ans: 3, engName: "Rome", bengName: "", image: [require('../../assets/city/Tokyo.jpg'),require('../../assets/city/KualaLumpur.jpg'),require('../../assets/city/Rome.jpg'),require('../../assets/city/Manila.jpg')] },
      { ans: 2, engName: "Male", bengName: "", image: [require('../../assets/city/Oslo.jpg'),require('../../assets/city/Male.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/Warsaw.jpg')] },
      { ans: 1, engName: "Naypyidaw", bengName: "", image: [require('../../assets/city/Naypyidaw.jpg'),require('../../assets/city/Dhaka.jpg'),require('../../assets/city/Thimphu.jpg'),require('../../assets/city/Kathmandu.jpg')] },
      { ans: 1, engName: "Amsterdam", bengName: "", image: [require('../../assets/city/Amsterdam.jpg'),require('../../assets/city/Suva.jpg'),require('../../assets/city/Jakarta.jpg'),require('../../assets/city/Paris.jpg')] },
      { ans: 3, engName: "Dhaka", bengName: "", image: [require('../../assets/city/Islamabad.jpg'),require('../../assets/city/Canberra.jpg'),require('../../assets/city/Dhaka.jpg'),require('../../assets/city/Oslo.jpg')] },
      { ans: 4, engName: "Manila", bengName: "", image: [require('../../assets/city/Tokyo.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/Thimphu.jpg'),require('../../assets/city/Manila.jpg')] },
      { ans: 2, engName: "Ankara", bengName: "", image: [require('../../assets/city/Berlin.jpg'),require('../../assets/city/Ankara.jpg'),require('../../assets/city/Brasilia.jpg'),require('../../assets/city/Rome.jpg')] },
      { ans: 3, engName: "Kiev", bengName: "", image: [require('../../assets/city/Naypyidaw.jpg'),require('../../assets/city/Reykjavik.jpg'),require('../../assets/city/Kiev.jpg'),require('../../assets/city/Tirana.jpg')] },
      { ans: 1, engName: "London", bengName: "", image: [require('../../assets/city/London.jpg'),require('../../assets/city/Kathmandu.jpg'),require('../../assets/city/Brussels.jpg'),require('../../assets/city/Thimphu.jpg')] },
      { ans: 4, engName: "Washington DC", bengName: "", image: [require('../../assets/city/Amsterdam.jpg'),require('../../assets/city/Oslo.jpg'),require('../../assets/city/KualaLumpur.jpg'),require('../../assets/city/WashingtonDC.jpg')] },
      { ans: 2, engName: "Bern", bengName: "", image: [require('../../assets/city/Male.jpg'),require('../../assets/city/Bern.jpg'),require('../../assets/city/Warsaw.jpg'),require('../../assets/city/Bangkok.jpg')] },
      { ans: 1, engName: "Abuja", bengName: "", image: [require('../../assets/city/Abuja.jpg'),require('../../assets/city/Tokyo.jpg'),require('../../assets/city/Amsterdam.jpg'),require('../../assets/city/Dhaka.jpg')] },
      { ans: 4, engName: "Kuala Lumpur", bengName: "", image: [require('../../assets/city/Kiev.jpg'),require('../../assets/city/Islamabad.jpg'),require('../../assets/city/Suva.jpg'),require('../../assets/city/KualaLumpur.jpg')] },
      { ans: 2, engName: "Paris", bengName: "", image: [require('../../assets/city/WashingtonDC.jpg'),require('../../assets/city/Paris.jpg'),require('../../assets/city/Reykjavik.jpg'),require('../../assets/city/delhi.jpg')] },
      { ans: 3, engName: "Kathmandu", bengName: "", image: [require('../../assets/city/Abuja.jpg'),require('../../assets/city/Kiev.jpg'),require('../../assets/city/Kathmandu.jpg'),require('../../assets/city/Ankara.jpg')] },
      { ans: 1, engName: "Berlin", bengName: "", image: [require('../../assets/city/Berlin.jpg'),require('../../assets/city/London.jpg'),require('../../assets/city/Manila.jpg'),require('../../assets/city/delhi.jpg')] },
      { ans: 2, engName: "Beijing", bengName: "", image: [require('../../assets/city/Abuja.jpg'),require('../../assets/city/Beijing.jpg'),require('../../assets/city/Oslo.jpg'),require('../../assets/city/Bangkok.jpg')] },
      { ans: 1, engName: "Kabul", bengName: "", image: [require('../../assets/city/Kabul.jpg'),require('../../assets/city/Ankara.jpg'),require('../../assets/city/Amsterdam.jpg'),require('../../assets/city/Suva.jpg')] },
      { ans: 2, engName: "Tokyo", bengName: "", image: [require('../../assets/city/WashingtonDC.jpg'),require('../../assets/city/Tokyo.jpg'),require('../../assets/city/Bern.jpg'),require('../../assets/city/Islamabad.jpg')] },
      { ans: 3, engName: "Bangkok", bengName: "", image: [require('../../assets/city/London.jpg'),require('../../assets/city/Male.jpg'),require('../../assets/city/Bangkok.jpg'),require('../../assets/city/KualaLumpur.jpg')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Flags = () => {
    let tempArr = [
      { ans: 0, engName: "Afghanistan", bengName: "", image: [require('../../assets/flag/af.jpg'),require('../../assets/flag/ml.jpg'),require('../../assets/flag/ao.jpg'),require('../../assets/flag/mc.jpg')] },
      { ans: 1, engName: "Albania", bengName: "", image: [require('../../assets/flag/ar.jpg'),require('../../assets/flag/al.jpg'),require('../../assets/flag/gb.jpg'),require('../../assets/flag/vn.jpg')] },
      { ans: 3, engName: "Switzerland", bengName: "", image: [require('../../assets/flag/th.jpg'),require('../../assets/flag/tr.jpg'),require('../../assets/flag/ch.jpg'),require('../../assets/flag/bn.jpg')] },
      { ans: 0, engName: "Canada", bengName: "", image: [require('../../assets/flag/ca.jpg'),require('../../assets/flag/ua.jpg'),require('../../assets/flag/hk.jpg'),require('../../assets/flag/us.jpg')] },
      { ans: 2, engName: "Hong Kong", bengName: "", image: [require('../../assets/flag/id.jpg'),require('../../assets/flag/in.jpg'),require('../../assets/flag/hk.jpg'),require('../../assets/flag/hu.jpg')] },
      { ans: 1, engName: "Turkey", bengName: "", image: [require('../../assets/flag/se.jpg'),require('../../assets/flag/tr.jpg'),require('../../assets/flag/af.jpg'),require('../../assets/flag/lk.jpg')] },
      { ans: 0, engName: "India", bengName: "", image: [require('../../assets/flag/in.jpg'),require('../../assets/flag/hn.jpg'),require('../../assets/flag/is.jpg'),require('../../assets/flag/id.jpg')] },
      { ans: 2, engName: "Thailand", bengName: "", image: [require('../../assets/flag/hk.jpg'),require('../../assets/flag/gz.jpg'),require('../../assets/flag/th.jpg'),require('../../assets/flag/ru.jpg')] },
      { ans: 1, engName: "Germany", bengName: "", image: [require('../../assets/flag/ro.jpg'),require('../../assets/flag/de.jpg'),require('../../assets/flag/pt.jpg'),require('../../assets/flag/gn.jpg')] },
      { ans: 3, engName: "Greenland", bengName: "", image: [require('../../assets/flag/gu.jpg'),require('../../assets/flag/gn.jpg'),require('../../assets/flag/id.jpg'),require('../../assets/flag/gl.jpg')] },
      { ans: 0, engName: "Iceland", bengName: "", image: [require('../../assets/flag/is.jpg'),require('../../assets/flag/gw.jpg'),require('../../assets/flag/gh.jpg'),require('../../assets/flag/tf.jpg')] },
      { ans: 1, engName: "Poland", bengName: "", image: [require('../../assets/flag/gh.jpg'),require('../../assets/flag/pl.jpg'),require('../../assets/flag/gl.jpg'),require('../../assets/flag/gt.jpg')] },
      { ans: 0, engName: "Indonesia", bengName: "", image: [require('../../assets/flag/id.jpg'),require('../../assets/flag/ro.jpg'),require('../../assets/flag/gt.jpg'),require('../../assets/flag/sn.jpg')] },
      { ans: 3, engName: "Greece", bengName: "", image: [require('../../assets/flag/pf.jpg'),require('../../assets/flag/fo.jpg'),require('../../assets/flag/af.jpg'),require('../../assets/flag/gr.jpg')] },
      { ans: 0, engName: "Argentina", bengName: "", image: [require('../../assets/flag/ar.jpg'),require('../../assets/flag/fo.jpg'),require('../../assets/flag/fr.jpg'),require('../../assets/flag/ga.jpg')] },
      { ans: 1, engName: "Netherlands", bengName: "", image: [require('../../assets/flag/ng.jpg'),require('../../assets/flag/nl.jpg'),require('../../assets/flag/gm.jpg'),require('../../assets/flag/pk.jpg')] },
      { ans: 3, engName: "Denmark", bengName: "", image: [require('../../assets/flag/af.jpg'),require('../../assets/flag/dm.jpg'),require('../../assets/flag/ec.jpg'),require('../../assets/flag/dk.jpg')] },
      { ans: 0, engName: "Pakistan", bengName: "", image: [require('../../assets/flag/pk.jpg'),require('../../assets/flag/gq.jpg'),require('../../assets/flag/ph.jpg'),require('../../assets/flag/fo.jpg')] },
      { ans: 1, engName: "Russia", bengName: "", image: [require('../../assets/flag/sg.jpg'),require('../../assets/flag/ru.jpg'),require('../../assets/flag/es.jpg'),require('../../assets/flag/gm.jpg')] },
      { ans: 0, engName: "Philippines", bengName: "", image: [require('../../assets/flag/ph.jpg'),require('../../assets/flag/gr.jpg'),require('../../assets/flag/no.jpg'),require('../../assets/flag/pl.jpg')] },
      { ans: 2, engName: "Austria", bengName: "", image: [require('../../assets/flag/fi.jpg'),require('../../assets/flag/pf.jpg'),require('../../assets/flag/at.jpg'),require('../../assets/flag/gi.jpg')] },
      { ans: 0, engName: "Nepal", bengName: "", image: [require('../../assets/flag/np.jpg'),require('../../assets/flag/mm.jpg'),require('../../assets/flag/mx.jpg'),require('../../assets/flag/cn.jpg')] },
      { ans: 1, engName: "China", bengName: "", image: [require('../../assets/flag/cc.jpg'),require('../../assets/flag/cn.jpg'),require('../../assets/flag/km.jpg'),require('../../assets/flag/cr.jpg')] },
      { ans: 2, engName: "Maldives", bengName: "", image: [require('../../assets/flag/nl.jpg'),require('../../assets/flag/dk.jpg'),require('../../assets/flag/mv.jpg'),require('../../assets/flag/do.jpg')] },
      { ans: 0, engName: "Spain", bengName: "", image: [require('../../assets/flag/bz.jpg'),require('../../assets/flag/et.jpg'),require('../../assets/flag/fj.jpg'),require('../../assets/flag/af.jpg')] },
      { ans: 2, engName: "Benin", bengName: "", image: [require('../../assets/flag/gp.jpg'),require('../../assets/flag/gn.jpg'),require('../../assets/flag/bj.jpg'),require('../../assets/flag/ht.jpg')] },
      { ans: 0, engName: "Sri Lanka", bengName: "", image: [require('../../assets/flag/lk.jpg'),require('../../assets/flag/eg.jpg'),require('../../assets/flag/sz.jpg'),require('../../assets/flag/in.jpg')] },
      { ans: 3, engName: "Brazil", bengName: "", image: [require('../../assets/flag/gt.jpg'),require('../../assets/flag/id.jpg'),require('../../assets/flag/is.jpg'),require('../../assets/flag/br.jpg')] },
      { ans: 1, engName: "Japan", bengName: "", image: [require('../../assets/flag/mx.jpg'),require('../../assets/flag/jp.jpg'),require('../../assets/flag/bd.jpg'),require('../../assets/flag/gp.jpg')] },
      { ans: 0, engName: "Colombia", bengName: "", image: [require('../../assets/flag/co.jpg'),require('../../assets/flag/cg.jpg'),require('../../assets/flag/cr.jpg'),require('../../assets/flag/af.jpg')] },
      { ans: 2, engName: "United States", bengName: "", image: [require('../../assets/flag/au.jpg'),require('../../assets/flag/de.jpg'),require('../../assets/flag/us.jpg'),require('../../assets/flag/br.jpg')] },
      { ans: 1, engName: "Cambodia", bengName: "", image: [require('../../assets/flag/hk.jpg'),require('../../assets/flag/kh.jpg'),require('../../assets/flag/in.jpg'),require('../../assets/flag/id.jpg')] },
      { ans: 0, engName: "Mexico", bengName: "", image: [require('../../assets/flag/mx.jpg'),require('../../assets/flag/cc.jpg'),require('../../assets/flag/cd.jpg'),require('../../assets/flag/hr.jpg')] },
      { ans: 2, engName: "Nigeria", bengName: "", image: [require('../../assets/flag/pk.jpg'),require('../../assets/flag/ky.jpg'),require('../../assets/flag/ng.jpg'),require('../../assets/flag/ph.jpg')] },
      { ans: 3, engName: "Bangladesh", bengName: "", image: [require('../../assets/flag/bb.jpg'),require('../../assets/flag/be.jpg'),require('../../assets/flag/bm.jpg'),require('../../assets/flag/bd.jpg')] },
      { ans: 0, engName: "Bhutan", bengName: "", image: [require('../../assets/flag/bt.jpg'),require('../../assets/flag/bm.jpg'),require('../../assets/flag/bo.jpg'),require('../../assets/flag/bv.jpg')] },
      { ans: 1, engName: "Belgium", bengName: "", image: [require('../../assets/flag/bj.jpg'),require('../../assets/flag/be.jpg'),require('../../assets/flag/by.jpg'),require('../../assets/flag/bw.jpg')] },
      { ans: 0, engName: "Australia", bengName: "", image: [require('../../assets/flag/au.jpg'),require('../../assets/flag/aw.jpg'),require('../../assets/flag/bh.jpg'),require('../../assets/flag/be.jpg')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Fruits = () => {
    let tempArr = [
      { ans: 0, engName: "Apple", bengName: "আপেল", image: [require('../../assets/apple.jpg'), require('../../assets/kiwi.png'), require('../../assets/mangos.jpg'), require('../../assets/plum.png')] },
      { ans: 1, engName: "Peach", bengName: "পীচ", image: [require('../../assets/katal.jpg'),require('../../assets/peach.png'),require('../../assets/avocado.png'),require('../../assets/pineapples.png')] },
      { ans: 2, engName: "Pomegranate", bengName: "বেদানা", image: [require('../../assets/kiwi.png'),require('../../assets/mandarins.jpg'),require('../../assets/franar.jpg'),require('../../assets/strawberry.png')] },
      { ans: 3, engName: "Avocado", bengName: "আভাকাডো", image: [require('../../assets/plum.png'),require('../../assets/raspberry.jpg'),require('../../assets/mangos.jpg'),require('../../assets/avocado.png')] },
      { ans: 2, engName: "Coconut", bengName: "নারিকেল", image: [require('../../assets/kiwi.png'),require('../../assets/pears.jpg'),require('../../assets/coconuts.png'),require('../../assets/grapes.png')] },
      { ans: 1, engName: "Lemon", bengName: "লেবু", image: [require('../../assets/mandarins.jpg'),require('../../assets/lemon.png'),require('../../assets/cherry.jpg'),require('../../assets/blueberry.jpg') ] },
      { ans: 3, engName: "Pineapple", bengName: "আনারস", image: [require('../../assets/grapes.png'),require('../../assets/organge.png'),require('../../assets/cherry.jpg'),require('../../assets/pineapples.png')] },
      { ans: 2, engName: "Kiwi", bengName: "কিবি", image: [require('../../assets/nectarine.png'),require('../../assets/watermelon.png'),require('../../assets/guava.jpg'),require('../../assets/kiwi.png')] },
      { ans: 1, engName: "Papaya", bengName: "পেঁপে", image: [require('../../assets/coconuts.png'),require('../../assets/papaya.jpg'),require('../../assets/katal.jpg'),require('../../assets/grapes.png'),] },
      { ans: 3, engName: "Jackfruit", bengName: "কাঁঠাল", image: [require('../../assets/pears.jpg'),require('../../assets/watermelon.png'),require('../../assets/date.jpg'),require('../../assets/katal.jpg')] },
      { ans: 1, engName: "Mandarin", bengName: "ম্যান্ডারিন", image: [require('../../assets/plum.png'),require('../../assets/mandarins.jpg'),require('../../assets/pineapples.png'),require('../../assets/coconuts.png')] },
      { ans: 0, engName: "Raspberry", bengName: "রাস্পবেরি", image: [require('../../assets/raspberry.jpg'),require('../../assets/banana.png'),require('../../assets/grapes.png'),require('../../assets/organge.png')] },
      { ans: 0, engName: "Banana", bengName: "কলা", image: [require('../../assets/banana.png'),require('../../assets/custard_apple.jpg'),require('../../assets/pears.jpg'),require('../../assets/guava.jpg')] },
      { ans: 1, engName: "Plum", bengName: "তাল", image: [require('../../assets/katal.jpg'),require('../../assets/plum.png'),require('../../assets/blueberry.jpg'),require('../../assets/strawberry.png')] },
      { ans: 2, engName: "Blueberry", bengName: "জাম কুল ", image: [require('../../assets/date.jpg'),require('../../assets/mangos.jpg'),require('../../assets/blueberry.jpg'),require('../../assets/papaya.jpg')] },
      { ans: 3, engName: "Mango", bengName: "আম", image: [require('../../assets/pears.jpg'),require('../../assets/custard_apple.jpg'),require('../../assets/nectarine.png'),require('../../assets/mangos.jpg')] },
      { ans: 1, engName: "Grape", bengName: "আঙ্গুর", image: [require('../../assets/raspberry.jpg'),require('../../assets/grapes.png'),require('../../assets/mangos.jpg'),require('../../assets/watermelon.png')] },
      { ans: 0, engName: "Nectarine", bengName: "নেক্যারিনে", image: [require('../../assets/nectarine.png'),,require('../../assets/guava.jpg'),require('../../assets/organge.png'),require('../../assets/custard_apple.jpg')] },
      { ans: 2, engName: "Strawberry", bengName: "স্ট্রবেরি", image: [require('../../assets/plum.png'),require('../../assets/date.jpg'),require('../../assets/strawberry.png'),require('../../assets/grapes.png')] },
      { ans: 0, engName: "Cherry", bengName: "চেরিফল", image: [require('../../assets/cherry.jpg'),require('../../assets/watermelon.png'),require('../../assets/banana.png'),require('../../assets/nectarine.png')] },
      { ans: 1, engName: "Pear", bengName: "নাশপাতি", image: [require('../../assets/mangos.jpg'),require('../../assets/pears.jpg'),require('../../assets/strawberry.png'),require('../../assets/blueberry.jpg')] },
      { ans: 2, engName: "Orange", bengName: "কমলা", image: [require('../../assets/custard_apple.jpg'),require('../../assets/banana.png'),require('../../assets/organge.png'),require('../../assets/guava.jpg')] },
      { ans: 3, engName: "Watermelon", bengName: "তরমুজ", image: [require('../../assets/cherry.jpg'),require('../../assets/pears.jpg'),require('../../assets/date.jpg'),require('../../assets/watermelon.png')] },
      { ans: 2, engName: "Guava", bengName: "পেয়ারা", image: [require('../../assets/date.jpg'),require('../../assets/nectarine.png'),require('../../assets/guava.jpg'),require('../../assets/grapes.png')] },
      { ans: 3, engName: "Date", bengName: "খেজুর", image: [require('../../assets/raspberry.jpg'),require('../../assets/plum.png'),require('../../assets/date.jpg'),require('../../assets/guava.jpg')] },
      { ans: 1, engName: "Custard Apple", bengName: "আতা", image: [require('../../assets/pineapples.png'),('../../assets/custard_apple.jpg'),require('../../assets/apple.jpg'),require('../../assets/kiwi.png')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Vegetables = () => {
    let tempArr = [
      { ans: 0, engName: "Beetroot", bengName: "বীট", image: [require('../../assets/beetroot.jpg'),require('../../assets/cron.jpg'),require('../../assets/bittergourd.jpg'),require('../../assets/cabbage.jpg')] },
      { ans: 1, engName: "Pumpkin", bengName: "কুমড়া", image: [require('../../assets/bottle_gourd.jpg'),require('../../assets/frvgpumpkin.png'),require('../../assets/green_pepper.png'),require('../../assets/cron.jpg'),] },
      { ans: 0, engName: "Mushroom", bengName: "মাশরুম", image: [require('../../assets/mushroom.png'),require('../../assets/cabbage.jpg'),require('../../assets/courgette.jpg'),require('../../assets/cauliflower.jpg')] },
      { ans: 3, engName: "Bitter Gourd", bengName: "উচ্ছে", image: [require('../../assets/carrot.png'),require('../../assets/cauliflower.jpg'),require('../../assets/frvgpumpkin.png'),require('../../assets/bittergourd.jpg')] },
      { ans: 2, engName: "Black Pepper", bengName: "গোল মরিচ", image: [require('../../assets/turnip.png'),require('../../assets/green_pepper.png'),require('../../assets/blackpepper.jpg'),require('../../assets/frvgcucumber.png')] },
      { ans: 1, engName: "Bottle Gourd ", bengName: "বোতল লাউ", image: [require('../../assets/corinder_leaf.jpg'),require('../../assets/bottle_gourd.jpg'),require('../../assets/carrot.png'),require('../../assets/onions.png')] },
      { ans: 3, engName: "Cabbage", bengName: "বাঁধাকপি", image: [require('../../assets/courgette.jpg'),require('../../assets/mushroom.png'),require('../../assets/beetroot.jpg'),require('../../assets/cabbage.jpg')] },
      { ans: 2, engName: "Capsicum", bengName: "ক্যাপসিকাম", image: [require('../../assets/turnip.png'),require('../../assets/celery.jpg'),require('../../assets/green_pepper.png'),require('../../assets/eggplant.jpg')] },
      { ans: 0, engName: "Carrot", bengName: "গাজর", image: [require('../../assets/carrot.png'),require('../../assets/chilli.jpg'),require('../../assets/fenugreek.jpg'),require('../../assets/snake_gourd.jpg')] },
      { ans: 1, engName: "Cauliflower", bengName: "ফুলকপি", image: [require('../../assets/onions.png'),require('../../assets/cauliflower.jpg'),require('../../assets/french_beans.jpg'),require('../../assets/radish.png')] },
      { ans: 3, engName: "Corinder leaf", bengName: "ধনে পাতা", image: [require('../../assets/green_pepper.png'),require('../../assets/lettuce.jpg'),require('../../assets/eggplant.jpg'),require('../../assets/corinder_leaf.jpg')] },
      { ans: 2, engName: "Corn", bengName: "ভূট্টা", image: [require('../../assets/ginger.jpg'),require('../../assets/peppermint.jpg'),require('../../assets/cron.jpg'),require('../../assets/french_beans.jpg')] },
      { ans: 3, engName: "Celery", bengName: "সেলারি", image: [require('../../assets/sweet_potato.jpg'),require('../../assets/spinach.jpg'),require('../../assets/broccoli.jpg'),require('../../assets/celery.jpg')] },
      { ans: 1, engName: "Chilli", bengName: "লঙ্কা", image: [require('../../assets/frvgtomato.png'),require('../../assets/chilli.jpg'),require('../../assets/garlic.jpg'),require('../../assets/asparagus.png')] },
      { ans: 2, engName: "Eggplant", bengName: "বেগুন", image: [require('../../assets/radish.png'),require('../../assets/cauliflower.jpg'),require('../../assets/eggplant.jpg'),require('../../assets/lettuce.jpg')] },
      { ans: 3, engName: "Cucumber", bengName: "শসা", image: [require('../../assets/cron.jpg'),require('../../assets/courgette.jpg'),require('../../assets/lady_finger.jpg'),require('../../assets/frvgcucumber.png')] },
      { ans: 3, engName: "Fenugreek Leaf", bengName: "মেথি পাতা", image: [require('../../assets/beetroot.jpg'),require('../../assets/green_chillies.png'),require('../../assets/ginger.jpg'),require('../../assets/fenugreek.jpg')] },
      { ans: 2, engName: "Turnip", bengName: "শালগম", image: [require('../../assets/sweet_potato.jpg'),require('../../assets/radish.png'),require('../../assets/turnip.png'),require('../../assets/broccoli.jpg')] },
      { ans: 1, engName: "Courgette", bengName: "কোর্গেটটা", image: [require('../../assets/potato.jpg'),require('../../assets/courgette.jpg'),require('../../assets/snake_gourd.jpg'),require('../../assets/eggplant.jpg')] },
      { ans: 2, engName: "Green chilli", bengName: "কাঁচা লঙ্কা", image: [require('../../assets/frvgpumpkin.png'),require('../../assets/cauliflower.jpg'),require('../../assets/green_chillies.png'),require('../../assets/asparagus.png')] },
      { ans: 3, engName: "Onion", bengName: "পেঁয়াজ", image: [require('../../assets/sweet_potato.jpg'),require('../../assets/broccoli.jpg'),require('../../assets/garlic.jpg'),require('../../assets/onions.png')] },
      { ans: 1, engName: "Lettuce", bengName: "লেটুস", image: [require('../../assets/lady_finger.jpg'),require('../../assets/lettuce.jpg'),require('../../assets/frvgtomato.png'),require('../../assets/potato.jpg')] },
      { ans: 0, engName: "Radish", bengName: "মূলা", image: [require('../../assets/radish.png'),require('../../assets/sweet_potato.jpg'),require('../../assets/sweet_potato.jpg'),require('../../assets/lady_finger.jpg')] },
      { ans: 3, engName: "Asparagus", bengName: "শতমূলী", image: [require('../../assets/frvgtomato.png'),require('../../assets/broccoli.jpg'),require('../../assets/ginger.jpg'),require('../../assets/asparagus.png')] },
      { ans: 2, engName: "Green pepper", bengName: "সবুজ মরিচ", image: [require('../../assets/radish.png'),require('../../assets/turnip.png'),require('../../assets/green_pepper.png'),require('../../assets/peppermint.jpg')] },
      { ans: 1, engName: "French beans ", bengName: "ফরাসি মটরশুটি", image: [require('../../assets/potato.jpg'),require('../../assets/french_beans.jpg'),require('../../assets/frvgcucumber.png'),require('../../assets/cauliflower.jpg')] },
      { ans: 2, engName: "Snake Gourd  ", bengName: "চিচিঙ্গা ", image: [require('../../assets/bittergourd.jpg'),require('../../assets/carrot.png'),require('../../assets/snake_gourd.jpg'),require('../../assets/frvgtomato.png')] },
      { ans: 3, engName: "Garlic", bengName: "রসুন", image: [require('../../assets/courgette.jpg'),require('../../assets/frvgpumpkin.png'),require('../../assets/lady_finger.jpg'),require('../../assets/garlic.jpg')] },
      { ans: 0, engName: "Ginger", bengName: "আদা", image: [require('../../assets/ginger.jpg'),require('../../assets/asparagus.png'),require('../../assets/onions.png'),require('../../assets/spinach.jpg')] },
      { ans: 0, engName: "Lady’s finger", bengName: "ঢেঁড়স", image: [require('../../assets/lady_finger.jpg'),require('../../assets/potato.jpg'),require('../../assets/lettuce.jpg'),require('../../assets/mushroom.png')] },
      { ans: 1, engName: "Peppermint", bengName: "পুদিনা", image: [require('../../assets/snake_gourd.jpg'),require('../../assets/peppermint.jpg'),require('../../assets/bottle_gourd.jpg'),require('../../assets/eggplant.jpg')] },
      { ans: 3, engName: "Potato", bengName: "আলু", image: [require('../../assets/beetroot.jpg'),require('../../assets/blackpepper.jpg'),require('../../assets/broccoli.jpg'),require('../../assets/potato.jpg')] },
      { ans: 2, engName: "Spinach", bengName: "পালং", image: [require('../../assets/cabbage.jpg'),require('../../assets/frvgpumpkin.png'),require('../../assets/spinach.jpg'),require('../../assets/turnip.png')] },
      { ans: 3, engName: "Sweet Potato", bengName: "রাঙাআলু", image: [require('../../assets/potato.jpg'),require('../../assets/green_pepper.png'),require('../../assets/cauliflower.jpg'),require('../../assets/sweet_potato.jpg')] },
      { ans: 2, engName: "Tomato", bengName: "টমেটো", image: [require('../../assets/corinder_leaf.jpg'),require('../../assets/garlic.jpg'),require('../../assets/frvgtomato.png'),require('../../assets/radish.png')] },
      { ans: 2, engName: "Broccoli", bengName: "ব্রোকলি", image: [require('../../assets/fenugreek.jpg'),require('../../assets/ginger.jpg'),require('../../assets/broccoli.jpg'),require('../../assets/carrot.png')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Flowers = () => {
    let tempArr = [
      { ans: 1, engName: "Rose", bengName: "গোলাপ", image: [require('../../assets/sunflower.jpg'),require('../../assets/rose_flower.jpg'),require('../../assets/allium.jpg'),require('../../assets/marigold.jpg')] },
      { ans: 0, engName: "Jasminum", bengName: "জুঁইফুল", image: [require('../../assets/jasminum.jpg'),require('../../assets/sunflower.jpg'),require('../../assets/lotus.jpg'),require('../../assets/daffodil.jpg')] },
      { ans: 2, engName: "Primrose", bengName: "হলুদ ফুল", image: [require('../../assets/datura.jpg'),require('../../assets/oleander.jpg'),require('../../assets/primrose.jpg'),require('../../assets/amaranthus.jpg')] },
      { ans: 0, engName: "Marigold", bengName: "গাঁদা ফুল", image: [require('../../assets/marigold.jpg'),require('../../assets/poppy.jpg'),require('../../assets/alstroemeria.jpg'),require('../../assets/undefeated.jpg')] },
      { ans: 3, engName: "Sunflower", bengName: "সূর্যমুখী", image: [require('../../assets/primrose.jpg'),require('../../assets/daisy.jpg'),require('../../assets/rose_flower.jpg'),require('../../assets/sunflower.jpg')] },
      { ans: 2, engName: "Lotus", bengName: "পদ্ম", image: [require('../../assets/pandanus.jpg'),require('../../assets/poppy.jpg'),require('../../assets/lotus.jpg'),require('../../assets/delonixregia.jpg')] },
      { ans: 1, engName: "Oleander", bengName: "করবী", image: [require('../../assets/amaryllis.jpg'),require('../../assets/oleander.jpg'),require('../../assets/datura.jpg'),require('../../assets/bluewaterLily.jpg')] },
      { ans: 2, engName: "Daisy", bengName: "পুষ্পবৃক্ষ", image: [require('../../assets/sesbaniaGrandiflora.jpg'),require('../../assets/dahlia.jpg'),require('../../assets/daisy.jpg'),require('../../assets/pandanus.jpg')] },
      { ans: 3, engName: "Poppy", bengName: "পপি ফুল", image: [require('../../assets/aster.jpg'),require('../../assets/delonixregia.jpg'),require('../../assets/amaryllis.jpg'),require('../../assets/poppy.jpg')] },
      { ans: 1, engName: "Daffodil", bengName: "ড্যাফোডিল", image: [require('../../assets/sunflower.jpg'),require('../../assets/daffodil.jpg'),require('../../assets/allium.jpg'),require('../../assets/lotus.jpg')] },
      { ans: 1, engName: "Datura", bengName: "ধুতুরা", image: [require('../../assets/potMarigold.jpg'),require('../../assets/datura.jpg'),require('../../assets/balloon_flower.jpg'),require('../../assets/jasminum.jpg')] },
      { ans: 0, engName: "Delonix Regia", bengName: "ডেলোনিক্স রেজিয়া", image: [require('../../assets/delonixregia.jpg'),require('../../assets/amaranthus.jpg'),require('../../assets/daffodil.jpg'),require('../../assets/oleander.jpg')] },
      { ans: 3, engName: "Pandanus", bengName: "পান্ডানুস", image: [require('../../assets/aster.jpg'),require('../../assets/undefeated.jpg'),require('../../assets/balloon_flower.jpg'),require('../../assets/pandanus.jpg')] },
      { ans: 1, engName: "Allium", bengName: "অলিউম", image: [require('../../assets/amaryllis.jpg'),require('../../assets/allium.jpg'),require('../../assets/sesbaniaGrandiflora.jpg'),require('../../assets/rose_flower.jpg')] },
      { ans: 1, engName: "Alstroemeria", bengName: "আলস্ট্রোএমেরিয়া", image: [require('../../assets/bluewaterLily.jpg'),require('../../assets/alstroemeria.jpg'),require('../../assets/potMarigold.jpg'),require('../../assets/datura.jpg')] },
      { ans: 2, engName: "Amaranthus", bengName: "পারিজাত", image: [require('../../assets/sunflower.jpg'),require('../../assets/daffodil.jpg'),require('../../assets/amaranthus.jpg'),require('../../assets/aster.jpg')] },
      { ans: 0, engName: "Amaryllis", bengName: "রজনীগন্ধা-গোত্রীয় বৃক্ষ", image: [require('../../assets/amaryllis.jpg'),require('../../assets/rose_flower.jpg'),require('../../assets/lotus.jpg'),require('../../assets/marigold.jpg')] },
      { ans: 3, engName: "Aster", bengName: "তারাফুল", image: [require('../../assets/balloon_flower.jpg'),require('../../assets/undefeated.jpg'),require('../../assets/allium.jpg'),require('../../assets/aster.jpg')] },
      { ans: 2, engName: "Dahlia", bengName: "ডালিয়া", image: [require('../../assets/jasminum.jpg'),require('../../assets/bluewaterLily.jpg'),require('../../assets/dahlia.jpg'),require('../../assets/pandanus.jpg')] },
      { ans: 2, engName: "PotMarigold", bengName: "চন্দ্র মল্লিকা", image: [require('../../assets/sunflower.jpg'),require('../../assets/primrose.jpg'),require('../../assets/potMarigold.jpg'),require('../../assets/alstroemeria.jpg')] },
      { ans: 1, engName: "SesbaniaGrandiflora", bengName: "বকফুল", image: [require('../../assets/balloon_flower.jpg'),require('../../assets/sesbaniaGrandiflora.jpg'),require('../../assets/amaryllis.jpg'),require('../../assets/delonixregia.jpg')] },
      { ans: 0, engName: "Undefeated ", bengName: "অপরাজিতা", image: [require('../../assets/undefeated.jpg'),require('../../assets/poppy.jpg'),require('../../assets/datura.jpg'),require('../../assets/dahlia.jpg')] },
      { ans: 3, engName: "BluewaterLily ", bengName: "নীল শালুক ", image: [require('../../assets/oleander.jpg'),require('../../assets/pandanus.jpg'),require('../../assets/aster.jpg'),require('../../assets/bluewaterLily.jpg')] },
      { ans: 1, engName: "Balloon Flower", bengName: "বেলুন ফুল", image: [require('../../assets/jasminum.jpg'),require('../../assets/balloon_flower.jpg'),require('../../assets/rose_flower.jpg'),require('../../assets/lotus.jpg')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Animals = () => {
    let tempArr = [
      { ans: 0, engName: "Leopard", bengName: "চিতা", image: [require('../../assets/leopard.jpg'),require('../../assets/raccoon.jpg'),require('../../assets/yforyak.png'),require('../../assets/rforrabbit.jpg')] },
    { ans: 2, engName: "Hippopotamus", bengName: "জলহস্তী", image: [require('../../assets/dfordog.jpg'),require('../../assets/raccoon.jpg'),require('../../assets/hippopotamus.jpg'),require('../../assets/anmmonkey.png')] },
    { ans: 1, engName: "Deer", bengName: "হরিণ", image: [require('../../assets/fforfox.jpg'),require('../../assets/anmdeer.png'),require('../../assets/zforzebra.jpg'),require('../../assets/cow.jpg')] },
    { ans: 3, engName: "Raccoon", bengName: "র্যাকুন", image: [require('../../assets/horse_animal.jpg'),require('../../assets/sheep.jpg'),require('../../assets/gforgoat.jpg'),require('../../assets/raccoon.jpg')] },
    { ans: 2, engName: "Hedgehong", bengName: "হেডগেহং", image: [require('../../assets/dfordog.jpg'),require('../../assets/kforkangaroo.png'),require('../../assets/hedgehong.jpg'),require('../../assets/eforele.png')] },
    { ans: 1, engName: "Bear", bengName: "ভালুক", image: [require('../../assets/hippopotamus.jpg'),require('../../assets/bear.jpg'),require('../../assets/pforpig.png'),require('../../assets/walrus.png')] },
    { ans: 0, engName: "Dog", bengName: "কুকুর", image: [require('../../assets/dfordog.jpg'),require('../../assets/fforfox.jpg'),require('../../assets/anmmonkey.png'),require('../../assets/anmdeer.png')] },
    { ans: 0, engName: "Elephant", bengName: "হাতি", image: [require('../../assets/eforele.png'),require('../../assets/lforlion.png'),require('../../assets/mforouse.png'),require('../../assets/leopard.jpg')] },
    { ans: 3, engName: "Fox", bengName: "শিয়াল", image: [require('../../assets/hippopotamus.jpg'),require('../../assets/raccoon.jpg'),require('../../assets/chimpanzee.jpg'),require('../../assets/fforfox.jpg')] },
    { ans: 2, engName: "Yak", bengName: "চমরী গাই", image: [require('../../assets/bear.jpg'),require('../../assets/leopard.jpg'),require('../../assets/yforyak.png'),require('../../assets/tiger.jpg')] },
    { ans: 1, engName: "Chimpanzee", bengName: "বনমানুষ", image: [require('../../assets/gforgoat.jpg'),require('../../assets/chimpanzee.jpg'),require('../../assets/zforzebra.jpg'),require('../../assets/mforouse.png')] },
    { ans: 2, engName: "Sheep", bengName: "ভেড়া", image: [require('../../assets/horse_animal.jpg'),require('../../assets/eforele.png'),require('../../assets/sheep.jpg'),require('../../assets/horse_animal.jpg')] },
    { ans: 3, engName: "Giraffe", bengName: "জিরাফ", image: [require('../../assets/leopard.jpg'),require('../../assets/cow.jpg'),require('../../assets/kforkangaroo.png'),require('../../assets/anmgiraffe.png')] },
    { ans: 1, engName: "Goat", bengName: "ছাগল", image: [require('../../assets/mforouse.png'),require('../../assets/gforgoat.jpg'),require('../../assets/anmmonkey.png'),require('../../assets/tiger.jpg')] },
    { ans: 1, engName: "Kangaroo", bengName: "ক্যাঙ্গারু", image: [require('../../assets/fforfox.jpg'),require('../../assets/kforkangaroo.png'),require('../../assets/pforpig.png'),require('../../assets/zforzebra.jpg')] },
    { ans: 0, engName: "Lion", bengName: "সিংহ", image: [require('../../assets/lforlion.png'),require('../../assets/cow.jpg'),require('../../assets/anmgiraffe.png'),require('../../assets/dfordog.jpg')] },
    { ans: 3, engName: "Mouse", bengName: "ইঁদুর", image: [require('../../assets/sheep.jpg'),require('../../assets/anmmonkey.png'),require('../../assets/bear.jpg'),require('../../assets/mforouse.png')] },
    { ans: 1, engName: "Pig", bengName: "শূকর", image: [require('../../assets/leopard.jpg'),require('../../assets/pforpig.png'),require('../../assets/walrus.png'),require('../../assets/hedgehong.jpg')] },
    { ans: 0, engName: "Rabbit", bengName: "খরগোশ", image: [require('../../assets/rforrabbit.jpg'),require('../../assets/leopard.jpg'),require('../../assets/yforyak.png'),require('../../assets/cow.jpg')] },
    { ans: 2, engName: "Tiger", bengName: "বাঘ", image: [require('../../assets/anmgiraffe.png'),require('../../assets/chimpanzee.jpg'),require('../../assets/tiger.jpg'),require('../../assets/lforlion.png')] },
    { ans: 1, engName: "Walrus", bengName: "সিন্ধুঘোটক", image: [require('../../assets/zforzebra.jpg'),require('../../assets/walrus.png'),require('../../assets/rforrabbit.jpg'),require('../../assets/dfordog.jpg')] },
    { ans: 3, engName: "Horse", bengName: "ঘোড়া", image: [require('../../assets/hippopotamus.jpg'),require('../../assets/anmdeer.png'),require('../../assets/leopard.jpg'),require('../../assets/horse_animal.jpg')] },
    { ans: 0, engName: "Monkey", bengName: "বানর", image: [require('../../assets/anmmonkey.png'),require('../../assets/fforfox.jpg'),require('../../assets/chimpanzee.jpg'),require('../../assets/sheep.jpg')] },
    { ans: 2, engName: "Cow", bengName: "গোরু", image: [require('../../assets/rforrabbit.jpg'),require('../../assets/tiger.jpg'),require('../../assets/cow.jpg'),require('../../assets/mforouse.png')] },
    { ans: 1, engName: "Jaguar", bengName: "জাগুয়ার", image: [require('../../assets/eforele.png'),require('../../assets/leopard.jpg'),require('../../assets/walrus.png'),require('../../assets/anmdeer.png')] },
    { ans: 0, engName: "Zebra", bengName: "জেব্রা", image: [require('../../assets/zforzebra.jpg'),require('../../assets/hedgehong.jpg'),require('../../assets/leopard.jpg'),require('../../assets/bear.jpg')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Birds = () => {
    let tempArr = [
      { ans: 2, engName: "Duck", bengName: "পাতিহাঁস", image: [require('../../assets/goose.jpg'),require('../../assets/kingfisher.jpg'),require('../../assets/duck.jpg'),require('../../assets/anmflamingo.png')] },
    { ans: 0, engName: "King Fisher", bengName: "মাছরাঙ্গা", image: [require('../../assets/kingfisher.jpg'),require('../../assets/hummingbird.jpg'),require('../../assets/dove.webp'),require('../../assets/stork.jpg')] },
    { ans: 1, engName: "Nightingale", bengName: "কোকিল ", image: [require('../../assets/oforowl.png'),require('../../assets/hawk.png'),require('../../assets/ostrich.jpg'),require('../../assets/guinea_fowl.jpg')] },
    { ans: 2, engName: "HummingBird", bengName: "হামিংবার্ড", image: [require('../../assets/dove.webp'),require('../../assets/beeeater.jpg'),require('../../assets/hummingbird.jpg'),require('../../assets/stork.jpg')] },
    { ans: 3, engName: "Owl", bengName: "পেঁচা", image: [require('../../assets/hornbill.jpg'),require('../../assets/hawk.png'),require('../../assets/sparrow.png'),require('../../assets/oforowl.png')] },
    { ans: 0, engName: "Crow", bengName: "কাক", image: [require('../../assets/crow.jpg'),require('../../assets/parrot.jpg'),require('../../assets/goose.jpg'),require('../../assets/spoonbill.jpg')] },
    { ans: 2, engName: "Peacock", bengName: "ময়ুর", image: [require('../../assets/rallidae.jpg'),require('../../assets/anmflamingo.png'),require('../../assets/peacock.jpg'),require('../../assets/ostrich.jpg')] },
    { ans: 2, engName: "Dove", bengName: "ঘুঘু", image: [require('../../assets/penguin.png'),require('../../assets/turkey.jpg'),require('../../assets/dove.webp'),require('../../assets/swift.jpg')] },
    { ans: 0, engName: "Sparrow", bengName: "চড়ুই", image: [require('../../assets/sparrow.png'),require('../../assets/parrot.jpg'),require('../../assets/guinea_fowl.jpg'),require('../../assets/duck.jpg')] },
    { ans: 1, engName: "Goose", bengName: "হংসী", image: [require('../../assets/hawk.png'),require('../../assets/goose.jpg'),require('../../assets/hummingbird.jpg'),require('../../assets/oforowl.png')] },
    { ans: 3, engName: "Ostrich", bengName: "উটপাখী", image: [require('../../assets/sparrow.png'),require('../../assets/peacock.jpg'),require('../../assets/kingfisher.jpg'),require('../../assets/ostrich.jpg')] },
    { ans: 2, engName: "Bee-Eater", bengName: "ভল্লুক", image: [require('../../assets/dove.webp'),require('../../assets/raven.jpg'),require('../../assets/beeeater.jpg'),require('../../assets/penguin.png')] },
    { ans: 0, engName: "Guinea Fowl", bengName: "গিনি ফাউল", image: [require('../../assets/guinea_fowl.jpg'),require('../../assets/hornbill.jpg'),require('../../assets/anmflamingo.png'),require('../../assets/goose.jpg')] },
    { ans: 0, engName: "Herons", bengName: "সারস", image: [require('../../assets/herons.jpg'),require('../../assets/hawk.png'),require('../../assets/spoonbill.jpg'),require('../../assets/parrot.jpg')] },
    { ans: 3, engName: "Turkey", bengName: "তুরস্ক মোরগ", image: [require('../../assets/sparrow.png'),require('../../assets/ostrich.jpg'),require('../../assets/penguin.png'),require('../../assets/turkey.jpg')] },
    { ans: 2, engName: "Hawk", bengName: "বাজপাখি", image: [require('../../assets/beeeater.jpg'),require('../../assets/hornbill.jpg'),require('../../assets/hawk.png'),require('../../assets/peacock.jpg')] },
    { ans: 1, engName: "Raven", bengName: "দ্রোন কাক", image: [require('../../assets/stork.jpg'),require('../../assets/raven.jpg'),require('../../assets/penguin.png'),require('../../assets/hummingbird.jpg')] },
    { ans: 2, engName: "Parrot", bengName: "টিয়া পাখি", image: [require('../../assets/kingfisher.jpg'),require('../../assets/spoonbill.jpg'),require('../../assets/parrot.jpg'),require('../../assets/hornbill.jpg')] },
    { ans: 0, engName: "Flamingo", bengName: "মরাল", image: [require('../../assets/anmflamingo.png'),require('../../assets/hawk.png'),require('../../assets/oforowl.png'),require('../../assets/swift.jpg')] },
    { ans: 3, engName: "Penguin", bengName: "পেংগুইন", image: [require('../../assets/peacock.jpg'),require('../../assets/guinea_fowl.jpg'),require('../../assets/turkey.jpg'),require('../../assets/penguin.png')] },
    { ans: 1, engName: "Stork", bengName: "সারস", image: [require('../../assets/hawk.png'),require('../../assets/stork.jpg'),require('../../assets/goose.jpg'),require('../../assets/turkey.jpg')] },
    { ans: 2, engName: "Swift", bengName: "সুইফ্ট পাখি", image: [require('../../assets/kingfisher.jpg'),require('../../assets/duck.jpg'),require('../../assets/swift.jpg'),require('../../assets/oforowl.png')] },
    { ans: 0, engName: "Hornbill", bengName: "হর্ণবিল", image: [require('../../assets/hornbill.jpg'),require('../../assets/parrot.jpg'),require('../../assets/raven.jpg'),require('../../assets/ostrich.jpg')] },
    { ans: 3, engName: "Rallidae ", bengName: "রালিডে", image: [require('../../assets/hawk.png'),require('../../assets/turkey.jpg'),require('../../assets/anmflamingo.png'),require('../../assets/rallidae.jpg')] },
    { ans: 2, engName: "Spoonbill", bengName: "স্পনবিল", image: [require('../../assets/parrot.jpg'),require('../../assets/penguin.png'),require('../../assets/spoonbill.jpg'),require('../../assets/dove.webp')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Shapes = () => {
    let tempArr = [
      { ans: 1, engName: "Nonagon", bengName: "নবভুজ ", image: [require('../../assets/s_triangle.png'),require('../../assets/nonagon.jpg'),require('../../assets/parallelogram.jpg'),require('../../assets/hexagon.png')] },
    { ans: 0, engName: "Heptagon", bengName: "সমসপ্তভুজ ", image: [require('../../assets/heptagon.png'),require('../../assets/crescent.png'),require('../../assets/parallelogram.jpg'),require('../../assets/pentagon.png')] },
    { ans: 2, engName: "Hexagon", bengName: "ষড়্ভুজাকার", image: [require('../../assets/cube.jpg'),require('../../assets/circle.png'),require('../../assets/hexagon.png'),require('../../assets/heart.png')] },
    { ans: 1, engName: "Triangle", bengName: "ত্রিভুজ", image: [require('../../assets/r_triangle.png'),require('../../assets/triangle.png'),require('../../assets/arrow.png'),require('../../assets/crescent.png')] },
    { ans: 3, engName: "Scalene triangle", bengName: "বিষমভুজ ত্রিভুজ", image: [require('../../assets/heptagon.png'),require('../../assets/pentagon.png'),require('../../assets/nonagon.jpg'),require('../../assets/s_triangle.png')] },
    { ans: 0, engName: "Right triangle", bengName: "সঠিক ত্রিভুজ", image: [require('../../assets/r_triangle.png'),require('../../assets/cylinder.jpg'),require('../../assets/square.png'),require('../../assets/crescent.png')] },
    { ans: 2, engName: "Parallelogram", bengName: "সমান্তরিক-ক্ষেত্র", image: [require('../../assets/cube.jpg'),require('../../assets/triangle.png'),require('../../assets/parallelogram.jpg'),require('../../assets/heart.png')] },
    { ans: 1, engName: "Rhombus", bengName: "রম্বস", image: [require('../../assets/s_triangle.png'),require('../../assets/rhombus.png'),require('../../assets/rect.webp'),require('../../assets/oval.png')] },
    { ans: 3, engName: "Square", bengName: "বর্গক্ষেত্র", image: [require('../../assets/cube.jpg'),require('../../assets/r_triangle.png'),require('../../assets/star_red.jpg'),require('../../assets/square.png')] },
    { ans: 0, engName: "Pentagon", bengName: "পঁচকোণ", image: [require('../../assets/pentagon.png'),require('../../assets/parallelogram.jpg'),require('../../assets/rhombus.png'),require('../../assets/nonagon.jpg')] },
    { ans: 0, engName: "Circle", bengName: "বৃত্ত", image: [require('../../assets/circle.png'),require('../../assets/square.png'),require('../../assets/cube.jpg'),require('../../assets/rect.webp')] },
    { ans: 2, engName: "Oval", bengName: "উপবৃত্তাকার", image: [require('../../assets/s_triangle.png'),require('../../assets/rhombus.png'),require('../../assets/oval.png'),require('../../assets/arrow.png')] },
    { ans: 3, engName: "Heart", bengName: "হৃদয়", image: [require('../../assets/pentagon.png'),require('../../assets/cylinder.jpg'),require('../../assets/heptagon.png'),require('../../assets/heart.png')] },
    { ans: 2, engName: "Arrow", bengName: "তীর", image: [require('../../assets/cylinder.jpg'),require('../../assets/triangle.png'),require('../../assets/arrow.png'),require('../../assets/hexagon.png')] },
    { ans: 1, engName: "Cube", bengName: "ঘনক্ষেত্র", image: [require('../../assets/circle.png'),require('../../assets/cube.jpg'),require('../../assets/parallelogram.jpg'),require('../../assets/rect.webp')] },
    { ans: 1, engName: "Cylinder", bengName: "নল", image: [require('../../assets/crescent.png'),require('../../assets/cylinder.jpg'),require('../../assets/oval.png'),require('../../assets/rhombus.png')] },
    { ans: 0, engName: "Star", bengName: "তারকা", image: [require('../../assets/star_red.jpg'),require('../../assets/square.png'),require('../../assets/heptagon.png'),require('../../assets/nonagon.jpg')] },
    { ans: 2, engName: "Crescent", bengName: "অর্ধচন্দ্রাকার", image: [require('../../assets/triangle.png'),require('../../assets/arrow.png'),require('../../assets/crescent.png'),require('../../assets/heptagon.png')] },
    { ans: 3, engName: "Rectangle", bengName: "আয়তক্ষেত্র", image: [require('../../assets/cylinder.jpg'),require('../../assets/rhombus.png'),require('../../assets/r_triangle.png'),require('../../assets/rect.webp')] }
    ]
    this.setState({ dataArray: tempArr });
  }
  HumanBody = () => {
    let tempArr = [
      { ans: 0, engName: "Head ", bengName: "মাথা ", image: [require('../../assets/b_head.png'),require('../../assets/b_foot.jpg'),require('../../assets/b_teeth.jpg'),require('../../assets/b_shoulder.jpg')] },
      { ans: 2, engName: "Finger ", bengName: "আঙ্গুল", image: [require('../../assets/b_ear.jpg'),require('../../assets/b_knee.png'),require('../../assets/b_fingure.jpg'),require('../../assets/b_forehead.jpg')] },
      { ans: 3, engName: "Thumb ", bengName: "অঙ্গুষ্ঠ", image: [require('../../assets/b_stomach.jpg'),require('../../assets/b_tongue.jpg'),require('../../assets/b_chest.jpg'),require('../../assets/b_thumb.jpg')] },
      { ans: 1, engName: "Leg ", bengName: "পা", image: [require('../../assets/b_arms.jpg'),require('../../assets/b_leg.jpg'),require('../../assets/b_nose.jpg'),require('../../assets/b_eye.jpg')] },
      { ans: 2, engName: "Foot ", bengName: "পায়ের পাতা", image: [require('../../assets/b_hand.jpg'),require('../../assets/b_hair.jpg'),require('../../assets/b_foot.jpg'),require('../../assets/b_lips.jpg')] },
      { ans: 0, engName: "Neck ", bengName: "ঘাড়", image: [require('../../assets/b_neck.jpg'),require('../../assets/b_forehead.jpg'),require('../../assets/b_fingure.jpg'),require('../../assets/b_head.png')] },
      { ans: 3, engName: "Ear ", bengName: "কান", image: [require('../../assets/b_chest.jpg'),require('../../assets/b_back.jpg'),require('../../assets/b_thumb.jpg'),require('../../assets/b_ear.jpg')] },
      { ans: 3, engName: "Eye Brow ", bengName: "ভুরু", image: [require('../../assets/b_mouth.jpg'),require('../../assets/b_nose.jpg'),require('../../assets/b_knee.png'),require('../../assets/b_eyebrow.png')] },
      { ans: 0, engName: "Forehead ", bengName: "কপাল", image: [require('../../assets/b_forehead.jpg'),require('../../assets/b_foot.jpg'),require('../../assets/b_ear.jpg'),require('../../assets/b_head.png')] },
      { ans: 1, engName: "Teeth ", bengName: "দাঁত", image: [require('../../assets/b_hair.jpg'),require('../../assets/b_teeth.jpg'),require('../../assets/b_lips.jpg'),require('../../assets/b_stomach.jpg')] },
      { ans: 2, engName: "Tongue ", bengName: "জিহ্বা", image: [require('../../assets/b_mouth.jpg'),require('../../assets/b_eye.jpg'),require('../../assets/b_tongue.jpg'),require('../../assets/b_eyebrow.png')] },
      { ans: 3, engName: "Back ", bengName: "পেছনে", image: [require('../../assets/b_fingure.jpg'),require('../../assets/b_leg.jpg'),require('../../assets/b_chest.jpg'),require('../../assets/b_back.jpg') ]},
      { ans: 0, engName: "Shoulder ", bengName: "কাঁধ", image: [require('../../assets/b_shoulder.jpg'),require('../../assets/b_nose.jpg'),require('../../assets/b_teeth.jpg'),require('../../assets/b_mouth.jpg')] },
      { ans: 3, engName: "Knees ", bengName: "হাঁটু", image: [require('../../assets/b_arms.jpg'),require('../../assets/b_tongue.jpg'),require('../../assets/b_eye.jpg'),require('../../assets/b_knee.png')] },
      { ans: 2, engName: "Hair ", bengName: "চুল", image: [require('../../assets/b_ear.jpg'),require('../../assets/b_eye.jpg'),require('../../assets/b_hair.jpg'),require('../../assets/b_foot.jpg')] },
      { ans: 1, engName: "Arms ", bengName: "বাহু", image: [require('../../assets/b_mouth.jpg'),require('../../assets/b_arms.jpg'),require('../../assets/b_neck.jpg'),require('../../assets/b_head.png')] },
      { ans: 3, engName: "Chest ", bengName: "বুক", image: [require('../../assets/b_knee.png'),require('../../assets/b_forehead.jpg'),require('../../assets/b_thumb.jpg'),require('../../assets/b_chest.jpg')] },
      { ans: 2, engName: "Stomach ", bengName: "পাকস্থলী", image: [require('../../assets/b_hair.jpg'),require('../../assets/b_lips.jpg'),require('../../assets/b_stomach.jpg'),require('../../assets/b_hand.jpg')] },
      { ans: 0, engName: "Nose ", bengName: "নাক", image: [require('../../assets/b_nose.jpg'),require('../../assets/b_teeth.jpg'),require('../../assets/b_fingure.jpg'),require('../../assets/b_leg.jpg')] },
      { ans: 1, engName: "Hand ", bengName: "হাত", image: [require('../../assets/b_arms.jpg'),require('../../assets/b_hand.jpg',),require('../../assets/b_shoulder.jpg'),require('../../assets/b_thumb.jpg')] },
      { ans: 2, engName: "Eye ", bengName: "চোখ", image: [require('../../assets/b_ear.jpg'),require('../../assets/b_back.jpg'),require('../../assets/b_eye.jpg'),require('../../assets/b_mouth.jpg')] },
      { ans: 2, engName: "Lips ", bengName: "ঠোঁট", image: [require('../../assets/b_hand.jpg',),require('../../assets/b_nose.jpg'),require('../../assets/b_lips.jpg'),require('../../assets/b_head.png')] },
      { ans: 0, engName: "Mouth ", bengName: "মুখ", image: [require('../../assets/b_mouth.jpg'),require('../../assets/b_eye.jpg'),require('../../assets/b_chest.jpg'),require('../../assets/b_tongue.jpg')] }
    ]
    this.setState({ dataArray: tempArr });
  }
  Vehicals = () => {
    let tempArr = [
      { ans: 1, engName: "Taxi", bengName: "ট্যাক্সি", image: [require('../../assets/bus.png'),require('../../assets/taxi.jpg'),require('../../assets/bicycle.png'),require('../../assets/fireengine.jpg')] },
    { ans: 2, engName: "Police car", bengName: "পুলিশ গাড়ী", image: [require('../../assets/scooter.jpg'),require('../../assets/ambulance.jpg'),require('../../assets/police.jpg'),require('../../assets/tractor.png')] },
    { ans: 0, engName: "Bus", bengName: "বাস", image: [require('../../assets/bus.png'),require('../../assets/baby_carriage.jpg'),require('../../assets/auto.jpg'),require('../../assets/airplane.jpg')] },
    { ans: 3, engName: "Ambulance", bengName: "অ্যাম্বুলেন্স", image: [require('../../assets/rowboat.jpg'),require('../../assets/dump_truck.jpg'),require('../../assets/taxi.jpg'),require('../../assets/ambulance.jpg')] },
    { ans: 2, engName: "Baby Carriage", bengName: "শিশু পরিবহন", image: [require('../../assets/scooter.jpg'),require('../../assets/auto.jpg'),require('../../assets/baby_carriage.jpg'),require('../../assets/train.jpg')] },
    { ans: 1, engName: "Bicycle", bengName: "সাইকেল", image: [require('../../assets/fireengine.jpg'),require('../../assets/bicycle.png'),require('../../assets/crane.png'),require('../../assets/motorcycle.jpg')] },
    { ans: 0, engName: "Scooter", bengName: "স্কুটার", image: [require('../../assets/scooter.jpg'),require('../../assets/police.jpg'),require('../../assets/ambulance.jpg'),require('../../assets/cement_mixer.jpg')] },
    { ans: 2, engName: "Auto", bengName: "অটো", image: [require('../../assets/train.jpg'),require('../../assets/airplane.jpg'),require('../../assets/auto.jpg'),require('../../assets/bus.png')] },
    { ans: 1, engName: "Motorcycle", bengName: "মোটরসাইকেল", image: [require('../../assets/rowboat.jpg'),require('../../assets/motorcycle.jpg'),require('../../assets/crane.png'),require('../../assets/taxi.jpg')] },
    { ans: 1, engName: "Fire engine", bengName: "দমকল", image: [require('../../assets/baby_carriage.jpg'),require('../../assets/fireengine.jpg'),require('../../assets/cement_mixer.jpg'),require('../../assets/airplane.jpg')] },
    { ans: 0, engName: "Crane", bengName: "কপিকল", image: [require('../../assets/crane.png'),require('../../assets/train.jpg'),require('../../assets/bicycle.png'),require('../../assets/motorcycle.jpg')] },
    { ans: 3, engName: "Tractor", bengName: "ট্র্যাক্টর", image: [require('../../assets/ambulance.jpg'),require('../../assets/train.jpg'),require('../../assets/helicopter.jpg'),require('../../assets/tractor.png')] },
    { ans: 1, engName: "Cement mixer", bengName: "সিমেন্ট মিক্সার", image: [require('../../assets/helicopter.jpg'),require('../../assets/cement_mixer.jpg'),require('../../assets/taxi.jpg'),require('../../assets/fireengine.jpg')] },
    { ans: 2, engName: "Dump truck", bengName: "ট্রাক ডাম্প", image: [require('../../assets/crane.png'),require('../../assets/tractor.png'),require('../../assets/dump_truck.jpg'),require('../../assets/train.jpg')] },
    { ans: 0, engName: "Helicopter", bengName: "হেলিকপ্টার", image: [require('../../assets/helicopter.jpg'),require('../../assets/rowboat.jpg'),require('../../assets/fireengine.jpg'),require('../../assets/police.jpg')] },
    { ans: 3, engName: "Airplane", bengName: "বিমান", image: [require('../../assets/ambulance.jpg'),require('../../assets/scooter.jpg'),require('../../assets/auto.jpg'),require('../../assets/airplane.jpg')] },
    { ans: 2, engName: "Rowboat", bengName: "বাইচের নৌকা", image: [require('../../assets/motorcycle.jpg'),require('../../assets/tractor.png'),require('../../assets/rowboat.jpg'),require('../../assets/baby_carriage.jpg')] },
    { ans: 1, engName: "Train", bengName: "রেলগাড়ি", image: [require('../../assets/helicopter.jpg'),require('../../assets/train.jpg'),require('../../assets/dump_truck.jpg'),require('../../assets/bus.png')] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Colors = () => {
    let tempArr = [
      { ans: 0, engName: "Red", bengName: "লাল", image: ["#FF0000","#00FF00","#00FFFF","#FF69B4"] },
    { ans: 3, engName: "Orange", bengName: "কমলা", image: ["#808080","#800000","#00FF00","#fe9600"] },
    { ans: 2, engName: "Yellow", bengName: "হলুদ", image: ["#0000FF","#FF00FF","#FFFF00","#008000"] },
    { ans: 1, engName: "Lime", bengName: "লাইম", image: ["#FF00FF","#00FF00","#800080","#000000"] },
    { ans: 2, engName: "Aqua", bengName: "একোয়া", image: ["#FF0000","#808080","#00FFFF","#9400D3"] },
    { ans: 0, engName: "Fucia", bengName: "ফিউসিয়া", image: ["#FF00FF","#FFFFFF","#808000","#800000"] },
    { ans: 3, engName: "Green", bengName: "সবুজ", image: ["#000000","#FFFF00","#FF0000","#008000"] },
    { ans: 0, engName: "Merun", bengName: "মেরুন", image: ["#800000","#800080","#FF69B4","#A52A2A"] },
    { ans: 0, engName: "Olives", bengName: "জলপাই", image: ["#808000","#A52A2A","#FFFFFF","#2E8B57"] },
    { ans: 1, engName: "Purple", bengName: "পার্পল", image: ["#6B8E23","#800080","#808080","#7B68EE"] },
    { ans: 3, engName: "Blue", bengName: "নীল", image: ["#CD853F","#4B0082","#00FFFF","#0000FF"] },
    { ans: 2, engName: "Violet", bengName: "বেগুনী", image: ["#DAA520","#D2691E","#9400D3","#f4a460"] },
    { ans: 0, engName: "Pink", bengName: "পিঙ্ক", image: ["#FF69B4","#000000","#9400D3","#fe9600"] },
    { ans: 3, engName: "Grey", bengName: "ধূসর", image: ["#008000","#00FF00","#FF0000","#808080"] },
    { ans: 1, engName: "Brown", bengName: "বাদামী", image: ["#FF00FF","#A52A2A","#808000","#FF0000"] },
    { ans: 2, engName: "White", bengName: "সাদা", image: ["#FFFF00","#6B8E23","#FFFFFF","#D2691E"] },
    { ans: 2, engName: "Black", bengName: "কালো", image: ["#7FFFD4","#4B0082","#000000","#fe9600"] },
    { ans: 0, engName: "Silver", bengName: "রূপা", image: ["#FF0000","#ADFF2F","#800080","#800000"] },
    { ans: 1, engName: "Deep Violet", bengName: "ডিপ বেগুনী", image: ["#0000FF","#9400D3","#FF69B4","#FF00FF"] },
    { ans: 3, engName: "Purple blue", bengName: "বেগনি নীলবর্ণ", image: ["#008000","#9400D3","#2E8B57","#4B0082"] },
    { ans: 0, engName: "Greenish yellow", bengName: "সবুজাভ হলুদ", image: ["#ADFF2F","#7B68EE","#f4a460","#00FF00"] },
    { ans: 1, engName: "Sigrin", bengName: "সিগ্রিন", image: ["#00BFFF","#2E8B57","#0000FF","#fe9600"] },
    { ans: 1, engName: "Olive oil", bengName: "অলিভদ্রাব", image: ["#DAA520","#6B8E23","#D2691E","#000000"] },
    { ans: 2, engName: "In Aquamarine", bengName: "একোয়ামারিনে", image: ["#800080","#D2691E","#7FFFD4","#FFFF00"] },
    { ans: 0, engName: "Deep SkyWee", bengName: "ডিপ স্কাইব্লুই ", image: ["#00BFFF","#9400D3","#00FFFF","#CD853F"] },
    { ans: 1, engName: "Medium slate blue", bengName: "মাঝারি স্লেট ব্লু", image: ["#DAA520","#7B68EE","#9400D3","#800000"] },
    { ans: 2, engName: "Chocolate", bengName: "চকলেট", image: ["#008000","#f4a460","#D2691E","#808080"] },
    { ans: 0, engName: "Peru", bengName: "পেরু", image: ["#CD853F","#FF0000","#800080","#fe9600"] },
    { ans: 3, engName: "Golden Road", bengName: "গোল্ডেনরোড", image: ["#9400D3","#4B0082","#2E8B57","#DAA520"] },
    { ans: 3, engName: "Sandy brown", bengName: "বেলে বাদামী", image: ["#800080","#A52A2A","#CD853F","#f4a460"] }
    ]
    this.setState({ dataArray: tempArr });
  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, borderRadius: 10, borderColor: this.state.clickIndex==index? this.state.imageStatus=='right'?'#4cd038': this.state.imageStatus=='wrong'?'red':'#003334':'#003334', borderWidth: 3, marginRight: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
      if (this.state.dataArray[position].ans == index) {
        playSound('win.mp3');
        this.setState({ imageStatus: 'right', isBtnDisable: true });
        setTimeout(() => {
          try {
            if (this.state.pageIndex < this.state.dataArray.length - 1)
            this.refs.viewpager.setPage(++this.state.pageIndex)
          else
            this.props.navigation.navigate('CommonMessage', { howmanyback: 2 })
          } catch (error) {
            
          }
          
        }, 2200)
      } else {
        playSound('wrong.mp3')
        this.setState({ imageStatus: 'wrong' });
      }
      this.setState({clickIndex:index})
    }} disabled={this.state.isBtnDisable}>
      {tag == 'Colors' ? <View style={{ height: responsiveWidth(35), width: responsiveWidth(35), backgroundColor:item,  margin: 10 }}/>:
      <Image source={item} style={{ height: responsiveWidth(30), width: responsiveWidth(30), resizeMode: 'contain', margin: 20 }} />}
      
      
    </TouchableOpacity>
  );
  render() {
    let item = this.props.route.params.item;
    //alert(item.name)
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          this.setState({ pageIndex: position, imageStatus: null,  isBtnDisable: false });
          if(this.state.isSoundOn)
          txtToSpeak(this.state.dataArray[position].engName);

          this.setState({clickIndex:-1});
        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>

                  <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', marginTop: responsiveHeight(12) }}> {item.engName} {item.bengName? '( '+item.bengName+' )':'' } </Text>
                  {this.state.imageStatus ? <Image source={this.state.imageStatus == 'right' ? success : error} style={{ height: responsiveFontSize(12), width: responsiveFontSize(12), resizeMode: 'contain', marginTop: responsiveHeight(3), tintColor: this.state.imageStatus == 'right' ? 'green' : null }} /> : null}
                </View>
                <View>


                  <FlatList
                    numColumns={2}
                    style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2), marginLeft: 10 }}
                    data={item.image}
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
