import {Select} from "antd";

type OptionType = { value: number; label: string }
type BaseSelectPropsType={
    title: string
    options?: OptionType[]
    onChange?: (value: number | undefined) => void
    }
export const BaseSelect = ({options,title,onChange}:BaseSelectPropsType) => {
    return (
        <div>
            <span>{title}</span>
            <Select
            defaultValue={null}
            style={{width: "200"}}
            allowClear
            options={options}
            onChange={onChange}/>
        </div>
    );
};

