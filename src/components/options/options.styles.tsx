import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import Button from "../button/button";
import TranslatedText from "../translated-text/translated-text";

const START_COLOR = '#28af6e2b';
const END_COLOR = '#28af6e00';

export const Container = styled(View)`
    padding-horizontal: ${SPACING.TWENTY_FOUR};
    margin-top: ${SPACING.TWENTY_FOUR};
    margin-bottom: ${SPACING.TWELVE};
`

export const OptionContainer = styled(Button)`
    padding: ${SPACING.TWELVE} ${SPACING.SIXTEEN};
    border-radius: ${SPACING.FOURTEEN};
    background-color: ${COLORS.WHITE_OPAQUE};
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    margin-bottom: ${SPACING.SIXTEEN};
`

export const OptionShape = styled(Animated.View)`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin-right: ${SPACING.TWELVE};
   
`

export const OptionTextContainer = styled(View)`
    flex: 1;
`

export const OptionTitle = styled(TranslatedText)`
    color: ${COLORS.WHITE};
    ${font(16, '500')}
`

export const OptionText = styled(TranslatedText)`
    color: ${COLORS.WHITE};
    ${font(12, '300')}
    opacity: 0.7;
`


export const Gradient = styled(LinearGradient).attrs({
    colors: [START_COLOR, END_COLOR],
    locations: [0, 0.6851],
    start: { x: 1, y: 1 },
    end: { x: 0, y: 0 }
})`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
`

export const BadgeContainer = styled(Animated.View)`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${COLORS.JUNGLE_GREEN};
    border-bottom-left-radius: ${SPACING.TWENTY};
`

export const BadgeText = styled(TranslatedText)`
    color: ${COLORS.WHITE};
    ${font(12, '500')}
    padding-vertical: ${SPACING.EIGHT};
    padding-left: ${SPACING.TWELVE};
    padding-right: ${SPACING.EIGHT};
`