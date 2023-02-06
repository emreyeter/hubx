import { View, Text } from 'react-native'
import React, { useState } from 'react'
import OptionItem, { OptionItemProps } from './option-item'
import { Container } from './options.styles'

export interface OptionsProps {
    options: OptionItemProps[]
}

const Options = (props : OptionsProps) => {

  const { options } = props

  const [selectedIndex, setselectedIndex] = useState(0)

  const handlePress = (index?: number) => {
        setselectedIndex(index!)
  }

  const OptionItems = options.map((option, index) => <OptionItem 
                                                    {...option} 
                                                    isSelected={selectedIndex === index}  
                                                    onPress={handlePress} 
                                                    index={index}  
                                                    key={index}/>
                                                    )

  return (
    <Container>
        {OptionItems}
    </Container>
  )
}

export default Options