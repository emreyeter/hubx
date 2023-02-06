import React from 'react'
import { BadgeContainer, BadgeText, Gradient, OptionContainer, OptionShape, OptionText, OptionTextContainer, OptionTitle } from './options.styles'
import { interpolate, interpolateColor, interpolateColors, useAnimatedProps, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import { COLORS } from '../../helper/constants'

export interface OptionItemProps {
    title : string
    text: string
    onSelectedBadgeText? : string
    isSelected? : boolean
    onPress? : (index?: number) => void
    index? : number
}


const OptionItem = (props : OptionItemProps) => {

  const { title, text, onSelectedBadgeText, isSelected, onPress , index } = props

  const handlePress = () => {
     onPress?.(index)
  }

  const animation = useDerivedValue(() => {
    return withTiming(isSelected ? 1 : 0, { duration: 250 })
  });


  const shapeStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(animation.value, [0, 1], ['#ffffff26', COLORS.WHITE]),
      borderWidth: interpolate(animation.value, [0, 1], [0, 8]),
      borderColor: interpolateColor(animation.value, [0, 1], ['#ffffff26', COLORS.JUNGLE_GREEN]),
  }})
    
  const containerStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(animation.value, [0, 1], ['#FFFFFF0D', COLORS.JUNGLE_GREEN]),
      borderWidth: interpolate(animation.value, [0, 1], [0.5, 1.5]),
  }})
  
  const isBadgeVisible = isSelected ? (!!onSelectedBadgeText) : false

  const badgeAnimation = useDerivedValue(() => {
    return withTiming(isBadgeVisible ? 1 : 0, { duration: 250 })
  });
  
  const badgeStyle = useAnimatedStyle(() => {
    return {
      opacity: badgeAnimation.value
  }})


  return (
    <OptionContainer style={containerStyle as any} onPress={handlePress} >
        {
          isBadgeVisible && <Gradient/>
        }
        <BadgeContainer style={badgeStyle} >
          <BadgeText text={onSelectedBadgeText ?? ''} />
        </BadgeContainer>

        <OptionShape style={shapeStyle} />

        <OptionTextContainer>
          <OptionTitle text={title} />
          <OptionText text={text} />
        </OptionTextContainer>

    </OptionContainer>
  )
}

export default OptionItem