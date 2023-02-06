
import React from 'react'
import Screen from '../../components/screen/screen'
import { Body, BottomContainer, CameraBorderContainer, Continue, DescriptionText, HeaderText, PaymentDetails, PaywallFeatureContainer, PaywallFeatureScroll, PaywallFeatureSpacer, PaywallFeatureText, PaywallFeatureTitle, PaywallIcon, PaywallIconContainer, PremiumDescriptionText, PremiumText, TermsAndConditions, TopContainer } from './onboarding-screen.styles'
import CameraBorder from '../../components/camera-border/camera-border';
import { useNavigation } from '@react-navigation/native';
import { COLORS, PLAN_OPTIONS } from '../../helper/constants';
import { Image, ScrollView, View } from 'react-native';

import { normalize } from '../../helper/utils';
import Options from '../../components/options/options';

const backgroundImage = require('../../assets/images/pay-plant.png')

const FEATURES = [
  {
    title : 'Unlimited',
    text : 'Plant Identify',
    icon : require('../../assets/icons/qr.png')
  },
  {
    title : 'Faster',
    text : 'Process',
    icon : require('../../assets/icons/speed.png')
  },
  {
    title : 'Detailed',
    text : 'Plant care',
    icon : require('../../assets/icons/herbal.png')
  },

]


const renderFeatures = () => FEATURES.map((feature, index) => (
  <PaywallFeatureContainer isFirst={index === 0} key={index}>
    <PaywallFeatureSpacer>
      <PaywallIconContainer >
        <PaywallIcon source={feature.icon}/>
      </PaywallIconContainer>

      <View>
        <PaywallFeatureTitle text={feature.title} />
        <PaywallFeatureText text={feature.text} />
      </View>

    </PaywallFeatureSpacer>
  </PaywallFeatureContainer>
))


const OnboardingPaywall = () => {

  const navigation = useNavigation<any>()


  return (
    <Screen source={backgroundImage} barStyle='light' >

      <Body style={{justifyContent : 'flex-end'}} >

        <CameraBorderContainer>
          <CameraBorder />
        </CameraBorderContainer>

        <PremiumText text='<v>PlantApp</v> Premium' />
        <PremiumDescriptionText text='Access All Features' />

        <PaywallFeatureScroll>
          {renderFeatures()}
        </PaywallFeatureScroll>

        <Options options={PLAN_OPTIONS} />

      </Body>

      <Continue onPress={() => navigation.replace('TabStack')} text='Try free for 3 days' />
      
      <BottomContainer>
        <PaymentDetails paywall text={`After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable`} />
        <TermsAndConditions paywall text="`Terms  •  Privacy  •  Restore" />
      </BottomContainer>
    </Screen>
  )
}

export default OnboardingPaywall