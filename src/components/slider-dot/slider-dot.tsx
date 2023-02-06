import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './slider-dot.styles'
import { SharedValue } from 'react-native-reanimated'
import SliderDotItem from './slider-dot-item'


export interface SliderDotProps {
    translationX : SharedValue<number>
    numberOfDots : number
}

const SliderDot = (props : SliderDotProps) => {

  const {  numberOfDots } = props

  const Dots = new Array(numberOfDots).fill(0).map((_, index) => <SliderDotItem {...props} index={index} key={index}/> )

  return (
    <Container>
      {Dots}
    </Container>
  )
}

export default SliderDot