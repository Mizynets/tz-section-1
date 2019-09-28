import React from 'react';
import style from './index.module.css';
import Header from '../Header';

const CardInfoItem = ({
  title,
  period,
  digitalData,
  progressTitle,
  progressIndicator,
  options,
  colorStyle,
}) => {
  return (
    <div className={style.CardInfoItem}>
      <Header title={title}>
      <span 
        className={style.period} 
        style={{ background: colorStyle, }}>
        {period}
        </span>
      </Header>
    
      <div className={style.contentCartInfo}>
        <p className={style.digitalData}>{digitalData}</p>
        <div className={style.progressInfo}>
          <p className={style.progressTitle}>{progressTitle}</p>
          <p className={style.progressIndicator} 
            style={{ color: colorStyle, }}>
            {progressIndicator}%
            <span className={style.options}>{options}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfoItem;
