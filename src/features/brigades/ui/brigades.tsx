import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Brigada} from "@/features/brigades/ui/brigada/brigada.tsx";
import s from './brigades.module.css'
import {Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {selectfilteredBrigades} from "@/features/brigades/model/brigades.selector.ts";
import {useEffect} from "react";
import {brigadesThunks} from "@/features/brigades/model/brigades.slice.ts";
import {toast} from "react-toastify";


export const Brigades = () => {
    const dispatch = useAppDispatch()
    const filteredBrigades = useAppSelector(selectfilteredBrigades);

    useEffect(() => {
            dispatch(brigadesThunks.getBrigades()).unwrap().then(() => toast.success('sucsess load'))
        },
        []);

    return (
        <div>
            <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                <Button className={s.btn} icon={<ArrowRightOutlined/>}> <NavLink to={'charts'}>Перейти на
                    график</NavLink> </Button>
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

