import { ScrollView, View, Image } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const Container = styled(ScrollView)<{insets: EdgeInsets; backgroundColor?: string}>`
    flex: 1;
    ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`

export const Body = styled(View)`
    flex: 1;
`;


export const BackgroundImage =  styled(Image).attrs({
    resizeMode : 'stretch'
    })
`
    position : absolute;
    top : 0;
    left : 0;
    bottom : 0;
    right : 0;
    height : 101%;
    width : 100%;
`