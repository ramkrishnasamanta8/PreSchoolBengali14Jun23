import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Color from './Colors';
const styles = StyleSheet.create({
    loaderStyle: {
        position : 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      pleaseWait: {
        position : 'absolute',
        left: responsiveWidth(38),
        right: responsiveWidth(30),
        top: responsiveHeight(53),
        color : Color.primary,
      },
      container: {
        flex: 1,
        backgroundColor: Color.newBgColor,
      },containerlightBg: {
        flex: 1,
        backgroundColor: Color.bgColor,
      },
      safeArea: {
        flex: 1, 
        backgroundColor: Color.white
      },
});
export default styles;
