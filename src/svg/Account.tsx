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
            <path d="M4 18C4 15.7909 5.79086 14 8 14H16C18.2091 14 20 15.7909 20 18V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V18Z" stroke="${fillColor}" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="12" cy="7" r="3" stroke="${fillColor}" stroke-width="2"/>
        </svg>               
      `}
      width="100%"
      height="100%"
    />
  </View>;

export default svgComponent; 
