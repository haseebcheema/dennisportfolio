'use client';

import React from 'react';
import styles from './style.module.scss';
import {motion} from 'framer-motion';

function index() {

    // Initial and target path for the curve
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

    // Curve animation
    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        },

        exit: {
            d: initialPath,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
        }
    }

  return (
    <svg className={styles.svgCurve}>
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}

export default index;
