import { createReducer } from "@reduxjs/toolkit";
import { getNewsDescription } from "./ActionCreator";
import INewsDiscriptonState from "./Type";

const initialState: INewsDiscriptonState = {};

const newsDescriptionReducer = createReducer(initialState, (builder) => {
    builder.addCase(getNewsDescription.fulfilled, (state, action) => {
        state[action.meta.arg] = action.payload;
    })
})

export default  newsDescriptionReducer;
