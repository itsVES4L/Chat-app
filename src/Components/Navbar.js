import React from 'react';
import styles from "./styles/Navbar.module.css";


const Navbar = ({logOutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
              CHATIFY 
            </div>
            <div  onClick={logOutHandler} className={styles.logout}>
                LogOut
            </div>
            
        </div>
    );
};

export default Navbar;