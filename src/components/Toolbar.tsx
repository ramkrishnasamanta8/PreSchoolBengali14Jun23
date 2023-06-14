import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,StatusBar,
    Platform
} from 'react-native';
import Color from './Colors';
import CustomFont from './CustomFont';
import OptionMenu from './OptionMenu';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import back_blue from '../../assets/back_blue.png';
import delete_img from '../../assets/delete_img.png';
import table from '../../assets/table_math.png';

const Toolbar = (props) => {
    return (
        <View>
        <StatusBar backgroundColor={props.color? props.color: Color.primary} barStyle="light-content"/>
           <View style={{ backgroundColor: props.color? props.color: Color.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: responsiveHeight(7),minHeight:50 }}>
          <TouchableOpacity style={{ flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={props.onBackPress}>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF',marginLeft:10 }} />
            <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>{props.title}</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          {props.delete? <TouchableOpacity style={{marginRight:responsiveWidth(3) }} onPress={props.isDelete}><Image source={props.title.includes('Typing')? delete_img:table} style={{height:responsiveFontSize(4),width:responsiveFontSize(4),resizeMode:'contain'}}/></TouchableOpacity> :null}
          {props.showImage? <TouchableOpacity style={{marginRight:responsiveWidth(3) }} onPress={props.isClickOnImage}><Image source={props.showImage} style={{height:responsiveFontSize(4.5),width:responsiveFontSize(4.5),resizeMode:'contain'}}/></TouchableOpacity> :null}
          
         
          <OptionMenu />
          </View>
          


        </View>
        </View>
    )
}
export default Toolbar