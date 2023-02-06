
import React from 'react'
import { BadgeContainer, BadgeText, BodyContainer, Container, DescriptionText, HeaderText, IconEmail, IconEmailContainer, IconRight, MaskedContainer, MaskElementContainer, MaskGradient } from './premium-bar.styles'

const MaskedElement = () => <MaskElementContainer>
                                <IconEmailContainer>
                                    <IconEmail/>
                                </IconEmailContainer>
                                <BodyContainer>
                                    <HeaderText text='FREE Premium Available' />
                                    <DescriptionText text='Tap to upgrade your account!' />
                                </BodyContainer>
                                <IconRight />
                            </MaskElementContainer>

const PremiumBar = () => {
  return (
    <Container>
        <MaskedContainer maskElement={<MaskedElement />}>
          <MaskGradient />
        </MaskedContainer>

        <BadgeContainer>
            <BadgeText text="1" />
        </BadgeContainer>
    </Container>
  )
}

export default PremiumBar