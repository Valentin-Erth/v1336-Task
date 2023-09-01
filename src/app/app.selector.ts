import {AppRootStateType} from "@/app/store.ts";

export const selectStatus=(state:AppRootStateType) => state.app.status
export const selectError=(state:AppRootStateType) => state.app.error