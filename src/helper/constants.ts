import { OptionItemProps } from "../components/options/option-item"


export enum COLORS {
    RACING_GREEN = '#13231B',
    RACING_GREEN_DARKER = '#101E17',
    JUNGLE_GREEN = '#28AF6E',
    CORDUROY = '#597165',
    WHITE = 'white',
    BLACK = 'black',
    WHITE_OPAQUE = '#ffffff14',
    GRAY = '#979798',
    BORDER_GRAY = '#E5E5E5',
    ZEUS = '#24201A',
    PUTTY = '#E5C990',
    ANZAC = '#E4B046',
    RED = '#E82C13'
}

export enum SPACING {
    FOUR = '4px',
    SIX = '6px',
    EIGHT = '8px',
    TWELVE = '12px',
    FOURTEEN = '12px',
    SIXTEEN = '16px',
    TWENTY = '20px',
    TWENTY_FOUR = '24px',
    THIRTY_TWO = '32px',
    FORTY = '40px',
    FORTY_EIGHT = '48px',
    FIFTY_SIX = '56px',
    SIXTY_FOUR = '64px',
    SEVENTY_TWO = '72px',
}

export const NORMALIZE_STYLES = [
    'fontSize',
    'letterSpacing',
    'marginLeft',
    'marginRight',
    'marginHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingHorizontal',
]

export const PLAN_OPTIONS: OptionItemProps[] = [
    {title : '1 Month', text : '$2.99/month, auto renewable', onSelectedBadgeText : undefined },
    {title : '1 Year', text : 'First 3 days free, then $529,99/year', onSelectedBadgeText : 'Save 50%' },
]