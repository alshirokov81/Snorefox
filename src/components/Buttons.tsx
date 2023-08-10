import { ReactElement, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { ButtonText, ButtonDecorationText } from '../components/TextComponents';
import { COLORS } from '../constants';

export const AppButton = ({
    onPress,
    borderColor = COLORS.ORANGE_1,
    buttonColor = COLORS.ORANGE_1,
    textColor = COLORS.ORANGE_1,
    textValue,
    leftImage,
    rightImage,
    rightTopText,

    bottomOffset = 0,
    topOffset = 0,
}: {
    onPress: () => void,
    borderColor?: COLORS,
    buttonColor?: COLORS,
    textColor?: COLORS,
    textValue: string,
    leftImage?: ReactElement,
    rightImage?: ReactElement,
    rightTopText?: string,

    bottomOffset?: number,
    topOffset?: number,
}) => {
    const alignVal =  leftImage || rightImage ? 'flex-start' : 'center';
    const calculatedStyle = useMemo(
        () => StyleSheet.create({
            buttonStyle: {
                borderColor: borderColor,
                backgroundColor: buttonColor,
                marginBottom: bottomOffset,
                marginTop: topOffset,
                justifyContent: alignVal,
            },
            textContainerStyle: {
                alignItems: alignVal,
                justifyContent: 'center',
                marginLeft: leftImage ? 15 : 0,
            }
        }),
        [
            borderColor,
            buttonColor,
            textColor,
            rightImage,
            rightTopText,
            leftImage,
            rightImage,
        ]
    );

    return (
        <TouchableOpacity
            style={[styles.button, calculatedStyle.buttonStyle]}
            onPress={onPress}
        >
            <>
                {!!leftImage && leftImage}
                <View style={calculatedStyle.textContainerStyle}>
                    <ButtonText
                        color={textColor}
                        textCode={textValue}
                    />
                </View>
                {!!rightImage && <View style={styles.rightImage}>{rightImage}</View>}
                {rightTopText &&
                    <ButtonDecorationText
                        textCode={rightTopText}
                        color={COLORS.WHITE_1}
                    />
                }
            </>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 56,
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10.5,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
    },
    buttonReightTopText: {
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'blue',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        color: 'white',
    },
    rightImage: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});
