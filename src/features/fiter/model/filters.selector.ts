import {AppRootStateType} from "@/app/store.ts";

export const selectDepartments=(state:AppRootStateType) => state.filter.departments
export const selectConnectStatus=(state:AppRootStateType) => state.filter.connectStatus