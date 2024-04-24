'use client';

import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Nav from './Nav'
import {AnimatePresence } from 'framer-motion';

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
      <div className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
              <p className={styles.codeBy}>Code by</p>
              <p className={styles.dennis}>Dennis</p>
              <p className={styles.snellenberg}>Snellenberg</p>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.elems}>
              <a>Work</a>
              <div className={styles.indicator}></div>
          </div>
          <div className={styles.elems}>
              <a>About</a>
              <div className={styles.indicator}></div>
          </div>
          <div className={styles.elems}>
              <a>Contact</a>
              <div className={styles.indicator}></div>
          </div>
      </div>
      </div>
      {/* show the Burger Menu */}
      <div className={styles.headerButtonContainer}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive? styles.activeBurger : ""}`}>
          </div>
        </div>
      </div>

      {/* if the menu is active, show the Nav component */}  
      <AnimatePresence mode='wait'>
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}

export default index;
