import {  Dimensions, ScrollView, View } from 'react-native'
import React, {  createRef, useRef } from 'react'
import Screen from '../../components/screen/screen'
import { Body, BottomContainer, Continue,  HeaderStepperText, Shape, SliderBodyOne, TopContainer } from './onboarding-screen.styles'
import CameraBorder from '../../components/camera-border/camera-border';
import { useNavigation } from '@react-navigation/native';
import Animated, {  scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import SliderDot from '../../components/slider-dot/slider-dot';

const {width} = Dimensions.get('window');


const STEPS = [
  {
    stepperText : 'Take a photo to <b>identify</b> the plant!', 
    image : require('../../assets/images/phone.png'),
    body :  <Body source={require('../../assets/images/phone.png')}>
              <CameraBorder/>
            </Body>
  },
  {
    stepperText : 'Get plant <b>care guides</b>',
    image : require('../../assets/images/phone2.png'),
    body : <SliderBodyOne source={require('../../assets/images/phone2.png')} />
  }
]

const OnboardingStepper = () => {

  const navigation = useNavigation<any>()
  const scrollRef = createRef<ScrollView>();
  const translationX = useSharedValue(0)


  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  const StepRender = STEPS.map((step, index) => {
    return (
      <View key={index} style={{width}}>
        <TopContainer>
              <HeaderStepperText text={step.stepperText} />
              <Shape index={index} />
        </TopContainer>
        {step.body}
      </View>
    )
  })

  const handlePress = () => {
    if(translationX.value === width) 
    {
      return navigation.replace('OnboardingPaywall')
    }
    scrollRef.current?.scrollTo({x : width, y :0, animated : true})
  }

  return (
    <Screen>


      <Animated.ScrollView 
      ref={scrollRef as any} 
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal={true} 
      pagingEnabled={true} 
      scrollEnabled={true} 
      showsHorizontalScrollIndicator={false}>
        {StepRender}
      </Animated.ScrollView>

      <Continue text='Continue' onPress={handlePress} />

      <BottomContainer>
          {translationX && <SliderDot numberOfDots={STEPS.length + 1} translationX={translationX} /> }
      </BottomContainer>
    </Screen>
  )
}

export default OnboardingStepper