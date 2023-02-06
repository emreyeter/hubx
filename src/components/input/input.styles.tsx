import { TextInput, View } from "react-native";
import styled from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { font } from "../../helper/fonts";
import { Ionicons } from '@expo/vector-icons';


export const Container = styled(View)`
    flex-direction: row;    
    border-radius: ${SPACING.TWELVE};
    background-color: rgba(255, 255, 255, 0.88);
    align-items: center;
`

export const InputContainer = styled(TextInput).attrs({
    placeholderTextColor: COLORS.GRAY
    })
    `
    flex: 1;
    padding: ${SPACING.FOURTEEN};
    ${font(16, '400')}
    color: ${COLORS.BLACK};
   
`

export const IconContainer = styled(Ionicons).attrs({
    size: 24,
    color: COLORS.GRAY
    })
    `
    margin-left: ${SPACING.SIXTEEN};
`
