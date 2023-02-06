
import React from 'react'
import Screen from '../../components/screen/screen'
import { DayStatusText, GreetText, MaskBackground, TopContainer } from './home.styles'
import Input from '../../components/input/input'
import PremiumBar from '../../components/premium-bar/premium-bar'
import QuestionHome from '../../components/question-home/question-home'
import Categories from '../../components/categories/categories'

const Home = () => {


  

  
  return (
    <Screen backgroundColor='#f8fafa'>
        <TopContainer>
            <MaskBackground/>
            <GreetText text='Hi, plant lover!'  />
            <DayStatusText text='Good Afternoon! ⛅' />
            <Input icon='search' placeholder='Search for plants' />
        </TopContainer>

       <PremiumBar/>

       <QuestionHome />

       <Categories/>

       

    </Screen>
  )
}

export default Home