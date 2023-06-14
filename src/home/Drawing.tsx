import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, PermissionsAndroid, SafeAreaView, FlatList, Platform, TextInput } from 'react-native';

import back_blue from '../../assets/back_blue.png';
import pencil from '../../assets/edit_gray.png';
import eraser from '../../assets/eraser.png';
import color_picker from '../../assets/color_picker.png';
import close_white from '../../assets/close_white.png';
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import deleteImg from '../../assets/close.png';
import saveImg from '../../assets/save.png';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
let colorArr = ["#fffde8", "#fffac3", "#fff59c", "#fff176", "#ffee58", "#ffeb3c", "#fdd734", "#fac02e", "#f9a825", "#f47f16", "#ffff8d", "#ffff00", "#ffea00", "#ffd600", "#fbe9e7", "#ffccbb", "#ffab91", "#ff8a66", "#ff7143", "#fe5722", "#f5511e", "#e64a19", "#d74315", "#bf360c", "#ff9e81", "#ff6e41", "#ff3d00", "#dd2c00", "#ebeff2", "#cfd8dd", "#b0bfc6", "#90a4ad", "#78909c", "#607d8b", "#546f7a", "#465a65", "#36474f", "#273238", "#fbe4ec", "#f9bbd0", "#f48fb1", "#f06292", "#ec407a", "#ea1e63", "#d81a60", "#c2175b", "#ad1457", "#890e4f", "#ff80ab", "#ff4181", "#f40057", "#c41162", "#e8eaaf", "#c5cae8", "#9ea8db", "#7986cc", "#5c6bc0", "#3f51b5", "#3949ab", "#303e9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304fff", "#dff7f9", "#b2ebf2", "#80deea", "#4dd0e2", "#25c6da", "#00bcd5", "#00e5ff", "#00b8d4", "#f1f7e9", "#ddedc8", "#c5e1a6", "#aed582", "#9ccc66", "#8bc24a", "#7db343", "#689f39", "#548b2e", "#33691e", "#cdff90", "#b2ff59", "#76ff02", "#64dd16", "#fef8e0", "#ffecb2", "#ffe083", "#ffd54f", "#ffc928", "#fec107", "#ffb200", "#ff9f00", "#ff8e01", "#ff6f00", "#fee580", "#ffd741", "#fec400", "#ffab00", "#efebe8", "#d7ccc8", "#bcaba4", "#a0887e", "#8c6e63", "#795547", "#6d4d42", "#5d4038", "#4d342f", "#3e2622", "#f3e5f6", "#e1bee8", "#cf93d9", "#b968c7", "#aa47bc", "#9c28b1", "#8e24aa", "#7a1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fc", "#d500fa", "#aa00ff", "#e4f2fb", "#bbdefa", "#90caf8", "#64b5f6", "#42a5f6", "#2196f3", "#1d89e4", "#1976d3", "#1564c0", "#0e47a1", "#82b1ff", "#438afe", "#2879fe", "#2a62ff", "#e0f2f2", "#b2dfdc", "#80cbc4", "#4cb6ac", "#26a59a", "#009788", "#00887a", "#00796a", "#00695b", "#004c3f", "#a7feeb", "#64feda", "#1de9b6", "#01bfa5", "#f9fbe6", "#f0f4c2", "#e6ee9b", "#dde776", "#d4e056", "#cddc39", "#c0ca33", "#b0b42b", "#9e9e24", "#817716", "#f4fe81", "#eeff41", "#c6ff00", "#aeea00", "#fff2df", "#ffe0b2", "#ffcc80", "#ffb64d", "#ffa827", "#ff9700", "#fb8c00", "#f67c01", "#ef6c00", "#e65100", "#ffd181", "#ffab40", "#ff9000", "#ff6d00", "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#000000", "#ffffff"];
let previousColor = 'red';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import ViewShot from 'react-native-view-shot';
import CameraRoll from "@react-native-community/cameraroll";
import { ColorPicker } from 'react-native-color-picker'
let PencilRange=10,EraseRange=20,range=10;

//export default class Drawing extends React.Component {
  const Drawing=(props)=> {

const [isModalVisible, setIsModalVisible] = useState(false)
const [isModalVisibleRange, setIsModalVisibleRange] = useState(false)
const [selcetedColor, setSelcetedColor] = useState('#FF0000')
const [mode, setMode] = useState('Pencil')
const [selectedStroke, setSelectedStroke] = useState(10)
const viewShotRef = useRef(null);
const drawRef = useRef(null);
  // constructor(props) {
  //   super(props);
  //   state = {
  //     isModalVisible: false,
  //     isModalVisibleRange: false,
  //     selcetedColor: '#FF0000',
  //     mode:'Pencil',
  //     selectedStroke:10,

  //   };
  // }
  const getBase64=()=>{
		viewShotRef.current.capture().then((uri) => {
//console.log('---------------'+uri);
			downloadQrCode(uri)
		});
	}
  const downloadQrCode = async (uri) => {
		if (Platform.OS == 'ios') {
			CameraRoll.save(uri, { type: 'photo' });
			Snackbar.show({ text: 'Image saved successfully', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.primary });
		} else {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
					{
						title: 'Storage Permission Required',
						message:
							'App needs access to your storage to download Photos',
					}
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					CameraRoll.save(uri, { type: 'photo' });
			 	Snackbar.show({ text: 'Image saved successfully', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.primary });
				} else {
					// If permission denied then show alert
					alert('Storage Permission Not Granted');
				}
			} catch (err) {
				//console.warn(err);
			}
		}
	//
	}
  const EraseMode = () => {
    range=EraseRange;
    setSelcetedColor('#FFF');
    setIsModalVisibleRange(true)
    setMode('Erase');
    setSelectedStroke(EraseRange)
    Snackbar.show({ text: 'Erase', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
  }
  const PencilMode = () => {
    range=PencilRange;
    setSelcetedColor(previousColor);
    setIsModalVisibleRange(true)
    setMode('Pencil');
    setSelectedStroke(PencilRange)
    Snackbar.show({ text: 'Pencil', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
  }
  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: responsiveHeight(8), backgroundColor: item, margin: 3 }} onPress={() => {
      previousColor = item;
      setSelcetedColor(item);
      setIsModalVisible(false);
      setSelectedStroke(PencilRange);
    }}>
    </TouchableOpacity>
  );
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <StatusBar backgroundColor={'#006400'} />
        <View style={{ backgroundColor: '#008000', flexDirection: 'row', alignItems: 'center', height: responsiveHeight(7) }}>
          <TouchableOpacity style={{ height: '100%', alignItems: 'center', justifyContent: 'center',flexDirection:'row' }} onPress={() =>{
            if(IsSoundEnabled)
            clickSound();
            props.navigation.goBack()
          } }>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF',margin:10 }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF',}}>Draw</Text>
          </TouchableOpacity>
          
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ marginRight: responsiveWidth(4) }} onPress={() =>getBase64()}>
              <Image source={saveImg} style={{ height: responsiveFontSize(3.5), width: responsiveFontSize(3.5), resizeMode: 'contain', tintColor: '#FFF' }} />
            </TouchableOpacity>
             <TouchableOpacity style={{ marginRight: responsiveWidth(4) }} onPress={() =>drawRef.current.clear()}>
              <Image source={deleteImg} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', tintColor: '#FFF' }} />
            </TouchableOpacity>
             <TouchableOpacity style={{ marginRight: responsiveWidth(4) }} onPress={() => EraseMode()}>
              <Image source={eraser} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', tintColor: '#FFF' }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: responsiveWidth(4) }} onPress={() => PencilMode()}>
              <Image source={pencil} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', tintColor: '#FFF' }} />
            </TouchableOpacity>
            <View style={{height: responsiveFontSize(4), width: responsiveFontSize(4),backgroundColor:selcetedColor,marginRight: responsiveWidth(3)}} onPress={() =>getBase64()}/>
            <TouchableOpacity style={{ marginRight: responsiveWidth(4) }} onPress={() => setIsModalVisible(true)}>
              <Image source={color_picker} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 10, backgroundColor: Color.white }}>
        <ViewShot
						style={{flex:1,backgroundColor:'#FFF'}}
            ref={viewShotRef}
						//ref="viewShot"
						options={{ format: 'jpg', quality: 1 }}>
          <SketchCanvas
           ref={drawRef}
            style={{ flex: 1 }}
            strokeColor={selcetedColor}
            strokeWidth={selectedStroke}
          />
          </ViewShot>
          {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        <Modal isVisible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
          <View style={{ flex: 1, backgroundColor: Color.white, borderRadius: 10, marginTop: responsiveHeight(5) }}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', margin: responsiveWidth(3) }}>
              <TouchableOpacity onPress={()=>setIsModalVisible(false)}>
                <Image source={close_white} style={{tintColor:Color.primaryBlue,height:responsiveFontSize(4),width:responsiveFontSize(4),resizeMode:'contain',marginRight:10,marginLeft:5 }}/>
              </TouchableOpacity>
              <Text style={{ margin: 5, fontSize: CustomFont.font16, color: Color.fontColor }}>Select color</Text>
              <View style={{ height: 50, width: 80, backgroundColor: selcetedColor, marginRight: responsiveWidth(5), borderRadius: 4 }} />
            </View>
            <ColorPicker
    onColorSelected={color =>{
      setIsModalVisible(false);
      setSelcetedColor(color);
      setSelectedStroke(PencilRange);
    }}
    style={{height:responsiveHeight(30),width:responsiveHeight(30),marginLeft:responsiveWidth(10)}}
  />
            <FlatList
              numColumns={4}
              style={{ marginTop: 10 }}
              data={colorArr}
              renderItem={renderList}
              //ItemSeparatorComponent={renderSeparator}
              keyExtractor={(item, index) => index.toString()} />
          </View>
        </Modal>
        <Modal isVisible={isModalVisibleRange} onRequestClose={() => setIsModalVisibleRange(false)}>
              <View style={{width:'100%',backgroundColor:'#FFF',justifyContent:'center',alignItems:'center',borderRadius:10}}>
             
              <Text style={{marginTop:responsiveHeight(2),fontWeight:'bold',fontSize:CustomFont.font18}}>{mode} Mode</Text>
              <TouchableOpacity onPress={()=>{
                if(range<50){
                  range++;
                  setSelectedStroke(range)
                }else{
                  Snackbar.show({ text: 'You have reach at max', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
                }
                
              }}>
<Image source={plus} style={{height:responsiveFontSize(4.5),width:responsiveFontSize(4.5),margin:responsiveHeight(2),}}/>
                </TouchableOpacity>
                <TextInput value={selectedStroke+''}  onChangeText={selectedStroke => {
                  setSelectedStroke(selectedStroke)
											//setState({ selectedStroke })
									}} maxLength={2} keyboardType={'number-pad'} style={{height:responsiveHeight(7),width:responsiveWidth(30),borderColor:Color.createInputBorder,borderRadius:6, borderWidth:1,textAlign:'center',fontSize:CustomFont.font16 }} />
                <TouchableOpacity onPress={()=>{
                if(range>1){
                  range--;
                  setSelectedStroke(range)
                }else{
                  Snackbar.show({ text: 'You have reach at min', duration: Snackbar.LENGTH_SHORT, backgroundColor: Color.snackBar });
                }
                
              }}>
<Image source={minus} style={{height:responsiveFontSize(4.5),width:responsiveFontSize(4.5),margin:responsiveHeight(2),}}/>
                </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:Color.primaryBlue,justifyContent:'center',alignItems:'center',height:responsiveHeight(7),width:responsiveWidth(40),marginBottom:responsiveHeight(3),marginTop:responsiveHeight(2),borderRadius:7 }}
              onPress={() =>{
                if(mode=='Pencil')
                  PencilRange=range;
                  else
                  EraseRange=range;
                  setIsModalVisibleRange(false)
                  setSelectedStroke(range)
              } }>
              <Text style={{fontWeight:'bold',fontSize:CustomFont.font16,color:'#FFF'}}>Ok</Text>
              </TouchableOpacity>
              </View>

        </Modal>
      </SafeAreaView>
    );

}
export default Drawing;
