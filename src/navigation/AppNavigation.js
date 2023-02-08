import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import BottomNavigation from './BottomNavigation';
import Onboarding from '../screens/Onboarding/Onboarding';
const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Onboarding'
    screenOptions={{
       headerShown:false
    }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={BottomNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation
