import { useCallback } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { TitleText } from '../components/TextComponents';
import ScreenContainer from '../components/ScreenContainer';



export default () => {
    const dispatch = useAppDispatch();
    const goToFindADoctor = useCallback(
        () => {
            //dispatch(closeOnboarding());
        },
        [dispatch]
    );

    return (
        <ScreenContainer>
            <TitleText
                textAlign='left'
                topOffset={16}
                textCode="settingsScreen_Title"
            />
        </ScreenContainer>
    );
}
