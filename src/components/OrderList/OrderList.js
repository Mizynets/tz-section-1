import React from 'react';
import style from './index.module.css';
import { IoIosFlash } from 'react-icons/io';
import { IoMdReturnRight } from 'react-icons/io';
import { IoMdReturnLeft } from 'react-icons/io';
import OrderListItem from '../OrderListItem/OrderListItem';

const OrderList = () => {
    return(
        <div className={style.orderList}>
            <ul className={style.list}>
                <li className={style.item}>
                    <OrderListItem 
                    digitalData="2,346"
                    title="Total orders in period"
                    progressIndicator="48%"
                    option={
                    <IoMdReturnRight 
                        style={{
                            transform: 'rotate(-90deg)',
                            color: '#1AB394',
                        }}                    
                    />
                    }
                    />
                </li>
                <li className={style.item}>
                    <OrderListItem 
                    digitalData="4,422"
                    title="Orders in last month"
                    progressIndicator="60%"
                    option={
                        <IoMdReturnLeft
                        style={{
                            transform: 'rotate(-90deg)',
                            color: '#1AB394',
                        }}                    
                    />
                    }
                    />
                </li>
                <li className={style.item}>
                    <OrderListItem 
                    digitalData="9,180"
                    title="Monthly income from orders"
                    progressIndicator="22%"
                    option={
                    <IoIosFlash 
                    style={{
                        color: '#1AB394',
                    }}  
                    />
                    }
                    />
                </li>
            </ul>
        </div>
    );
};

export default OrderList;
