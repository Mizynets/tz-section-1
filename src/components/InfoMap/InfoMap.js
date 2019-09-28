import React from 'react';
import style from './index.module.css';
import Header from '../Header';
import HeaderActionBtn from '../HeaderActionBtn';
import transactionMap from '../../assets/transactionMap.png';
import TransactionList from '../TransactionList';

const InfoMap = () => {
    return (
        <div className={style.infoMap}>
            <Header title="Transaction worldwide">
                <HeaderActionBtn btn="optional"/>
            </Header>
            <div className={style.transactionInfo}>
                <div className={style.transactionList}>
                    <TransactionList />
                </div>
                <div className={style.transactionMap}>
                    <img className={style.mapImg} src={transactionMap}/>
                </div>
            </div>
        </div>
    );
};

export default InfoMap;
