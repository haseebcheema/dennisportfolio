import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

function index({ data }) {
  return (
    <div className={styles.link}>
      <Link href={data.href}>
        {data.item}
      </Link>
    </div>
  )
}

export default index;
