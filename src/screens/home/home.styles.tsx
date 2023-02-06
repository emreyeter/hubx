import { Dimensions, Image, View } from "react-native";
import styled from "styled-components";
import TranslatedText from "../../components/translated-text/translated-text";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
const {width} = Dimensions.get('window')

export const TopContainer = styled(View)`
    padding-horizontal : 24px;
    padding-top: ${SPACING.FOUR};
    padding-bottom: ${SPACING.FOURTEEN};
`

export const GreetText = styled(TranslatedText)`
    ${font(16, '400')}
    color: ${COLORS.RACING_GREEN};
    letter-spacing: 0.07px;
`

export const DayStatusText = styled(TranslatedText)`
    ${font(24, '500')}
    color: ${COLORS.RACING_GREEN};
    margin-top: ${SPACING.SIX};
    margin-bottom: ${SPACING.FOURTEEN};
    letter-spacing: 0.35px;
`

export const MaskBackground = styled(Image).attrs({
    resizeMode: 'contain',
    source: require('../../assets/images/mask-home.png')
})`
    position: absolute;
    width: ${width}px;
    bottom: -20px;
`