import { View, Image } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components";
import { COLORS } from "../../helper/constants";
import { font } from "../../helper/fonts";
import TranslatedText from "../translated-text/translated-text";
import { Entypo } from '@expo/vector-icons';
import Button from "../button/button";

export const Container = styled(View)<{insets : EdgeInsets}>`
    padding-bottom : ${(props) => props.insets.bottom}px;
    height : ${(props) => props.insets.top + props.insets.bottom}px;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    border-top-width : 0.5px;
    border-top-color : ${COLORS.BORDER_GRAY};
    background-color : rgba(255, 255, 255, 0.92);
`

export const Label = styled(TranslatedText)<{isFocused : boolean}>`
    color : ${(props) => props.isFocused ? COLORS.JUNGLE_GREEN : COLORS.GRAY};
    ${font(10, '400')}
    text-align : center;
`

export const Icon = styled(Entypo).attrs( (props: any) => ({
    name : 'home',
    size : 20,
    color : props.isFocused ? COLORS.JUNGLE_GREEN : COLORS.GRAY,
}))`
    align-self : center;
    margin-bottom : 5px;
`

export const ScanButton = styled(Button)`
    height : 64px;
    width : 64px;
    border-radius : 32px;
    border-color : #FFFFFF3D;
    border-width : 4px;
    background-color : ${COLORS.JUNGLE_GREEN};
    transform : translateY(-16px);
    align-items : center;
    justify-content : center;
`

export const QrIcon = styled(Image).attrs({
    source : require('../../assets/icons/qr.png'),
    resizeMode : 'contain',
})`
    height : 24px;
    width : 24px;
`