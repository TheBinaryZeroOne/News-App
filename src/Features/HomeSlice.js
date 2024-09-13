import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_KEY from "/src/Request/Request.js";
import { HeadLines, newsArticles } from "../Request/Request";
import axios from "axios";

let init = {
  HeadLines: {
    data: null,
    status: "idle",
    error: null,
  },

  Articles: {
    data: null,
    status: "idle",
    error: null,
  },

  SportsNews: {
    data: null,
    status: "idle",
    error: null,
  },

  MovieUpdates: {
    data: null,
    status: "idle",
    error: null,
  },

  TrendingUpdates: {
    data: null,
    status: "idle",
    error: null,
  },

  Search: {
    data: null,
    status: "idle",
    error: null,
  },
};

export const fetchData = createAsyncThunk("news/fetchData", async () => {
  let res = await axios.get(`${HeadLines}${API_KEY}`);
  return res.data;
});

export const fetchNewsArticles = createAsyncThunk(
  "news/fetchNewsArticles",
  async (type) => {
    let res = await axios.get(`${newsArticles(type)}${API_KEY}`);
    return res.data;
  }
);

export const fetchSportsNews = createAsyncThunk(
  "news/fetchSportsNews",
  async (type) => {
    let res = await axios.get(`${newsArticles(type)}${API_KEY}`);
    return res.data;
  }
);

export const fetchSearchData = createAsyncThunk(
  "news/fetchSearchData",
  async (type) => {
    let res = await axios.get(`${newsArticles(type)}${API_KEY}`);
    return res.data;
  }
);

export const fetchMovieUpdates = createAsyncThunk(
  "news/fetchMovieUpdates",
  async (type) => {
    let res = await axios.get(`${newsArticles(type)}${API_KEY}`);
    return res.data;
  }
);

export const fetchTrendingUpdates = createAsyncThunk(
  "news/fetchTrendingUpdates",
  async (type) => {
    let res = await axios.get(`${newsArticles(type)}${API_KEY}`);
    return res.data;
  }
);

let newsSlice = createSlice({
  name: "news",
  initialState: init,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchData.pending, (state) => {
        state.HeadLines.status = "loading";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.HeadLines.status = "idle";
        state.HeadLines.error = action.error.message;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.HeadLines.data = action.payload;
        state.HeadLines.status = "idle";
      })
      .addCase(fetchNewsArticles.pending, (state) => {
        state.Articles.status = "loading";
      })
      .addCase(fetchNewsArticles.rejected, (state, action) => {
        state.Articles.status = "idle";
        state.Articles.error = action.error.message;
      })
      .addCase(fetchNewsArticles.fulfilled, (state, action) => {
        state.Articles.data = action.payload;
        state.Articles.status = "idle";
      })
      .addCase(fetchSportsNews.pending, (state) => {
        state.SportsNews.status = "loading";
      })
      .addCase(fetchSportsNews.rejected, (state, action) => {
        state.SportsNews.status = "idle";
        state.SportsNews.error = action.error.message;
      })
      .addCase(fetchSportsNews.fulfilled, (state, action) => {
        state.SportsNews.data = action.payload;
        state.SportsNews.status = "idle";
      })
      .addCase(fetchSearchData.pending, (state) => {
        state.Search.status = "loading";
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.Search.status = "idle";
        state.Search.error = action.error.message;
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.Search.data = action.payload;
        state.Search.status = "idle";
      })
      .addCase(fetchMovieUpdates.pending, (state) => {
        state.MovieUpdates.status = "loading";
      })
      .addCase(fetchMovieUpdates.rejected, (state, action) => {
        state.MovieUpdates.status = "idle";
        state.MovieUpdates.error = action.error.message;
      })
      .addCase(fetchMovieUpdates.fulfilled, (state, action) => {
        state.MovieUpdates.data = action.payload;
        state.MovieUpdates.status = "idle";
      })
      .addCase(fetchTrendingUpdates.pending, (state) => {
        state.TrendingUpdates.status = "loading";
      })
      .addCase(fetchTrendingUpdates.rejected, (state, action) => {
        state.TrendingUpdates.status = "idle";
        state.TrendingUpdates.error = action.error.message;
      })
      .addCase(fetchTrendingUpdates.fulfilled, (state, action) => {
        state.TrendingUpdates.data = action.payload;
        state.TrendingUpdates.status = "idle";
      }),
});

export default newsSlice.reducer;

export const selectNews = (state) => state.HeadLines;
export const selectNewsArticles = (state) => state.Articles;
export const selectSportsNews = (state) => state.SportsNews;
export const selectSearch = (state) => state.Search;
export const selectMovieUpdates = (state) => state.MovieUpdates;
export const selectTrendingUpdates = (state) => state.TrendingUpdates;
