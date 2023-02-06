import { normalize } from "./utils"


export enum FONTS {
    Rubik = 'Rubik',
}

export const FONT_WEIGHTS = {
    '300': 'Light',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'SemiBold',
    '700': 'Bold',
    '800': 'ExtraBold',
    '900': 'Black',
}

type WEIGHTS = keyof typeof FONT_WEIGHTS

export const font = (size: number, weight: WEIGHTS, family : FONTS = FONTS.Rubik) => {
    return `
        font-family: ${family}-${FONT_WEIGHTS[weight]};
        font-size: ${size}px;
    `
}
