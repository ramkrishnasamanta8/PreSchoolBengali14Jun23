import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, Platform, SafeAreaView, Alert } from 'react-native';
import Orientation from 'react-native-orientation';

import ic_menu from '../../assets/ic_menu.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import search_blue from '../../assets/search_blue.png';
import close_white from '../../assets/close_white.png';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
import _ from 'lodash';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let FullArray = [];
const Parichiti=(props)=> {
  const [dataArray,setDataArray]=useState([])
  const [title,setTitle]=useState('ছোটদের বাংলা শেখা');
  const [searchInputShow,setSearchInputShow]=useState(true);
  const [searchTxt,setSearchTxt]=useState('');
  const [crossStatus,setCrossStatus]=useState(true);

  useEffect(()=>{
    let item = props.route.params.item;
    if (item) {
      let tag = item.tag;
      if (tag == 'abc') {
        let tempArr = [
          { index: 2, id: 1, name: "ABC বড় হাতের  ", image: require('../../assets/alphabets.jpg'), searchTxt: "abc baro hater ", route: 'AlphabetsList' },
          { index: 3, id: 2, name: "ABC ছোট হাতের  ", image: require('../../assets/lowercase.webp'), searchTxt: "abc choto hater", route: 'AlphabetsList' },
          { index: 6, id: 1, name: "ABC পথানুসরণ  ", image: require('../../assets/abc_tracing.jpg'), searchTxt: "abc tracing mai bolano", route: 'Tracing' },
          { index: 6, id: 4, name: "123 পথানুসরণ  ", image: require('../../assets/number_tracing.png'), searchTxt: "abc tracing mai bolano", route: 'Tracing' },
        ]
        setDataArray(tempArr);
        setTitle('ABC Learning ')
      }
       else if (tag == 'sarban') {
        let tempArr = [
          { index: 4, id: 3, name: "স্বরবর্ণ ও স্বরচিহ্ন ", image: require('../../assets/sarbarna.webp'), searchTxt: "sarabarna ", route: 'AlphabetsList' },
          { index: 5, id: 4, name: "ব্যঞ্জনবর্ণ  ", image: require('../../assets/banjan.webp'), searchTxt: "banjan barna", route: 'AlphabetsList' },
          { index: 7, id: 2, name: "স্বরবর্ণ পথানুসরণ  ", image: require('../../assets/tracing_sar.jpg'), searchTxt: "sarabarna tracing mai bolano", route: 'Tracing' },
          { index: 8, id: 3, name: "ব্যঞ্জনবর্ণ পথানুসরণ ", image: require('../../assets/tracing_banj.webp'), searchTxt: "banjan tracing mai bolano", route: 'Tracing' },
          { index: 9, id: 5, name: "১২৩ পথানুসরণ ", image: require('../../assets/beng123.webp'), searchTxt: "banjan tracing mai bolano", route: 'Tracing' },
        ]
        setDataArray(tempArr);
        setTitle('স্বরবর্ণ ও ব্যঞ্জনবর্ণ ')
      }  else if (tag == 'hearing') {
        let tempArr = [
          { index: 2, id: 1, name: "ABC ", image: require('../../assets/abc.png'), tag: "abc", route: 'SrutiPathan' },
          { index: 4, id: 3, name: "স্বরবর্ণ ", image: require('../../assets/sar.png'), tag: "sar", route: 'SrutiPathan' },
          { index: 5, id: 4, name: "ব্যঞ্জনবর্ণ ", image: require('../../assets/banj.png'), tag: "banjan", route: 'SrutiPathan' },
          { index: 7, id: 2, name: "Number ", image: require('../../assets/123.png'), tag: "number", route: 'SrutiPathan' },
          { index: 7, id: 4, name: "Hearing and Write", image: require('../../assets/sruti.jpg'), tag: "write", route: 'NationalThings',from:'write' },
        ]
        setDataArray(tempArr);
        setTitle('শ্রুতি পঠন')
      }   else if (tag == 'rearrange') {
        let tempArr = [
          { index: 2, id: 1, name: "ABC ", image: require('../../assets/abc.png'), tag: "abc", route: 'Rearragne' },
          { index: 4, id: 3, name: "স্বরবর্ণ ", image: require('../../assets/sar.png'), tag: "sar", route: 'Rearragne' },
          { index: 5, id: 4, name: "ব্যঞ্জনবর্ণ ", image: require('../../assets/banj.png'), tag: "banjan", route: 'Rearragne' },
          { index: 7, id: 2, name: "Number ", image: require('../../assets/123.png'), tag: "number", route: 'Rearragne' },
        ]
        setDataArray(tempArr);
        setTitle('নতুন করে সাজানো ')
      } else if (tag == 'number') {
        let tempArr = [
          { index: 10, id: 1, name: "ইংরেজি সংখ্যা  ", image: require('../../assets/number.webp'), searchTxt: "number sankha", route: 'Number' },
          { index: 11, id: 2, name: "বাংলা সংখ্যা  ", image: require('../../assets/number_ben.jpg'), searchTxt: "bangla sankha", route: 'Number' },
          { index: 12, id: 3, name: "রোমান সংখ্যা  ", image: require('../../assets/roman.jpg'), searchTxt: "roman sankha", route: 'Number' },
          { index: 12, id: 4, name: "1 to 100 ", image: require('../../assets/full_number.jpg'), searchTxt: "roman sankha", route: 'FullNumber' },
          { index: 12, id: 5, name: "কোনটি বড় ", image: require('../../assets/large.png'), searchTxt: "roman sankha", route: 'MaxMin', tag: 'max' },
          { index: 12, id: 6, name: "কোনটি ছোট ", image: require('../../assets/small.png'), searchTxt: "roman sankha", route: 'MaxMin', tag: 'min' },
          { index: 12, id: 7, name: "ছবি দেখে গননা কর ", image: require('../../assets/count2.png'), searchTxt: "roman sankha", route: 'MaxMin', tag: 'count' },
          { index: 12, id: 7, name: "Ordering", image: require('../../assets/order_number.png'), searchTxt: "Order", route: 'Order' },

        ]
        setDataArray(tempArr);
        setTitle('সংখ্যা পরিচিতি ')
      } else if (tag == 'math') {
        let tempArr = [
          { index: 15, id: 1, name: "বাংলা নামতা ", image: require('../../assets/namta.jpg'), searchTxt: "ganit math", route: 'TableHome' },
          { index: 15, id: 1, name: "যোগ ", image: require('../../assets/add.png'), searchTxt: "ganit math", route: 'AddSubMulDivChooser', tag: 'add' },
          { index: 15, id: 2, name: "বিয়োগ ", image: require('../../assets/sub.png'), searchTxt: "ganit math", route: 'AddSubMulDivChooser', tag: 'sub' },
          { index: 15, id: 3, name: "গুন্ ", image: require('../../assets/multiple.jpg'), searchTxt: "ganit math", route: 'AddSubMulDivChooser', tag: 'mul' },
          { index: 15, id: 4, name: "ভাগ ", image: require('../../assets/div.png'), searchTxt: "ganit math", route: 'AddSubMulDivChooser', tag: 'div' },
 ]
 if(Platform.OS=='android'){
  let arr=[{ name: 'Ascending', image: require('../../assets/ascending.png'), route: 'AscendingDescending', tag: 'ascending' },
  { name: 'Descending', image: require('../../assets/descending.png'), route: 'AscendingDescending', tag: 'descending' },
  { name: 'Missing', image: require('../../assets/missing.png'), route: 'TouchAndMissing', tag: 'missing' },
  { name: 'Compare', image: require('../../assets/compare.png'), route: 'Compare', tag: 'Compare' },
  { name: 'Picture Math', image: require('../../assets/pictureMath.png'), route: 'PictureMath', tag: 'PictureMath' },
  { index: 15, id: 1, name: "গণিত Exam", image: require('../../assets/math.jpg'), searchTxt: "ganit math", route: 'MathChoose' },]
  tempArr.concat (arr)
 }
        setDataArray(tempArr);
        setTitle('গণিত')
      } else if (tag=='daymonth') {
        let tempArr = [
          { index: 16, id: 1, name: "ইংরেজি দিন  ", image: require('../../assets/days.webp'), searchTxt: "english din day", route: 'MonthDay' },
          { index: 17, id: 2, name: "ইংরেজি মাস  ", image: require('../../assets/months.webp'), searchTxt: "mas month ", route: 'MonthDay' },
          { index: 18, id: 3, name: "বাংলা দিন  ", image: require('../../assets/vadra.webp'), searchTxt: "bengali din", route: 'MonthDay' },
          { index: 19, id: 4, name: "বাংলা মাস  ", image: require('../../assets/baisakh.jpg'), searchTxt: "bengali month", route: 'MonthDay' },
          { index: 20, id: 5, name: "ঋতু  ", image: require('../../assets/autumn.jpg'), searchTxt: "ritu", route: 'MonthDay' },
        ]
        setDataArray(tempArr);
        setTitle('দিন,মাস,ঋতু ')
      } else if (tag=='env') {
        let tempArr = [
          { index: 21, id: 1, name: "শরীরের অংশ   ", image: require('../../assets/parts.jpg'), searchTxt: "body parts", route: 'BodyPartsDetails' },
          { index: 22, id: 2, name: "রং ", image: require('../../assets/color.png'), searchTxt: "color", route: 'BodyPartsDetails' },
          { index: 23, id: 3, name: "আকার  ", image: require('../../assets/spapes.jpg'), searchTxt: "shape akar", route: 'BodyPartsDetails' },
          { index: 24, id: 4, name: "ফল ", image: require('../../assets/fruit.jpg'), searchTxt: "fal fruit", route: 'BodyPartsDetails' },
          { index: 25, id: 5, name: "শাকসবজি ", image: require('../../assets/veg.webp'), searchTxt: "vegitable", route: 'BodyPartsDetails' },
          { index: 26, id: 6, name: "জীবজন্তু ", image: require('../../assets/animal.png'), searchTxt: "animals jibjantu", route: 'BodyPartsDetails' },
          { index: 28, id: 7, name: "ফুল ", image: require('../../assets/flower.png'), searchTxt: "ful flower", route: 'BodyPartsDetails' },
          { index: 29, id: 8, name: "পাখি ", image: require('../../assets/bird.png'), searchTxt: "bird pakhi", route: 'BodyPartsDetails' },
          { index: 30, id: 9, name: "যানবাহন ", image: require('../../assets/vehi.jpg'), searchTxt: "vehicals janbahan", route: 'BodyPartsDetails' },
          { index: 31, id: 10, name: "খেলাধুলা ", image: require('../../assets/sports.jpg'), searchTxt: "sport", route: 'BodyPartsDetails' },
          { index: 32, id: 11, name: "জায়গা ", image: require('../../assets/school.webp'), searchTxt: "place jayga", route: 'BodyPartsDetails' },
          { index: 33, id: 12, name: "দিকনির্দেশ ", image: require('../../assets/direction.jpg'), searchTxt: "dik nirdesh", route: 'BodyPartsDetails' },
          { index: 34, id: 13, name: "আসবাবপত্র ", image: require('../../assets/furniture.jpg'), searchTxt: "furniture asbab", route: 'BodyPartsDetails' },
          { index: 35, id: 14, name: "সমুদ্রের প্রাণী ", image: require('../../assets/sea.jpg'), searchTxt: "sea ", route: 'BodyPartsDetails' },
          { index: 36, id: 15, name: "পোকামাকড় ", image: require('../../assets/insect.jpg'), searchTxt: "insects poka", route: 'BodyPartsDetails' },
          { index: 37, id: 16, name: "প্রকৃতি ", image: require('../../assets/nature.webp'), searchTxt: "prakriti nature", route: 'BodyPartsDetails' },
          { index: 38, id: 17, name: "শিশুর প্রাণী ", image: require('../../assets/fawn.jpg'), searchTxt: "sisur child", route: 'BodyPartsDetails' },
          { index: 39, id: 18, name: "কম্পিউটার ", image: require('../../assets/computer.jpg'), searchTxt: "computer", route: 'BodyPartsDetails' },
          { index: 43, id: 1, name: "ভারতের জাতীয় বিষয় ", image: require('../../assets/india.png'), searchTxt: "bharater jatiya india", route: 'NationalThings',from:'' },
          { index: 44, id: 2, name: "বাংলাদেশের জাতীয় বিষয়  ", image: require('../../assets/bangladesh.jpg'), searchTxt: "bangladesh", route: 'NationalThings',from:'' },
          { index: 44, id: 19, name: "দানা শস্য ", image: require('../../assets/cron.jpg'), searchTxt: "bangladesh", route: 'BodyPartsDetails' },
          { index: 44, id: 20, name: "মহাদেশ", image: require('../../assets/asea.jpg'), searchTxt: "bangladesh", route: 'BodyPartsDetails' },
          { index: 44, id: 21, name: "মহাসাগর ", image: require('../../assets/bharat_maha.jpg'), searchTxt: "bangladesh", route: 'BodyPartsDetails' },
          { index: 44, id: 22, name: "খাবার ", image: require('../../assets/pizzas.jpg'), searchTxt: "food", route: 'BodyPartsDetails' },
        ]
        setDataArray(tempArr);
        setTitle('পরিবেশ পরিচিতি ')
      } else if (tag=='entertainment') {
        let tempArr = [
          { index: 41, id: 3, name: "পশুদের ডাক ", image: require('../../assets/roar_lion.jpg'), searchTxt: "pasuder dak", route: 'NationalThings',from:'' },
          { index: 41, id: 1, name: "Clock", image: require('../../assets/clock2.png'), searchTxt: "pasuder dak", route: 'Clock' },
          { index: 41, id: 1, name: "মাছি মারা খেলা ", image: require('../../assets/fly_dead.jpg'), searchTxt: "pasuder dak", route: 'MachiMaraKhela' },
        ]
        setDataArray(tempArr);
        setTitle('Entertainment')
      } else if (tag=='advace') {
        let tempArr = [
          { index: 0, id: 0, name: "সমস্ত দেশ বিষয়ক ", image: require('../../assets/country.jpg'), searchTxt: "pasuder dak", route: 'Country' },
          { index: 1, id: 1, name: "G.K ", image: require('../../assets/gk4.png'), searchTxt: "pasuder dak", route: 'GkList' },
        ]
        setDataArray(tempArr);
        setTitle('Advance Learning')
      } else if (tag=='game') {
        let tempArr = [
          { name: 'Balloons', image: require('../../assets/balloons.png'), route: 'BaloonGame' },
          { name: 'Spellings', image: require('../../assets/spelling.png'), route: 'Spelling' },
          { name: 'Counting', image: require('../../assets/counting.png'), route: 'MaxMin', tag: 'count' },
          { name: 'Matching', image: require('../../assets/matching.png'), route: 'MatchingGameChoose' },
          { name: "Ordering", image: require('../../assets/order_number.png'), searchTxt: "Order", route: 'Order' },
          { name: "Memory Game", image: require('../../assets/memory.png'), searchTxt: "Order", route: 'MemoryGameChooser' },
        ]
        setDataArray(tempArr);
        setTitle('Learning Game')
      } else if (tag=='test') {
        let tempArr = [
          { name: 'Quize 1', image: require('../../assets/quiz.png'), route: 'MaxMin', tag: 'Test1' },
          { name: 'Quize 2', image: require('../../assets/quiz.png'), route: 'MaxMin', tag: 'Test2' },
          { name: 'Fruits', image: require('../../assets/mangos.jpg'), route: 'TableList', tag: '4Images' },
          { name: 'Flowers', image: require('../../assets/rose_flower.jpg'), route: 'TableList', tag: '4Images' },
          { name: 'Vegetables', image: require('../../assets/frvgpumpkin.png'), route: 'TableList', tag: '4Images' },
          { name: 'Animals', image: require('../../assets/anmelk.png'), route: 'TableList', tag: '4Images' },
          { name: 'Birds', image: require('../../assets/anmflamingo.png'), route: 'TableList', tag: '4Images' },
          { name: 'Shapes', image: require('../../assets/sellipse.png'), route: 'TableList', tag: '4Images' },
          { name: 'Human Body', image: require('../../assets/b_head.png'), route: 'TableList', tag: '4Images' },
          { name: 'Vehicals', image: require('../../assets/fireengine.jpg'), route: 'TableList', tag: '4Images' },
          { name: 'Colors', image: require('../../assets/color.png'), route: 'TableList', tag: '4Images' },
        ]
        setDataArray(tempArr);
        setTitle('Test')
      } else if (tag=='GoodHabit') {
        let tempArr = [
          {name:'At Table',image:require('../../assets/goodhabit/handwash.webp'),route:'HabitDetails'},
        {name:'At Home',image:require('../../assets/goodhabit/treatothers.webp'),route:'HabitDetails'},
        {name:'At school',image:require('../../assets/goodhabit/enjoyFriendship.webp'),route:'HabitDetails'},
        {name:'At Outdoor',image:require('../../assets/goodhabit/loveNature.webp'),route:'HabitDetails'},
        {name:'Keep area clean',image:require('../../assets/goodhabit/avoidLittering.webp'),route:'HabitDetails'},
        {name:'Being Nice',image:require('../../assets/goodhabit/trytoBelieve.webp'),route:'HabitDetails'},
        {name:'Staying Healthy',image:require('../../assets/goodhabit/healthyLifestyle.webp'),route:'HabitDetails'},
        {name:'Discipline',image:require('../../assets/goodhabit/Increase.webp'),route:'HabitDetails'},
        {name:'Intelligence',image:require('../../assets/goodhabit/reading.webp'),route:'HabitDetails'},
        ]
        setDataArray(tempArr);
        setTitle('Good Habit')
      }
    }
  },[])
  
  const Refresh = () => {
    Orientation.lockToPortrait();
  }
  renderList = ({ item, index }) => (
    <View style={{ flex: 1, maxWidth: responsiveWidth(48), marginTop: responsiveHeight(2.5), alignItems: 'center', justifyContent: 'center', }}>
      <TouchableOpacity style={{ backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: responsiveFontSize(2), borderColor: Color.blueBorder, borderWidth: 3 }} onPress={() => {
        if (IsSoundEnabled)
          clickSound();
        props.navigation.navigate(item.route, { item: item, Refresh: Refresh })
      }}>
        <Image source={item.image} style={{ height: responsiveFontSize(13), width: responsiveFontSize(13), borderRadius: 10, margin: responsiveWidth(3), resizeMode: 'stretch' }} />
      </TouchableOpacity>

      <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: Color.redFont, marginTop: 5 }}>{item.name}</Text>
    </View>

  );

  SearchFilterFunction = (text) => {
    //for CheckIn
    var searchResultCheckIn = _.filter(FullArray, function (item) {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || item.searchTxt.indexOf(text.toLowerCase()) > -1;
    });
    setDataArray(searchResultCheckIn ? searchResultCheckIn : []);
    setSearchTxt(text)

  }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#008000' }}>
        <StatusBar backgroundColor={'#006400'} />
        <Toolbar title={title} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack()
        }} />
        
        <View style={{ flex: 10, backgroundColor: Color.greenBg }}>

          {dataArray && dataArray.length>0 ? <FlatList
            numColumns={2}
            style={{ marginBottom: 10 }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> : <Text style={{ marginTop: responsiveHeight(30), marginLeft: responsiveWidth(20) }}>No data found</Text>}
          <View>
          {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
          </View>

        </View>

      </SafeAreaView>
    );
}
export default Parichiti;
