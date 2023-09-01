import axios from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import { appActions } from "@/app/app.slice";

export const handleServerAppError =(data:any, dispatch: Dispatch) => {
  if (data.messages.length) {
    dispatch(appActions.setAppError(data.messages[0]));
  } else {
    dispatch(appActions.setAppError("Some error occurred"));
  }
  dispatch(appActions.setAppStatus( "failed"));
};


export const handleServerNetworkError = (err: unknown, dispatch: Dispatch): void => {
  debugger
  let errorMessage = "Some error occurred";
  if (axios.isAxiosError(err)) {
    errorMessage = err.response?.data?.message || err?.message || errorMessage;
    } else if (err instanceof Error) {
    errorMessage = `Native error: ${err.message}`;
    } else {
    errorMessage = JSON.stringify(err);
  }
  dispatch(appActions.setAppError(errorMessage))
  dispatch(appActions.setAppStatus( "failed"));
};
