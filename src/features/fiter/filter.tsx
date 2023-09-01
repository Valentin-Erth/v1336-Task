
import {BaseSelect} from "@/common/components/BaseSelect/baseSelect.tsx";

export const FilterSelect = () => {
    return (
        <div style={{display:"flex", gap: "10px", padding: "10px"}}>
            <BaseSelect title={'Соединение: '}/>
            <BaseSelect title={'Департамент: '}/>
        </div>
    );
};

