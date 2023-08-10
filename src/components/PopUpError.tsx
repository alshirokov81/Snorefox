import { useCallback } from 'react';
import { View, StyleSheet} from 'react-native';

import { AppButton } from './Buttons';
import { DescriptionText, TitleText } from './TextComponents';
import { DEFAULT_STYLE_NUMBERS, COLORS } from '../constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { closePairingModal } from '../features/pairing';

export const PopUpError = () => {
    const dispatch = useAppDispatch();
    const closeModal= useCallback(
        () => {
            dispatch(closePairingModal());
        },
        [dispatch]
    );
    //TODO create logic for analyzing errors and displaying relevant text
    return (
        <View style={styles.container}>
            <TitleText topOffset={16} textCode="errorPopUp_Title" />
            <DescriptionText textCode="errorPopUp_Description" />

            <AppButton
                onPress={closeModal}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="errorPopUp_ButtonClose"
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
