/* eslint-disable yoda */
/* eslint-disable complexity */
import React from 'react';
import style from './index.module.css';
import { FaRegClock } from 'react-icons/fa';
import { FaLevelUpAlt } from 'react-icons/fa';

const UserProjectItem = ({
    status,
    date,
    user,
    value,
}) => {

    const statusStyle = status === 'Canceled' 
    ? `${style.statusCancel}`
    : status === 'Completed' 
    ? `${style.statusComplete}` 
    : null;

    return(
        <div className={style.flexItem}> 
            <p 
            className={`${style.itemText}`}>
            <span className={statusStyle}>
                {status}
            </span>
            </p>
            
            <p className={style.itemText}>
                <span className={style.span}>
                    <FaRegClock 
                    style={{
                        marginRight: '3px',
                    }}
                    />
                    {date}
                </span>
            </p>
           
            <p className={style.itemText}>
                <span>{user}</span>
            </p>
           
            <p className={style.itemText}
            style={{ color: '#1CB394', }}>
                <span className={style.span}>
                <FaLevelUpAlt 
            style={{  
            color: '#1CB394',
            marginRight: '3px',
            }}
            />
            {value}%
                </span>
            </p>            
        </div>
    );
};

export default UserProjectItem;
