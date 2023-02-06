import { View, Text } from 'react-native'
import React from 'react'
import { Container, IconContainer, InputContainer } from './input.styles'


interface InputProps {
    placeholder : string
    icon : string
}


const Input = (props : InputProps) => {


    const { placeholder, icon } = props

  return (
    <Container>

      {icon && <IconContainer name={icon} />}
      <InputContainer placeholder={placeholder} />
    </Container>
  )
}

export default Input