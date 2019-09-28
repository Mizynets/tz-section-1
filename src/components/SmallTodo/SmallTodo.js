import React from 'react';
import style from './index.module.css';
import Header from '../Header';
import HeaderActionBtn from '../HeaderActionBtn';
import SmallToDoList from '../SmallToDoList/SmallToDoList';

const SmallTodo = () => {
    return(
        <div className={style.smallToDo}>
                <Header title="Small todo list">
                    <HeaderActionBtn btn="optional"/>
                </Header>
                <SmallToDoList />
        </div>
    );
};

export default SmallTodo;
