'use client';

import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { slide, scale } from '../../anim';
import { motion } from 'framer-motion';

function index({ data, isActive, setSelectedIndicator }) {

  // destructuring the data passed in the form of props
  const {index, title, href} = data;

  return (
    <motion.div onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit" className={styles.links}>
      <div className={styles.indicator}>
      </div>

      {/* accessing the data passed in the form of props */}
      <Link href={href}>
          {title}
      </Link>
    </motion.div>
  )
}

export default index;
