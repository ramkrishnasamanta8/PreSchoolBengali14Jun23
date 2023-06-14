import * as React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, SafeAreaView } from 'react-native';

 import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
var SQLite = require('react-native-sqlite-storage');
import sound from '../../assets/sound.png';
import arrowRight from '../../assets/arrowRight.png';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default class ContentmentTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        {name:'Asia',image:require('../../assets/asia.png')},
        {name:'Africa',image:require('../../assets/africa_icon.png')},
        {name:'North America',image:require('../../assets/n_america.png')},
        {name:'South America',image:require('../../assets/s_america.png')},
        {name:'Europe',image:require('../../assets/europe_icon.png')},
        {name:'Oceania',image:require('../../assets/oceana.png')},
        {name:'Antarctica',image:require('../../assets/antarctica.png')},
      ],
    };
  }
  componentDidMount() {
    
    
  }
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.white, flexDirection: 'row', marginTop: 1 }}
      onPress={() => {
        if(IsSoundEnabled)
    clickSound();
        this.props.nav.navigation.navigate('ContentmentCountryList', {item:item});
      }}>
      <Image source={item.image} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'contain', margin: responsiveWidth(2) }} />
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: CustomFont.font18, color: Color.fontColor, marginTop: responsiveHeight(2.5), marginLeft: responsiveWidth(3), fontWeight: 'bold', }}>{item.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => txtToSpeak(item.name)}>
          <Image source={sound} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), tintColor: Color.primary }} />
        </TouchableOpacity>

        <Image source={arrowRight} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), marginTop: 10 }} />
      </View>

    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Color.primary }}>
         <View style={{ flex: 1, backgroundColor: Color.white}}>
        <Toolbar color={Color.primary} title={'Contentment'} onBackPress={() =>{
         if(IsSoundEnabled)
         clickSound();
          this.props.nav.navigation.goBack();
        }} />
        <View style={{ flex: 10, backgroundColor: Color.whiteBg}}>
        <FlatList
           //numColumns={3}
            style={{ marginRight: 2,marginTop:2 }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()} />
      {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        
</View>
      </View>
    );
  }

}
