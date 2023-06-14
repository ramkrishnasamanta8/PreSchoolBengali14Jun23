import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, ImageBackground, FlatList, Platform, BackHandler } from 'react-native';
import Orientation from 'react-native-orientation';
import Toolbar from '../components/Toolbar';

import Modal from 'react-native-modal';
import back from '../../assets/back.png';
import bgImage from '../../assets/bg9.jpg';
import balloon1 from '../../assets/balloon1.png';
import balloon2 from '../../assets/balloon2.png';
import balloon3 from '../../assets/balloon3.png';
import balloon4 from '../../assets/balloon4.png';
import previous from '../../assets/previous_btn.png';
import lockImage from '../../assets/lock_image.png';
let medicineArr = [];
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let isSound = false;
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0;
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';
let counter = 0, prevName = '', prevIndex = 0, seccondTimer = -1;
let sliderCounter = null, sliderTimer = null;

let pageIndex=0;
export default class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      showOtpTime: 5,
      isModalVisible: false,
      modalLevelStatus:'complete',
      isDisabledBtn:true
    };
    soundPosition = 0;
    counter = 0;
  }
  async componentDidMount() {
    pageIndex= this.props.route.params.index ? this.props.route.params.index : 0,
   console.log('-----------'+pageIndex)
    this.loadData();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.back()
      return true;
    })
  }
  loadData = () => {
    let dataArrayGlobal=[
      [{ name: 'pears', image: require('../../assets/pears.jpg'), ShowStatus: true, status: 'click' },
    { name: 'mangos', image: require('../../assets/mangos.jpg'), ShowStatus: true, status: 'click' },
    { name: 'frWater', image: require('../../assets/frWater.png'), ShowStatus: true, status: 'click' },
    { name: 'fig', image: require('../../assets/fig.png'), ShowStatus: true, status: 'click' },
    { name: 'frvgcucumber', image: require('../../assets/frvgcucumber.png'), ShowStatus: true, status: 'click' },
    { name: 'frWater', image: require('../../assets/frWater.png'), ShowStatus: true, status: 'click' },
    { name: 'frvgtomato', image: require('../../assets/frvgtomato.png'), ShowStatus: true, status: 'click' },
    { name: 'franar', image: require('../../assets/franar.jpg'), ShowStatus: true, status: 'click' },
    { name: 'frvgcucumber', image: require('../../assets/frvgcucumber.png'), ShowStatus: true, status: 'click' },
    { name: 'franar', image: require('../../assets/franar.jpg'), ShowStatus: true, status: 'click' },
    { name: 'mangos', image: require('../../assets/mangos.jpg'), ShowStatus: true, status: 'click' },
    { name: 'fig', image: require('../../assets/fig.png'), ShowStatus: true, status: 'click' },
    { name: 'frvgpumpkin', image: require('../../assets/frvgpumpkin.png'), ShowStatus: true, status: 'click' },
    { name: 'pears', image: require('../../assets/pears.jpg'), ShowStatus: true, status: 'click' },
    { name: 'frvgtomato', image: require('../../assets/frvgtomato.png'), ShowStatus: true, status: 'click' },
    { name: 'frvgpumpkin', image: require('../../assets/frvgpumpkin.png'), ShowStatus: true, status: 'click' },],
    
    [{ name: 'bittergourd', image: require('../../assets/bittergourd.jpg'), ShowStatus: true, status: 'click' },
    { name: 'cherry', image: require('../../assets/cherry.jpg'), ShowStatus: true, status: 'click' },
    { name: 'beetroot', image: require('../../assets/beetroot.jpg'), ShowStatus: true, status: 'click' },
    { name: 'kiwi', image: require('../../assets/kiwi.png'), ShowStatus: true, status: 'click' },
    { name: 'fblue', image: require('../../assets/fblue.png'), ShowStatus: true, status: 'click' },
    { name: 'beetroot', image: require('../../assets/beetroot.jpg'), ShowStatus: true, status: 'click' },
    { name: 'custard_apple', image: require('../../assets/custard_apple.jpg'), ShowStatus: true, status: 'click' },
    { name: 'eggplant', image: require('../../assets/eggplant.jpg'), ShowStatus: true, status: 'click' },
    { name: 'fblue', image: require('../../assets/fblue.png'), ShowStatus: true, status: 'click' },
    { name: 'eggplant', image: require('../../assets/eggplant.jpg'), ShowStatus: true, status: 'click' },
    { name: 'cherry', image: require('../../assets/cherry.jpg'), ShowStatus: true, status: 'click' },
    { name: 'kiwi', image: require('../../assets/kiwi.png'), ShowStatus: true, status: 'click' },
    { name: 'broccoli', image: require('../../assets/broccoli.jpg'), ShowStatus: true, status: 'click' },
    { name: 'bittergourd', image: require('../../assets/bittergourd.jpg'), ShowStatus: true, status: 'click' },
    { name: 'custard_apple', image: require('../../assets/custard_apple.jpg'), ShowStatus: true, status: 'click' },
    { name: 'broccoli', image: require('../../assets/broccoli.jpg'), ShowStatus: true, status: 'click' },],
    
    [{ name: 'anmcamel', image: require('../../assets/anmcamel.png'), ShowStatus: true, status: 'click' },
    { name: 'anmelk', image: require('../../assets/anmelk.png'), ShowStatus: true, status: 'click' },
    { name: 'anmcow', image: require('../../assets/anmcow.png'), ShowStatus: true, status: 'click' },
    { name: 'anmflamingo', image: require('../../assets/anmflamingo.png'), ShowStatus: true, status: 'click' },
    { name: 'anmwolf', image: require('../../assets/anmwolf.png'), ShowStatus: true, status: 'click' },
    { name: 'anmcow', image: require('../../assets/anmcow.png'), ShowStatus: true, status: 'click' },
    { name: 'anmgoat', image: require('../../assets/anmgoat.png'), ShowStatus: true, status: 'click' },
    { name: 'anmyak', image: require('../../assets/anmyak.png'), ShowStatus: true, status: 'click' },
    { name: 'anmwolf', image: require('../../assets/anmwolf.png'), ShowStatus: true, status: 'click' },
    { name: 'anmyak', image: require('../../assets/anmyak.png'), ShowStatus: true, status: 'click' },
    { name: 'anmelk', image: require('../../assets/anmelk.png'), ShowStatus: true, status: 'click' },
    { name: 'anmflamingo', image: require('../../assets/anmflamingo.png'), ShowStatus: true, status: 'click' },
    { name: 'anmgiraffe', image: require('../../assets/cub.webp'), ShowStatus: true, status: 'click' },
    { name: 'anmcamel', image: require('../../assets/anmcamel.png'), ShowStatus: true, status: 'click' },
    { name: 'anmgoat', image: require('../../assets/anmgoat.png'), ShowStatus: true, status: 'click' },
    { name: 'anmgiraffe', image: require('../../assets/cub.webp'), ShowStatus: true, status: 'click' },],
    
    [{ name: 'rose_flower', image: require('../../assets/rose_flower.jpg'), ShowStatus: true, status: 'click' },
    { name: 'dove', image: require('../../assets/dove.webp'), ShowStatus: true, status: 'click' },
    { name: 'hen', image: require('../../assets/hen.jpg'), ShowStatus: true, status: 'click' },
    { name: 'kiwi', image: require('../../assets/kiwi.png'), ShowStatus: true, status: 'click' },
    { name: 'peacock', image: require('../../assets/peacock.jpg'), ShowStatus: true, status: 'click' },
    { name: 'hen', image: require('../../assets/hen.jpg'), ShowStatus: true, status: 'click' },
    { name: 'guinea_fowl', image: require('../../assets/guinea_fowl.jpg'), ShowStatus: true, status: 'click' },
    { name: 'duck', image: require('../../assets/duck.jpg'), ShowStatus: true, status: 'click' },
    { name: 'peacock', image: require('../../assets/peacock.jpg'), ShowStatus: true, status: 'click' },
    { name: 'duck', image: require('../../assets/duck.jpg'), ShowStatus: true, status: 'click' },
    { name: 'dove', image: require('../../assets/dove.webp'), ShowStatus: true, status: 'click' },
    { name: 'kiwi', image: require('../../assets/kiwi.png'), ShowStatus: true, status: 'click' },
    { name: 'broccoli', image: require('../../assets/broccoli.jpg'), ShowStatus: true, status: 'click' },
    { name: 'rose_flower', image: require('../../assets/rose_flower.jpg'), ShowStatus: true, status: 'click' },
    { name: 'guinea_fowl', image: require('../../assets/guinea_fowl.jpg'), ShowStatus: true, status: 'click' },
    { name: 'broccoli', image: require('../../assets/broccoli.jpg'), ShowStatus: true, status: 'click' },],
    
    [{ name: 'pentagon.png', image: require('../../assets/pentagon.png'), ShowStatus: true, status: 'click' },
    { name: 'striangle.png', image: require('../../assets/striangle.png'), ShowStatus: true, status: 'click' },
    { name: 'rhombus.png', image: require('../../assets/rhombus.png'), ShowStatus: true, status: 'click' },
    { name: 'shapes', image: require('../../assets/shapes.png'), ShowStatus: true, status: 'click' },
    { name: 'ssemicircle.png', image: require('../../assets/ssemicircle.png'), ShowStatus: true, status: 'click' },
    { name: 'rhombus.png', image: require('../../assets/rhombus.png'), ShowStatus: true, status: 'click' },
    { name: 'starfish.png', image: require('../../assets/starfish.png'), ShowStatus: true, status: 'click' },
    { name: 'cube.jpg', image: require('../../assets/cube.jpg'), ShowStatus: true, status: 'click' },
    { name: 'ssemicircle.png', image: require('../../assets/ssemicircle.png'), ShowStatus: true, status: 'click' },
    { name: 'cube.jpg', image: require('../../assets/cube.jpg'), ShowStatus: true, status: 'click' },
    { name: 'striangle.png', image: require('../../assets/striangle.png'), ShowStatus: true, status: 'click' },
    { name: 'shapes', image: require('../../assets/shapes.png'), ShowStatus: true, status: 'click' },
    { name: 'spider.jpg', image: require('../../assets/spider.jpg'), ShowStatus: true, status: 'click' },
    { name: 'pentagon.png', image: require('../../assets/pentagon.png'), ShowStatus: true, status: 'click' },
    { name: 'starfish.png', image: require('../../assets/starfish.png'), ShowStatus: true, status: 'click' },
    { name: 'spider.jpg', image: require('../../assets/spider.jpg'), ShowStatus: true, status: 'click' },]
    ];
    soundPosition = 0;
    counter = 0;
    prevName = ''; prevIndex = 0; seccondTimer = -1;
    this.setState({showOtpTime: 5,isDisabledBtn:true})
    this.startCounter();
    let tmpArr = dataArrayGlobal[pageIndex];
    this.setState({ dataArray: tmpArr })
    setTimeout(() => {
      for(let i=0;i<tmpArr.length;i++){
        tmpArr[i].status='initial';
      }
      this.setState({dataArray: tmpArr,isDisabledBtn:false});
      txtToSpeak('Game start. Match same images')
    }, 5000)


  }
  back = () => {
    try {
      if (IsSoundEnabled)
      clickSound();
      if(sliderTimer)
    clearInterval(sliderTimer);
    sliderTimer=null;

    if(sliderCounter){
      clearInterval(sliderCounter);
      sliderCounter=null;
    }

    } catch (error) {
      
    }
    
    this.props.navigation.goBack()
  }
  startCounter = () => {
    try {
      if(sliderCounter){
        clearInterval(sliderCounter);
        sliderCounter=null;
      }
      

      sliderCounter = setInterval(() => {
        try {
          this.setState({ showOtpTime: --this.state.showOtpTime })
          if (this.state.showOtpTime == 0) {
            clearInterval(sliderCounter);
            this.startTimer();
          }
        } catch (error) {

        }

      }, 1000);
    } catch (error) {

    }
  }
  startTimer = () => {
    try {
      if(sliderTimer){
        clearInterval(sliderTimer);
        sliderTimer=null;
      }

      sliderTimer = setInterval(() => {
        let str = ''
        seccondTimer++;
        if (seccondTimer > 59) {
          let min = Math.floor(seccondTimer / 60);
          console.log('---' + min)
          if (min == 5) {
            this.setState({modalLevelStatus:'timeout'})
            //alert('Game is Over. Please try again later');
            txtToSpeak('Game is over')
            str = '05:00';
            clearInterval(sliderTimer);
            sliderTimer=null;
          } else {
            let sec = seccondTimer % 60;
            if (!sec) sec = 0;

            if (sec < 10)
              str = '0' + min + ':0' + sec;
            else
              str = '0' + min + ':' + sec;
          }
        } else {
          if (seccondTimer < 10)
            str = '00:0' + seccondTimer;
          else
            str = '00:' + seccondTimer;
        }
        this.setState({ showOtpTime: str })



      }, 1000);
    } catch (error) {

    }
  }
  renderList = ({ item, index }) => (
    <View style={{ flex: 1, marginTop: 10, alignItems: 'center', justifyContent: 'center', }}>
      {item.ShowStatus ? <TouchableOpacity style={{ height: responsiveWidth(24), backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', borderRadius: responsiveFontSize(1.3), borderColor: Color.blueBorder, borderWidth: 3, minWidth: responsiveWidth(23) }} onPress={() => {
        // if(IsSoundEnabled)
        // clickSound();
        //this.setState({ isModalVisible: true })
        if (counter < 2) {
          item.status = 'click';
          this.setState({ dataArray: this.state.dataArray })
          playSound('button_click.mp3');
          if (counter == 0) {
            prevName = item.name;
            prevIndex = index;
          } else {
            if (prevName == item.name) {
              //alert(prevIndex+' '+index);
              setTimeout(() => {
                let tmpArr = [...this.state.dataArray];
                tmpArr[prevIndex].ShowStatus = false;
                tmpArr[index].ShowStatus = false;
                console.log('-----' + JSON.stringify(tmpArr))
                this.setState({ dataArray: tmpArr })
                if (counter > 1)
                  counter = 0;

                playSound('correct.mp3');
                let flag = false;
                for (let i = 0; i < tmpArr.length; i++) {
                  if (tmpArr[i].ShowStatus) {
                    flag = true;
                    break;
                  }
                }
                if (!flag) {
                  playSound('claps.mp3');
                  this.setState({ isModalVisible: true,})
                  if(pageIndex>=4)
                  this.setState({modalLevelStatus:'allComplete'})
                  else
                  this.setState({modalLevelStatus:'complete'})
                  
                }
              }, 1000)
            } else {
              setTimeout(() => {
                let tmpArr = [...this.state.dataArray];
                tmpArr[prevIndex].status = 'initial';
                tmpArr[index].status = 'initial';
                console.log('--++---' + JSON.stringify(tmpArr))
                this.setState({ dataArray: tmpArr })
                if (counter > 1)
                  counter = 0;

                playSound('incorrect.mp3');
              }, 1000)
            }
          }
        }


        counter++;


        //if()
      }} disabled={this.state.isDisabledBtn}>
        {
          item.status == 'initial' ? <Image source={lockImage} style={{ height: responsiveWidth(24), width: responsiveWidth(22.5), resizeMode: 'stretch' }} /> :
            <Image source={item.image} style={{ height: responsiveWidth(16), width: responsiveWidth(16), resizeMode: 'contain' }} />
        }

      </TouchableOpacity> : null}

    </View>

  );

  render() {
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={{ marginLeft: responsiveWidth(3), marginTop: Platform.OS == 'ios' ? responsiveHeight(5) : responsiveHeight(1.2) }} onPress={() => {
          this.back()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
        </TouchableOpacity>
        {/* <Toolbar title={this.props.route.params.item.name} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        this.props.navigation.goBack()
      } }/> */}
        <View style={{ flex: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ marginTop: -10, color: Color.white, fontSize: CustomFont.font16 }}>প্রথম ছবির সাথে দ্বিতীয় ছবির মিল করুন </Text>
            <Text style={{ marginBottom: responsiveHeight(5), marginTop: 10, color: Color.white, fontSize: CustomFont.font30 }}>{this.state.showOtpTime}</Text>
          </View>
          <FlatList
            numColumns={4}
            style={{ marginBottom: 10 }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            //ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item, index) => index.toString()} />
            <View style={{ alignItems: 'center' }}>
            {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>
          <Modal isVisible={this.state.isModalVisible} >
            <View style={{ flexDirection: 'column', backgroundColor: '#FFF', padding: 10, borderRadius: 7 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 20, color: 'red', fontSize: CustomFont.font30, fontWeight: 'bold', textAlign: 'center' }}> {this.state.modalLevelStatus=='complete' ? 'Game Complete !' :this.state.modalLevelStatus=='allComplete' ? 'Game Over !':'Time Out!'}</Text>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', marginTop: 10, color: Color.green, fontSize: CustomFont.font16, textAlign: 'center', marginLeft: 20, marginRight: 20, }}>{this.state.modalLevelStatus=='complete' ? 'You have complete the Game !' :this.state.modalLevelStatus=='allComplete' ? 'You have complete the all level of Game !':'Time Out!. Please try again.'} </Text>

              </View>
              <View style={{ flexDirection: 'row',justifyContent:'center', marginTop: 80, marginBottom: 40 }}>
              <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 4, height: responsiveHeight(6), backgroundColor: '#F7ED91', marginLeft: 20, marginRight: 10 }} onPress={() => {
                this.setState({ isModalVisible: false });
                if (IsSoundEnabled)
                  clickSound();
                this.props.navigation.goBack();
              }}>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', color: Color.black, fontSize: CustomFont.font16, textAlign: 'center' }}>Back</Text>
              </TouchableOpacity>
{this.state.modalLevelStatus=='allComplete' ? null: <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 4, height: responsiveHeight(6), backgroundColor: '#F7ED91', marginLeft: 10, marginRight: 20 }} onPress={() => {
                this.setState({ isModalVisible: false })
                pageIndex++;
                clearInterval(sliderTimer);
                if(pageIndex <5)
                this.loadData();
                else{
                  this.props.navigation.goBack();
                }
              }}>
                <Text style={{ fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', color: Color.black, fontSize: CustomFont.font16, textAlign: 'center' }}>Next Level</Text>
              </TouchableOpacity>}
              
                </View>
              

            </View>
          </Modal>
        </View>

      </ImageBackground>
    );
  }

}
//export default HomeDrawer;
