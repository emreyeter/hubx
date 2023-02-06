import { Dimensions, PixelRatio, StyleProp, TextProps, ViewProps } from "react-native"
import { css } from "styled-components"
import { COLORS, NORMALIZE_STYLES } from "./constants"

const IPHONE_XS_WIDTH = 375
const { width } = Dimensions.get('window')

export const normalize = (size: number, round: boolean = true) => {
    const newSize = size * (width / IPHONE_XS_WIDTH)
    const newSizeRounded = Math.round(PixelRatio.roundToNearestPixel(newSize))
    
    return round ?  newSizeRounded : newSize
}

export const normalizeStyles = (styles: any) => {

    let newStyle: any = {}

    styles?.forEach((style: any) => {
        Object.keys(style).forEach((key: any) => {
            if (NORMALIZE_STYLES.includes(key)) {
                if(key === 'letterSpacing'){
                    newStyle[key] = parseFloat(normalize(style[key], false).toFixed(2))
                }else {
                    newStyle[key] = normalize(style[key])
                }
            }
        })
    })

    return [newStyle]
}

export const shadow = () => {
    return css`
        shadow-color: ${COLORS.BLACK};
        shadow-offset: 0px 4px;
        shadow-opacity: 0.30;
        shadow-radius: 4.65px;
        elevation: 8;

    `
}