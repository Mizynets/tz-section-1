/* eslint-disable complexity */
/* eslint-disable no-extra-semi */
import React from 'react';
import style from './index.module.css';
import { FaTimes } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';

const HeaderActionBtn = ({ btn, }) => {
    switch(btn) {
        case 'optional': 
        return(
            <div className={style.btnOptional}>
            <button className={style.optionalBtn}>
              <FaChevronUp
                style={{
                     width: '10px',
                     height: '10px',
                     color: '#C4C4C4',
                     }}
              />
            </button>
            <button className={style.optionalBtn}>
              <FaWrench
                style={{ 
                    width: '10px',
                    height: '10px',
                    color: '#C4C4C4',
                 }}
              />
            </button>
            <button className={style.optionalBtn}>
              <FaTimes
                style={{ 
                    width: '10px',
                    height: '10px',
                    color: '#C4C4C4',
                 }}
              />
            </button>
          </div>
        );

        case 'toggle':
            return(
                <div className={style.btnWrapper}>
                    <button className={style.btn}>Today</button>
                    <button className={style.btn}>Montly</button>
                    <button className={style.btn}>Annual</button>
                  </div>
                 );
        default: return null;
    };  
};

export default HeaderActionBtn;
