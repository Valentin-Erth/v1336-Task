import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appActions} from "@/app/app.slice.ts";
import {handleServerNetworkError} from "@/common/utils/errorUtils.ts";
import {brigadesApi, BrigadeType} from "@/features/brigades/api/brigadesApi.ts";
import {AppRootStateType} from "@/app/store.ts";


const slice = createSlice({
    name: "brigades",
    initialState: {
        brigades: [] as BrigadeType[],
        filter: {
            connectStatusId: null,
            departmentId: null,
        } as FilterType,
        filteredBrigades: [] as BrigadeType[]
    },
    reducers: {
        setFilterConnectStatus: (state, action: PayloadAction<number | null>) => {
            state.filter.connectStatusId = action.payload
        },
        resetFilterConnectStatus: (state) => {
            state.filter.connectStatusId = null;
        },
        resetFilterDepartment: (state) => {
            state.filter.departmentId = null;
        },
        setFilterDepartment: (state, action: PayloadAction<number | null>) => {
            state.filter.departmentId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBrigades.fulfilled, (state, action) => {
                if (action.payload) {
                    state.brigades = action.payload
                    state.filteredBrigades = action.payload
                }
            })
            .addCase(getFilteredBrigades.fulfilled, (state, action) => {
                state.filteredBrigades = action.payload;
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
const getFilteredBrigades = createAsyncThunk(
    'brigades/getFilteredBrigades',
    async (_, {dispatch, getState, rejectWithValue}) => {
        const state = getState() as AppRootStateType
        const {connectStatusId, departmentId} = state.brigades.filter
        const brigades = state.brigades.brigades
        let filteredBrigades = brigades
        dispatch(appActions.setAppStatus("loading"))
        try {
            if (connectStatusId !== null) {
                filteredBrigades = filteredBrigades.filter(brigade => brigade.connectionStateId === connectStatusId);
            }
            if (departmentId !== null) {
                filteredBrigades = filteredBrigades.filter(brigade => brigade.department.id === departmentId);
            }
            dispatch(appActions.setAppStatus("succeeded"))
            return filteredBrigades;

        } catch (e) {
            handleServerNetworkError(e, dispatch)
            return rejectWithValue(null)
        }
    }
)
//types
export type FilterType = {
    connectStatusId?: number | null
    departmentId?: number | null
}

export const brigadesSlice = slice.reducer
export const brigadesThunks = {getBrigades, getFilteredBrigades}
export const {setFilterConnectStatus, setFilterDepartment,resetFilterConnectStatus,resetFilterDepartment} = slice.actions