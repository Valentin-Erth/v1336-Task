import  {useEffect} from "react";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {brigadesThunks} from "@/features/brigades/model/brigades.slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Brigada} from "@/features/brigades/ui/brigada/brigada.tsx";
import s from './brigades.module.css'
import {Button} from "antd";
import {selectBrigades, selectFilter} from "@/features/brigades/model/brigades.selector.ts";
import { ArrowRightOutlined } from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
export const Brigades = () => {
    const dispatch = useAppDispatch()
    const brigades = useAppSelector(selectBrigades);
    const filter = useAppSelector(selectFilter);
    console.log(filter)
    const filteredBrigades = filter !== null ? brigades.filter(brigade => brigade.connectionStateId === filter) : brigades;
    useEffect(() => {
        dispatch(brigadesThunks.getBrigades()).unwrap().then(()=>toast.success('sucsess load'))
    }, [])
    return (
        <div>
            <div>
                <Button className={s.btn} icon={<ArrowRightOutlined />}>  <NavLink to={'charts'}>Перейти на график</NavLink> </Button>
            </div>
            <div className={s.container}>
                {filteredBrigades && filteredBrigades.map(el => (
                    <Brigada
                        key={el.id}
                        id={el.id}
                        brigadeName={el.brigade_name}
                        departmentId={el.department.id}
                        connectionStateId={el.connectionStateId}
                        cluster={el.position.cluster}
                        field={el.position.field}
                        well={el.position.well}
                    />
                ))}
            </div>


        </div>
    );
};

