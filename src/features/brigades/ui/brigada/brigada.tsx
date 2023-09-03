import {Card} from "antd";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectConnectStatus, selectDepartments} from "@/features/fiter/model/filters.selector.ts";
import s from './brigada.module.css'
type BrigadesItemPropsType = {
    id: number
    brigadeName: string
    connectionStateId: number
    departmentId: number
    field: string
    cluster: number
    well: number
}
export const Brigada = ({cluster, brigadeName, connectionStateId, well, departmentId, field}: BrigadesItemPropsType) => {
    const departments = useAppSelector(selectDepartments)
    const connectStatus = useAppSelector(selectConnectStatus)
    const department = departments.find(dept => dept.id === departmentId)
    const connection = connectStatus.find(status => status.connectionStateId === connectionStateId)
const status=connection && connection.name === 'Доступен' ? s.green : s.red
    return (
        <Card title={brigadeName} style={{
            width: "270px",  margin: "10px",
        }} className={s.card}><div className={s.description}>
            <h3 className={s.subTitle}>{department && department.name}</h3>
            <span className={status}><b>Соединение</b>: {connection && connection.name}</span>
            <span><b>Кластер</b>: {cluster}</span>
            <span><b>Поле</b>: {field} </span>
            <span><b>Скважина</b>: {well}</span>
        </div>
        </Card>
    );
};

