import  React,{useEffect,useState} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, Platform, SafeAreaView } from 'react-native';
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
export default MenuChooserInCountry =(props)=> {
const [dataArray,setdataArray]=useState('ছোটদের বাংলা শেখা')
const [title,settitle]=useState([])
const [searchInputShow,setsearchInputShow]=useState(true)
const [searchTxt,setsearchTxt]=useState('');
const [crossStatus,setcrossStatus]=useState(true);
useEffect(()=>{
  let item = props.route.params.item;
  if (item) {
    let tag = item.tag;
    if (tag == 'Quize') {
      let tempArr = [
        { tag:'4Images', name: "Capitals", image: require('../../assets/capital2.png'), searchTxt: "abc baro hater ", route: 'TableList' },
        { tag:'4Images', name: "Flags", image: require('../../assets/flag_quize.png'), searchTxt: "abc choto hater", route: 'TableList' },
        { tag:'4Images', name: "City", image: require('../../assets/city.png'), searchTxt: "abc tracing mai bolano", route: 'TableList' },
        { tag:'4Images', name: "Country", image: require('../../assets/country.jpg'), searchTxt: "abc tracing mai bolano", route: 'TableList' },
      ]
      setdataArray(tempArr);
      settitle('Quize on Country');
    }
  }
},[])
  const Refresh = () => {
    //alert('ll')
    Orientation.lockToPortrait();
  }
  const  renderList = ({ item, index }) => (
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

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#008000' }}>
        <StatusBar backgroundColor={'#006400'} />
        <Toolbar title={title} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack()
        }} />
       
        <View style={{ flex: 10, backgroundColor: Color.greenBg }}>

          {dataArray ? <FlatList
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
//export default HomeDrawer;
