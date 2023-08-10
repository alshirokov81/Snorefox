import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BarCodeReadEvent } from 'react-native-camera';
import DeviceInfo from 'react-native-device-info';

import { navigationRef } from '../containers/AppNavigated';
import { PAIRING_STATUS } from '../types';
import { SCREEN_NAMES_ONBOARDING } from '../containers/AppNavigated';

type SliceType = {
  idForScanning?: string,
  scannedId?: string,
  connectDevName?: string,
  pairingId?: string,
  pairingStatus: PAIRING_STATUS,
}

export const generatePairingCode = createAsyncThunk(
    'pairing/generatePairingCode',
    async () => {
      //TODO write logic for receiving userConnectionTocken from server during auser uthorisation
      const userConnectionTocken = '141903';
      const devName = await DeviceInfo.getDeviceName() || 'unknown device';
      navigationRef.navigate(SCREEN_NAMES_ONBOARDING.OnboardingPairScreen);
      return JSON.stringify({userConnectionTocken, devName});
    }
);

export const scannedPairingCode = createAsyncThunk(
  'pairing/scannedPairingCode',
  async (e: BarCodeReadEvent, { dispatch }) => {
    try {
      const { userConnectionTocken, devName } = JSON.parse(e.data);
      if (userConnectionTocken && devName) {
        dispatch(pairCodeIsCorrect({userConnectionTocken, devName}));
      } else {
        dispatch(pairCodeIsIncorrect());
      }
    } catch (error) {
        dispatch(pairCodeIsIncorrect());
    }
  }
);

export const sendPairingRequestToServer = createAsyncThunk(
  'pairing/sendPairingRequestToServer',
  async (_, { dispatch, getState }) => {
      const state = getState() as {pairing: SliceType};
      dispatch(pairCodeWasSent());
      try {
        //TODO create real logic for sending request to server with pairing id
        //const emulatedRequestRez = Math.random() > 0.2;
        const emulatedRequestRez = true;
        if (state?.pairing?.scannedId && emulatedRequestRez) {
          dispatch(checkPairingAnswerOnServer(state.pairing.scannedId));
        } else {
          throw new Error('Emulating error');
        }
      } catch (error) {
        //TODO pass and handle error code
        dispatch(pairCodeErrorHappend());
      }
  }
);

export const checkPairingAnswerOnServer = createAsyncThunk(
  'pairing/checkPairingAnswerOnServer',
  async (pairingCode: string, { dispatch }) => {
      //TODO create real logic for receiving response from server
      try {
        await new Promise((resolve) => setTimeout(() => resolve(true), 100));
      } catch (e) {
        console.log(`e`);
        console.log(e);
      }
      const emulatedRequestReceived = Math.random() < 0.2;
      if (emulatedRequestReceived){
        const emulatedRequestResult = Math.random() > 0.2;
        if (emulatedRequestResult) {
          console.log(`pairing approved ${pairingCode}`);
          dispatch(pairApproved(pairingCode));
        } else {
          dispatch(pairCancelled());
        }
      } else {
          setTimeout(
            () => {dispatch(checkPairingAnswerOnServer(pairingCode));},
            1000
          );
      }
  }
);

export const closePairingModal = createAsyncThunk(
  'pairing/closePairingModal',
  async (_, { dispatch }) => {

  }
);


const initialState: SliceType = {
  idForScanning: undefined,
  scannedId: undefined,
  connectDevName: undefined,
  pairingId: undefined,
  pairingStatus: PAIRING_STATUS.notStarted,
};

const pairingSlice = createSlice({
  name: 'pairing',
  initialState,
  reducers: {
    pairCodeScanned(state, action) {
      state.scannedId = action.payload.id;
    },
    pairCodeWasSent(state){
      state.pairingStatus = PAIRING_STATUS.requestSent;
    },
    pairCodeErrorHappend(state){
      state.pairingStatus = PAIRING_STATUS.errorHappend;
    },
    pairApproved(state, action) {
      state.pairingId = action.payload.id;
      state.pairingStatus = PAIRING_STATUS.connectionAccepted;
    },
    pairCancelled(state) {
      state.pairingStatus = PAIRING_STATUS.connectionDeclined;
    },
    pairCodeIsCorrect(state, {payload: {userConnectionTocken, devName}}) {
      state.pairingStatus = PAIRING_STATUS.codeScanned;
      state.scannedId = userConnectionTocken;
      state.connectDevName = devName;
    },
    pairCodeIsIncorrect(state) {
      state.pairingStatus = PAIRING_STATUS.codeIsNotCorrect;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generatePairingCode.fulfilled, (state, action) => {
      state.idForScanning = action.payload;
    }),
    builder.addCase(closePairingModal.fulfilled, (state) => {
      state.pairingStatus = PAIRING_STATUS.notStarted;
      state.scannedId = undefined;
      state.connectDevName = undefined;
    })
  },
});

export const {
  pairCodeScanned,
  pairApproved,
  pairCodeWasSent,
  pairCodeErrorHappend,
  pairCancelled,
  pairCodeIsCorrect,
  pairCodeIsIncorrect
} = pairingSlice.actions;
export default pairingSlice.reducer;
