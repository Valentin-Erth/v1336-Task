import {FilterSelect} from "@/features/fiter/ui/filter.tsx";
import {Brigades} from "@/features/brigades/ui/brigades.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectStatus} from "@/app/app.selector.ts";
import {Spin} from "antd";

export const BrigadesPage = () => {
    const status = useAppSelector(selectStatus)
    return (
        <div>
            <div style={{
                position: "fixed",
                top: "30%",
                textAlign: "center",
                width: "100%"
            }}>
                {status === "loading" && <Spin size="large"/>}
            </div>
            <FilterSelect/>
            <Brigades/>
        </div>
    );
};

