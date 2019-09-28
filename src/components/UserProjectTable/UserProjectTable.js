import React from 'react';
import Header from '../Header';
import HeaderActionBtn from '../HeaderActionBtn';
import style from './index.module.css';
import UserProjectList from '../UserProjectList/UserProjectList';

const UserProjectTable = () => {
    return(
      <div className={style.userProjectList}>
       <Header title="User Project List">
          <HeaderActionBtn btn="optional"/>
       </Header>

        <UserProjectList />
      </div>
    );
  };

export default UserProjectTable;
