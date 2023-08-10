import { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SCREEN_NAMES_HOME_TAB } from '../containers/AppNavigated';
import { DescriptionText } from '../components/TextComponents';
import { AppButton } from '../components/Buttons';
import ScreenContainer from '../components/ScreenContainer';
import { HomeStackParamList } from '../types';
import { Planner, Chain, MedicalCase, Stetoskop, Bulb } from '../svg';
import { COLORS } from '../constants';

type ProfileProps = NativeStackScreenProps<HomeStackParamList, SCREEN_NAMES_HOME_TAB.HomeOptionsScreen>;

export default ({navigation}: ProfileProps) => {
    const goToMeasurements = useCallback(
        () => {
            navigation.navigate(SCREEN_NAMES_HOME_TAB.HomeMeasurementScreen);
        },
        [navigation]
    );

    return (
        <ScreenContainer>
            <DescriptionText
                topOffset={16}
                textCode="homeScreen_Description"
            />

            <AppButton
                onPress={goToMeasurements}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.ORANGE_1}
                textColor={COLORS.WHITE_1}
                leftImage={<Planner />}
                rightImage={<Chain />}
                textValue="homeScreen_ButtonStartMeasurement"
                bottomOffset={26}
                topOffset={23}
            />

            <AppButton
                onPress={() => {}}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.ORANGE_1}
                leftImage={<MedicalCase />}
                textValue="homeScreen_ButtonViewResults"
                bottomOffset={30}
            />

            <AppButton
                onPress={() => {}}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.ORANGE_1}
                leftImage={<Bulb />}
                textValue="homeScreen_ButtonLearnMore"
                bottomOffset={30}
            />

            <AppButton
                onPress={() => {}}
                borderColor={COLORS.ORANGE_1}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.ORANGE_1}
                leftImage={<Stetoskop />}
                textValue="homeScreen_ButtonFindDoctor"
                rightTopText="buttonDeckoStart"
                bottomOffset={30}
            />
           
        </ScreenContainer>
    );
}
