import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { svgProps } from '../types';

export const svgComponent: React.FC<svgProps> = ({width = 24, height = 24, fillColor = '#FFFFFF'}) =>
    <View
    style={{width, height}}
    >
        <SvgXml
            xml={`
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_815)">
                        <path d="M9.58398 12.4585C9.99554 13.0087 10.5206 13.4639 11.1236 13.7934C11.7266 14.1228 12.3933 14.3187 13.0787 14.3678C13.764 14.4169 14.4519 14.318 15.0957 14.0778C15.7395 13.8377 16.3241 13.4619 16.8098 12.976L19.6848 10.101C20.5577 9.19725 21.0406 7.98686 21.0297 6.7305C21.0188 5.47414 20.5149 4.27233 19.6265 3.38392C18.738 2.4955 17.5362 1.99157 16.2799 1.98065C15.0235 1.96973 13.8131 2.45271 12.9094 3.32555L11.2611 4.9643" stroke=${fillColor} stroke-width="3.39454" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.4166 10.5427C13.0051 9.99245 12.48 9.53719 11.877 9.20775C11.274 8.87832 10.6073 8.68242 9.92191 8.63334C9.23656 8.58425 8.54868 8.68314 7.90491 8.92328C7.26114 9.16343 6.67655 9.53921 6.19078 10.0252L3.31578 12.9002C2.44294 13.8039 1.95997 15.0143 1.97088 16.2706C1.9818 17.527 2.48574 18.7288 3.37415 19.6172C4.26256 20.5056 5.46437 21.0096 6.72073 21.0205C7.97709 21.0314 9.18748 20.5484 10.0912 19.6756L11.7299 18.0368" stroke=${fillColor} stroke-width="3.39454" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_815">
                        <rect width="23" height="23" fill=${fillColor}/>
                        </clipPath>
                    </defs>
                </svg>               
            `}
            width="100%"
            height="100%"
        />
    </View>;

export default svgComponent;
