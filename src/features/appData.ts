import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BOTTOM_TABS } from '../components/TabBar';
import { closePairingModal } from './pairing';

export const closeOnboardingSetTab = createAsyncThunk(
  'appData/closeOnboardingSetTab',
  async (bottomTab: BOTTOM_TABS, { dispatch }) => {
    dispatch(closePairingModal());
    return bottomTab;
  }
);

const appDataSlice = createSlice({
  name: 'appData',
  initialState: {
    displayOnboarding: true,
    initialTabBarTab: BOTTOM_TABS.Home,
  },
  reducers: {
    closeOnboarding(state) {
      state.displayOnboarding = false;
    },
    closeOnboardingSetTab(state, action) {

    },
  },
  extraReducers: (builder) => {
    builder.addCase(closeOnboardingSetTab.fulfilled, (state, action) => {
      state.displayOnboarding = false;
      state.initialTabBarTab = action.payload;
    })
  },
});

export const { closeOnboarding } = appDataSlice.actions;
export default appDataSlice.reducer;
