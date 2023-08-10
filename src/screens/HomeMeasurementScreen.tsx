import { DescriptionText } from '../components/TextComponents';
import ScreenContainer from '../components/ScreenContainer';
import { AppButton } from '../components/Buttons';

export default () => {
    return (
        <ScreenContainer>
            <DescriptionText
                textAlign='left'
                topOffset={16}
                textCode="chooseSleepMode_Title"
            />
        </ScreenContainer>
    );
}
