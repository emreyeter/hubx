import {  StyleProp,  TouchableOpacityProps,  ViewStyle } from 'react-native'
import React from 'react'
import { ButtonLabel, Container } from './button.styles'

export enum BUTTON_TYPES {
    PRIMARY = 'primary',
    NONE = 'none',
}

interface ButtonProps extends TouchableOpacityProps {
    type?: BUTTON_TYPES,
    text? : string,
    children?: React.ReactNode,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>
}

const Button = (props : ButtonProps) => {

    const { type,text,children, onPress, style } = props

    const setType = children ? BUTTON_TYPES.NONE : (type ?? BUTTON_TYPES.PRIMARY)

    const _children = children ?? <ButtonLabel type={setType} text={text ?? ''} />

  return (
    <Container style={style} onPress={onPress} type={setType}>
        {_children}
    </Container>
  )
}

export default Button