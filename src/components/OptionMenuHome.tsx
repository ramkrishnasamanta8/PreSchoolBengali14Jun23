import React, {useState} from 'react';
import {Share,Linking,Platform, Alert} from 'react-native';
import OptionsMenu1 from "react-native-options-menu";
import { responsiveFontSize,responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions';

import three_dots from '../../assets/three_dots.png';
import Colors from './Colors';
import AsyncStorage from '@react-native-community/async-storage';
const OptionMenu = (props) => {
  const [input, setInput] = useState('');
  const ShareApp=()=>{
    let strLink=" 🧩  Matching Game 🧩 , 🔢 123 Marching Game 🔢 , Shapes Marching Game, 🚌 Vehicals Marching Game 🚒  🚕 ,Shadow Marching Game, 🏏 🏑 Sport Marching Game 🏸 ⚽ ,🐈 Animal Marching Game 🦊 🦌 ,Body Parts Marching Game 🐙  🐚 Sea Animal Matching Game 🐬 🐡 , 🦋 Insects Matching Game 🪲 , 🥬 🫑 Vegitables Marching Game 🥦 , 🍊 🍓 Fruits Marching Game 🍎 🥝 , Vehicals Marching Game, 🌺 Flowers Marching Game 🌷 🌾 , 🦜 Birds Marching Game 🦩 🐟 , Computer Marching Game, 🏨  Place Marching Game 🏥 , 🪴 Furnitures Marching Game 🏚   \n\n";
    if(Platform.OS==='android'){
      strLink+= 'https://play.google.com/store/apps/details?id=com.rks.matchinggame';
    }else{
      strLink+='https://apps.apple.com/us/app/doorhub-driver/1621722487';
    }
    try {
       Share.share({
        message: strLink ,
        title: 'Matching Game',
      });
    } catch (error) {
      alert(error.message);
    }
  }
  const RateUs=()=>{
    if(Platform.OS==='android'){
      Linking.openURL('https://play.google.com/store/apps/details?id=com.rks.matchinggame');
      }else{
        Linking.openURL('https://apps.apple.com/us/app/doorhub-driver/1621722487');
      }
  }
  const FeedBack=()=>{
    Linking.openURL('mailto:support@rksmobilesolution.in');
  }
  const moreApps=()=>{
    if(Platform.OS==='android'){
      Linking.openURL('https://play.google.com/store/apps/developer?id=RKS+Mobile+Solution');
      }else{
        Linking.openURL('https://apps.apple.com/in/developer/ramkrishna-samanta/id1588236421');
      }
  }
  const Cancel=()=>{
    //alert('kk')
  }
  const ClearComplete=()=>{
    AsyncStorage.setItem('completeItem','');
    Alert.alert(
      'Success',
      'You have clear all completed item. \n Please back screen',
      [
        {
          text: 'Ok',
          onPress: () => {
            try {
              That.props.navigation.goBack();
            } catch (error) {
              
            }
            
          },
        },
      ],
      { cancelable: false },
    );
    
  }
  return (
    <OptionsMenu1
  button={three_dots}
  buttonStyle={{ width: responsiveFontSize(3), height: responsiveFontSize(3), padding: 10, resizeMode: "contain", tintColor:Colors.white,marginRight:responsiveWidth(4), }}
  destructiveIndex={5}
  options={["Share App", "Rate Us", "Feed Back", "More Apps","Clear Complete", "Cancel"]}
  actions={[ShareApp,RateUs,FeedBack,moreApps,ClearComplete, Cancel]}/>
  );
};

export default OptionMenu;