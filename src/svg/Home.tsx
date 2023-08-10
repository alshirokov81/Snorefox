import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { svgProps } from '../types';

export const svgComponent: React.FC<svgProps> = ({width = 24, height = 24, fillColor = '#9F938F'}) =>
    <View
    style={{width, height}}
    >
        <SvgXml
            xml={`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10M21 12L12 3L3 12" stroke="${fillColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>             
            `}
            width="100%"
            height="100%"
        />
    </View>;

export default svgComponent;
