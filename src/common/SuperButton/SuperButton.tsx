import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const Button: React.FC<ButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {


    return (
        <button
            className={s.SuperBtn}
            {...restProps}
        />
    )
}

export default Button