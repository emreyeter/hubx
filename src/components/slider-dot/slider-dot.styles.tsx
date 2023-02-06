import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components";
import { COLORS } from "../../helper/constants";

export const Container = styled(View)`
    flex-direction: row;
    justify-content: center;
`

export const DotItemContainer = styled(Animated.View)<{index: number}>`
    height: 6px;
    width: 6px;
    border-radius: 3px;
    background-color: ${COLORS.RACING_GREEN};
    margin-left: ${(props) => props.index === 0 ? 0 : 8}px;
`