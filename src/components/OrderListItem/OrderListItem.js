import React from 'react';
import style from './index.module.css';


const OrderListItem = ({
    digitalData,
    title,
    progressIndicator,
    option,
}) => {

    return(
        <div className={style.orderListItem}>
        <p className={style.digitalData}>
           {digitalData} 
        </p>
        <div className={style.progressInfo}>
          <p className={style.progressTitle}>{title}</p>
          <p className={style.progressIndicator}>
              {progressIndicator}
            <span className={style.options}>
                {option}
            </span>
          </p>
        </div>
        <div className={style.progressLine}>
            <div 
            className={style.innerLine}
            style={{ width: progressIndicator, }}>
            </div>
        </div>
      </div>
    );
};

export default OrderListItem;
