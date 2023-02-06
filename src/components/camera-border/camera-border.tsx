import { StyleProp,  ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import { CameraBorderContainer, CAMERA_BORDER_CONTAINER_SIZE, Container, GradientContainer, LineContainer, ShapeContainer } from './camera-border.styles'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

const CameraBorder = () => {

    const camera: StyleProp<ViewStyle>[] = [
        {transform: [{rotate: '0deg'}], left : 0, top : 0},
        {transform: [{rotate: '90deg'}], right : 0, top : 0},
        {transform: [{rotate: '180deg'}], right : 0, bottom : 0},
        {transform: [{rotate: '270deg'}], left : 0, bottom : 0},

    ] 

    const cameraAnimation = useSharedValue(CAMERA_BORDER_CONTAINER_SIZE)

    useEffect(() => {
        cameraAnimation.value = withRepeat(withSequence(
            withTiming(-CAMERA_BORDER_CONTAINER_SIZE/2, {duration : 3000, easing : Easing.linear}),
            withTiming(CAMERA_BORDER_CONTAINER_SIZE, {duration : 0}),
            withDelay(350, withTiming(CAMERA_BORDER_CONTAINER_SIZE, {duration : 0})),
        ), -1, true)
    }, [])


    const cameraAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY : cameraAnimation.value}]
        }
    })


  return (
    <Container >
        <CameraBorderContainer>

            <Animated.View style={[{position : 'absolute', }, cameraAnimationStyle]} >
              <GradientContainer/>
              <LineContainer />
            </Animated.View>

            {camera.map((style, index) => <ShapeContainer key={index} style={style} />)}
        </CameraBorderContainer>

    </Container>
  )
}

export default CameraBorder