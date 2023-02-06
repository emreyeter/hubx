import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/home'
import BottomTab from '../components/bottom-tab/bottom-tab'

const Stack = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} tabBar={props => <BottomTab {...props} /> } >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Diagnose" component={Home} />
      <Stack.Screen name="Scan" component={Home} />
      <Stack.Screen name="MyGarden" options={{tabBarLabel : 'My Garden'}} component={Home} />
      <Stack.Screen name="Profile" component={Home} />
    </Stack.Navigator>
  )
}

export default TabStack