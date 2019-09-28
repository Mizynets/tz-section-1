/* eslint-disable yoda */
/* eslint-disable complexity */
import React from 'react';
import style from './index.module.css';

const TransactionListItem = ({
    numberId,
    transaction,
    date,
    amount,
    amountColor,
}) => {

    const amountStyle = amountColor === 'green' 
    ? `${style.amountColorGr}`
    : amountColor === 'yellow' 
    ? `${style.amountColorYe}` 
    : null;

    return (
        <div className={style.listItem}>
                <p className={style.itemText}>
                        {numberId}
                </p>
                <p className={style.itemText}>
                        {transaction}
                </p>
                <p className={style.itemText}>
                        {date}
                </p>
                <p className={style.itemText}>
                    <span 
                    className={`${style.itemSpan} ${amountStyle}`}>
                        ${amount}
                    </span>
                </p>
        </div>
    );
};

export default TransactionListItem;
