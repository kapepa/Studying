import { createSelector } from '@reduxjs/toolkit'

const popupSpeakerSelector = createSelector(
  (state) => state.local,
  (state) => state.popup.speaker,
)

const getLoaderSelector = createSelector(
  (state) => state.local,
  (state) => state.loader,
)

export {popupSpeakerSelector, getLoaderSelector};