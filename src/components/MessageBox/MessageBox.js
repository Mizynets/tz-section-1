import React from 'react';
import Header from '../Header';
import MessageList from '../MessageList';
import HeaderActionBtn from '../HeaderActionBtn';
import style from './index.module.css';
import { FaRegEnvelope } from 'react-icons/fa';

const MessageBox = () => {
    return(
  
      <div className={style.messageBox}>
       <Header title="Message">
          <HeaderActionBtn btn="optional"/>
       </Header>
      <div className={style.messageStatus}>
        <div className={style.messageStatusFlex}>
        
            <FaRegEnvelope style={{
               color: '#A29197',
               width: '50px',
               height: 'auto', 
               marginRight: '10px',
                }}/>
  
          <p
          className={style.newMessage}
          >New message</p>
        </div>
        <p className={style.statusMessInfo}>
          You have 22 new message and 16 waiting in draft folder
        </p>
      </div>
       
        <MessageList />
      </div>
    );
  };

export default MessageBox;
