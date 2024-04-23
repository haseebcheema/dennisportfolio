'use client';

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Nav from './Nav'

function index() {

    // state to track if the menu is active or not
    const [isActive, setIsActive] = useState(false);

    // get the current url or pathname
    const pathname = usePathname();

    // close the menu whenever the pathname changes
    useEffect(() => {
        if(isActive) setIsActive(false);
    }, [pathname])

  return (
    <>
      {/* show the Burger Menu */}
      <div className={styles.headerButtonContainer}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive? styles.activeBurger : ""}`}>
          </div>
        </div>
      </div>

      {/* if the menu is active, show the Nav component */}
      {/* {isActive && <Nav />} */}
      <Nav/>
    </>
  )
}

export default index;
