import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, FlatList, BackHandler, Platform } from 'react-native';
//import Orientation from 'react-native-orientation';
import Toolbar from '../components/Toolbar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Orientation from 'react-native-orientation';
let tag='',name='';
import { playSound, txtToSpeak,clickSound  } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        { title: '1 to 10 Table ',minNumber:1,maxNumber:11 },
        { title: '11 to 20 Table ' ,minNumber:11,maxNumber:21},
        { title: '21 to 30 Table ',minNumber:21,maxNumber:31 },
        { title: '31 to 40 Table ' ,minNumber:31,maxNumber:41},
        { title: '41 to 50 Table ' ,minNumber:41,maxNumber:51},
        { title: '51 to 60 Table ',minNumber:51 ,maxNumber:61},
        { title: '61 to 70 Table ',minNumber:61 ,maxNumber:71},
        { title: '71 to 80 Table ' ,minNumber:71,maxNumber:81 },
        { title: '81 to 90 Table ',minNumber:81 ,maxNumber:91 },
        { title: '91 to 100 Table ',minNumber:91 ,maxNumber:101},
      ]

    };
  }
componentDidMount(){
  mobileAds()
.setRequestConfiguration({
  // Update all future requests suitable for parental guidance
  maxAdContentRating: MaxAdContentRating.PG,

  // Indicates that you want your content treated as child-directed for purposes of COPPA.
  tagForChildDirectedTreatment: true,

  // Indicates that you want the ad request to be handled in a
  // manner suitable for users under the age of consent.
  tagForUnderAgeOfConsent: true,

  // An array of test device IDs to allow.
  testDeviceIdentifiers: ['EMULATOR'],
})
.then(() => {
  // Request config successfully set!
});
  this.backHandler = BackHandler.addEventListener('hardwareBackPress', () =>{
    if(IsSoundEnabled)
    clickSound();
    this.props.navigation.goBack()
   return true;
  } )
  tag=this.props.route.params.item.tag;
  name=this.props.route.params.item.name;
  if(tag=='MathTable'){
  this.setState({ dataArray: [
      { title: 'Math on 1 to 10 Table ',minNumber:1,maxNumber:11,msg:'1 to 10 Table' },
      { title: 'Math on 11 to 20 Table ' ,minNumber:11,maxNumber:21,msg:'11 to 20 Table'},
      { title: 'Math on 21 to 30 Table ',minNumber:21,maxNumber:31,msg:'21 to 30 Table' },
      { title: 'Math on 31 to 40 Table ' ,minNumber:31,maxNumber:41,msg:'31 to 40 Table'},
      { title: 'Math on 41 to 50 Table ' ,minNumber:41,maxNumber:51,msg:'41 to 50 Table'},
      { title: 'Math on 51 to 60 Table ',minNumber:51 ,maxNumber:61,msg:'51 to 60 Table'},
      { title: 'Math on 61 to 70 Table ',minNumber:61 ,maxNumber:71,msg:'61 to 70 Table'},
      { title: 'Math on 71 to 80 Table ' ,minNumber:71,maxNumber:81 ,msg:'71 to 80 Table'},
      { title: 'Math on 81 to 90 Table ',minNumber:81 ,maxNumber:91 ,msg:'81 to 90 Table'},
      { title: 'Math on 91 to 100 Table ',minNumber:91 ,maxNumber:101,msg:'91 to 100 Table'},
    ]
  })
}else if(tag=='Test'){
  this.setState({ dataArray: [
    { title: 'Test on 1 to 10 Table ',minNumber:1,maxNumber:11,msg:'1 to 10 Table' },
      { title: 'Test on 11 to 20 Table ' ,minNumber:11,maxNumber:21,msg:'11 to 20 Table'},
      { title: 'Test on 21 to 30 Table ',minNumber:21,maxNumber:31,msg:'21 to 30 Table' },
      { title: 'Test on 31 to 40 Table ' ,minNumber:31,maxNumber:41,msg:'31 to 40 Table'},
      { title: 'Test on 41 to 50 Table ' ,minNumber:41,maxNumber:51,msg:'41 to 50 Table'},
      { title: 'Test on 51 to 60 Table ',minNumber:51 ,maxNumber:61,msg:'51 to 60 Table'},
      { title: 'Test on 61 to 70 Table ',minNumber:61 ,maxNumber:71,msg:'61 to 70 Table'},
      { title: 'Test on 71 to 80 Table ' ,minNumber:71,maxNumber:81 ,msg:'71 to 80 Table'},
      { title: 'Test on 81 to 90 Table ',minNumber:81 ,maxNumber:91 ,msg:'81 to 90 Table'},
      { title: 'Test on 91 to 100 Table ',minNumber:91 ,maxNumber:101,msg:'91 to 100 Table'},
  ]
})
}else if(tag=='4Images'){
  if(name == 'Country'){
    this.setState({ dataArray: [
      { title: '4 Words set1' ,route:'Words4Country', tag:'set1' },
      { title: '4 Words set2 ' ,route:'Words4Country', tag:'set2' },
      { title: '4 Words set3 ' ,route:'Words4Country', tag:'set3' },
      { title: '4 Words set4 ' ,route:'Words4Country', tag:'set4' },
      { title: '4 Words set5 ' ,route:'Words4Country', tag:'set5' },
      { title: '4 Words set6 ' ,route:'Words4Country', tag:'set6' },
      { title: '4 Words set7 ' ,route:'Words4Country', tag:'set7' },
      { title: '4 Words set8 ' ,route:'Words4Country', tag:'set8' },
      { title: '4 Words set9 ' ,route:'Words4Country', tag:'set9' },
      { title: '4 Words set10 ' ,route:'Words4Country', tag:'set10' },
  ]
})
  }else{
    this.setState({ dataArray: [
      { title: '4 Images ',route:'Images4' },
        { title: '4 Words ' ,route:'Words4' },
        { title: 'Write Image name ',route:'WriteImgName'  },
    ]
  })
    
  }
  
}
txtToSpeak(tag=='MathTable' ? 'Select Table Range for Math': tag=='Test' ? 'Select Table Range for Test': tag=='4Images'?'Select category for '+name:'Select Range for Table ')
//txtToSpeak(tag=='MathTable' ? 'Select Table Range for Math': tag=='Test' ? 'Select Table Range for Test':'Select Range for Table ');
}
  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ backgroundColor: Color.white, height: responsiveHeight(7), borderRadius: 7, marginTop: 20, justifyContent: 'center', alignItems: 'center',marginLeft:10,marginRight:10,minHeight:50 }}
      onPress={() =>{
      if(IsSoundEnabled)
      clickSound();
      if(tag=='4Images')
      this.props.navigation.navigate(item.route, { item: item ,tag:name})
      else
      this.props.navigation.navigate(tag=='Test' ? 'TestOnTable': tag=='MathTable' ? 'QuizeOnTable' :'Table', { item: item ,Refresh:null,tag:tag}) //
      } }>
      <Text style={{ color: Color.black, fontSize: CustomFont.font20, fontWeight: '700' }}>{item.title}</Text>
    </TouchableOpacity>
  );
  render() {
    Orientation.lockToPortrait();
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.yellowBg }}>
        <Toolbar color ={Color.pink} title={tag=='MathTable' ? 'Select Table Range for Math': tag=='Test' ? 'Select Table Range for Test':tag=='4Images'?'Select category for '+name:'Select Range for Table '} delete={tag=='4Images'?false: true} onBackPress={() => {
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
