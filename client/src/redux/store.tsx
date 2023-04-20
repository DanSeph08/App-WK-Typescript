import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducer/usersReducer";

export const store = configureStore({
    reducer: {
        usersReducer: usersReducer,
    }
})