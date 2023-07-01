import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./AuthReduser";

export const store = configureStore({
  reducer: {
    authreducer: authreducer,
  },
});