import React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './Components/CustomDrawer';

import Membros from './Screens/Membros';
import Podcasts from './Screens/Podcasts';
import Concursos from './Screens/Concursos'
import Sparks from './Screens/Sparks';
import Loja from './Screens/Loja'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: '#ffc107',
        drawerActiveTintColor: '#ffc107',
        drawerActiveBackgroundColor: '#2d2d2d',
        drawerInactiveBackgroundColor: '#111',
        drawerStyle: {
          backgroundColor: '#111',
        },
      }} 
      drawerContent={props => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen 
        name="Episodios" 
        component={Podcasts}
        options={{
          drawerIcon: ({color, size}) => (<FontAwesome name="podcast" size={size} color={color} style={{marginRight: '-5%',}} />),
        }}
        />
        <Drawer.Screen 
        name="Membros" 
        component={Membros}
        options={{
          drawerIcon: ({color, size}) => (<Ionicons name="people-circle-sharp" size={size} color={color} style={{marginRight: '-5%',}} />),
        }}
        />
        <Drawer.Screen 
        name="Concursos" 
        component={Concursos} 
        options={{
          drawerIcon: ({color, size}) => (<MaterialIcons name="confirmation-number" size={size} color={color} style={{marginRight: '-5%',}} />),
        }}
        />
        <Drawer.Screen 
        name="Loja" 
        component={Loja} 
        options={{
          drawerIcon: ({color, size}) => (<MaterialCommunityIcons name="storefront" size={size} color={color} style={{marginRight: '-5%',}}/>),
        }}
        />
        <Drawer.Screen 
        name="Sparks" 
        component={Sparks} 
        options={{
          drawerIcon: ({color, size}) => (<MaterialCommunityIcons name="currency-usd-circle" size={size} color={color} style={{marginRight: '-5%',}} />),
        }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

