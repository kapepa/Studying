import {createReducer} from "@reduxjs/toolkit";
import {getUser} from "./actions";

export type UserState = {
  profile: { name: string, role: string };
  pending: boolean;
  error: boolean;
};

const initialState: UserState = {
  profile: { name: '', role: '' },
  pending: false,
  error: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.pending = true;
    })
    .addCase(getUser.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.profile = payload;
    })
    .addCase(getUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
})

export default userReducer;

