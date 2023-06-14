import React,{useEffect,useState,useRef} from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, SafeAreaView, Spokestack, ImageBackground } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import OptionMenu from '../components/OptionMenu';
import back from '../../assets/back.png';
import back_blue from '../../assets/back_blue.png';
import sound_off from '../../assets/sound_off.png';
import sound from '../../assets/sound.png';
// import success from '../../assets/success.png';
// import error from '../../assets/error.png';
// let itemHome = null, from = 'cap';
// import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';

import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let isSound = false;
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];

let name =null,item={};
export default HabitDetails =(props)=> {
const [pageIndex,setpageIndex]=useState(0)
const [score,setscore]=useState(0)
const [dataArray,setdataArray]=useState([])
const [imageStatus,setimageStatus]=useState(null)
const [isBtnDisable,setisBtnDisable]=useState(false)
const [clickIndex,setclickIndex]=useState(-1)
const [isSoundOn,setisSoundOn]=useState(true)

useEffect(()=>{
  name = props.route.params.item.name;
  item = props.route.params.item;
  //alert(name)
  if (name) {
    if (name == 'At Table') {
      AtTable();
    }else if (name == 'At Home') {
      AtHome();
    } else if (name == 'At school') {
      Atschool();
    } else if (name == 'At Outdoor') {
      AtOutdoor();
    } else if (name == 'Keep area clean') {
      Keepareaclean();
    } else if (name == 'Being Nice') {
      BeingNice();
    } else if (name == 'Staying Healthy') {
      StayingHealthy();
    } else if (name == 'Discipline') {
      Discipline();
    } else if (name == 'Intelligence') {
      Intelligence();
    }
  }
},[])

  const AtTable = () => {
    let tempArr = [
      {habit: "Come to the Table With Hands and Face Clean.",image: require('../../assets/goodhabit/handwash.webp') },
      {habit: "Wait until served before eating.",image: require('../../assets/goodhabit/beforeeating.webp') },
      {habit: "Practice chewing with your mouth closed .",image: require('../../assets/goodhabit/mouthclosed.webp') },
      {habit: "Stop talking with food in your mouth.",image: require('../../assets/goodhabit/stoptalking.webp') },
      {habit: "Drink water in a glass.",image: require('../../assets/goodhabit/drinkwater.webp') },
      {habit: "Chew any food thoroughly.",image: require('../../assets/goodhabit/chewfood.webp') },
      {habit: "Have water on the table while eating.",image: require('../../assets/goodhabit/whileeating.webp') },
      {habit: "Try to eat any food slowly . ",image: require('../../assets/goodhabit/foodslowly.webp') },
      {habit: "Drink plenty of water ",image: require('../../assets/goodhabit/drinkplenty.webp') },
      {habit: "Wash your hands and mouth thoroughly after eating.",image: require('../../assets/goodhabit/washyourhands.webp') },
      {habit: "Enjoy Family Meals Together .",image: require('../../assets/goodhabit/enjoyfamily.webp') },
    ]
    setdataArray(tempArr);
  }
  const AtHome = () => {
    let tempArr = [
      {habit: "Be kind to Everyone",image: require('../../assets/goodhabit/beKind1.webp') },
      {habit: "Learn to take care of yourself",image: require('../../assets/goodhabit/learnto.webp') },
      {habit: "Treat others well at home",image: require('../../assets/goodhabit/treatothers.webp') },
      {habit: "Make it a habit to wake up early in the morning",image: require('../../assets/goodhabit/makeitahabit.webp') },
      {habit: "Engage in virtuous practices.",image: require('../../assets/goodhabit/engage.webp') },
      //{habit: "Stay united with family",image: require('../../assets/goodhabit/stayunited.webp') },
      {habit: "Maintain daily physical exercise",image: require('../../assets/goodhabit/maintaindaily.webp') },
      {habit: "Bathe regularly",image: require('../../assets/goodhabit/batheregularly.webp') },
      {habit: "Always keep hair, nails, ears and teeth clean",image: require('../../assets/goodhabit/teethclean.webp') },
      {habit: "Respect elders.",image: require('../../assets/goodhabit/respectelders.webp') },
      {habit: "Follow a fixed routine for each day",image: require('../../assets/goodhabit/fixedroutine.webp') },
     
    ]
    setdataArray(tempArr);
  }
  const Atschool = () => {
    let tempArr = [
      {habit: "Respect your teachers",image: require('../../assets/goodhabit/respect.webp') },
      {habit: "Practice reading regularly",image: require('../../assets/goodhabit/practiceReading.webp') },
      {habit: "Try to get to school on time",image: require('../../assets/goodhabit/school.webp') },
      {habit: "Keep the school classroom clean",image: require('../../assets/goodhabit/classroomClean.webp') },
      {habit: "Be Systematic with Studies",image: require('../../assets/goodhabit/beSystematic.webp') },
      {habit: "Be responsible in your daily studies",image: require('../../assets/goodhabit/beResponsible.webp') },
      {habit: "Enjoy friendship life at school.",image: require('../../assets/goodhabit/enjoyFriendship.webp') },
      {habit: "Learn the task of reading better than school teacher sir.",image: require('../../assets/goodhabit/readingBette.webp') },
      {habit: "Take permission from the master to go outside the class.",image: require('../../assets/goodhabit/takePermission.webp') },
      {habit: "Enter with permission while the master is in class.",image: require('../../assets/goodhabit/enterWith.webp') },
      
    ]
    setdataArray(tempArr);
  }
  const AtOutdoor = () => {
    let tempArr = [
      {habit: "Develop personal life through play",image: require('../../assets/goodhabit/develop.webp') },
      {habit: "Increase focus through sports",image: require('../../assets/goodhabit/increaseFocus.webp') },
      {habit: "Love nature by playing outside",image: require('../../assets/goodhabit/loveNature.webp') },
      {habit: "Improve health with this outdoor play",image: require('../../assets/goodhabit/improveHealth.webp') },
      {habit: "Do some yoga before or after the game",image: require('../../assets/goodhabit/someYoga.webp') },
      {habit: "Practice jumping sometimes",image: require('../../assets/goodhabit/practiceJumping.webp') },
      {habit: "Be able to run fast, jump long and climb.",image: require('../../assets/goodhabit/beAble.webp') },
      {habit: "Increase body strength through play.",image: require('../../assets/goodhabit/increaseBody.webp') },
      {habit: "Create new friendships through play.",image: require('../../assets/goodhabit/friendships.webp') },
      {habit: "Like studies, sports are an important aspect of life.",image: require('../../assets/goodhabit/likeStudies.webp') },
      
    ]
    setdataArray(tempArr);
  }
  const Keepareaclean = () => {
    let tempArr = [
      {habit: "Develop clean habits for a healthy life.",image: require('../../assets/goodhabit/developClean.webp') },
      {habit: "Beware of malaria and dengue germs from unsanitary areas.",image: require('../../assets/goodhabit/malaria.webp') },
      {habit: "Avoid Littering Public Places",image: require('../../assets/goodhabit/avoidLittering.webp') },
      {habit: "Keep yourself clean to avoid any disease, germs.",image: require('../../assets/goodhabit/keepYourself1.webp') },
      {habit: "Environment is our right, it is our duty to keep it clean.",image: require('../../assets/goodhabit/environment.webp') },
      {habit: "Develop environment cleaning projects.",image: require('../../assets/goodhabit/developEnvironment.webp') },
      {habit: "Be a responsible citizen based on cleanliness.",image: require('../../assets/goodhabit/responsible.webp') },
      {habit: "A clean environment is an important aspect of life.",image: require('../../assets/goodhabit/acleanEnvironment.webp') },
      {habit: "Don't throw garbage anywhere in the environment.",image: require('../../assets/goodhabit/throwGarbage.webp') },
      {habit: "Try to keep the environment pollution free .",image: require('../../assets/goodhabit/pollutionFree.webp') },
      
    ]
    setdataArray(tempArr);
  }
  const BeingNice = () => {
    let tempArr = [
      {habit: "Be Courteous to Everyone",image: require('../../assets/goodhabit/beCourteous.webp') },
      {habit: "Respect others",image: require('../../assets/goodhabit/respectOthers.webp') },
      {habit: "Helping others",image: require('../../assets/goodhabit/helpingOthers.webp') },
      {habit: "Adopt a friendly attitude",image: require('../../assets/goodhabit/adoptaFriendly.webp') },
      {habit: "Be on good behavior",image: require('../../assets/goodhabit/goodBehavior1.webp') },
      {habit: "Maintain cleanliness.",image: require('../../assets/goodhabit/maintainCleanliness.webp') },
      {habit: "Try to believe in yourself .",image: require('../../assets/goodhabit/trytoBelieve.webp') },
      {habit: "Learn to be diligent .",image: require('../../assets/goodhabit/learntoBe.webp') },
      {habit: "be honest",image: require('../../assets/goodhabit/beHonest.webp') },
      {habit: "Try to be active in any activity.",image: require('../../assets/goodhabit/anyActivity.webp') },
      {habit: "Be brave in life",image: require('../../assets/goodhabit/beBrave.webp') },
      
    ]
    setdataArray(tempArr);
  }
  const StayingHealthy = () => {
    let tempArr = [
      {habit: "Take care of personal hygiene.",image: require('../../assets/goodhabit/takeCare.webp') },
      {habit: "Follow a healthy lifestyle",image: require('../../assets/goodhabit/healthyLifestyle.webp') },
      {habit: "Avoid fast food to maintain health.",image: require('../../assets/goodhabit/avoidfastFood.webp') },
      {habit: "Make it a habit to eat breakfast on time",image: require('../../assets/goodhabit/makeitaHabit1.webp') },
      {habit: "Drink pure water.",image: require('../../assets/goodhabit/drinkpureWater.webp') },
      {habit: "Try to understand your own body condition",image: require('../../assets/goodhabit/trytoUnderstand.webp') },
      {habit: "Maintain a healthy body structure by exercising daily.",image: require('../../assets/goodhabit/healthyBody.webp') },
      
    ]
    setdataArray(tempArr);
  }
  const Discipline = () => {
    let tempArr = [
      {habit: "Keep yourself cool and age-appropriate.",image: require('../../assets/goodhabit/keepYourself.webp') },
      {habit: "Be kind, but not unkind.",image: require('../../assets/goodhabit/bekind.webp') },
      {habit: "Learn to take care of yourself .",image: require('../../assets/goodhabit/learntoTake.webp') },
      {habit: "Praise Good Behavior.",image: require('../../assets/goodhabit/praiseGood.webp') },
      {habit: "Respect good behavior .",image: require('../../assets/goodhabit/goodBehavior.webp') },
      {habit: "Increase your endurance",image: require('../../assets/goodhabit/Increase.webp') },
      
    ]
    setdataArray(tempArr);
  }
  // SmartChildren = () => {
  //   let tempArr = [
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //     {habit: "",image: require('../../assets/bg5.webp') },
  //   ]
  //   setdataArray(tempArr);
  // }
  const Intelligence = () => {
    let tempArr = [
      {habit: "Reading is a good habit that is good for every student.",image: require('../../assets/goodhabit/reading.webp') },
      {habit: "Reading habit is a sign of increasing knowledge.",image: require('../../assets/goodhabit/readingHabit.webp') },
      {habit: "Reading magazines and newspapers helps to know the information of the world.",image: require('../../assets/goodhabit/readingMagazines.webp') },
      {habit: "Reading improves self-confidence and enhances decision-making ability.",image: require('../../assets/goodhabit/readingimproves.webp') },
      
    ]
    setdataArray(tempArr);
  }
  
    
    //alert(item.name)
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor: Color.primaryBlue}}>
        <StatusBar backgroundColor={Color.primaryBlue} barStyle="light-content" />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height:responsiveHeight(5) }}   onPress={() =>{props.navigation.goBack()} }>
          <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF',marginLeft:responsiveWidth(3),marginRight:responsiveWidth(3) }} />
          <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', }}>{item.name}</Text>
          </TouchableOpacity>
          
          <OptionMenu />


        </View>
        <ViewPager style={{ flex: 1,backgroundColor:Color.pinkBg }} initialPage={pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          setpageIndex(position);
          setimageStatus(null);
          setisBtnDisable(false)
          
          if(isSoundOn)
          txtToSpeak(dataArray[position].habit);
        }} setPage={pageIndex} >

          {dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems:'center',}}>

                <Image source={item.image} style={{ maxHeight: responsiveFontSize(40),width:'100%',resizeMode: 'stretch', }} />

                <View style={{ alignItems:'center',backgroundColor:'#00f5f3',alignItems:'center',justifyContent:'center',width:'100%',marginTop:5}}>
                <View style={{ alignItems:'center',backgroundColor:Color.white,alignItems:'center',justifyContent:'center',width:'100%',marginTop:5 }}>
                <Text style={{ fontSize: CustomFont.font20, color: Color.fontColor, margin: responsiveWidth(4),fontWeight:'bold',textAlign:'center', }}>{item.habit}</Text>
                  </View>
                  
                 </View>
                </View>
                
                <View style={{flex:.8,backgroundColor: Color.pinkBg,alignItems:'center'}}>
                <TouchableOpacity style={{}} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
         setisSoundOn(!isSoundOn);
        }}>
          <Image source={isSoundOn ? sound_off :sound } style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', margin: 15,tintColor:isSoundOn ?'red': 'green' }} />
        </TouchableOpacity>
       
</View>
{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              </View>
            );
          }, this)}

        </ViewPager>
        {/* <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, left: 7, zIndex: 99 }} onPress={() => {
          props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity> */}
        
      </SafeAreaView>
    );
}
//export default HomeDrawer;
