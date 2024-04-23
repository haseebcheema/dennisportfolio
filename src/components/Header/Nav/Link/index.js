import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

function index({ data, isActive, setSelectedIndicator }) {

  // destructuring the data passed in the form of props
  const {title, href} = data;

  return (
    <div onMouseEnter={() => setSelectedIndicator(href)} className={styles.links}>
      <div className={styles.indicator}>
      </div>

      {/* accessing the data passed in the form of props */}
      <Link href={href}>
          {title}
      </Link>
    </div>
  )
}

export default index;
