import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, FlatList,Platform,SafeAreaView } from 'react-native';

import back_blue from '../../assets/back_blue.png';
import right_arrow from '../../assets/right_arrow.png';
import next from '../../assets/next.png';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('ben-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import Toolbar from '../components/Toolbar';
var SQLite = require('react-native-sqlite-storage');
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
global.db = null;
let position = 0, favTxt = '', id = '';
export default GkList =(props)=> {
  const [image,setimage]=useState(props.route.params.item.image);
  const [plantName,setplantName]=useState(props.route.params.item.name);
  const [dataArray,setdataArray]=useState([]);
  const [pageIndex,setpageIndex]=useState(0);
  const [prevShowStatus,setprevShowStatus]=useState(false);
  const [nextShowStatus,setnextShowStatus]=useState(true);
useEffect(()=>{
  if (Platform.OS === 'ios') {
    db = SQLite.openDatabase(
      { name: 'general_knowledge.db', createFromLocation: 1 },
      open => {
        console.log('-------DB Connect iOS');
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
  position = 0;
},[])

  const getData = () => {
    let dbQuery = 'SELECT * FROM category ';
    db.transaction(tx => {
      tx.executeSql(dbQuery, [], (tx, results) => {

        let len = results.rows.length;
        let dataArr = [];
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            dataArr.push({
              id: row.id,
              name: row.name,
              ben_name: row.ben_name,
              search_txt: row.search_txt
            });
          }

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
    <TouchableOpacity style={{ backgroundColor: '#FFF', alignItems: 'center',flexDirection:'row',justifyContent:'space-between',marginTop:7,marginLeft:10,marginRight:10,borderRadius:8 }} onPress={() => {
      if(index==0){
        props.navigation.goBack(null);
        props.navigation.goBack(null);
      }else{
        props.navigation.navigate('QuestionAnswer',{item:item});
      }
    }}>
      <View style={{flexDirection:'row'}}>
      <Image source={{uri:'https://rksmobilesolution.in/assets/images/gkbangla/'+item.id+'.jpg'}} style={{ height: responsiveFontSize(8), width: responsiveFontSize(10), borderRadius: 5,resizeMode:'contain', margin: responsiveWidth(3)}} />

<Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: '#0e001a',  marginTop: responsiveHeight(2.6), marginBottom: responsiveHeight(3) }}>{item.ben_name}</Text>
      </View>
      
      <Image source={right_arrow} style={{ height: responsiveFontSize(3), width: responsiveFontSize(3),resizeMode:'contain',marginRight:responsiveWidth(2)}} />
    </TouchableOpacity>

  );
  const renderSeparator = () => {
		return <View style={{height: 1, backgroundColor: Color.patientBackground}} />;
	};
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={plantName} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        props.navigation.goBack()
      } }/>
        

        <View style={{ flex: 10,backgroundColor:Color.patientBackground }}>
        <FlatList
            //numColumns={2}
            style={{ marginTop: 10 }}
            data={dataArray}
            renderItem={renderList}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} />
            {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>

      </SafeAreaView>
    );
}
//export default HomeDrawer;
