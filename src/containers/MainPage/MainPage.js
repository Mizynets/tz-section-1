/* eslint-disable eol-last */
import React from 'react';
import style from './index.module.css';
import CardInfoList from '../../components/CardInfoList';
import OrderStatistics from '../../components/OrderStatistics';

const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <div className={style.cardInfoList}>
                <CardInfoList />
            </div>
            <div className={style.orderStatistics}>
                <OrderStatistics />
            </div>
            <div className={style.mainContent}>
                <div className={style.messages}>

                </div>
                <div className={style.leftSideContent}>
                    <div className={style.listItem}>
                        <div className={style.userList}>

                        </div>
                        <div className={style.toDoList}>

                        </div>
                    </div>
                    <div className={style.transactions}>

                    </div>
                </div>            
            </div>
        </div>
    );
};

export default MainPage;