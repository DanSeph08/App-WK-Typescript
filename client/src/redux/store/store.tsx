import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducer/usersReducer";

export const store = configureStore({
    reducer: {
        usersReducer: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;