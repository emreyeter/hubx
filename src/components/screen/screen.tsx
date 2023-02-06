import {  StyleProp, ViewStyle, useWindowDimensions, LayoutChangeEvent, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'
import { BackgroundImage, Body, Container } from './screen.styles'
import { EdgeInsets, withSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar, StatusBarStyle } from 'expo-status-bar'

export interface ScreenProps {
  children?: React.ReactNode
  barStyle?: StatusBarStyle 
  source?: ImageSourcePropType 
  backgroundColor?: string
}

interface ScreenBaseProps {
  insets : EdgeInsets
}

type Props = ScreenProps & ScreenBaseProps

const Screen = (props : Props) => {

  const { children, insets, barStyle, source , backgroundColor} = props
  const _barStyle = barStyle || 'dark'

  const { height } = useWindowDimensions()
  const [contentHeight, setcontentHeight] = useState(0)


  const minHeight = height

  const contentContainerStyle : StyleProp<ViewStyle> = {
    paddingTop : insets.top,
    paddingBottom : insets.bottom,
    minHeight
  } 

  const handleContentLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    setcontentHeight(height)
  }

  const isScrollable = contentHeight > minHeight

  return (
    <>
    {
    source && <BackgroundImage source={source}  />
    }
    <Container  
    backgroundColor={backgroundColor}
    keyboardShouldPersistTaps='handled'
    keyboardDismissMode='interactive'
    scrollEnabled={isScrollable} 
    contentContainerStyle={contentContainerStyle} 
    insets={insets} >
      
      <StatusBar style={_barStyle}  />
      <Body onLayout={handleContentLayout}>
        {children}
      </Body>
    </Container>
    </>
  )
}

export default withSafeAreaInsets(Screen)
