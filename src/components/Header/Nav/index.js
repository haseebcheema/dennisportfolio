'use client';

import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from './Link';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import { motion } from 'framer-motion';

function index() {

    // get the current url or pathname
    const pathname = usePathname();

    // state to track the selected indicator in the menu
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    // array of navigation items
    const navItems = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Work',
            href: '/work'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ]

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
            <div className={styles.header}>
                <h5>Navigation</h5>
            </div>
            {/* iterating navItems and passing the data in the form of props to the Link component */}
            {navItems.map((data, index) => {
                return <Link key={index} data={{index, ...data}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                })
            }
        </div>
        <div className={styles.footer}>
            <div className={styles.socials}>
                <h5>Socials</h5>
            </div>
            <div className={styles.links}>
                <a href='https://www.awwwards.com/dennissnellenberg/' target='_blank'>Awwwards</a>
                <a href='https://www.instagram.com/codebydennis/' target='_blank'>Instagram</a>
                <a href='https://twitter.com/codebydennis' target='_blank'>Twitter</a>
                <a href='https://www.linkedin.com/in/dennissnellenberg/' target='_blank'>LinkedIn</a>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default index;
