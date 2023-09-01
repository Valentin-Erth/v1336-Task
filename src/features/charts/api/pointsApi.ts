import axios from "axios";

export const pointsApi={
    getPointsFast(points:string){
        return axios.get<ResponsePointsType[]>(`https://v1336-api-test.onrender.com/getPointsFast?points=${points}`)
    }
}
// types
export type ResponsePointsType = {
    x: string,
    y: number
}
