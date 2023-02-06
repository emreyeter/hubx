import { Dimensions, ImageBackground } from "react-native";
import styled from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import Box from "../box/box";
import TranslatedText from "../translated-text/translated-text";

const { width } = Dimensions.get('window');

export const Container = styled(Box)`
    flex-direction: row;
    flex-wrap: wrap;
    margin-horizontal: ${SPACING.TWENTY_FOUR};
    margin-top: ${SPACING.TWENTY_FOUR};
`

export const ItemContainer = styled(ImageBackground).attrs({
    resizeMode: 'stretch'
})
<{isOdd : boolean}>`
    width: ${(width - (24 * 2)) / 2  - 10}px;
    margin-bottom: 10px;
    height: 152px;
    background-color: #F4F6F6;
    border-radius: ${SPACING.TWELVE};
    border-width: 0.5px;
    border-color: rgba(41, 187, 137, 0.18);
    margin-right: ${props => props.isOdd ? 10 : 0}px;
    overflow: hidden;
`

export const ItemText = styled(TranslatedText)`
    ${font(16,'500')}
    color: ${COLORS.RACING_GREEN};
    margin: ${SPACING.SIXTEEN};
    margin-right: ${SPACING.FORTY_EIGHT};
    letter-spacing: -0.32px;
`