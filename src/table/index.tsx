import React,{useState,useEffect,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, SafeAreaView } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
//import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';

export default TableHome =(props)=> {
const [dataArray,setdataArray] =useState([{ title: 'Learn Table', image: require('../../assets/table_mul.webp'), route: 'TableList', tag: 'table' },
{ title: '1 to 100', image: require('../../assets/table_math.png'), route: 'FullTable', tag: 'table' },
{ title: 'Make Table', image: require('../../assets/make_table.png'), route: 'TableCreate', tag: 'TableCreate' },
{ title: 'Math Table', image: require('../../assets/maths.png'), route: 'TableList', tag: 'MathTable' },
{ title: 'Start Test', image: require('../../assets/test.png'), route: 'TableList', tag: 'Test' },
])

  const renderList = ({ item, index }) => (
    <View style={{ flex: 1,maxWidth: responsiveWidth(48), marginTop: responsiveHeight(2.5), alignItems: 'center', justifyContent: 'center', }}>
      <TouchableOpacity style={{ backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: responsiveFontSize(2),borderColor:Color.blueBorder,borderWidth:3 }}  onPress={() =>{
         if(IsSoundEnabled)
         clickSound();
         props.navigation.navigate(item.route,{item:item})
      }  }>
      <Image source={item.image} style={{ height: responsiveFontSize(13), width: responsiveFontSize(13), borderRadius: 10, margin: responsiveWidth(3), resizeMode: 'stretch' }} />
      </TouchableOpacity>
      
      <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: Color.redFont, marginTop:5 }}>{item.title}</Text>
    </View>

  );
  
   // Orientation.lockToPortrait();
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={'Math Table '} onBackPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack();
        }} />
        <View style={{ flex: 10, backgroundColor: Color.greenBg }}>
        
        <FlatList
        numColumns={2}
            style={{ marginTop: 10,marginBottom:20 }}
            data={dataArray}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()} />
         
         

        </View>
        <View style={{ backgroundColor: Color.greenBg,alignItems:'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
      </SafeAreaView>
    );

}
