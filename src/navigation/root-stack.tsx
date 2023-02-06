import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboarding/onboarding-screen'
import OnboardingStack from './onboarding-stack'
import OnboardingPaywall from '../screens/onboarding/onboarding-screen-paywall'
import TabStack from './tab-stack'


const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
      
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="TabStack" component={TabStack} />

        <Stack.Group screenOptions={{presentation : 'containedModal' }} >
          <Stack.Screen name="OnboardingPaywall" component={OnboardingPaywall} />
        </Stack.Group>

    </Stack.Navigator>
  )
}

export default RootStack