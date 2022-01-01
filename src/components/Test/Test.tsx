import React from 'react';
import SuperButton from '../../common/SuperButton/SuperButton';
import SuperCheckbox from '../../common/SuperCheckBox/SuperCheckBox';
import SuperInput from "../../common/SuperInput/SuperInput";
import s from './Test.module.css'

const Test = () => {
    return (
        <div className={s.test}>
            <h1>Test</h1>
            <SuperInput/>
            <SuperCheckbox/>
            <SuperButton children={'button'}/>
        </div>
    );
};

export default Test;