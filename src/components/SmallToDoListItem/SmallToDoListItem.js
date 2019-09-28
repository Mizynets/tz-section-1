/* eslint-disable complexity */

import React from 'react';
import style from './index.module.css';
import { FaRegClock } from 'react-icons/fa';

const SmallToDoListItem = ({ todoText, extraTime, done, }) => {

    const labelStyle = done 
    ? `${style.done} ${style.todoLabel}`
    : `${style.todoLabel}`;

    return(
        <div className={style.todoListItem}>
            <label className={labelStyle}>
                {todoText}
                {
                    extraTime && <span className={style.spanExtra}>
                    <FaRegClock 
                        style={{
                            marginRight: '3px',
                        }}
                        />
                    {extraTime} mins
                </span>
                }
                
                <input 
                className={style.todoInput}
                type="checkbox"
                defaultChecked={done}
                />
                <span className={style.todoSpan}>
                </span>
            </label>
        </div>
    );
};

export default SmallToDoListItem;
