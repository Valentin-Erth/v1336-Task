import {instance} from "@/common/instance/instance.ts";

export const pointsApi={
    getPointsFast(points:string){
        return instance.get<ResponsePointsType[]>(`getPointsFast?points=${points}`)
    }
}
// types
export type ResponsePointsType = {
    x: string,
    y: number
}
