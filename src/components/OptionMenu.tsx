import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Share,
  Platform, Linking
} from 'react-native';
import OptionsMenu1 from "react-native-options-menu";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import three_dots from '../../assets/three_dots.png';
import Color from './Colors';
import CustomFont from './CustomFont';
import Modal from 'react-native-modal';
import close_white from '../../assets/close_white.png';
import imageGray from '../../assets/star_menu.png';
import imageYellow from '../../assets/star_yellow.png';
import Snackbar from 'react-native-snackbar';

const OptionMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    //alert('kl')
  }, []);
  const ShareApp = () => {
    try {
      let strLink = " \uD83D\uDC66 \uD83D\uDC67ছোটদের বাংলা শেখা - Bangla Kids Learning App ✏\uD83D\uDCDA স্বরবর্ণ, ব্যঞ্জনবর্ণ, ড্রয়িং, টাইপিং, গণিত,\uD83D\uDC1F\uD83E\uDD86 কম্পিউটার, খেলাধুলা \uD83D\uDC2A ও ছোটদের ছড়া \uD83D\uDC67 All in one Best Bengali Nursery apps \uD83E\uDD92 \uD83D\uDC18 \n\n";
      if (Platform.OS === 'android') {
        strLink += 'https://play.google.com/store/apps/details?id=com.rks.preschoolbengali';
      } else {
        strLink += 'https://apps.apple.com/us/app/doorhub-driver/1588236419';
      }
      Share.share({
        message: strLink,
        title: 'ছোটদের বাংলা শেখা - Bangla Kids Learning App',
      });
    } catch (error) {
      alert(error.message);
    }
  }
  const RateUs = () => {
    setSelectedIndex(0);
    setIsModalVisible(true)
    // if(Platform.OS==='android'){
    //   Linking.openURL('https://play.google.com/store/apps/details?id=com.rks.preschoolbengali');
    //   }else{
    //     Linking.openURL('https://apps.apple.com/us/app/doorhub-driver/1588236419');
    //   }
  }
  const MoreApps = () => {
    if (Platform.OS === 'android') {
      Linking.openURL('https://play.google.com/store/apps/developer?id=RKS+Mobile+Solution');
    } else {
      Linking.openURL('https://apps.apple.com/in/developer/ramkrishna-samanta/id1588236421');
    }
  }
  const Cancel = () => {
    //alert('kk')
  }
  const changeRating = (index) => {
    setSelectedIndex(index);
  }
  const submitRating = () => {
    if (selectedIndex == 0) {
      Snackbar.show({ text: 'Please choose Rating', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
    } else if (selectedIndex == 5) {
      setTimeout(() => {
        setIsModalVisible(false)
      }, 3000)
      Snackbar.show({ text: 'Thanks for your Feedback.  Your rate on Playstore', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
      setTimeout(() => {

        if (Platform.OS === 'android') {
          Linking.openURL('https://play.google.com/store/apps/details?id=com.rks.preschoolbengali');
        } else {
          Linking.openURL('https://apps.apple.com/us/app/doorhub-driver/1588236419');
        }

      }, 3000)

    } else {
      setTimeout(() => {
        setIsModalVisible(false)
      }, 2000)
      Snackbar.show({ text: 'Thanks for your Feedback', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
    }
  }
  return (
    <View>

      <OptionsMenu1
        button={three_dots}
        buttonStyle={{ width: responsiveFontSize(2.4), height: responsiveFontSize(2.4), margin: 7.5, resizeMode: "contain", tintColor: Color.white }}
        destructiveIndex={4}
        options={["Share App", "Rate Us", "More Apps", "Cancel"]}
        actions={[ShareApp, RateUs, MoreApps, Cancel]} />

      <Modal isVisible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <View style={{ backgroundColor: Color.white, borderRadius: 10 }}>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', margin: responsiveWidth(3) }}>
            <Text style={{ margin: 5, fontSize: CustomFont.font24, color: Color.fontColor }}>Select Rating</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={{ marginRight: responsiveWidth(3), marginTop: 3 }}>
              <Image source={close_white} style={{ tintColor: Color.fontColor, height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', marginRight: 10, marginLeft: 5 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: responsiveHeight(3) }}>
            <TouchableOpacity onPress={() => changeRating(1)}>
              <Image source={selectedIndex > 0 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeRating(2)}>
              <Image source={selectedIndex > 1 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeRating(3)}>
              <Image source={selectedIndex > 2 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeRating(4)}>
              <Image source={selectedIndex > 3 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeRating(5)}>
              <Image source={selectedIndex > 4 ? imageYellow : imageGray} style={{ height: responsiveFontSize(4.5), width: responsiveFontSize(4.5), resizeMode: 'contain', margin: 7 }} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', alignItems: 'center', marginBottom: responsiveHeight(4) }}>
            <TouchableOpacity style={{ backgroundColor: '#FFAA33', borderRadius: 10, width: responsiveWidth(40), justifyContent: 'center', alignItems: 'center' }} onPress={() => submitRating()}>
              <Text style={{ color: Color.white, fontSize: CustomFont.font16, margin: responsiveHeight(2), fontWeight: '600' }}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  );
};

export default OptionMenu;