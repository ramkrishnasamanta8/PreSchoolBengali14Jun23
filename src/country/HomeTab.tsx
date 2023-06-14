import React,{useEffect,useState,useRef} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Platform, TextInput,SafeAreaView } from 'react-native';

 import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Color from '../components/Colors';
import CustomFont from '../components/CustomFont';
var SQLite = require('react-native-sqlite-storage');
import _ from 'lodash';
import sound from '../../assets/sound.png';
import arrowRight from '../../assets/arrowRight.png';
import back_blue from '../../assets/back_blue.png';
import close_white from '../../assets/close_white.png';
import search_blue from '../../assets/search_blue.png';
import ic_menu from '../../assets/ic_menu.png';
import { playSound ,txtToSpeak,clickSound } from '../components/CommonFunc';
import mobileAds, {BannerAd, BannerAdSize, MaxAdContentRating } from 'react-native-google-mobile-ads';
let db = null,FullArray = [];
global.ImageArray=[{image:require('../../assets/flag/af.jpg'),con:'Asia'},
{image:require('../../assets/flag/al.jpg'),con:'Europe'},
{image:require('../../assets/flag/dz.jpg'),con:'Africa'},
{image:require('../../assets/flag/as.jpg'),con:'Oceania'},
{image:require('../../assets/flag/ad.jpg'),con:'Europe'},
{image:require('../../assets/flag/ao.jpg'),con:'Africa'},
{image:require('../../assets/flag/ai.jpg'),con:'North America'},
{image:require('../../assets/flag/ag.jpg'),con:'North America'},
{image:require('../../assets/flag/ar.jpg'),con:'South America'},
{image:require('../../assets/flag/am.jpg'),con:'Asia'},
{image:require('../../assets/flag/aw.jpg'),con:'North America'},
{image:require('../../assets/flag/au.jpg'),con:'Oceania'},
{image:require('../../assets/flag/at.jpg'),con:'Europe'},
{image:require('../../assets/flag/az.jpg'),con:'Asia'},
{image:require('../../assets/flag/bs.jpg'),con:'North America'},
{image:require('../../assets/flag/bh.jpg'),con:'Asia'},
{image:require('../../assets/flag/bd.jpg'),con:'Asia'},
{image:require('../../assets/flag/bb.jpg'),con:'North America'},
{image:require('../../assets/flag/by.jpg'),con:'Europe'},
{image:require('../../assets/flag/be.jpg'),con:'Europe'},
{image:require('../../assets/flag/bz.jpg'),con:'North America'},
{image:require('../../assets/flag/bj.jpg'),con:'Africa'},
{image:require('../../assets/flag/bm.jpg'),con:'North America'},
{image:require('../../assets/flag/bt.jpg'),con:'Asia'},
{image:require('../../assets/flag/bo.jpg'),con:'South America'},
{image:require('../../assets/flag/ba.jpg'),con:'Europe'},
{image:require('../../assets/flag/bw.jpg'),con:'Africa'},
{image:require('../../assets/flag/bv.jpg'),con:'Antarctica'},
{image:require('../../assets/flag/br.jpg'),con:'South America'},
{image:require('../../assets/flag/io.jpg'),con:'Asia'},
{image:require('../../assets/flag/vg.jpg'),con:'North America'},
{image:require('../../assets/flag/bn.jpg'),con:'Asia'},
{image:require('../../assets/flag/bg.jpg'),con:'Europe'},
{image:require('../../assets/flag/bf.jpg'),con:'Africa'},
{image:require('../../assets/flag/bi.jpg'),con:'Africa'},
{image:require('../../assets/flag/kh.jpg'),con:'Asia'},
{image:require('../../assets/flag/cm.jpg'),con:'Africa'},
{image:require('../../assets/flag/ca.jpg'),con:'North America'},
{image:require('../../assets/flag/cv.jpg'),con:'Africa'},
{image:require('../../assets/flag/ky.jpg'),con:'North America'},
{image:require('../../assets/flag/cf.jpg'),con:'Africa'},
{image:require('../../assets/flag/td.jpg'),con:'Africa'},
{image:require('../../assets/flag/cl.jpg'),con:'South America'},
{image:require('../../assets/flag/cn.jpg'),con:'Asia'},
{image:require('../../assets/flag/cx.jpg'),con:'Asia'},
{image:require('../../assets/flag/cc.jpg'),con:'Asia'},
{image:require('../../assets/flag/co.jpg'),con:'South America'},
{image:require('../../assets/flag/km.jpg'),con:'Africa'},
{image:require('../../assets/flag/cd.jpg'),con:'Africa'},
{image:require('../../assets/flag/cg.jpg'),con:'Africa'},
{image:require('../../assets/flag/ck.jpg'),con:'Oceania'},
{image:require('../../assets/flag/cr.jpg'),con:'North America'},
{image:require('../../assets/flag/ci.jpg'),con:'Africa'},
{image:require('../../assets/flag/hr.jpg'),con:'Europe'},
{image:require('../../assets/flag/cu.jpg'),con:'North America'},
{image:require('../../assets/flag/cy.jpg'),con:'Asia'},
{image:require('../../assets/flag/cz.jpg'),con:'Europe'},
{image:require('../../assets/flag/dk.jpg'),con:'Europe'},
{image:require('../../assets/flag/dj.jpg'),con:'Africa'},
{image:require('../../assets/flag/dm.jpg'),con:'North America'},
{image:require('../../assets/flag/do.jpg'),con:'North America'},
{image:require('../../assets/flag/ec.jpg'),con:'South America'},
{image:require('../../assets/flag/eg.jpg'),con:'Africa'},
{image:require('../../assets/flag/sv.jpg'),con:'North America'},
{image:require('../../assets/flag/gq.jpg'),con:'Africa'},
{image:require('../../assets/flag/er.jpg'),con:'Africa'},
{image:require('../../assets/flag/ee.jpg'),con:'Europe'},
{image:require('../../assets/flag/et.jpg'),con:'Africa'},
{image:require('../../assets/flag/fk.jpg'),con:'South America'},
{image:require('../../assets/flag/fo.jpg'),con:'Europe'},
{image:require('../../assets/flag/fj.jpg'),con:'Oceania'},
{image:require('../../assets/flag/fi.jpg'),con:'Europe'},
{image:require('../../assets/flag/fr.jpg'),con:'Europe'},
{image:require('../../assets/flag/gf.jpg'),con:'South America'},
{image:require('../../assets/flag/pf.jpg'),con:'Oceania'},
{image:require('../../assets/flag/tf.jpg'),con:'Antarctica'},
{image:require('../../assets/flag/ga.jpg'),con:'Africa'},
{image:require('../../assets/flag/gm.jpg'),con:'Africa'},
{image:require('../../assets/flag/gz.jpg'),con:'Africa'},
{image:require('../../assets/flag/ge.jpg'),con:'Asia'},
{image:require('../../assets/flag/de.jpg'),con:'Europe'},
{image:require('../../assets/flag/gh.jpg'),con:'Africa'},
{image:require('../../assets/flag/gi.jpg'),con:'Europe'},
{image:require('../../assets/flag/gr.jpg'),con:'Europe'},
{image:require('../../assets/flag/gl.jpg'),con:'North America'},
{image:require('../../assets/flag/gd.jpg'),con:'North America'},
{image:require('../../assets/flag/gp.jpg'),con:'North America'},
{image:require('../../assets/flag/gu.jpg'),con:'Oceania'},
{image:require('../../assets/flag/gt.jpg'),con:'North America'},
{image:require('../../assets/flag/gg.jpg'),con:'Europe'},
{image:require('../../assets/flag/gn.jpg'),con:'Africa'},
{image:require('../../assets/flag/gw.jpg'),con:'Africa'},
{image:require('../../assets/flag/gy.jpg'),con:'South America'},
{image:require('../../assets/flag/ht.jpg'),con:'North America'},
{image:require('../../assets/flag/hn.jpg'),con:'North America'},
{image:require('../../assets/flag/hk.jpg'),con:'Asia'},
{image:require('../../assets/flag/hu.jpg'),con:'Europe'},
{image:require('../../assets/flag/is.jpg'),con:'Europe'},
{image:require('../../assets/flag/in.jpg'),con:'Asia'},
{image:require('../../assets/flag/id.jpg'),con:'Asia'},
{image:require('../../assets/flag/ir.jpg'),con:'Asia'},
{image:require('../../assets/flag/iq.jpg'),con:'Asia'},
{image:require('../../assets/flag/ie.jpg'),con:'Europe'},
{image:require('../../assets/flag/im.jpg'),con:'Europe'},
{image:require('../../assets/flag/il.jpg'),con:'Asia'},
{image:require('../../assets/flag/it.jpg'),con:'Europe'},
{image:require('../../assets/flag/jm.jpg'),con:'North America'},
{image:require('../../assets/flag/jp.jpg'),con:'Asia'},
{image:require('../../assets/flag/je.jpg'),con:'Europe'},
{image:require('../../assets/flag/jo.jpg'),con:'Asia'},
{image:require('../../assets/flag/kz.jpg'),con:'Asia'},
{image:require('../../assets/flag/ke.jpg'),con:'Africa'},
{image:require('../../assets/flag/ki.jpg'),con:'Oceania'},
{image:require('../../assets/flag/xk.jpg'),con:'Europe'},
{image:require('../../assets/flag/kw.jpg'),con:'Asia'},
{image:require('../../assets/flag/kg.jpg'),con:'Asia'},
{image:require('../../assets/flag/la.jpg'),con:'Asia'},
{image:require('../../assets/flag/lv.jpg'),con:'Europe'},
{image:require('../../assets/flag/lb.jpg'),con:'Asia'},
{image:require('../../assets/flag/ls.jpg'),con:'Africa'},
{image:require('../../assets/flag/lr.jpg'),con:'Africa'},
{image:require('../../assets/flag/ly.jpg'),con:'Africa'},
{image:require('../../assets/flag/li.jpg'),con:'Europe'},
{image:require('../../assets/flag/lt.jpg'),con:'Europe'},
{image:require('../../assets/flag/lu.jpg'),con:'Europe'},
{image:require('../../assets/flag/mo.jpg'),con:'Asia'},
{image:require('../../assets/flag/mk.jpg'),con:'Europe'},
{image:require('../../assets/flag/mg.jpg'),con:'Africa'},
{image:require('../../assets/flag/mw.jpg'),con:'Africa'},
{image:require('../../assets/flag/my.jpg'),con:'Asia'},
{image:require('../../assets/flag/mv.jpg'),con:'Asia'},
{image:require('../../assets/flag/ml.jpg'),con:'Africa'},
{image:require('../../assets/flag/mt.jpg'),con:'Europe'},
{image:require('../../assets/flag/mh.jpg'),con:'Oceania'},
{image:require('../../assets/flag/mq.jpg'),con:'North America'},
{image:require('../../assets/flag/mr.jpg'),con:'Africa'},
{image:require('../../assets/flag/mu.jpg'),con:'Africa'},
{image:require('../../assets/flag/yt.jpg'),con:'Africa'},
{image:require('../../assets/flag/mx.jpg'),con:'North America'},
{image:require('../../assets/flag/fm.jpg'),con:'Oceania'},
{image:require('../../assets/flag/md.jpg'),con:'Europe'},
{image:require('../../assets/flag/mc.jpg'),con:'Europe'},
{image:require('../../assets/flag/mn.jpg'),con:'Asia'},
{image:require('../../assets/flag/me.jpg'),con:'Europe'},
{image:require('../../assets/flag/ms.jpg'),con:'North America'},
{image:require('../../assets/flag/ma.jpg'),con:'Africa'},
{image:require('../../assets/flag/mz.jpg'),con:'Africa'},
{image:require('../../assets/flag/mm.jpg'),con:'Asia'},
{image:require('../../assets/flag/na.jpg'),con:'Africa'},
{image:require('../../assets/flag/nr.jpg'),con:'Oceania'},
{image:require('../../assets/flag/np.jpg'),con:'Asia'},
{image:require('../../assets/flag/nl.jpg'),con:'Europe'},
{image:require('../../assets/flag/an.jpg'),con:'North America'},
{image:require('../../assets/flag/nc.jpg'),con:'Oceania'},
{image:require('../../assets/flag/nz.jpg'),con:'Oceania'},
{image:require('../../assets/flag/ni.jpg'),con:'North America'},
{image:require('../../assets/flag/ne.jpg'),con:'Africa'},
{image:require('../../assets/flag/ng.jpg'),con:'Africa'},
{image:require('../../assets/flag/nu.jpg'),con:'Oceania'},
{image:require('../../assets/flag/nf.jpg'),con:'Oceania'},
{image:require('../../assets/flag/kp.jpg'),con:'Asia'},
{image:require('../../assets/flag/mp.jpg'),con:'Oceania'},
{image:require('../../assets/flag/no.jpg'),con:'Europe'},
{image:require('../../assets/flag/om.jpg'),con:'Asia'},
{image:require('../../assets/flag/pk.jpg'),con:'Asia'},
{image:require('../../assets/flag/pw.jpg'),con:'Oceania'},
{image:require('../../assets/flag/ps.jpg'),con:'Asia'},
{image:require('../../assets/flag/pa.jpg'),con:'North America'},
{image:require('../../assets/flag/pg.jpg'),con:'Oceania'},
{image:require('../../assets/flag/py.jpg'),con:'South America'},
{image:require('../../assets/flag/pe.jpg'),con:'South America'},
{image:require('../../assets/flag/ph.jpg'),con:'Asia'},
{image:require('../../assets/flag/pn.jpg'),con:'Oceania'},
{image:require('../../assets/flag/pl.jpg'),con:'Europe'},
{image:require('../../assets/flag/pt.jpg'),con:'Europe'},
{image:require('../../assets/flag/pr.jpg'),con:'North America'},
{image:require('../../assets/flag/qa.jpg'),con:'Asia'},
{image:require('../../assets/flag/re.jpg'),con:'Africa'},
{image:require('../../assets/flag/ro.jpg'),con:'Europe'},
{image:require('../../assets/flag/ru.jpg'),con:'Europe'},
{image:require('../../assets/flag/rw.jpg'),con:'Africa'},
{image:require('../../assets/flag/sh.jpg'),con:'Africa'},
{image:require('../../assets/flag/kn.jpg'),con:'North America'},
{image:require('../../assets/flag/lc.jpg'),con:'North America'},
{image:require('../../assets/flag/pm.jpg'),con:'North America'},
{image:require('../../assets/flag/vc.jpg'),con:'North America'},
{image:require('../../assets/flag/ws.jpg'),con:'Oceania'},
{image:require('../../assets/flag/sm.jpg'),con:'Europe'},
{image:require('../../assets/flag/st.jpg'),con:'Africa'},
{image:require('../../assets/flag/sa.jpg'),con:'Asia'},
{image:require('../../assets/flag/sn.jpg'),con:'Africa'},
{image:require('../../assets/flag/rs.jpg'),con:'Europe'},
{image:require('../../assets/flag/sc.jpg'),con:'Africa'},
{image:require('../../assets/flag/sl.jpg'),con:'Africa'},
{image:require('../../assets/flag/sg.jpg'),con:'Asia'},
{image:require('../../assets/flag/sk.jpg'),con:'Europe'},
{image:require('../../assets/flag/si.jpg'),con:'Europe'},
{image:require('../../assets/flag/sb.jpg'),con:'Oceania'},
{image:require('../../assets/flag/so.jpg'),con:'Africa'},
{image:require('../../assets/flag/za.jpg'),con:'Africa'},
{image:require('../../assets/flag/kr.jpg'),con:'Asia'},
{image:require('../../assets/flag/es.jpg'),con:'Europe'},
{image:require('../../assets/flag/lk.jpg'),con:'Asia'},
{image:require('../../assets/flag/sd.jpg'),con:'Africa'},
{image:require('../../assets/flag/sr.jpg'),con:'South America'},
{image:require('../../assets/flag/sz.jpg'),con:'Africa'},
{image:require('../../assets/flag/se.jpg'),con:'Europe'},
{image:require('../../assets/flag/ch.jpg'),con:'Europe'},
{image:require('../../assets/flag/sy.jpg'),con:'Asia'},
{image:require('../../assets/flag/tw.jpg'),con:'Asia'},
{image:require('../../assets/flag/tj.jpg'),con:'Asia'},
{image:require('../../assets/flag/tz.jpg'),con:'Africa'},
{image:require('../../assets/flag/th.jpg'),con:'Asia'},
{image:require('../../assets/flag/tl.jpg'),con:'Asia'},
{image:require('../../assets/flag/tg.jpg'),con:'Africa'},
{image:require('../../assets/flag/tk.jpg'),con:'Oceania'},
{image:require('../../assets/flag/to.jpg'),con:'Oceania'},
{image:require('../../assets/flag/tt.jpg'),con:'North America'},
{image:require('../../assets/flag/tn.jpg'),con:'Africa'},
{image:require('../../assets/flag/tr.jpg'),con:'Europe'},
{image:require('../../assets/flag/tm.jpg'),con:'Asia'},
{image:require('../../assets/flag/tc.jpg'),con:'North America'},
{image:require('../../assets/flag/tv.jpg'),con:'Oceania'},
{image:require('../../assets/flag/vi.jpg'),con:'North America'},
{image:require('../../assets/flag/ug.jpg'),con:'Africa'},
{image:require('../../assets/flag/ua.jpg'),con:'Europe'},
{image:require('../../assets/flag/ae.jpg'),con:'Asia'},
{image:require('../../assets/flag/gb.jpg'),con:'Europe'},
{image:require('../../assets/flag/us.jpg'),con:'North America'},
{image:require('../../assets/flag/uy.jpg'),con:'South America'},
{image:require('../../assets/flag/uz.jpg'),con:'Asia'},
{image:require('../../assets/flag/vu.jpg'),con:'Oceania'},
{image:require('../../assets/flag/va.jpg'),con:'Europe'},
{image:require('../../assets/flag/ve.jpg'),con:'South America'},
{image:require('../../assets/flag/vn.jpg'),con:'Asia'},
{image:require('../../assets/flag/wf.jpg'),con:'Oceania'},
{image:require('../../assets/flag/eh.jpg'),con:'Africa'},
{image:require('../../assets/flag/ye.jpg'),con:'Asia'},
{image:require('../../assets/flag/zm.jpg'),con:'Africa'},
{image:require('../../assets/flag/zw.jpg'),con:'Africa'},]
export default HomeTab=(props)=> {
  const [dataArray,setdataArray]=useState([]);
  const [searchInputShow,setsearchInputShow]=useState(true);
  const [searchTxt,setsearchTxt]=useState('');
  const [crossStatus,setcrossStatus]=useState(true);
const search=useRef(null);
  useEffect(()=>{
    if (Platform.OS === 'ios') {
      db = SQLite.openDatabase(
        { name: 'general_knowledge.db', createFromLocation: 1 },
        open => {
          console.log('DB Connect iOS');
          getData();
        },
        e => {
          console.log(e);// eslint-disable-line
        },
      );
    } else {
      db = SQLite.openDatabase(
        { name: 'general_knowledge.db', createFromLocation: '~/general_knowledge.db', location: 'Library' },
        open => {
          getData();
          console.log('DB Connect android');
        },
        e => {
          console.log(e);// eslint-disable-line
        },
      );
    }
  },[])

  const getData = () => {
    let dbQuery = 'SELECT ID,COUNTRY_NAME,CAPITAL,flag_image FROM country';
    db.transaction(tx => {
      tx.executeSql(dbQuery, [], (tx, results) => {
        //console.log(results);
        let len = results.rows.length;
        let dataArr = [];
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            dataArr.push({
              id: row.ID,
              name: row.COUNTRY_NAME,
              capital: row.CAPITAL,
              flag_image: row.flag_image
            });
          }
          FullArray=dataArr;
          setdataArray(dataArr);
        }
      },
        e => {
          //console.log(e);
        },
      );
    });
  }
  const SearchFilterFunction = (text) => {
    //for CheckIn
    var searchResultCheckIn = _.filter(FullArray, function (item) {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setdataArray(searchResultCheckIn ? searchResultCheckIn : []);
    setsearchTxt(text);

  }
  const renderList = ({ item, index }) => (
    <TouchableOpacity style={{ flex: 1, backgroundColor: Color.white, flexDirection: 'row', marginTop: 1 }}
      onPress={() => {
        if(IsSoundEnabled)
    clickSound();
        props.nav.navigation.navigate('CountryDetails', {item:item, index:index});
      }}>
      <Image source={ImageArray[index].image} style={{ height: responsiveFontSize(10), width: responsiveFontSize(10), resizeMode: 'contain', margin: responsiveWidth(2) }} />
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: CustomFont.font18, color: Color.fontColor, marginTop: responsiveHeight(2.5), marginLeft: responsiveWidth(3), fontWeight: 'bold', }}>{item.name}</Text>
        <Text style={{ fontSize: CustomFont.font16, color: Color.green, marginTop: responsiveHeight(1), marginLeft: responsiveWidth(3), textAlign: 'left' }}>{item.capital}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => txtToSpeak(item.name)}>
          <Image source={sound} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), tintColor: Color.primary }} />
        </TouchableOpacity>

        <Image source={arrowRight} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', margin: responsiveWidth(2.5), marginTop: 10 }} />
      </View>

    </TouchableOpacity>
  );
    return (
      <View style={{ flex: 1, backgroundColor: Color.primary }}>
         <View style={{ flex: 1, backgroundColor: Color.white }}>
         <View style={{ flexDirection: 'row', alignItems: 'center', height: responsiveHeight(7),backgroundColor: Color.primary }}>
          <TouchableOpacity style={{ height: '100%', width: responsiveWidth(12), alignItems: 'center', justifyContent: 'center' }} onPress={() =>{
            if(IsSoundEnabled)
            clickSound();
            props.nav.navigation.goBack()
          } }>
            <Image source={back_blue} style={{ height: responsiveFontSize(3.2), width: responsiveFontSize(3.2), resizeMode: 'contain', tintColor: '#FFF' }} />
          </TouchableOpacity>

          {searchInputShow ? <Text style={{ fontSize: CustomFont.font16, fontWeight: 'bold', color: '#FFF', marginLeft: 10 }}>Country List</Text> :
            <TextInput style={{ height: responsiveHeight(5.5), borderBottomColor: '#e0e0e0', borderBottomWidth: 1, width: responsiveWidth(75), borderRadius: 5, fontSize: CustomFont.font14, padding: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0, marginBottom: 7, marginLeft: 10, color: '#FFF',backgroundColor:'RED' }}
              onBlur={() =>{
                setsearchInputShow(true);
                setcrossStatus(!crossStatus)
              }} value={searchTxt} onChangeText={(searchTxt) => { return SearchFilterFunction(searchTxt); }}
              ref={search} selectionColor={'#FFF'} />}

          {crossStatus ? <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1.6), right: 0 }} onPress={() => {
            setTimeout(() => {
              try {
                search.current.focus();
              } catch (error) {
              }
              
            }, 1000)
            setsearchInputShow(false);
                setcrossStatus(false)
          }}>
            <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={search_blue} />
          </TouchableOpacity> :
            <TouchableOpacity style={{ position: 'absolute', top: responsiveHeight(1), right: 0 }} onPress={() =>{
              if(searchTxt){
                setsearchTxt('');
                setdataArray(FullArray);
              }else{
                setsearchTxt('');
                setdataArray(FullArray);
                setsearchInputShow(true);
                setcrossStatus(true)
              }
            } }>
              <Image style={{ resizeMode: 'contain', height: responsiveWidth(6), width: responsiveWidth(6), marginLeft: responsiveWidth(2.1), marginRight: responsiveWidth(4), tintColor: '#FFF' }} source={close_white} />
            </TouchableOpacity>}

        </View>

        {/* <Toolbar color={Color.yellowBg} title={'Country List'} onBackPress={() =>{
           //playSound('click.mp3')
           props.nav.navigation.openDrawer();
        }} /> */}
        <View style={{ flex: 10, backgroundColor: Color.whiteBg}}>
         <FlatList
           //numColumns={3}
            style={{ marginRight: 2,marginTop:2 }}
            data={dataArray}
            renderItem={renderList}
            keyExtractor={(item, index) => index.toString()} />
{Platform.OS=='ios' && !Hichuba ? null : <BannerAd
                      unitId={Platform.OS == 'ios' ? 'ca-app-pub-5568037625500701/6163603030' : 'ca-app-pub-5568037625500701/7185792700'}
                      size={BannerAdSize.FULL_BANNER}
                    />}
        </View>
        
</View>
      </View>
    );

}
