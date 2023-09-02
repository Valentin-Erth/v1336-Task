import {AppRootStateType} from "@/app/store.ts";

export const selectBrigades=(state:AppRootStateType) => state.brigades.brigades
export const selectFilter=(state:AppRootStateType) => state.brigades.filter