'use client';

import React, { useRef } from 'react';
import styles from './style.module.scss';
import Magnet from '../../common/Magnet';
import { motion, useInView } from 'framer-motion';
import {slideUp, opacity} from './anim';

function index() {
    // Text for the description
    const firstPara = 'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
    const secondPara = 'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.';

    const description = useRef(null);

    const isInView = useInView(description)

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
            {/* Splitting the first paragraph into words and wrapping them in a span */}
            {
                firstPara.split(' ').map((word, index) => {
                return <span className='styles.mask'>
                    <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}> {word} </motion.span>
                </span>
                })
            }
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> {secondPara} </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
        <Magnet>
                <div className={styles.button}>
                    <p>About Me</p>
                </div>
        </Magnet>
        </div>
      </div>
    </div>
  )
}

export default index;
