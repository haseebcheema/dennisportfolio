'use client';

import { useEffect } from 'react';
import Landing from '../components/Landing';
import Projects from '../components/Projects';

import React from 'react';

function page() {

  // Load Locomotive Scroll
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
        <Landing />
        <Projects />
    </main>
  )
}

export default page;
