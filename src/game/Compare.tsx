import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Alert, BackHandler, ImageBackground, StatusBar, Platform } from 'react-native';
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
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let pageIndex = 0;
export default class Compare extends React.Component {
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
      if (tag == 'Compare')
        this.Compare();
    }

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.back();
      return true;
    })
  }

  Compare = () => {
    let tempArr = [
      { question1: [3, 3, 3,], question2: [4, 4, 4, 4,], image: require('../../assets/mango_count.png') },
      { question1: [4, 4, 4, 4,], question2: [3, 3, 3,], image: require('../../assets/nectarine.png') },
      { question1: [5, 5, 5, 5, 5,], question2: [5, 5, 5, 5, 5,], image: require('../../assets/grapes.png') },
      { question1: [5, 5, 5, 5, 5, 5, 5, 5,], question2: [3, 3, 3], image: require('../../assets/flower.png') },
      { question1: [7, 7, 7, 7, 7, 7, 7,], question2: [8, 8, 8, 8, 8, 8, 8, 8,], image: require('../../assets/bird.png') },
      { question1: [6, 6, 6, 6, 6, 6,], question2: [6, 6, 6, 6, 6, 6,], image: require('../../assets/asparagus.png') },
      { question1: [4, 4, 4, 4,], question2: [5, 5, 5, 5, 5], image: require('../../assets/avocado.png') },
      { question1: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,], question2: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,], image: require('../../assets/heart.png') },
      { question1: [9, 9, 9, 9, 9, 9, 9, 9, 9,], question2: [9, 9, 9, 9, 9, 9, 9, 9, 9,], image: require('../../assets/kiwi.png') },
      { question1: [8, 8, 8, 8, 8, 8, 8, 8,], question2: [6, 6, 6, 6, 6, 6,], image: require('../../assets/onions.png') },
      { question1: [6, 6, 6, 6, 6, 6,], question2: [8, 8, 8, 8, 8, 8, 8, 8,], image: require('../../assets/organge.png') },
      { question1: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,], question2: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,], image: require('../../assets/peach.png') },
      { question1: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,], question2: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,], image: require('../../assets/plum.png') },
      { question1: [7, 7, 7, 7, 7, 7, 7,], question2: [9, 9, 9, 9, 9, 9, 9, 9, 9,], image: require('../../assets/sforsun.png') },
      { question1: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,], question2: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,], image: require('../../assets/sparrow.png') },
      { question1: [8, 8, 8, 8, 8, 8, 8, 8,], question2: [5, 5, 5, 5, 5,], image: require('../../assets/strawberry.png') },
      { question1: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,], question2: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9,], image: require('../../assets/turnip.png') },
      { question1: [8, 8, 8, 8, 8, 8, 8, 8,], question2: [7, 7, 7, 7, 7, 7, 7,], image: require('../../assets/uforumbrella.png') },
      { question1: [9, 9, 9, 9, 9, 9, 9, 9, 9,], question2: [9, 9, 9, 9, 9, 9, 9,], image: require('../../assets/vforviolin.png') },
      { question1: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,], question2: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,], image: require('../../assets/watermelon.png') },
      { question1: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,], question2: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,], image: require('../../assets/mango_count.png') },
      { question1: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,], question2: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,], image: require('../../assets/organge.png') },
    ]
    this.setState({ dataArray: tempArr });
    txtToSpeak('Compare between two pictures')
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
    else {
      Orientation.lockToPortrait();
      setTimeout(() => {
        this.props.navigation.navigate('CommonMessage', { howmanyback: 2 })
      }, 300)
    }

  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar hidden />
        <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
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
            // //Tts.speak(this.state.dataArray[position].bengName)

            // if (whoosh) {
            //   whoosh.stop(() => {
            //     whoosh.release();
            //   });
            // }
            // whoosh = new Sound('sound/' + this.state.dataArray[position].sound, Sound.MAIN_BUNDLE, (error) => {
            //   if (error) {
            //     console.log('failed to load the sound', error);
            //     return;
            //   }
            //   // Play the sound with an onEnd callback

            //   whoosh.play((success) => {
            //     if (success) {
            //       setTimeout(() => {
            //         whoosh = new Sound('sound/guess_in_below_picture.mp3', Sound.MAIN_BUNDLE, (error) => {
            //           if (error) {
            //             console.log('failed to load the sound', error);
            //             return;
            //           }
            //           // Play the sound with an onEnd callback

            //           whoosh.play((success) => {
            //             if (success) {
            //               console.log('successfully finished playing');
            //             } else {
            //               console.log('playback failed due to audio decoding errors');
            //             }
            //           });

            //         });
            //       }, 100)
            //     } else {
            //       console.log('playback failed due to audio decoding errors');
            //     }
            //   });

            // });
          }} setPage={this.state.pageIndex} ref='viewpager'>
            {this.state.dataArray.map((item, index) => {
              return (
                <ImageBackground source={bg_math} resizeMode="stretch" style={{ flex: 1, zIndex: 99, alignItems: 'center' }}>
                  <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
                  <View style={{ flex: 1, width: '100%' }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: responsiveHeight(12) }}>
                      <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{marginTop:Platform.isPad ? responsiveHeight(2):responsiveHeight(4),marginBottom:Platform.isPad ? responsiveHeight(2):responsiveHeight(4), borderColor: '#824162', borderWidth: 1, borderRadius: 10, padding: 10, paddingBottom: 15, minWidth: responsiveWidth(35), marginLeft: responsiveWidth(2)}}>
                        <View  style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: responsiveWidth(6), marginRight: responsiveWidth(3),  }}>
                          {item.question1.map((item2, index) => {
                            return (
                              <Image source={item.image} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} />
                            );
                          }, this)}
                          </View>
                        </View>
                      </View>
                      <Text style={{ fontSize: CustomFont.font40, color: Color.black, margin: responsiveWidth(2) }}>{this.state.correctAns}</Text>
                      <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{marginTop:Platform.isPad ? responsiveHeight(2):responsiveHeight(4),marginBottom:Platform.isPad ? responsiveHeight(2):responsiveHeight(4), borderColor: '#824162', borderWidth: 1, borderRadius: 10, padding: 10, paddingBottom: 15, minWidth: responsiveWidth(35), marginRight:responsiveWidth(2) }}>
                          <View  style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginLeft: responsiveWidth(6), marginRight: responsiveWidth(3),  }}>
                          {item.question2.map((item2, index) => {
                            return (
                              <Image source={item.image} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} />
                            );
                          }, this)}
                          </View>
                          
                        </View>
                      </View>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: responsiveHeight(20) }}>
                      <TouchableOpacity style={{ marginLeft: responsiveWidth(5), backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                        if (item.question1.length < item.question2.length) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{'<'}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginLeft: responsiveWidth(5), backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                        if (item.question1.length == item.question2.length) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{'='}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{ marginLeft: responsiveWidth(5), backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', height: responsiveHeight(15), width: responsiveWidth(10), borderRadius: 10 }} onPress={() => {
                        if (item.question1.length > item.question2.length) {
                          this.succesSound();
                        } else {
                          this.errorSound();
                        }
                      }}>
                        <Text style={{ fontSize: CustomFont.font35, color: Color.black, }}>{'>'}</Text>
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
