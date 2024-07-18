import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screen components
import Backup from './screens/Backup';
import Categories from './screens/Categories';
import Contact from './screens/Contact';
import Customize from './screens/Customize';
import GetPremium from './screens/GetPremium';
import Home from './screens/Home';
import RateApp from './screens/RateApp';
import Settings from './screens/settings';
import Timer from './screens/Timer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: 250,
          },
          headerStyle:{
            backgroundColor:'#f4511e',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight: 'bold'
            drawerActiveTintcolor: 'blue',
            drawerLabelStyle:{
              color: '#111'
            }
          }
        }}
      >
      <Drawer.Screen 
      name="Home"
      options={{
        drawerLabel: "Home",
        title: "Home",
        drawerIcon: () => (
          <SimplelineIcons name="home" size={20} color="#808080"/>
        )
      }},
      componet={Home}
      />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Backup" component={Backup} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Customize" component={Customize} />
        <Drawer.Screen name="GetPremium" component={GetPremium} />
        <Drawer.Screen name="RateApp" component={RateApp} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Timer" component={Timer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
