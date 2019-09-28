import React from 'react';
import style from './index.module.css';
import MessageListItem from '../MessageListItem';

const MessageList = () => {
  return (
      <ul className={style.list}>
        <li className={style.item}>
            <MessageListItem 
             titleName="Monica Smith"
             timeAgo="1"
             shortMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore sit temporibus magni atque."
             date="Today 5:60 pm - 12.06.2014"
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Jogn Angel"
             timeAgo="2"
             shortMessage="There are many variatios of passeges of Lorem Ipsum avaible"
             date="Today 2:23 pm - 11.06.2014"
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Jessica Ocean"
             timeAgo="5"
             shortMessage="Contrary to popular belief. Lorem Ipsum"
             date="Today 1:00 pm - 08.06.2014"
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Monica Jackson"
             timeAgo="5"
             shortMessage="The genereted Lorem Ipsum is therefore"
             date="Yestarday 8:48 pm - 10.06.2014"
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Anna Legend"
             timeAgo="5"
             shortMessage="All the Lorem Ipsum generators on the Internet tend to repeat"
             date="Yestarday 8:48 pm - 10.06.2014"             
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Demian Nowak"
             timeAgo="5"
             shortMessage="elit. Reiciendis labore sit temporibus magni atque."
             date="Yestarday 8:48 pm - 10.06.2014"             
            />
        </li>
        <li className={style.item}>
            <MessageListItem 
             titleName="Gary Smith"
             timeAgo="5"
             shortMessage="Reiciendis labore sit temporibus magni atque."
             date="Yestarday 8:48 pm - 10.06.2014"             
            />
        </li>
      </ul>
  );
};

export default MessageList;
