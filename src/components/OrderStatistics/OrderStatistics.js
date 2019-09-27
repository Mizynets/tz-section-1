import React from 'react';
import style from './index.module.css';
import OrderList from '../OrderList';
import graphic from '../../assets/graphOrderStatistic.png';

const OrderStatistics = () => {
    return (
        <div className={style.orderStatistics}>
        
        <div className={style.header}>
          <h5 className={style.title}>Orders</h5>
            <div className={style.btnWrapper}>
              <button className={style.btn}>Today</button>
              <button className={style.btn}>Montly</button>
              <button className={style.btn}>Annual</button>
            </div>
          </div>

          <div className={style.statistisInfo}>
            <div className={style.graphInfo}>
              <img
              className={style.graphicImg}
              src={graphic}
              alt="orderGraphic"/>
            </div>
      
              <div className={style.orderList}>
                <OrderList />
              </div>
            </div>
            
        </div>
    );
};

export default OrderStatistics;
