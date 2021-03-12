import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Videos from '../Screens/Videos';
import Sermon from '../Screens/Sermon';
import Audio from '../Screens/Audio';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons';
import AccountScreen from '../Screens/AccountScreen'
import { withNavigation} from 'react-navigation';
import { useNavigation} from '@react-navigation/native';

const Tabs = createMaterialTopTabNavigator(
  {
  
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Home</Text>
          </View>
        ),
      },
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Videos </Text>
          </View>
        ),
      },
    },
    Audio: {
      screen: Audio,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Audio </Text>
          </View>
        ),
      },
    },
    Sermon: {
      screen: Sermon,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Text style={{color: tintColor}}>Sermon </Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: '#1A1A1A',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#AA001C',
        elevation: 10,
      },
      activeTintColor: '#AA001C',
      inactiveTintColor: 'white',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions :{
      title:
      <View
      style ={{
        display: 'flex',
        flexDirection: 'row',
      }}
      >
        <Image style={{height: 55, width: 75, marginBottom:0}}
        source= {require('../assets/logo.png')}></Image>
        <View style={{marginLeft:165,marginTop:10}}>
         <TouchableOpacity>
         <MaterialCommunityIcons
              name="magnify"
              size={32}
              color=  "#fff"
              style={{ marginLeft: 10 }}
            />
            </TouchableOpacity>
         </View>
         <View style={{marginLeft:30,marginTop:10}}>
         <TouchableOpacity 
         onPress={()=>navigation.navigate('AccountScreen')}>
         <MaterialCommunityIcons
              name="account"
              size={32}
              color=  "#fff"
              style={{ marginLeft: 10 }}
            />
            </TouchableOpacity>
         </View>
      </View> ,
    
      headerStyle: {
        backgroundColor: '#1A1A1A',
      },
      headerTitleStyle: {
        margin: 2,
        fontSize:50,
        color: '#fff',
      },
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
