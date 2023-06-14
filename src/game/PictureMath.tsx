import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Alert, BackHandler, ImageBackground, StatusBar ,Platform} from 'react-native';
import Orientation from 'react-native-orientation';
import back from '../../assets/back.png';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';

import bg_math from '../../assets/bg_math.jpg';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
import { playSound, txtToSpeak } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let pageIndex=0;
export default class PictureMath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      correctAns: '?'
    };
    Orientation.lockToLandscapeRight();
  }
  async componentDidMount() {
    let tag = this.props.route.params.item.tag;
    if (tag) {
      setTimeout(()=>{
        this.Compare();
      },1000)
        
    }

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.back();
      return true;
    })
  }

  Compare = () => {
    let tempArr = [
      { question1: [3,3,3,], question2: [4,4,4,4,], image: require('../../assets/mango_count.png'),sign:'+',ans1:'5',ans2:'7',ans3:'6' },
      { question1: [4,4,4,4,5], question2: [3,3,3,], image: require('../../assets/banana_count.png') ,sign:'+',ans1:'8',ans2:'12',ans3:'7' },
      { question1: [5,5,5,5,5,], question2: [5,5,5,5,5,], image: require('../../assets/penguin.png') ,sign:'+',ans1:'9',ans2:'15',ans3:'10' },
      { question1: [5, 5, 5, 5, 5, 5, 5, 5,], question2: [3, 3, 3], image: require('../../assets/nectarine.png') ,sign:'-',ans1:'5',ans2:'7',ans3:'8' },
      { question1: [10,10,10,10,10,10,10,10,10,10,], question2: [8,8,8,8,8,8,8,8,], image: require('../../assets/watermelon.png') ,sign:'-',ans1:'2',ans2:'4',ans3:'3' },
      { question1: [6,6,6,6,6,6,], question2: [6,6,6,6,6,6,], image: require('../../assets/grapes.png') ,sign:'+',ans1:'15',ans2:'13',ans3:'12' },
      { question1: [4,4,4,4,], question2: [5,5,5,5,5], image: require('../../assets/flower.png') ,sign:'+',ans1:'11',ans2:'9',ans3:'10' },
      { question1: [12,12,12,12,12,12,12,12,12,12,12,12,], question2: [11,11,11,11,11,11,11,11,11,11,11,], image: require('../../assets/bird.png') ,sign:'-',ans1:'2',ans2:'1',ans3:'3' },
      { question1: [9,9,9,9,9,9,9,9,9,], question2: [9,9,9,9,9,9,9,9,9,], image: require('../../assets/asparagus.png') ,sign:'-',ans1:'-1',ans2:'0',ans3:'1' },
      { question1: [8,8,8,8,8,8,8,8,], question2: [6,6,6,6,6,6,], image: require('../../assets/avocado.png') ,sign:'-',ans1:'3',ans2:'1',ans3:'2' },
      { question1: [6,6,6,6,6,6,], question2: [8,8,8,8,8,8,8,8,], image: require('../../assets/heart.png') ,sign:'+',ans1:'14',ans2:'15',ans3:'13' },
      { question1: [12,12,12,12,12,12,12,12,12,12,12,12,], question2: [9,9,9,9,9,9,9,9,9,], image: require('../../assets/kiwi.png') ,sign:'-',ans1:'2',ans2:'4',ans3:'3' },
      { question1: [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,], question2: [10,10,10,10,10,10,10,10,10,10,], image: require('../../assets/onions.png') ,sign:'-',ans1:'5',ans2:'7',ans3:'6' },
      { question1: [7,7,7,7,7,7,7,], question2: [9,9,9,9,9,9,9,9,9,], image: require('../../assets/organge.png') ,sign:'+',ans1:'14',ans2:'16',ans3:'15' },
      { question1: [11,11,11,11,11,11,11,11,11,11,11,], question2: [7,7,7,7,7,7,7,], image: require('../../assets/peach.png') ,sign:'-',ans1:'5',ans2:'3',ans3:'4' },
      { question1: [8,8,8,8,8,8,8,8,], question2: [5,5,5,5,5,], image: require('../../assets/plum.png') ,sign:'-',ans1:'2',ans2:'3',ans3:'5' },
      { question1: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], question2: [8,8,8,8,8,8,8,8,], image: require('../../assets/sforsun.png') ,sign:'-',ans1:'7',ans2:'9',ans3:'6' },
      { question1: [8,8,8,8,8,8,8,8,], question2: [3,3,3,], image: require('../../assets/sparrow.png') ,sign:'-',ans1:'5',ans2:'4',ans3:'3' },
      { question1: [9,9,9,9,9,9,9,9,9,], question2: [9,9,9,9,9,9,9,], image: require('../../assets/strawberry.png') ,sign:'+',ans1:'16',ans2:'18',ans3:'20' },
      { question1: [10,10,10,10,10,10,10,10,10,10,], question2: [9,9,9,9,9,9,9,9,9], image: require('../../assets/turnip.png') ,sign:'-',ans1:'2',ans2:'3',ans3:'1' },
      { question1: [6,6,6,6,6,6,], question2: [7,7,7,7,7,7,7,], image: require('../../assets/uforumbrella.png') ,sign:'+',ans1:'13',ans2:'15',ans3:'10' },
      { question1: [11,11,11,11,11,11,11,11,11,11,11,], question2: [2,2], image: require('../../assets/vforviolin.png') ,sign:'-',ans1:'11',ans2:'9',ans3:'12' },
    ]
    this.setState({ dataArray: tempArr });
    txtToSpeak('Math with pictures')
  }

  back = () => {
      playSound('click.mp3');
    Orientation.lockToPortrait();
    setTimeout(() => {
      this.props.navigation.goBack();
      this.props.route.params.Refresh();
    }, 300)
  }
  errorSound = () => {
    playSound('no.mp3');
  }
  succesSound = () => {
    playSound('yes.mp3');
    if (pageIndex < this.state.dataArray.length - 1)
      this.refs.viewpager.setPage(++pageIndex)
    else{
      Orientation.lockToPortrait();
      setTimeout(() => {
        this.props.navigation.navigate('CommonMessage', { howmanyback:2 })
      }, 300)
    }

  }

  render() {
    return (
      <View source={bg_math} resizeMode="stretch" style={{ flex: 1, }}>
        <StatusBar hidden />
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
          <ViewPager style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
            pageIndex = e.nativeEvent.position;
          }} setPage={this.state.pageIndex} ref='viewpager'>
            {this.state.dataArray.map((item, index) => {
              return (
                <ImageBackground source={bg_math} resizeMode="stretch" style={{ flex: 1,zIndex:99,alignItems:'center' }}>
                  <View style={{ flex: 1,width:'100%' }}>
                    <View style={{ flex: 2, flexDirection: 'row', marginTop: responsiveHeight(15) }}>
                      <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: responsiveWidth(6), marginRight: responsiveWidth(3), borderColor: '#824162', borderWidth: 1, borderRadius: 10, padding: 10, paddingBottom: 15,width:responsiveWidth(35),height:responsiveHeight(45)  }}>
                          {item.question1.map((item2, index) => {
                            return (
                              <Image source={item.image} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} />
                            );
                          }, this)}
                        </View>
                      </View>
                      <View style={{alignItems:'center'}}>
                      <Text style={{ fontSize: CustomFont.font40, color: Color.black,marginTop:responsiveHeight(10)}}>{item.sign}</Text>
                      </View>
                      
                      <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: responsiveWidth(6), marginRight: responsiveWidth(3), borderColor: '#824162', borderWidth: 1, borderRadius: 10, padding: 10, paddingBottom: 15,width:responsiveWidth(35),height:responsiveHeight(45)  }}>
                          {item.question2.map((item2, index) => {
                            return (
                              <Image source={item.image} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} />
                            );
                          }, this)}
                        </View>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start',marginTop:20 }}>
                      <TouchableOpacity style={{ backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                       if(item.sign=='+'){
                        if (item.question1.length + item.question2.length==item.ans1) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }else{
                        if (item.question1.length - item.question2.length==item.ans1) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }
                        
                        
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{item.ans1}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginLeft: responsiveWidth(2), backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                       if(item.sign=='+'){
                        if (item.question1.length + item.question2.length==item.ans2) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }else{
                        if (item.question1.length - item.question2.length==item.ans2) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{item.ans2}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginLeft: responsiveWidth(2), backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                       if(item.sign=='+'){
                        if (item.question1.length + item.question2.length==item.ans3) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }else{
                        if (item.question1.length - item.question2.length==item.ans3) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                       }
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{item.ans3}</Text>
                      </TouchableOpacity>
                      
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                  {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
                </ImageBackground>
              );
            }, this)}
          </ViewPager>
        </View>
      </View>
    );
  }

}
//export default HomeDrawer;
