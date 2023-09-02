import {instance} from "@/common/instance/instance.ts";

export const filterApi = {
    getConnectStatus() {
        return instance.get<ResponseConnectType[]>(`getConnectionState`)
    },
    getDepartments() {
        return instance.get<ResponseDepartmentType[]>(`getDepartments`)
    },
}
// types
export type ResponseConnectType = {
    connectionStateId: 0 | 1,
    name: "Доступен" | "Недоступен",
}
export type ResponseDepartmentType={
    id: 0 | 1| 2,
    name: "Лукойл" |"Роснефть"|"Газпром нефть"
}
