import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Platform, SafeAreaView, Linking } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
var SQLite = require('react-native-sqlite-storage');
import world from '../../assets/world.png';
import map from '../../assets/map1.png';
import about from '../../assets/about1.png';
import details from '../../assets/details.png';
import { Link } from '@react-navigation/native';
let countryIndex = 0, db = null;
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
//let imageFlag=require('../../assets/flag/af.jpg');
const CountryDetails=(props) =>{
const [data,setdata]= useState({ "AREA": 652864, "DEMONYM": "Afghan", "WORLD_POPULATION_SHARE_PERCENTAGE": 0.5, "LIFE_EXPECTANCY": 59.6, "flag_image": "af", "OFFICIAL_NAME": "Afghanistan", "POPULATION_DENSITY": 60, "WIKI_PAGE": " ", "GEOGRAPHY": " ", "DIALING_CODE": "93", "TLD": ".af", "COUNTRY_NAME": "Afghanistan", "DEATH_RATE": 14.12, "AREA_RANK": 41, "LANGUAGES": " ", "LONGITUDE": '', "HISTORY": "", "POPULATION": '', "CURRENCY_CODE": "", "POPULATION_GROWTH_RATE_PERCENTAGE": '', "CONTINENT": "", "UNEMPLOYMENT_RATE": 8, "MEDIAN_AGE": 18, "POPULATION_RANK": 37, "ID": 1, "GDP_NOMINAL": '', "CAPITAL": "", "BIRTH_RATE": '', "": '', "CURRENCY": "", "COUNTRY_CODE": "", "LATITUDE": '' });
const [imageFlag,setimageFlag]= useState(require('../../assets/flag/af.jpg'));

useEffect(()=>{

  countryIndex = props.route.params.item.id;
  //imageFlag=  ImageArray[countryIndex - 1].image;
setimageFlag(ImageArray[countryIndex - 1].image)
  //alert(JSON.stringify(countryIndex))
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
  //     data: { "AREA": 652864, "DEMONYM": "Afghan", "WORLD_POPULATION_SHARE_PERCENTAGE": 0.5, "LIFE_EXPECTANCY": 59.6, "flag_image": "af", "OFFICIAL_NAME": "Afghanistan", "POPULATION_DENSITY": 60, "WIKI_PAGE": " ", "GEOGRAPHY": " ", "DIALING_CODE": "93", "TLD": ".af", "COUNTRY_NAME": "Afghanistan", "DEATH_RATE": 14.12, "AREA_RANK": 41, "LANGUAGES": " ", "LONGITUDE": '', "HISTORY": "", "POPULATION": '', "CURRENCY_CODE": "", "POPULATION_GROWTH_RATE_PERCENTAGE": '', "CONTINENT": "", "UNEMPLOYMENT_RATE": 8, "MEDIAN_AGE": 18, "POPULATION_RANK": 37, "ID": 1, "GDP_NOMINAL": '', "CAPITAL": "", "BIRTH_RATE": '', "": '', "CURRENCY": "", "COUNTRY_CODE": "", "LATITUDE": '' },
  //     imageFlag: require('../../assets/flag/af.jpg'),
  //   };
  //   //alert(JSON.stringify(props))
  // }
  
  // componentDidMount() {
  // }
  const getData = () => {
    let dbQuery = 'SELECT * FROM country where ID=' + countryIndex;
    db.transaction(tx => {
      tx.executeSql(dbQuery, [], (tx, results) => {
        //console.log(results);
        let len = results.rows.length;
        let dataArr = [];
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            setdata(row)
            //console.log('------row'+JSON.stringify(row));
            // dataArr.push({
            //   id: row.ID,
            //   name: row.COUNTRY_NAME,
            //   capital: row.CAPITAL
            // });
          }
          // FullArray=dataArr;
          // setState({ dataArray: dataArr });
          //console.log(JSON.stringify(dataArr))
        }
      },
        e => {
          //console.log(e);
        },
      );
    });
  }
  clickOnTab = (index) => {
    settabIndex(index);
  }
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Toolbar title={data.COUNTRY_NAME} onBackPress={() => {
          if(IsSoundEnabled)
          clickSound();
          props.navigation.goBack();
        }} />
        <View style={{ flex: 1, backgroundColor: Color.white }}>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <View style={{ alignItems: 'center' }}>
                <Image source={imageFlag} style={{ height: responsiveFontSize(20), resizeMode: 'contain', }} />
              </View>
              <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: CustomFont.font22, color: Color.primary, marginTop: responsiveHeight(2), marginLeft: responsiveWidth(3), fontWeight: 'bold', }}>{data.COUNTRY_NAME}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor:Color.whiteBg ,marginTop:15,marginBottom:10}}>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{
                if(IsSoundEnabled)
                clickSound();
                props.navigation.navigate('FactOfCountry',{item:data});
              } }>
                  <Image source={about} style={{ height: responsiveFontSize(3.8), width: responsiveFontSize(3.8), marginTop:7}} />
              <Text style={{ fontSize: CustomFont.font16, color: '#005cF9',marginTop:5,marginBottom:7}}>About</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={()=>{
        if(IsSoundEnabled)
    clickSound();
                  props.navigation.navigate('MapScreen',{from:'current'})
                } }>
                  <Image source={map} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4),marginTop:7}} />
              <Text style={{ fontSize: CustomFont.font16, color: '#1f8dba',marginTop:5,marginBottom:7}}>Map</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={() =>{
        if(IsSoundEnabled)
    clickSound();
    props.navigation.navigate('ReadmoreWebview',{url:data.WIKI_PAGE,title:data.COUNTRY_NAME});
                  //Linking.openURL(data.WIKI_PAGE)
                } }>
                  <Image source={details} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), marginTop:7}} />
              <Text style={{ fontSize: CustomFont.font16, color: '#ff6e26',marginTop:5,marginBottom:7}}>Read more</Text>
                </TouchableOpacity>
              </View>


              <View style={{ flex: 1, backgroundColor: Color.whiteBg }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/capital.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Capital</Text>

                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.CAPITAL}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/location.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>location</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.location}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/content.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Contentment</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.CONTINENT}</Text>
                </View>

                {data.parlement ? <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/parlament.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Parlement</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.parlement}</Text>
                </View> : null}



                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/content.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Country Code (ISO)</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.COUNTRY_CODE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/corrency.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Currency & Code</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.CURRENCY} - ({data.CURRENCY_CODE})</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/dial.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Dialing Code</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.DIALING_CODE}</Text>
                </View>


                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/lati.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Latitude</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.LATITUDE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/longi.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Longitude</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.LONGITUDE}</Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/language.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Language</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.LANGUAGES}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/pray.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Religion</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.religion}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/city.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Important City</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.city}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/literacy.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Literacy</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.literacy}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/timezone.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Time Zone</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.timezone}</Text>
                </View>

                {data.flower ? <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/flower.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>National Flower</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.flower}</Text>
                </View> : null}

                {data.animal ? <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/animal.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>National Animal</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.animal}</Text>
                </View> : null}

                {data.bird ? <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/bird.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>National Bird</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.bird}</Text>
                </View> : null}

                {data.game ? <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/game.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>National Game</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.game}</Text>
                </View> : null}


                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/area.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Area</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.AREA} Km²</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/area.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Area Rank</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.AREA_RANK}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/population.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Population Rank</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.POPULATION_RANK}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/population.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Population</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.POPULATION}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/population_groth.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Population Growth Rate</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.POPULATION_GROWTH_RATE_PERCENTAGE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/population_density.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Population Density</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.POPULATION_DENSITY}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/fertilizer.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Fertility Rate</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.FERTILITY_RATE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/life.png')} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(1), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Life Expectancy</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.LIFE_EXPECTANCY}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/birth.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Birth Rate</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.BIRTH_RATE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/death.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Death Rate</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.DEATH_RATE}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/unemployed.png')} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Unemployment Rate</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.UNEMPLOYMENT_RATE}</Text>
                </View>


                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/tourist.png')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Tourist</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.tourist}</Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }}>
                  <Image source={require('../../assets/river.webp')} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginLeft: 5 }} />
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginLeft: responsiveWidth(2), fontWeight: 'bold', flex: 1, marginTop: 20, marginBottom: 20 }}>Important River</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginLeft: responsiveWidth(3), flex: 1.5, textAlign: 'right', marginRight: 10 }}>{data.river}</Text>
                </View>

                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: Color.white, marginTop: 2 }} onPress={() =>{
// Linking.openURL(data.WIKI_PAGE)
props.navigation.navigate('ReadmoreWebview',{url:data.WIKI_PAGE,title:data.COUNTRY_NAME});
                }}>
                  <Text style={{ fontSize: CustomFont.font14, color: Color.fontColor, marginTop: responsiveHeight(1), marginLeft: responsiveWidth(3), }}>Wikipedia</Text>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.primary, marginTop: responsiveHeight(.5), marginLeft: responsiveWidth(3), fontWeight: 'bold', marginBottom: responsiveHeight(1.6), textDecorationLine: 'underline' }}>{data.WIKI_PAGE}</Text>
                </TouchableOpacity>

              </View>
              {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}
export default CountryDetails;