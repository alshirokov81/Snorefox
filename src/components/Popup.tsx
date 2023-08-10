import { SPSheet } from 'react-native-popup-confirm-toast';

import { PopUpContainer } from '../containers/PopUpContainer';
import { SCREEN_HEIGHT } from '../constants';

export const showPopup = () => {
    const spSheet = SPSheet;
    spSheet.show({
        component: () => <PopUpContainer />,
        dragFromTopOnly: true,
        onCloseComplete: () => {},
        onOpenComplete: () => {},
        height: SCREEN_HEIGHT * 0.95,
        closeOnPressMask: false,
        closeOnDragDown: false,
        closeOnPressBack: false,
        customStyles: { draggableIcon: {}, container: {height: SCREEN_HEIGHT * 0.87}, draggableContainer:{} }
    });
};
export const hidePopup = () => {
    const spSheet = SPSheet;
    spSheet.hide();
};
