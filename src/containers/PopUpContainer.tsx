import { PopUpReceivedRequest } from '../components/PopUpReceivedRequest';
import { PopUpSendedRequest } from '../components/PopUpSendedRequest';
import { PopUpAcceptedRequest } from '../components/PopUpAcceptedRequest';
import { PopUpError } from '../components/PopUpError';
import { PopUpIncorrectQRCode } from '../components/PopUpIncorrectQRCode';
import { PAIRING_STATUS } from '../types';
import { useAppSelector } from '../hooks/useAppSelector';

export const PopUpContainer = () => {
    const pairingStatus = useAppSelector(state => state.pairing.pairingStatus);
    switch (pairingStatus) {
        case PAIRING_STATUS.codeScanned:
            return <PopUpReceivedRequest />
        case PAIRING_STATUS.requestSent:
            return <PopUpSendedRequest />
        case PAIRING_STATUS.connectionAccepted:
            return <PopUpAcceptedRequest />
        case PAIRING_STATUS.errorHappend:
            return <PopUpError />
        case PAIRING_STATUS.codeIsNotCorrect:
            return <PopUpIncorrectQRCode />
        default:
            return null;
    }
}
