import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appActions} from "@/app/app.slice.ts";
import {handleServerNetworkError} from "@/common/utils/errorUtils.ts";
import {filterApi, ResponseConnectType, ResponseDepartmentType} from "@/features/fiter/api/filterApi.ts";


const slice = createSlice({
    name: "filters",
    initialState: {
        departments: [] as ResponseDepartmentType[],
        connectStatus: [] as ResponseConnectType[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDepartments.fulfilled, (state, action) => {
                if (action.payload) {
                    state.departments = action.payload
                }
            })
            .addCase(getConnectStatus.fulfilled, (state, action) => {
                if (action.payload) {
                    state.connectStatus = action.payload
                }
            })
    }
})

const getDepartments = createAsyncThunk('filters/departments', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    dispatch(appActions.setAppStatus("loading"))
    try {
        const res = await filterApi.getDepartments()
        if (res.status === 200) {
            dispatch(appActions.setAppStatus("succeeded"))
            return res.data
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
const getConnectStatus = createAsyncThunk('filters/connectStatus', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    dispatch(appActions.setAppStatus("loading"))
    try {
        const res = await filterApi.getConnectStatus()
        if (res.status === 200) {
            dispatch(appActions.setAppStatus("succeeded"))
            return res.data
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        return rejectWithValue(null)
    }
})
export const filterSlice = slice.reducer
export const filterThunks = {getDepartments, getConnectStatus}