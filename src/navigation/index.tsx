import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './root-stack'

export default () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
