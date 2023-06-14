import * as React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, ImageBackground, Alert, StatusBar } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import arrowRight from '../../assets/arrowRight.png';
import back from '../../assets/back.png';
import bgImage from '../../assets/bg3.png';
import Draggable from 'react-native-draggable';
import Svg, { Line } from 'react-native-svg';
import OptionMenu from '../components/OptionMenu';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let pageIndex = 0;
let colorArray = ['black', 'red', 'blue', 'black', '#FF3284'], imagePosy = [10, 25, 40, 55, 70], lineInitialPosAndroid = [{ coOrdix1: 60, coOrdiy1: 165, },
{ coOrdix1: 60, coOrdiy1: 286, },
{ coOrdix1: 60, coOrdiy1: 407, },
{ coOrdix1: 60, coOrdiy1: 527, },
{ coOrdix1: 60, coOrdiy1: 636, },
], lineInitialPosIos = [{ coOrdix1: 60, coOrdiy1: 165, }, { coOrdix1: 60, coOrdiy1: 286, }, { coOrdix1: 60, coOrdiy1: 427, }, { coOrdix1: 60, coOrdiy1: 557, }, { coOrdix1: 60, coOrdiy1: 672, }];

let leftGlobalArray = [], title = '', type = '',completeItemString='';
import AsyncStorage from '@react-native-community/async-storage';
export default class MatchingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      rightArrowShow: false,
    };
  }
  async componentDidMount() {
    pageIndex = 0;
    title = this.props.route.params.item.title;
    type = this.props.route.params.item.type;
    if (title == 'ABC') {
      leftGlobalArray = [[
        { corrIndex: 2, image: require('../../assets/a.jpg'), rightImage: require('../../assets/dog.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/b.jpg'), rightImage: require('../../assets/apple.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/c.jpg'), rightImage: require('../../assets/eforele.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/d.jpg'), rightImage: require('../../assets/bforball.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/e.jpg'), rightImage: require('../../assets/cat.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],
       [
        { corrIndex: 1, image: require('../../assets/f.jpg'), rightImage: require('../../assets/fish.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/g.jpg'), rightImage: require('../../assets/hforhat.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/h.jpg'), rightImage: require('../../assets/gforgoat.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/i.jpg'), rightImage: require('../../assets/jforjoker.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/j.png'), rightImage: require('../../assets/iforigloo.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: require('../../assets/k.png'), rightImage: require('../../assets/nfornest.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/l.png'), rightImage: require('../../assets/lforlion.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/m.png'), rightImage: require('../../assets/oforowl.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/n.png'), rightImage: require('../../assets/mangos.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/o.png'), rightImage: require('../../assets/kforkangaroo.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: require('../../assets/p.png'), rightImage: require('../../assets/rforrabbit.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/q.png'), rightImage: require('../../assets/qforqueen.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/r.png'), rightImage: require('../../assets/pforpig.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/s.png'), rightImage: require('../../assets/tfortrain.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/t.png'), rightImage: require('../../assets/sforsun.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: require('../../assets/u.png'), rightImage: require('../../assets/uforumbrella.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/v.png'), rightImage: require('../../assets/xforxylo.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/w.png'), rightImage: require('../../assets/yforyak.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/x.png'), rightImage: require('../../assets/vforviolin.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/y.png'), rightImage: require('../../assets/wforwhale.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    } else if (title == '123') {
      leftGlobalArray = [[
        { corrIndex: 4, image: require('../../assets/icon_n1.png'), rightImage: require('../../assets/n3_three.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/icon_n2.png'), rightImage: require('../../assets/n2_two.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/icon_n3.png'), rightImage: require('../../assets/n5_five.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n4.png'), rightImage: require('../../assets/n1_one.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n5.png'), rightImage: require('../../assets/n4_four.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: require('../../assets/icon_n6.png'), rightImage: require('../../assets/n6_six.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/icon_n7.png'), rightImage: require('../../assets/n7_seven.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n8.png'), rightImage: require('../../assets/n10_ten2.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/icon_n9.png'), rightImage: require('../../assets/n9_nine.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n10.png'), rightImage: require('../../assets/n8_eigght.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: require('../../assets/icon_n11.png'), rightImage: require('../../assets/n14_fourteen.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n12.png'), rightImage: require('../../assets/n11_eleaven.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/icon_n13.png'), rightImage: require('../../assets/n12_tweel.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/icon_n14.png'), rightImage: require('../../assets/n13_thirteen.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n15.png'), rightImage: require('../../assets/n15_fifteen.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
     else if (title == 'Shapes') {
      leftGlobalArray = [[
        { corrIndex: 2, image: require('../../assets/triangle.png'), rightImage: require('../../assets/sellipse.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/star_red.jpg'), rightImage: require('../../assets/striangle.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/oval.png'), rightImage: require('../../assets/starfish.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/semicircle.png'), rightImage: require('../../assets/ssquare.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/square.png'), rightImage: require('../../assets/ssemicircle.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/heart.png'), rightImage: require('../../assets/spentagon.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/cylinder.jpg'), rightImage: require('../../assets/can.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/pentagon.png'), rightImage: require('../../assets/rubber.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/rectangle.png'), rightImage: require('../../assets/fav.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/circle.png'), rightImage: require('../../assets/bforball.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Colors') {
      leftGlobalArray = [[
        { corrIndex: 2, image: '#3700ff', rightImage: require('../../assets/fig.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'red', rightImage: require('../../assets/fblue.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: '#6b3569', rightImage: require('../../assets/courgette.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: '#007e00', rightImage: require('../../assets/banana_count.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: '#ffeb00', rightImage: require('../../assets/cherry.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: '#d10015', rightImage: require('../../assets/banana.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: '#ffcb00', rightImage: require('../../assets/franar.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: '#2c2834', rightImage: require('../../assets/broccoli.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: '#00a540', rightImage: require('../../assets/coconuts.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: '#673f0c', rightImage: require('../../assets/blueberry.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: '#ffeb00', rightImage: require('../../assets/lemon.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: '#ff7b00', rightImage: require('../../assets/lettuce.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: '#a1d300', rightImage: require('../../assets/frvgtomato.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: '#fea000', rightImage: require('../../assets/peach.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: '#ff0519', rightImage: require('../../assets/mango_count.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: '#efeff2', rightImage: require('../../assets/fwhite.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: '#90db00', rightImage: require('../../assets/mangos.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: '#0b8cd5', rightImage: require('../../assets/strawberry.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: '#ffa200', rightImage: require('../../assets/cabbage.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: '#ec1f2b', rightImage: require('../../assets/iforigloo.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],
      ];
    } 
    else if (title == 'Shadow') {
      leftGlobalArray = [[
        { corrIndex: 3, image: require('../../assets/anmelk.png'), rightImage: require('../../assets/anmgoat.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/anmflamingo.png'), rightImage: require('../../assets/anmflamingo.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmgiraffe.png'), rightImage: require('../../assets/anmelk.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmgoat.png'), rightImage: require('../../assets/anmmonkey.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/anmmonkey.png'), rightImage: require('../../assets/anmgiraffe.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/anmcow.png'), rightImage: require('../../assets/anmdeer.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/anmcrab.png'), rightImage: require('../../assets/anmcrab.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmdeer.png'), rightImage: require('../../assets/anmwolf.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmwolf.png'), rightImage: require('../../assets/anmcow.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/eforele.png'), rightImage: require('../../assets/eforele.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],[
        { corrIndex: 2, image: require('../../assets/banana_count.png'), rightImage: require('../../assets/green_pepper.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmyak.png'), rightImage: require('../../assets/banana_count.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/green_pepper.png'), rightImage: require('../../assets/lforlion.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/hawk.png'), rightImage: require('../../assets/hawk.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/lforlion.png'), rightImage: require('../../assets/anmyak.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/frvgpumpkin.png'), rightImage: require('../../assets/anmcamel.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/mountains.png'), rightImage: require('../../assets/mountains.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmcamel.png'), rightImage: require('../../assets/anmyak.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmRhyno.png'), rightImage: require('../../assets/frvgpumpkin.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmyak.png'), rightImage: require('../../assets/anmRhyno.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],
      ];
    } 
    else if (title == 'Spell') {
      leftGlobalArray = [[
        { corrIndex: 3, image: 'elephant', rightImage: require('../../assets/chick.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'hen', rightImage: require('../../assets/anmcrab.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'crab', rightImage: require('../../assets/eforele.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'cat', rightImage: require('../../assets/anmdeer.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'deer', rightImage: require('../../assets/cat.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'goat', rightImage: require('../../assets/fish.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'yak', rightImage: require('../../assets/hforhat.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'fish', rightImage: require('../../assets/anmgoat.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'hat', rightImage: require('../../assets/anmyak.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'giraffe', rightImage: require('../../assets/anmgiraffe.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'turkey', rightImage: require('../../assets/zforzebra.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'zebra', rightImage: require('../../assets/turkey.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'mangos', rightImage: require('../../assets/oforowl.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: 'owl', rightImage: require('../../assets/mangos.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'kangaroo', rightImage: require('../../assets/kforkangaroo.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'bird', rightImage: require('../../assets/bird.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'flower', rightImage: require('../../assets/dfordog.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'fig', rightImage: require('../../assets/flower.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'dog', rightImage: require('../../assets/fig.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'pear', rightImage: require('../../assets/pears.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'broccoli', rightImage: require('../../assets/mangos.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'lemon', rightImage: require('../../assets/broccoli.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'strawberry', rightImage: require('../../assets/cabbage.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: 'Cabage', rightImage: require('../../assets/strawberry.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'tomato', rightImage: require('../../assets/lemon.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }  else if (title == 'Animal') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Yak', rightImage: require('../../assets/yforyak.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Zebra', rightImage: require('../../assets/raccoon.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Deer', rightImage: require('../../assets/hedgehong.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Raccoon', rightImage: require('../../assets/zforzebra.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Hedgehong', rightImage: require('../../assets/anmdeer.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],[
        { corrIndex: 3, image: 'Bear', rightImage: require('../../assets/eforele.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Dog', rightImage: require('../../assets/dog.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Elephant', rightImage: require('../../assets/bear.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Fox', rightImage: require('../../assets/yforyak.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Yak', rightImage: require('../../assets/fforfox.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'Chimpanzee', rightImage: require('../../assets/sheep.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Sheep', rightImage: require('../../assets/chimpanzee.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'Giraffe', rightImage: require('../../assets/anmgoat.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: 'Goat', rightImage: require('../../assets/anmgiraffe.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Kangaroo', rightImage: require('../../assets/kforkangaroo.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Lion', rightImage: require('../../assets/rforrabbit.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Mouse', rightImage: require('../../assets/mforouse.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'Pig', rightImage: require('../../assets/anmelk.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Rabbit', rightImage: require('../../assets/pforpig.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'elk', rightImage: require('../../assets/lforlion.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],  [
        { corrIndex: 4, image: 'Walrus', rightImage: require('../../assets/anmmonkey.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Horse', rightImage: require('../../assets/horse.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Monkey', rightImage: require('../../assets/anmcow.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: 'Cow', rightImage: require('../../assets/walrus.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Jaguar', rightImage: require('../../assets/jaguar.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],[
        { corrIndex: 1, image: 'Leopard', rightImage: require('../../assets/leopard.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Camel', rightImage: require('../../assets/hen.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Cat', rightImage: require('../../assets/cat.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Chicken', rightImage: require('../../assets/tiger.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Tiger', rightImage: require('../../assets/camel.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Rhyno', rightImage: require('../../assets/hippopotamus.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'Sea Horse', rightImage: require('../../assets/anmwolf.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Wolf', rightImage: require('../../assets/seahorse.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Hippopotamus', rightImage: require('../../assets/anmRhyno.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'elk', rightImage: require('../../assets/anmelk.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    } else if (title == 'Same Object') {
      leftGlobalArray = [[
        { corrIndex: 5, image: require('../../assets/bot.jpg'), rightImage: require('../../assets/peacock.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/carrot.png'), rightImage: require('../../assets/broccoli.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/broccoli.jpg'), rightImage: require('../../assets/camel.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/camel.jpg'), rightImage: require('../../assets/carrot.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/peacock.jpg'), rightImage: require('../../assets/bot.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/hen.jpg'), rightImage: require('../../assets/anmelk.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/turkey.jpg'), rightImage: require('../../assets/ostrich.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmelk.png'), rightImage: require('../../assets/anmcrab.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/ostrich.jpg'), rightImage: require('../../assets/hen.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmcrab.png'), rightImage: require('../../assets/turkey.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: require('../../assets/apple.jpg'), rightImage: require('../../assets/coral.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/cron.jpg'), rightImage: require('../../assets/courgette.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/custard_apple.jpg'), rightImage: require('../../assets/custard_apple.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/courgette.jpg'), rightImage: require('../../assets/cron.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/coral.png'), rightImage: require('../../assets/apple.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/anmdeer.png'), rightImage: require('../../assets/duck.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/duck.jpg'), rightImage: require('../../assets/organge.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/fish.png'), rightImage: require('../../assets/fig.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/fig.png'), rightImage: require('../../assets/anmdeer.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/organge.png'), rightImage: require('../../assets/fish.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: require('../../assets/pears.jpg'), rightImage: require('../../assets/pears.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/frvgtomato.png'), rightImage: require('../../assets/frWater.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/frvgcucumber.png'), rightImage: require('../../assets/frvgpumpkin.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/frWater.png'), rightImage: require('../../assets/frvgcucumber.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/frvgpumpkin.png'), rightImage: require('../../assets/frvgtomato.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    } else if (title == 'Letter Case') {
      leftGlobalArray = [[
        { corrIndex: 1, rightImage: require('../../assets/a.jpg'), image: 'a', y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, rightImage: require('../../assets/d.jpg'), image: 'b', y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, rightImage: require('../../assets/c.jpg'), image: 'c', y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, rightImage: require('../../assets/e.jpg'), image: 'd', y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, rightImage: require('../../assets/b.jpg'), image: 'e', y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],
       [
        { corrIndex: 4, rightImage: require('../../assets/i.jpg'), image: 'f', y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, rightImage: require('../../assets/g.jpg'), image: 'g', y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, rightImage: require('../../assets/j.png'), image: 'h', y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, rightImage: require('../../assets/f.jpg'), image: 'i', y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, rightImage: require('../../assets/h.jpg'), image: 'j', y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, rightImage: require('../../assets/k.png'), image: 'k', y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, rightImage: require('../../assets/n.png'), image: 'l', y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, rightImage: require('../../assets/o.png'), image: 'm', y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, rightImage: require('../../assets/m.png'), image: 'n', y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, rightImage: require('../../assets/l.png'), image: 'o', y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, rightImage: require('../../assets/r.png'), image: 'p', y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, rightImage: require('../../assets/q.png'), image: 'q', y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, rightImage: require('../../assets/s.png'), image: 'r', y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 3, rightImage: require('../../assets/p.png'), image: 's', y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, rightImage: require('../../assets/t.png'), image: 't', y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, rightImage: require('../../assets/w.png'), image: 'u', y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, rightImage: require('../../assets/v.png'), image: 'v', y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, rightImage: require('../../assets/u.png'), image: 'w', y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, rightImage: require('../../assets/x.png'), image: 'x', y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, rightImage: require('../../assets/y.png'), image: 'y', y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Body Parts') {
      leftGlobalArray = [[
        { corrIndex: 4, image: 'Head', rightImage: require('../../assets/b_leg.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Finger', rightImage: require('../../assets/b_fingure.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Thumb', rightImage: require('../../assets/b_thumb.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Leg', rightImage: require('../../assets/b_head.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Foot', rightImage: require('../../assets/b_foot.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Neck', rightImage: require('../../assets/b_ear.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Ear', rightImage: require('../../assets/b_forehead.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Eye Brow ', rightImage: require('../../assets/b_eyebrow.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Forehead', rightImage: require('../../assets/b_neck.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Teeth', rightImage: require('../../assets/b_teeth.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Tongue', rightImage: require('../../assets/b_knee.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Back', rightImage: require('../../assets/b_back.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Shoulder', rightImage: require('../../assets/b_hair.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Knees', rightImage: require('../../assets/b_tongue.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Hair', rightImage: require('../../assets/b_shoulder.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Arms', rightImage: require('../../assets/b_stomach.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Chest', rightImage: require('../../assets/b_hand.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Stomach', rightImage: require('../../assets/b_arms.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Nose', rightImage: require('../../assets/b_nose.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Hand', rightImage: require('../../assets/b_chest.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Eye', rightImage: require('../../assets/heart_body.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Lips', rightImage: require('../../assets/kidney.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Mouth', rightImage: require('../../assets/b_mouth.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Heart', rightImage: require('../../assets/b_eye.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Kidney', rightImage: require('../../assets/b_lips.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Vegitables') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Beetroot', rightImage: require('../../assets/beetroot.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'Mushroom', rightImage: require('../../assets/bittergourd.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Bitter Gourd', rightImage: require('../../assets/mushroom.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Black Pepper', rightImage: require('../../assets/bottle_gourd.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Bottle Gourd ', rightImage: require('../../assets/blackpepper.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Cabbage', rightImage: require('../../assets/corinder_leaf.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'Capsicum', rightImage: require('../../assets/carrot.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Carrot', rightImage: require('../../assets/green_pepper.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Cauliflower', rightImage: require('../../assets/cauliflower.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Corinder leaf', rightImage: require('../../assets/cabbage.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Corn', rightImage: require('../../assets/eggplant.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Celery', rightImage: require('../../assets/celery.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Chilli', rightImage: require('../../assets/chilli.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Eggplant', rightImage: require('../../assets/frvgcucumber.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Cucumber', rightImage: require('../../assets/cron.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Fenugreek Leaf', rightImage: require('../../assets/green_chillies.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Turnip', rightImage: require('../../assets/turnip.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Courgette', rightImage: require('../../assets/onions.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Green chilli', rightImage: require('../../assets/fenugreek.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Onion', rightImage: require('../../assets/courgette.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Lettuce', rightImage: require('../../assets/french_beans.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Radish', rightImage: require('../../assets/radish.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Asparagus', rightImage: require('../../assets/asparagus.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Green pepper', rightImage: require('../../assets/lettuce.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'French beans', rightImage: require('../../assets/green_pepper.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Snake Gourd', rightImage: require('../../assets/lady_finger.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Garlic', rightImage: require('../../assets/garlic.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'Ginger', rightImage: require('../../assets/snake_gourd.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Lady’s finger', rightImage: require('../../assets/ginger.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Broccoli', rightImage: require('../../assets/broccoli.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Fruits') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Apple', rightImage: require('../../assets/apple.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Peach', rightImage: require('../../assets/coconuts.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Avocado', rightImage: require('../../assets/watermelon.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Coconut', rightImage: require('../../assets/peach.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Watermelon', rightImage: require('../../assets/avocado.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Pineapple', rightImage: require('../../assets/kiwi.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Kiwi', rightImage: require('../../assets/frnectarine.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Papaya', rightImage: require('../../assets/papaya.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Jackfruit', rightImage: require('../../assets/katal.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Mandarin', rightImage: require('../../assets/pineapples.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Raspberry', rightImage: require('../../assets/plum.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Banana', rightImage: require('../../assets/banana.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Plum', rightImage: require('../../assets/mango.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Blueberry', rightImage: require('../../assets/blueberry.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Mango', rightImage: require('../../assets/raspberry.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Grape', rightImage: require('../../assets/strawberry.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Nectarine', rightImage: require('../../assets/nectarine.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Strawberry', rightImage: require('../../assets/pears.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Cherry', rightImage: require('../../assets/cherry.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'pear', rightImage: require('../../assets/grapes.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Orange', rightImage: require('../../assets/guava.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Watermelon', rightImage: require('../../assets/frWater.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Guava', rightImage: require('../../assets/custard_apple.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Date', rightImage: require('../../assets/date.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Custard Apple', rightImage: require('../../assets/organge.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Vehicals') {
      leftGlobalArray = [[
        { corrIndex: 5, image: 'Taxi', rightImage: require('../../assets/bus.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Police car', rightImage: require('../../assets/police.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Bus', rightImage: require('../../assets/baby_carriage.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Ambulance', rightImage: require('../../assets/ambulance.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Baby Carriage', rightImage: require('../../assets/taxi.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Bicycle', rightImage: require('../../assets/motorcycle.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Scooter', rightImage: require('../../assets/crane.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Motorcycle', rightImage: require('../../assets/bicycle.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Fire engine', rightImage: require('../../assets/fireengine.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Crane', rightImage: require('../../assets/scooter.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'Tractor', rightImage: require('../../assets/helicopter.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Cement mixer', rightImage: require('../../assets/tractor.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Dump truck', rightImage: require('../../assets/dump_truck.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Helicopter', rightImage: require('../../assets/cement_mixer.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Airplane', rightImage: require('../../assets/airplane.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Rowboat', rightImage: require('../../assets/auto.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Train', rightImage: require('../../assets/ship.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Ship', rightImage: require('../../assets/train.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Car', rightImage: require('../../assets/cforcar.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Auto', rightImage: require('../../assets/rowboat.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Flowers') {
      leftGlobalArray = [[
        { corrIndex: 3, image: 'Rose', rightImage: require('../../assets/sunflower.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Jasminum', rightImage: require('../../assets/jasminum.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'Primrose', rightImage: require('../../assets/rose_flower.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Sunflower', rightImage: require('../../assets/primrose.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Lotus', rightImage: require('../../assets/lotus.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Oleander', rightImage: require('../../assets/daisy.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Daisy', rightImage: require('../../assets/datura.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Poppy', rightImage: require('../../assets/poppy.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Daffodil', rightImage: require('../../assets/daffodil.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Datura', rightImage: require('../../assets/oleander.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'Pandanus', rightImage: require('../../assets/pandanus.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Allium', rightImage: require('../../assets/amaranthus.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Alstroemeria', rightImage: require('../../assets/alstroemeria.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Amaranthus', rightImage: require('../../assets/allium.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Amaryllis', rightImage: require('../../assets/amaryllis.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Aster', rightImage: require('../../assets/marigold.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Balloon', rightImage: require('../../assets/balloon_flower.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Delonix Regia', rightImage: require('../../assets/dahlia.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Marigold', rightImage: require('../../assets/aster.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Dahlia', rightImage: require('../../assets/delonixregia.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Blue Water Lily', rightImage: require('../../assets/sesbaniaGrandiflora.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Poppy', rightImage: require('../../assets/undefeated.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Pot Marigold', rightImage: require('../../assets/potMarigold.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Sesbania Grandiflora ', rightImage: require('../../assets/bluewaterLily.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Undefeated', rightImage: require('../../assets/poppy.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Sea Animals') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Crab', rightImage: require('../../assets/anmcrab.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Fish', rightImage: require('../../assets/shark.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Octopus', rightImage: require('../../assets/octopus.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Shark', rightImage: require('../../assets/seahorse.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Seahorse', rightImage: require('../../assets/fish.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Starfish', rightImage: require('../../assets/jellyfish.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Whale', rightImage: require('../../assets/whale.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Penguin', rightImage: require('../../assets/penguin.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Jellyfish', rightImage: require('../../assets/seal.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Seal', rightImage: require('../../assets/starfish.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'Dolphin', rightImage: require('../../assets/dolphin.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Shrimp', rightImage: require('../../assets/squid.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Killer Whale', rightImage: require('../../assets/killer_whale.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Pelican', rightImage: require('../../assets/shrimp.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Squid', rightImage: require('../../assets/pelican.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'Walrus', rightImage: require('../../assets/Shells.webp'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Coral', rightImage: require('../../assets/walrus.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Lobster', rightImage: require('../../assets/Lobster.webp'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Oyster', rightImage: require('../../assets/coral.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Shells', rightImage: require('../../assets/Oyster.webp'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Otter', rightImage: require('../../assets/Sealion.webp'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Sea anemone', rightImage: require('../../assets/Seagull.webp'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Sea turtle', rightImage: require('../../assets/Seaturtle.webp'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Sea lion', rightImage: require('../../assets/Otter.webp'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Seagull', rightImage: require('../../assets/Seaanemone.webp'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Furnitures') {
      leftGlobalArray = [[
        { corrIndex: 2, image: 'Chair', rightImage: require('../../assets/table.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Table', rightImage: require('../../assets/chair.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Armchair', rightImage: require('../../assets/bench.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Stool', rightImage: require('../../assets/stool.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Bench', rightImage: require('../../assets/armchair.webp'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Sofa', rightImage: require('../../assets/desk.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Cabinet', rightImage: require('../../assets/cabinet.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Desk', rightImage: require('../../assets/sofa.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Office Chair', rightImage: require('../../assets/dining_table.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Dining Table', rightImage: require('../../assets/office_chair.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Showcase', rightImage: require('../../assets/bench.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Bed', rightImage: require('../../assets/bed.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 4, image: 'Bunk Beds', rightImage: require('../../assets/showcase.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Park Bench', rightImage: require('../../assets/bunkbeds.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Folding Chair', rightImage: require('../../assets/folding.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ],
      ];
    }
    else if (title == 'Nature') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Waterfall', rightImage: require('../../assets/waterfall.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Hill', rightImage: require('../../assets/plateau.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Mountain', rightImage: require('../../assets/mountain.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Plateau', rightImage: require('../../assets/sea_nature.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 4, image: 'Sea', rightImage: require('../../assets/hill.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'River', rightImage: require('../../assets/rainbow.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Lake', rightImage: require('../../assets/lake.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Rain', rightImage: require('../../assets/river.webp'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Fog', rightImage: require('../../assets/fog.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Rainbow', rightImage: require('../../assets/rain_nature.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Sun', rightImage: require('../../assets/wind.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Cloud', rightImage: require('../../assets/cloud.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Wind', rightImage: require('../../assets/light.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Snow', rightImage: require('../../assets/snow.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Lightning', rightImage: require('../../assets/sun.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Flood', rightImage: require('../../assets/tsunami.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Volcanic eruption', rightImage: require('../../assets/vol.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Earthquak', rightImage: require('../../assets/flood.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Forest Fire', rightImage: require('../../assets/forest.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Tsunami', rightImage: require('../../assets/earthquake.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Birds') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Duck', rightImage: require('../../assets/duck.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'King Fisher', rightImage: require('../../assets/hummingbird.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'HummingBird', rightImage: require('../../assets/crow.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Owl', rightImage: require('../../assets/oforowl.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Crow', rightImage: require('../../assets/kingfisher.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Peacock', rightImage: require('../../assets/ostrich.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Pigeon', rightImage: require('../../assets/dove.webp'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Sparrow', rightImage: require('../../assets/peacock.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Goose', rightImage: require('../../assets/goose.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Ostrich', rightImage: require('../../assets/sparrow.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'Bee-Eater', rightImage: require('../../assets/beeeater.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Guinea Fowl', rightImage: require('../../assets/herons.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Herons', rightImage: require('../../assets/hawk.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Turkey', rightImage: require('../../assets/turkey.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Hawk', rightImage: require('../../assets/guinea_fowl.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Raven', rightImage: require('../../assets/penguin.png'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Parrot', rightImage: require('../../assets/parrot.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Flamingo', rightImage: require('../../assets/stork.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Penguin', rightImage: require('../../assets/raven.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Stork', rightImage: require('../../assets/anmflamingo.png'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Swift', rightImage: require('../../assets/rallidae.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Hornbill', rightImage: require('../../assets/hornbill.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Rallidae', rightImage: require('../../assets/woodpecker.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Spoonbill', rightImage: require('../../assets/spoonbill.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Woodpecker ', rightImage: require('../../assets/swift.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    } 
    else if (title == 'Sports') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'Archery', rightImage: require('../../assets/archery.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'Badminton', rightImage: require('../../assets/cricket.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Cricket', rightImage: require('../../assets/tennis.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Boxing', rightImage: require('../../assets/boxing.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Tennis', rightImage: require('../../assets/badminton.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Skateboarding', rightImage: require('../../assets/basketball.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Hockey', rightImage: require('../../assets/hoki.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Fitness', rightImage: require('../../assets/fitness.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Karate', rightImage: require('../../assets/skateboarding.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Basketball', rightImage: require('../../assets/karate.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'Car racing', rightImage: require('../../assets/fishing.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Cycling', rightImage: require('../../assets/car_racing.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Table tennis', rightImage: require('../../assets/table_tennis.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Fishing', rightImage: require('../../assets/cycling.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Canoeing', rightImage: require('../../assets/canoeing.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Surfing', rightImage: require('../../assets/football.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Football', rightImage: require('../../assets/kitesurfing.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Golf', rightImage: require('../../assets/surfing.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Running', rightImage: require('../../assets/running.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Kite Surfing', rightImage: require('../../assets/golf.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Insects') {
      leftGlobalArray = [[
        { corrIndex: 5, image: 'Firefly', rightImage: require('../../assets/spider.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'LadyBug', rightImage: require('../../assets/moth.png'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Moth', rightImage: require('../../assets/lady_bug.png'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Ant', rightImage: require('../../assets/ant.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Spider', rightImage: require('../../assets/firefly.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'Cockroach', rightImage: require('../../assets/cockroach.webp'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 3, image: 'Hornet', rightImage: require('../../assets/butterfly.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'Grasshopper', rightImage: require('../../assets/hornet.webp'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Mosquito', rightImage: require('../../assets/mosquito.png'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Butterfly', rightImage: require('../../assets/grasshopper.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Bee', rightImage: require('../../assets/dragonfly.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Beetle', rightImage: require('../../assets/beetle.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 5, image: 'House Fly', rightImage: require('../../assets/lotus.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 1, image: 'Dragonfly', rightImage: require('../../assets/bee.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Louse', rightImage: require('../../assets/housefly.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Place') {
      leftGlobalArray = [[
        { corrIndex: 1, image: 'House', rightImage: require('../../assets/house.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 5, image: 'School', rightImage: require('../../assets/library.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 2, image: 'Library', rightImage: require('../../assets/railway_station.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Bus Stop', rightImage: require('../../assets/busstop.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Railway Station', rightImage: require('../../assets/school.webp'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'Airplane', rightImage: require('../../assets/temple.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 4, image: 'Temple', rightImage: require('../../assets/church.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Mosque', rightImage: require('../../assets/mosque.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 2, image: 'Church', rightImage: require('../../assets/airplane.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 5, image: 'Police Station', rightImage: require('../../assets/police_station.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 4, image: 'Fire Station', rightImage: require('../../assets/stadium.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Post Office', rightImage: require('../../assets/postoffice.webp'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Zoo', rightImage: require('../../assets/zoo.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 5, image: 'Restaurant', rightImage: require('../../assets/fire_station.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 1, image: 'Stadium', rightImage: require('../../assets/restaurant.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    else if (title == 'Computer') {
      leftGlobalArray = [[
        { corrIndex: 5, image: 'Cpu', rightImage: require('../../assets/monitor.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 1, image: 'Monitor', rightImage: require('../../assets/printer.jpg'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 3, image: 'Mouse', rightImage: require('../../assets/mouse.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Keyboard', rightImage: require('../../assets/keyboard.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 2, image: 'Printer', rightImage: require('../../assets/cpu.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ], [
        { corrIndex: 5, image: 'Headphones', rightImage: require('../../assets/cd.jpg'), y1pos: Platform.OS == 'ios' ? 138 : 131, y2Pos: Platform.OS == 'ios' ? 223 : 207, coOrdix2: 60, coOrdiy2: 165, isComplete: false, },
        { corrIndex: 2, image: 'Scanner', rightImage: require('../../assets/scanner.webp'), y1pos: Platform.OS == 'ios' ? 257 : 252, y2Pos: Platform.OS == 'ios' ? 343 : 295, coOrdix2: 60, coOrdiy2: 286, isComplete: false, },
        { corrIndex: 1, image: 'Compact Disk(CD)', rightImage: require('../../assets/ram.jpg'), y1pos: Platform.OS == 'ios' ? 386 : 365, y2Pos: Platform.OS == 'ios' ? 462 : 452, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 427 : 407, isComplete: false, },
        { corrIndex: 4, image: 'Hard Disk', rightImage: require('../../assets/hardisk.jpg'), y1pos: Platform.OS == 'ios' ? 505 : 486, y2Pos: Platform.OS == 'ios' ? 585 : 567, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 557 : 527, isComplete: false, },
        { corrIndex: 3, image: 'Ram', rightImage: require('../../assets/microphone.jpg'), y1pos: Platform.OS == 'ios' ? 623 : 609, y2Pos: Platform.OS == 'ios' ? 707 : 688, coOrdix2: 60, coOrdiy2: Platform.OS == 'ios' ? 672 : 636, isComplete: false, },
      ]
      ];
    }
    this.setState({ dataArray: leftGlobalArray[0] });
    try {
      completeItemString=await AsyncStorage.getItem('completeItem');
    } catch (error) {
      
    }
  }

  onDrag = (event, gestureState, index) => {
    this.state.dataArray[index].coOrdix2 = gestureState.moveX;
    this.state.dataArray[index].coOrdiy2 = gestureState.moveY;
    this.setState({ dataArray: this.state.dataArray });
    console.log(gestureState)
  }
  Refresh=()=>{
    if(IsSoundEnabled)
    clickSound();
    this.props.navigation.goBack();
    this.props.route.params.Refresh();
  }
  onDragRelease = (event, gestureState, bounds, index) => {
    let tempArr = [...this.state.dataArray];
    let corrPosition = tempArr[index].corrIndex - 1;
    let xpos = Platform.OS == 'android' ? 270 : 275;
    let y1pos = tempArr[corrPosition].y1pos;
    let y2Pos = tempArr[corrPosition].y2Pos;
    let coOrdix2 = tempArr[index].coOrdix2;
    let coOrdiy2 = tempArr[index].coOrdiy2;
    //console.log(xpos + '-----' + y1pos + '-----y2Pos ' + y2Pos + '-----coOrdix2 ' + coOrdix2 + '-----coOrdiy2  ' + coOrdiy2)
    if (coOrdix2 > xpos && coOrdiy2 > y1pos && coOrdiy2 < y2Pos) {
      tempArr[index].isComplete = true;
      this.setState({ dataArray: tempArr });
      let flag = true;
      for (let i = 0; i < tempArr.length; i++) {
        if (!tempArr[i].isComplete) {
          flag = false;
          break;
        }
      }
      if (flag) {
        playSound('claps.mp3');
        if (pageIndex == leftGlobalArray.length-1) {
          AsyncStorage.setItem('completeItem',completeItemString ? completeItemString+' '+title : title);
          setTimeout(()=>{
            this.props.navigation.navigate('SuccessMessage',{title:title,Refresh:this.Refresh});
          },1000)
          
        }else{
          this.setState({ rightArrowShow: true });
        }
      } else {
        playSound('yes.mp3');
      }
    } else {
      tempArr[index].coOrdix2 = Platform.OS == 'android' ? lineInitialPosAndroid[index].coOrdix1 : lineInitialPosIos[index].coOrdix1;
      tempArr[index].coOrdiy2 = Platform.OS == 'android' ? lineInitialPosAndroid[index].coOrdiy1 : lineInitialPosIos[index].coOrdiy1;
      this.setState({ dataArray: tempArr });
      playSound('incorrect.mp3');
    }

  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ height: responsiveWidth(25), width: responsiveWidth(25), alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'black', borderWidth: 1, marginTop: responsiveHeight(2.8), backgroundColor: '#FFF' }} onPress={() => {
    }}>
      {!item.rightImage ? <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: colorArray[index], margin: responsiveHeight(1.5) }}>fgggg</Text> :
        <Image source={item.rightImage} style={{ height: responsiveWidth(20), width: responsiveWidth(20), resizeMode: 'stretch', tintColor: title == 'Shadow' ? '#000' : null }} />}

    </TouchableOpacity>
  );
  goToNextItem = () => {
    pageIndex++;
    if (pageIndex < leftGlobalArray.length) {

      this.setState({ dataArray: leftGlobalArray[pageIndex] });
      this.setState({ rightArrowShow: false });
    } else {
      this.props.navigation.navigate('SuccessMessage',{title:title,Refresh:this.Refresh});
      AsyncStorage.setItem('completeItem',completeItemString ? completeItemString+' '+title : title);
    }

  }
  render() {
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99}}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Platform.OS == 'android' ? responsiveHeight(1) : responsiveHeight(4), }}>
            <TouchableOpacity style={{ marginLeft: responsiveWidth(3), zIndex: 99 }} onPress={() => {
              playSound('click.mp3');
              this.props.navigation.goBack();
              //this.props.route.params.Refresh();
            }}>
              <Image source={back} style={{ height: responsiveFontSize(5), width: responsiveFontSize(5), resizeMode: 'contain', margin: 10 }} />
            </TouchableOpacity>
            <View style={{ position:'absolute',top:responsiveHeight(2),right:0,zIndex:99}}>
          <OptionMenu />
          </View>

          </View>
<View style={{marginLeft:responsiveWidth(7),alignItems:'center'}}>
{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
      unitId={Platform.OS=='ios'? 'ca-app-pub-5568037625500701/7897075199':'ca-app-pub-5568037625500701/5832360073'}
      size={BannerAdSize.BANNER}
    />}
</View>
          {this.state.dataArray && this.state.dataArray.map((item, index) => {
            return (
              <Svg style={{ position: 'absolute' }}>
                <Line x1={Platform.OS == 'android' ? lineInitialPosAndroid[index].coOrdix1 : lineInitialPosIos[index].coOrdix1} y1={Platform.OS == 'android' ? lineInitialPosAndroid[index].coOrdiy1 : lineInitialPosIos[index].coOrdiy1} x2={item.coOrdix2} y2={item.coOrdiy2} stroke={colorArray[index]} strokeWidth="6" />
              </Svg>
            );
          }, this)}


          {this.state.dataArray && this.state.dataArray.map((item, index) => {
            return (
              <Draggable x={responsiveWidth(5)} y={responsiveHeight(imagePosy[index])}
                disabled={item.isComplete}
                shouldReverse={true}
                onDragRelease={(event, gestureState, bounds) => this.onDragRelease(event, gestureState, bounds, index)}
                onDrag={(event, gestureState) => this.onDrag(event, gestureState, index)}
              >
                <TouchableOpacity style={{ height: responsiveWidth(25), width: responsiveWidth(25), alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'black', borderWidth: 1, marginTop: responsiveHeight(5), backgroundColor: '#FFF' }} onPress={() => {

                }}>
                  {type == 'color' ? <View style={{ height: responsiveWidth(15), width: responsiveWidth(15), borderRadius: 10, backgroundColor: item.image }} /> :
                    type == 'text' ? <Text style={{ fontSize:title == 'Letter Case'? CustomFont.font40: CustomFont.font20, fontWeight: 'bold', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici', textAlign: 'center', marginLeft: 3, marginRight: 3,color:Color.fontColor }}>{item.image}</Text> :
                      <Image source={item.image} style={{ height: responsiveWidth(20), width: responsiveWidth(20), resizeMode: 'contain' }} />
                  }

                </TouchableOpacity>

              </Draggable>

            );
          }, this)}

          <FlatList
            style={{ position: 'absolute', right: 10, zIndex: 9, marginTop: responsiveHeight(12.6) }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false} />
          
         
          {this.state.rightArrowShow ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(2), right: 10 }} onPress={() => this.goToNextItem()}>
            <Image source={arrowRight} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 5 }} />
          </TouchableOpacity> : null}
        </View>
        
      </ImageBackground>
    );
  }

}
