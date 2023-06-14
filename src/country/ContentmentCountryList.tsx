import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, TextInput, SafeAreaView } from 'react-native';

 import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
var SQLite = require('react-native-sqlite-storage');
import sound from '../../assets/sound.png';
import arrow_right from '../../assets/arrowRight.png';
import back_blue from '../../assets/back_blue.png';
import close_white from '../../assets/close_white.png';
import search_blue from '../../assets/search_blue.png';
import ic_menu from '../../assets/ic_menu.png';
import _ from 'lodash';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let contentmentName = '', db = null,FullArray = [];
let ImgArr=[];
const ContentCountryList=(props)=> {
const [dataArray,setdataArray] = useState([]);
const [tabIndex,settabIndex] = useState(0);
const [searchInputShow,setsearchInputShow] = useState(true);
const [searchTxt,setsearchTxt] = useState('');
const [crossStatus,setcrossStatus] = useState(true);

useEffect(()=>{
  ImgArr=[];
  contentmentName= props.route.params.item.name;
  //alert(contentmentName)
  ImgArr = _.filter(ImageArray, function (item) {
    return item.con.indexOf(contentmentName) > -1;
  });
  console.log('ImgArr-----------'+JSON.stringify(ImgArr))
  if (Platform.OS === 'ios') {
    db = SQLite.openDatabase(
      { name: 'general_knowledge.db', createFromLocation: 1 },
      open => {
        console.log('DB Connect iOS');
        getData();
      },
      e => {
        console.log(e);// eslint-disable-line
      },
    );
  } else {
    db = SQLite.openDatabase(
      { name: 'general_knowledge.db', createFromLocation: '~/general_knowledge.db', location: 'Library' },
      open => {
        getData();
        console.log('DB Connect android');
      },
      e => {
        console.log(e);// eslint-disable-line
      },
    );
  }


},[])

  // constructor(props) {
  //   super(props);
  //   state = {
  //     dataArray: [],
  //     tabIndex:0,
  //     searchInputShow: true,
  //     searchTxt: '',
  //     crossStatus: true,
  //   };
  //   ImgArr=[];
  // }
  // componentDidMount() {
    
    
  // }
  const SearchFilterFunction = (text) => {
    //for CheckIn
    var searchResultCheckIn = _.filter(FullArray, function (item) {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setdataArray(searchResultCheckIn ? searchResultCheckIn : []);
    setsearchTxt(text);

  }
  const getData = () => {
    let dbQuery = "SELECT ID,COUNTRY_NAME,CAPITAL FROM country where CONTINENT ='"+contentmentName+"'";
    console.log(dbQuery)
    db.transaction(tx => {
      tx.executeSql(dbQuery, [], (tx, results) => {
        //console.log(results);
        let len = results.rows.length;
        let dataArr = [];
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            dataArr.push({
              id: row.ID,
              name: row.COUNTRY_NAME,
              capital: row.CAPITAL
            });
          }
          FullArray=dataArr;
          setdataArray(dataArr);
        }
      },
        e => {
          //console.log(e);
        },
      );
    });
  }
  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.white, flexDirection: 'row', marginTop: 1 }}
      onPress={() => {
        if(IsSoundEnabled)
    clickSound();
        props.navigation.navigate('CountryDetails', {item:item, index:index});
      }}>
      <Image source={ImgArr && ImgArr.length>0 ? ImgArr[index].image:''} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'contain', margin: responsiveWidth(2) }} />
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: CustomFont.font18, color: Color.fontColor, marginTop: responsiveHeight(2.5), marginLeft: responsiveWidth(3), fontWeight: 'bold', }}>{item.name}</Text>
        <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginTop: responsiveHeight(1), marginLeft: responsiveWidth(3), textAlign: 'left' }}>{item.capital}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => txtToSpeak(item.name)}>
          <Image source={sound} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), tintColor: Color.primary }} />
        </TouchableOpacity>

        <Image source={arrow_right} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), marginTop: 10 }} />
      </View>

    </TouchableOpacity>
  );

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
         <View style={{ flex: 1, backgroundColor: Color.white }}>
         <View style={{ flexDirection: 'row', alignItems: 'center', height: responsiveHeight(7),backgroundColor: Color.primary }}>
          <TouchableOpacity style={{ height: '100%', width: responsiveWidth(12), alignItems: 'center', justifyContent: 'center' }} onPress={() =>{
            if(IsSoundEnabled)
            clickSound();
            props.navigation.goBack();
          }}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF' }} />
          </TouchableOpacity>

          {searchInputShow ? <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>{'Countries under ('+props.route.params.item.name+")"}</Text> :
            <TextInput style={{ height: responsiveHeight(5), borderBottomColor: '#e0e0e0', borderBottomWidth: 1, width: responsiveWidth(75), borderRadius: 5, fontSize: CustomFont.font14, padding: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0, marginBottom: 7, marginLeft: 10, color: '#FFF' }}
              onBlur={() =>{
setsearchInputShow(true);
setcrossStatus(!crossStatus);
              } } value={searchTxt} onChangeText={(searchTxt) =>SearchFilterFunction(searchTxt) }
              ref="search" selectionColor={'#FFF'} />}

          {crossStatus ? <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1.6), right: 0 }} onPress={() => {
            setsearchInputShow(false);
            setcrossStatus(!crossStatus);
          }}>
            <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={search_blue} />
          </TouchableOpacity> :
            <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1), right: 0 }} onPress={() =>{
              if(searchTxt){
                setdataArray(FullArray);
    setsearchTxt('');
              }
              else{
                setdataArray(FullArray);
    setsearchTxt('');
    setsearchInputShow(true);
            setcrossStatus(true);
              }
            } }>
              <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={close_white} />
            </TouchableOpacity>}

        </View>

        <View style={{ flex: 10, backgroundColor: Color.whiteBg}}>
          {dataArray && dataArray.length>0 ? <FlatList
           //numColumns={3}
            style={{ marginRight: 2,marginTop:2 }}
            data={dataArray}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()} />:null}
         
         {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        
</View>
      </SafeAreaView>
    );

}
export default ContentCountryList;