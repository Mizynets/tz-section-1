import React from 'react';
import style from './index.module.css';
import SmallToDoListItem from 
'../SmallToDoListItem/SmallToDoListItem';

const SmallToDoList = () => {
    return(
        <ul className={style.list}>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Buy a milk"
                done={true}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Go to shop and find some products"
                done={false}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Send documents to Mike"
                extraTime="1"
                done={false}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Go to the doctor or Smith"
                done={false}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Plan vacation"
                done={true}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Create new stuff"
                done={false}
                />
            </li>
            <li className={style.item}>
                <SmallToDoListItem 
                todoText="Call to Anna for dinner"
                done={false}
                />
            </li>
            
        </ul>
    );
};

export default SmallToDoList;
