import {Select} from "antd";
import s from './baseSelect.module.css'
type OptionType = { value: number; label: string }
type BaseSelectPropsType={
    title: string
    options: OptionType[]
    onChange?: (value: number | undefined) => void
    }
export const BaseSelect = ({options,title,onChange}:BaseSelectPropsType) => {
    return (
        <div className={s.container}>
            <span>{title}</span>
            <Select
            defaultValue={null}
            style={{width: "150px"}}
            allowClear
            options={options}
            onChange={onChange}/>
        </div>
    );
};

