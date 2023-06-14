import React,{useEffect,useState} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, SafeAreaView } from 'react-native';

 import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';

const MenuTab= (props)=> {
const[dataArray,setdataArray] =useState([
  {title:'Tourist',image:require('../../assets/tourist.png'),route:'ImportantThings',tag:''},
  {title:'Wonder',image:require('../../assets/wonder.png'),route:'ImportantThings',tag:''},
  {title:'Mountain',image:require('../../assets/mountains.png'),route:'ImportantThings',tag:''},
  {title:'River',image:require('../../assets/river1.png'),route:'ImportantThings',tag:''},
  {title:'Oceans',image:require('../../assets/oceans.png'),route:'ImportantThings',tag:''},
  {title:'Desert',image:require('../../assets/desert.png'),route:'ImportantThings',tag:''},
  {title:'Tower',image:require('../../assets/tower.jpg'),route:'ImportantThings',tag:''},
  {title:'G.k',image:require('../../assets/gk.png'),route:'GkList',name:'country',ben_name:'সমস্ত দেশ বিষয়ক ', tag:''},
  {title:'Quize',image:require('../../assets/ideas.png'),route:'MenuChooserInCountry',tag:'Quize'},
])
const [dayName,setdayName]=useState('');
const [txtDate,settxtDate]=useState('');

 const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.white, alignItems: 'center', marginLeft: 2,marginTop:2, maxWidth:responsiveWidth(32.7)}}
      onPress={() =>{
        if(IsSoundEnabled)
    clickSound();
         props.nav.navigation.navigate(item.route,{item:item})
      } }>
       <Image source={item.image} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'contain', marginTop: responsiveHeight(3) }} />
        <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: responsiveHeight(2),marginBottom: responsiveHeight(3),fontWeight:'bold' }}>{item.title}</Text>
    </TouchableOpacity>
  );
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={'World Famous'} onBackPress={() =>{
          if(IsSoundEnabled)
    clickSound();
           props.nav.navigation.goBack();
        }} />
        <View style={{ flex: 10, backgroundColor: Color.whiteBg}}>
         <FlatList
           numColumns={3}
            style={{ marginRight: 2,marginTop:2 }}
            data={dataArray}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()} />
{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>

      </SafeAreaView>
    );

}
export default MenuTab;