import * as React from 'react';
import { View, Platform, Image, StatusBar, TouchableOpacity, ImageBackground, BackHandler, SafeAreaView } from 'react-native';

import ic_pause from '../../assets/pause2.png';
import play from '../../assets/play.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import Toolbar from '../components/Toolbar';
let position = 0, favTxt = '', id = '';
let whoosh = null;
export default class RhymesListDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [{ id: 0, name: "হাট্টিমা টিম টিম ", image: require('../../assets/hatimatim.webp'), sound: 'hatimatim.mp3',statusBarColor:Color.primary },
      { id: 0, name: "ভোর হলো দোর খোল ", image: require('../../assets/vorhalo.webp'), sound: 'vorhalodor.mp3' ,statusBarColor:'#2432DD'},
      { id: 0, name: "আয়রে আয় টিয়ে ", image: require('../../assets/ayreay_tiye.webp'), sound: 'ayreay_tiye.mp3' ,statusBarColor:'#99EaFF'},
      { id: 0, name: "ওই দেখা যায় তাল গাছ ", image: require('../../assets/oiamder.webp'), sound: 'oidekha_tal.mp3' ,statusBarColor:'#8D9DCC'},
      { id: 0, name: "খোকন খোকন ডাক পাড়ি ", image: require('../../assets/khokan_khokan.webp'), sound: 'khokan_khokan.mp3' ,statusBarColor:'#E6E18E'},
      { id: 0, name: "নোটন নোটন পায়রাগুলি ", image: require('../../assets/noton_noton.webp'), sound: 'noton_noton.mp3' ,statusBarColor:'#5070A5'},
      { id: 0, name: "আতা গাছে তোতা পাখি ", image: require('../../assets/ata_gache.webp'), sound: 'atagache.mp3' ,statusBarColor:'#00b244'},
      { id: 0, name: "আম পাতা জোড়া জোড়া ", image: require('../../assets/ampata.webp'), sound: 'ampata.mp3' ,statusBarColor:'#8ec0d2'},
      { id: 0, name: "আয় আয় চাঁদ মামা", image: require('../../assets/chad_mama.webp'), sound: 'chad_mama.mp3' ,statusBarColor:'#4594d0'},
      { id: 0, name: "খোকন খোকন করে মায় ", image: require('../../assets/khokan_dar.webp'), sound: 'khokan_dar.mp3' ,statusBarColor:'#4cc7f5'},
      { id: 0, name: "ওখানে কে রে? ", image: require('../../assets/okhane.webp'), sound: 'okane_kre.mp3' ,statusBarColor:'#538cc0'},
      { id: 0, name: "তাই তাই তাই ", image: require('../../assets/tai_tai.webp'), sound: 'tai_tai.mp3' ,statusBarColor:'#f29dbb'},
      { id: 0, name: "আমাদের ছোট নদী ", image: require('../../assets/amader_choto.webp'), sound: 'amader_choto.mp3' ,statusBarColor:'#92ac00'},
      { id: 0, name: "আমি হব  ", image: require('../../assets/ami_hobo.webp'), sound: 'ami_hobo.mp3' ,statusBarColor:'#ffed00'},
      { id: 0, name: "বাক বাকুম পায়রা ", image: require('../../assets/bakbakum.webp'), sound: 'bakbakum.mp3' ,statusBarColor:'#160a3a'},
      { id: 0, name: "চাঁদ উঠেছে ফুল ফুটেছে  ", image: require('../../assets/chand_utheche.webp'), sound: 'chad_utheche.mp3' ,statusBarColor:'#2543b9'},
      { id: 0, name: "আয় রে আয় মেনি  ", image: require('../../assets/ayreay_meni.webp'), sound: 'ayreay_meni.mp3' ,statusBarColor:'#f07c21'},
      { id: 0, name: "আয় বৃষ্টি ঝেঁপে ", image: require('../../assets/aybristi.webp'), sound: 'aybristi.mp3' ,statusBarColor:'#47423c'},
      { id: 0, name: "ঘুম পাড়ানি মাসি পিসি  ", image: require('../../assets/ghum_parani.webp'), sound: 'ghumparani.mp3' ,statusBarColor:'#f2cdc2'},
      { id: 0, name: "আমাদের গ্রাম ", image: require('../../assets/amader_gram.webp'), sound: 'amader_gram.mp3' ,statusBarColor:'#55e05a'},
      { id: 0, name: "দোল দোল দুলুনি ", image: require('../../assets/doldol.webp'), sound: 'doldol.mp3' ,statusBarColor:'#526f3c'},
      { id: 0, name: "সিংহ মামা সিংহ মামা ", image: require('../../assets/singha.webp'), sound: 'singha.mp3' ,statusBarColor:'#4596d0'},
      { id: 0, name: "খোকা যাবে শশুর বাড়ি ", image: require('../../assets/khoka_jabe.webp'), sound: 'khokajabesosur.mp3' ,statusBarColor:'#b7c410'},
      { id: 0, name: "চল চল চল উর্দ্ধ গগনে ", image: require('../../assets/chol.webp'), sound: 'colcol.mp3' ,statusBarColor:'#ff2100'},
      { id: 0, name: "খোকা গেলো মাছ ধরতে ", image: require('../../assets/khoka_gelo_mach.webp'), sound: 'khoka_gelo_mach.mp3' ,statusBarColor:'#0087e9'},
      { id: 0, name: "অদূর বাদুড় চালতা বাদুড়  ", image: require('../../assets/adur_badur.webp'), sound: 'adurbadur.mp3' ,statusBarColor:'#669bcb'},
      { id: 0, name: "টাট্টু ঘোড়া পাড়লো ডিম ", image: require('../../assets/tattu_ghora.jpg'), sound: 'tattu.mp3' ,statusBarColor:'#007b14'},
      { id: 0, name: "রামগরুড়ের ছানা ", image: require('../../assets/ramgarurer.jpg'), sound: 'ramgarurer.mp3' ,statusBarColor:'#4d9acf'},
      { id: 0, name: "ঝড় এলো, এলো ঝড় ", image: require('../../assets/ampar.jpg'), sound: 'ampar.mp3' ,statusBarColor:'#2d4169'},
      { id: 0, name: "তাঁতির বাড়ি ব্যাঙের বাসা ", image: require('../../assets/tatirbari.jpg'), sound: 'tatirbari.mp3' ,statusBarColor:'#b00087'},
      ],
      pageIndex: this.props.route.params.index ? this.props.route.params.index : 0,
      prevShowStatus: false,
      nextShowStatus: true,
      isplaying: true,
      statusBarColor: Color.primary,
      txtTitle:'ছোটদের ছড়া',
    };
    position = 0;
  }
  async componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (whoosh) {
        whoosh.stop(() => {
          whoosh.release();
        });
      }
      if (IsSoundEnabled)
        clickSound();
      this.props.navigation.goBack();
      return true;
    })
  }
  componentWillUnmount(){
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
  }
  callNext=()=>{
    alert('lkl')
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        {/* <StatusBar backgroundColor={this.state.statusBarColor} barStyle="light-content" /> */}
        <Toolbar title={this.state.txtTitle} color={this.state.statusBarColor} onBackPress={() => {
          if (whoosh) {
            whoosh.stop(() => {
              whoosh.release();
            });
          }
          if (IsSoundEnabled)
            clickSound();
          this.props.navigation.goBack()
        }} />


        <View style={{ flex: 10 }}>

          <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
            position = e.nativeEvent.position;
            if (position == 0)
              this.setState({ prevShowStatus: false })
            else
              this.setState({ prevShowStatus: true });

            if (position == this.state.dataArray.length - 1)
              this.setState({ nextShowStatus: false })
            else
              this.setState({ nextShowStatus: true });

            if (whoosh) {
              whoosh.stop(() => {
                whoosh.release();
              });
            }
            whoosh = new Sound(Platform.OS == 'android' ? this.state.dataArray[position].sound : 'sound/' + this.state.dataArray[position].sound, Sound.MAIN_BUNDLE, (error) => {
              if (error) {
                console.log('failed to load the sound', error);
                return;
              }
              // Play the sound with an onEnd callback

              whoosh.play((success) => {
                if(success && position < this.state.dataArray.length-1){
                  this.refs.viewpager.setPage(++this.state.pageIndex)
                }
              });

            });
            this.setState({ pageIndex: position,isplaying:true,statusBarColor:this.state.dataArray[position].statusBarColor,txtTitle:this.state.dataArray[position].name });
          }} setPage={this.state.pageIndex} ref='viewpager'>

            {this.state.dataArray.map((item, index) => {
              return (
                <View style={{ backgroundColor: Color.white }}>

                  <ImageBackground source={item.image} resizeMode="stretch" style={{ flex: 1 }}>

                    {this.state.nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(15), right: 10 }} onPress={() => {
                      this.refs.viewpager.setPage(++this.state.pageIndex)
                    }}>
                      <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                    </TouchableOpacity> : null}

                    <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(10), right: responsiveWidth(40) }} onPress={() => {
                      this.setState({ isplaying: !this.state.isplaying })
                      if (this.state.isplaying) {
                        whoosh.pause();
                      } else {
                        whoosh.play((success) => {
                          if (success) {
                            //this.callNext();
                              //console.log(position+'--------------suc'+this.state.dataArray.length);
                            if(position < this.state.dataArray.length-1){
                              this.refs.viewpager.setPage(++this.state.pageIndex)
                            }
                            

                          } else {
                            console.log('playback failed due to audio decoding errors');
                          }

                        });
                      }
                    }}>
                      <Image source={this.state.isplaying ? ic_pause : play} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                    </TouchableOpacity>

                    {this.state.prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(15), left: 10 }} onPress={() => {
                      this.refs.viewpager.setPage(--this.state.pageIndex)
                    }}>
                      <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
                    </TouchableOpacity> : null}
                    <View style={{ width: '100%', position: 'absolute', bottom: 0, alignItems: 'center' }}>
                    {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                        unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                        size={BannerAdSize.BANNER}
                      />}
                    </View>
                  </ImageBackground>
                </View>
              );
            }, this)}


          </ViewPager>
        </View>

      </SafeAreaView>
    );
  }

}
//export default HomeDrawer;
