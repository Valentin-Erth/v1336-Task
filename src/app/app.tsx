import './App.module.css'
// import {Charts} from "@/features/charts/ui/charts.tsx";
import {Brigades} from "@/features/brigades/ui/brigades.tsx";

import {FilterSelect} from "@/features/fiter/filter.tsx";

function App() {

    return (
        <div>
            <FilterSelect/>
            <Brigades/>
            {/*<Charts/>*/}
        </div>
    )
}

export default App
