import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, FlatList, BackHandler, Platform } from 'react-native';
//import Orientation from 'react-native-orientation';
import Toolbar from '../components/Toolbar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Orientation from 'react-native-orientation';
let tag='';
import { playSound, txtToSpeak,clickSound  } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default class MemoryGameChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        { title: 'Lavel 1 ', },
        { title: 'Lavel 2 ', },
        { title: 'Lavel 3 ', },
        { title: 'Lavel 4 ', },
        { title: 'Lavel 5 ', },
      ]

    };
  }
componentDidMount(){
  
}
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ backgroundColor: Color.white, height: responsiveHeight(7), borderRadius: 7, marginTop: 20, justifyContent: 'center', alignItems: 'center',marginLeft:10,marginRight:10,minHeight:50 }}
      onPress={() =>{
      if(IsSoundEnabled)
      clickSound();
      this.props.navigation.navigate('MemoryGame', { item: item ,index:index})
      } }>
      <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700' }}>{item.title}</Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.yellowBg }}>
        <Toolbar color ={Color.pink} title={'Select level for memory game'} onBackPress={() => {
          if(IsSoundEnabled)
          clickSound();
           this.props.navigation.goBack();
            }} isDelete={() => { this.props.navigation.navigate('FullTable'); }} />
        <View style={{ flex: 1}}>
          <FlatList
            style={{ marginTop: 10, marginBottom: 20 }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()} />
            
        </View>

        <View style={{ alignItems: 'center' }}>
        {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
</View>


      </SafeAreaView>
    );
  }

}
//export default HomeDrawer;
