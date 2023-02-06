import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './category.styles'
import { useGetCategoriesQuery } from '../../api/category'
import CategoryItem from './category-item'

const Categories = () => {

    const { data } = useGetCategoriesQuery()

  return (
    <Container>
      {
        data?.data?.map((item, index) => <CategoryItem index={index} item={item} key={index} />)
      }
    </Container>
  )
}

export default Categories