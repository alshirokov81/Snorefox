import { useEffect } from 'react';
import { showPopup, hidePopup } from '../components/Popup';

import { useAppSelector } from './useAppSelector';
import { PAIRING_STATUS } from '../types';


export const usePopUp = () => {
    const pairingStatus = useAppSelector(state => state.pairing.pairingStatus);
    useEffect(
        () => {
            if (pairingStatus !== PAIRING_STATUS.notStarted) {
                showPopup();
            } else {
                hidePopup();
            }
        },
        [pairingStatus]
    );
}
