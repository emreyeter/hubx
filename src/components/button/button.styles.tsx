import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled, { css } from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import Box from "../box/box";
import TranslatedText from "../translated-text/translated-text";
import { BUTTON_TYPES } from "./button";


const BaseButton = css`
    border-radius: ${SPACING.TWELVE};
    padding: ${SPACING.SIXTEEN};
    justify-content: center;
    align-items: center;
`


const PrimaryButton = css`
    ${BaseButton}
    background-color: ${COLORS.JUNGLE_GREEN};
`


export const Container = styled(Box).attrs({
    component: Animated.createAnimatedComponent(TouchableOpacity),
    activeOpacity: 0.7,
})<{type: BUTTON_TYPES}>`
    ${(props) => {
        switch (props.type) {
            case BUTTON_TYPES.PRIMARY:
                return PrimaryButton
            case BUTTON_TYPES.NONE:
                return ``
        }
    }}

`;

export const ButtonLabel = styled(TranslatedText)<{type: BUTTON_TYPES}>`
    ${font(15, '700')}
    color: ${COLORS.WHITE};
`