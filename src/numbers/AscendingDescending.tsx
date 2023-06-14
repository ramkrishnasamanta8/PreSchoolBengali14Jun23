import * as React from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler, Animated, StatusBar, ImageBackground, Platform } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ascendingOrder from '../../assets/ascendingOrder.png';
import decending from '../../assets/decending.png';
import bg2 from '../../assets/bg_math.jpg';
import back from '../../assets/back.png';
let maxPosition = 10, minPosition = 0, correctNumber = 1;
import Orientation from 'react-native-orientation';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';
import balloon5 from '../../assets/balloon.png';
import { playSound, txtToSpeak } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
//Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
let selectedPosition = 0, clickPosition = 0;
let tempAnsArr = [[3, 8, 5, 10, 2],[6, 13, 9, 24, 20],  [10, 1, 5, 2, 6],[12, 2, 5, 10, 1], [3, 10, 9, 2, 5], [8, 5, 15, 2, 7],[3, 13, 4, 1, 15], [9, 11, 10, 5, 2], [12, 8, 2, 4, 5], [16, 14, 12, 5, 9], [11, 7, 16, 13, 3], [5, 15, 2, 8, 6], [4, 8, 18, 3, 19], [4, 12, 6, 5, 9], [10, 20, 11, 17, 9], [20, 19, 24, 18, 6], [24, 1, 4, 23, 16], [25, 5, 13, 20, 19], [1, 30, 5, 25, 24], [23, 17, 12, 19, 24], [16, 7, 24, 29, 12], [15, 2, 28, 29, 11]]
export default class AscendingDescending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtAns1: '?',
      txtAns2: '?',
      txtAns3: '?',
      txtAns4: '?',
      txtAns5: '?',
      dataArrayAns: [4, 32, 36, 24, 8],
      answer: 'Choose number',
    };
    Orientation.lockToLandscapeLeft();
    selectedPosition = 0;
    clickPosition = 0;
  }
  componentDidMount() {
    maxPosition = 10;
    minPosition = 0;
    correctNumber = 1;
    setTimeout(() => {
      this.loadData();
    }, 500)
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.back()
      return true;
    })
    let from = this.props.route.params.item.tag;
    if (from == 'ascending') {
      txtToSpeak('arrange number for ascending order')
    }else{
      txtToSpeak('arrange number for descending order')
    }
   
  }
  loadData = () => {
    if (selectedPosition < tempAnsArr.length) {
      clickPosition = 0;
      this.setState({
        dataArrayAns: tempAnsArr[selectedPosition],
        txtAns1: '?',
        txtAns2: '?',
        txtAns3: '?',
        txtAns4: '?',
        txtAns5: '?',
      });
      selectedPosition++;
    } else {
      selectedPosition = 0;
      clickPosition = 0;
      Orientation.lockToPortrait();
      setTimeout(() => {
        this.props.navigation.navigate('CommonMessage', { howmanyback:2 })
      }, 300)
     
    }
//playSound('wow.mp3')
  }
  back = () => {
      playSound('click.mp3');
    Orientation.lockToPortrait();
    setTimeout(() => {
      this.props.navigation.goBack();
      this.props.route.params.Refresh();
    }, 500)
  }


  render() {
    Orientation.lockToLandscapeLeft();
    let from = this.props.route.params.item.tag;
    //console.log('-------'+JSON.stringify(this.state.dataArrayAns))
    return (
      <ImageBackground source={bg2} resizeMode="stretch" style={{ flex: 1,zIndex:99,alignItems:'center' }}>
        <StatusBar hidden />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <ImageBackground source={from == 'ascending' ? ascendingOrder : decending} resizeMode="stretch" style={{ width: responsiveWidth(80), height: responsiveHeight(40), resizeMode: 'cover' }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: CustomFont.font50, color: '#FF0000', marginBottom: from == 'ascending' ? 0 : responsiveHeight(6),fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular', }}>{this.state.txtAns1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: CustomFont.font50, marginBottom: from == 'ascending' ? responsiveHeight(1) : responsiveHeight(4),color:'green',fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular' }}>{this.state.txtAns2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: CustomFont.font50, marginBottom: responsiveHeight(2),color:'#298deb',fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular' }}>{this.state.txtAns3}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: CustomFont.font50, marginBottom: from == 'ascending' ? responsiveHeight(4) : responsiveHeight(1),color:'#9400D3',fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular',textAlign:'center' }}>{this.state.txtAns4}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Text style={{ fontSize: CustomFont.font50, marginBottom: from == 'ascending' ? responsiveHeight(6) : 0,color:'#000',fontFamily: Platform.OS=='ios' ? 'Shrikhand Regular':'shrikhand_regular'  }}>{this.state.txtAns5}</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            {/* <Image source={ascendingOrder} style={{width:responsiveWidth(80),height:responsiveHeight(40),resizeMode:'stretch',backgroundColor:'red'}} /> */}
          </View>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: 10, marginBottom: 0}}>
              {this.state.dataArrayAns && this.state.dataArrayAns.length > 0 ? this.state.dataArrayAns.map((item, index) => {
                return (
                  <ImageBackground source={index ==0 ? balloon1:index ==1 ? balloon2 : index ==2 ? balloon3 :index ==3 ? balloon4 : balloon5} resizeMode="contain" style={{ alignItems: 'center', justifyContent: 'center', marginLeft: responsiveWidth(3) }}>
                  <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
                    onPress={() => {
                      let from = this.props.route.params.item.tag;
                      let result = 0;
                      if (from == 'ascending') {
                        result = Math.min(...this.state.dataArrayAns);
                      } else {
                        result = Math.max(...this.state.dataArrayAns);
                      }

                      if (item == result) {
                        if (clickPosition == 0) {
                          this.setState({ txtAns1: item });
                        } else if (clickPosition == 1) {
                          this.setState({ txtAns2: item });
                        } else if (clickPosition == 2) {
                          this.setState({ txtAns3: item });
                        } else if (clickPosition == 3) {
                          this.setState({ txtAns4: item });
                        } else if (clickPosition == 4) {
                          this.setState({ txtAns5: item });
                        }
                        const index = this.state.dataArrayAns.indexOf(item);
                          if (index > -1) {
                            this.state.dataArrayAns.splice(index, 1); // 2nd parameter means remove one item only
                          }
                          this.setState({ dataArrayAns: this.state.dataArrayAns });
                          if (this.state.dataArrayAns.length == 0) {
                            setTimeout(() => {
                              this.loadData();
                            }, 1500)
                            playSound('claps.mp3')
                          }

                        clickPosition++;
                        playSound('yes.mp3')
                      } else {
                        playSound('no.mp3');
                        this.setState({ answer: 'Wrong' });
                      }
                    }}>
                    <Text style={{ color: Color.white, fontSize: CustomFont.font35, fontWeight: '800', margin:Platform.isPad? responsiveFontSize(1.8):responsiveFontSize(3),fontFamily: 'Gretoon Highlight'}}>{item}</Text>
                  </TouchableOpacity>
                  
                  </ImageBackground>);
              }, this) : null}

            </View>
          </View>


        </View>
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
      </ImageBackground>
    );
  }

}

