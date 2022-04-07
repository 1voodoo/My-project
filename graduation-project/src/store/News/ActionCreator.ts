import { createAsyncThunk } from "@reduxjs/toolkit";
import getNews from "../../api/getNews";
import NewsActionType from "./ActionType";

export const getAllNews = createAsyncThunk(NewsActionType.GetAll, () =>  getNews());
