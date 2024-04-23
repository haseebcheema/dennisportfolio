'use client';

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';

function index() {

    // state to track if the menu is active or not
    const [isActive, setIsActive] = useState(false);

    // get the current pathname
    const pathname = usePathname();

    // close the menu if the pathname changes
    useEffect(() => {
        if(isActive) setIsActive(false);
    }, [pathname])

  return (
    <div className={styles.headerButtonContainer}>
      <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
        <div className={`${styles.burger} ${isActive? styles.activeBurger : ""}`}>
        </div>
      </div>
    </div>
  )
}

export default index;
