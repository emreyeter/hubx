import {  StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { Container } from './translated-text.styles';
import HTMLText from '../html-text/html-text';
import { normalizeStyles } from '../../helper/utils';

interface TranslatedTextProps {
    text: string
    style? : StyleProp<TextStyle>
}

const TranslatedText = (props : TranslatedTextProps) => {

  const { text, style } = props


  const htmlText = HTMLText(text);

  const normalizedStyle = normalizeStyles(style)


  return (
    <Container style={[style,normalizedStyle]} >
        {htmlText}
    </Container>
  )
}


export default TranslatedText
