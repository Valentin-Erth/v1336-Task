import ReactDOM from 'react-dom/client'
import App from './app/app.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
// import 'react-toastify/dist/ReactToastify.css';
import {GlobalError} from "@/common/components/GlobalError/GlobalError.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
        <GlobalError/>
    </Provider>
)
