import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalError} from "@/common/components/GlobalError.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
        {/*<ToastContainer*/}
        {/*    position="top-right"*/}
        {/*    autoClose={5000}*/}
        {/*    hideProgressBar={false}*/}
        {/*    newestOnTop*/}
        {/*    closeOnClick*/}
        {/*    rtl={false}*/}
        {/*    pauseOnFocusLoss*/}
        {/*    draggable*/}
        {/*    pauseOnHover*/}
        {/*    theme="light"/>*/}
        <GlobalError/>
    </Provider>
)
