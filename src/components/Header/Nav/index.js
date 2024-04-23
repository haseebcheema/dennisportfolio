import React from 'react';
import styles from './style.module.scss';
import { title } from 'process';
import Link from 'next/link';

function index() {

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
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
            <div className={styles.header}>
                <p>Navigation</p>
                {/* iterating navItems and passing the data in th form of props to the Link component */}
                {navItems.map((item, index) => {
                    return <Link data={{index, ...item}}></Link>
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default index;
