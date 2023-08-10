import { useRef, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';

import { DEFAULT_STYLE_NUMBERS } from '../constants';
import { useAppSelector } from '../hooks/useAppSelector';
import { PAIRING_STATUS } from '../types';

const { width, height } = Dimensions.get('window');
const QrScannerSize = Math.min(width - DEFAULT_STYLE_NUMBERS.horizontalContainerPadding * 2, height * 0.4);

type componentProps = {
    onRead: (e: BarCodeReadEvent) => void,
}

export const QrCodeScanner = ({ onRead }: componentProps) => {
    const pairingStatus = useAppSelector(state => state.pairing.pairingStatus);
    const ref = useRef<QRCodeScanner>(null);

    useEffect(
        () => {
            if (pairingStatus === PAIRING_STATUS.notStarted) {
                ref?.current?.reactivate();
            }
        },
        [pairingStatus]
    );
    
    return(
        <QRCodeScanner
            cameraStyle={styles.cameraStyle}
            onRead={onRead}
            flashMode={RNCamera.Constants.FlashMode.torch}
            reactivate={false}
            ref={ref}
            reactivateTimeout={10}
        />
    );
}

const styles = StyleSheet.create({
    cameraStyle: {
        width: QrScannerSize,
        height: QrScannerSize,
        borderRadius: 10,
        alignSelf: 'center',
        overflow: 'hidden'
    }
});
