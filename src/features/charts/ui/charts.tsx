import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Button, InputNumber} from "antd";
import {useState} from "react";
import {pointsThunks} from "@/features/charts/model/points.slice.ts";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './charts.module.css'

export const Charts = () => {
    const dispatch = useAppDispatch()
    const [points, setPoints] = useState<number | null>(1000)
    const data = useAppSelector((state) => state.points.pointsFast);
    const handleLoadPoints = () => {
        dispatch(pointsThunks.fetchPointsFast(String(points)));
    }
    const options = {
        chart: {
            type: 'line',
            step: 'left'
        },
        title: {
            text: 'Some Chart'
        },
        xAxis: {
            title: {
                text: 'шкала времени'
            },
            type: 'datetime',
            tickInterval: 3600 * 1000, // one hour
            labels: {
                format: '{value:%H:%M}'
            },
        },
        yAxis: {
            title: {
                text: 'Значение точек'
            }
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%A, %d %B %Y, %H:%M:%S} - {point.y}',
        },
        series: [{
            data: data.map(point => [Date.parse(point.x), point.y]),
            color: 'red',
            name: 'My points'
        }]
    };
    return (
        <div className={s.container}>
            <div>
                <span>кол-во точек :</span> <InputNumber min={1} max={1000000} defaultValue={1000}
                                                         onChange={setPoints}/>
                <Button onClick={handleLoadPoints}>загрузить точки</Button>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    );
};

