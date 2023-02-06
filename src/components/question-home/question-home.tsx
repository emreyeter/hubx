import { View, Text } from 'react-native'
import React from 'react'
import { useGetQuestionsQuery } from '../../api/question'
import { Container, QuestionHeaderText } from './question-home.styles'
import QuestionHomeItem from './question-home-item'
import QuestionHomeItemSkeleton from './question-home-item-skeleton'

const QuestionHome = () => {

    const { data, error, isLoading } = useGetQuestionsQuery()

    const Skeleton = new Array(5).fill(null).map((_, index) => <QuestionHomeItemSkeleton key={index}/>)

    console.log(data)

  return (
    <>
    <QuestionHeaderText text='Get Started'  />
    <Container>
      {
        isLoading && Skeleton
      }
      {
        data?.map((item, index) => <QuestionHomeItem item={item}  key={index} />)
      }
    </Container>
    </>
    
  )
}

export default QuestionHome