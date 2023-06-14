import React,{useState,useDeferredValue,useRef, useEffect} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, FlatList,Platform,SafeAreaView } from 'react-native';

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
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
// var SQLite = require('react-native-sqlite-storage');
// global.db = null;
let position = 0, favTxt = '', id = '';
export default QuestionAnswer=(props)=> {
const [dataArray,setdataArray] =useState([])
useEffect(()=>{
  let name=props.route.params.item.name;
  //alert(name)
  getData(name);
},[]);
  
  const getData = (name) => {
    let dbQuery = "SELECT * FROM qu_ans where type= '"+name+"'";
    db.transaction(tx => {
      tx.executeSql(dbQuery, [], (tx, results) => {

        let len = results.rows.length;
        let dataArr = [];
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            dataArr.push({
              question: row.question,
              answer: row.answer,
            });
          }

          console.log(JSON.stringify(dataArr));
          //FullArray=dataArr;
          setdataArray(dataArr);
          //console.log(JSON.stringify(dataArr))
        }
      },
        e => {
          //console.log(e);
        },
      );
    });
  }
  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ backgroundColor: '#FFF',marginTop:10,marginLeft:10,marginRight:10, borderRadius:8}}>
     
<Text style={{ fontSize: responsiveFontSize(2.2), fontWeight: 'bold', color: '#ff0000',  marginTop: responsiveHeight(2), marginLeft: responsiveWidth(3) , marginRight: responsiveWidth(3) }}>{index+1 +'. '}{item.question}</Text>
<Text style={{ fontSize: responsiveFontSize(2), color: '#006200', marginLeft: responsiveWidth(3) , marginRight: responsiveWidth(3), marginTop: responsiveHeight(1), marginBottom: responsiveHeight(2), }}>উঃ  {item.answer}</Text>
      
    </TouchableOpacity>

  );
  renderSeparator = () => {
		return <View style={{height: 1, backgroundColor: Color.patientBackground}} />;
	};
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={props.route.params.item.ben_name} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        props.navigation.goBack()
      } }/>
        

        <View style={{ flex: 10,backgroundColor:Color.light_bg }}>
        <FlatList
            //numColumns={2}
            style={{ marginTop: 10 }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
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
