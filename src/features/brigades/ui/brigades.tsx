import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {Brigada} from "@/features/brigades/ui/brigada/brigada.tsx";
import s from './brigades.module.css'
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {selectfilteredBrigades} from "@/features/brigades/model/brigades.selector.ts";
import {useEffect} from "react";
import {brigadesThunks} from "@/features/brigades/model/brigades.slice.ts";
import {toast} from "react-toastify";
// import {FixedSizeGrid as Grid} from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';

export const Brigades = () => {
    const dispatch = useAppDispatch()
    const filteredBrigades = useAppSelector(selectfilteredBrigades);

    useEffect(() => {
        dispatch(brigadesThunks.getBrigades()).unwrap().then(() => toast.success('sucsess load'))
    }, []);

    return (
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
    );
};

// export const Brigades = () => {
//     const dispatch = useAppDispatch();
//     const filteredBrigades = useAppSelector(selectfilteredBrigades);
//     const itemWidth = window.innerWidth < 600 ? window.innerWidth - 30 : 270; // Width of each item
//     const itemHeight = window.innerHeight < 600 ? window.innerHeight / 2 - 30 : 120; // Height of each item
//     const numColumns = Math.floor(window.innerWidth / itemWidth); // Number of columns based on window width
//     useEffect(() => {
//         dispatch(brigadesThunks.getBrigades())
//             .unwrap()
//             .then(() => toast.success('Success load'));
//     }, []);
//     const fetchMoreData = useCallback(() => {
//         dispatch(brigadesThunks.getBrigades());
//     }, [dispatch]);
//     const Row = ({columnIndex, rowIndex, style}: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {
//         const index = rowIndex * numColumns + columnIndex; // Calculate the index based on row and column
//         const brigades = filteredBrigades[index];
//
//         return (
//             <div style={style}>
//                 <Brigada
//                     id={brigades.id}
//                     brigadeName={brigades.brigade_name}
//                     departmentId={brigades.department.id}
//                     connectionStateId={brigades.connectionStateId}
//                     cluster={brigades.position.cluster}
//                     field={brigades.position.field}
//                     well={brigades.position.well}
//                 />
//             </div>
//         );
//     };
//
//     const isItemLoaded = (index: number) => index < filteredBrigades.length;
//     const loadMoreItems = isItemLoaded ? () => {
//     } : fetchMoreData;
//
//     return (
//         <div>
//             <Button className={s.btn} icon={<ArrowRightOutlined/>}> <NavLink to={'charts'}>Перейти на
//                 график</NavLink> </Button>
//             <InfiniteLoader
//                 isItemLoaded={isItemLoaded}
//                 itemCount={1000} // Assumption: Maximum items in the list
//                 loadMoreItems={loadMoreItems}
//             >
//                 {({onItemsRendered, ref}) => (
//                     <div className={s.container}>
//                         <Grid
//                             columnCount={numColumns}
//                             columnWidth={itemWidth}
//                             height={itemHeight}
//                             rowCount={Math.ceil(filteredBrigades.length / numColumns)} // Number of rows in the grid
//                             rowHeight={120} // Height of each row
//                             width={window.innerWidth} // Width of the grid
//                             ref={ref}
//                             onItemsRendered={({visibleRowStartIndex, visibleRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex}) => {
//                                 onItemsRendered({
//                                     overscanStartIndex: visibleRowStartIndex * numColumns + visibleColumnStartIndex,
//                                     overscanStopIndex: visibleRowStopIndex * numColumns + visibleColumnStopIndex,
//                                     visibleStartIndex: visibleRowStartIndex * numColumns + visibleColumnStartIndex,
//                                     visibleStopIndex: visibleRowStopIndex * numColumns + visibleColumnStopIndex,
//                                 });
//                             }}
//                         >
//                             {Row}
//                         </Grid>
//                     </div>
//                 )}
//             </InfiniteLoader>
//         </div>
//     );
// };
