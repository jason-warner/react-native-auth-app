import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { View, Text, Image } from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;


export const Colors = {
    primary: "#FFF",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#cc0000",
    green: "#10B981",
    red: "#EF4444"
}

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

interface PageLogoProps {
    resizeMode: string,
    source: _SourceUri
}
export const PageLogo = styled.Image<PageLogoProps>`
    width: 250px;
    height: 250px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`