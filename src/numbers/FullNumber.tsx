import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, FlatList, ScrollView, Platform, SafeAreaView } from 'react-native';
import Orientation from 'react-native-orientation';

import checked from '../../assets/checked.png';
import un_check from '../../assets/un_check.png';
import next from '../../assets/next.png';
import Toolbar from '../components/Toolbar';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('ben-IE');
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
var Sound = require('react-native-sound');
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
let position = 0, favTxt = '', id = '';
let whoosh = null;
let isSound = false;

import Snackbar from 'react-native-snackbar';
let counter=0;
var sliderTimer = null;
export default class FullNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      pageIndex: 0,
      selectNumberIndex:-1,
    };
    this.flatListRef = React.createRef(null);
    counter=0;
  }

  async componentDidMount() {

    this.getBengNumber();
  }
  getBengNumber = () => {
    let tempArr = [{ number: "0", name: "শুণ্য" },
    { number: "১", name: "এক" },
    { number: "২", name: "দুই" },
    { number: "৩", name: "তিন" },
    { number: "৪", name: "চার" },
    { number: "৫", name: "পাঁচ" },
    { number: "৬", name: "ছয়" },
    { number: "৭", name: "সাত" },
    { number: "৮", name: "আট" },
    { number: "৯", name: "নয়" },
    { number: "১০", name: "দশ" },
    { number: "১১", name: "এগারো" },
    { number: "১২", name: "বারো" },
    { number: "১৩", name: "তেরো" },
    { number: "১৪", name: "চোদ্দ" },
    { number: "১৫", name: "পনেরো" },
    { number: "১৬", name: "ষোল" },
    { number: "১৭", name: "সতেরো" },
    { number: "১৮", name: "আঠারো" },
    { number: "১৯", name: "উনিশ" },
    { number: "২০", name: "কুড়ি" },
    { number: "২১", name: "একুশ" },
    { number: "২২", name: "বাইশ" },
    { number: "২৩", name: "তেইশ" },
    { number: "২৪", name: "চব্বিশ" },
    { number: "২৫", name: "পঁচিশ" },
    { number: "২৬", name: "ছাব্বিশ" },
    { number: "২৭", name: "সাতাশ" },
    { number: "২৮", name: "আঠাশ" },
    { number: "২৯", name: "ঊনত্রিশ" },
    { number: "৩০", name: "ত্রিশ" },
    { number: "৩১", name: "একত্রিশ" },
    { number: "৩২", name: "বত্রিশ" },
    { number: "৩৩", name: "তেত্রিশ" },
    { number: "৩৪", name: "চৌত্রিশ" },
    { number: "৩৫", name: "পঁয়ত্রিশ" },
    { number: "৩৬", name: "ছত্রিশ" },
    { number: "৩৭", name: "সাঁয়ত্রিশ" },
    { number: "৩৮", name: "আটত্রিশ" },
    { number: "৩৯", name: "ঊনচল্লিশ" },
    { number: "৪০", name: "চল্লিশ" },
    { number: "৪১", name: "একচল্লিশ" },
    { number: "৪২", name: "বিয়াল্লিশ" },
    { number: "৪৩", name: "তেতাল্লিশ" },
    { number: "৪৪", name: "চুয়াল্লিশ" },
    { number: "৪৫", name: "পঁয়তাল্লিশ" },
    { number: "৪৬", name: "ছেচল্লিশ" },
    { number: "৪৭", name: "সাতচল্লিশ" },
    { number: "৪৮", name: "আটচল্লিশ" },
    { number: "৪৯", name: "ঊনপঞ্চাশ" },
    { number: "৫০", name: "পঞ্চাশ" },
    { number: "৫১", name: "একান্ন" },
    { number: "৫২", name: "বাহান্ন" },
    { number: "৫৩", name: "তিপ্পান্ন" },
    { number: "৫৪", name: "চুয়ান্ন" },
    { number: "৫৫", name: "পঞ্চান্ন" },
    { number: "৫৬", name: "ছাপ্পান্ন" },
    { number: "৫৭", name: "সাতান্ন" },
    { number: "৫৮", name: "আটান্ন" },
    { number: "৫৯", name: "ঊনষাট" },
    { number: "৬০", name: "ষাট" },
    { number: "৬১", name: "একষট্টি" },
    { number: "৬২", name: "বাষট্টি" },
    { number: "৬৩", name: "তেষট্টি" },
    { number: "৬৪", name: "চৌষট্টি" },
    { number: "৬৫", name: "পঁয়ষট্টি" },
    { number: "৬৬", name: "ছেষট্টি" },
    { number: "৬৭", name: "সাতষট্টি" },
    { number: "৬৮", name: "আটষট্টি" },
    { number: "৬৯", name: "ঊনসত্তর" },
    { number: "৭০", name: "সত্তর" },
    { number: "৭১", name: "একাত্তর" },
    { number: "৭২", name: "বাহাত্তর" },
    { number: "৭৩", name: "তিয়াত্তর" },
    { number: "৭৪", name: "চুয়াত্তর" },
    { number: "৭৫", name: "পঁচাত্তর" },
    { number: "৭৬", name: "ছিয়াত্তর" },
    { number: "৭৭", name: "সাতাত্তর" },
    { number: "৭৮", name: "আটাত্তর" },
    { number: "৭৯", name: "ঊনআশি" },
    { number: "৮০", name: "আশি" },
    { number: "৮১", name: "একাশি" },
    { number: "৮২", name: "বিরাশি" },
    { number: "৮৩", name: "তিরাশি" },
    { number: "৮৪", name: "চুরাশি" },
    { number: "৮৫", name: "পঁচাশি" },
    { number: "৮৬", name: "ছিয়াশি" },
    { number: "৮৭", name: "সাতাশি" },
    { number: "৮৮", name: "অষ্টআশি" },
    { number: "৮৯", name: "ঊননব্বই" },
    { number: "৯০", name: "নব্বই" },
    { number: "৯১", name: "একানব্বই" },
    { number: "৯২", name: "বিরানব্বই" },
    { number: "৯৩", name: "তিরানব্বই" },
    { number: "৯৪", name: "চুরানব্বই" },
    { number: "৯৫", name: "পঁচানব্বই" },
    { number: "৯৬", name: "ছিয়ানব্বই" },
    { number: "৯৭", name: "সাতানব্বই" },
    { number: "৯৮", name: "আটানব্বই" },
    { number: "৯৯", name: "নিরানব্বই" },
    { number: "১০০", name: "একশ’" },
    ]
    this.setState({ dataArray: tempArr });
  }
  getEngNumber = () => {
    let tempArr = [{ number: "0", name: "zero" },
    { number: "1", name: "one" },
    { number: "2", name: "two" },
    { number: "3", name: "three" },
    { number: "4", name: "four" },
    { number: "5", name: "five" },
    { number: "6", name: "six" },
    { number: "7", name: "seven" },
    { number: "8", name: "eight" },
    { number: "9", name: "nine" },
    { number: "10", name: "ten" },
    { number: "11", name: "eleven" },
    { number: "12", name: "twelve" },
    { number: "13", name: "thirteen" },
    { number: "14", name: "fourteen" },
    { number: "15", name: "fifteen" },
    { number: "16", name: "sixteen" },
    { number: "17", name: "seventeen" },
    { number: "18", name: "eighteen" },
    { number: "19", name: "nineteen" },
    { number: "20", name: "twenty" },
    { number: "21", name: "twenty one" },
    { number: "22", name: "twenty two" },
    { number: "23", name: "twenty three" },
    { number: "24", name: "twenty four" },
    { number: "25", name: "twenty five" },
    { number: "26", name: "twenty six" },
    { number: "27", name: "twenty seven" },
    { number: "28", name: "twenty eight" },
    { number: "29", name: "twenty nine" },
    { number: "30", name: "thirty" },
    { number: "31", name: "thirty one" },
    { number: "32", name: "thirty two" },
    { number: "33", name: "thirty three" },
    { number: "34", name: "thirty-four" },
    { number: "35", name: "thirty five" },
    { number: "36", name: "thirty six" },
    { number: "37", name: "thirty seven" },
    { number: "38", name: "thirty eight" },
    { number: "39", name: "thirty nine" },
    { number: "40", name: "forty" },
    { number: "41", name: "forty one" },
    { number: "42", name: "forty two" },
    { number: "43", name: "forty three" },
    { number: "44", name: "forty four" },
    { number: "45", name: "forty five" },
    { number: "46", name: "forty six" },
    { number: "47", name: "forty seven" },
    { number: "48", name: "forty eight" },
    { number: "49", name: "forty nine" },
    { number: "50", name: "fifty" },
    { number: "51", name: "fifty one" },
    { number: "52", name: "fifty two" },
    { number: "53", name: "fifty three" },
    { number: "54", name: "fifty four" },
    { number: "55", name: "fifty five" },
    { number: "56", name: "fifty six" },
    { number: "57", name: "fifty seven" },
    { number: "58", name: "fifty eight" },
    { number: "59", name: "fifty nine" },
    { number: "60", name: "sixty" },
    { number: "61", name: "sixty one" },
    { number: "62", name: "sixty two" },
    { number: "63", name: "sixty three" },
    { number: "64", name: "sixty four" },
    { number: "65", name: "sixty five" },
    { number: "66", name: "sixty six" },
    { number: "67", name: "sixty seven" },
    { number: "68", name: "sixty eight" },
    { number: "69", name: "sixty nine" },
    { number: "70", name: "seventy" },
    { number: "71", name: "seventy one" },
    { number: "72", name: "seventy two" },
    { number: "73", name: "seventy three" },
    { number: "74", name: "seventy four" },
    { number: "75", name: "seventy five" },
    { number: "76", name: "seventy six" },
    { number: "77", name: "seventy seven" },
    { number: "78", name: "seventy eight" },
    { number: "79", name: "seventy nine" },
    { number: "80", name: "eighty" },
    { number: "81", name: "eighty one" },
    { number: "82", name: "eighty two" },
    { number: "83", name: "eighty three" },
    { number: "84", name: "eighty four" },
    { number: "85", name: "eighty five" },
    { number: "86", name: "eighty six" },
    { number: "87", name: "eighty seven" },
    { number: "88", name: "eighty eight" },
    { number: "89", name: "eighty nine" },
    { number: "90", name: "ninety" },
    { number: "91", name: "ninety one" },
    { number: "92", name: "ninety two" },
    { number: "93", name: "ninety three" },
    { number: "94", name: "ninety four" },
    { number: "95", name: "ninety five" },
    { number: "96", name: "ninety six" },
    { number: "97", name: "ninety seven" },
    { number: "98", name: "ninety eight" },
    { number: "99", name: "ninety nine" },
    { number: "100", name: "one hundred" },];
    this.setState({ dataArray: tempArr });
  }

  errorSound = () => {
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
    whoosh = new Sound('sound/try_again.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

    });
  }
  succesSound = () => {
    if (whoosh) {
      whoosh.stop(() => {
        whoosh.release();
      });
    }
    whoosh = new Sound('sound/guess-success.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Play the sound with an onEnd callback

      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

    });
    setTimeout(() => {
      this.refs.viewpager.setPage(++this.state.pageIndex)
    }, 2000)

  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#03DAC5', borderColor: Color.white, borderRadius: 6, borderWidth: 2, margin: 2 }} onPress={() => {
      this.setState({selectNumberIndex:index})
      if(this.state.pageIndex==0)
      Tts.speak(index+"")
      else
      Tts.speak(item.name)
    }} showImage={require('../../assets/play.png')} isClickOnImage={()=>{
      counter=-1;
      Snackbar.show({ text: 'Please Wait..', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
      this.playAlphabets();
    }}>
      <Text style={{ fontSize: CustomFont.font40, fontWeight: 'bold', color: this.state.selectNumberIndex==index ? Color.red : Color.white, marginTop: responsiveHeight(2), textAlign: 'center', }}>{item.number}</Text>
      <Text style={{ fontSize: CustomFont.font16, fontWeight: '400', color: Color.white, fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginBottom: responsiveHeight(2), textAlign: 'center', }}>{item.name}</Text>
    </TouchableOpacity>
  );

  playAlphabets=()=>{
    if(sliderTimer)
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => {
    counter++;

    if(counter <this.state.dataArray.length){
    this.setState({selectNumberIndex:counter});

    if(this.state.pageIndex==0)
    Tts.speak(counter+"")
    else
    Tts.speak(this.state.dataArray[counter].name);
    if(counter>11 && counter%3==0)
    this.flatListRef.scrollToOffset({ animated: true, offset: responsiveHeight(counter * 5)-50 });
  }else{
    clearInterval(sliderTimer);
    sliderTimer=null;
  }
  console.log('-----'+counter);
  }, 1500);
    
  
}
componentWillUnmount(){
  clearInterval(sliderTimer);
    sliderTimer=null;
}
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <StatusBar backgroundColor={'#006400'} />
        <Toolbar title={'১ থেকে ১০০ পর্যন্ত '} showImage={require('../../assets/play.png')} onBackPress={() =>{
          if(IsSoundEnabled)
          clickSound();
           this.props.navigation.goBack()
        }} isClickOnImage={()=>{
          counter=-1;
          Snackbar.show({ text: 'Please Wait..', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
          this.playAlphabets();
        }} />
        <View style={{ flex: 1, backgroundColor: '#52f8c8' }}>
          <View style={{ flexDirection: 'row',marginTop:responsiveHeight(1) }}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent:'center' }} onPress={()=> {
              clearInterval(sliderTimer);
              sliderTimer=null;
              
              this.setState({pageIndex:0,selectNumberIndex:-1})
              this.getBengNumber()
              Tts.setDefaultLanguage('ben-IE');
              }}>
              <Image source={this.state.pageIndex ==0 ? checked:un_check} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', tintColor: Color.black }} />
              <Text style={{ fontSize: CustomFont.font16, fontWeight: '400', color: Color.black, fontFamily:Platform.OS == 'ios' ?'Comic Sans MS':'comici', textAlign: 'center',marginLeft:10 }}>১,২,৩,৪</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' ,justifyContent:'center'}}   onPress={()=> {
              clearInterval(sliderTimer);
              sliderTimer=null;

              this.setState({pageIndex:1,selectNumberIndex:-1})
              this.getEngNumber()
              Tts.setDefaultLanguage('en-IE');
              }}>
              <Image source={this.state.pageIndex ==1 ? checked:un_check} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', tintColor: Color.black }} />
              <Text style={{ fontSize: CustomFont.font16, fontWeight: '400', color: Color.black, fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', textAlign: 'center',marginLeft:10 }}>1,2,3,4</Text>
            </TouchableOpacity>
          </View>
          {this.state.dataArray && this.state.dataArray.length > 0 ? <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
            numColumns={3}
            style={{ marginTop: 10 }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item, index) => index.toString()} /> : null}
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

}
//export default HomeDrawer;
