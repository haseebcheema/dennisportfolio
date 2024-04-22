'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';

function index() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPosition = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animate);
  });

  const animate = () => {
    
    if(xPosition <= -100){
      xPosition = 0
    }
     
    gsap.set(firstText.current, {xPercent: xPosition});
    gsap.set(secondText.current, {xPercent: xPosition});
    xPosition += 0.1 * direction;
    requestAnimationFrame(animate);
  }

  return (
    <div>
      <main className={styles.landing}>
      <Image
        src="/images/DSC07033.jpg" 
        fill={true}
        alt="personal-image"
      />
      <div className={styles.slidercontainer}>
        <div className={styles.slider}>
            <p ref={firstText}>Dennis Snellenberg —</p>
            <p ref={secondText}>Dennis Snellenberg —</p>
        </div>
      </div>
      </main>
    </div>
  )
}

export default index;
