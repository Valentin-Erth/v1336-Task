import {FilterSelect} from "@/features/fiter/filter.tsx";
import {Brigades} from "@/features/brigades/ui/brigades.tsx";

export const BrigadesPage = () => {
    return (
        <div>
            <FilterSelect/>
            <Brigades/>
        </div>
    );
};

