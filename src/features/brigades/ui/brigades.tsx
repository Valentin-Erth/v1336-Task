import {useEffect} from "react";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {brigadesThunks} from "@/features/brigades/model/brigades.slice.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Brigada} from "@/features/brigades/ui/brigada/brigada.tsx";
import s from './brigada/brigades.module.css'
import {Button} from "antd";

export const Brigades = () => {
    const dispatch = useAppDispatch()
    const brigades = useAppSelector((state) => state.brigades.brigades);
    useEffect(() => {
        dispatch(brigadesThunks.getBrigades())
    }, [])
    return (
        <div>
            <div>
                <Button className={s.btn}>Перейти на график</Button>
            </div>
            <div className={s.container}>
                {brigades && brigades.map(el => (
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

