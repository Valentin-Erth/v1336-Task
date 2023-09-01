import {instance} from "@/common/instance/instance.ts";

export const brigadesApi = {
    getBrigades() {
        return instance.get<BrigadeType[]>(`getBrigadesData`)
    },
}
//types
export type BrigadeType = {
    id: number
    brigade_name: string
    connectionStateId: number
    department: {
        id: number
    }
    position: {
        field: string
        cluster: number
        well: number
    }
}