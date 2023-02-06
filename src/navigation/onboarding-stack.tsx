import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboarding/onboarding-screen'
import OnboardingStepper from '../screens/onboarding/onboarding-screen-stepper'
import OnboardingPaywall from '../screens/onboarding/onboarding-screen-paywall'


const Stack = createNativeStackNavigator()

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="OnboardingStepper" component={OnboardingStepper} />
    </Stack.Navigator>
  )
}

export default OnboardingStack