import React from 'react';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HotUpdatesPage from '../../screens/HotUpdatesPage';
import NewsDetailPage from '../../screens/NewsDetailPage';

const Tab = createBottomTabNavigator();

import {Platform, View} from 'react-native';
import HeartBottomIcon from '../../assets/icons/heartBottomIcon';
import AccountIcon from '../../assets/icons/accountIcon';
import HomeStackNavigator from './HomeStackNavigation';
// import BtomHouseIcon from '../../assets/icons/btomhouseicon';
import BtomHouseIcon from '../../assets/icons/btomhouseicon';

export interface BottomTabNavigatorProps {
  route?: RouteProp<ParamListBase, string>;
  navigation?: any;
}

const HomeBottomNavigation: React.FC<BottomTabNavigatorProps> = ({
  navigation,
  route,
}) => {
  //   <NavigationContainer>
  //     <Tab.Navigator
  //       initialRouteName="Home"
  //       screenOptions={({route})=>({
  //           tabBarActiveTintColor: '#0122AE',
  //           tabBarInactiveTintColor: '#828282',
  //       })}>
  //       <Tab.Screen
  //         name="Homestack"
  //         component={HomeStack}

  //         options={{
  //           headerShown:false,
  //           tabBarLabel: 'Home',
  //           tabBarIcon: ({ color, size }) => (
  //             // <MaterialCommunityIcons
  //             //   name="home"
  //             //   color={color}
  //             //   size={size}
  //             // />
  //             <HomeSvg/>
  //           ),
  //         }}  />
  //       <Tab.Screen
  //         name="History"
  //         component={History}
  //         options={{
  //           // tabBarLabel: 'History',
  //           tabBarIcon: ({ color, size }) => (
  //             // <MaterialCommunityIcons
  //             //   name="history"
  //             //   color={color}
  //             //   size={size}
  //             // />
  //             <TransactionSvg/>
  //           ),
  //           headerTitle:"History",
  //           headerRight: ()=> (
  //             <View style={{marginLeft: 10}}>
  //               <FontAwesome name='bell-o' color={'#DADADA'} size={22}/>

  //             </View>
  //           ),
  //           headerLeft: ()=> (
  //             <View style={{marginRight: 10}}>
  //               <Ionicons name='arrow-back' color={'#6E7191'} size={22}/>

  //             </View>
  //           ),
  //           headerTitleAlign:'center',
  //           headerShown:true,
  //           headerTintColor: '#000000',
  //           headerStyle:{
  //            elevation:25

  //           }

  //         }} />
  //          <Tab.Screen
  //         name="Bills"
  //         component={Bills}
  //         options={{
  //           tabBarLabel: 'Bills',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialCommunityIcons
  //               name="wallet-outline"
  //               color={color}
  //               size={size}
  //             />
  //           ),

  //         }} />
  //         <Tab.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{
  //           tabBarLabel: 'Profile',
  //           tabBarIcon: ({ color, size }) => (
  //           //   <MaterialCommunityIcons
  //           //   name="wallet-outline"
  //           //   color={color}
  //           //   size={size}
  //           // />
  //           <AccountIcon pathProps={{ fill:color}}/>
  //           )
  //           ,
  //           headerLeft: ()=> (
  //             <View style={{marginRight: 10}}>
  //               <Ionicons name='arrow-back' color={'#6E7191'} size={22}/>

  //             </View>
  //           ),
  //           headerTitleAlign:'center',
  //           headerShown:true,
  //           headerTintColor: '#000000',
  //           headerStyle:{
  //            elevation:25

  //           }

  //         }} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // )

  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#2E0505',
        tabBarLabelStyle: {
          fontSize: 12,
          letterSpacing: 0.75,
          fontWeight: '500',
          paddingBottom: Platform.OS === 'android' ? 4 : 0,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({focused, color, size}) => {
          let ccountIcon = focused ? (
            <AccountIcon GProps={{fill: '#ff666e'}} />
          ) : (
            <AccountIcon GProps={{fill: "#A6A6A6"}} />
          );
          let eartBottomIcon = focused ? (
            <HeartBottomIcon pathProps={{fill: '#ff666e'}} />
          ) : (
            <HeartBottomIcon />
          );
          let tomHouseIcon = focused ? (
            <BtomHouseIcon PathProps={{fill: '#ff666e'}} />
          ) : (
            <BtomHouseIcon PathProps={{fill: "#A6A6A6"}} />
          );

          if (route.name === 'Home') {
            return tomHouseIcon;
          }
          if (route.name === 'History') {
            return eartBottomIcon;
          }

          if (route.name === 'Profile') {
            return ccountIcon;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="History" component={HotUpdatesPage} />
      <Tab.Screen name="Profile" component={NewsDetailPage} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default HomeBottomNavigation;
