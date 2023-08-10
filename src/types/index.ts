import {FunctionComponent} from 'react';
export type svgProps = {
    width?: number,
    height?: number,
    fillColor?: string;
}

export type OnboardingStackParamList = {
    OnboardingChooseScreen: React.JSX.Element;
    OnboardingPairScreen: undefined;
    OnboardingScanScreen: undefined;
    
    HomeOptionsScreen: never;
    HomeMeasurementScreen: never;
};

export type HomeStackParamList = {
    HomeOptionsScreen: undefined;
    HomeMeasurementScreen: undefined;

    OnboardingChooseScreen: never;
    OnboardingPairScreen: never;
    OnboardingScanScreen: never;
};

export enum PAIRING_STATUS {
    notStarted = 'NOT_STARTET',
    codeScanned = 'CODE_SCANNED',
    codeIsNotCorrect = 'CODE_IS_NOT_CORRECT',
    requestSent = 'REQUEST_SENT',
    requestReceived = 'REQUEST_RECEIVED',
    connectionAccepted = 'CONNECTION_ACCEPTED',
    connectionDeclined = 'CONNECTION_DECLINED',
    errorHappend = 'ERROR_HAPPENED',
};
