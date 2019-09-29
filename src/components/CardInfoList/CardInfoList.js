import React from 'react';
import style from './index.module.css';
import CardInfoItem from '../CardInfoItem/CardInfoItem';
import { FaBolt } from 'react-icons/fa';
import { FaLevelUpAlt } from 'react-icons/fa';
import { FaLevelDownAlt } from 'react-icons/fa';
import uid from 'uid';



const CardInfoList = () => {

    const cardInfoArray = [
        {
            title: 'Income',
            period: 'Montly',
            digitalData: '40 886, 200',
            progressTitle: 'Total income',
            progressIndicator: 98,
            colorStyle: '#1C84C6',
            options: <FaBolt style={ { color: '#1C84C6', }} />,
         },
         {
            title: 'Orders',
            period: 'Annual',
            digitalData: '275,800',
            progressTitle: 'New orders',
            progressIndicator: 20,
            colorStyle: '#23C6C8',
            options: <FaLevelUpAlt 
            style={
                    { 
                        color: '#23C6C8',
                    }
                }/>,
         },
         {
            title: 'Vistits',
            period: 'Today',
            digitalData: '106,120',
            progressTitle: 'New visits',
            progressIndicator: 44,
            colorStyle: '#1AB394',
            options: <FaLevelUpAlt 
            style={
                    {
                        color: '#1AB394',
                    }
                }/>,
         },
         {
            title: 'User activity',
            period: 'Low value',
            digitalData: '80,600',
            progressTitle: 'In first month',
            progressIndicator: 38,
            colorStyle: '#ED5769',
            options: <FaLevelDownAlt 
            style={
                {
                    color: '#ED5769',
                }
            }/>,
         }
    ];

    const listItem = cardInfoArray.map(el => {
        const {
            title,
            period,
            digitalData,
            progressTitle,
            progressIndicator,
            options,
            colorStyle,
          } = el;

        return <li key={uid()} className={style.listItem}>
            <CardInfoItem 
            title={title}
            period={period}
            digitalData={digitalData}
            progressTitle={progressTitle}
            progressIndicator={progressIndicator}
            options={options}
            colorStyle={colorStyle}
            />
        </li>;
    });

    return(
        <div>
            <ul className={style.cardInfoList}>
              {listItem}
            </ul>
        </div>
    );
};

export default CardInfoList;
