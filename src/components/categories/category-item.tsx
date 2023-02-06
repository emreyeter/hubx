import { View, Text } from 'react-native'
import React from 'react'
import { CategoryItem as CategoryItemType } from '../../types/category-type'
import { ItemContainer, ItemText } from './category.styles'


interface CategoryItemProps {
    item : CategoryItemType
    index : number
}

const CategoryItem = (props : CategoryItemProps) => {

    const isOdd = props.index % 2 === 0

    console.log(props.item)

  return (
    <ItemContainer source={{uri : props.item.image.url }} isOdd={isOdd} >
      <ItemText text={props.item.title} />
    </ItemContainer>
  )
}

export default CategoryItem