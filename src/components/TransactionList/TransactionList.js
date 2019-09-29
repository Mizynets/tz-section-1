import React from 'react';
import style from './index.module.css';
import TransactionListItem from '../TransactionListItem';

const TransactionList = () => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <div className={style.listItem}>
                    <p className={style.itemText}>
                            No.
                    </p>
                    <p className={style.itemText}>
                            Transaction
                    </p>
                    <p className={style.itemText}>
                            Date
                    </p>
                    <p className={style.itemText}>
                        Amount
                    </p>
                </div>
            </li>

            <li className={style.item}>
                <TransactionListItem 
                 numberId="1"
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="green"
                />
            </li>

            <li className={style.item}>
            <TransactionListItem 
                 numberId="2"
                 transaction="Wardrobes"
                 date="10 Jule 2014"
                 amount="327.00"
                 amountColor="green"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="3"
                 transaction="Set of tools"
                 date="12 Jule 2014"
                 amount="125.00"
                 amountColor="yellow"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="4"
                 transaction="Panoramic pictures"
                 date="22 Jule 2013"
                 amount="344.00"
                 amountColor="green"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="5"
                 transaction="Phones"
                 date="24 Jule 2013"
                 amount="235.00"
                 amountColor="green"
                />
            </li>
            
                <li className={style.item}>
                <TransactionListItem 
                 numberId="6"
                 transaction="Monitors"
                 date="26 Jule 2013"
                 amount="100.00"
                 amountColor="green"
                />
                </li>
        </ul>
    );
};

export default TransactionList;
