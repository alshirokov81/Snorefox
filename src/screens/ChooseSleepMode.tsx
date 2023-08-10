import { useCallback } from 'react';

import { generatePairingCode } from '../features/pairing';
import { closeOnboarding } from '../features/appData';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { TitleText, DescriptionText } from '../components/TextComponents';
import { AppButton } from '../components/Buttons';
import ScreenContainer from '../components/ScreenContainer';
import { CenteredItem } from '../components/CenteredItem';
import { BorderedSquare } from '../components/BorderedSquare';
import { BedHorizontal } from '../svg';
import { BedVertical, BedDoubleVertical } from '../svg';
import { COLORS } from '../constants';


export default () => {
    const dispatch = useAppDispatch();
    const goToSleepAlone = useCallback(
        () => {
            dispatch(closeOnboarding());
        },
        [dispatch]
    );
    const goToAddSecond = useCallback(
        () => {
            dispatch(generatePairingCode());
        },
        [dispatch]
    );

    return (
        <ScreenContainer>
            <TitleText
                textAlign='left'
                topOffset={16}
                textCode="chooseSleepMode_Title"
            />


            <DescriptionText
                textAlign='left'
                topOffset={16}
                textCode="chooseSleepMode_Description"
            />

            <CenteredItem>
                <BorderedSquare>
                    <BedHorizontal />
                    <DescriptionText
                        topOffset={30}
                        textCode="chooseSleepMode_ImageDescription"
                    />
                </BorderedSquare>
            </CenteredItem>

            <AppButton
                onPress={goToAddSecond}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.ORANGE_1}
                textValue="chooseSleepMode_ButtonAddSecond"
                rightTopText="buttonDeckoMed"
                leftImage={<BedDoubleVertical />}
                bottomOffset={26}
            />

            <AppButton
                onPress={goToSleepAlone}
                buttonColor={COLORS.WHITE_1}
                textColor={COLORS.ORANGE_1}
                textValue="chooseSleepMode_ButtonSleepAlone"
                leftImage={<BedVertical />}
                bottomOffset={30}
            />
           
        </ScreenContainer>
    );
}
