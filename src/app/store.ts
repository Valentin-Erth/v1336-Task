import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {appSlice} from "@/app/app.slice.ts";

export const store=configureStore({
    reducer: {
        app: appSlice,
    }
})
export type AppDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch