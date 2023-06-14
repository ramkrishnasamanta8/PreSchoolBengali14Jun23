import * as React from 'react';
import { View, Platform, Image, Text, TouchableOpacity, FlatList, StatusBar, ImageBackground } from 'react-native';
//import Orientation from 'react-native-orientation';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import bgImage from '../../assets/bg.png';
import CustomFont from '../components/CustomFont';
import back from '../../assets/back.png';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let tableArr = [4, 6, 8, 10, 3, 5, 9, 7, 11, 5, 3, 12, 15, 18, 14, 16, 15, 20, 21, 30, 25, 40, 50, 45, 60];
let tableResultArr = [[4, 32, 36, 24, 8, 12, 16, 20, 40, 28,], [24, 60, 30, 18, 42, 6, 12, 36, 48, 54], [40, 8, 72, 80, 16, 24, 32, 48, 56, 64,]
  , [10, 20, 30, 60, 70, 80, 90, 40, 50, 100], [3, 18, 21, 6, 9, 12, 15, 30, 24, 27,], [5, 10, 30, 35, 50, 15, 20, 25, 40, 45,]
  , [45, 54, 63, 9, 18, 27, 36, 72, 81, 90,], [7, 63, 70, 14, 21, 28, 56, 35, 42, 49], [11, 22, 33, 77, 88, 110, 44, 55, 99, 66,]
  , [25, 40, 45, 50, 30, 35, 5, 10, 15, 20,], [3, 6, 9, 12, 21, 24, 27, 15, 18, 30], [108, 120, 36, 48, 60, 72, 84, 96, 12, 24,]
  , [45, 60, 75, 105, 135, 150, 120, 15, 30, 90,], [72, 90, 126, 162, 180, 144, 18, 36, 54, 108,], [14, 28, 70, 84, 42, 56, 126, 140, 98, 112,]
  , [80, 96, 112, 16, 32, 144, 160, 48, 64, 128,], [15, 105, 120, 90, 150, 135, 30, 45, 60, 75,], [120, 140, 160, 80, 100, 180, 20, 40, 60, 200]
  , [21, 42, 168, 189, 63, 126, 147, 84, 105, 210], [210, 240, 30, 120, 150, 180, 60, 90, 270, 300], [200, 225, 25, 50, 75, 150, 175, 100, 125, 250],
[40, 280, 320, 80, 200, 240, 120, 160, 360, 400], [300, 350, 400, 50, 250, 450, 100, 150, 200, 500], [180, 225, 270, 45, 405, 90, 135, 315, 360, 450], [60, 240, 300, 360, 120, 480, 540, 600, 180, 420,]
];
let selectedTableIndex = 0, AnsSelect = 0, TableNumber = 4;
import { playSound, txtToSpeak,clickSound  } from '../components/CommonFunc';


export default class TableCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
        { title: '4 x 16' },
      ],
      dataArrayAns: [4, 32, 36, 24, 8, 12, 16, 20, 40, 28,],
      title: '4',
      answer: 'Choose number to make Table',


    };
    selectedTableIndex = 0; AnsSelect = 0; TableNumber = 4;
  }
  componentDidMount() {
    this.loadTable();
  }
  loadTable = () => {
    AnsSelect = 0;
    if (selectedTableIndex == 25)
      selectedTableIndex = 0;
    TableNumber = tableArr[selectedTableIndex];
    let tempArr = [];
    //let b='';
    for (let i = 1; i < 11; i++) {
      tempArr.push({ title: i + ' x ' + TableNumber, answer: i * TableNumber, isSelect: false, speechValue: i + " " + TableNumber + " ja " + i * TableNumber })
      //b+=','+i*TableNumber
    }
    //console.log(b)
    let ansArr=[...tableResultArr[selectedTableIndex]];
    this.setState({ dataArray: tempArr, dataArrayAns: ansArr, title: TableNumber });
    selectedTableIndex++;
    txtToSpeak('make the table of ' + TableNumber);
  }
  renderList = ({ item, index }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: responsiveHeight(1.6), alignItems: 'center' }}>
      <View style={{ backgroundColor: '#f8cc6f', borderColor: '#013331', borderWidth: 1, borderRadius: 15 }}>
        <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700', margin: responsiveWidth(2), marginLeft: responsiveWidth(12), marginRight: responsiveWidth(12), }}>{item.title}</Text>
      </View>
      <Text style={{ color: Color.black, fontSize: CustomFont.font30, marginLeft: responsiveWidth(5), fontWeight: '700' }}>=</Text>
      <TouchableOpacity style={{ backgroundColor: '#f8cc6f', borderColor: '#013331', borderWidth: 1, borderRadius: 12, marginLeft: responsiveWidth(5) }} onPress={()=>{
        txtToSpeak(this.state.dataArray[index].speechValue);
      }}>
        <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700', margin: responsiveWidth(2), marginLeft: responsiveWidth(9), marginRight: responsiveWidth(9), }}>{item.isSelect ? item.answer : '?'}</Text>
      </TouchableOpacity>
    </View>
  );
  SoundPlay = (type) => {
    playSound(type == 'success' ?'claps.mp3':'no.mp3' )
  }
  render() {
    console.log(JSON.stringify(this.state.dataArrayAns))
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content"/>
        <View style={{ flex: 1, }}>
          <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700', textAlign: 'center', marginTop: responsiveHeight(5), }}>Table of {this.state.title} </Text>
          <FlatList
            style={{ marginTop: responsiveHeight(2), marginBottom: 20 }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()} />
          <Text style={{ fontSize: CustomFont.font20, fontWeight: '800', color: this.state.answer == 'Wrong' ? 'red' : '#3105bc', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', textAlign: 'center', marginBottom: 7 }}>{this.state.answer}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: 10, marginBottom: responsiveHeight(3) }}>
            {this.state.dataArrayAns && this.state.dataArrayAns.length > 0 ? this.state.dataArrayAns.map((item, index) => {
              return (
                <TouchableOpacity style={{ backgroundColor: '#90eec3', borderRadius: 10, borderColor: '#003334', borderWidth: 2, marginRight: 10, marginTop: 10 }}
                  onPress={() => {
                    let result = TableNumber * (AnsSelect + 1)
                    if (item == result) {
                      this.state.dataArray[AnsSelect].isSelect = true;
                      this.setState({ dataArray: this.state.dataArray });

                      const index = this.state.dataArrayAns.indexOf(item);
                      if (index > -1) {
                        this.state.dataArrayAns.splice(index, 1); // 2nd parameter means remove one item only
                      }
                      this.setState({ dataArrayAns: this.state.dataArrayAns });
                      if (this.state.dataArrayAns.length == 0) {
                        setTimeout(() => {
                          this.loadTable();
                        }, 1500);
                        playSound('claps.mp3');
                      }
                      txtToSpeak(this.state.dataArray[AnsSelect].speechValue);
                      AnsSelect++;
                      this.setState({ answer: 'Correct' });
                    } else {
                      playSound('no.mp3' );
                      this.setState({ answer: 'Wrong' });
                    }
                  }}>
                  <Text style={{ color: Color.fontColor, fontSize: CustomFont.font20, fontWeight: '800', marginLeft: responsiveWidth(4), marginRight: responsiveWidth(4), marginTop: 10, marginBottom: 10 }}>{item}</Text>
                </TouchableOpacity>);
            }, this) : null}

          </View>
          {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        <TouchableOpacity style={{ position: 'absolute', top:Platform.OS == 'ios' ? responsiveHeight(4):0, left: 0, zIndex: 99 }} onPress={() => {
          playSound('click.mp3');
          this.props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>



      </ImageBackground>
    );
  }

}
//export default HomeDrawer;
