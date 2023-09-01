import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appActions} from "@/app/app.slice.ts";
import {handleServerNetworkError} from "@/common/utils/errorUtils.ts";
import {brigadesApi, BrigadeType} from "@/features/brigades/api/brigadesApi.ts";


const slice = createSlice({
    name: "brigades",
    initialState: {
        brigades: [] as BrigadeType[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBrigades.fulfilled, (state, action) => {
                if (action.payload) {
                    state.brigades = action.payload
                }
            })
    }
})

const getBrigades = createAsyncThunk('brigades/getBrigades', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    dispatch(appActions.setAppStatus("loading"))
    try {
        const res = await brigadesApi.getBrigades()
        console.log(res)
        if (res.status === 200) {
            dispatch(appActions.setAppStatus("succeeded"))
            return res.data
        }
    } catch (e) {
        console.log(e)
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
export const brigadesSlice = slice.reducer
export const brigadesThunks = {getBrigades}