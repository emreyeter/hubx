import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../helper/constants";
import { normalize, shadow } from "../../helper/utils";


export const BORDER_WIDTH = normalize(5);
export const BORDER_RADIUS = 20;
export const SIZE = normalize(48);
export const CAMERA_BORDER_CONTAINER_SIZE = normalize(220);


export const Container = styled(View)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: -${CAMERA_BORDER_CONTAINER_SIZE}px;
    align-items: center;
    justify-content: center;
`

export const CameraBorderContainer = styled(View)`
    width: ${CAMERA_BORDER_CONTAINER_SIZE}px;
    height: ${CAMERA_BORDER_CONTAINER_SIZE}px;
    overflow: hidden;
    border-radius: ${BORDER_RADIUS}px;
`

export const GradientContainer = styled(LinearGradient).attrs({
    colors : ['rgba(255,255,255,0.4)', 'transparent'],
})`
    height: ${CAMERA_BORDER_CONTAINER_SIZE / 2}px;
    position: absolute;
    width: ${CAMERA_BORDER_CONTAINER_SIZE - BORDER_WIDTH * 2 }px;
    margin-left: ${BORDER_WIDTH}px;
`

export const LineContainer = styled(View)`
    height: 1px;
    width: ${CAMERA_BORDER_CONTAINER_SIZE- BORDER_WIDTH * 2}px;
    background-color: ${COLORS.WHITE};
    margin-left: ${BORDER_WIDTH}px;
    position: absolute;
`
export const ShapeContainer = styled(View)`
    height: ${SIZE}px;
    width:  ${SIZE}px;
    border-left-width: ${BORDER_WIDTH}px;
    border-top-width: ${BORDER_WIDTH}px;
    border-color: ${COLORS.WHITE};
    border-top-left-radius: ${BORDER_RADIUS}px;
    position: absolute;
    ${shadow()}
`