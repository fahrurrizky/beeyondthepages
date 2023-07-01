import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

const initialState = {
  article: [],
};

export const ArticleReducer = createSlice({
  name: "ArticleReducer",
  initialState,
  reducers: {
    getArticle: (state, action) => {
      state.article = [...action.payload];
    },
  },
});

export const makeArticle = (data, file) => {
  return async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    console.log(data);
    formData.append("data", JSON.stringify(data));
    formData.append("file", file);

    try {
      const res = await axios.post(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog`,
        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Blog Sudah Masuk");
      document.location.href = "/";
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const likeArticle = (articleId) => {
  return async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/like`,
        {
          BlogId: articleId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("article sudah di like");
    } catch (error) {
      alert(error.response.data.err);
    }
  };
};

export const { getArticle } = ArticleReducer.actions;

export default ArticleReducer.reducer;