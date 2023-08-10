import { useCallback } from 'react';
import { View, StyleSheet} from 'react-native';

import { useAppSelector } from '../hooks/useAppSelector';
import { AppButton } from '../components/Buttons';
import { CenteredItem } from '../components/CenteredItem';
import { DescriptionText, TitleText, BoldText, StatusDecorationText } from '../components/TextComponents';
import { DeviceFound } from '../svg';
import { DEFAULT_STYLE_NUMBERS, COLORS } from '../constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { sendPairingRequestToServer, closePairingModal } from '../features/pairing';

export const PopUpReceivedRequest = () => {
    const { connectDevName } = useAppSelector(state => state.pairing);
    const dispatch = useAppDispatch();
    const sendRequest = useCallback(
        () => {
            dispatch(sendPairingRequestToServer());
        },
        [dispatch]
    );
    const closeModal= useCallback(
        () => {
            dispatch(closePairingModal());
        },
        [dispatch]
    );
    return (
        <View style={styles.container}>
            <TitleText topOffset={16} textCode="pairingRequestReceivedPopUp_Title" />
            <DescriptionText textCode="pairingRequestReceivedPopUp_Description" />

            <CenteredItem>
                <DeviceFound />
            </CenteredItem>

            <StatusDecorationText
                bottomOffset={16}
                textCode="pairingRequestReceivedPopUp_StatusText"
                backgroundColor={COLORS.LILAC_1}
            />

            <BoldText
                textParams={[connectDevName || '']}
                textCode="pairingRequestReceivedPopUp_Question"
            />

            <AppButton
                onPress={sendRequest}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.ORANGE_1}
                textColor={COLORS.WHITE_1}
                textValue="pairingRequestReceivedPopUp_ButtonPair"
                bottomOffset={26}
                topOffset={23}
            />

            <AppButton
                onPress={closeModal}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="pairingRequestReceivedPopUp_ButtonCancel"
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
