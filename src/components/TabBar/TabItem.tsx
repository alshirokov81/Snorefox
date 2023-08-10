import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabNavigationOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs';

import { useLocalization } from '../../localization';
import { COLORS, FONTS } from '../../constants';

type TabItemPropType = {
    route: BottomTabBarProps['state']['routes'][0],
    navigation: BottomTabBarProps['navigation'],
    options: BottomTabNavigationOptions,
    isActive: boolean,
    imageComponent?: Element,
    titleCode: string
}

export default ({route, navigation, options, isActive, imageComponent, titleCode}: TabItemPropType) => {
    const t = useLocalization();

    const onPress = () => {
        const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
        });

        if (!isActive && !event.defaultPrevented) {
        navigation.navigate(route.name);
        }
    };

    const onLongPress = () => {
        navigation.emit({
        type: 'tabLongPress',
        target: route.key,
        });
    };
    const { buttonContainer, title, titleActive, titleInActive } = styles;
    return (
        <TouchableOpacity
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={buttonContainer}
        >
            <>
                {imageComponent}
                <Text style={[title, isActive ? titleActive : titleInActive]}>{t(titleCode)}</Text>
            </>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 59,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: COLORS.GRAY_2,
        backgroundColor: COLORS.WHITE_1,
    },
    title: {
        fontFamily: FONTS.SF_COMPACT_MEDIUM,
        fontSize: 12,
        lineHeight: 14,
        alignSelf: 'center',
    },
    titleActive: {
        color: COLORS.BLACK_1,
    },
    titleInActive: {
        color: COLORS.GRAY_5,
    },
    cameraImage: {
        width: 32,
        height: 32,
    },
    alertsImage: {
        width: 32,
        height: 32,
    },
    settingsImage: {
        width: 25,
        height: 25,
    },
});
