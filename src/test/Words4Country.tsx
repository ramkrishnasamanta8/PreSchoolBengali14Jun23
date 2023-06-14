import * as React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, Platform, FlatList, Spokestack, ImageBackground } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import bgImage from '../../assets/bg.png';
import back from '../../assets/back.png';
import sound_off from '../../assets/sound_off.png';
import sound from '../../assets/sound.png';
import success from '../../assets/success.png';
import error from '../../assets/error.png';
let itemHome = null, from = 'cap';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak, clickSound } from '../components/CommonFunc';

import ViewPager from 'react-native-pager-view';
let position = 0, favTxt = '', id = '';
let soundArr = ['yes.mp3', 'wow.mp3', 'good.mp3', 'excellent.mp3', 'great_job.mp3', 'amazing.mp3'];
let soundPosition = 0, tag = '';
export default class Words4Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      score: 0,
      dataArray: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',],
      imageStatus: null,
      isBtnDisable: false,
      clickIndex: -1,
      isSoundOn:true,
    };

  }
  async componentDidMount() {
    tag = this.props.route.params.item.tag;
    if (tag == 'set1') {
      this.CountrySet1();
    } else if (tag == 'set2') {
      this.CountrySet2();
    } else if (tag == 'set3') {
      this.CountrySet3();
    } else if (tag == 'set4') {
      this.CountrySet4();
    } else if (tag == 'set5') {
      this.CountrySet5();
    } else if (tag == 'set6') {
      this.CountrySet6();
    } else if (tag == 'set7') {
      this.CountrySet7();
    } else if (tag == 'set8') {
      this.CountrySet8();
    } else if (tag == 'set9') {
      this.CountrySet9();
    } else if (tag == 'set10') {
      this.CountrySet10();
    }
  }
  CountrySet1 = () => {
    let tempArr = [
      { resultIndex: 2, question: "What is the capital of Canada?", ans: ['Toronto', 'Ottawa', 'Santiago', 'None of the above'] },
      { resultIndex: 4, question: "What is the Capital of India.", ans: [' Bangalore', ' Kolkata', ' Mumbai', ' New Delhi'] },
      { resultIndex: 2, question: "What is the Capital of Sri Lanka.", ans: [' Colombo', ' Sri Jayawardenaepura Kotte', ' Anuradhapura', ' Mankulam'] },
      { resultIndex: 3, question: "What is the Capital of Japan.", ans: [' Kyoto ', ' Nagoya', 'Tokyo', 'Hiroshima'] },
      { resultIndex: 3, question: "What is the Capital of Singapore.", ans: [' Kluang', 'Malacca', 'Singapore', 'Taiping'] },
      { resultIndex: 1, question: "What is the Capital of Nepal.", ans: [' Kathmandu', 'Nepalgunj', 'Bharatpur', ' Patan'] },
      { resultIndex: 3, question: "What is the capital of Thailand.", ans: [' Sing Buri', 'Seol', 'Bangkok', 'Burma'] },
      { resultIndex: 4, question: "What is the Capital of Vietnam.", ans: [' Viet Tri', 'Pleiku', 'Hai Phong', 'Hanoi'] },
      { resultIndex: 1, question: "What is the Capital of Cambodia.", ans: [' Phnom Penh', 'Phnom Kravanh', 'Krong Kampot', 'Bakan'] },
      { resultIndex: 2, question: "What is the Capital of Bangladesh.", ans: [' Madaripur', 'Dhaka', 'Khulna', 'Barisal'] },
      
    ];
    this.setState({ dataArray: tempArr });

  }
  CountrySet2 = () => {
    let tempArr = [
      { resultIndex: 3, question: "What is the Capital of Saudi Arabia.", ans: [' Medina', 'Mecca', 'Riyadh', 'Jeddah'] },
      { resultIndex: 4, question: "What is Capital of Kuwait.", ans: [' Al Jahra', 'Sabah Al', 'Abdali', 'Kuwait'] },
      { resultIndex: 1, question: "What is the Capital of Iran.", ans: [' Tehran', 'Tabriz', 'Shiraz', 'Isfahan'] },
      { resultIndex: 2, question: "What is the Capital of Iraq.", ans: [' Karbala', 'Baghdad', 'Basrah', 'Mosul'] },
      { resultIndex: 3, question: "The national currency of India is ___.", ans: [' Rupiah', 'Yuan', 'Rupee', 'None of the Above'] },
      { resultIndex: 4, question: "What is the national currency of South Korea?", ans: [' Rial', 'Pound', 'Krona', 'Won'] },
      { resultIndex: 1, question: "The national currency of Sri Lanka is ___.", ans: [' Rupee', 'Euro', 'Kyat', 'Ringgit'] },
      { resultIndex: 3, question: " ___ is the national currency of Israel.", ans: [' Euro', 'Yen', 'New Shekel', 'Kip'] },
      { resultIndex: 2, question: "What is the national currency of Germany?", ans: [' Naira', 'Euro', 'Rupee', 'Pound'] },
      { resultIndex: 1, question: " ___ is the national currency of France.", ans: [' Franc', 'Riyal', 'Dollar', 'Won'] },
      { resultIndex: 4, question: "The national currency of Belgium is ___.", ans: [' Rand', 'Somoni', 'Pound', 'Euro'] },
      
    ]
    this.setState({ dataArray: tempArr });
  }
  CountrySet3 = () => {
    let tempArr = [
      { resultIndex: 1, question: "The national currency of Brazil is ___.", ans: [' Real', 'Franc', 'Pound', 'Yen'] },
      { resultIndex: 4, question: "___ is the national currency of Bhutan.", ans: [' Rupee', 'Dinar', 'Dirham', 'Ngultrum'] },
      { resultIndex: 3, question: "What is the national currency of Saudi Arabia?", ans: [' Riyal', 'Shekel', 'Riyal', 'Rupiah'] },
      { resultIndex: 2, question: "The national currency of Pakistan is ___.", ans: [' Ruble', 'Rupee', 'Zloty', 'Leu'] },
      { resultIndex: 2, question: "What is the national currency of China?", ans: [' Peso', 'Yuan', 'Dollar', 'Yen'] },
      { resultIndex: 1, question: "What is the national currency of Nepal?", ans: [' Rupee', 'Taka', 'Paise', 'Pound'] },
      { resultIndex: 3, question: "The national currency of Bangladesh is ___.", ans: [' Lek', 'Slotty', 'Taka', 'None of the Above'] },
      { resultIndex: 1, question: "___ is the national currency of Afghanistan.", ans: [' Afghani', 'Ruble', 'Yen', 'Dollar'] },
      { resultIndex: 4, question: " ___ is the national currency of New Zealand.", ans: [' Kwanza', 'Dinar', 'Pound', 'Dollar'] },
      { resultIndex: 1, question: "What is the national currency of South Africa?", ans: ['Rand', 'Pound', 'Franc', 'Dinar'] },
      { resultIndex: 3, question: "The national currency of Australia is ___.", ans: ['Rupiah', 'Yen', 'Dollar', 'Yuan'] },
      
    ];
    this.setState({ dataArray: tempArr });
  }
  CountrySet4 = () => {
    let tempArr = [
      { resultIndex: 1, question: "Nairobi is the capital city of which country?", ans: [' Kenya', 'Japan', 'Iraq', 'Iran'] },
      { resultIndex: 2, question: "___ is the capital city of India.", ans: [' Mumbai', 'New Delhi', 'Lahore', 'Hyderabad'] },
      { resultIndex: 3, question: "Amsterdam is the capital city of which country?", ans: [' Nepal', 'New Zealand', 'Netherlands', 'Myanmar'] },
      { resultIndex: 1, question: "What is the capital city of Oman?", ans: [' Muscat', 'Tehran', 'Islamabad', 'Riyadh'] },
      { resultIndex: 2, question: "___ is the capital city of South Korea.", ans: [' Stockholm', 'Seoul', 'Berlin', 'Pyongyang'] },
      { resultIndex: 3, question: "___ is the capital city of the United States of America (USA).", ans: [' New York', 'Chicago', 'Washington, D.C.', 'Philadelphia'] },
      { resultIndex: 1, question: "Abu Dhabi is the capital city of which country?", ans: [' United Arab Emirates (UAE)', 'United Kingdom (UK)', 'Sweden', 'South Africa'] },
      { resultIndex: 3, question: "What is the capital city of Indonesia?", ans: [' Budapest', 'Kingston', 'Jakarta', 'Tokyo'] },
      { resultIndex: 1, question: "Dublin is the capital city of ___", ans: [' Ireland', 'Iran', 'Sweden', 'Norway'] },
      { resultIndex: 1, question: "What is the capital city of Lebanon?", ans: [' Beirut', 'Bishkek', 'Pristina', 'Tripoli'] },
     
    ];
    this.setState({ dataArray: tempArr });
  }
  CountrySet5 = () => {
    let tempArr = [
      { resultIndex: 4, question: "What is the currency of Greece?", ans: [' Lempira', 'Dollar', 'Gourda', 'Euro'] },
      { resultIndex: 3, question: "Rupees is the currency of which country?", ans: [' Iceland', 'Haiti', 'India', 'Iran'] },
      { resultIndex: 4, question: "Ringgit is the currency of which country?", ans: [' Madagascar', 'Malawi', 'Maldives', 'Malaysia'] },
      { resultIndex: 4, question: "What currency is used in Malta?", ans: [' Dinar', 'Leu', 'Peso', 'Euro'] },
      { resultIndex: 3, question: "What is the currency of Saudi Arabia?", ans: [' Tala', 'Euro', 'Riyal', 'Dinar'] },
      { resultIndex: 3, question: "Which currency is used in Thailand?", ans: [' Dolllar', 'Manar', 'Baht', 'Vatu'] },
      { resultIndex: 4, question: "Which two countries use Euro as their currency?", ans: [' India and Nepal', 'Pakistan and India', 'Singapore and Slovakia', 'Slovakia and San Marino'] },
      { resultIndex: 1, question: "“Panga ya Saidi” caves are located in which country?", ans: [' Kenya', 'Australia', 'Sri Lanka', 'Thailand'] },
      { resultIndex: 2, question: "The Bangabandhu-Bapu digital exhibition has been inaugurated in which country?", ans: [' India', 'Bangladesh', 'Sri Lanka', 'Nepal'] },
      { resultIndex: 2, question: "Which country, facing its worst inflation, introduced a new currency with six fewer zeros?", ans: [' Iran', 'Venezuela', 'Afghanistan', 'Sri Lanka'] },
      
      
    ];
    this.setState({ dataArray: tempArr });
  }
  CountrySet6 = () => {
    let tempArr = [{ resultIndex: 3, question: "What is the Capital of Bhutan.", ans: [' Paro', 'Mongar', 'Thimphu', 'Jakar'] },
    { resultIndex: 2, question: "What is the Capital of Pakistan.", ans: [' Lahore', 'Islamabad', 'Karachi', 'Faisalabad'] },
    { resultIndex: 1, question: "What is the Capital of Afghanistan.", ans: [' Kabul', 'Kandahar', 'Herat', 'Kunduz'] },
    { resultIndex: 3, question: "What is the Capital of Malaysia", ans: [' Kuala Krai', 'Kuala Lipis', 'Kuala Lampur', 'Kuala Kangsar'] },
    { resultIndex: 2, question: "What is the Capital of Indonesia.", ans: [' Bogor', 'Jakarta', 'Semarang', 'Surabaya'] },
    { resultIndex: 4, question: "What is the Capital of Philippines.", ans: [' Davao', 'Cebu', 'Surigao', 'Manila'] },
    { resultIndex: 1, question: "What is the Capital of China.", ans: [' Beijing', 'Hongkong', 'Jining', 'Harbin'] },
    { resultIndex: 3, question: "What is the national currency of Iceland?", ans: [' Dinar', 'Franc', 'Krona', 'Yuan'] },
    { resultIndex: 4, question: "The national currency of Hungary is ___.", ans: [' Dollar', 'Rupiah', 'Baht', 'Forint'] },
    { resultIndex: 2, question: "What is the national currency of Poland?", ans: [' Yen', 'Zloty', 'Dollar', 'Peso'] },
    { resultIndex: 1, question: "___ is the national currency of Myanmar.", ans: [' Kyat', 'Baht', 'Pound', 'Lira'] },
    { resultIndex: 2, question: "___ is the national currency of Maldives.", ans: [' Regel', 'Rufiyaa', 'Som', 'Manat'] },
    { resultIndex: 4, question: "The national currency of Malaysia is ___.", ans: [' Lira', 'Dollar', 'Kwacha', 'Ringgit'] },
    { resultIndex: 1, question: "The national currency of Japan is ___.", ans: [' Yen', 'Baht', 'Manat', 'Wohn'] },
    { resultIndex: 3, question: "___ is the national currency of Indonesia.", ans: [' Paise', 'Peso', 'Rupiah', 'Somoni'] },
    { resultIndex: 3, question: "What is the national currency of Cambodia?", ans: [' Peso', 'Rupee', 'Riel', 'Taka'] },
  ];
    this.setState({ dataArray: tempArr });
  }
  CountrySet7 = () => {
    let tempArr = [{ resultIndex: 4, question: "What is the national currency of the United Kingdom?", ans: ['Taka', 'Paise', 'Yen', 'Pound Sterling'] },
    { resultIndex: 2, question: "___ is the national currency of Russia.", ans: [' Leki', 'Ruble', 'Peso', 'Euro'] },
    { resultIndex: 2, question: "The national currency of the United States of America (USA) is ___.", ans: [' Euro', 'Dollar', 'Rand', 'Yen'] },
    { resultIndex: 1, question: "___ is the capital of Russia.", ans: ['Moscow', 'New Delhi', 'Havana', 'Prague'] },
    { resultIndex: 2, question: "What is the capital of Canada?", ans: ['Toronto', 'Ottawa', 'Santiago', 'None of the above'] },
    { resultIndex: 1, question: "Canberra is the capital city of which island continent?", ans: [' Australia', 'Asia', 'North America', 'Africa'] },
    { resultIndex: 1, question: "What is the capital city of Italy which is also referred to as the “Eternal City” of the world?", ans: [' Rome', 'Washington DC', 'Tripoli', 'Skopje'] },
    { resultIndex: 1, question: "Wellington is the capital of which country?", ans: [' New Zealand', 'United States of America (USA)', 'Kenya', 'None of the above'] },
    { resultIndex: 4, question: "Lima is the capital of ___", ans: [' Pakistan', 'Rwanda', 'Poland', 'Peru'] },
    { resultIndex: 2, question: "___ is the capital of Malaysia.", ans: [' Male', 'Kuala Lumpur', 'London', 'Seoul'] },
    { resultIndex: 1, question: "Athens is the capital of which southeastern European country?", ans: [' Greece', 'Germany', 'Finland', 'Czech Republic'] },
    { resultIndex: 1, question: "Vienna is the capital city of ___", ans: [' Austria', 'Bahrain', 'India', 'Hungary'] },
    { resultIndex: 3, question: "What is the capital city of Israel?", ans: [' Dublin', 'Rome', 'Jerusalem', 'Baghdad'] },];
    this.setState({ dataArray: tempArr });
  }
  CountrySet8 = () => {
    let tempArr = [ { resultIndex: 2, question: "___ is the capital city of Slovakia.", ans: [' Honiara', 'Bratislava', 'Madrid', 'Helsinki'] },
    { resultIndex: 1, question: "What is the capital of Spain?", ans: [' Madrid', 'Port of Spain', 'Tunis', 'Kampala'] },
    { resultIndex: 2, question: "___ is the capital city of Bangladesh.", ans: [' Kabul', 'Dhaka', 'Karachi', 'Kathmandu'] },
    { resultIndex: 1, question: "What is the capital city of China?", ans: [' Beijing', 'Shanghai', 'Shenzhen', 'Xiamen'] },
    { resultIndex: 2, question: "___ is the capital city of France.", ans: [' Toulouse', 'Paris', 'Bordeaux', 'Strasbourg'] },
    { resultIndex: 4, question: "Cairo is the capital city of which country?", ans: [' Greece', 'Jordan', 'Kuwait', 'Egypt'] },
    { resultIndex: 1, question: "___ is the capital city of Mauritius.", ans: [' Port Louis', 'Majuro', 'Curepipe', 'Goodlands'] },
    { resultIndex: 3, question: "What is the capital city of the Philippines?", ans: [' Warsaw', 'Quezon City', 'Manila', 'Davao City'] },
    { resultIndex: 2, question: "Taka is the currency of which country?", ans: [' India', 'Bangladesh', 'Argentina', 'Brazil'] },
    { resultIndex: 4, question: "What is the currency of Algeria called?", ans: [' Euro', 'Dollar', 'Yen', 'Dinar'] },
    { resultIndex: 2, question: "What is the currency of Ghana?", ans: [' Dalasi', 'Cedi', 'Euro', 'Lari'] },];
    this.setState({ dataArray: tempArr });
  }
  CountrySet9 = () => {
    let tempArr = [{ resultIndex: 1, question: "Which country has passed the “Foreign Interference (Countermeasures) Bill”?", ans: [' Singapore', 'Sri Lanka', 'Afghanistan', 'Nepal'] },
    { resultIndex: 3, question: "Which country launched the ‘Syracuse 4A satellite’, to enhance the communication of its armed forces?", ans: [' Israel', 'UAE', 'France', 'Germany'] },
    { resultIndex: 1, question: "Shenzhou-13 Mission, is associated with which country?", ans: [' China', 'Japan', 'Israel', 'UAE'] },
    { resultIndex: 2, question: "Which country re-launched the “Cancer Moonshot” program?", ans: [' China', 'USA', 'Russia', 'UK'] },
    { resultIndex: 2, question: "Which country is the world’s largest consumer of Gold?", ans: [' India', 'China', 'USA', 'Australia'] },
    { resultIndex: 2, question: "Which country has signed a deal with Rwanda to relocate asylum seekers?", ans: [' USA', 'UK', 'Germany', 'Poland'] },
    { resultIndex: 1, question: "Which country has recently abolished its controversial “Golden passports” scheme?", ans: [' Bulgaria', 'Ukraine', 'Italy', 'UK'] },
    { resultIndex: 3, question: "Which country proposed the ‘Global Security Initiative’?", ans: [' USA', 'UK', 'China', 'Russia'] },
    { resultIndex: 3, question: "Which countries are the members of the recently formed ‘I2U2 Grouping’?", ans: [' India, Iraq, USA and UK', 'India, Israel, USA and UK', 'India, Israel, USA and UAE', 'India, Iraq, USA and UAE'] },
    { resultIndex: 2, question: "Which country has announced to begin formal trade talks with Taiwan?", ans: [' India', 'USA', 'Australia', 'Canada'] },];
    this.setState({ dataArray: tempArr });
  }
  CountrySet10 = () => {
    let tempArr = [{ resultIndex: 3, question: "The countries which are called the ‘Rice Bowl’ of Asia are -", ans: [' India, Pakistan, Nepal, Mongolia', 'Japan, Indonesia, Malaysia, India', 'Myanmar, Thailand, Kampuchea and Vietnam', 'China, Japan, Sri Lanka, India'] },
    { resultIndex: 4, question: "Nassau is the capital of ___", ans: [' Belize', 'Norway', 'Uzbekistan', 'The Bahamas'] },
    { resultIndex: 2, question: "Which of the following countries is not a part of Horn of Africa?", ans: [' Eritrea', ' Algeria', 'Djibouti', 'Somalia'] },
    { resultIndex: 4, question: "Which is the capital of Belgium?", ans: [' Athens', 'Lome', 'Skopje', 'Brussels'] },
    { resultIndex: 1, question: "What was the first capital of Angola?", ans: [' Luanda', 'Nova Lisboa (Huambo)', 'Benguela', 'None of these'] },
    { resultIndex: 2, question: "Which is the capital of Barbados?", ans: [' Vaduz', 'Bridgetown', 'Brazzaville', 'San Jose'] },
    { resultIndex: 3, question: "Which is the capital of Benin?", ans: [' Dhaka', 'Ljubljana', 'Porto-Novo', 'Kuala Lumpur'] },
    { resultIndex: 3, question: "Which of the following country has given first time voting rights to women?", ans: [' USA', 'France', 'New Zealand', 'India'] },
    { resultIndex: 3, question: "Andorra la Vella is the capital of ___.", ans: [' Sudan', 'Taiwan', 'Andorra', 'Burkina Faso'] },
    { resultIndex: 1, question: "Which of following countries has highest per capita income in the world?", ans: [' Qatar', 'Luxembourg', 'Macau', 'Liechtenstein'] },];
    this.setState({ dataArray: tempArr });
  }
  
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, borderRadius: 10, borderColor: this.state.clickIndex == index ? this.state.imageStatus == 'right' ? '#4cd038' : this.state.imageStatus == 'wrong' ? 'red' : '#003334' : '#003334', borderWidth: 2, marginRight: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center', minHeight: responsiveHeight(15) }} onPress={() => {
      if (this.state.dataArray[position].resultIndex - 1 == index) {
        playSound('win.mp3');
        this.setState({ imageStatus: 'right', isBtnDisable: true });
        setTimeout(() => {
          try {
            if (this.state.pageIndex < this.state.dataArray.length - 1)
              this.refs.viewpager.setPage(++this.state.pageIndex)
            else
              this.props.navigation.navigate('CommonMessage', { howmanyback: 2 })
          } catch (error) {

          }

        }, 2200)
      } else {
        playSound('wrong.mp3')
        this.setState({ imageStatus: 'wrong' });
      }
      this.setState({ clickIndex: index })
    }} disabled={this.state.isBtnDisable}>
      <Text style={{ color: Color.fontColor, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', textAlign: 'center' }}> {item}</Text>
    </TouchableOpacity>
  );
  render() {
    let item = this.props.route.params.item;
    //alert(item.name)
    return (
      <View style={{ flex: 1, backgroundColor: Color.white }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <ViewPager style={{ flex: 1 }} initialPage={this.state.pageIndex} onPageSelected={(e) => {
          position = e.nativeEvent.position;
          this.setState({ pageIndex: position, imageStatus: null, isBtnDisable: false });
          if(this.state.isSoundOn)
          txtToSpeak(this.state.dataArray[position].question.replace('___',' what'));

          this.setState({ clickIndex: -1 });
        }} setPage={this.state.pageIndex} ref='viewpager'>

          {this.state.dataArray.map((item, index) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: Color.green, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici', marginTop: responsiveHeight(12), marginLeft: 10, marginRight: 10, textAlign: 'center' }}> {item.question} </Text>


                  {this.state.imageStatus ? <View>
                    {this.state.imageStatus == 'right' ? <Text style={{ color: Color.green, fontSize: CustomFont.font30, fontFamily: Platform.OS == 'ios' ? 'Comic Sans MS' : 'comici' }}> {item.bengName} </Text> : null}

                    <Image source={this.state.imageStatus == 'right' ? success : error} style={{ height: responsiveFontSize(12), width: responsiveFontSize(12), resizeMode: 'contain', marginTop: 0, tintColor: this.state.imageStatus == 'right' ? 'green' : null }} />
                  </View> : null}
                </View>
                <View>


                  <FlatList
                    numColumns={2}
                    style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2), marginLeft: 10 }}
                    data={item.ans}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()} />
                </View>
                {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
              </View>
            );
          }, this)}

        </ViewPager>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, left: 7, zIndex: 99 }} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
          this.props.navigation.goBack()
        }}>
          <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 15 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS == 'ios' ? responsiveHeight(4) : 5, right: 7, zIndex: 99 }} onPress={() => {
          if (IsSoundEnabled)
            clickSound();
         this.setState({isSoundOn:!this.state.isSoundOn});
        }}>
          <Image source={this.state.isSoundOn ? sound_off :sound } style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', margin: 15,tintColor:this.state.isSoundOn ?'red': 'green' }} />
        </TouchableOpacity>
      </View>
    );
  }

}
//export default HomeDrawer;
