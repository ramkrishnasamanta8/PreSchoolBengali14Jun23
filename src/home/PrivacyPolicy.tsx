import * as React from 'react';
import { View, StatusBar, Linking, Text, Platform, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
const PrivacyPolicy = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
      <Toolbar title={'Privacy Policy'} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        props.navigation.goBack()
      } }/>
        
        <View style={{ flex: 10, backgroundColor: Color.bgColor, }}>
          <ScrollView>
            <View style={{ margin: responsiveWidth(3), backgroundColor: Color.white, borderRadius: 10 }}>
            {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              <View style={{ margin: responsiveWidth(4) }}>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor }}>RKS Mobile Solution has made the
                  'ছোটদের বাংলা শেখা - Abc Alphabets' Bangla Kids Learning application in Bengali language as our hard work . This service is provided by RKS Mobile totally free of cost for help children to learn bengali language as soon as possible.\n
                  If you choose to use our service we feel the best and use our service to encourage us. For collecting information we visited many sites and collect images from free sites, if anyone wish to share information related to learning or have any suggestion and complaints about this app please mail us by clicking under Contact us email option.           Thanking you for support</Text>
                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Security:</Text>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>Our app is Offline and completely secure and electronic information storage is 100% secure and reliable. There are no use any third party analytics and advertisement RKS Mobile Solution is very concerned about safeguarding the confidentiality of your information. We do not collect Personal Information and we employ administrative, physical and electronic measures designed to protect your Non-Personal Information from unauthorised access and use.  Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.</Text>
                
                
                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Contact Us:</Text>
                <TouchableOpacity onPress={()=>{
  Linking.openURL('mailto:rksmobilesolution@gmail.com?subject=From Pre School in Bengali &body=Hi Team')
}}>
                  <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>If you have any questions or suggestions about our app , do not any hesitate to contact us - <Text style={{ color: Color.primaryBlue }}>rksmobilesolution@gmail.com</Text></Text>
                </TouchableOpacity>

                <Text style={{ fontSize: CustomFont.font16, color: Color.optiontext, marginTop: 10 }}>Or</Text>
                <TouchableOpacity><Text style={{ fontSize: CustomFont.font16, color: Color.primaryBlue, marginTop: 10 }} onPress={()=>{
  Linking.openURL('mailto:support@rksmobilesolution.in?subject=From Pre School in Bengali &body=Hi Team')
}}>support@rksmobilesolution.in</Text></TouchableOpacity>


                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Privacy Policy:</Text>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>RKS Mobile Solution built the 'ছোটদের বাংলা শেখা - Abc Alphabets' app as a Free app. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                  If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Information that I collect is used for providing and improving the Service. We do not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at "ছোটদের বাংলা শেখা - Abc Alphabets " unless otherwise defined in this Privacy Policy.</Text>

                <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: Color.black, marginTop: 10 }}>Children’s Privacy:</Text>
                <Text style={{ fontSize: CustomFont.font16, color: Color.fontColor, marginTop: 7 }}>These Services address specially children under the age of 13. Child directed Apps won’t contain have SDKs pertaining to social media services.That is, the Apps will not feature SDKs or data collection from social media Apps. Thease apps do not integrate any of the social media such as Twitter, Facebook or other online services in our Kids APPs. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that I will be able to do necessary actions.</Text>

              </View>

              {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
            </View>
          </ScrollView>

        </View>

      </SafeAreaView>
    );

}
export default PrivacyPolicy;
