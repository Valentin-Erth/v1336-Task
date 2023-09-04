import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Brigada} from "@/features/brigades/ui/brigada/brigada.tsx";
import s from './brigades.module.css'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {selectfilteredBrigades} from "@/features/brigades/model/brigades.selector.ts";
import {useEffect, useState} from "react";
import {brigadesThunks} from "@/features/brigades/model/brigades.slice.ts";
import {toast} from "react-toastify";
import {useWindowDimensions} from "@/common/hooks/useDimensWindow.tsx";
import {BrigadeType} from "@/features/brigades/api/brigadesApi.ts";
import InfiniteScroll from 'react-infinite-scroll-component';

export const Brigades = () => {
    const dispatch = useAppDispatch()
    const filteredBrigades = useAppSelector(selectfilteredBrigades);
    const dimensions = useWindowDimensions();
    const cardWidth = 250;
    const cardHeight = 200;
    const countCardsOnDisplay = Math.floor(dimensions.width / cardWidth) * Math.floor(dimensions.height / cardHeight)
    const [display, setDisplay] = useState<BrigadeType[]>(filteredBrigades.slice(0, countCardsOnDisplay))
    const fetchData = () => {
        setDisplay(prevState => filteredBrigades.slice(0, prevState.length + countCardsOnDisplay));
    }

    useEffect(() => {
        dispatch(brigadesThunks.getBrigades()).unwrap().then(() => toast.success('success load'))
    }, [dispatch]);
    useEffect(() => {
        setDisplay(filteredBrigades.slice(0, countCardsOnDisplay));
    }, [countCardsOnDisplay, filteredBrigades]);

    return (
<div className={s.container}>
    <InfiniteScroll
        className={s.containerScroll}
        dataLength={display.length}
        next={fetchData}
        hasMore={display.length < filteredBrigades.length}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{textAlign: 'center'}}>
                <b>No more data to load.</b>
            </p>
        }
    >
        {display && display.map(el => (
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
    </InfiniteScroll>
</div>

    );
};

