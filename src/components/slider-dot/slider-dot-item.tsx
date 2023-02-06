import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SliderDotProps } from './slider-dot'
import Animated, { interpolate,  useAnimatedStyle } from 'react-native-reanimated'
import { DotItemContainer } from './slider-dot.styles'

const {width} = Dimensions.get('window')

interface SliderDotItemProps  extends SliderDotProps{
    index : number
}

const SIZE = 6
const INCREASED_SIZE = 10

const SliderDotItem = (props : SliderDotItemProps) => {
    const { index, translationX } = props


    const style = useAnimatedStyle(() => {

        const inputRange = [width * (index - 1) , width * index, width * (index + 1)]

        const scale = interpolate(translationX.value , inputRange, [1, INCREASED_SIZE / SIZE, 1], 'clamp')
        const opacity = interpolate(translationX.value , inputRange, [0.25, 1, 0.25], 'clamp')
        return {
            transform: [{scale}],
            opacity
        }
    })

  return (
    <DotItemContainer index={index} style={style}/>
  )
}

export default SliderDotItem