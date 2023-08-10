import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const FONTS = {
    SF_COMPACT_REGULAR: 'SFCompactText-Regular',
    SF_COMPACT_MEDIUM: 'SFCompactText-Medium',
    SF_COMPACT_BOLD: 'SFCompactText-Bold',
    INTER_MEDIUM: 'Inter-Medium',
};

export enum COLORS {
    GRAY_1 = '#66514C',
    GRAY_2 = '#E5E5E5',
    GRAY_3 = '#F0F0F0',
    GRAY_4 = '#FAFAFA',
    GRAY_5 = '#9F938F',
    BLACK_1 = '#40261F',
    ORANGE_1 = '#FF6A42',
    WHITE_1 = '#FFFFFF',
    LILAC_1 = '#EEE6EE',
    YELLOW_BROWN_1 = 'rgba(246, 166, 9, 0.25)',
    GREEN_1 = '#E4F7EA',
    GREEN_2 = '#006916',
    TRANSPARENT = 'transparent',
};

export const DEFAULT_STYLE_NUMBERS = {
    horizontalContainerPadding: 16
}

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;
