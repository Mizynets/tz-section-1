import React from 'react';
import style from './index.module.css';

const MessageListItem = ({
    titleName,
    timeAgo,
    shortMessage,
    date,
}) => {
    return(
        <div className={style.messageListItem}>
            <div className={style.header}>
                <h5 className={style.titleName}>
                    {titleName}
                </h5>
                <p className={style.timeAgo}>
                     {timeAgo}m ago
                </p>
            </div>
            <p className={style.shortMessage}>
            {shortMessage}
            </p>
            <p className={style.date}>
                {date}
            </p>
        </div>
    );
};

export default MessageListItem;

