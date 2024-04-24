'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import Nav from './Nav'
import Magnet from '../../common/Magnet';
import {AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function index() {

    // state to track if the menu is active or not
    const [isActive, setIsActive] = useState(false);

    // get the current url or pathname
    const pathname = usePathname();

    // create a reference to the button element
    const button = useRef(null);

    // close the menu whenever the pathname changes
    useEffect(() => {
        if(isActive) setIsActive(false);
    }, [pathname]);

    // register the ScrollTrigger plugin and animate the button element
    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(button.current, {
          scrollTrigger: {
              trigger: document.documentElement,
              start: 0,
              end: window.innerHeight,
              onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
              onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
          }
      });
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Magnet>
          <div className={styles.logo}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
                <p className={styles.codeBy}>Code by</p>
                <p className={styles.dennis}>Dennis</p>
                <p className={styles.snellenberg}>Snellenberg</p>
            </div>
          </div>
        </Magnet>
        <div className={styles.nav}>
          <Magnet>
            <div className={styles.elems}>
                <a>Work</a>
                <div className={styles.indicator}></div>
            </div>
          </Magnet>
          <Magnet>
            <div className={styles.elems}>
                <a>About</a>
                <div className={styles.indicator}></div>
            </div>
          </Magnet>
          <Magnet>
            <div className={styles.elems}>
                <a>Contact</a>
                <div className={styles.indicator}></div>
            </div>
          </Magnet>
      </div>
      </div>
      {/* show the Burger Menu */}
        <div ref={button} className={styles.headerButtonContainer}>
      <Magnet>
          <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
            <div className={`${styles.burger} ${isActive? styles.activeBurger : ""}`}>
            </div>
          </div>
      </Magnet>
        </div>

      {/* if the menu is active, show the Nav component */}  
      <AnimatePresence mode='wait'>
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}

export default index;
