'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';

function index() {

  // create a reference to the text elements
  const firstText = useRef(null);
  const secondText = useRef(null);

  // set the initial position of the text
  let xPosition = 0;

  // set the direction of the text towards the left
  let direction = -1;

  useEffect(() => {
    // start the animation when the component is mounted
    requestAnimationFrame(animate);
  });

  // animation for the text slider
  const animate = () => {
    
    // check if the text is out of the screen
    if(xPosition <= -100){
      xPosition = 0
    }
    
    // set the position of the text on the x-axis
    gsap.set(firstText.current, {xPercent: xPosition});
    gsap.set(secondText.current, {xPercent: xPosition});

    // update the position of the text on the x-axis towards the left
    xPosition += 0.06 * direction;

    // call and update the animation again for the next repaint
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
