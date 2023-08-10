import { useCallback } from 'react'
import QRCode from 'react-native-qrcode-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useAppSelector } from '../hooks/useAppSelector';
import { SCREEN_NAMES_ONBOARDING } from '../containers/AppNavigated';
import { DescriptionText, TitleText } from '../components/TextComponents';
import ScreenContainer from '../components/ScreenContainer';
import { AppButton } from '../components/Buttons';
import { CenteredItem } from '../components/CenteredItem';
import { BorderedSquare } from '../components/BorderedSquare';
import { OnboardingStackParamList } from '../types';
import { COLORS } from '../constants';


type ProfileProps = NativeStackScreenProps<OnboardingStackParamList, SCREEN_NAMES_ONBOARDING.OnboardingPairScreen>;

export default ({navigation}: ProfileProps) => {
    const { idForScanning } = useAppSelector(state => state.pairing);
    const toScanScreen = useCallback(
        () => {navigation.navigate(SCREEN_NAMES_ONBOARDING.OnboardingScanScreen);},
        [navigation]
    );
    const goBack = useCallback(
        () => {navigation.goBack();},
        [navigation]
    );

    return (
        <ScreenContainer>
            <TitleText
                topOffset={16}
                textCode="onboardingPairScreen_Title"
            />
            <DescriptionText
                topOffset={16}
                textCode="onboardingPairScreen_Description"
                textAlign="center"
                color={COLORS.GRAY_1}
            />
            <CenteredItem>
                <BorderedSquare>
                    {idForScanning ? <QRCode value={idForScanning}/> : null}
                </BorderedSquare>
            </CenteredItem>

            <AppButton
                onPress={toScanScreen}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.ORANGE_1}
                textColor={COLORS.WHITE_1}
                textValue="onboardingPairScreen_ButtonGoToScan"
                bottomOffset={26}
                topOffset={23}
            />

            <AppButton
                onPress={goBack}
                borderColor={COLORS.GRAY_2}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.BLACK_1}
                textValue="onboardingPairScreen_ButtonCancel"
                bottomOffset={30}
            />
        </ScreenContainer>
    );
}
