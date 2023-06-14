import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Share, ScrollView, Platform, SafeAreaView } from 'react-native';
import back_blue from '../../assets/back_blue.png';
import previous from '../../assets/previous.png';
import next from '../../assets/next.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
let position = 0;
let whoosh = null;
let isSound = false;
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
export default class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dataArray: [],
      pageIndex: 0,
    };
    isSound = false;
  }

  async componentDidMount() {
    let item = this.props.route.params.item;
    if (item) {
      if (item.id == 1)
        this.getEngNumber();
      else if (item.id == 2)
        this.getBengNumber();
      else if (item.id == 3)
        this.getRomanNumber();

      this.setState({ title: item.name });
    }

  }
  getEngNumber = () => {
    isSound = true;
    let tempArr = [{ number: "Zero", numberImg: require('../../assets/icon_n0.png'), meaningImg: require('../../assets/n1_one.png'), example: "", sound: 1 },
    { number: "One", numberImg: require('../../assets/icon_n1.png'), meaningImg: require('../../assets/n1_one.png'), example: "Aeroplane", sound: 'spelling_01.mp3' },
    { number: "Two", numberImg: require('../../assets/icon_n2.png'), meaningImg: require('../../assets/n2_two.png'), example: "Apple", sound: 'spelling_02.mp3' },
    { number: "Three", numberImg: require('../../assets/icon_n3.png'), meaningImg: require('../../assets/n3_three.png'), example: "Lollipops", sound: 'spelling_03.mp3' },
    { number: "Four", numberImg: require('../../assets/icon_n4.png'), meaningImg: require('../../assets/n4_four.png'), example: "Dolls", sound: 'spelling_04.mp3' },
    { number: "Five", numberImg: require('../../assets/icon_n5.png'), meaningImg: require('../../assets/n5_five.png'), example: "Caps", sound: 'spelling_05.mp3' },
    { number: "Six", numberImg: require('../../assets/icon_n6.png'), meaningImg: require('../../assets/n6_six.png'), example: "Bats", sound: 'spelling_06.mp3' },
    { number: "Seven", numberImg: require('../../assets/icon_n7.png'), meaningImg: require('../../assets/n7_seven.png'), example: "Cars", sound: 'spelling_07.mp3' },
    { number: "Eight", numberImg: require('../../assets/icon_n8.png'), meaningImg: require('../../assets/n8_eigght.png'), example: "Fishes", sound: 'spelling_08.mp3' },
    { number: "Nine", numberImg: require('../../assets/icon_n9.png'), meaningImg: require('../../assets/n9_nine.png'), example: "Drums", sound: 'spelling_09.mp3' },
    { number: "Ten", numberImg: require('../../assets/icon_n10.png'), meaningImg: require('../../assets/n10_ten2.png'), example: "Kites", sound: 'spelling_10.mp3' },
    { number: "Eleven", numberImg: require('../../assets/icon_n11.png'), meaningImg: require('../../assets/n11_eleaven.png'), example: "Leaves", sound: 'spelling_11.mp3' },
    { number: "Twelve", numberImg: require('../../assets/icon_n12.png'), meaningImg: require('../../assets/n12_tweel.png'), example: "Ice Creams", sound: 'spelling_12.mp3' },
    { number: "Thirteen", numberImg: require('../../assets/icon_n13.png'), meaningImg: require('../../assets/n13_thirteen.png'), example: "Ballons", sound: 'spelling_13.mp3' },
    { number: "Fourteen", numberImg: require('../../assets/icon_n14.png'), meaningImg: require('../../assets/n14_fourteen.png'), example: "Pencils", sound: 'spelling_14.mp3' },
    { number: "Fifteen", numberImg: require('../../assets/icon_n15.png'), meaningImg: require('../../assets/n15_fifteen.png'), example: "Flags", sound: 'spelling_15.mp3' },
    { number: "Sixteen", numberImg: require('../../assets/icon_n16.png'), meaningImg: require('../../assets/n16_sixteen.png'), example: "Ducks", sound: 'spelling_16.mp3' },
    { number: "Seventeen", numberImg: require('../../assets/icon_n17.png'), meaningImg: require('../../assets/n17_seventeen.png'), example: "Candles", sound: 'spelling_17.mp3' },
    { number: "Eighteen", numberImg: require('../../assets/icon_n18.png'), meaningImg: require('../../assets/n18_eighteen.png'), example: "Flowers", sound: 'spelling_18.mp3' },
    { number: "Nineteen", numberImg: require('../../assets/icon_n19.png'), meaningImg: require('../../assets/n19_nineteen.png'), example: "Balls", sound: 'spelling_19.mp3' },
    { number: "Twenty", numberImg: require('../../assets/icon_n20.png'), meaningImg: require('../../assets/n20_twenty.png'), example: "Stars", sound: 'spelling_20.mp3' }];
    this.setState({ dataArray: tempArr });
  }
  getBengNumber = () => {
    let tempArr = [
      { color: "#FFFFFF", number: "শুন্য", numberImg: "0", meaningImg: require('../../assets/icon_n0.png'), example: "", sound: 1 },
      { color: "#fe0000", number: "এক", numberImg: "১", meaningImg: require('../../assets/n1_one.png'), example: "Aeroplane", sound: 'spelling_01.mp3' },
      { color: "#029702", number: "দুই", numberImg: "২", meaningImg: require('../../assets/n2_two.png'), example: "Apple", sound: 'spelling_02.mp3' },
      { color: "#ff00fe", number: "তিন", numberImg: "৩", meaningImg: require('../../assets/n3_three.png'), example: "Lollipops", sound: 'spelling_03.mp3' },
      { color: "#7430ff", number: "চার", numberImg: "৪", meaningImg: require('../../assets/n4_four.png'), example: "Dolls", sound: 'spelling_04.mp3' },
      { color: "#DC9900", number: "পাঁচ", numberImg: "৫", meaningImg: require('../../assets/n5_five.png'), example: "Caps", sound: 'spelling_05.mp3' },
      { color: "#3800fd", number: "ছয়", numberImg: "৬", meaningImg: require('../../assets/n6_six.png'), example: "Bats", sound: 'spelling_06.mp3' },
      { color: "#000000", number: "সাত", numberImg: "৭", meaningImg: require('../../assets/n7_seven.png'), example: "Cars", sound: 'spelling_07.mp3' },
      { color: "#0E6E01", number: "আট", numberImg: "৮", meaningImg: require('../../assets/n8_eigght.png'), example: "Fishes", sound: 'spelling_08.mp3' },
      { color: "#ff00fe", number: "নয়", numberImg: "৯", meaningImg: require('../../assets/n9_nine.png'), example: "Drums", sound: 'spelling_09.mp3' },
      { color: "#E0220E", number: "দশ", numberImg: "১০", meaningImg: require('../../assets/n10_ten2.png'), example: "Kites", sound: 'spelling_10.mp3' },
      { color: "#0166fe", number: "এগারো", numberImg: "১১", meaningImg: require('../../assets/n11_eleaven.png'), example: "Leaves", sound: 'spelling_11.mp3' },
      { color: "#b300d5", number: "বারো", numberImg: "১২", meaningImg: require('../../assets/n12_tweel.png'), example: "Ice Creams", sound: 'spelling_12.mp3' },
      { color: "#da8302", number: "তেরো", numberImg: "১৩", meaningImg: require('../../assets/n13_thirteen.png'), example: "Ballons", sound: 'spelling_13.mp3' },
      { color: "#D81B60", number: "চৌদ্দ", numberImg: "১৪", meaningImg: require('../../assets/n14_fourteen.png'), example: "Pencils", sound: 'spelling_14.mp3' },
      { color: "#007500", number: "পনেরো", numberImg: "১৫", meaningImg: require('../../assets/n15_fifteen.png'), example: "Flags", sound: 'spelling_15.mp3' },
      { color: "#3900ff", number: "ষোল", numberImg: "১৬", meaningImg: require('../../assets/n16_sixteen.png'), example: "Ducks", sound: 'spelling_16.mp3' },
      { color: "#fe2f9c", number: "সতেরো", numberImg: "১৭", meaningImg: require('../../assets/n17_seventeen.png'), example: "Candles", sound: 'spelling_17.mp3' },
      { color: "#7a2048", number: "আঠারো", numberImg: "১৮", meaningImg: require('../../assets/n18_eighteen.png'), example: "Flowers", sound: 'spelling_18.mp3' },
      { color: "#008000", number: "ঊনিশ", numberImg: "১৯", meaningImg: require('../../assets/n19_nineteen.png'), example: "Balls", sound: 'spelling_19.mp3' },
      { color: "#00ce01", number: "বিশ", numberImg: "২০", meaningImg: require('../../assets/n20_twenty.png'), example: "Stars", sound: 'spelling_20.mp3' }];
    this.setState({ dataArray: tempArr })
  }
  getRomanNumber = () => {
    let tempArr = [
      { color: 'red', number: "Zero", numberImg: "0", meaningImg: require('../../assets/icon_n0.png'), example: "", sound: 1 },
      { color: "#fe0000", number: "One", numberImg: "I", meaningImg: require('../../assets/n1_one.png'), example: "Aeroplane", sound: 'spelling_01.mp3' },
      { color: "#029702", number: "Two", numberImg: "II", meaningImg: require('../../assets/n2_two.png'), example: "Apple", sound: 'spelling_02.mp3' },
      { color: "#ff00fe", number: "Three", numberImg: "III", meaningImg: require('../../assets/n3_three.png'), example: "Lollipops", sound: 'spelling_03.mp3' },
      { color: "#7430ff", number: "Four", numberImg: "IV", meaningImg: require('../../assets/n4_four.png'), example: "Dolls", sound: 'spelling_04.mp3' },
      { color: "#DC9900", number: "Five", numberImg: "V", meaningImg: require('../../assets/n5_five.png'), example: "Caps", sound: 'spelling_05.mp3' },
      { color: "#3800fd", number: "Six", numberImg: "VI", meaningImg: require('../../assets/n6_six.png'), example: "Bats", sound: 'spelling_06.mp3' },
      { color: "#000000", number: "Seven", numberImg: "VII", meaningImg: require('../../assets/n7_seven.png'), example: "Cars", sound: 'spelling_07.mp3' },
      { color: "#0E6E01", number: "Eight", numberImg: "VIII", meaningImg: require('../../assets/n8_eigght.png'), example: "Fishes", sound: 'spelling_08.mp3' },
      { color: "#ff00fe", number: "Nine", numberImg: "IX", meaningImg: require('../../assets/n9_nine.png'), example: "Drums", sound: 'spelling_09.mp3' },
      { color: "#E0220E", number: "Ten", numberImg: "X", meaningImg: require('../../assets/n10_ten2.png'), example: "Kites", sound: 'spelling_10.mp3' },
      { color: "#0166fe", number: "Eleven", numberImg: "XI", meaningImg: require('../../assets/n11_eleaven.png'), example: "Leaves", sound: 'spelling_11.mp3' },
      { color: "#b300d5", number: "Twelve", numberImg: "XII", meaningImg: require('../../assets/n12_tweel.png'), example: "Ice Creams", sound: 'spelling_12.mp3' },
      { color: "#da8302", number: "Thirteen", numberImg: "XIII", meaningImg: require('../../assets/n13_thirteen.png'), example: "Ballons", sound: 'spelling_13.mp3' },
      { color: "#D81B60", number: "Fourteen", numberImg: "XIV", meaningImg: require('../../assets/n14_fourteen.png'), example: "Pencils", sound: 'spelling_14.mp3' },
      { color: "#007500", number: "Fifteen", numberImg: "XV", meaningImg: require('../../assets/n15_fifteen.png'), example: "Flags", sound: 'spelling_15.mp3' },
      { color: "#3900ff", number: "Sixteen", numberImg: "XVI", meaningImg: require('../../assets/n16_sixteen.png'), example: "Ducks", sound: 'spelling_16.mp3' },
      { color: "#fe2f9c", number: "Seventeen", numberImg: "XVII", meaningImg: require('../../assets/n17_seventeen.png'), example: "Candles", sound: 'spelling_17.mp3' },
      { color: "#7a2048", number: "Eighteen", numberImg: "XVIII", meaningImg: require('../../assets/n18_eighteen.png'), example: "Flowers", sound: 'spelling_18.mp3' },
      { color: "#008000", number: "Nineteen", numberImg: "XIX", meaningImg: require('../../assets/n19_nineteen.png'), example: "Balls", sound: 'spelling_19.mp3' },
      { color: "#00ce01", number: "Twenty", numberImg: "XX", meaningImg: require('../../assets/n20_twenty.png'), example: "Stars", sound: 'spelling_20.mp3' }];
    this.setState({ dataArray: tempArr })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <StatusBar backgroundColor={'#006400'} />
        <View style={{ backgroundColor: '#008000', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: responsiveHeight(7) }}>
          <TouchableOpacity style={{ height: '100%', alignItems: 'center', flexDirection: 'row', marginLeft: 10 }} onPress={() => {
            if(IsSoundEnabled)
            clickSound();
            this.props.navigation.goBack();
            //this.props.route.params.Refresh();
          }}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF' }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>{this.state.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            if(this.state.dataArray[position].sound==1)
            txtToSpeak(this.state.dataArray[position].number)
else
            playSound(this.state.dataArray[position].sound);
          }}>
            <Image source={require('../../assets/loud.png')} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), marginRight: 10, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 10, backgroundColor: Color.white }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            position = e.nativeEvent.position;
            if (position == 0)
              this.setState({ prevShowStatus: false })
            else
              this.setState({ prevShowStatus: true });

            if (position == this.state.dataArray.length - 1)
              this.setState({ nextShowStatus: false })
            else
              this.setState({ nextShowStatus: true });
            this.setState({ pageIndex: position });
            txtToSpeak(this.state.dataArray[position].number)
            setTimeout(() => {
              txtToSpeak(this.state.dataArray[position].example)
            }, 300)

          }} setPage={this.state.pageIndex} ref='viewpager'>
            {this.state.dataArray.map((item, index) => {
              return (
                <View style={{ flex: 1 }}>
                  <View>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>
                 
                  <View style={{ flex: 1.5, alignItems: 'center', }}>
                    <Text style={{ fontSize: CustomFont.font30, color: '#D81B60', marginTop: responsiveHeight(3), fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici' }}> {item.number} </Text>
                    {isSound ? <Image source={item.numberImg} style={{ height: responsiveFontSize(20), width: responsiveFontSize(20), marginTop: responsiveHeight(2), resizeMode: 'contain' }} /> :
                      <Text style={{ fontSize: CustomFont.font50, color: item.color, fontFamily: 'DHF Semangat 2012 Shadow Demo' }}>{item.numberImg}</Text>
                    }

                  </View>
                  <View style={{ flex: .5, alignItems: 'center', justifyContent: 'center' }}>


                  </View>
                  <Text style={{ fontSize: CustomFont.font30, color: '#D81B60', alignSelf: 'center', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici'}}>{item.example}</Text>
                  <View style={{ flex: 1, alignItems: 'center' }}>

                    <Image source={item.meaningImg} style={{ height: responsiveFontSize(25), width: responsiveFontSize(25), resizeMode: 'cover' }} />
                    {this.state.nextShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10 }} onPress={() => {
                      this.refs.viewpager.setPage(++this.state.pageIndex)
                    }}>
                      <Image source={next} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: Color.primary }} />
                    </TouchableOpacity> : null}

                    {this.state.prevShowStatus ? <TouchableOpacity style={{ position: 'absolute', bottom: 10, left: 10 }} onPress={() => {
                      this.refs.viewpager.setPage(--this.state.pageIndex)
                    }}>
                      <Image source={previous} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10, tintColor: Color.primary }} />
                    </TouchableOpacity> : null}

                  </View>

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
