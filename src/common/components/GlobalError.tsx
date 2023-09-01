import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import {appActions} from "@/app/app.slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {selectError} from "@/app/app.selector.ts";


export const GlobalError = () => {
    const error = useAppSelector(selectError);
    const dispatch = useAppDispatch();

    if (error !== null) {
        toast.error(error);
    }

    useEffect(() => {
        if (error !== null) {
            setTimeout(() => {
                dispatch(appActions.setAppError( null ));
            }, 1000);
        }
    }, [error]);

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};
