import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appActions} from "@/app/app.slice.ts";
import {pointsApi, ResponsePointsType} from "@/features/charts/api/pointsApi.ts";
import {handleServerNetworkError} from "@/common/utils/error-utils.ts";


const slice = createSlice({
    name: "points",
    initialState: {
        pointsFast: [] as ResponsePointsType[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPointsFast.fulfilled, (state, action) => {
                if (action.payload) {
                    state.pointsFast = action.payload
                }
            })
    }
})

const fetchPointsFast = createAsyncThunk('points/fetchPointsFast', async (arg: string, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    dispatch(appActions.setAppStatus("loading"))
    try {
        const res = await pointsApi.getPointsFast(arg)
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
export const pointsSlice = slice.reducer
export const pointsThunks = {fetchPointsFast}