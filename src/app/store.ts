import { configureStore } from '@reduxjs/toolkit';
import pairingReducer from '../features/pairing';
import appDataReducer from '../features/appData';

export const store = configureStore({
  reducer: {
    pairing: pairingReducer,
    appData: appDataReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
