import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, FlatList,Platform,SafeAreaView } from 'react-native';

import right_arrow from '../../assets/right_arrow.png';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import Toolbar from '../components/Toolbar';
const RhymesList=(props) => {
const [plantName,setplantName]=useState(props.route.params.item.name);
const [dataArray,setdataArray]=useState([{ id: 0,name:"হাট্টিমা টিম টিম ",image: require('../../assets/hatimatim.webp'),sound:'hatimatim.mp3'},
{ id: 0,name:"ভোর হলো দোর খোল ",image: require('../../assets/vorhalo.webp'),sound:'vorhalodor.mp3'},
{ id: 0,name:"আয়রে আয় টিয়ে ",image: require('../../assets/ayreay_tiye.webp'),sound:'ayreay_tiye.mp3'},
{ id: 0,name:"ওই দেখা যায় তাল গাছ ",image: require('../../assets/oiamder.webp'),sound:'oidekha_tal.mp3'},
{ id: 0,name:"খোকন খোকন ডাক পাড়ি ",image: require('../../assets/khokan_khokan.webp'),sound:'khokan_khokan.mp3'},
{ id: 0,name:"নোটন নোটন পায়রাগুলি ",image: require('../../assets/noton_noton.webp'),sound:'noton_noton.mp3'},
{ id: 0,name:"আতা গাছে তোতা পাখি ",image: require('../../assets/ata_gache.webp'),sound:'atagache.mp3'},
{ id: 0,name:"আম পাতা জোড়া জোড়া ",image: require('../../assets/ampata.webp'),sound:'ampata.mp3'},
{ id: 0,name:"আয় আয় চাঁদ মামা",image: require('../../assets/chad_mama.webp'),sound:'chad_mama.mp3'},
{ id: 0,name:"খোকন খোকন করে মায় ",image: require('../../assets/khokan_dar.webp'),sound:'khokan_dar.mp3'},
{ id: 0,name:"ওখানে কে রে? ",image: require('../../assets/okhane.webp'),sound:'okane_kre.mp3'},
{ id: 0,name:"তাই তাই তাই ",image: require('../../assets/tai_tai.webp'),sound:'tai_tai.mp3'},
{ id: 0,name:"আমাদের ছোট নদী ",image: require('../../assets/amader_choto.webp'),sound:'amader_choto.mp3'},
{ id: 0,name:"আমি হব  ",image: require('../../assets/ami_hobo.webp'),sound:'ami_hobo.mp3'},
{ id: 0,name:"বাক বাকুম পায়রা ",image: require('../../assets/bakbakum.webp'),sound:'bakbakum.mp3'},
{ id: 0,name:"চাঁদ উঠেছে ফুল ফুটেছে  ",image: require('../../assets/chand_utheche.webp'),sound:'chad_utheche.mp3'},
{ id: 0,name:"আয় রে আয় মেনি  ",image: require('../../assets/ayreay_meni.webp'),sound:'ayreay_meni.mp3'},
{ id: 0,name:"আয় বৃষ্টি ঝেঁপে ",image: require('../../assets/aybristi.webp'),sound:'aybristi.mp3'},
{ id: 0,name:"ঘুম পাড়ানি মাসি পিসি  ",image: require('../../assets/ghum_parani.webp'),sound:'ghumparani.mp3'},
{ id: 0,name:"আমাদের গ্রাম ",image: require('../../assets/amader_gram.webp'),sound:'amader_gram.mp3'},
{ id: 0,name:"দোল দোল দুলুনি ",image: require('../../assets/doldol.webp'),sound:'doldol.mp3'},
{ id: 0,name:"সিংহ মামা সিংহ মামা ",image: require('../../assets/singha.webp'),sound:'singha.mp3'},
{ id: 0,name:"খোকা যাবে শশুর বাড়ি ",image: require('../../assets/khoka_jabe.webp'),sound:'khokajabesosur.mp3'},
{ id: 0,name:"চল চল চল উর্দ্ধ গগনে ",image: require('../../assets/chol.webp'),sound:'colcol.mp3'},
{ id: 0,name:"খোকা গেলো মাছ ধরতে ",image: require('../../assets/khoka_gelo_mach.webp'),sound:'khoka_gelo_mach.mp3'},
{ id: 0,name:"অদূর বাদুড় চালতা বাদুড়  ",image: require('../../assets/adur_badur.webp'),sound:'adurbadur.mp3'},
{ id: 0,name:"টাট্টু ঘোড়া পাড়লো ডিম ",image: require('../../assets/tattu_ghora.jpg'),sound:'tattu.mp3'},
{ id: 0, name:"রামগরুড়ের ছানা ",image: require('../../assets/ramgarurer.jpg'),sound:'ramgarurer.mp3'},
{ id: 0, name:"ঝড় এলো, এলো ঝড় ",image: require('../../assets/ampar.jpg'),sound:'ampar.mp3'},
{ id: 0, name:"তাঁতির বাড়ি ব্যাঙের বাসা ",image: require('../../assets/tatirbari.jpg'),sound:'tatirbari.mp3'},
]);

  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ backgroundColor: '#FFF', alignItems: 'center',flexDirection:'row',justifyContent:'space-between' }} onPress={() => {
      if(IsSoundEnabled)
    clickSound();
      props.navigation.navigate('RhymesListDetails',{index:index});

    }}>
      <View style={{flexDirection:'row'}}>
      <Image source={item.image} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), borderRadius: 5, margin: responsiveWidth(3)}} />

<Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: '#0e001a',  marginTop: responsiveHeight(2.6), marginBottom: responsiveHeight(3) }}>{item.name}</Text>
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
        

        <View style={{ flex: 10,backgroundColor:Color.white }}>
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
export default RhymesList;
