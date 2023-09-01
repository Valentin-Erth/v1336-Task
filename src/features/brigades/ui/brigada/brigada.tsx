import {Card} from "antd";

type BrigadesItemPropsType = {
    id: number
    brigadeName: string
    connectionStateId: number
    departmentId: number
    field: string
    cluster: number
    well: number
}
export const Brigada = ({cluster,id,brigadeName,connectionStateId,well,departmentId,field}:BrigadesItemPropsType) => {

    return (
        <Card title={brigadeName} style={{
            width: "250px",margin: "10px"
        }}>
            {id}
            <div>Департамент: {departmentId}</div>
            <div>Соединение: {connectionStateId}</div>
            <div>Кластер: {cluster}</div>
            <div>Поле: {field} </div>
            <div>Скважина: {well}</div>
        </Card>
    );
};

