import {configureStore} from "@reduxjs/toolkit";
import {appSlice} from "@/app/app.slice.ts";
import {pointsSlice} from "@/features/charts/model/points.slice.ts";

export const store=configureStore({
    reducer: {
        app: appSlice,
        points: pointsSlice,
    }
})
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch