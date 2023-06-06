import { createReducer } from '@reduxjs/toolkit';
import { popupSpeakerAction, setLoaderAction } from './actions';

type LocalState = {
  popup: {
    speaker: boolean,
  },
  loader: boolean,
};

const initialState: LocalState = {
  popup: {
    speaker: false,
  },
  loader: false,
};

export const LocalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(popupSpeakerAction, (state, action) => {
      state.popup.speaker = action.payload;
    })
    .addCase(setLoaderAction, (state, action) => {
      state.loader = action.payload;
    })
});