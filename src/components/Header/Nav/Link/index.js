import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

function index({ data }) {
  return (
    <div className={styles.link}>
      <div className={styles.indicator}>
      </div>

      {/* accessing the data passed in the form of props */}
      <Link href={data.href}>
          {data.title}
      </Link>
    </div>
  )
}

export default index;
