import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
const slice = createSlice({
    name: "app",
    initialState: {
        status: "idle" as RequestStatusType,
        error: null as string | null,

    },
    reducers: {
        setAppError: (state, action: PayloadAction<string | null>)=>{
            state.error=action.payload
        },
        setAppStatus:(state, action: PayloadAction<RequestStatusType>)=>{
            state.status=action.payload
        }
    }
})
export const appActions =slice.actions;
export const appSlice = slice.reducer
