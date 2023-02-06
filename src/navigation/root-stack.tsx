import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingStack from './onboarding-stack'
import OnboardingPaywall from '../screens/onboarding/onboarding-screen-paywall'
import TabStack from './tab-stack'
import {  STORAGE_GET_DATA_STATUS, STORAGE_KEYS } from '../helper/storage'
import useStorage from '../hooks/useStorage'


const Stack = createNativeStackNavigator()

const RootStack = () => {

  const [status, equal] = useStorage(STORAGE_KEYS.IS_ONBOARDING_DONE,'true', 'false')

  
  if(status === STORAGE_GET_DATA_STATUS.LOADING ) return null
  

  return (
    <Stack.Navigator screenOptions={{headerShown : false}} >
      
        { !equal && 
          <>
            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
            <Stack.Group screenOptions={{presentation : 'containedModal' }} >
              <Stack.Screen name="OnboardingPaywall" component={OnboardingPaywall} />
            </Stack.Group>
          </>
        }
       
        <Stack.Screen name="TabStack" component={TabStack} />

    </Stack.Navigator>
  )
}

export default RootStack