import React,{useState,useEffect} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList, SafeAreaView } from 'react-native';

import back_blue from '../../assets/back_blue.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
let isNavigateWriteDetails=false;
export default NationalThings =(props)=> {
  const [title,settitle]=useState('');
  const [dataArray,setdataArray]=useState([]);
  useEffect(()=>{
    isNavigateWriteDetails=false;

    let item = props.route.params.item;
    if (item) {
      if (item.id == '3') {
        getNationalAnimals();
      } else if (item.id == '1') {
        getNationalIndian();
      } else if (item.id == '2') {
        getNationaBangladesh();
      } else if (item.id == '4') {
        getChooseForHear();
        isNavigateWriteDetails=true;
      }
      settitle(item.name) ;
    }
  },[]);

  const getChooseForHear = () => {
    let tempArr = [{ name: "শরীরের অংশ ", image: require('../../assets/b_ear.jpg'), sound: 0,tag:'Human Body' },
    { name: "ফল", image: require('../../assets/franar.jpg'), sound: 0,tag:'Fruits' },
    { name: "ফুল", image: require('../../assets/jasminum.jpg'), sound: 0,tag:'Flowers' },
    { name: "শাকসবজি ", image: require('../../assets/cabbage.jpg'), sound: 0,tag:'Vegetables' },
    { name: "জীবজন্তু", image: require('../../assets/anmelk.png'), sound: 0 ,tag:'Animals'},
    { name: "পাখি ", image: require('../../assets/peacock.jpg'), sound: 0,tag:'Birds' },
    { name: "আকার ", image: require('../../assets/heptagon.png'), sound: 0,tag:'Shapes' },
    { name: "রং ", image: require('../../assets/color.png'), sound: 0,tag:'Colors' },
    { name: "যানবাহন ", image: require('../../assets/airplane.jpg'), sound: 0 ,tag:'Vehicals'},

    { name: "আসবাবপত্র", image: require('../../assets/bed.jpg'), sound: 0,tag:'furniture' },
    { name: "প্রকৃতি ", image: require('../../assets/mountain.jpg'), sound: 0,tag:'nature' },
    { name: "কম্পিউটার ", image: require('../../assets/computer.jpg'), sound: 0,tag:'computer' },
    { name: "দানা শস্য ", image: require('../../assets/wheat.jpg'), sound: 0,tag:'cron' },
  ];
    setdataArray(tempArr);
  }
  const getNationalIndian = () => {
    let tempArr = [{ name: "জাতীয় ভাষা - হিন্দি ", image: require('../../assets/hindi.png'), sound: 0 },
    { name: "জাতীয় ফুল - পদ্ম ", image: require('../../assets/lotus.jpg'), sound: 0 },
    { name: "জাতীয় ফল - আম ", image: require('../../assets/mangos.jpg'), sound: 0 },
    { name: "জাতীয় পশু - রয়েল ব্যাঙ্গর টাইগার ", image: require('../../assets/royal.jpg'), sound: 0 },
    { name: "জাতীয় পাখি - ময়ূর ", image: require('../../assets/peacock.jpg'), sound: 0 },
    { name: "জাতীয় গাছ - বট গাছ ", image: require('../../assets/bot.jpg'), sound: 0 },
    { name: "জাতীয় পতাকা - তিরঙ্গা পতাকা ও কেন্দ্রস্থলে অশোকচক্র", image: require('../../assets/india.png'), sound: 0 },
    { name: "জাতীয় সংগীত - জনগণমন-অধিনায়ক জয় হে", image: require('../../assets/jana.jpg'), sound: 0 },
    { name: "জাতীয় দিবস - ১৫ আগস্ট (স্বাধীনতা দিবস) ", image: require('../../assets/india.png'), sound: 0 },
    { name: "জাতীয় খেলা - হকি ", image: require('../../assets/hoki.jpg'), sound: 0 },
    { name: "জাতীয় পার্ক - Jim Corbett National Park ", image: require('../../assets/jim.jpg'), sound: 0 },
    { name: "জাতীয় গ্রন্থাগার - ন্যাশনাল লাইব্রেরি, কলকাতা ", image: require('../../assets/lational.jpg'), sound: 0 }];
    setdataArray(tempArr);
  }

  const getNationaBangladesh = () => {
    let tempArr = [{ name: "জাতীয় ভাষা - বাংলা ", image: require('../../assets/bangla.png'), sound: 0 },
    { name: "জাতীয় ফুল - শাপলা ", image: require('../../assets/saluk.jpg'), sound: 0 },
    { name: "জাতীয় ফল - কাঁঠাল ", image: require('../../assets/katal.jpg'), sound: 0 },
    { name: "জাতীয় পশু - রয়েল ব্যাঙ্গর টাইগার ", image: require('../../assets/royal.jpg'), sound: 0 },
    { name: "জাতীয় পাখি - দোয়েল ", image: require('../../assets/doyel.jpg'), sound: 0 },
    { name: "জাতীয় মাছ - ইলিশ ", image: require('../../assets/ilish.jpg'), sound: 0 },
    { name: "জাতীয় গাছ - আম গাছ ", image: require('../../assets/mango.jpg'), sound: 0 },
    { name: "জাতীয় বন - সুন্দরবন ", image: require('../../assets/sundarban.jpg'), sound: 0 },
    { name: "জাতীয় পতাকা - সবুজের মাঝে লাল বৃত্ত ", image: require('../../assets/bangladesh.jpg'), sound: 0 },
    { name: "জাতীয় সংগীত - আমার সোনার বাংলা ", image: require('../../assets/sonar_bangla.jpg'), sound: 0 },
    { name: "জাতীয় কবি - কাজী নজরুল ইসলাম ", image: require('../../assets/nazrul.jpg'), sound: 0 },
    { name: "জাতীয় ধর্ম - ইসলাম ", image: require('../../assets/islam.jpg'), sound: 0 },
    { name: "জাতীয় মসজিদ - বায়তুল মোকাররম ", image: require('../../assets/masjid.jpg'), sound: 0 },
    { name: "জাতীয় দিবস - ২৬ শে মার্চ ", image: require('../../assets/independance_bangla.jpg'), sound: 0 },
    { name: "জাতীয় খেলা - কাবাডি ", image: require('../../assets/kabadi.jpg'), sound: 0 },
    { name: "জাতীয় পার্ক - শহীদ জিয়া পার্ক ", image: require('../../assets/park.jpg'), sound: 0 },
    { name: "জাতীয় স্টেডিয়াম - বঙ্গবদ্ধু স্টেডিয়াম ", image: require('../../assets/stadium_bang.jpg'), sound: 0 },
    { name: "জাতীয় গ্রন্থাগার - শেরে বাংলা নগর,আগারগাঁও ", image: require('../../assets/library_bang.jpg'), sound: 0 },
    ];
    setdataArray(tempArr);
  }

  const getNationalAnimals = () => {
    let tempArr = [{ name: "গরু - Cow", image: require('../../assets/cow.jpg'), sound: 'cow.m4a' },
    { name: "কুকুর - Dog", image: require('../../assets/dog.jpg'), sound: 'dog.m4a' },
    { name: "বিড়াল - Cat", image: require('../../assets/cat.jpg'), sound: 'cat.m4a' },
    { name: "ছাগল - Goat", image: require('../../assets/anmgoat.png'), sound: 'sagol.m4a' },
    { name: "মুরগি - Hen", image: require('../../assets/hen.jpg'), sound: 'murgi.m4a' },
    { name: "হাতি - Elephant", image: require('../../assets/eforele.png'), sound: 'hati.m4a' },
    { name: "বাঘ - Tiget", image: require('../../assets/tiger.jpg'), sound: 'tiger_b.m4a' },
    { name: "সিংহ - Lion", image: require('../../assets/roar_lion.jpg'), sound: 'lion.m4a' },
    { name: "বাঁদর - Monkey", image: require('../../assets/anmmonkey.png'), sound: 'monkey.m4a' },
    { name: "ভেড়া - Sheep", image: require('../../assets/sheep.jpg'), sound: 'vera.m4a' },
    { name: "হাঁস - Duck", image: require('../../assets/duck.jpg'), sound: 'duck.m4a' },
    { name: "কুমির - Crocodile", image: require('../../assets/crocodile.jpg'), sound: 'kumir.m4a' },
    { name: "শেয়াল - Fox", image: require('../../assets/fox.jpg'), sound: 'fox.m4a' },
    { name: "ভাল্লুক - Bear", image: require('../../assets/bear.jpg'), sound: 'bear_v.m4a' },
    { name: "জিরাফ - Giraffe", image: require('../../assets/anmgiraffe.png'), sound: 'girraff.m4a' },
    { name: "হাইনা - Hyena", image: require('../../assets/hyna.jpg'), sound: 'hyena.m4a' },
    { name: "গরিলা - Gorilla", image: require('../../assets/gorilla.jpg'), sound: 'gorrila.m4a' },
    { name: "শিম্পান্জী - Chimpanzee", image: require('../../assets/chimpanzee.jpg'), sound: 'chimpanzi.m4a' },
    { name: "চিতাবাঘ - Leopard", image: require('../../assets/leopard.jpg'), sound: 'leopard.m4a' },
    { name: "ঘোড়া - Horse", image: require('../../assets/horse.jpg'), sound: 'ghora.m4a' },
    { name: "গাধা - Donkey", image: require('../../assets/dunk.webp'), sound: 'gadha.m4a' },
    { name: "গন্ডার - Rhinoceros", image: require('../../assets/rhyno.jpg'), sound: 'gonder.m4a' },
    { name: "নেকড়ে - Wolf", image: require('../../assets/anmwolf.png'), sound: 'nekre.m4a' }
    ];
    setdataArray(tempArr);
  }

  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ width: responsiveWidth(48), marginTop: responsiveHeight(1.6), marginLeft: responsiveWidth(1.5), marginRight: responsiveWidth(1.5), backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: 7 }} onPress={() => {
      if (item.sound != 0) {
        playSound(dataArray[index].sound)
      }
      if(isNavigateWriteDetails)
      props.navigation.navigate('WriteImgName', { item: item,tag: item.tag})
    }}>
      <Image source={item.image} style={{ height: responsiveFontSize(20), width: responsiveFontSize(20), borderRadius: 10, marginTop: responsiveHeight(3), resizeMode: 'contain' }} />

      <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: '#0e001a', marginTop: responsiveHeight(1.6), marginBottom: responsiveHeight(3) }}>{item.name}</Text>

    </TouchableOpacity>

  );
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={title} onBackPress={() => {
          if (IsSoundEnabled)
            clickSound();
          props.navigation.goBack()
        }} />


        <View style={{ flex: 10, backgroundColor: Color.bgColor }}>
          {dataArray && dataArray.length > 0 ? <FlatList
            numColumns={2}
            style={{ marginTop: 10 }}
            data={dataArray}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> : null}

{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>

      </SafeAreaView>
    );
}
//export default HomeDrawer;
