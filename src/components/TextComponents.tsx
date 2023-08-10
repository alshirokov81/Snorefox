import { Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../constants';

import { useLocalization } from '../localization';

export enum TEXT_TYPES {
    titleText = 'TITLE_TEXT',
    titleTextPopup = 'TITLE_TEXT_POPUP',
    descriptionText = 'DESCRIPTION_TEXT',
    buttonText = 'BUTTON_TEXT',
    buttonDecorationText = 'BUTTON_DECORATION_TEXT',
    statusDecorationText = 'STATUS_DECORATION_TEXT',
    boldText = 'BOLD_TEXT'
}

interface outerTextProps {
    color?: COLORS,
    backgroundColor?: COLORS,
    topOffset?: number,
    bottomOffset?: number,
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined,
    textParams?: string[] | undefined,
    textCode: string,
}



interface appTextProps extends outerTextProps {
    textType?: TEXT_TYPES,
}

export const AppText = ({
    color,
    backgroundColor,
    topOffset,
    bottomOffset,
    textAlign,
    textParams,
    textCode,
    textType = TEXT_TYPES.descriptionText,
}: appTextProps) => {
    const t = useLocalization();
    const stylesObj: any = {};
    if (color !== undefined) stylesObj['color'] = color;
    if (topOffset  !== undefined) stylesObj['marginTop'] = topOffset;
    if (bottomOffset  !== undefined) stylesObj['marginBottom'] = bottomOffset;
    if (textAlign  !== undefined) stylesObj['textAlign'] = textAlign;
    if (backgroundColor  !== undefined) stylesObj['backgroundColor'] = backgroundColor;

    return (
        <Text 
            style={[
                styles[textType],
                stylesObj,
            ]}>
            {t(textCode, textParams)}
        </Text>
    )
};

export const DescriptionText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.descriptionText} {...props} />)
};
export const ButtonText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.buttonText} {...props} />)
};
export const TitleText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.titleText} {...props} />)
};
export const TitleTextPopup = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.titleTextPopup} {...props} />)
};
export const BoldText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.boldText} {...props} />)
};
export const ButtonDecorationText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.buttonDecorationText} backgroundColor={COLORS.ORANGE_1} {...props} />)
};
export const StatusDecorationText = (props: outerTextProps) => {
    return (<AppText textType={TEXT_TYPES.statusDecorationText} {...props} />)
};

const styles = StyleSheet.create({
    [TEXT_TYPES.descriptionText]: {
        fontFamily: FONTS.SF_COMPACT_REGULAR,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
        color: COLORS.GRAY_1,
        textAlign: 'center',
    },
    [TEXT_TYPES.buttonText]: {
        color: COLORS.GRAY_1,
        fontFamily: FONTS.SF_COMPACT_MEDIUM,
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
    },
    [TEXT_TYPES.buttonDecorationText]: {
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: COLORS.ORANGE_1,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,

        fontFamily: FONTS.INTER_MEDIUM,
        fontSize: 12,
        lineHeight: 20,
        textAlign: 'center',
        color: COLORS.WHITE_1,
    },
    [TEXT_TYPES.titleText]: {
        fontFamily: FONTS.SF_COMPACT_MEDIUM,
        fontSize: 24,
        lineHeight: 24,
        color: COLORS.BLACK_1,
        marginTop: 24,
        alignItems: 'center',
        textAlign: 'center',
    },
    [TEXT_TYPES.titleTextPopup]: {
        fontFamily: FONTS.SF_COMPACT_MEDIUM,
        fontSize: 16,
        lineHeight: 23,
        color: COLORS.BLACK_1,
        marginBottom: 26,
        alignItems: 'center',
        textAlign: 'center',
    },
    [TEXT_TYPES.boldText]: {
        fontFamily: FONTS.SF_COMPACT_BOLD,
        fontSize: 16,
        lineHeight: 23,
        color: COLORS.BLACK_1,
        marginBottom: 16,
        alignItems: 'center',
        textAlign: 'center',
    },
    [TEXT_TYPES.statusDecorationText]: {
        fontFamily: FONTS.SF_COMPACT_MEDIUM,
        fontSize: 12,
        lineHeight: 24,
        textTransform: 'uppercase',
        color: COLORS.BLACK_1,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        paddingHorizontal: 15,
    }
});
