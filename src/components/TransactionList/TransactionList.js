import React from 'react';
import style from './index.module.css';
import TransactionListItem from '../TransactionListItem';

const TransactionList = () => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <div className={style.listItem}>
                    <p className={style.itemText}>
                            No
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
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="green"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="3"
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="yellow"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="4"
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="green"
                />
            </li>
            <li className={style.item}>
            <TransactionListItem 
                 numberId="5"
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="green"
                />
            </li>
            
                <li className={style.item}>
                <TransactionListItem 
                 numberId="6"
                 transaction="Security doors"
                 date="16 Jule 2014"
                 amount="483.00"
                 amountColor="green"
                />
                </li>
                
                
            
        </ul>
    );
};

export default TransactionList;
