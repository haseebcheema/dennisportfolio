import React from 'react';
import styles from './style.module.scss';
import Link from './Link';

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
                <h5>Navigation</h5>
            </div>
            {/* iterating navItems and passing the data in th form of props to the Link component */}
            {navItems.map((data, index) => {
                return <Link className={styles.a} key={index} data={{index, ...data}}/>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default index;
