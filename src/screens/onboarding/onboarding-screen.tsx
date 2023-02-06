import {  Dimensions } from 'react-native'
import React from 'react'
import Screen from '../../components/screen/screen'
import { Body, BottomContainer, Continue, DescriptionText, HeaderText, TermsAndConditions, TopContainer } from './onboarding-screen.styles'
import CameraBorder from '../../components/camera-border/camera-border';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/images/Background.png')

const OnboardingScreen = () => {

  const navigation = useNavigation<any>()

  return (
    <Screen source={backgroundImage}  >

      <TopContainer>
        <HeaderText text='Welcome to <b>PlantApp</b>' />
        <DescriptionText text='Identify more than 3000+ plants and 88% accuracy.' />
      </TopContainer>

      <Body source={require('../../assets/images/plant-borderless.png')}>
        <CameraBorder/>
      </Body>

      <Continue onPress={() => navigation.replace('OnboardingStepper')} text='Get Started' />
      <BottomContainer>
        <TermsAndConditions text={`By tapping next, you are agreeing to PlantID\n<u>Terms of Use</u> & <u>Privacy Policy</u>.`} />
      </BottomContainer>
    </Screen>
  )
}

export default OnboardingScreen