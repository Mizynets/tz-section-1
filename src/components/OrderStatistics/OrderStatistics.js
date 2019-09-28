import React from 'react';
import style from './index.module.css';
import OrderList from '../OrderList';
import graphic from '../../assets/graphOrderStatistic.png';
import Header from '../Header';
import HeaderActionBtn from '../HeaderActionBtn';

const OrderStatistics = () => {
    return (
        <div className={style.orderStatistics}>
        <Header title="Orders">
          <HeaderActionBtn btn="toggle"/>
        </Header>

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
