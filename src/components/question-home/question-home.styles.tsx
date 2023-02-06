import { ScrollView, View, ImageBackground } from "react-native";
import styled, { css } from "styled-components";
import { COLORS, SPACING } from "../../helper/constants";
import { normalize } from "../../helper/utils";
import SkeletonLoader from "expo-skeleton-loader";
import TranslatedText from "../translated-text/translated-text";
import { font } from "../../helper/fonts";


export const Container = styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: normalize(24),
    },
})
`
flex-grow: 0;
`

export const QuestionContainerCss = css`
    width: ${normalize(240)}px;
    height: 164px;
    border-radius: ${SPACING.TWELVE};
    margin-right: ${normalize(10)}px;
    overflow: hidden;
    justify-content: flex-end;

`

export const QuestionContainer = styled(ImageBackground)`
    ${QuestionContainerCss}
`;

export const SkeletonContainer = styled(SkeletonLoader.Item) `
    ${QuestionContainerCss}
`

export const QuestionHeaderText = styled(TranslatedText)`
    ${font(15, '500')}
    color: ${COLORS.RACING_GREEN};
    margin-left: ${normalize(24)}px;
    margin-bottom: ${SPACING.SIXTEEN};
`

export const QuestionItemText = styled(TranslatedText)`
    ${font(15, '500')}
    color: ${COLORS.WHITE};
    margin: ${SPACING.FOURTEEN};
    height: 40px;
`