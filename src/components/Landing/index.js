'use client';

import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function index() {

  // create a reference to the text elements
  const firstText = useRef(null);
  const secondText = useRef(null);

  // create a reference to the slider element
  const slider = useRef(null);

  // set the initial position of the text
  let xPosition = 0;

  // set the direction of the text towards the left
  let direction = -1;

  useEffect(() => {

    // register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // animate the slider element
    gsap.to(slider.current, {
      
      // set the scroll trigger for the slider element
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,

        // update the direction of the text to right when the user scrolls
        onUpdate: e => direction = e.direction * 1
      },
    })

    // start the animation when the component is mounted
    requestAnimationFrame(animate);
  });

  // animation for the text slider
  const animate = () => {
    
    // check if the text is out of the screen towards the left
    if(xPosition <= -100){
      xPosition = 0
    }
    // check if the text is out of the screen towards the right
    else if(xPosition > 0){
      xPosition = -100;
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
          <div ref={slider} className={styles.slider}>
              <p ref={firstText}>Dennis Snellenberg —</p>
              <p ref={secondText}>Dennis Snellenberg —</p>
          </div>
        </div>
        <div className={styles.description}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
            </svg>
            <p>Freelance</p>
            <p>Designer & Developer</p>
        </div>
      </main>
    </div>
  )
}

export default index;
