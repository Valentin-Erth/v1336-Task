import {configureStore} from "@reduxjs/toolkit";
import {appSlice} from "@/app/app.slice.ts";
import {pointsSlice} from "@/features/charts/model/points.slice.ts";
import {brigadesSlice} from "@/features/brigades/model/brigades.slice.ts";
import {filterSlice} from "@/features/fiter/model/filters.slice.ts";

export const store=configureStore({
    reducer: {
        app: appSlice,
        points: pointsSlice,
        brigades: brigadesSlice,
        filter: filterSlice,
    }
})
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch