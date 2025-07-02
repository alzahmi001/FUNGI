import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import BudidayaScreen from './src/screens/BudidayaScreen';
import PerawatanScreen from './src/screens/PerawatanScreen';
import ProduksiScreen from './src/screens/ProduksiScreen';
import ToolsScreen from './src/screens/ToolsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Budidaya') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'Perawatan') {
              iconName = focused ? 'hand-left' : 'hand-left-outline';
            } else if (route.name === 'Produksi') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (route.name === 'Tools') {
              iconName = focused ? 'construct' : 'construct-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Dashboard' }}
        />
        <Tab.Screen 
          name="Budidaya" 
          component={BudidayaScreen} 
          options={{ title: 'Budidaya' }}
        />
        <Tab.Screen 
          name="Perawatan" 
          component={PerawatanScreen} 
          options={{ title: 'Perawatan' }}
        />
        <Tab.Screen 
          name="Produksi" 
          component={ProduksiScreen} 
          options={{ title: 'Produksi' }}
        />
        <Tab.Screen 
          name="Tools" 
          component={ToolsScreen} 
          options={{ title: 'Tools' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

