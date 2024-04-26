'use client';

import React from 'react';
import styles from './style.module.scss';
import Magnet from '../../common/Magnet';

function index() {

    // Text for the description
    const firstPara = 'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
    const secondPara = 'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.';

  return (
    <div className={styles.description}>
      <div className={styles.body}>
        <p>
            {/* Splitting the first paragraph into words and wrapping them in a span */}
            {
                firstPara.split(' ').map((word, index) => {
                return <span className='styles.mask'>
                    <span> {word} </span>
                </span>
                })
            }
        </p>
        <p> {secondPara} </p>
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
