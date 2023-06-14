import * as React from 'react';
import { View, Image, Text, TouchableOpacity, BackHandler, Animated, StatusBar, ImageBackground ,Platform} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import balloon from '../../assets/balloon.png';
import bg2 from '../../assets/bg2.jpg';
import back from '../../assets/back.png';
let maxPosition = 10, minPosition = 0, correctNumber = 1;
import Orientation from 'react-native-orientation';
let tempArr = [5, 8, 10, 9, 4, 2, 1, 7, 3, 6,
  15, 18, 11, 19, 14, 12, 17, 13, 16, 20,
  25, 28, 21, 29, 24, 22, 27, 23, 26, 30,
  37, 33, 36, 40, 35, 38, 31, 39, 34, 33,
  45, 48, 41, 49, 44, 44, 47, 44, 46, 50,
  55, 58, 51, 59, 55, 55, 57, 55, 56, 60,
  66, 67, 66, 66, 70, 65, 68, 61, 69, 66,
  75, 78, 71, 79, 77, 77, 77, 77, 76, 80,
  88, 88, 88, 86, 90, 85, 88, 81, 89, 88,
  95, 99, 91, 99, 99, 99, 99, 99, 96, 100]
import { playSound, txtToSpeak,txtToSpeakEng  } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
//Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim1: new Animated.Value(1),
      fadeAnim2: new Animated.Value(1),
      fadeAnim3: new Animated.Value(1),
      fadeAnim4: new Animated.Value(1),
      fadeAnim5: new Animated.Value(1),
      fadeAnim6: new Animated.Value(1),
      fadeAnim7: new Animated.Value(1),
      fadeAnim8: new Animated.Value(1),
      fadeAnim9: new Animated.Value(1),
      fadeAnim10: new Animated.Value(1),
      dataArray: [
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
        { number: '1', disable: false },
      ],
    };
    Orientation.lockToLandscapeLeft();
  }
  componentDidMount() {
    maxPosition = 10;
    minPosition = 0;
    correctNumber = 1;
    setTimeout(()=>{
      this.loadData();
    },1000)
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.back()
      return true;
    })
  }

  loadData = () => {
    let tmp = []
    for (let i = minPosition; i < maxPosition; i++) {
      tmp.push({ number: tempArr[i], disable: false })
    }
    //console.log('------' + JSON.stringify(tmp));
setTimeout(()=>{
  this.setState({
    dataArray: tmp, fadeAnim1: new Animated.Value(1),
    fadeAnim2: new Animated.Value(1),
    fadeAnim3: new Animated.Value(1),
    fadeAnim4: new Animated.Value(1),
    fadeAnim5: new Animated.Value(1),
    fadeAnim6: new Animated.Value(1),
    fadeAnim7: new Animated.Value(1),
    fadeAnim8: new Animated.Value(1),
    fadeAnim9: new Animated.Value(1),
    fadeAnim10: new Animated.Value(1),
  });
},300)
    
  }

  // fadeIn = () => {
  //   Animated.timing(this.state.fadeAnim1, {
  //     toValue: 1,
  //     duration: 2000
  //   }).start();
  // };
  fadeOut1 = () => {
    if (this.state.dataArray[0].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[0].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim1, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim1: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }

  };
  fadeOut2 = () => {
    if (this.state.dataArray[1].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[1].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim2, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim2: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut3 = () => {
    if (this.state.dataArray[2].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[2].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim3, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim3: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut4 = () => {
    if (this.state.dataArray[3].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[3].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim4, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim4: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut5 = () => {
    if (this.state.dataArray[4].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[4].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim5, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim5: new Animated.Value(1)})
        this.loadNextItems();
      }
      
    } else {
      this.errorSound();
    }
  };
  fadeOut6 = () => {
    if (this.state.dataArray[5].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[5].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim6, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim6: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut7 = () => {
    if (this.state.dataArray[6].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[6].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim7, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim7: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut8 = () => {
    if (this.state.dataArray[7].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[7].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim8, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim8: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut9 = () => {
    if (this.state.dataArray[8].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[8].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim9, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim9: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };
  fadeOut10 = () => {
    if (this.state.dataArray[9].number == correctNumber) {
      txtToSpeakEng(correctNumber+"");
      correctNumber++;
      this.state.dataArray[9].disable = true;
      this.setState({ dataArray: this.state.dataArray });
      Animated.timing(this.state.fadeAnim10, { toValue: 0, duration: 2000 }).start();
      if (correctNumber == maxPosition + 1){
        this.setState({fadeAnim10: new Animated.Value(1)})
        this.loadNextItems();
      }
    } else {
      this.errorSound();
    }
  };

  loadNextItems = () => {
    if (minPosition == 90) {
      minPosition = 0;
      maxPosition = 10;
      correctNumber = 1;
    } else {
      minPosition = maxPosition;
      maxPosition += 10;
    }
    this.succesSound();
    setTimeout(()=>{
      this.loadData();
    },2000)
   
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
    playSound('claps.mp3');
  }
  render() {
    Orientation.lockToLandscapeLeft();
    return (
      <ImageBackground source={bg2} resizeMode="stretch" style={{ flex: 1,zIndex:99 }}>
        <StatusBar hidden />
        <View style={{ flex: 1, }}>
          
          <TouchableOpacity style={{ position: 'absolute', top: 7, left: 7, zIndex: 99 }} onPress={() => this.back()}>
            <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
          </TouchableOpacity>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(12), left: responsiveWidth(20), opacity: this.state.fadeAnim1 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut1()
            }} disabled={this.state.dataArray[0].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#FF0035' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[0].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(6), left: responsiveWidth(40), opacity: this.state.fadeAnim2 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut2()
            }} disabled={this.state.dataArray[1].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#FEF100' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[1].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(35), left: responsiveWidth(6), opacity: this.state.fadeAnim3,zIndex:99 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut3();
            }} disabled={this.state.dataArray[2].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#971111' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[2].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(15), right: responsiveWidth(30), opacity: this.state.fadeAnim4 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut4()
            }} disabled={this.state.dataArray[3].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#FF6A00' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[3].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(40), right: responsiveWidth(15), opacity: this.state.fadeAnim5 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut5()
            }} disabled={this.state.dataArray[4].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#6200EE' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[4].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', bottom: responsiveHeight(2), left: responsiveWidth(6), opacity: this.state.fadeAnim6 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut6()
            }} disabled={this.state.dataArray[5].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#ff00fe' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[5].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', bottom: responsiveHeight(34), left: responsiveWidth(30), opacity: this.state.fadeAnim7 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut7()
            }} disabled={this.state.dataArray[6].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#007500' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[6].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', top: responsiveHeight(10), right: responsiveWidth(3), opacity: this.state.fadeAnim8 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut8()
            }} disabled={this.state.dataArray[7].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#DC9900' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[7].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', bottom: responsiveHeight(20), right: responsiveWidth(40), opacity: this.state.fadeAnim9 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut9()
            }} disabled={this.state.dataArray[8].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#f34093' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[8].number}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ position: 'absolute', bottom: responsiveHeight(9), right: responsiveWidth(2), opacity: this.state.fadeAnim10 }} >
            <TouchableOpacity style={{}} onPress={() => {
              this.fadeOut10()
            }} disabled={this.state.dataArray[9].disable}>
              <Image source={balloon} style={{ height: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), width: Platform.isPad? responsiveFontSize(10): responsiveFontSize(12), resizeMode: 'contain', tintColor: '#86c2ff' }} />
              <Text style={{ fontSize: CustomFont.font32, color: Color.white, position: 'absolute', top: responsiveFontSize(2), left: this.state.dataArray[9].number == 100 ? 15 : Platform.isPad?responsiveFontSize(3.5): responsiveFontSize(4.5), fontWeight: 'bold' }}>{this.state.dataArray[9].number}</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
      size={BannerAdSize.BANNER}
    />}
</View>
      </ImageBackground>
    );
  }

}

