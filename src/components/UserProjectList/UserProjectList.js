import React from 'react';
import style from './index.module.css';
import UserProjectItem from '../UserProjectItem';

const UserProjectList = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <div className={style.flexItem}>
          
          <p className={`${style.itemText}`}>
            Status
          </p>

          <p className={style.itemText}>
              Date
          </p>

          <p className={style.itemText}>
            User
          </p>

          <p className={style.itemText}>
            Value
          </p>
          
        </div>
      
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Pending...'
          date='11:20pm'
          user='Samantha'
          value='24'
        />
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Canceled'
          date='10:40am'
          user='Monica'
          value='66'
        />
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Pending...'
          date='01:30pm'
          user='Jhon'
          value='54'
        />
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Pending...'
          date='02:20pm'
          user='Angels'
          value='12'
        />
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Completed'
          date='04:10am'
          user='Amelia'
          value='66'
        />
      </li>
      <li className={style.item}>
        <UserProjectItem
          status='Pending...'
          date='12:08am'
          user='Damian'
          value='23'
        />
      </li>
    </ul>
  );
};

export default UserProjectList;
