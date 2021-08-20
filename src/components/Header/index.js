  
import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
            </div>
            <div className="header-user">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"/>
            </div>
        </header>
    )
}