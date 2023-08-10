import { useCallback } from 'react';
import { View, StyleSheet} from 'react-native';

import { closeOnboardingSetTab } from '../features/appData';
import { AppButton } from '../components/Buttons';
import { CenteredItem } from '../components/CenteredItem';
import { DescriptionText, TitleText, BoldText, StatusDecorationText } from '../components/TextComponents';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { DevicePairingSucceeded } from '../svg';
import { DEFAULT_STYLE_NUMBERS, COLORS } from '../constants';
import { BOTTOM_TABS } from '../components/TabBar';


export const PopUpAcceptedRequest = () => {
    const dispatch = useAppDispatch();
    const goToHome = useCallback(
        () => {
            dispatch(closeOnboardingSetTab(BOTTOM_TABS.Home));
        },
        [dispatch]
    );
    const goToSettings = useCallback(
        () => {
            dispatch(closeOnboardingSetTab(BOTTOM_TABS.Settings));
        },
        [dispatch]
    );
    return (
        <View style={styles.container}>
            <TitleText topOffset={16} textCode="pairingRequestAcceptedPopUp_Title" />
            <DescriptionText textCode="pairingRequestAcceptedPopUp_Description" />

            <CenteredItem>
                <DevicePairingSucceeded />
            </CenteredItem>

            <StatusDecorationText
                bottomOffset={16}
                textCode="pairingRequestAcceptedPopUp_StatusText"
                backgroundColor={COLORS.GREEN_1}
                color={COLORS.GREEN_2}
            />

            <BoldText textCode="pairingRequestAcceptedPopUp_Status"/>

            <AppButton
                onPress={goToHome}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.ORANGE_1}
                textColor={COLORS.WHITE_1}
                textValue="pairingRequestAcceptedPopUp_GoToMeasurement"
                bottomOffset={26}
                topOffset={23}
            />

            <AppButton
                onPress={goToSettings}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="pairingRequestAcceptedPopUp_GoToSettings"
                bottomOffset={30}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: DEFAULT_STYLE_NUMBERS.horizontalContainerPadding,
    }
});
