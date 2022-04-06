import { createAsyncThunk } from "@reduxjs/toolkit";
import getNewsID from "../../api/getNewsID";
import NewsDescriptionActionType from "./ActionType";

export const getNewsDescription = createAsyncThunk(NewsDescriptionActionType.GetNewsDescription, (id: number) => {
    return getNewsID(id);
});

export const likeNews = createAsyncThunk(NewsDescriptionActionType.Like, (id: number) => {
  
});