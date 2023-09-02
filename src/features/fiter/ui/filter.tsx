import {BaseSelect} from "@/common/components/BaseSelect/baseSelect.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectConnectStatus, selectDepartments} from "@/features/fiter/model/filters.selector.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {filterThunks} from "@/features/fiter/model/filters.slice.ts";
// import {toast} from "react-toastify";
import s from './filter.module.css'
export const FilterSelect = () => {
    const dispatch = useAppDispatch()
    const departments = useAppSelector(selectDepartments)
    const connectStatus = useAppSelector(selectConnectStatus)
    useEffect(() => {
        dispatch(filterThunks.getDepartments())
        dispatch(filterThunks.getConnectStatus())
    },[])
    const departmentOptions = departments.map(department => ({value: department.id, label: department.name}));
    const connectStatusOptions = connectStatus.map(status => ({value: status.connectionStateId, label: status.name}));
    const handleDepartmentChange = () => {
        // Handle department change
    };
    const handleConnectStatusChange = () => {
        // Handle connect status change
    };

    return (
        <div className={s.box}>
            <BaseSelect title={'Соединение:  '} options={connectStatusOptions} onChange={handleConnectStatusChange}/>
            <BaseSelect title={'Департамент:  '} options={departmentOptions} onChange={handleDepartmentChange}/>
        </div>
    );
};

