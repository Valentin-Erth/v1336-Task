import {BaseSelect} from "@/common/components/BaseSelect/baseSelect.tsx";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectConnectStatus, selectDepartments} from "@/features/fiter/model/filters.selector.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {filterThunks} from "@/features/fiter/model/filters.slice.ts";
import s from './filter.module.css'
import {
    brigadesThunks, resetFilterConnectStatus, resetFilterDepartment,
    setFilterConnectStatus,
    setFilterDepartment
} from "@/features/brigades/model/brigades.slice.ts";
import {ArrowRightOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {Button} from "antd";

export const FilterSelect = () => {
    const dispatch = useAppDispatch()
    const departments = useAppSelector(selectDepartments)
    const connectStatus = useAppSelector(selectConnectStatus)

    useEffect(() => {
        dispatch(filterThunks.getDepartments())
        dispatch(filterThunks.getConnectStatus())
    }, [])
    const departmentOptions = departments.map(department => ({value: department.id, label: department.name}));
    const connectStatusOptions = connectStatus.map(status => ({value: status.connectionStateId, label: status.name}));
    const handleDepartmentChange = (value: any) => {
        if (value === null) {
            dispatch(resetFilterDepartment());
        } else {
            dispatch(setFilterDepartment(value));
        }
        dispatch(brigadesThunks.getFilteredBrigades());
    };
    const handleConnectStatusChange = (value: any) => {
        if (value === null) {
            dispatch(resetFilterConnectStatus());
        } else {
            dispatch(setFilterConnectStatus(value));
        }
        dispatch(brigadesThunks.getFilteredBrigades());

    };

    return (
        <div className={s.container}>
            <div className={s.box}>
                <BaseSelect title={'Соединение:  '} options={connectStatusOptions}
                            onChange={handleConnectStatusChange}/>
                <BaseSelect title={'Департамент:  '} options={departmentOptions} onChange={handleDepartmentChange}/>
            </div>
<div  className={s.btn}>
    <Button icon={<ArrowRightOutlined/>}> <NavLink to={'charts'}>Перейти на
        график</NavLink> </Button>
</div>

        </div>
    );
};

