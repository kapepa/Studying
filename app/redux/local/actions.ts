import { createAction } from '@reduxjs/toolkit';

export const popupSpeakerAction = createAction<boolean>('popup/Speaker');
export const setLoaderAction = createAction<boolean>('set/Loader');