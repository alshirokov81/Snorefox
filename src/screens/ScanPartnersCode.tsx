import React, { useCallback } from 'react';
import {  BarCodeReadEvent } from 'react-native-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SCREEN_NAMES_ONBOARDING } from '../containers/AppNavigated';
import { DescriptionText, TitleText } from '../components/TextComponents';
import { AppButton } from '../components/Buttons';
import { CenteredItem } from '../components/CenteredItem';
import ScreenContainer from '../components/ScreenContainer';
import { QrCodeScanner } from '../components/QrCodeScanner';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { scannedPairingCode } from '../features/pairing';
import { OnboardingStackParamList } from '../types';
import { COLORS } from '../constants';

type ProfileProps = NativeStackScreenProps<OnboardingStackParamList, SCREEN_NAMES_ONBOARDING.OnboardingScanScreen>;

export default ({ navigation }: ProfileProps) => {
    const dispatch = useAppDispatch();
    const qRCodeReaded = useCallback(
        (e: BarCodeReadEvent) => {
            dispatch(scannedPairingCode(e));
        },
        [dispatch]
    );
    const goBack = useCallback(
        () => {navigation.goBack();},
        [navigation]
    );

    return (
        <ScreenContainer>
            <TitleText
                topOffset={16}
                textCode="onboardingScanScreen_Title"
            />

            <DescriptionText
                topOffset={16}
                bottomOffset={16}
                textCode="onboardingScanScreen_Description"
            />

            <CenteredItem>
                <QrCodeScanner onRead={qRCodeReaded}/>
            </CenteredItem>

            <AppButton
                onPress={goBack}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="onboardingScanScreen_ButtonCancel"
                bottomOffset={30}
            />
        </ScreenContainer>
    );
}
