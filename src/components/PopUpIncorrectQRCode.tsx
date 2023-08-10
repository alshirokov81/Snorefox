import { useCallback } from 'react';
import { View, StyleSheet} from 'react-native';

import { AppButton } from './Buttons';
import { DescriptionText, TitleText } from './TextComponents';
import { DEFAULT_STYLE_NUMBERS, COLORS } from '../constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { closePairingModal } from '../features/pairing';

export const PopUpIncorrectQRCode= () => {
    const dispatch = useAppDispatch();
    const closeModal= useCallback(
        () => {
            dispatch(closePairingModal());
        },
        [dispatch]
    );
    return (
        <View style={styles.container}>
            <TitleText topOffset={16} textCode="incorrectQRCodePopUp_Title" />
            <DescriptionText textCode="incorrectQRCodePopUp_Description" />

            <AppButton
                onPress={closeModal}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="incorrectQRCodePopUp_ButtonClose"
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
