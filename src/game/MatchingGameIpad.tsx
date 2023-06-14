import * as React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, ImageBackground, Alert, StatusBar } from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
import { playSound, txtToSpeak,clickSound } from '../components/CommonFunc';
import balloon from '../../assets/balloon.png';
import arrowRight from '../../assets/arrowRight.png';
import back from '../../assets/back.png';
import bgImage from '../../assets/bg.png';
import Draggable from 'react-native-draggable';
import Svg, { Line } from 'react-native-svg';
let pageIndex = 0;
let colorArray = ['black', 'red', 'blue', 'black', '#FF3284'], imagePosy = [5, 22, 40, 58, 75], lineInitialPosIpad = [{ coOrdix1: 90, coOrdiy1: 240, },
  { coOrdix1: 90, coOrdiy1: 477, },
  { coOrdix1: 90, coOrdiy1: 740, },
  { coOrdix1: 90, coOrdiy1: 950, },
  { coOrdix1: 100, coOrdiy1: 1250, },
  ];

let leftGlobalArray = [], title = '';
import mobileAds, { BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      rightArrowShow: false,
    };
  }
  componentDidMount() {
    pageIndex = 0;
    title = this.props.route.params.item.title;
    if (title == 'ABC') {
      leftGlobalArray = [[
        { corrIndex: 2, image: require('../../assets/a.jpg'), rightImage: require('../../assets/dfordog.jpg'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/b.jpg'), rightImage: require('../../assets/apple.jpg'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/c.jpg'), rightImage: require('../../assets/eforele.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/d.jpg'), rightImage: require('../../assets/bforball.jpg'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/e.jpg'), rightImage: require('../../assets/cat.jpg'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 1, image: require('../../assets/f.jpg'), rightImage: require('../../assets/fish.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/g.jpg'), rightImage: require('../../assets/hforhat.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/h.jpg'), rightImage: require('../../assets/anmgoat.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/i.jpg'), rightImage: require('../../assets/jforjoker.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/j.png'), rightImage: require('../../assets/icecream.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 5, image: require('../../assets/k.png'), rightImage: require('../../assets/nfornest.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/l.png'), rightImage: require('../../assets/lforlion.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/m.png'), rightImage: require('../../assets/oforowl.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/n.png'), rightImage: require('../../assets/mangos.jpg'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/o.png'), rightImage: require('../../assets/kforkangaroo.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ]
      ];
    } else if (title == '123') {
      leftGlobalArray = [[
        { corrIndex: 4, image: require('../../assets/icon_n1.png'), rightImage: require('../../assets/n3_three.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/icon_n2.png'), rightImage: require('../../assets/n2_two.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/icon_n3.png'), rightImage: require('../../assets/n5_five.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n4.png'), rightImage: require('../../assets/n1_one.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n5.png'), rightImage: require('../../assets/n4_four.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 1, image: require('../../assets/icon_n6.png'), rightImage: require('../../assets/n6_six.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/icon_n7.png'), rightImage: require('../../assets/n7_seven.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n8.png'), rightImage: require('../../assets/n10_ten2.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/icon_n9.png'), rightImage: require('../../assets/n9_nine.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n10.png'), rightImage: require('../../assets/n8_eigght.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 2, image: require('../../assets/icon_n11.png'), rightImage: require('../../assets/n14_fourteen.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/icon_n12.png'), rightImage: require('../../assets/n11_eleaven.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/icon_n13.png'), rightImage: require('../../assets/n12_tweel.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/icon_n14.png'), rightImage: require('../../assets/n13_thirteen.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/icon_n15.png'), rightImage: require('../../assets/n15_fifteen.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ]
      ];
    } else if (title == 'Shapes') {
      leftGlobalArray = [[
        { corrIndex: 2, image: require('../../assets/triangle.png'), rightImage: require('../../assets/sellipse.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/starYellow.png'), rightImage: require('../../assets/striangle.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/shpoval.png'), rightImage: require('../../assets/sstar.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/semicircle.png'), rightImage: require('../../assets/ssquare.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/square.png'), rightImage: require('../../assets/ssemicircle.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/heart.png'), rightImage: require('../../assets/spentagon.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/shpcylinder.png'), rightImage: require('../../assets/can.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/shppentagon.png'), rightImage: require('../../assets/rubber.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/rectangle.png'), rightImage: require('../../assets/sheart.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/circle.png'), rightImage: require('../../assets/bforball.jpg'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ]
      ];
    } else if (title == 'Colors') {
      leftGlobalArray = [[
        { corrIndex: 2, image: '#3700ff', rightImage: require('../../assets/fig.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 5, image: 'red', rightImage: require('../../assets/fblue.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: '#6b3569', rightImage: require('../../assets/frvgcucumber.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: '#007e00', rightImage: require('../../assets/frvglemon.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: '#ffeb00', rightImage: require('../../assets/fdragan.jpg'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 2, image: '#d10015', rightImage: require('../../assets/banana.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 1, image: '#ffcb00', rightImage: require('../../assets/anar.jpg'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 5, image: '#2c2834', rightImage: require('../../assets/broccoli.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: '#00a540', rightImage: require('../../assets/coconut.jpg'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: '#673f0c', rightImage: require('../../assets/blackBerry.jpg'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 1, image: '#ffeb00', rightImage: require('../../assets/frvglemon.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 4, image: '#ff7b00', rightImage: require('../../assets/frvgpear.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 2, image: '#a1d300', rightImage: require('../../assets/frvgtomato.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: '#fea000', rightImage: require('../../assets/frvgorange.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: '#ff0519', rightImage: require('../../assets/frvgpumpkin.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 1, image: '#efeff2', rightImage: require('../../assets/fwhite.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 4, image: '#90db00', rightImage: require('../../assets/mango.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 5, image: '#0b8cd5', rightImage: require('../../assets/strabery.jpg'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 2, image: '#ffa200', rightImage: require('../../assets/greenCabage.jpg'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: '#ec1f2b', rightImage: require('../../assets/igloo.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ],
      ];
    } else if (title == 'Shadow') {
      leftGlobalArray = [[
        { corrIndex: 3, image: require('../../assets/anmelk.png'), rightImage: require('../../assets/anmgoat.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/anmflamingo.png'), rightImage: require('../../assets/anmflamingo.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmgiraffe.png'), rightImage: require('../../assets/anmelk.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmgoat.png'), rightImage: require('../../assets/anmmonkey.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/anmmonkey.png'), rightImage: require('../../assets/anmgiraffe.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/anmcow.png'), rightImage: require('../../assets/anmcrow.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/anmcrab.png'), rightImage: require('../../assets/anmcrab.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmcrow.png'), rightImage: require('../../assets/anmdeer.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmdeer.png'), rightImage: require('../../assets/anmcow.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmdog.png'), rightImage: require('../../assets/anmdog.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 2, image: require('../../assets/anmostrich.png'), rightImage: require('../../assets/anmturkey.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmsnake.png'), rightImage: require('../../assets/anmostrich.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmturkey.png'), rightImage: require('../../assets/anmzebra.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 4, image: require('../../assets/anmyak.png'), rightImage: require('../../assets/anmyak.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmzebra.png'), rightImage: require('../../assets/anmsnake.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 4, image: require('../../assets/anmalligator.png'), rightImage: require('../../assets/anmcamel.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 2, image: require('../../assets/anmbear.png'), rightImage: require('../../assets/anmbear.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: require('../../assets/anmcamel.png'), rightImage: require('../../assets/anmchicken.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: require('../../assets/anmcat.png'), rightImage: require('../../assets/anmalligator.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 3, image: require('../../assets/anmchicken.png'), rightImage: require('../../assets/anmcat.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ],
      ];
    } else if (title == 'Spell') {
      leftGlobalArray = [[
        { corrIndex: 3, image: 'elephant', rightImage: require('../../assets/anmchicken.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 1, image: 'hen', rightImage: require('../../assets/anmcrab.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 2, image: 'crab', rightImage: require('../../assets/eforele.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 5, image: 'cat', rightImage: require('../../assets/anmdeer.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 4, image: 'deer', rightImage: require('../../assets/cat.jpg'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 3, image: 'goat', rightImage: require('../../assets/fish.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 4, image: 'yak', rightImage: require('../../assets/hforhat.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 1, image: 'fish', rightImage: require('../../assets/anmgoat.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 2, image: 'hat', rightImage: require('../../assets/anmyak.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: 'giraffe', rightImage: require('../../assets/anmgiraffe.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'turkey', rightImage: require('../../assets/anmzebra.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 1, image: 'zebra', rightImage: require('../../assets/anmturkey.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 4, image: 'mangos', rightImage: require('../../assets/oforowl.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: 'owl', rightImage: require('../../assets/mangos.jpg'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: 'kangaroo', rightImage: require('../../assets/kforkangaroo.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 1, image: 'bird', rightImage: require('../../assets/bird.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 3, image: 'flower', rightImage: require('../../assets/dfordog.jpg'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 4, image: 'fig', rightImage: require('../../assets/flower.png'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 2, image: 'dog', rightImage: require('../../assets/fig.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 5, image: 'pear', rightImage: require('../../assets/frvgpear.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ], [
        { corrIndex: 2, image: 'pumpkin', rightImage: require('../../assets/frvgtomato.png'), y1pos: 127, y2Pos: 330, coOrdix2: 70, coOrdiy2: 224, isComplete: false, },
        { corrIndex: 5, image: 'lemon', rightImage: require('../../assets/frvgpumpkin.png'), y1pos: 368, y2Pos: 572, coOrdix2: 70, coOrdiy2: 443, isComplete: false, },
        { corrIndex: 4, image: 'strawberry', rightImage: require('../../assets/greenCabage.jpg'), y1pos: 600, y2Pos: 798, coOrdix2: 70, coOrdiy2:709, isComplete: false, },
        { corrIndex: 3, image: 'Cabage', rightImage: require('../../assets/strawberry.png'), y1pos: 833, y2Pos: 1039, coOrdix2: 70, coOrdiy2: 916, isComplete: false, },
        { corrIndex: 1, image: 'tomato', rightImage: require('../../assets/frvglemon.png'), y1pos: 1073, y2Pos: 1275, coOrdix2: 70, coOrdiy2: 1153, isComplete: false, },
      ]
      ];
    }

    this.setState({ dataArray: leftGlobalArray[0] });
  }

  onDrag = (event, gestureState, index) => {
    this.state.dataArray[index].coOrdix2 = gestureState.moveX;
    this.state.dataArray[index].coOrdiy2 = gestureState.moveY;
    this.setState({ dataArray: this.state.dataArray });
    console.log(gestureState)
  }

  onDragRelease = (event, gestureState, bounds, index) => {
    let tempArr = [...this.state.dataArray];
    let corrPosition = tempArr[index].corrIndex - 1;
    let xpos = 790;
    let y1pos = tempArr[corrPosition].y1pos;
    let y2Pos = tempArr[corrPosition].y2Pos;
    let coOrdix2 = tempArr[index].coOrdix2;
    let coOrdiy2 = tempArr[index].coOrdiy2;
    console.log(xpos + '-----' + y1pos + '-----y2Pos ' + y2Pos + '-----coOrdix2 ' + coOrdix2 + '-----coOrdiy2  ' + coOrdiy2)
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
        this.setState({ rightArrowShow: true });
        playSound('claps.mp3');
      } else {
        playSound('yes.mp3');
      }
    } else {
      tempArr[index].coOrdix2 =lineInitialPosIpad[index].coOrdix1;
      tempArr[index].coOrdiy2 =lineInitialPosIpad[index].coOrdiy1;
      this.setState({ dataArray: tempArr });
      playSound('incorrect.mp3');
    }

  }

  renderList = ({ item, index }) => (
    <TouchableOpacity style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'black', borderWidth: 1, marginTop: responsiveHeight(2), backgroundColor: '#FFF' }} onPress={() => {
    }}>
      {!item.rightImage ? <Text style={{ fontSize: CustomFont.font30, fontWeight: 'bold', color: colorArray[index], margin: responsiveHeight(1.5) }}>fgggg</Text> :
        <Image source={item.rightImage} style={{ height: responsiveWidth(15), width: responsiveWidth(15), resizeMode: 'contain', tintColor: title == 'Shadow' ? '#000' : null }} />}

    </TouchableOpacity>
  );
  goToNextItem = () => {
    pageIndex++;
    if (pageIndex < leftGlobalArray.length) {

      this.setState({ dataArray: leftGlobalArray[pageIndex] });
      this.setState({ rightArrowShow: false });
    } else {
      Alert.alert(
        'Success',
        'You have complete all Steps! ',
        [
          {
            text: 'Ok',
            onPress: () => {
              this.props.navigation.goBack();
            },
          },
        ],
        { cancelable: false },
      );
    }

  }
  render() {
    return (
      <ImageBackground source={bgImage} resizeMode="stretch" style={{ flex: 1, zIndex: 99 }}>
        <StatusBar backgroundColor={'#1eb6f7'} barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1), left: responsiveWidth(3), zIndex: 99 }} onPress={() => {
            if(IsSoundEnabled)
            clickSound();
            this.props.navigation.goBack()
          }}>
            <Image source={back} style={{ height: responsiveFontSize(4), width: responsiveFontSize(4), resizeMode: 'contain', margin: 5 }} />
          </TouchableOpacity>
          <View style={{ marginTop: responsiveHeight(1) }}>
            <View style={{ alignItems: 'center' }}>
            {Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
            </View>
          </View>
          {this.state.dataArray && this.state.dataArray.map((item, index) => {
            return (
              <Svg style={{ position: 'absolute' }}>
                <Line x1={lineInitialPosIpad[index].coOrdix1} y1={ lineInitialPosIpad[index].coOrdiy1 } x2={item.coOrdix2} y2={item.coOrdiy2} stroke={colorArray[index]} strokeWidth="10" />
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
                <TouchableOpacity style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'black', borderWidth: 1, marginTop: responsiveHeight(5), backgroundColor: '#FFF' }} onPress={() => {

                }}>
                  {title == 'Colors' ? <View style={{ height: responsiveWidth(15), width: responsiveWidth(15), borderRadius: 10, backgroundColor: item.image }} /> :
                    title == 'Spell' ? <Text style={{ fontSize: CustomFont.font20, fontWeight: 'bold', fontFamily: Platform.OS == 'ios' ?'Comic Sans MS':'comici' }}>{item.image}</Text> :
                      <Image source={item.image} style={{ height: responsiveWidth(15), width: responsiveWidth(15), resizeMode: 'contain' }} />
                  }

                </TouchableOpacity>

              </Draggable>

            );
          }, this)}

          <FlatList
            style={{ position: 'absolute', right: 20, zIndex: 9, marginTop: responsiveHeight(7) }}
            data={this.state.dataArray}
            renderItem={this.renderList}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false} />
          {this.state.rightArrowShow ? <TouchableOpacity style={{ position: 'absolute', bottom: responsiveHeight(2), left: responsiveWidth(48) }} onPress={() => this.goToNextItem()}>
            <Image source={arrowRight} style={{ height: responsiveFontSize(6), width: responsiveFontSize(6), resizeMode: 'contain', margin: 5 }} />
          </TouchableOpacity> : null}

        </View>

      </ImageBackground>
    );
  }

}
