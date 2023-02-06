import { ViewProps, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { normalizeStyles } from '../../helper/utils'
import Animated from 'react-native-reanimated'

interface BoxBaseProps {
    component?: React.ElementType<any>
}

type BoxProps = (ViewProps | TouchableOpacityProps) & BoxBaseProps

const Box = (props : BoxProps) => {

    const { style } = props

    const normalizedStyle = normalizeStyles(style)
    const Component = props.component || Animated.View
    const Item = React.createElement(Component, {...props, style: [style, normalizedStyle]})

  return Item
}

export default Box