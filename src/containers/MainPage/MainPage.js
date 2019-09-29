/* eslint-disable eol-last */
import React from 'react';
import style from './index.module.css';
import CardInfoList from '../../components/CardInfoList';
import OrderStatistics from '../../components/OrderStatistics';
import UserProjectTable from '../../components/UserProjectTable';
import MessageBox from '../../components/MessageBox';
import SmallTodo from '../../components/SmallTodo';
import InfoMap from '../../components/InfoMap';
import { FaCogs } from 'react-icons/fa';

const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <div className={style.cardInfoList}>
                <CardInfoList />
            </div>
            <div className={style.sideDrawer}>
             <FaCogs style={{ color: '#FFF', }}/>
            </div>
            <div className={style.orderStatistics}>
                <OrderStatistics />
            </div>
            <div className={style.mainContent}>
                <div className={style.messages}>
                    <MessageBox />
                </div>
                <div className={style.leftSideContent}>
                    <div className={style.listItem}>
                        <div className={style.userList}>
                            <UserProjectTable />
                        </div>
                        <div className={style.toDoList}>
                            <SmallTodo />
                        </div>
                    </div>
                    <div className={style.transactions}>
                        <InfoMap />
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default MainPage;

