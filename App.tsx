import React from 'react';
import type {Node} from 'react';
//com.rks.preschoolbengali
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform,} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeDrawer from './src/home';
import Parichiti from './src/home/Parichiti';
import Drawing from './src/home/Drawing';
import PrivacyPolicy from './src/home/PrivacyPolicy';
import SrutiPathan from './src/albhabets/SrutiPathan';
import Settings from './src/home/Settings';
import RhymesList from './src/rhymes/RhymesList';
import RhymesListDetails from './src/rhymes/RhymesListDetails';
import AlphabetsList from './src/albhabets/AlphabetsList';
import Rearragne from './src/albhabets/Rearragne';
import AlphabetsDetails from './src/albhabets/AlphabetsDetails';
import Tracing from './src/albhabets/Tracing';
import Typing from './src/albhabets/Typing';
import Guess from './src/albhabets/Guess';
import FullNumber from './src/numbers/FullNumber';
import SmallBig from './src/numbers/SmallBig';
import Number from './src/numbers/Number';
import Order from './src/numbers/Order';

import Table from './src/table/Table';
import TableList from './src/table/TableList';
import FullTable from './src/table/FullTable';
import QuizeOnTable from './src/table/QuizeOnTable';
import TestOnTable from './src/table/TestOnTable';
import TableCreate from './src/table/TableCreate';
import SuccessMessage from './src/table/SuccessMessage';
import CommonMessage from './src/table/CommonMessage';

import AddSubMulDivChooser from './src/numbers/AddSubMulDivChooser';
import AscendingDescending from './src/numbers/AscendingDescending';
import TouchAndMissing from './src/game/TouchAndMissing';
import Compare from './src/game/Compare';
import PictureMath from './src/game/PictureMath';


import BaloonGame from './src/game/BaloonGame';
import Spelling from './src/game/Spelling';
import MaxMin from './src/game/MaxMin';
import MemoryGame from './src/game/MemoryGame';
import MatchingGame from './src/game/MatchingGame';
import MatchingGameChoose from './src/game/MatchingGameChoose';
import MemoryGameChooser from './src/game/MemoryGameChooser';
import MachiMaraKhelaGameOver from './src/others/MachiMaraKhelaGameOver';
import Images4 from './src/test/Images4';
import Words4 from './src/test/Words4';
import WriteImgName from './src/test/WriteImgName';
import Words4Country from './src/test/Words4Country';

import GkList from './src/others/GkList';
import QuestionAnswer from './src/others/QuestionAnswer';
import NationalThings from './src/others/NationalThings';
import MonthDay from './src/others/MonthDay';
import MachiMaraKhela from './src/others/MachiMaraKhela';
import BodyPartsDetails from './src/others/BodyPartsDetails';
import Clock from './src/others/Clock';

import Math from './src/math/Math';
import MathChoose from './src/math/MathChoose';

import Country from './src/country';
import CountryDetails from './src/country/CountryDetails';
import ContentmentCountryList from './src/country/ContentmentCountryList';
import MenuChooserInCountry from './src/country/MenuChooserInCountry';
 import ReadmoreWebview from './src/country/ReadmoreWebview';
// import Game from './src/country/Game';
// import GameSubCat from './src/country/GameSubCat';
import FactOfCountry from './src/country/FactOfCountry';
import TableHome from './src/table';
import HabitDetails from './src/others/HabitDetails';
import ImportantThings from './src/others/ImportantThings';
import ImportantThingsDetals from './src/others/ImportantThingsDetals';


import CustomSidebarMenu from './src/drawerContainer/DrawerContainer';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
    // drawerContentOptions={{
    //   activeTintColor: '#e91e63',
    //   itemStyle: {marginVertical: 5},
    //   header: null
    // }}
    screenOptions={{headerShown: false,drawerStyle: {
      width:  responsiveWidth(60),
    },}}
    // Here we are setting our custom sidebar menu 
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen name="HomeDrawer" component={HomeDrawer} />
  </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
       headerShown: false,

  }}>
  
        <Stack.Screen name="HomeDrawer" component={MyDrawer}  options={{ headerShown: false }}/>
        <Stack.Screen name="Parichiti" component={Parichiti}/>
         <Stack.Screen name="BodyPartsDetails" component={BodyPartsDetails} />
        <Stack.Screen name="Drawing" component={Drawing} />
        <Stack.Screen name="RhymesList" component={RhymesList} />
        <Stack.Screen name="RhymesListDetails" component={RhymesListDetails} />
        <Stack.Screen name="AlphabetsList" component={AlphabetsList} />
        <Stack.Screen name="AlphabetsDetails" component={AlphabetsDetails} />
        <Stack.Screen name="Tracing" component={Tracing} />
        <Stack.Screen name="Typing" component={Typing} />
        <Stack.Screen name="Guess" component={Guess} />
        <Stack.Screen name="NationalThings" component={NationalThings} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="MonthDay" component={MonthDay} />
        <Stack.Screen name="Math" component={Math} />
        <Stack.Screen name="MathChoose" component={MathChoose} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Settings" component={Settings} />
        {/* <Stack.Screen name="GameChooser" component={GameChooser} /> */}
        <Stack.Screen name="MachiMaraKhela" component={MachiMaraKhela} />
        <Stack.Screen name="FullNumber" component={FullNumber} />
        <Stack.Screen name="SmallBig" component={SmallBig} />
        <Stack.Screen name="GkList" component={GkList} />
        <Stack.Screen name="QuestionAnswer" component={QuestionAnswer} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="ContentmentCountryList" component={ContentmentCountryList} />
        <Stack.Screen name="FactOfCountry" component={FactOfCountry} />
        <Stack.Screen name="TableHome" component={TableHome} />
       
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="TableList" component={TableList} />
        <Stack.Screen name="FullTable" component={FullTable} />
        <Stack.Screen name="QuizeOnTable" component={QuizeOnTable} />
        <Stack.Screen name="TableCreate" component={TableCreate} />
        <Stack.Screen name="TestOnTable" component={TestOnTable} />
        <Stack.Screen name="Clock" component={Clock} />
        <Stack.Screen name="BaloonGame" component={BaloonGame} />
        <Stack.Screen name="Spelling" component={Spelling} />
        <Stack.Screen name="MaxMin" component={MaxMin} />
        <Stack.Screen name="MemoryGame" component={MemoryGame} />
        <Stack.Screen name="MatchingGame" component={MatchingGame} />
        <Stack.Screen name="MatchingGameChoose" component={MatchingGameChoose} />
        <Stack.Screen name="MemoryGameChooser" component={MemoryGameChooser} />
        <Stack.Screen name="SuccessMessage" component={SuccessMessage} />
        <Stack.Screen name="CommonMessage" component={CommonMessage} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="AddSubMulDivChooser" component={AddSubMulDivChooser} />
        <Stack.Screen name="AscendingDescending" component={AscendingDescending} />
        <Stack.Screen name="TouchAndMissing" component={TouchAndMissing} />
        <Stack.Screen name="Compare" component={Compare} />
        <Stack.Screen name="PictureMath" component={PictureMath} />
        <Stack.Screen name="MachiMaraKhelaGameOver" component={MachiMaraKhelaGameOver} />
        <Stack.Screen name="SrutiPathan" component={SrutiPathan} />
        <Stack.Screen name="Images4" component={Images4} />
        <Stack.Screen name="Words4" component={Words4} />
        <Stack.Screen name="WriteImgName" component={WriteImgName} />
        <Stack.Screen name="Rearragne" component={Rearragne} />
        <Stack.Screen name="MenuChooserInCountry" component={MenuChooserInCountry} />
        <Stack.Screen name="Words4Country" component={Words4Country} />
        <Stack.Screen name="HabitDetails" component={HabitDetails} />
        <Stack.Screen name="ImportantThings" component={ImportantThings} />
        <Stack.Screen name="ImportantThingsDetals" component={ImportantThingsDetals} />
        <Stack.Screen name="ReadmoreWebview" component={ReadmoreWebview} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;