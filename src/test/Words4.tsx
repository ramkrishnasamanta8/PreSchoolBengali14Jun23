import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList, Spokestack, ImageBackground } from 'react-native';

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
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0, tag = '';
export default class Words4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      score: 0,
      dataArray: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
      imageStatus: null,
      isBtnDisable: false,
      clickIndex: -1,
      isSoundOn: true,
    };

  }
  async componentDidMount() {
    tag = this.props.route.params.tag;
    //alert(JSON.stringify(tag))
    if (tag) {
      if (tag == 'Fruits') {
        this.Fruits();
      } else if (tag == 'Vegetables') {
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
      } else if (tag == 'Flags') {
        this.Flags();
      } else if (tag == 'Capitals') {
        this.Capitals();
      } else if (tag == 'City') {
        this.City();
      }
    }
  }
  City = () => {
    let tempArr = [
      { ansIndex: 1, question: "Delhi", bengName: "", image: require('../../assets/city/delhi.jpg'),ans:['Delhi','Kolkata','Hyderabad','Chennai'] },
      //{ ansIndex: 2, question: "Kolkata", bengName: "", image: require('../../assets/city/Kolkata.jpg'),ans:['Delhi','Kolkata','Hyderabad','Chennai'] },
      { ansIndex: 4, question: "Thimphu", bengName: "", image: require('../../assets/city/Thimphu.jpg'),ans:['Hyderabad','Paro','Shanghai','Thimphu'] },
      { ansIndex: 3, question: "Dhaka", bengName: "", image: require('../../assets/city/Dhaka.jpg'),ans:['Dhaka','Chennai','Delhi','Bengaluru'] },
      { ansIndex: 3, question: "London", bengName: "", image: require('../../assets/city/London.jpg'),ans:['New York','Kolkata','London','Philadelphia'] },
      { ansIndex: 2, question: "Moscow", bengName: "", image: require('../../assets/city/Moscow.jpg'),ans:['Hyderabad','Moscow','Thimphu','Chicago'] },
      { ansIndex: 3, question: "Hyderabad", bengName: "", image:require('../../assets/city/Hyderabad.jpg'),ans:['Bengaluru','Chicago','Hyderabad','Manchester'] },
      { ansIndex: 1, question: "New York", bengName: "", image: require('../../assets/city/NewYork.jpg'),ans:['New York','Chennai','Paro','London'] },
      { ansIndex: 3, question: "Paris", bengName: "", image: require('../../assets/city/Paris.jpg'),ans:['Delhi','Sydney','Paris','Columbus'] },
      { ansIndex: 4, question: "Mumbai", bengName: "", image: require('../../assets/city/Mumbai.jpg'),ans:['New York','London','Shanghai','Mumbai'] },
      { ansIndex: 2, question: "Ottawa", bengName: "", image: require('../../assets/city/Ottawa.jpg'),ans:['New York','Ottawa','Thimphu','Jakarta'] },
      { ansIndex: 4, question: "San Francisco", bengName: "", image: require('../../assets/city/SanFrancisco.jpg'),ans:['Seattle','New York','Birmingham','San Francisco'] },
      { ansIndex: 2, question: "Marseille", bengName: "", image: require('../../assets/city/Marseille.jpg'),ans:['Ottawa','Marseille','Chennai','Chicago'] },
      { ansIndex: 3, question: "Shanghai", bengName: "", image: require('../../assets/city/Shanghai.jpg'),ans:['London','Moscow','Shanghai','Columbus'] },
      { ansIndex: 4, question: "Beijing", bengName: "", image: require('../../assets/city/Beijing.jpg'),ans:['Paris','Kolkata','Hyderabad','Beijing'] },
      { ansIndex: 1, question: "Jakarta", bengName: "", image: require('../../assets/city/Jakarta.jpg'),ans:['Jakarta','Ottawa','Dhaka','Bengaluru'] },
      { ansIndex: 3, question: "Brasilia", bengName: "", image: require('../../assets/city/Brasilia.jpg'),ans:['Paro','Thimphu','Brasilia','Marseille'] },
      { ansIndex: 3, question: "Toronto", bengName: "", image: require('../../assets/city/Toronto.jpg'),ans:['Kolkata','Shanghai','Toronto','Seattle'] },
      { ansIndex: 1, question: "Rome", bengName: "", image: require('../../assets/city/Rome.jpg'),ans:['Rome','Paris','Thimphu','Ottawa'] },
      { ansIndex: 4, question: "Canberra", bengName: "", image: require('../../assets/city/Canberra.jpg'),ans:['Seattle','London','Denver','Canberra'] },
      { ansIndex: 1, question: "Los Angeles", bengName: "", image: require('../../assets/city/LosAngeles.jpg'),ans:['Los Angeles','Moscow','Toronto','Paro'] },
      //{ ansIndex: 3, question: "Naples", bengName: "", image: require('../../assets/city/Naples.jpg'),ans:['Jakarta','Beijing','Naples','Seattle'] },
      { ansIndex: 4, question: "Sydney", bengName: "", image: require('../../assets/city/Sydney.jpg'),ans:['Halifax','Portland','San Jose','Sydney'] },
      { ansIndex: 1, question: "San Jose", bengName: "", image: require('../../assets/city/SanJose.jpg'),ans:['San Jose','Rome','New York','Bengaluru'] },
      { ansIndex: 4, question: "Milano", bengName: "", image: require('../../assets/city/Milano.jpg'),ans:['Detroit,','Kolkata','Hyderabad','Milano'] },
      { ansIndex: 2, question: "Bali", bengName: "", image: require('../../assets/city/Bali.jpg'),ans:['Halifax','Bali','Thimphu','San Jose'] },
      { ansIndex: 4, question: "Kabul", bengName: "", image: require('../../assets/city/Kabul.jpg'),ans:['Pago Pago','Sydney','Algiers','Kabul'] },
      { ansIndex: 2, question: "Tokyo", bengName: "", image: require('../../assets/city/Tokyo.jpg'),ans:['Denver','Tokyo','Skikda','Marseille'] },
      { ansIndex: 1, question: "Male", bengName: "", image: require('../../assets/city/Male.jpg'),ans:['Male','Esbjerg','Portland','Beijing'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Capitals = () => {
    let tempArr = [
      { ansIndex: 1, question: "India", bengName: "", image: require('../../assets/city/delhi.jpg'),ans:['Delhi','Benin','Dhaka','Thimphu'] },
      { ansIndex: 3, question: "Afghanistan", bengName: "", image: require('../../assets/city/Kabul.jpg'),ans:['Algiers','Luanda','Kabul','Tirana'] },
      { ansIndex: 4, question: "Australia", bengName: "", image: require('../../assets/city/Canberra.jpg'),ans:['Madrid','Yerevan','Nassau','Canberra'] },
      { ansIndex: 2, question: "Bangladesh", bengName: "", image: require('../../assets/city/Dhaka.jpg'),ans:['Minsk','Dhaka','Kiev','Delhi'] },
      { ansIndex: 4, question: "Bhutan", bengName: "", image: require('../../assets/city/Thimphu.jpg'),ans:['Yaounde','Praia','Algiers','Thimphu'] },
      { ansIndex: 2, question: "Canada", bengName: "", image: require('../../assets/city/Ottawa.jpg'),ans:['Luanda','Ottawa','Benin','Islamabad'] },
      { ansIndex: 4, question: "China", bengName: "", image: require('../../assets/city/Beijing.jpg'),ans:['Santiago','Bangui','Yerevan','Beijing'] },
      { ansIndex: 2, question: "France", bengName: "", image: require('../../assets/city/Paris.jpg'),ans:['Thimphu','Paris','Dhaka','Papeete'] },
      { ansIndex: 1, question: "Greece", bengName: "", image: require('../../assets/city/Athens.jpg'),ans:['Athens','Warsaw','Nassau','Minsk'] },
      { ansIndex: 3, question: "Iceland", bengName: "", image: require('../../assets/city/Reykjavik.jpg'),ans:['Delhi','Praia','Reykjavik','Benin'] },
      { ansIndex: 2, question: "Brazil", bengName: "", image: require('../../assets/city/Brasilia.jpg'),ans:['Sofia','Brasilia','Ottawa','Algiers'] },
      { ansIndex: 4, question: "Armenia", bengName: "", image: require('../../assets/city/Yerevan.jpg'),ans:['Thimphu','Minsk','Luanda','Yerevan'] },
      { ansIndex: 1, question: "Indonesia", bengName: "", image: require('../../assets/city/Jakarta.jpg'),ans:['Jakarta','Paris','Benin','Oranjestad'] },
      { ansIndex: 4, question: "Greenland", bengName: "", image: require('../../assets/city/Nuuk.jpg'),ans:['Yerevan','Brussels','Algiers','Nuuk'] },
      { ansIndex: 3, question: "Georgia", bengName: "", image: require('../../assets/city/Tbilisi.jpg'),ans:['Praia','Athens','Tbilisi','Benin'] },
      //{ ansIndex: 4, question: "United States", bengName: "", image: require('../../assets/city/WashingtonDC.jpg'),ans:['Abuja','Mexico City','Papeete','Washington DC'] },
      { ansIndex: 2, question: "Cambodia", bengName: "", image: require('../../assets/city/PhnomPenh.jpg'),ans:['Luanda','Phnom Penh','Bangui','Beijing'] },
      { ansIndex: 4, question: "Belgium", bengName: "", image: require('../../assets/city/Brussels.jpg'),ans:['Monaco','Thimphu','London','Brussels'] },
      { ansIndex: 2, question: "Denmark", bengName: "", image: require('../../assets/city/Copenhagen.jpg'),ans:['Minsk','Copenhagen','Madrid','Stockholm'] },
      //{ ansIndex: 2, question: "Netherlands", bengName: "", image: require('../../assets/city/Amsterdam.jpg'),ans:['Cayenne','Amsterdam','Yaren','Manila'] },
      { ansIndex: 1, question: "Germany", bengName: "", image: require('../../assets/city/Berlin.jpg'),ans:['Berlin','Monaco','Oranjestad','Yerevan'] },
      { ansIndex: 3, question: "Chile", bengName: "", image: require('../../assets/city/Santiago.jpg'),ans:['Brussels','Sofia','Santiago','Canberra'] },
      { ansIndex: 4, question: "United Kingdom", bengName: "", image: require('../../assets/city/London.jpg'),ans:['Copenhagen','Minsk','Bern','London'] },
      { ansIndex: 4, question: "Croatia", bengName: "", image: require('../../assets/city/Zagreb.jpg'),ans:['Cayenne','Phnom Penh','Tbilisi','Zagreb'] },
      { ansIndex: 3, question: "Algeria", bengName: "", image: require('../../assets/city/Algiers.jpg'),ans:['Berlin','Luanda','Algiers','Nassau'] },
      { ansIndex: 3, question: "Spain", bengName: "", image: require('../../assets/city/Madrid.jpg'),ans:['Paramaribo','Stockholm','Madrid','Ankara'] },
      { ansIndex: 1, question: "Maldives", bengName: "", image: require('../../assets/city/Male.jpg'),ans:['Male','Monaco','Rabat','Yerevan'] },
      { ansIndex: 2, question: "Ethiopia", bengName: "", image: require('../../assets/city/AddisAbaba.jpg'),ans:['Athens','Addis Ababa','Oranjestad','Algiers'] },
      { ansIndex: 3, question: "Pakistan", bengName: "", image: require('../../assets/city/Islamabad.jpg'),ans:['Berlin','Thimphu','Islamabad','Jakarta'] },
      { ansIndex: 4, question: "Hong Kong", bengName: "", image: require('../../assets/city/hk.jpg'),ans:['Delhi','Kolkata','Hyderabad','Hong Kong'] },
      { ansIndex: 3, question: "Russia", bengName: "", image: require('../../assets/city/Moscow.jpg'),ans:['Sofia','Bangui','Moscow','Dhaka'] },
      { ansIndex: 2, question: "Singapore", bengName: "", image: require('../../assets/city/Singapore.jpg'),ans:['Copenhagen','Singapore','Benin','Santiago'] },
	  { ansIndex: 2, question: "Ukraine", bengName: "", image: require('../../assets/city/Kiev.jpg'),ans:['Hanoi','Kiev','Bangui','Bern'] },
      { ansIndex: 4, question: "Sweden", bengName: "", image: require('../../assets/city/Stockholm.jpg'),ans:['Paris','Dakar','Bucharest','Stockholm'] },
      //{ ansIndex: 2, question: "Poland", bengName: "", image: require('../../assets/city/Warsaw.jpg'),ans:['Minsk','Warsaw','Manila','Islamabad'] },
      { ansIndex: 4, question: "Norway", bengName: "", image: require('../../assets/city/Oslo.jpg'),ans:['Abuja','Mexico City','Papeete','Oslo'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Flags = () => {
    let tempArr = [
      { question: "Albania", bengName: "", image: require('../../assets/flag/al.jpg'),ans:['Afghanistan','Albania','Algeria','Angola'] },
      { question: "Argentina", bengName: "", image: require('../../assets/flag/ar.jpg'),ans:['Anguilla','Aruba','Argentina','Austria'] },
      { question: "Thailand", bengName: "", image: require('../../assets/flag/th.jpg'),ans:['Thailand','Angola','Anguilla','Algeria'] },
      { question: "Argentina", bengName: "", image: require('../../assets/flag/ar.jpg'),ans:['Armenia','Afghanistan','Argentina','Algeria'] },
      { question: "Turkey", bengName: "", image: require('../../assets/flag/tr.jpg'),ans:['Vietnam','Aruba','Turkey','Switzerland'] },
      { question: "Bangladesh", bengName: "", image: require('../../assets/flag/bd.jpg'),ans:['Pakistan','Bangladesh','Norway','Mexico'] },
      { question: "Japan", bengName: "", image: require('../../assets/flag/jp.jpg'),ans:['Bulgaria','Japan','Brunei','Iran'] },
      { question: "Canada", bengName: "", image: require('../../assets/flag/ca.jpg'),ans:['Bolivia','Afghanistan','Canada','Belgium'] },
      { question: "Switzerland", bengName: "", image: require('../../assets/flag/ch.jpg'),ans:['Switzerland','Spain','Anguilla','Comoros'] },
      { question: "Denmark", bengName: "", image: require('../../assets/flag/dk.jpg'),ans:['Bangladesh','Argentina','Armenia','Denmark'] },
      { question: "India", bengName: "", image: require('../../assets/flag/in.jpg'),ans:['Bulgaria','India','Iceland','Angola'] },
      { question: "Iceland", bengName: "", image: require('../../assets/flag/is.jpg'),ans:['Afghanistan','Bhutan','Iceland','Canada'] },
      { question: "Brazil", bengName: "", image: require('../../assets/flag/br.jpg'),ans:['Bulgaria','Aruba','Anguilla','Brazil'] },
      { question: "Austria", bengName: "", image: require('../../assets/flag/at.jpg'),ans:['Austria','Bahamas','Angola','Bangladesh'] },
      { question: "Bhutan", bengName: "", image: require('../../assets/flag/bt.jpg'),ans:['Armenia','Albania','Bhutan','Botswana'] },
      { question: "Australia", bengName: "", image: require('../../assets/flag/au.jpg'),ans:['Australia','Argentina','Bhutan','Canada'] },
      { question: "Indonesia", bengName: "", image: require('../../assets/flag/id.jpg'),ans:['Hong Kong','Indonesia','Iceland','Bolivia'] },
      { question: "Germany", bengName: "", image: require('../../assets/flag/de.jpg'),ans:['Georgia','Ethiopia','Germany','Belgium'] },
      { question: "France", bengName: "", image: require('../../assets/flag/fr.jpg'),ans:['France','Greece','India','Bulgaria'] },
      { question: "Greece", bengName: "", image: require('../../assets/flag/gr.jpg'),ans:['Guinea','Indonesia','Afghanistan','Greece'] },
      { question: "Hong Kong", bengName: "", image: require('../../assets/flag/hk.jpg'),ans:['Hong Kong','Bangladesh','Bhutan','Anguilla'] },
      { question: "Singapore", bengName: "", image: require('../../assets/flag/sg.jpg'),ans:['Bahamas','Georgia','Singapore','Albania'] },
      { question: "Russia", bengName: "", image: require('../../assets/flag/ru.jpg'),ans:['Norway','India','Sweden','Russia'] },
      { question: "Pakistan", bengName: "", image: require('../../assets/flag/pk.jpg'),ans:['Philippines','Pakistan','Iceland','Sri Lanka'] },
      { question: "China", bengName: "", image: require('../../assets/flag/cn.jpg'),ans:['Cyprus','China','Hong Kong','Argentina'] },
      { question: "Turkey", bengName: "", image: require('../../assets/flag/tr.jpg'),ans:['United Kingdom','Germany','Turkey','Maldives'] },
      { question: "Myanmar", bengName: "", image: require('../../assets/flag/mm.jpg'),ans:['Netherlands','Croatia','Poland','Myanmar'] },
      { question: "Maldives", bengName: "", image: require('../../assets/flag/mv.jpg'),ans:['Iran','Maldives','Mexico','Bulgaria'] },
      { question: "Italy", bengName: "", image: require('../../assets/flag/it.jpg'),ans:['Iceland','Afghanistan','Italy','Finland'] },
      { question: "United States", bengName: "", image: require('../../assets/flag/us.jpg'),ans:['United States','Angola','Ukraine','China'] },
      { question: "Poland", bengName: "", image: require('../../assets/flag/pl.jpg'),ans:['Germany','Poland','Sri Lanka','Pakistan'] },
      { question: "Netherlands", bengName: "", image: require('../../assets/flag/nl.jpg'),ans:['Netherlands','Nepal','Morocco','Angola'] },
      { question: "United Kingdom", bengName: "", image: require('../../assets/flag/gb.jpg'),ans:['Spain','Switzerland','Iceland','United Kingdom'] },
      { question: "Ukraine", bengName: "", image: require('../../assets/flag/ua.jpg'),ans:['Russia','Ukraine','Thailand','Anguilla'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Fruits = () => {
    let tempArr = [
      { id: 0, question: "Apple", bengName: "আপেল", image: require('../../assets/apple.jpg'), ans: ['Avocado', 'Apple', 'Jackfruit', 'Plum'] },
      { id: 0, question: "Peach", bengName: "পীচ", image: require('../../assets/peach.png'), ans: ['Coconut', 'Pineapple', 'Guava', 'Peach'] },
      { id: 0, question: "Pomegranate", bengName: "বেদানা", image: require('../../assets/franar.jpg'), ans: ['Lemon', 'Pomegranate', 'Nectarine', 'Raspberry'] },
      { id: 0, question: "Avocado", bengName: "আভাকাডো", image: require('../../assets/avocado.png'), ans: ['Avocado', 'Kiwi', 'Mandarin', 'Mango'] },
      { id: 0, question: "Coconut", bengName: "নারিকেল", image: require('../../assets/coconuts.png'), ans: ['Apple', 'Plum', 'Coconut', 'Strawberry'] },
      { id: 0, question: "Lemon", bengName: "লেবু", image: require('../../assets/lemon.png'), ans: ['Banana', 'Lemon', 'Peach', 'Cherry'] },
      { id: 0, question: "Pineapple", bengName: "আনারস", image: require('../../assets/pineapples.png'), ans: ['Blueberry', 'Date', 'Pear', 'Pineapple'] },
      { id: 0, question: "Kiwi", bengName: "কিবি", image: require('../../assets/kiwi.png'), ans: ['Kiwi', 'Custard Apple', 'Grape', 'Orange'] },
      { id: 0, question: "Papaya", bengName: "পেঁপে", image: require('../../assets/papaya.jpg'), ans: ['Watermelon', 'Papaya', 'Coconut', 'Pomegranate'] },
      { id: 0, question: "Jackfruit", bengName: "কাঁঠাল", image: require('../../assets/katal.jpg'), ans: ['Jackfruit', 'Pineapple', 'Cherry', 'Guava'] },
      { id: 0, question: "Mandarin", bengName: "ম্যান্ডারিন", image: require('../../assets/mandarins.jpg'), ans: ['Plum', 'Nectarine', 'Banana', 'Mandarin'] },
      { id: 0, question: "Raspberry", bengName: "রাস্পবেরি", image: require('../../assets/raspberry.jpg'), ans: ['Strawberry', 'Papaya', 'Raspberry', 'Lemon'] },
      { id: 0, question: "Banana", bengName: "কলা", image: require('../../assets/banana.png'), ans: ['Banana', 'Blueberry', 'Apple', 'Kiwi'] },
      { id: 0, question: "Plum", bengName: "তাল", image: require('../../assets/plum.png'), ans: ['Peach', 'Plum', 'Jackfruit', 'Grape'] },
      { id: 0, question: "Blueberry", bengName: "জাম কুল", image: require('../../assets/blueberry.jpg'), ans: ['Strawberry', 'Orange', 'Date', 'Blueberry'] },
      { id: 0, question: "Mango", bengName: "আম", image: require('../../assets/mangos.jpg'), ans: ['Mango', 'Nectarine', 'Banana', 'Guava'] },
      { id: 0, question: "Grape", bengName: "আঙ্গুর", image: require('../../assets/grapes.png'), ans: ['Custard Apple', 'Raspberry', 'Grape', 'Pineapple'] },
      { id: 0, question: "Nectarine", bengName: "নেক্যারিনে", image: require('../../assets/nectarine.png'), ans: ['Cherry', 'Pear', 'Jackfruit', 'Nectarine'] },
      { id: 0, question: "Strawberry", bengName: "স্ট্রবেরি", image: require('../../assets/strawberry.png'), ans: ['Watermelon', 'Strawberry', 'Kiwi', 'Pomegranate'] },
      { id: 0, question: "Cherry", bengName: "চেরিফল", image: require('../../assets/cherry.jpg'), ans: ['Date', 'Grape', 'Nectarine', 'Cherry'] },
      { id: 0, question: "Pear", bengName: "নাশপাতি", image: require('../../assets/pears.jpg'), ans: ['Guava', 'Pear', 'Orange', 'Custard Apple'] },
      { id: 0, question: "Orange", bengName: "কমলা", image: require('../../assets/organge.png'), ans: ['Coconut', 'Banana', 'Orange', 'Mango'] },
      { id: 0, question: "Watermelon", bengName: "তরমুজ", image: require('../../assets/watermelon.png'), ans: ['Watermelon', 'Blueberry', 'Pineapple', 'Apple'] },
      { id: 0, question: "Guava", bengName: "পেয়ারা", image: require('../../assets/guava.jpg'), ans: ['Custard Apple', 'Guava', 'Mango', 'Mandarin'] },
      { id: 0, question: "Date", bengName: "খেজুর", image: require('../../assets/date.jpg'), ans: ['Orange', 'Nectarine', 'Cherry', 'Date'] },
      { id: 0, question: "Custard Apple", bengName: "আতা", image: require('../../assets/custard_apple.jpg'), ans: ['Plum', 'Custard Apple', 'Peach', 'Raspberry'] },
    ]
    this.setState({ dataArray: tempArr });
  }

  Vegetables = () => {
    let tempArr = [
      { id: 0, question: "Beetroot", bengName: "বীট", image: require('../../assets/beetroot.jpg'), ans: ['Beetroot', 'Bitter Gourd', 'Capsicum', 'Cabbage'] },
      { id: 0, question: "Pumpkin", bengName: "কুমড়া", image: require('../../assets/frvgpumpkin.png'), ans: ['Celery', 'Cucumber', 'Pumpkin', 'Cauliflower'] },
      { id: 0, question: "Mushroom", bengName: "মাশরুম", image: require('../../assets/mushroom.png'), ans: ['Capsicum', 'Mushroom', 'Chilli', 'Turnip'] },
      { id: 0, question: "Bitter Gourd", bengName: "উচ্ছে", image: require('../../assets/bittergourd.jpg'), ans: ['Beetroot', 'Corinder leaf', 'Corn', 'Bitter Gourd'] },
      { id: 0, question: "Black Pepper", bengName: "গোল মরিচ", image: require('../../assets/blackpepper.jpg'), ans: ['Carrot', 'Eggplant', 'Black Pepper', 'Lettuce'] },
      { id: 0, question: "Bottle Gourd", bengName: "বোতল লাউ", image: require('../../assets/bottle_gourd.jpg'), ans: ['Bottle Gourd', 'Carrot', 'Cabbage', 'Cucumber'] },
      { id: 0, question: "Cabbage", bengName: "বাঁধাকপি", image: require('../../assets/cabbage.jpg'), ans: ['Radish', 'Cabbage', 'Snake Gourd', 'Celery'] },
      { id: 0, question: "Capsicum", bengName: "ক্যাপসিকাম", image: require('../../assets/green_pepper.png'), ans: ['Eggplant', 'Asparagus', 'Capsicum', 'Lady’s finger'] },
      { id: 0, question: "Carrot", bengName: "গাজর", image: require('../../assets/carrot.png'), ans: ['Carrot', 'Cauliflower', 'Chilli', 'Radish'] },
      { id: 0, question: "Cauliflower", bengName: "ফুলকপি", image: require('../../assets/cauliflower.jpg'), ans: ['Green pepper', 'Onion', 'Courgette', 'Cauliflower'] },
      { id: 0, question: "Corinder leaf", bengName: "ধনে পাতা", image: require('../../assets/corinder_leaf.jpg'), ans: ['French beans', 'Corinder leaf', 'Snake Gourd', 'Cabbage'] },
      { id: 0, question: "Corn", bengName: "ভূট্টা", image: require('../../assets/cron.jpg'), ans: ['Garlic', 'Lady’s finger', 'Corn', 'Potato'] },
      { id: 0, question: "Celery", bengName: "সেলারি", image: require('../../assets/celery.jpg'), ans: ['Cucumber', 'Peppermint', 'Broccoli', 'Celery'] },
      { id: 0, question: "Chilli", bengName: "লঙ্কা", image: require('../../assets/chilli.jpg'), ans: ['Chilli', 'Sweet Potato', 'Tomato', 'Radish'] },
      { id: 0, question: "Eggplant", bengName: "বেগুন", image: require('../../assets/eggplant.jpg'), ans: ['Onion', 'Eggplant', 'Mushroom', 'Carrot'] },
      { id: 0, question: "Cucumber", bengName: "শসা", image: require('../../assets/frvgcucumber.png'), ans: ['Corn', 'Green pepper', 'Asparagus', 'Cucumber'] },
      { id: 0, question: "Fenugreek Leaf", bengName: "মেথি পাতা", image: require('../../assets/fenugreek.jpg'), ans: ['Fenugreek Leaf', 'Onion', 'Ginger', 'Eggplant'] },
      { id: 0, question: "Turnip", bengName: "শালগম", image: require('../../assets/turnip.png'), ans: ['Lettuce', 'Turnip', 'Sweet Potato', 'Broccoli'] },
      { id: 0, question: "Courgette", bengName: "কোর্গেটটা", image: require('../../assets/courgette.jpg'), ans: ['Cucumber', 'Celery', 'Courgette', 'Tomato'] },
      { id: 0, question: "Green chilli", bengName: "কাঁচা লঙ্কা", image: require('../../assets/green_chillies.png'), ans: ['Green chilli', 'Spinach', 'Cauliflower', 'Radish'] },
      { id: 0, question: "Onion", bengName: "পেঁয়াজ", image: require('../../assets/onions.png'), ans: ['Potato', 'Pumpkin', 'Corinder leaf', 'Onion'] },
      { id: 0, question: "Lettuce", bengName: "লেটুস", image: require('../../assets/lettuce.jpg'), ans: ['Snake Gourd', 'Lettuce', 'Potato', 'Tomato'] },
      { id: 0, question: "Radish", bengName: "মূলা", image: require('../../assets/radish.png'), ans: ['Spinach', 'Beetroot', 'Radish', 'Black Pepper'] },
      { id: 0, question: "Asparagus", bengName: "শতমূলী", image: require('../../assets/asparagus.png'), ans: ['Asparagus', 'French beans', 'Courgette', 'Eggplant'] },
      { id: 0, question: "Green pepper", bengName: "সবুজ মরিচ", image: require('../../assets/green_pepper.png'), ans: ['Garlic', 'Green pepper', 'Peppermint', 'Sweet Potato'] },
      { id: 0, question: "French beans", bengName: "ফরাসি মটরশুটি", image: require('../../assets/french_beans.jpg'), ans: ['Potato', 'Broccoli', 'Asparagus', 'French beans'] },
      { id: 0, question: "Snake Gourd", bengName: "চিচিঙ্গা", image: require('../../assets/snake_gourd.jpg'), ans: ['Snake Gourd', 'Turnip', 'Lettuce', 'Cucumber'] },
      { id: 0, question: "Garlic", bengName: "রসুন", image: require('../../assets/garlic.jpg'), ans: ['Chilli', 'Corn', 'Garlic', 'Cabbage'] },
      { id: 0, question: "Ginger", bengName: "আদা", image: require('../../assets/ginger.jpg'), ans: ['Ginger', 'Corinder leaf', 'Capsicum', 'Pumpkin'] },
      { id: 0, question: "Lady’s finger", bengName: "ঢেঁড়স", image: require('../../assets/lady_finger.jpg'), ans: ['Potato', 'Bottle Gourd', 'Beetroot', 'Lady’s finger'] },
      { id: 0, question: "Peppermint", bengName: "পুদিনা", image: require('../../assets/peppermint.jpg'), ans: ['Spinach', 'Peppermint', 'Courgette', 'Mushroom'] },
      { id: 0, question: "Potato", bengName: "আলু", image: require('../../assets/potato.jpg'), ans: ['Tomato', 'Broccoli', 'Potato', 'Bitter Gourd'] },
      { id: 0, question: "Spinach", bengName: "পালং", image: require('../../assets/spinach.jpg'), ans: ['Spinach', 'Broccoli', 'Green pepper', 'Carrot'] },
      { id: 0, question: "Sweet Potato", bengName: "রাঙাআলু", image: require('../../assets/sweet_potato.jpg'), ans: ['Lady’s finger', 'Pumpkin', 'Cauliflower', 'Sweet Potato'] },
      { id: 0, question: "Tomato", bengName: "টমেটো", image: require('../../assets/frvgtomato.png'), ans: ['Ginger', 'Tomato', 'Radish', 'Bitter Gourd'] },
      { id: 0, question: "Broccoli", bengName: "ব্রোকলি", image: require('../../assets/broccoli.jpg'), ans: ['Broccoli', 'Eggplant', 'Bottle Gourd', 'Mushroom'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Flowers = () => {
    let tempArr = [
      { id: 0, question: "Rose", bengName: "গোলাপ", image: require('../../assets/rose_flower.jpg'), ans: ['Primrose', 'Rose', 'Daisy', 'Datura'] },
      { id: 0, question: "Jasminum", bengName: "জুঁইফুল", image: require('../../assets/jasminum.jpg'), ans: ['Jasminum', 'Sunflower', 'Poppy', 'Pandanus'] },
      { id: 0, question: "Primrose", bengName: "হলুদ ফুল", image: require('../../assets/primrose.jpg'), ans: ['Oleander', 'Allium', 'Primrose', 'Lotus'] },
      { id: 0, question: "Marigold", bengName: "গাঁদা ফুল", image: require('../../assets/marigold.jpg'), ans: ['Daisy', 'Rose', 'Amaranthus', 'Marigold'] },
      { id: 0, question: "Sunflower", bengName: "সূর্যমুখী", image: require('../../assets/sunflower.jpg'), ans: ['Sunflower', 'Aster', 'PotMarigold', 'Amaryllis'] },
      { id: 0, question: "Lotus", bengName: "পদ্ম", image: require('../../assets/lotus.jpg'), ans: ['Allium', 'Lotus', 'Balloon Flower', 'Undefeated'] },
      { id: 0, question: "Oleander", bengName: "করবী", image: require('../../assets/oleander.jpg'), ans: ['Pandanus', 'BluewaterLily', 'Oleander', 'Dahlia'] },
      { id: 0, question: "Daisy", bengName: "পুষ্পবৃক্ষ", image: require('../../assets/daisy.jpg'), ans: ['Datura', 'SesbaniaGrandiflora', 'Daisy', 'Lotus'] },
      { id: 0, question: "Poppy", bengName: "পপি ফুল", image: require('../../assets/poppy.jpg'), ans: ['Poppy', 'Sunflower', 'Primrose', 'Undefeated'] },
      { id: 0, question: "Daffodil", bengName: "ড্যাফোডিল", image: require('../../assets/daffodil.jpg'), ans: ['Pandanus', 'Daffodil', 'Aster', 'BluewaterLily'] },
      { id: 0, question: "Datura", bengName: "ধুতুরা", image: require('../../assets/datura.jpg'), ans: ['Jasminum', 'Marigold', 'Poppy', 'Datura'] },
      { id: 0, question: "Delonix Regia", bengName: "ডেলোনিক্স রেজিয়া", image: require('../../assets/delonixregia.jpg'), ans: ['Delonix Regia', 'Allium', 'Dahlia', 'Balloon Flower'] },
      { id: 0, question: "Pandanus", bengName: "পান্ডানুস", image: require('../../assets/pandanus.jpg'), ans: ['Amaryllis', 'Lotus', 'Pandanus', 'Oleander'] },
      { id: 0, question: "Allium", bengName: "অলিউম", image: require('../../assets/allium.jpg'), ans: ['Allium', 'SesbaniaGrandiflora', 'Datura', 'Poppy'] },
      { id: 0, question: "Alstroemeria", bengName: "আলস্ট্রোএমেরিয়া", image: require('../../assets/alstroemeria.jpg'), ans: ['Daisy', 'Rose', 'Primrose', 'Alstroemeria'] },
      { id: 0, question: "Amaranthus", bengName: "পারিজাত", image: require('../../assets/amaranthus.jpg'), ans: ['Aster', 'Amaranthus', 'PotMarigold', 'Sunflower'] },
      { id: 0, question: "Amaryllis", bengName: "রজনীগন্ধা-গোত্রীয় বৃক্ষ", image: require('../../assets/amaryllis.jpg'), ans: ['Amaryllis', 'Allium', 'Poppy', 'Oleander'] },
      { id: 0, question: "Aster", bengName: "তারাফুল", image: require('../../assets/aster.jpg'), ans: ['Daisy', 'Datura', 'Aster', 'BluewaterLily'] },
      { id: 0, question: "Dahlia", bengName: "ডালিয়া", image: require('../../assets/dahlia.jpg'), ans: ['Daffodil', 'Pandanus', 'BluewaterLily', 'Dahlia'] },
      { id: 0, question: "PotMarigold", bengName: "চন্দ্র মল্লিকা", image: require('../../assets/potMarigold.jpg'), ans: ['PotMarigold', 'Balloon Flower', 'Oleander', 'Jasminum'] },
      { id: 0, question: "SesbaniaGrandiflora", bengName: "বকফুল", image: require('../../assets/sesbaniaGrandiflora.jpg'), ans: ['Alstroemeria', 'SesbaniaGrandiflora', 'Poppy', 'Sunflower'] },
      { id: 0, question: "Undefeated", bengName: "অপরাজিতা", image: require('../../assets/undefeated.jpg'), ans: ['Amaryllis', 'Pandanus', 'Marigold', 'Undefeated'] },
      { id: 0, question: "BluewaterLily", bengName: "নীল শালুক", image: require('../../assets/bluewaterLily.jpg'), ans: ['Jasminum', 'BluewaterLily', 'Amaranthus', 'Aster'] },
      { id: 0, question: "Balloon Flower", bengName: "বেলুন ফুল", image: require('../../assets/balloon_flower.jpg'), ans: ['Primrose', 'Rose', 'Balloon Flower', 'Oleander'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Animals = () => {
    let tempArr = [
      { id: 0, question: "Leopard", bengName: "চিতা", image: require('../../assets/leopard.jpg'), ans: ['Deer', 'Hedgehong', 'Giraffe', 'Leopard'] },
      { id: 0, question: "Hippopotamus", bengName: "জলহস্তী", image: require('../../assets/hippopotamus.jpg'), ans: ['Hippopotamus', 'Bear', 'Fox', 'Raccoon'] },
      { id: 0, question: "Deer", bengName: "হরিণ", image: require('../../assets/anmdeer.png'), ans: ['Yak', 'Deer', 'Lion', 'Kangaroo'] },
      { id: 0, question: "Raccoon", bengName: "র্যাকুন", image: require('../../assets/raccoon.jpg'), ans: ['Dog', 'Goat', 'Raccoon', 'Mouse'] },
      { id: 0, question: "Hedgehong", bengName: "হেডগেহং", image: require('../../assets/hedgehong.jpg'), ans: ['Chimpanzee', 'Leopard', 'Hedgehong', 'Sheep'] },
      { id: 0, question: "Bear", bengName: "ভালুক", image: require('../../assets/bear.jpg'), ans: ['Giraffe', 'Hippopotamus', 'Lion', 'Bear'] },
      { id: 0, question: "Dog", bengName: "কুকুর", image: require('../../assets/dfordog.jpg'), ans: ['Sheep', 'Dog', 'Raccoon', 'Pig'] },
      { id: 0, question: "Elephant", bengName: "হাতি", image: require('../../assets/eforele.png'), ans: ['Elephant', 'Tiger', 'Rabbit', 'Zebra'] },
      { id: 0, question: "Fox", bengName: "শিয়াল", image: require('../../assets/fforfox.jpg'), ans: ['Sheep', 'Monkey', 'Fox', 'Jaguar'] },
      { id: 0, question: "Yak", bengName: "চমরী গাই", image: require('../../assets/yforyak.png'), ans: ['Lion', 'Cow', 'Pig', 'Yak'] },
      { id: 0, question: "Chimpanzee", bengName: "বনমানুষ", image: require('../../assets/chimpanzee.jpg'), ans: ['Goat', 'Chimpanzee', 'Dog', 'Deer'] },
      { id: 0, question: "Sheep", bengName: "ভেড়া", image: require('../../assets/sheep.jpg'), ans: ['Kangaroo', 'Leopard', 'Sheep', 'Bear'] },
      { id: 0, question: "Giraffe", bengName: "জিরাফ", image: require('../../assets/anmgiraffe.png'), ans: ['Giraffe', 'Hedgehong', 'Walrus', 'Zebra'] },
      { id: 0, question: "Goat", bengName: "ছাগল", image: require('../../assets/gforgoat.jpg'), ans: ['Horse', 'Cow', 'Goat', 'Elephant'] },
      { id: 0, question: "Kangaroo", bengName: "ক্যাঙ্গারু", image: require('../../assets/kforkangaroo.png'), ans: ['Monkey', 'Kangaroo', 'Raccoon', 'Hippopotamus'] },
      { id: 0, question: "Lion", bengName: "সিংহ", image: require('../../assets/lforlion.png'), ans: ['Jaguar', 'Deer', 'Yak', 'Lion'] },
      { id: 0, question: "Mouse", bengName: "ইঁদুর", image: require('../../assets/mforouse.png'), ans: ['Fox', 'Leopard', 'Mouse', 'Walrus'] },
      { id: 0, question: "Pig", bengName: "শূকর", image: require('../../assets/pforpig.png'), ans: ['Chimpanzee', 'Pig', 'Tiger', 'Monkey'] },
      { id: 0, question: "Rabbit", bengName: "খরগোশ", image: require('../../assets/rforrabbit.jpg'), ans: ['Rabbit', 'Cow', 'Jaguar', 'Goat'] },
      { id: 0, question: "Tiger", bengName: "বাঘ", image: require('../../assets/tiger.jpg'), ans: ['Kangaroo', 'Sheep', 'Tiger', 'Bear'] },
      { id: 0, question: "Walrus", bengName: "সিন্ধুঘোটক", image: require('../../assets/walrus.png'), ans: ['Walrus', 'Yak', 'Elephant', 'Raccoon'] },
      { id: 0, question: "Horse", bengName: "ঘোড়া", image: require('../../assets/horse_animal.jpg'), ans: ['Deer', 'Zebra', 'Dog', 'Horse'] },
      { id: 0, question: "Monkey", bengName: "বানর", image: require('../../assets/anmmonkey.png'), ans: ['Rabbit', 'Monkey', 'Bear', 'Hippopotamus'] },
      { id: 0, question: "Cow", bengName: "গোরু", image: require('../../assets/cow.jpg'), ans: ['Cow', 'Giraffe', 'Chimpanzee', 'Pig'] },
      { id: 0, question: "Jaguar", bengName: "জাগুয়ার", image: require('../../assets/leopard.jpg'), ans: ['Mouse', 'Sheep', 'Jaguar', 'Tiger'] },
      { id: 0, question: "Zebra", bengName: "জেব্রা", image: require('../../assets/zforzebra.jpg'), ans: ['Lion', 'Zebra', 'Deer', 'Yak'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Birds = () => {
    let tempArr = [
      { id: 0, question: "Duck", bengName: "পাতিহাঁস", image: require('../../assets/duck.jpg'), ans: ['HummingBird', 'Peacock', 'Ostrich', 'Duck'] },
      { id: 0, question: "King Fisher", bengName: "মাছরাঙ্গা", image: require('../../assets/kingfisher.jpg'), ans: ['King Fisher', 'Crow', 'Herons', 'Raven'] },
      { id: 0, question: "Nightingale", bengName: "কোকিল", image: require('../../assets/kingfisher.jpg'), ans: ['Peacock', 'Nightingale', 'Duck', 'Sparrow'] },
      { id: 0, question: "HummingBird", bengName: "হামিংবার্ড", image: require('../../assets/hummingbird.jpg'), ans: ['Dove', 'Turkey', 'HummingBird', 'Ostrich'] },
      { id: 0, question: "Owl", bengName: "পেঁচা", image: require('../../assets/oforowl.png'), ans: ['Herons', 'King Fisher', 'Hawk', 'Owl'] },
      { id: 0, question: "Crow", bengName: "কাক", image: require('../../assets/crow.jpg'), ans: ['Bee-Eater', 'Crow', 'Spoonbill', 'Swift'] },
      { id: 0, question: "Peacock", bengName: "ময়ুর", image: require('../../assets/peacock.jpg'), ans: ['Peacock', 'Sparrow', 'Duck', 'Flamingo'] },
      { id: 0, question: "Dove", bengName: "ঘুঘু", image: require('../../assets/dove.webp'), ans: ['Ostrich', 'Owl', 'Dove', 'Stork'] },
      { id: 0, question: "Sparrow", bengName: "চড়ুই", image: require('../../assets/sparrow.png'), ans: ['Guinea Fowl', 'Nightingale', 'Hawk', 'Sparrow'] },
      { id: 0, question: "Goose", bengName: "হংসী", image: require('../../assets/goose.jpg'), ans: ['Turkey', 'Goose', 'Penguin', 'Parrot'] },
      { id: 0, question: "Ostrich", bengName: "উটপাখী", image: require('../../assets/ostrich.jpg'), ans: ['Rallidae', 'Peacock', 'Ostrich', 'Crow'] },
      { id: 0, question: "Bee-Eater", bengName: "ভল্লুক", image: require('../../assets/beeeater.jpg'), ans: ['Bee-Eater', 'Penguin', 'Swift', 'Herons'] },
      { id: 0, question: "Guinea Fowl", bengName: "গিনি ফাউল", image: require('../../assets/guinea_fowl.jpg'), ans: ['Raven', 'Guinea Fowl', 'Sparrow', 'Dove'] },
      { id: 0, question: "Herons", bengName: "সারস", image: require('../../assets/herons.jpg'), ans: ['Parrot', 'Swift', 'Goose', 'Herons'] },
      { id: 0, question: "Turkey", bengName: "তুরস্ক মোরগ", image: require('../../assets/turkey.jpg'), ans: ['Flamingo', 'Turkey', 'King Fisher', 'HummingBird'] },
      { id: 0, question: "Hawk", bengName: "বাজপাখি", image: require('../../assets/hawk.png'), ans: ['Crow', 'Owl', 'Hawk', 'Duck'] },
      { id: 0, question: "Raven", bengName: "দ্রোন কাক", image: require('../../assets/raven.jpg'), ans: ['Raven', 'Ostrich', 'Penguin', 'Parrot'] },
      { id: 0, question: "Parrot", bengName: "টিয়া পাখি", image: require('../../assets/parrot.jpg'), ans: ['Swift', 'Hornbill', 'Herons', 'Parrot'] },
      { id: 0, question: "Flamingo", bengName: "মরাল", image: require('../../assets/anmflamingo.png'), ans: ['HummingBird', 'Guinea Fowl', 'Flamingo', 'Spoonbill'] },
      { id: 0, question: "Penguin", bengName: "পেংগুইন", image: require('../../assets/penguin.png'), ans: ['Penguin', 'Herons', 'Sparrow', 'Parrot'] },
      { id: 0, question: "Stork", bengName: "সারস", image: require('../../assets/stork.jpg'), ans: ['Rallidae', 'Hawk', 'Stork', 'Raven'] },
      { id: 0, question: "Swift", bengName: "সুইফ্ট পাখি", image: require('../../assets/swift.jpg'), ans: ['Flamingo', 'Swift', 'Turkey', 'Crow'] },
      { id: 0, question: "Hornbill", bengName: "হর্ণবিল", image: require('../../assets/hornbill.jpg'), ans: ['Ostrich', 'Dove', 'Owl', 'Hornbill'] },
      { id: 0, question: "Rallidae", bengName: "রালিডে", image: require('../../assets/rallidae.jpg'), ans: ['Rallidae', 'HummingBird', 'Duck', 'Nightingale'] },
      { id: 0, question: "Spoonbill", bengName: "স্পনবিল", image: require('../../assets/spoonbill.jpg'), ans: ['Herons', 'Goose', 'Spoonbill', 'Sparrow'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Shapes = () => {
    let tempArr = [
      { id: 0, engName: "Nonagon", bengName: "নবভুজ", image: require('../../assets/nonagon.jpg'), ans: ['Nonagon', 'Hexagon', 'Rhombus', 'Oval'] },
      { id: 0, engName: "Heptagon", bengName: "সমসপ্তভুজ", image: require('../../assets/heptagon.png'), ans: ['Triangle', 'Square', 'Heptagon', 'Arrow'] },
      { id: 0, engName: "Hexagon", bengName: "ষড়্ভুজাকার", image: require('../../assets/hexagon.png'), ans: ['Rhombus', 'Hexagon', 'Nonagon', 'Heart'] },
      { id: 0, engName: "Triangle", bengName: "ত্রিভুজ", image: require('../../assets/triangle.png'), ans: ['Circle', 'Heptagon', 'Cube', 'Triangle'] },
      { id: 0, engName: "Scalene triangle", bengName: "বিষমভুজ ত্রিভুজ", image: require('../../assets/s_triangle.png'), ans: ['Scalene triangle', 'Hexagon', 'Circle', 'Rectangle'] },
      { id: 0, engName: "Right triangle", bengName: "সঠিক ত্রিভুজ", image: require('../../assets/r_triangle.png'), ans: ['Rhombus', 'Triangle', 'Heptagon', 'Right triangle'] },
      { id: 0, engName: "Parallelogram", bengName: "সমান্তরিক-ক্ষেত্র", image: require('../../assets/parallelogram.jpg'), ans: ['Pentagon', 'Arrow', 'Parallelogram', 'Crescent'] },
      { id: 0, engName: "Rhombus", bengName: "রম্বস", image: require('../../assets/rhombus.png'), ans: ['Rhombus', 'Star', 'Rectangle', 'Oval'] },
      { id: 0, engName: "Square", bengName: "বর্গক্ষেত্র", image: require('../../assets/square.png'), ans: ['Hexagon', 'Crescent', 'Square', 'Nonagon'] },
      { id: 0, engName: "Pentagon", bengName: "পঁচকোণ", image: require('../../assets/pentagon.png'), ans: ['Heptagon', 'Pentagon', 'Arrow', 'Star'] },
      { id: 0, engName: "Circle", bengName: "বৃত্ত", image: require('../../assets/circle.png'), ans: ['Rhombus', 'Parallelogram', 'Circle', 'Hexagon'] },
      { id: 0, engName: "Oval", bengName: "উপবৃত্তাকার", image: require('../../assets/oval.png'), ans: ['Oval', 'Cylinder', 'Cube', 'Pentagon'] },
      { id: 0, engName: "Heart", bengName: "হৃদয়", image: require('../../assets/heart.png'), ans: ['Star', 'Triangle', 'Heart', 'Nonagon'] },
      { id: 0, engName: "Arrow", bengName: "তীর", image: require('../../assets/arrow.png'), ans: ['Parallelogram', 'Hexagon', 'Rectangle', 'Arrow'] },
      { id: 0, engName: "Cube", bengName: "ঘনক্ষেত্র", image: require('../../assets/cube.jpg'), ans: ['Cube', 'Heart', 'Square', 'Heptagon'] },
      { id: 0, engName: "Cylinder", bengName: "নল", image: require('../../assets/cylinder.jpg'), ans: ['Rectangle', 'Cylinder', 'Right triangle', 'Hexagon'] },
      { id: 0, engName: "Star", bengName: "তারকা", image: require('../../assets/star_red.jpg'), ans: ['Oval', 'Arrow', 'Cube', 'Star'] },
      { id: 0, engName: "Crescent", bengName: "অর্ধচন্দ্রাকার", image: require('../../assets/crescent.png'), ans: ['Pentagon', 'Cylinder', 'Crescent', 'Circle'] },
      { id: 0, engName: "Rectangle", bengName: "আয়তক্ষেত্র", image: require('../../assets/rect.webp'), ans: ['Rectangle', 'Circle', 'Parallelogram', 'Heptagon'] }
    ]
    this.setState({ dataArray: tempArr });
  }
  HumanBody = () => {
    let tempArr = [
      { id: 0, question: "Head", bengName: "মাথা", image: require('../../assets/b_head.png'), ans: ['Neck', 'Hair', 'Head', 'Nose'] },
      { id: 0, question: "Finger", bengName: "আঙ্গুল", image: require('../../assets/b_fingure.jpg'), ans: ['Finger', 'Leg', 'Forehead', 'Arms'] },
      { id: 0, question: "Thumb", bengName: "অঙ্গুষ্ঠ", image: require('../../assets/b_thumb.jpg'), ans: ['Neck', 'Back', 'Thumb', 'Stomach'] },
      { id: 0, question: "Leg", bengName: "পা", image: require('../../assets/b_leg.jpg'), ans: ['Ear', 'Tongue', 'Hand', 'Leg'] },
      { id: 0, question: "Foot", bengName: "পায়ের পাতা", image: require('../../assets/b_foot.jpg'), ans: ['Knees', 'Head', 'Foot', 'Thumb'] },
      { id: 0, question: "Neck", bengName: "ঘাড়", image: require('../../assets/b_neck.jpg'), ans: ['Neck', 'Forehead', 'Chest', 'Mouth'] },
      { id: 0, question: "Ear", bengName: "কান", image: require('../../assets/b_ear.jpg'), ans: ['Teeth', 'Shoulder', 'Ear', 'Nose'] },
      { id: 0, question: "Eye Brow", bengName: "ভুরু", image: require('../../assets/b_eyebrow.png'), ans: ['Foot', 'Eye Brow', 'Stomach', 'Lips'] },
      { id: 0, question: "Forehead", bengName: "কপাল", image: require('../../assets/b_forehead.jpg'), ans: ['Arms', 'Finger', 'Neck', 'Forehead'] },
      { id: 0, question: "Teeth", bengName: "দাঁত", image: require('../../assets/b_teeth.jpg'), ans: ['Teeth', 'Chest', 'Hand', 'Mouth'] },
      { id: 0, question: "Tongue", bengName: "জিহ্বা", image: require('../../assets/b_tongue.jpg'), ans: ['Hair', 'Tongue', 'Leg', 'Eye'] },
      { id: 0, question: "Back", bengName: "পেছনে", image: require('../../assets/b_back.jpg'), ans: ['Stomach', 'Lips', 'Back', 'Forehead'] },
      { id: 0, question: "Shoulder", bengName: "কাঁধ", image: require('../../assets/b_shoulder.jpg'), ans: ['Nose', 'Arms', 'Ear', 'Shoulder'] },
      { id: 0, question: "Knees", bengName: "হাঁটু", image: require('../../assets/b_knee.png'), ans: ['Knees', 'Foot', 'Finger', 'Mouth'] },
      { id: 0, question: "Hair", bengName: "চুল", image: require('../../assets/b_hair.jpg'), ans: ['Eye', 'Neck', 'Hair', 'Teeth'] },
      { id: 0, question: "Arms", bengName: "বাহু", image: require('../../assets/b_arms.jpg'), ans: ['Hand', 'Arms', 'Eye Brow', 'Leg'] },
      { id: 0, question: "Chest", bengName: "বুক", image: require('../../assets/b_chest.jpg'), ans: ['Chest', 'Lips', 'Stomach', 'Head'] },
      { id: 0, question: "Stomach", bengName: "পাকস্থলী", image: require('../../assets/b_stomach.jpg'), ans: ['Finger', 'Ear', 'Stomach', 'Foot'] },
      { id: 0, question: "Nose", bengName: "নাক", image: require('../../assets/b_nose.jpg'), ans: ['Eye', 'Nose', 'Neck', 'Thumb'] },
      { id: 0, question: "Hand", bengName: "হাত", image: require('../../assets/b_hand.jpg'), ans: ['Mouth', 'Leg', 'Hair', 'Hand'] },
      { id: 0, question: "Eye", bengName: "চোখ", image: require('../../assets/b_eye.jpg'), ans: ['Stomach', 'Teeth', 'Eye', 'Finger'] },
      { id: 0, question: "Lips", bengName: "ঠোঁট", image: require('../../assets/b_lips.jpg'), ans: ['Lips', 'Chest', 'Ear', 'Back'] },
      { id: 0, question: "Mouth", bengName: "মুখ", image: require('../../assets/b_mouth.jpg'), ans: ['Shoulder', 'Mouth', 'Tongue', 'Arms'] }
    ]
    this.setState({ dataArray: tempArr });
  }
  Vehicals = () => {
    let tempArr = [
      { id: 0, question: "Taxi", bengName: "ট্যাক্সি", image: require('../../assets/taxi.jpg'), ans: ['Ambulance', 'Taxi', 'Auto', 'Crane'] },
      { id: 0, question: "Police car", bengName: "পুলিশ গাড়ী", image: require('../../assets/police.jpg'), ans: ['Scooter', 'Bicycle', 'Police car', 'Tractor'] },
      { id: 0, question: "Bus", bengName: "বাস", image: require('../../assets/bus.png'), ans: ['Bus', 'Auto', 'Taxi', 'Crane'] },
      { id: 0, question: "Ambulance", bengName: "অ্যাম্বুলেন্স", image: require('../../assets/ambulance.jpg'), ans: ['Dump truck', 'Train', 'Rowboat', 'Ambulance'] },
      { id: 0, question: "Baby Carriage", bengName: "শিশু পরিবহন", image: require('../../assets/baby_carriage.jpg'), ans: ['Baby Carriage', 'Motorcycle', 'Taxi', 'Bus'] },
      { id: 0, question: "Bicycle", bengName: "সাইকেল", image: require('../../assets/bicycle.png'), ans: ['Cement mixer', 'Bicycle', 'Fire engine', 'Tractor'] },
      { id: 0, question: "Scooter", bengName: "স্কুটার", image: require('../../assets/scooter.jpg'), ans: ['Crane', 'Ambulance', 'Scooter', 'Police car'] },
      { id: 0, question: "Auto", bengName: "অটো", image: require('../../assets/auto.jpg'), ans: ['Auto', 'Helicopter', 'Train', 'Baby Carriage'] },
      { id: 0, question: "Motorcycle", bengName: "মোটরসাইকেল", image: require('../../assets/motorcycle.jpg'), ans: ['Bicycle', 'Bus', 'Motorcycle', 'Rowboat'] },
      { id: 0, question: "Fire engine", bengName: "দমকল", image: require('../../assets/fireengine.jpg'), ans: ['Taxi', 'Airplane', 'Train', 'Fire engine'] },
      { id: 0, question: "Crane", bengName: "কপিকল", image: require('../../assets/crane.png'), ans: ['Scooter', 'Auto', 'Crane', 'Dump truck'] },
      { id: 0, question: "Tractor", bengName: "ট্র্যাক্টর", image: require('../../assets/tractor.png'), ans: ['Tractor', 'Rowboat', 'Ambulance', 'Taxi'] },
      { id: 0, question: "Cement mixer", bengName: "সিমেন্ট মিক্সার", image: require('../../assets/cement_mixer.jpg'), ans: ['Airplane', 'Cement mixer', 'Fire engine', 'Train'] },
      { id: 0, question: "Dump truck", bengName: "ট্রাক ডাম্প", image: require('../../assets/dump_truck.jpg'), ans: ['Crane', 'Scooter', 'Dump truck', 'Bus'] },
      { id: 0, question: "Helicopter", bengName: "হেলিকপ্টার", image: require('../../assets/helicopter.jpg'), ans: ['Fire engine', 'Helicopter', 'Bicycle', 'Police car'] },
      { id: 0, question: "Airplane", bengName: "বিমান", image: require('../../assets/airplane.jpg'), ans: ['Airplane', 'Motorcycle', 'Bicycle', 'Bus'] },
      { id: 0, question: "Rowboat", bengName: "বাইচের নৌকা", image: require('../../assets/rowboat.jpg'), ans: ['Scooter', 'Ambulance', 'Taxi', 'Rowboat'] },
      { id: 0, question: "Train", bengName: "রেলগাড়ি", image: require('../../assets/train.jpg'), ans: ['Baby Carriage', 'Dump truck', 'Auto', 'Train'] },
    ]
    this.setState({ dataArray: tempArr });
  }
  Colors = () => {
    let tempArr = [
      { id: 0, question: "Red", bengName: "লাল", image: "#FF0000", ans: ['Lime', 'Pink', 'Red', 'Violet'] },
      { id: 0, question: "Orange", bengName: "কমলা", image: "#fe9600", ans: ['Orange', 'Aqua', 'Green', 'Pink'] },
      { id: 0, question: "Yellow", bengName: "হলুদ", image: "#FFFF00", ans: ['Merun', 'Brown', 'Yellow', 'Red'] },
      { id: 0, question: "Lime", bengName: "লাইম", image: "#00FF00", ans: ['Olives', 'Lime', 'Grey', 'Orange'] },
      { id: 0, question: "Aqua", bengName: "একোয়া", image: "#00FFFF", ans: ['Blue', 'Yellow', 'Aqua', 'Purple'] },
      { id: 0, question: "Fucia", bengName: "ফিউসিয়া", image: "#FF00FF", ans: ['Brown', 'Lime', 'Grey', 'Fucia'] },
      { id: 0, question: "Green", bengName: "সবুজ", image: "#008000", ans: ['Green', 'Black', 'Silver', 'Olive oil'] },
      { id: 0, question: "Merun", bengName: "মেরুন", image: "#800000", ans: ['Blue', 'Lime', 'Merun', 'Deep Violet'] },
      { id: 0, question: "Olives", bengName: "জলপাই", image: "#808000", ans: ['White', 'Olives', 'Purple blue', 'Yellow'] },
      { id: 0, question: "Purple", bengName: "পার্পল", image: "#800080", ans: ['Pink', 'Silver', 'Purple', 'Greenish yellow'] },
      { id: 0, question: "Blue", bengName: "নীল", image: "#0000FF", ans: ['Grey', 'Sigrin', 'Fucia', 'Blue'] },
      { id: 0, question: "Violet", bengName: "বেগুনী", image: "#9400D3", ans: ['Violet', 'Olive oil', 'Medium slate blue', 'Chocolate'] },
      { id: 0, question: "Pink", bengName: "পিঙ্ক", image: "#FF69B4", ans: ['Peru', 'Sandy brown', 'Pink', 'Sandy brown'] },
      { id: 0, question: "Grey", bengName: "ধূসর", image: "#808080", ans: ['Greenish yellow', 'Grey', 'Golden Road', 'Deep SkyWee'] },
      { id: 0, question: "Brown", bengName: "বাদামী", image: "#A52A2A", ans: ['Violet', 'Green', 'Olives', 'Brown'] },
      { id: 0, question: "White", bengName: "সাদা", image: "#FFFFFF", ans: ['Deep Violet', 'Peru', 'White', 'Fucia'] },
      { id: 0, question: "Black", bengName: "কালো", image: "#000000", ans: ['Black', 'Merun', 'Aqua', 'Orange'] },
      { id: 0, question: "Silver", bengName: "রূপা", image: "#FF0000", ans: ['In Aquamarine', 'Medium slate blue', 'Pink', 'Silver'] },
      { id: 0, question: "Deep Violet", bengName: "ডিপ বেগুনী", image: "#9400D3", ans: ['Olive oil', 'Fucia', 'Deep Violet', 'Olives'] },
      { id: 0, question: "Purple blue", bengName: "বেগনি নীলবর্ণ", image: "#4B0082", ans: ['Purple blue', 'Chocolate', 'Merun', 'Lime'] },
      { id: 0, question: "Greenish yellow", bengName: "সবুজাভ হলুদ", image: "#ADFF2F", ans: ['Peru', 'Greenish yellow', 'Green', 'Red'] },
      { id: 0, question: "Sigrin", bengName: "সিগ্রিন", image: "#2E8B57", ans: ['Sandy brown', 'Sigrin', 'Olives', 'Blue'] },
      { id: 0, question: "Olive oil", bengName: "অলিভদ্রাব", image: "#6B8E23", ans: ['Pink', 'Fucia', 'Yellow', 'Olive oil'] },
      { id: 0, question: "In Aquamarine", bengName: "একোয়ামারিনে", image: "#7FFFD4", ans: ['In Aquamarine', 'Chocolate', 'Golden Road', 'White'] },
      { id: 0, question: "Deep SkyWee", bengName: "ডিপ স্কাইব্লুই", image: "#00BFFF", ans: ['Purple blue', 'Brown', 'Deep SkyWee', 'Violet'] },
      { id: 0, question: "Medium slate blue", bengName: "মাঝারি স্লেট ব্লু", image: "#7B68EE", ans: ['Black', 'Medium slate blue', 'Merun', 'Aqua'] },
      { id: 0, question: "Chocolate", bengName: "চকলেট", image: "#D2691E", ans: ['Brown', 'Lime', 'Red', 'Chocolate'] },
      { id: 0, question: "Peru", bengName: "পেরু", image: "#CD853F", ans: ['Peru', 'Silver', 'Pink', 'Orange'] },
      { id: 0, question: "Golden Road", bengName: "গোল্ডেনরোড", image: "#DAA520", ans: ['Deep SkyWee', 'Golden Road', 'Greenish yellow', 'Black'] },
      { id: 0, question: "Sandy brown", bengName: "বেলে বাদামী", image: "#f4a460", ans: ['Sandy brown', 'Purple blue', 'Fucia', 'Olives'] },
    ]
    this.setState({ dataArray: tempArr });
  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, borderRadius: 10, borderColor: this.state.clickIndex == index ? this.state.imageStatus == 'right' ? '#4cd038' : this.state.imageStatus == 'wrong' ? 'red' : '#003334' : '#003334', borderWidth: 2, marginRight: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center', minHeight: responsiveHeight(15) }} onPress={() => {
      if (this.state.dataArray[position].question == item || (tag == 'Capitals' && this.state.dataArray[position].ansIndex - 1 == index)) {
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
      this.setState({ clickIndex: index })
    }} disabled={this.state.isBtnDisable}>
      <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', }}> {item}</Text>
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
          this.setState({ pageIndex: position, imageStatus: null, isBtnDisable: false });
          if (this.state.isSoundOn)
            txtToSpeak(this.state.dataArray[position].question);

          this.setState({ clickIndex: -1 });
        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1,}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: responsiveHeight(10) }}>
                {tag == 'Capitals' ? <Text style={{color: Color.blueBorder, fontSize: CustomFont.font14, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici',marginTop:responsiveHeight(-2.5) }}>Capital of</Text> : null}
                  
                  {tag == 'Capitals' ? <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', }}> {item.question}</Text> : null}
                  {
                    tag == 'Colors' ? <View style={{ height: responsiveWidth(60), width: responsiveWidth(60), backgroundColor: item.image, borderRadius: 6 }} /> :
                      <Image source={item.image} style={{ height: responsiveWidth(60), margin: 10, resizeMode: 'contain' }} />
                  }


                  {this.state.imageStatus ? <View>
                    {this.state.imageStatus == 'right' && item.bengName ? <Text style={{ color: Color.green, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici' }}> {item.bengName} </Text> : null}

                    <Image source={this.state.imageStatus == 'right' ? success : error} style={{ height: responsiveFontSize(12), width: responsiveFontSize(12), resizeMode: 'contain', marginTop: 0, tintColor: this.state.imageStatus == 'right' ? 'green' : null }} />
                  </View> : null}
                </View>
                <View>


                  <FlatList
                    numColumns={2}
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
          this.setState({ isSoundOn: !this.state.isSoundOn });
        }}>
          <Image source={this.state.isSoundOn ? sound_off : sound} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', margin: 15, tintColor: this.state.isSoundOn ? 'red' : 'green' }} />
        </TouchableOpacity>
      </View>
    );
  }

}
//export default HomeDrawer;
