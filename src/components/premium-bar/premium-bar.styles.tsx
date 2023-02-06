import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import styled from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import Button from "../button/button";
import TranslatedText from "../translated-text/translated-text";

export const Container = styled(Button)`
    background-color: ${COLORS.ZEUS};
    border-radius: 12px;
    height: 64px;
    margin: ${SPACING.TWENTY_FOUR};
`

export const MaskedContainer = styled(MaskedView)`
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 12px;
    top: 12px;
`

export const MaskGradient = styled(LinearGradient).attrs({
    colors: [COLORS.PUTTY, COLORS.ANZAC],
    start : { x: 0, y: 0 },
    end : { x: 1, y: 0 },
})`
    flex: 1;
`

export const IconEmail = styled(MaterialCommunityIcons).attrs({
    name: "email",
    size: 32,
    color: COLORS.BLACK
})``

export const IconRight = styled(Ionicons).attrs({
    name: "chevron-forward",
    size: 24,
    color: COLORS.BLACK
})``

export const MaskElementContainer = styled(View)`
    flex-direction: row;
    background-color: transparent;
    flex: 1;
    align-items: center;
`
export const BodyContainer = styled(View)`
    margin-left: ${SPACING.SIXTEEN};
    flex: 1;
`

export const HeaderText = styled(TranslatedText)`
    ${font(16, '700')}
`
export const DescriptionText = styled(TranslatedText)`
    ${font(13, '400')}
`

export const IconEmailContainer = styled(View)`
`
export const BadgeContainer = styled(View)`
    position: absolute;
    left: 41px;
    top: 15px;
    background-color: ${COLORS.RED};
    border-radius: 50px;
    width: 15px;
    height: 15px;
    align-items: center;
    justify-content: center;
`
export const BadgeText = styled(TranslatedText)`
    ${font(10, '400')}
    color: ${COLORS.WHITE};
`