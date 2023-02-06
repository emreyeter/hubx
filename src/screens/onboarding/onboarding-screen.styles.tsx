import { ImageBackground, Image, View, ScrollView, Dimensions } from "react-native";
import styled from "styled-components";
import Box from "../../components/box/box";
import Button from "../../components/button/button";
import TranslatedText from "../../components/translated-text/translated-text";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import { normalize } from "../../helper/utils";

const { width } = Dimensions.get('window');

export const PremiumText = styled(TranslatedText)`
    ${font(24, '300')}
    color: ${COLORS.WHITE};
    margin-left: ${SPACING.TWENTY_FOUR};
    `
    
export const PremiumDescriptionText = styled(TranslatedText)`
    ${font(17, '300')}
    color: ${COLORS.WHITE};
    opacity: 0.7;
    margin-left: ${SPACING.TWENTY_FOUR};
    margin-bottom: ${SPACING.TWENTY};
    `

export const HeaderText = styled(TranslatedText)`
    ${font(28, '400')}
    color: ${COLORS.RACING_GREEN};
    letter-spacing: 0.07px;
`

export const DescriptionText = styled(TranslatedText)`
    ${font(16, '400')}
    color: ${COLORS.RACING_GREEN};
    margin-top: ${SPACING.EIGHT};
     letter-spacing: 0.07px;
    opacity: 0.7;
`

export const HeaderStepperText = styled(TranslatedText)`
    ${font(28, '500')}
    color: ${COLORS.RACING_GREEN};
`
export const TopContainer = styled(Box)`
    margin: ${SPACING.TWELVE} ${SPACING.FORTY_EIGHT} ${SPACING.TWENTY_FOUR} ${SPACING.TWENTY_FOUR};
`

export const Body = styled(ImageBackground).attrs({
    resizeMode: 'stretch',
    
})`
    flex: 1;
`

export const Continue = styled(Button)`
    margin-horizontal: ${SPACING.TWENTY_FOUR};
    z-index: 1
`

export const TermsAndConditions = styled(TranslatedText)<{paywall? : boolean}>`
    ${font(11, '400')}
    color: ${COLORS.CORDUROY};
    opacity: 0.7;
    letter-spacing: 0.07px;
    text-align: center;
    line-height: 15px;
    margin-horizontal: ${SPACING.TWENTY_FOUR};
    ${props => props.paywall && `
        color: ${COLORS.WHITE};
        opacity: 0.5;
    `}
`

export const PaymentDetails = styled(TermsAndConditions)`
    ${font(9, '300')}
    margin-bottom: ${SPACING.EIGHT};
`

export const BottomContainer = styled(Box)`
    height: ${normalize(55)}px;
    padding-bottom: ${SPACING.EIGHT};
    justify-content: flex-end;
`

export const SliderBodyOne = styled(Body)`
    transform: translateY(${normalize(70)}px) scale(1.2) translateX(${normalize(10)}px); ;
`

export const Shape = styled(Image).attrs({
        source: require('../../assets/images/shape.png'),
        resizeMode: 'cover',
    })<{index? : number}>`
    position: absolute;
    top: 35px;
    height: 12px;
    width: ${props => normalize(props.index === 0 ?  124 : 135)}px;
    right: ${props => normalize(props.index === 0 ?  12 : 55)}px;
    z-index: -1;
`

export const PaywallFeatureContainer = styled(View)<{isFirst: boolean}>`
    width: ${normalize(156)}px;
    height: 130px;
    background-color: ${COLORS.WHITE_OPAQUE};
    border-radius: ${SPACING.FOURTEEN};
    padding: ${SPACING.SIXTEEN};
    margin-left: ${props => props.isFirst ? 0 : SPACING.EIGHT};

`

export const PaywallFeatureSpacer = styled(View)`
    justify-content: space-between;
    flex: 1;
`

export const PaywallIconContainer = styled(View)`
    height: 36px;
    width: 36px;
    border-radius: ${SPACING.EIGHT}px;
    background-color: rgba(0, 0, 0, 0.24);
    align-items: center;
    justify-content: center;
`
export const PaywallIcon = styled(Image)`
    height: 18px;
    width: 18px;
`

export const PaywallFeatureText = styled(TranslatedText)`
    ${font(13, '400')}
    color: ${COLORS.WHITE};
    letter-spacing: -0.08px;
    opacity: 0.7;
`

export const PaywallFeatureTitle = styled(TranslatedText)`
    ${font(20, '500')}
    color: ${COLORS.WHITE};
    letter-spacing: 0.38px;
    margin-bottom: ${SPACING.FOUR};
`

export const PaywallFeatureScroll = styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: 24
    }
})`
    flex-grow: 0;
`

export const CameraBorderContainer = styled(View)`
    position: absolute;
    top: ${width * 0.6 }px;
    align-items: center;
    right: 0;
    left: 0;
    transform: scale(0.8);
`
