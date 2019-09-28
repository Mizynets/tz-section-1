import React from 'react';
import style from './index.module.css';

const Header = ({ title, children, }) => {
    return(
        <div className={style.header}>
            <h5 className={style.title}>
                    {title}
                </h5>
               <div>
                   {children}
               </div>
        </div>
    );
};

export default Header;
