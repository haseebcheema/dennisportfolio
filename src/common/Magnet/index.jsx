'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function index({children}) {

    // Refs for the magnet
    const magnet = useRef(null);

    // Magnet effect for the children
    useEffect(() => {
      
      const xTo = gsap.quickTo(magnet.current, "x", {duration: 1.5, ease: "elastic.out(1, 0.3)"});
      const yTo = gsap.quickTo(magnet.current, "y", {duration: 1.5, ease: "elastic.out(1, 0.3)"});
      
      magnet.current.addEventListener('mousemove', (e) => {
          const {clientX, clientY} = e;
          const {width, height, top, left} = magnet.current.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);

          xTo(x * 0.25);
          yTo(y * 0.25);
      })

      magnet.current.addEventListener('mouseleave', (e) => {
          xTo(0);
          yTo(0);
      })
    });


  return (
    // Cloning the children and passing the ref to it
    React.cloneElement(children, {ref:magnet})
  )
}

export default index;
