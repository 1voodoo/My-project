import { createReducer } from "@reduxjs/toolkit";
import { getAllNews } from "./ActionCreator";
import INewsState from "./Type";


const initialState: INewsState = {
    allNews: undefined,
}

const newsReducer = createReducer(initialState, (builder) => {
    builder.addCase(getAllNews.fulfilled, (state, action) => {
        state.allNews = action.payload
    });
    builder.addCase(getAllNews.rejected, (state) => {
        state.allNews = [];
    });
});

export default newsReducer;
