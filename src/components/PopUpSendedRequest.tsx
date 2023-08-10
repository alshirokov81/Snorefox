import { useCallback } from 'react';
import { View, StyleSheet} from 'react-native';

import { useAppSelector } from '../hooks/useAppSelector';
import { AppButton } from '../components/Buttons';
import { CenteredItem } from '../components/CenteredItem';
import { DescriptionText, TitleText, BoldText, StatusDecorationText } from '../components/TextComponents';
import { DeviceWaiting } from '../svg';
import { DEFAULT_STYLE_NUMBERS, COLORS } from '../constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { closePairingModal } from '../features/pairing';

export const PopUpSendedRequest = () => {
    const { connectDevName } = useAppSelector(state => state.pairing);
    const dispatch = useAppDispatch();
    const closeModal= useCallback(
        () => {
            dispatch(closePairingModal());
        },
        [dispatch]
    );
    return (
        <View style={styles.container}>
            <TitleText topOffset={16} textCode="pairingRequestSendedPopUp_Title" />
            <DescriptionText textCode="pairingRequestSendedPopUp_Description" />

            <CenteredItem>
                <DeviceWaiting />
            </CenteredItem>

            <StatusDecorationText
                bottomOffset={16}
                textCode="pairingRequestSendedPopUp_StatusText"
                backgroundColor={COLORS.YELLOW_BROWN_1}
            />

            <BoldText
                textParams={[connectDevName || '']}
                textCode="pairingRequestSendedPopUp_Status"
            />

            <AppButton
                onPress={closeModal}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="pairingRequestSendedPopUp_ButtonCancel"
                topOffset={23}
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
