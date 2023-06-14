import React,{useEffect,useState,useRef} from 'react';
import { View, SafeAreaView, FlatList, Text, TouchableOpacity, Share, ScrollView,ImageBackground,TextInput,Keyboard } from 'react-native';

import wood_bg from '../../assets/wood_bg.jpg';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import Toolbar from '../components/Toolbar';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en');
const Typing=(props)=> {
const [dataArr,setDataArr]=useState([{name:"A", sound:'a.mp3',color:"#fe0000"},
{name:"B", sound:'b.mp3',color:"#029702"},
{name:"C", sound:'c.mp3',color:"#ff00fe"},
{name:"D", sound:'d.mp3',color:"#7430ff"},
{name:"E", sound:'e.mp3',color:"#DC9900"},
{name:"F", sound:'f.mp3',color:"#3800fd"},
{name:"G", sound:'g.mp3',color:"#000000"},
{name:"H", sound:'h.mp3',color:"#0E6E01"},
{name:"I", sound:'i.mp3',color:"#ff00fe"},
{name:"J", sound:'j.mp3',color:"#E0220E"},
{name:"K", sound:'k.mp3',color:"#0166fe"},
{name:"L", sound:'l.mp3',color:"#b300d5"},
{name:"M", sound:'m.mp3',color:"#da8302"},
{name:"N", sound:'n.mp3',color:"#D81B60"},
{name:"O", sound:'o.mp3',color:"#007500"},
{name:"P", sound:'p.mp3',color:"#3900ff"},
{name:"Q", sound:'q.mp3',color:"#fe2f9c"},
{name:"R", sound:'r.mp3',color:"#7a2048"},
{name:"S", sound:'s.mp3',color:"#008000"},
{name:"T", sound:'t.mp3',color:"#00ce01"},
{name:"U", sound:'u.mp3',color:"#a96601"},
{name:"V", sound:'v.mp3',color:"#016565"},
{name:"W", sound:'w.mp3',color:"#b03069"},
{name:"X", sound:'x.mp3',color:"#0165ff"},
{name:"Y", sound:'y.mp3',color:"#002f00"},
{name:"Z", sound:'z.mp3',color:"#f90101"},
{name:"", sound:'z.mp3',color:"#f90101"},
{name:"", sound:'z.mp3',color:"#f90101"},
{name:"", sound:'z.mp3',color:"#f90101"},
{name:"", sound:'z.mp3',color:"#f90101"},
{name:"1", sound:'',color:"#fe0000"},
{name:"2", sound:'',color:"#029702"},
{name:"3", sound:'',color:"#ff00fe"},
{name:"4", sound:'',color:"#7430ff"},
{name:"5", sound:'',color:"#DC9900"},
{name:"6", sound:'',color:"#3800fd"},
{name:"7", sound:'',color:"#000000"},
{name:"8", sound:'',color:"#0E6E01"},
{name:"9", sound:'',color:"#ff00fe"},
{name:"10",sound:'',color:"#E0220E"},
{name:"11",sound:'',color:"#0166fe"},
{name:"12",sound:'',color:"#b300d5"},
{name:"13",sound:'',color:"#da8302"},
{name:"14",sound:'',color:"#D81B60"},
{name:"15",sound:'',color:"#007500"},
{name:"16",sound:'',color:"#3900ff"},
{name:"17",sound:'',color:"#fe2f9c"},
{name:"18",sound:'',color:"#7a2048"},
{name:"19",sound:'',color:"#008000"},
{name:"20",sound:'',color:"#00ce01"},]);

const [dataArrNumber,setDataArrNumber] =useState([{name:"1", sound:'',color:"#fe0000"},
  {name:"2", sound:'',color:"#029702"},
  {name:"3", sound:'',color:"#ff00fe"},
  {name:"4", sound:'',color:"#7430ff"},
  {name:"5", sound:'',color:"#DC9900"},
  {name:"6", sound:'',color:"#3800fd"},
  {name:"7", sound:'',color:"#000000"},
  {name:"8", sound:'',color:"#0E6E01"},
  {name:"9", sound:'',color:"#ff00fe"},
  {name:"10",sound:'',color:"#E0220E"},
  {name:"11",sound:'',color:"#0166fe"},
  {name:"12",sound:'',color:"#b300d5"},
  {name:"13",sound:'',color:"#da8302"},
  {name:"14",sound:'',color:"#D81B60"},
  {name:"15",sound:'',color:"#007500"},
  {name:"16",sound:'',color:"#3900ff"},
  {name:"17",sound:'',color:"#fe2f9c"},
  {name:"18",sound:'',color:"#7a2048"},
  {name:"19",sound:'',color:"#008000"},
  {name:"20",sound:'',color:"#00ce01"}])
const [inputTxt,setInputTxt] =useState('')

  // constructor(props) {
  //   super(props);
  //   state = {
  //     dataArr:,
  //     inputTxt:''

  //   };
  // }
  // async componentDidMount() {
    
  // }
  renderList = ({ item, index }) => (
    <View>
      {
        item.name ?  <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center',backgroundColor:Color.white,borderRadius:10,marginLeft:responsiveWidth(1),marginRight:responsiveWidth(1),marginTop:responsiveWidth(1.5),  height:responsiveHeight(7),borderColor:'#C42402',borderWidth:1,width:responsiveWidth(17.5) }} onPress={() => {
     setInputTxt(inputTxt+item.name )
     if(index<26){
      playSound(dataArr[index].sound)
     }else{
      Tts.speak(dataArr[index].name);
     }
    // alert(index)
        }} >
          <Text style={{fontSize:CustomFont.font20,fontWeight:'bold', color:item.color,margin:responsiveWidth(1.6)}}>{item.name}</Text>
        </TouchableOpacity> :<TouchableOpacity style={{width:responsiveWidth(76),height:responsiveHeight(7),backgroundColor:Color.white,borderRadius:10,marginLeft:responsiveWidth(1),marginRight:responsiveWidth(10),marginTop:responsiveWidth(1.5),alignItems: 'center', justifyContent: 'center'}}onPress={() => {
     setInputTxt(inputTxt+' ');
     txtToSpeak('space');
        }}>
<Text style={{fontSize:CustomFont.font20,color:Color.fontColor}}>Space</Text>
        </TouchableOpacity>
      }

    </View>
   
  );
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#b95500' }}>
      <Toolbar title={'Typing'} onBackPress={() =>{
        if(IsSoundEnabled)
        clickSound();
        props.navigation.goBack()
      } } delete={true} color={'#b95500'} isDelete={()=>setInputTxt('')}/>
        

        <View style={{ flex: 10 }}>
        <ImageBackground source={wood_bg} resizeMode="stretch" style={{ flex: 1, }}>
            <View>
            <TextInput selectionColor={Color.white} style={{height:responsiveHeight(30),backgroundColor:Color.black,margin:responsiveWidth(2),borderRadius:10,color:Color.white,fontSize:CustomFont.font18,textAlignVertical: 'top',fontFamily:'Digital Dream Fat', paddingTop:7, paddingLeft:7,paddingRight:7,paddingBottom:7,borderWidth:2,borderColor:Color.white}} multiline={true} 
            value={inputTxt} onFocus={()=>{
              //Keyboard.dismiss()
              // setTimeout(()=>{
              //   Keyboard.dismiss()
              // },1000)
              }} onChangeText={inputTxt => {
                setInputTxt(inputTxt);
              }}/>
            <FlatList
            numColumns={5}
            style={{marginLeft:5,marginBottom:responsiveHeight(32.5)}}
            data={dataArr}
            renderItem={renderList}
            //ItemSeparatorComponent={renderSeparator}
            keyExtractor={(item, index) => index.toString()} />
            </View>

        </ImageBackground>
        
        </View>

       <View style={{alignItems:'center',}}>
       {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
                  </View>
      </SafeAreaView>
    );
}
export default Typing;
