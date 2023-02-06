import { View, Text } from 'react-native'
import React from 'react'
import { Question } from '../../types/question-type'
import { QuestionContainer, QuestionItemText } from './question-home.styles'

interface QuestionHomeItemProps {
  item: Question
}

const QuestionHomeItem = (props : QuestionHomeItemProps) => {
  return (
    <QuestionContainer source={{uri : props.item.image_uri}} >
      <QuestionItemText text={props.item.title} />
    </QuestionContainer>
  )
}

export default QuestionHomeItem