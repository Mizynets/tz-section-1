import React from 'react';
import style from './index.module.css';

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
      <div className={style.header}>
        <h5 className={style.title}>{title}</h5>
        <span 
        className={style.period} 
        style={{ background: colorStyle, }}>
        {period}
        </span>
      </div>

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
